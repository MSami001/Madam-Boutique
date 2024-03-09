var item1 = document.getElementById("cart1");
var item2 = document.getElementById("cart2");
var item3 = document.getElementById("cart3");

function vanish1() {
    item1.remove()
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Product removed from the cart.',
        showConfirmButton: false,
        timer: 2000
    })
}
function vanish2() {
    item2.remove()
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Product removed from the cart.',
        showConfirmButton: false,
        timer: 2000
    })
}

function vanish3() {
    item3.remove()
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Product removed from the cart.',
        showConfirmButton: false,
        timer: 2000
    })
}

function promo(){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Promo code added successfully.',
        showConfirmButton: false,
        timer: 2000
    })
}