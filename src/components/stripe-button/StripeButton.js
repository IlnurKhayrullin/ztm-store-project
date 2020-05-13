import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_Umb93law2t4p9vm6ziydyzqO00RDr6kMn6";
  const onToken = (token) => {
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Portfolio React Store"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`{Your total is $${price}}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton