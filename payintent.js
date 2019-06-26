const stripe = require("stripe")("sk_test_F2mp9ghsK2oDx107StBpYm6F00r0jKy8du");

stripe.paymentIntents.create({
  amount: 2000,
  currency: 'jpy',
  payment_method_types: ['card'],
}, function(err, paymentIntent) {
  console.log("payment: ",paymentIntent)
	// asynchronously called
});
