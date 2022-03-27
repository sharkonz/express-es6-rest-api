const mongoose = require('mongoose');

const websiteSchema = mongoose.Schema(
    {
      url: {
        type: String,
        unique: true,
        required: true,
        trim: true,
      },
      html: {
          type: String,
      }
    });

const Website = mongoose.model('Website', websiteSchema);
module.exports = Website;