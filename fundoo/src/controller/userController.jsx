/**
 * importing all firebase requriments
 * @description:doing an email-validation and email verification
 */
import firebase from "firebase";
import Firebase from "../firebaseConfig";
import { EventEmitter } from "events";
const db = Firebase.firestore();
export async function registeration(user) {
  try {
    const data = {
      firstName: user.firstName,
      lastName: user.lastName,
      Email: user.Email,
      password: user.password
    };
    await firebase
      .auth()
      .createUserWithEmailAndPassword(user.Email, data.password);
    db.collection("user")
      .doc(firebase.auth().currentUser.uid)
      .set(data);
      //passing an evnt emitter
    const emitter = new EventEmitter();
    function emailVerification() {
      firebase.auth().currentUser.sendEmailVerification();
    }
    emitter.on("email verification", emailVerification);
    emitter.emit("email verification");
    return "success";
  } catch (err) {
    console.log("err");
    return err.message;
  }
}
