/**
 * importing all firebase,EventEmitter
 * @description:doing an email-validation and email verification
 */
import jwt from "jsonwebtoken";
import firebase from "firebase";
import Firebase from "../firebaseConfig";
import { EventEmitter } from "events";
import jwt_decode from "jwt-decode";
const db = Firebase.firestore();
/**
 *
 * @param {user} user
 * @function : regid
 */
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
    let userlogin = await firebase.auth().signInWithEmailAndPassword(user.Email, user.password);
    const payload = {
      user_id: userlogin.user.uid,
      email: userlogin.user.email
    };
    let token = jwt.sign(payload, "hsdyusd99d787sd7sjd89sdsd", {
      expiresIn: 1440
    });
    localStorage.setItem("usertoken", token);
    console.log(token);
    cb(null, userlogin);
  } catch (error) {
    console.log(error);
    cb(error.message);
  }
}
// Forget Password
export async function forgotPassword(Email) {
  try {
    await firebase.auth().sendPasswordResetEmail(Email);

    return "success";
  } catch (error) {
    console.log(error);
    return error.message;
  }
}

export async function Signout() {
  await firebase.auth().firebaseAuthorization.signOut();
  localStorage.removeItem("usertoken");
}

export async function saveNote(data) {
  try {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    // console.log('kjdkjsdk')
    const noteData = {
      title: data.title,
      description: data.description,
      isPinned:data.isPinned,
      user_id: decoded.user_id
    };
    db.collection("notes").doc().set(noteData);
    let result = true;
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getNote() {
  try {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    var noteData = [];
    await db.collection("notes").where("user_id", "==", decoded.user_id).get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          noteData.push(doc);
        });
      });
    console.log(noteData);

    return noteData;
  } catch (error) {
    console.log(error);
    return error.message;
  }
}

// editNote and updata in firebase 
export async function editNote(noteData) {
  await db.collection("notes").doc(noteData.noteId).update({
      // await db.collection("notes").doc().update({
      "title": noteData.title,
      "description": noteData.description,
  })
  // console.log("bkshksbkjb")
      .then(res => {
          res = true;
          return res
      })
      .catch(error => {
          console.log(error.message)
          return error.message
      })

}

export async function pinNotes(noteData) {
  if(noteData.isPinned){
  await db.collection("notes").doc(noteData.noteId).update({
      // await db.collection("notes").doc().update({
      "isPinned": noteData.isPinned,
  }).then(res => {
    console.log("res",res);
    
          res = true;
          return res
      })
      .catch(error => {
          console.log(error.message)
          return error.message
      })
    }else{
      await db.collection("notes").doc(noteData.noteId).update({
 
        // await db.collection("notes").doc().update({
        "isPinned": noteData.isPinned,
    }).then(res => {
            res = true;
            return res
        })
        .catch(error => {
            console.log(error.message)
            return error.message
        })
    }

}