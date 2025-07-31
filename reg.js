//register page


function register(){

    const username=document.getElementById("regusername").value;

    if(username===""){
        alert("Please enter username!");
        return;
 
    }
        const existinguser=localStorage.getItem("regusername");
        if(existinguser){
            if(existinguser===username){
            alert(`You have already registered`);
            return;
            }}

        localStorage.setItem("regusername",username);
        alert("Registered successfully!!");
        console.log("redirecting to home......")
        window.location.href="home.html";
    
    return;
}


//login page

function login(){

    const username=document.getElementById("logusername").value;

    if(username===""){
        alert("Please enter username!");
        return;
    }else{

    const regusername=localStorage.getItem("regusername");

    if(!regusername){
        alert(`You have not registered yet!`);
        return;
    }else{

        if(regusername!==username){
            alert("Incorrect username!");
            return;
        }else{

        alert("Login successfull!");
        console.log("redirecting to home......")

        window.location.href="home.html";
}}}}



//homepage


  const form = document.getElementById("searchform");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop default form submit
    
    const branch = document.getElementById("branch").value;
    const year = document.getElementById("year").value;
    const typep = document.getElementById("typep").value;

    if (year === "" || branch === "" || typep === "") {
      alert("Select your option");
      return; // Stop redirect
    }

    // Redirect only if all are selected
    const targeturl=`qp/${branch}/${year}/${typep}.html`;
    window.location.href = targeturl;
  });
