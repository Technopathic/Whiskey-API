var mongoose = require('mongoose');

run().catch(err => console.log(err));

async function run() {
    //mongoose.set('useUnifiedTopology', true);
    mongoose.set('useNewUrlParser', true);

    await mongoose.connect('mongodb://ren:MooMoo12345@ds241025.mlab.com:41025/whiskey')
    .then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log(Error, err.message);
    });
}



