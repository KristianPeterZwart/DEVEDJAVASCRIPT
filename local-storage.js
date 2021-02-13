
// LOCAL STORAGE

localStorage.setItem("todo", "Feed the dog");
localStorage.setItem("user", "Kris");
localStorage.setItem("todo", "Feed myself");


// SESSION STORAGE
sessionStorage.setItem("todoList", "session feeding dog");

// GETTING STUFF BACK
const user = localStorage.getItem("user");

console.log(user)

