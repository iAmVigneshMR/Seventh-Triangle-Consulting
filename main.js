let change = document.getElementById('change');
let change1 = document.getElementById('change2');
var price = document.getElementById("price");
let num1 = 399;
let num2 = 209;

function changecontent(){
    change.innerHTML = "10"
    change1.innerHTML = num1;
    price.innerHTML = num1;
    document.getElementById("changeimg").src="./assets/10kg.jpg";
    document.getElementById('foo1').setAttribute("class", "chbtn2");
    document.getElementById('foo2').setAttribute("class", "chbtn1");
}

function changecontent1(){
    change.innerHTML = "5"
    change1.innerHTML = num2;
    price.innerHTML = num2;
    document.getElementById("changeimg").src="./assets/5kg.jpg";
    document.getElementById('foo1').setAttribute("class", "chbtn1");
    document.getElementById('foo2').setAttribute("class", "chbtn2");
}
var valueCount
document.querySelector(".minus-btn").setAttribute("disabled", "disabled");

//plus button
document.querySelector(".plus-btn").addEventListener("click", function() {
    valueCount = document.getElementById("quantity").value;
    valueCount++;
    document.getElementById("quantity").value = valueCount;

    if (valueCount > 1) {
        document.querySelector(".minus-btn").removeAttribute("disabled");
        document.querySelector(".minus-btn").classList.remove("disabled")
    }
})

//plus button
document.querySelector(".minus-btn").addEventListener("click", function() {
    valueCount = document.getElementById("quantity").value;
    valueCount--;
    document.getElementById("quantity").value = valueCount
    if (valueCount == 1) {
        document.querySelector(".minus-btn").setAttribute("disabled", "disabled")
    }
    priceTotal()
})        

//price calculation function
function priceTotal() {
    let counter = document.getElementById("quantity").value;
    // console.log(counter);
    var total = counter * price.innerHTML;
    price.innerHTML = total;
}