const stripe = require("stripe")("sk_test_F2mp9ghsK2oDx107StBpYm6F00r0jKy8du");

stripe.products.retrieve(
  'prod_FIJFgpT2z6pWkT',
  function(err, product) {
    // asynchronously called
	console.log('error :',err)
	console.log('product :',product)
  }
);
