function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

$(document).ready(function(){
    let login = $("#loginSection");
    let register = $("#registerSection");
    login.hide()
    $("#loginButtonForRgstr").click(function(){
        // register.addClass('exit')
        register.hide();
        login.show()

    });
    $("#registerButtonForLgn").click(function(){

        register.show();
        login.hide()

    });

    $("#LoginButton").click(function(){
        let email = $("#username")
        let value = getCookie(email.val())
        let inputPassword = $("#passwordLogin")
        if(value!=""){
            let arr = value.split('-')
            let name = arr[0]
            let password = arr[1]
            if(password==inputPassword.val()){
                alert(`Welcome ${name}`)
            }
            else{
                alert("Wrong Password")
            }
        }
        else{
            alert("This Account Does Not Exist!")
        }
    });
    $("#RegisterButton").click(function(){
        let name = $("#name")
        let email = $("#email")
        let password = $("#password")

        // setCookie('email',`${name.val()}-${email.val()}-${password}`,1)
        setCookie(`${email.val()}`,`${name.val()}-${password.val()}`,1);
        alert("Account Created Succesfully")
        $("#RegisterForm")[0].reset()
    });
    // function Register(){
        
    // }
})