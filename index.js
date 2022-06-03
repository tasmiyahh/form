function focusfunction(a){
    a.style.backgroundColor="#D1E8E4";

}

function blurfunction(element){
    element.style.backgroundColor="";
}

function invalidfunction(){
    alert("please fill the required field");
}


document.getElementById("FORM").addEventListener("submit" , submitfunction);

function submitfunction(){
    alert("thankyou!");
}