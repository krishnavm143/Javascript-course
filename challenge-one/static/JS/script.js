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
function catGenerator(){
    var catButton=document.querySelector(".btn btn-success");
    var img=document.createElement("img");
    var div=document.querySelector(".flex-box-container-2")
    img.src="http://thecatapi.com/api/images/get?format=src&type=gif";
    div.appendChild(img);
//     img.style.width="150px";
//     img.style.height="150px"
}