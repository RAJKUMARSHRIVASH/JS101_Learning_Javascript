//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let stored_username = "xyz@masai.com";
let stored_password = "123456";

let input_username = "xyz@masai.com";
let input_password = "123456";

if(stored_username == input_username) {
  if(stored_password == input_password) {
    console.log("Login Successful");
  } else {
    console.log("Invalid password");
  }
  
} else {
    console.log("Wrong username");
}
