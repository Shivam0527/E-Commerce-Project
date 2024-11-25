const paypal = require("paypal-rest-sdk");

paypal.configure({

  mode: "sandbox",
  client_id: "AZOo2rvCBeNK58N8RaCT_L1j7mhyyMmW5Dprxw8hRE138uZyoN9bkQVOVNerZzo_LSszqrsof1tGAt_x",
  client_secret: "ELZjoMw802vMG_febrLgyDDRH9RFKBNMBMySnnkJ8qQ2BuZapGjk8-zyHoncI5gx5tlknJUfv9SLCEbw",
});

module.exports = paypal;
