const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");


(async () => {
	stripe.customers.list(
	{ limit: 3 },
	function(err, customers) {
		// asynchronously called
		console.log(customers.data[2].lastResponse)
		//console.log(customer.lastResponse.requestId)
  	});
})();
