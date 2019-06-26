const stripe = require("stripe")("sk_test_F2mp9ghsK2oDx107StBpYm6F00r0jKy8du");

stripe.products.create({
  name: 'T-shirt',
  type: 'good',
  description: 'Comfortable cotton t-shirt',
  attributes: ['size', 'gender'],
  metadata: {'item_id': '6735'}
}, function(err, product) {
  // asynchronously called
  console.log("log: ",product)
});
