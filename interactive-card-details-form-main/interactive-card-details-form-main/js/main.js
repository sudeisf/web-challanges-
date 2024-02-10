//input variables
const cardNameInput = document.querySelector("#input-1");
const cardNumberInput = document.querySelector("#input-2");
const expireDateInput_1= document.querySelector("#input0");
const expireDateInput_2= document.querySelector("#input01");
const cvcInput = document.querySelector("#input3");
//button variable
const confirmInput = document.querySelector("#conf");
const continueInput = document.querySelector("#continueB")
const rContainer = document.querySelector(".right-container");
const confirmContainer = document.querySelector(".successful");

document.getElementById("input1").addEventListener("input",function(){
    const inputvalue =this.value;
    document.getElementById("card-name").innerText=inputvalue;
});

document.getElementById("input2").addEventListener("input",function(){
    const inputvalue1 =this.value;
    document.getElementById("card-n").innerText=inputvalue1;
});

document.getElementById("input3").addEventListener("input",function(){
    const inputvalue2 =this.value;
    document.getElementById("cvc1").innerText=inputvalue2;
});

document.getElementById("input0").addEventListener("input",function(){
    const inputvalue3 =this.value;
    document.getElementById("mm").innerText=inputvalue3;
});

document.getElementById("input01").addEventListener("input",function(){
    const inputvalue4 =this.value;
    document.getElementById("yy").innerText=inputvalue4;
});


confirmInput.addEventListener("click",function(){
   rContainer.style.display = "none";
   confirmContainer.style.display="flex";

});

continueInput.addEventListener("click",function(){
    rContainer.style.display="flex";
    confirmContainer.style.display="none";
});



