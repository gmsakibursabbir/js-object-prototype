const user = {
  id: "",
  name: "",
  userName: "",
  email: "",
  __proto__: {
    isSignin: true,
    register(name, userName, email) {
      this.name = name;
      this.userName = userName;
      this.email = email;
      console.log("Sign up successfully");
    },
    login(username, email) {
      if (this.userName !== username || this.email !== email) return;
      this.isSignin = true;

      //   {
      //     this.isSignin = true;
      //   } else {
      //     console.log("Your username or email is incorrect!");
      //     this.isSignin = false;
      //   }
    },
  },
};

user.register("Sakibur", "sakib", "gmsakibursabbir@gmail.com");

user.login("Sakibur", "gmsakibursabbir@gmail.com");

if (user.isSignin) {
  console.log("Welcome", user.name);
} else {
  console.log("You are not signed in!");
}

console.log(user);
