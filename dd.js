const stripe = require("stripe")("sk_test_F2mp9ghsK2oDx107StBpYm6F00r0jKy8du");

stripe.checkout.sessions.retrieve(
  'cs_test_cCiFMNltWMLKmrxtM7GmbyvHZQo6LKGCceQTBsghL5ER9VSjKYNlE8Hp',
  function(err, session) {
   console.log(session)
	  // asynchronously called
  }
);
