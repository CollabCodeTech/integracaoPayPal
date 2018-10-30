const { HOST, PORT } = process.env;

module.exports = {
  intent: "sale",
  payer: {
    payment_method: "paypal"
  },
  redirect_urls: {
    return_url: `http://${HOST}:${PORT}/callback`,
    cancel_url: `http://${HOST}:${PORT}/cancel`
  },
  transactions: [
    {
      item_list: {
        items: [
          {
            name: "Cadeirinha do carro para o Henri",
            sku: "item",
            price: "899.00",
            currency: "BRL",
            quantity: 1
          }
        ]
      },
      amount: {
        currency: "BRL",
        total: "899.00"
      },
      description:
        "Comprar uma cadeirinha do carro para conseguirmos sair finalmente com o filhote e a filhota"
    }
  ]
};
