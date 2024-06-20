const axios = require("axios");
const lib = {};

lib.HomeRouter = (req, res) => {
  axios
    .get("http://localhost:3000/measurement")
    .then((response) => {
      res.render("home", { users: response.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

lib.addData = (req, res) => {
  res.render('add')
  
};

lib.update = (req, res) => {
  axios.get('http://localhost:3000/measurement', { params: { id: req.query.id } })
  .then(function (userdata) {
      res.render("update", { user: userdata.data })
      // const users = userdata.data.find({ "_id": req.query.id })
      // console.log(users);
  })
  .catch(err => {
      res.send(err);
  })
};
module.exports = lib;
