'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const loanscheduleSchema = mongoose.Schema({
    requestid: String,
    loanamount: String,
    loanterms: String,
    amountinterestrate: String,
    paymentperyear: String,
    installmentpermonth: String,


});


mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/digitalId', { useMongoClient: true });

mongoose.connect('mongodb://harini:Harini!96@ds119406.mlab.com:19406/mortgage', {
    useMongoClient: true
});



module.exports = mongoose.model('loanschedule', loanscheduleSchema);