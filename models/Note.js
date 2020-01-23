var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create the noteSchema with the schema object
var noteSchema = new Schema({
  _headlineId: {
    type: Schema.Types.ObjectId,
    ref: "Headline"
  },

  date: {
    type: Date,
    default: Date.now
  },

  noteText: String
});

var Note = mongoose.model("Note", noteSchema);

// Export the Note model
module.exports = Note;
