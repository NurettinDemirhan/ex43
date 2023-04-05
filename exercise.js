const user = {
  id: 1,
  name: "John",
  age: 25,
}

// localStorage.setItem("userData",JSON.stringify(user));

// const userObj = JSON.parse(localStorage.getItem("userData"))

// console.log(userObj)

const storeuserData = (user) => {
  localStorage.setItem("user",JSON.stringify(user));
}