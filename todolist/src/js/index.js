document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  console.log(data);
  if ((data.email === "a@gmail.com") & (data.password === "123")) {
    alert("Login success");
    window.location = "Dashboard.html";
  }
});
