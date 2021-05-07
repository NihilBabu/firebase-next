import admin from "firebase-admin";

const serviceAccount = require("../service-account.json")

export const verifyIdToken = (token) => {
    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://fir-auth-5e36f.firebaseapp.com"
        })
    }

    admin.auth().verifyIdToken
    return admin
        .auth()
        .verifyIdToken(token)
        .catch((err) => {
            throw err
        })
}