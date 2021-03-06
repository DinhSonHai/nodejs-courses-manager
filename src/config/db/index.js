require('dotenv').config();
const mongoose = require('mongoose');

async function connect() {
    try {
        //process.env.MONGO_ATLAS_URL
        //process.env.MONGO_URL
        await mongoose.connect(process.env.MONGO_ATLAS_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('Connect successfully');
    } catch (error) {
        console.log('Connect failure');
    }
}

module.exports = { connect };
