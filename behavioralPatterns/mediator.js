/**
 * @filename :mediator.js
 * @module: Design pattern (Behavioral Pattern)
 * @author: Girish Sagar, <girishsagar51@gmai.com>
 * @version:6.11.3
 * @since:03-Dec-2019
 */
/**
 * @class :chat
 * @description :defining an chat class with two property user and message
 */
class chat {
  constructor(user, message) {
    this.user = user;
    this.message = message;
  }
  /**
   * @function :showmessage
   * @description : the showmessage function used to print the details
   */

  showmessage() {
    console.log(
      "the user name is " + this.user + "and the message is " + this.message
    );
  }
}
/**
 * @class :user
 * @description : defining an new class with an one property name
 */
class user {
  constructor(name) {
    this.name = name;
  }
  // setname function is used to set the name from the user
  setname = nm => {
    this.name = nm;
  };
  //getname function used to dispalay the name entered by the user
  getname = () => {
    this.name;
  };
  // sendmessage function is sending a messge to the user and displaying the message
  sendmessage = message => {
    this.message = message;
    let chmsg = new chat(this.name, this.message);
    chmsg.showmessage();
  };
}
// used to display the all the details like setname and what message is send
let girish = new user();
let sagar = new user();
girish.setname(" Girish Sagar ");
sagar.setname(" hi Sagar Girish");
girish.sendmessage("hi from CHK>>!");
sagar.sendmessage(" Same here also...!!!!");
