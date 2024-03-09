// NAVBAR

let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});

//BRANDS

function prev(){
  document.getElementById('slider-container').scrollLeft -= 540;
}

function next()
{
  document.getElementById('slider-container').scrollLeft += 540;
}


$(".slides img").on("click" , function(){
$(this).toggleClass('zoomed');
$(".overlay").toggleClass('active');
})

//New Arrival

function prev2(){
  document.getElementById('slider-container2').scrollLeft -= 540;
}

function next2()
{
  document.getElementById('slider-container2').scrollLeft += 540;
}



//  Footer 
function sub(){
  Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Subscribed Successfully",
      showConfirmButton: false,
      timer: 1500
    });
}
