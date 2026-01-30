function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "ram@gmail.com" && password === "ram123") {
    window.location.href = "movies.html";
  } else {
    document.getElementById("error").innerText =
      "Invalid username and password";
  }
}
