var data = JSON.parse(localStorage.getItem("kartDataBase"));

// console.log(data)
var arr = [];

data.map(function (elem) {
  // console.log(elem)

  var row = document.createElement("tr");

  var td = document.createElement("td");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");

  // var div1 = document.createElement("div");
  // div1.classList.add("mystyle");

  // var div2 = document.createElement("div");

  var name = document.createElement("p");
  name.innerText = elem.prodname;

  var price = document.createElement("small");
  price.value = elem.price;

  var qty = document.createElement("small");
  qty.innerText = elem.qty;

  var line = document.createElement("br");

  // div2.append(name, price, line);

  td.append(name);

  td1.append(qty);

  var quantity = +elem.qty;

  var prc = +elem.price;

  var total = quantity * prc;

  arr.push(total);

  td2.append(prc);

  td3.append(total);

  row.append(td, td1, td2, td3);

  document.querySelector("table").append(row);

  // var line = document.createElement("p");
  // line.innerHTML = total;

  // document.querySelector("#sub").append(line);
  // document.querySelector("#sub").append(line);

  // document.querySelector("#fnll").append(total);

  // document.querySelector("#sub>p>p").innerText=aTotal;
});

// console.log(arr)
var sum = 0;
for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);
document.querySelector("#sub>p:last-child").innerText = sum;
document.querySelector("#fnll").innerText = sum - (sum * 10) / 100;

document.querySelector("#btn").addEventListener("click", checkAdress);

function checkAdress(elem) {
  var zip = document.querySelector("#zzip").value;
  console.log(zip);
  if (zip.length == 6) {
    alert("Wow! This product can ship to the location you've requested.");
  } else {
    alert("This product cannot be shipped to the location you've requested.");
  }
}

document.querySelector("#checkbtn").addEventListener("click", thankuall);
function thankuall() {
  window.location.href = "../thanku/thanku.html";
}
