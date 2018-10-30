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

  async sucesso(req, res) {
    res.send('Obrigado pelo seu pagamento');
  }
  async cancelado(req, res) {
    res.send(':( Obrigado mesmo assim :(');
  }
}

module.exports = new PayPalController();
