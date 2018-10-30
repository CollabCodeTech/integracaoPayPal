module.exports = {
  name: 'integracaoPaypal',
  script: './index.js',
  watch: true,
  watch_options: {
    followSymlinks: false,
  },
  env: {
    PORT: 6527,
    PAYPAL_CLIENT_ID:
      'Aa7xBL8g71EdHrqtGrns1fj31k_2WcJSIsR4QXN05jvjN4Cpv0i1BRn9VYUTtDScE4LSZd5yy6oyXRYN',
    PAYPAL_SECRET:
      'ELH5UAn8ugz8eNKyyFwcmzMq_o6Mm99MJe3KjYIAwlRZWioVruaGv8XkyoL0cOWxCrxD8HJbYtMx07We',
  },
};
