const Payment = require("./models/paymentModel");

const csv = require('fast-csv');

const read = () => {
csv.parseFile('./files/data.csv', { headers: true })
  .on('data', (data) => {
    // var json = JSON.parse(data);
    // console.log(json);
    const row = {order_id:data.Order_ID,
         issuing_bank:data.Issuing_Bank,
         transaction_date: data.Transaction_Date,
         transaction_type: data.Transaction_Type,
         status: data.Status,
         amount: data.Amount,
         commission: data.Commission,
         gst: data.GST,
         settled_date:data.Settled_Date,
         link_name:data.Link_Name,
         customer_vpa:data.ustomer_VPA,
         settled_amount: data.Settled_Amount,
         bank_transaction_id:data.Bank_Transaction_ID

        };
    // console.log("yoyoyoyoy "+ JSON.stringify(row));
    const payment = Payment.create(row);
  })
  .on('end', () => {
    console.log('Import complete!');
  });
}
module.exports = read;
// Please note that this is a basic example. You may need to handle more edge cases like error handling, validation and etc. Also, it is not recommended to use this method to import huge CSV files as it may cause performance issues.





