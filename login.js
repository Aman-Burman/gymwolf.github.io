 let Compdata = JSON.parse(localStorage.getItem("data"));

 document.querySelector("form").addEventListener("submit",compare);
 

 function compare(event){
    event.preventDefault();
     
   
     let emaill = document.getElementById("text").value;

    let Pass = document.getElementById("password").value;

    Compdata.forEach(function(el){
        if(el.email===emaill){
            if(el.password===Pass){
                alert("login Successful")
                window.location.href="index.html";
            }}  
          })
    
     
     
 }
   