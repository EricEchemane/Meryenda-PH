const { MongoClient } = require('mongodb');
export const URI = process.env.DEV_URI;

export const Client = new MongoClient(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});