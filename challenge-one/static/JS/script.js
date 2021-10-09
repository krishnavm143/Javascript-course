function clickCheck(){
    var userInput=prompt("Enter The Year you are born");
    var answer=(2021-userInput)*365;
    var h1=document.createElement("h1");
    var textAnswer=document.createTextNode("You are "+answer+" old in days")
    h1.setAttribute("id","ageOutput");
    h1.appendChild(textAnswer);
    document.querySelector("#flex-box-result").appendChild(h1);
}
function reset(){
    document.querySelector("#ageOutput").remove();
}