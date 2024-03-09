$(document).ready(function(){
    $(".veen .rgstr-btn button").click(function(){
        $('.veen .wrapper').addClass('move');
        $('.body').css('background','#e0b722');
        $(".veen .login-btn button").removeClass('active');
        $(this).addClass('active');

    });
    $(".veen .login-btn button").click(function(){
        $('.veen .wrapper').removeClass('move');
        $('.body').css('background','#ff4931');
        $(".veen .rgstr-btn button").removeClass('active');
        $(this).addClass('active');
    });
});

function signin() {
    var name = document.getElementById("sname").value;
    var ui = document.getElementById("uid").value;
    var email = document.getElementById("semail").value;
    var password = document.getElementById("spassword").value;
    if (name == "" || ui == "" || email == "" || password == "") {
        var span = document.getElementById("error")


        // span.innerText = "YOU HAVE TO FILLED ALL FIELDS"
        // span.style.display = "inline"
        // alert('please fill all field')
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'please fill all fields',
            showConfirmButton: false,
            timer: 1000
        })
    } else {
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("password", password)
        // alert("account han been created")
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'account han been created',
            showConfirmButton: false,
            timer: 1000
        })
        // location.href = "./animatedlogin.html"
    }
}

function removetext() {
    var span = document.getElementById("error")
    span.style.display = "none"

}


function login() {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    console.log(email)
    var user_email = localStorage.getItem("email")
    var user_password = localStorage.getItem("password")
    console.log(user_email)
    if (user_email == email && user_password == password) {
        sessionStorage.setItem("user", "true");
        // window.location.href = "/pages/gallery.html"
    } else if (email === "" || password === "") {
        // alert("please fill all fields")
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'please fill all fields',
            showConfirmButton: false,
            timer: 2000
        })

    } else {
        // alert("incorrect email or password")
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'incorrect email or password.',
            showConfirmButton: false,
            timer: 2000
        })
    }

}
