const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }, (err, client) => {
    if (err) {
        return console.log('Ket noi that bai');
    }

    console.log('Ket noi thanh cong');
})