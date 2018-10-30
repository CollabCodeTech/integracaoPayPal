const paypal = require('../config/paypal');
const create_payment_json = require('../config/create_payment_json');
class PayPalController {
  async request(req, res) {
    try {
      const payment = await (() =>
        new Promise((resolve, reject) => {
          paypal.payment.create(
            create_payment_json(req.headers.host),
            (err, payment) => {
              if (err) return reject(err);
              resolve(payment);
            },
          );
        }))();
      res.redirect(payment.links[1].href);
    } catch (e) {
      res.send(e);
    }
  }

  callback(req, res) {
    res.render("resumo.html", { ...req.query });
  }

  cancel(req, res) {
    res.status(200).send("cancel");
  }

  async confirm(req, res) {
    try {
      const { paymentId, PayerID } = req.body;
      const orderDetails = await (() =>
        new Promise((resolve, reject) => {
          paypal.payment.execute(
            paymentId,
            { payer_id: PayerID },
            (err, payment) => {
              if (err) return reject(err);
              resolve(payment);
            },
          );
        }))();
      console.log(orderDetails);
      res.json({ msg: "Parabéns" });
    } catch (e) {
      res.status(e.httpStatusCode).send(e.response);
    }
  }
}

module.exports = new PayPalController();
