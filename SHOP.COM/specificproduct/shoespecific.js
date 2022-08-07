function showing1() {
  let pic1 = document.createElement("img");
  pic1.src =
    "https://img.shop.com/Image/270000/279100/279185/products/1890336639__800x800__.jpg";
  // document.getElementById("mainimg").append(pic);
  pic1.style.width = "500px";
  pic1.style.height = "500px";
  pic1.style.padding = "10px";
  document.getElementById("mainimgimg").replaceWith(pic1);
}
function showing2() {
  let pic2 = document.createElement("img");
  pic2.src =
    "https://img.shop.com/Image/270000/279100/279185/products/alt_793710094__800x800__.jpg";
  // document.getElementById("mainimg").append(pic);
  pic2.style.width = "500px";
  pic2.style.height = "500px";
  document.getElementById("mainimgimg").replaceWith(pic2);
}
function showing3() {
  let pic3 = document.createElement("img");
  pic3.src =
    "https://img.shop.com/Image/270000/279100/279185/products/alt_793710095__800x800__.jpg";
  // document.getElementById("mainimg").append(pic);
  pic3.style.width = "500px";
  pic3.style.height = "500px";
  document.getElementById("mainimgimg").replaceWith(pic3);
}
function showing4() {
  let pic4 = document.createElement("img");
  pic4.src =
    "https://img.shop.com/Image/270000/279100/279185/products/alt_793710096__800x800__.jpg";
  // document.getElementById("mainimg").append(pic);
  pic4.style.width = "500px";
  pic4.style.height = "500px";
  document.getElementById("mainimgimg").replaceWith(pic4);
}
let arrforkart = JSON.parse(localStorage.getItem("kartDataBase")) || [];
function addtokart() {
  event.preventDefault();
  let size = document.getElementById("sizeselect").value;
  let width = document.getElementById("widthselect").value;
  let qty = document.getElementById("qty").value;
  let price = 1699;
  let kartobj = {
    qty: qty,
    price: price,
    prodname: "Georgia Boot Small Batch Casual Boot",
  };
  arrforkart.push(kartobj);
  localStorage.setItem("kartDataBase", JSON.stringify(arrforkart));

  window.location.href = "../kart page/kart.html";
}
function delposs() {
  event.preventDefault();
  let pin = document.getElementById("pincode").value;
  if (pin.length == 6) {
    alert("Wow! This product can ship to the location you've requested.");
  } else {
    alert("This product cannot be shipped to the location you've requested.");
  }
}
