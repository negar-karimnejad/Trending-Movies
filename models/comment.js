const mongoose = require("mongoose");

const schema = mongoose.Schema({
  body: {
    type: String,
    required: true,
  },

});

const model =mongoose.model("Comment", schema);

export default model;
