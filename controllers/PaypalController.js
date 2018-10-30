const paypal = require("../config/paypal");
const create_payment_json = require("../config/create_payment_json");

class PayPalController {
  request(req, res) {
    paypal.payment.create(create_payment_json, (error, payment) => {
      if (error) {
        throw error;
      } else {
        console.log("Deu bom, deu feliz, pagamento criado");
        console.log(payment);
      }
    });
  }
}
