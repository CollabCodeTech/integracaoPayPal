const paypal = require("../config/paypal");
const create_payment_json = require("../config/create_payment_json");

class PayPalController {
  request(req, res) {
    paypal.payment.create(create_payment_json, (error, payment) => {
      if (error) {
        res.status(error.httpStatusCode).send(error.response);
      } else {
        console.log("Deu bom, deu feliz, pagamento criado");
        console.log(payment);
        res.status(201).json(payment);
      }
    });
  }

  callback(req, res) {
    res.status(200).send("callback");
  }

  cancel(req, res) {
    res.status(200).send("cancel");
  }
}

module.exports = new PayPalController();
