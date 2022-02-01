function getList() {
  fetch("https://json-server-mocker-masai.herokuapp.com/tasks", {
    method: "GET",
    headers: { "Content-type": "application/json;charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((data) => appendList(data))
    .catch((err) => console.log("Hy Error " + err));
}

function postList(event) {
  event.preventDefault();
  var inputTitle = document.getElementById("inp").value;
  var checkedStatus = document.getElementById("chk").checked;
  var list = {
    title: inputTitle,
    status: checkedStatus,
  };
  fetch("https://json-server-mocker-masai.herokuapp.com/tasks", {
    method: "Post",
    body: JSON.stringify(list),
    headers: { "Content-type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => getList())
    .catch((err) => console.log("Error " + err));
  getList();
}

function appendList(data) {
  var divContainer = document.querySelector(".container");
  divContainer.innerHTML = null;
  data.forEach((element) => {
    console.log(element.title);
    var h3 = document.createElement("h3");
    h3.textContent = element.title;
    if (element.status) h3.style.color = "green";
    else h3.style.color = "red";
    divContainer.append(h3);
  });
}

getList();

document.querySelector("#todoform").addEventListener("submit", postList);
