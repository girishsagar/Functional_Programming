/**
 * Execution :1 Default cmd>node.js
 * @Purpose :ser Input and Replace String Template “Hello <<UserName>>, How are you?”
 */
exports.nameReplace = str => {
  let str_length = str.length;
  try {
    if (
      (str_length > 3 && str >= "a" && str <= "z") ||
      (str >= "A" && str <= "Z")
    ) {
      let str1 = "Hi <<UserName>> how r u";
      console.log(str1);
      let result = str1.replace("<<UserName>>", str);
      console.log(result);
    } else {
      console.log("please enter the minimum character 3");
    }
  } catch (e) {
    console.log("Not A entered String " + e);
  }
};
