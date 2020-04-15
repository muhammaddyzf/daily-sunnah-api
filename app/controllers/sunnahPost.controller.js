const SunnahPost = require('../models/sunnahPost.model');

// Create the Sunnah Post
exports.create = (req, resp) => {
  const sunnahPost = new SunnahPost({
    title: req.body.title || "Untitled Post",
    image: req.body.image || "this is image",
    description: req.body.description
  });

  sunnahPost.save().then(data => {
    resp.status(200).send({
      success: true,
      message: "Successfully added to database",
      response_code: 200,
      data: data
    });
  }).catch(err => {
    resp.status(500).send({
      message: err.message || "Something happended! we're trying figured out what happended sit back and relax."
    });
  });
};
