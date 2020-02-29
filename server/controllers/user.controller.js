const mongoose = require('mongoose');

const Reg = mongoose.model('Reg');

module.exports.registerr = (req, res, next) => {
    var reg = new Reg();
    reg.sitetitle = req.body.sitetitle;
    reg.email = req.body.email;
    reg.password = req.body.password;
    reg.facebooklink = req.body.facebooklink;
    reg.twitterlink = req.body.twitterlink;
    reg.youtubelink = req.body.youtubelink;
    reg.address = req.body.address;
    reg.openinghours = req.body.openinghours;
    reg.phone = req.body.phone;
    reg.googlemapurl = req.body.googlemapurl;
    reg.firstplansname = req.body.firstplansname;
    reg.firstplansprice = req.body.firstplansprice;
    reg.firstregularprice = req.body.firstregularprice;
    reg.firstsaleprice = req.body.firstsaleprice;
    reg.firstbuynowurl = req.body.firstbuynowurl;
    reg.firstfreetrialurl = req.body.firstfreetrialurl;
    reg.firstplansfeatures = req.body.firstplansfeatures;
    reg.firstphone = req.body.firstphone;
    reg.firstemail = req.body.firstemail;
    reg.secondplansname = req.body.secondplansname;
    reg.secondplansprice = req.body.secondplansprice;
    reg.secondregularprice = req.body.secondregularprice;
    reg.secondsaleprice = req.body.secondsaleprice;
    reg.secondbuynowurl = req.body.secondbuynowurl;
    reg.secondfreetrialurl = req.body.secondfreetrialurl;
    reg.secondplansfeatures = req.body.secondplansfeatures;
    reg.secondphone = req.body.secondphone;
    reg.secondemail = req.body.secondemail;
    reg.threeplansname = req.body.threeplansname;
    reg.threeplansprice = req.body.threeplansprice;
    reg.threeregularprice = req.body.threeregularprice;
    reg.threesaleprice = req.body.threesaleprice;
    reg.threebuynowurl = req.body.threebuynowurl;
    reg.threefreetrialurl = req.body.threefreetrialurl;
    reg.threeplansfeatures = req.body.threeplansfeatures;
    reg.threephone = req.body.threephone;
    reg.threeemail = req.body.threeemail;
    reg.fourplansname = req.body.fourplansname;
    reg.fourplansprice = req.body.fourplansprice;
    reg.fourregularprice = req.body.fourregularprice;
    reg.foursaleprice = req.body.foursaleprice;
    reg.fourbuynowurl = req.body.fourbuynowurl;
    reg.fourfreetrialurl = req.body.fourfreetrialurl;
    reg.fourplansfeatures = req.body.fourplansfeatures;
    reg.fourphone = req.body.fourphone;
    reg.fouremail = req.body.fouremail;
    reg.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}