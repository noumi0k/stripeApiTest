const stripe = require("stripe")("sk_test_F2mp9ghsK2oDx107StBpYm6F00r0jKy8du");

stripe.checkout.sessions.create({
  success_url: "https://example.com/success",
  cancel_url: "https://example.com/cancel",
  payment_method_types: ["card"],
  line_items: [{
    name: "X-shirt",
    description: "Comfortable cotton t-shirt",
    amount: 1500,
    currency: "jpy",
    quantity: 2
  }]
}, function(err, session) {
  console.log("session :",session)
	// asynchronously called
});
