class HomeController {
  show(req, res) {
    res.render("index.html");
  }
}

module.exports = new HomeController();
