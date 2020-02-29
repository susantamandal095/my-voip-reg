const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var userSchema = new mongoose.Schema({
    sitetitle: {
        type: String,
       // required: 'Full name can\'t be empty'
    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
        unique: true
    },


    //1st start
    facebooklink: {
        type: String,
       // required: 'Full name can\'t be empty'
    },
    twitterlink: {
        type: String,
       // required: 'Full name can\'t be empty'
    },
    youtubelink: {
        type: String,
       // required: 'Full name can\'t be empty'
    },
    address: {
        type: String,
       // required: 'Full name can\'t be empty'
    }, openinghours: {
        type: String,
       // required: 'Full name can\'t be empty'
    }, phone: {
        type: String,
       // required: 'Full name can\'t be empty'
    }, googlemapurl: {
        type: String,
       // required: 'Full name can\'t be empty'
    }, firstplansname: {
        type: String,
       // required: 'Full name can\'t be empty'
    }, firstplansprice: {
        type: String,
       // required: 'Full name can\'t be empty'
    }, firstregularprice: {
        type: String,
       // required: 'Full name can\'t be empty'
    }, firstsaleprice: {
        type: String,
       // required: 'Full name can\'t be empty'
    }, firstbuynowurl: {
        type: String,
       // required: 'Full name can\'t be empty'
    }, firstfreetrialurl: {
        type: String,
       // required: 'Full name can\'t be empty'
    }, firstplansfeatures: {
        type: String,
       // required: 'Full name can\'t be empty'
    }, firstphone: {
        type: String,
       // required: 'Full name can\'t be empty'
    }, 
    firstemail: {
        type: String,
        required: 'Email can\'t be empty',
     //   unique: true
    },

//end 1st
//start 2nd
secondplansname: {
    type: String,
   // required: 'Full name can\'t be empty'
}, secondplansprice: {
    type: String,
   // required: 'Full name can\'t be empty'
}, secondregularprice: {
    type: String,
   // required: 'Full name can\'t be empty'
}, secondsaleprice: {
    type: String,
   // required: 'Full name can\'t be empty'
}, secondbuynowurl: {
    type: String,
   // required: 'Full name can\'t be empty'
}, secondfreetrialurl: {
    type: String,
   // required: 'Full name can\'t be empty'
}, secondplansfeatures: {
    type: String,
   // required: 'Full name can\'t be empty'
}, secondphone: {
    type: String,
   // required: 'Full name can\'t be empty'
},
secondemail: {
    type: String,
    required: 'Email can\'t be empty',
 //   unique: true
},
//end 2nd and 3rd start.

threeplansname: {
        type: String,
       // required: 'Full name can\'t be empty'
    }, threeplansprice: {
        type: String,
       // required: 'Full name can\'t be empty'
    }, threeregularprice: {
        type: String,
       // required: 'Full name can\'t be empty'
    }, threesaleprice: {
        type: String,
       // required: 'Full name can\'t be empty'
    }, threebuynowurl: {
        type: String,
       // required: 'Full name can\'t be empty'
    }, threefreetrialurl: {
        type: String,
       // required: 'Full name can\'t be empty'
    }, threeplansfeatures: {
        type: String,
       // required: 'Full name can\'t be empty'
    }, threephone: {
        type: String,
       // required: 'Full name can\'t be empty'
    },
    threeemail: {
        type: String,
        required: 'Email can\'t be empty',
       // unique: true
    },

    //end 3rd 4th start
    fourplansname: {
        type: String,
       // required: 'Full name can\'t be empty'
    }, fourplansprice: {
        type: String,
       // required: 'Full name can\'t be empty'
    }, fourregularprice: {
        type: String,
       // required: 'Full name can\'t be empty'
    }, foursaleprice: {
        type: String,
       // required: 'Full name can\'t be empty'
    }, fourbuynowurl: {
        type: String,
       // required: 'Full name can\'t be empty'
    }, fourfreetrialurl: {
        type: String,
       // required: 'Full name can\'t be empty'
    }, fourplansfeatures: {
        type: String,
       // required: 'Full name can\'t be empty'
    }, fourphone: {
        type: String,
       // required: 'Full name can\'t be empty'
    },
    fouremail: {
        type: String,
        required: 'Email can\'t be empty',
      //  unique: true
    },
   
    //end 4th 
    password: {
        type: String,
      //  required: 'Password can\'t be empty',
        minlength : [4,'Password must be atleast 4 character long']
    },
    saltSecret: String
});

// Custom validation for email
userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');
// Custom validation for email



// Events
userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

mongoose.model('Reg', userSchema);