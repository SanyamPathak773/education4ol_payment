const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    transaction_id:String,

order_id:String,

issuing_Bank:String,

transaction_date:String,

transaction_type:String,

status:String,

amount:String,

commission:String,

gst:String,

utr_no:String,

settled_date:String,

link_name: String,

customer_vpa:String,

settled_amount:String,

bank_transaction_id:String,
  });
  
module.exports = mongoose.model('PAYMENT', paymentSchema);
  
