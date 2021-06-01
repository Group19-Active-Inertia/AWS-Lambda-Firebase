'use strict';

const admin = require('firebase-admin');
const serviceAccount = require('serviceAccount.json');

//admin.initializeApp({
    //databaseURL: "https://create-active-inertia-default-rtdb.europe-west1.firebasedatabase.app",
    //credential: admin.credential.cert(serviceAccount)
//});

exports.handler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;  //<---Important

  if(admin.apps.length == 0) {   // <---Important!!! In lambda, it will cause double initialization.
        admin.initializeApp({
            databaseURL: "https://create-active-inertia-default-rtdb.europe-west1.firebasedatabase.app",
            credential: admin.credential.cert(serviceAccount)
        });
  }

  // Do whatever you want to do with firebase storage
  // firebaseStorage = admin.storage();
  
  // Do whatever you want to do with firestore
  // firebaseFirestore = admin.firestore();
  
  // Do whatever you want to do with auth
  // firebaseFirestore = admin.auth();

  // Do whatever you want to do with firebase

  admin.database().ref('events').push(event);
  
  const response = {
        statusCode: 200,
        //body: JSON.stringify('Hello from Lambda!'),
    };

  return response;
};

