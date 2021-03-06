import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebaseUtils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setCurrentUser } from "./redux/user/user-actions";
import { selectCurrentUser } from "./redux/user/user-selectors";

import HomePage from "./pages/homepage/HomePage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/SignInAndSignUp";
import CheckoutPage from "./pages/checkout/CheckoutPage";

import "./App.css";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const dispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, dispatchToProps)(App);
