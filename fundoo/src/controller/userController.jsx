/**
 * importing all firebase,EventEmitter
 * @description:doing an email-validation and email verification
 */
import firebase from "firebase";
import Firebase from "../firebaseConfig";
import { EventEmitter } from "events";
const db = Firebase.firestore();
//User Registraction firebase
export async function registeration(user) {
  try {
    const data = {
      firstName: user.firstName,
      lastName: user.lastName,
      Email: user.Email,
      password: user.password
    };
    await firebase.auth().createUserWithEmailAndPassword(user.Email, data.password);
    db.collection("user").doc(firebase.auth().currentUser.uid).set(data);
    //passing an evnt emitter
    const emitter = new EventEmitter();
    function EmailVerification() {
      firebase.auth().currentUser.sendEmailVerification();
    }
    emitter.on("Email verification", EmailVerification);
    emitter.emit("Email verification");
    return "success";
  } catch (err) {
    console.log("err");
    return err.message;
  }
}
//userlogin firebase
export async function userlogin(user, cb) {
  try {
    await firebase.auth().signInWithEmailAndPassword(user.Email, user.password);
    var userData = db.collection("user").doc(firebase.auth().currentUser.uid);
    await userData.get();
    cb(null, "success");
  } catch (error) {
    console.log(error);
    cb(error.message);
  }
}
  export async function forgotPassword(Email) {
    try {
    await firebase.auth().sendPasswordResetEmail(Email)
    // var userData = db.collection("user").doc(firebase.auth().currentUser.uid);
    // await userData.get();
    return 'success';
    }
    catch (error) {
    console.log(error)
    return error.message;
    }
    }


