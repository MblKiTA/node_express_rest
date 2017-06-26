var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/node_rest';
mongoose.connect(mongoDB);

mongoose.Promise = Promise;

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true/*,
    validate: [{ validator: , msg: 'Invalid username' }],*/
  },
  email: {
    type: String,
    unique: true,
    //validate:
  }
});

module.exports = mongoose.model('User', UserSchema);
