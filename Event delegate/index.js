var items = document.getElementsByClassName("item");
for (let i = 0; i < items.length; i++) {
  const element = items[i];
  element.addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target);
  });
}

document.getElementById("addNew").addEventListener("click", function () {
  var itemParent = document.getElementById("myList");
  var newItem = document.createElement("li");
  newItem.innerText = "Brand new item";
  itemParent.appendChild(newItem);
});

// document.getElementById("myList").addEventListener("click", function (event) {
//   event.target.parentNode.removeChild(event.target);
// });
