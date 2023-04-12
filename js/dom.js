//  Js starts
 let eyeButton = document.querySelector(".input .eye_icon")
  let field = document.querySelector(".input .pass_field")

function togglePassword(){
   if(field .type == "password"){
    field.type = "text"
    eyeButton.innerHTML = `<i class="bi bi-eye-slash"></i>`
   } else{
       field.type = "password"
       eyeButton.innerHTML = `<i class="bi bi-eye"></i>`
   } 
   
}
 eyeButton.addEventListener("click",togglePassword )

// Js ends
