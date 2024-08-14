
document.getElementById("btn").addEventListener("click", 
    function (event){
        event.preventDefault();
        if (document.getElementById("email-address").value === "") {
            document.querySelector(".email-error").style.display = "block";
            var audio = new Audio("./sounds/wrong.mp3");
            audio.play();
            event.preventDefault();
         } else {  

             if ((document.getElementById("email-address").value).indexOf("@") === -1){
                console.log("@gmail.com not found");
                document.querySelector(".email-error").style.display = "block";
                document.querySelector(".email-error").textContent = "You inputed a wrong Email Address Without the @ ";
                var audio = new Audio("./sounds/wrong.mp3");
                audio.play();
                event.preventDefault();
            }
            else{

                document.querySelector(".email-error").style.display = "none";
            }

         }


        if (document.getElementById("password").value === "") {
           document.querySelector(".password-error").style.display = "block";
           var audio = new Audio("./sounds/wrong.mp3");
           audio.play();
           event.preventDefault();
           
        } else {
            document.querySelector(".password-error").style.display = "none";

            if (document.getElementById("password").value.length < 8) {
                document.querySelector(".password-error").style.display = "block";
                document.querySelector(".password-error").innerHTML = (8 - document.getElementById("password").value.length) + " character remaining";
                var audio = new Audio("./sounds/wrong.mp3");
                audio.play();
                event.preventDefault();
            } else{
                document.querySelector(".password-error").style.display = "none";
            }
        }

       
    }
)
