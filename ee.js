const stripe = require("stripe")("sk_test_F2mp9ghsK2oDx107StBpYm6F00r0jKy8du");

stripe.products.create({
  name: 'E-shirt',
  type: 'good',
  description: 'Comfortable cotton t-shirt',
  attributes: ["name"],
  metadata: {item_id: '003'}
}, function(err, product) {
  // asynchronously called
});
