import smartUI from "./script.js";
document.getElementById("getresult").addEventListener("click",function(){

    document.getElementById("result").innerHTML = smartUI.sum(parseInt(document.getElementById("value1").value),parseInt(document.getElementById("value2").value));
});