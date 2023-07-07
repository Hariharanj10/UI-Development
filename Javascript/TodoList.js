let addbtn = document.getElementById("add");
let index = 0;
addbtn.addEventListener("click", function () {
  let value = document.getElementById("text-value").value;
  if (value != "") {
    let crtEmt = document.createElement("li");
    crtEmt.id = "list-" + index;

    let btn = document.createElement("button");
    btn.className = "delete-list-btn";
    btn.innerText = "Remove";
    btn.id = "delete-btn" + index;

    let i = btn.id;
    let i2 = crtEmt.id;
    let textValue = document.createTextNode(value);
    crtEmt.appendChild(textValue);
    crtEmt.appendChild(btn);
    index++;
    document.getElementById("list-items").appendChild(crtEmt);
    btn.onclick = clickevent.bind(i2);
  } else {
    alert("Please enter a value ");
  }
});
function clickevent(i2) {
  let idvalue = i2.target.id;
  let idRef = document.getElementById(idvalue);
  var findParent = idRef.parentNode;
  findParent.remove();
}

let deletebtn = document.getElementById("delete");
deletebtn.addEventListener("click", function () {
  if (
    document.getElementById("list-items").getElementsByTagName("li").length >= 1
  ) {
    var ul = document.querySelector("#list-items");
    var li = ul.firstElementChild;
    ul.removeChild(li);
  } else {
    alert("list is empty");
  }
});
