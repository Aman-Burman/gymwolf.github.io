let form = document.querySelector("form")
form.addEventListener("submit",addvalue)
let arr =  JSON.parse(localStorage.getItem("data")) || [];
function addvalue(event){

    event.preventDefault();
    let custobj={

   email:document.querySelector("#text").value,
 
   password:document.querySelector("#password").value

    }
   
  arr.push(custobj)
  localStorage.setItem("data",JSON.stringify(arr))
  
}