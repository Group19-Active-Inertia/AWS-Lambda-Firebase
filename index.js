var admin = require("firebase-admin");
const serviceAccount = require('serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://create-active-inertia-default-rtdb.europe-west1.firebasedatabase.app"
});

exports.handler = (event, context, callback) => {
    let x = admin.database().ref('events');
    x.push(event).then(function(){
        callback(null, {statusCode: 200});
    });
};
