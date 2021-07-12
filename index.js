/* 
console.log("hola")
let variable = "cantelapki"
console.log(variable)
let button = document.querySelector("button")
console.log(button)
addEventListener("click", () => {
    console.log("asmr")
    alert("no funca bro")
    let jajaxd =prompt("dios esta aqui")
    alert(jajaxd)
})*/
let button= document.querySelector("button")
let input1= document.querySelector("#uno")
let input2= document.querySelector("#dos")


button.addEventListener("click",()=>{
    alert("TIPEASTE " + input1.value + "\nY TU PASS ES " + input2.value)
})