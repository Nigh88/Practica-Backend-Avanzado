'use strict';

const mongoose = require('mongoose');
const nodemailerTransport = require('../lib/nodemailerConfigure');

const userSchema = mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
});


userSchema.methods.sendEmail = function(from, subject, body) {
  return nodemailerTransport.sendMail({
    from: from,
    to: this.email,
    subject: subject,
    html: body
  })
}

const User = mongoose.model('User', userSchema);

module.exports = User;