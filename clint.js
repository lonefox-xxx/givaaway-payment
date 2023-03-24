require("dotenv").config();
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const { API } = require('FaucetPayJS');
const myAPI = new API('d473498d343eeac0670fadfa258a72f106297c667644fd8b4c073d273aac6435');
const amount = 2374400
const to = 'TDPkFg7XsUha2Ydbkp3SHGtpTzS1hG8weB'


// myAPI.checkAddress(to).then((result) => {
//     console.log(result);
// }).catch((err) => {

// });
app.get('/', (req, res) => {

    myAPI.send(amount, to, currency = 'TRX', referral = false, ipaddress = '0.0.0.0').then(data => {
        res.send(data)
    })
})
app.listen(port, () => console.log(` Server running on port : port!`))