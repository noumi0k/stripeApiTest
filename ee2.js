const stripe = require("stripe")("sk_test_F2mp9ghsK2oDx107StBpYm6F00r0jKy8du");

stripe.products.update(
  'prod_FJkocs1TH8ew3k',
   attributes: ["name"],
	function(err, product) {
    // asynchronously called
  }
);
