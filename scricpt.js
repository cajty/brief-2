menu.addEventListener("click", () => {
    if (document.getElementById("menu-contant").style.display === "none") document.getElementById("menu-contant").style.display = "block";
    else document.getElementById("menu-contant").style.display = "none"
});
 rev1.addEventListener("click", () => {
     document.getElementById("sec_1").style.display = "none"
     p_1 = 0;
     totals();
 });
 rev2.addEventListener("click", () => {
     document.getElementById("sec_2").style.display = "none"
     p_2 = 0;
     totals();
 });
 rev5.addEventListener("click", () => {
     document.getElementById("sec_5").style.display = "none"
     //p_5 = 0;
    // mois(p_1, p_id_1);
     totals();
 });
 var demor = document.getElementById("demo");
 var p_2 =  1;
 var p_1 = 2;
var p_5 = 1;

 function totals(){
    var total = 20 * p_1 + 19 * p_5 + 25 * p_2;
     demor.innerText = total + ".00$";
 }

// var p_id_2 =  document.getElementById("num_2_prodt");
// var p_id_5 =  document.getElementById("num_5_prodt");
// var p_id_1 =  document.getElementById("num_1_prodt");
 



// var mois_1 = document.getElementById("mois_1");
// var mois_2 = document.getElementById("mois_2");
// var mois_5 = document.getElementById("mois_5");
// //var plus_1 = document.getElementById("plus_1");
// var plus_2 = document.getElementById("plus_2");
// var plus_5 = document.getElementById("plus_5");





// //mois_1.addEventListener("click", );
// //mois_2.addEventListener("click", plus(p_2,  p_id_2 ));
// //mois_5.addEventListener("click", plus(p_5,  p_id_5 ));
// //
// //plus_1.addEventListener("click", mois(p_1,  p_id_1 ));
// //plus_2.addEventListener("click", mois(p_2,  p_id_2 ));
// //plus_5.addEventListener("click", mois(p_5,  p_id_5 ));


// plus_1.addEventListener("click", () => {
//     plus(p_1, p_id_1 );
//     totals();
// });





// function plus(x, id) {
//     x++;

//    id.innerText =  x;
//     totals();


// }
// function mois(x, ids) {

//     x--;
//     ids.innerText = x ;
//     totals();
// }






// function validateForm() {
//     const nompre = document.getElementById("NomPrénom");
//     const address = document.getElementById("Address");;
//     const cartNun = document.getElementById("NumCart");
//     const cartExp = document.getElementById("ExpCart");
//     const code = document.getElementById("Code");

//     // Regular expressions
//     const cardN_r_exp = /(^4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)|(3[47][0-9]{13})|(^3(?:0[0-5]|[68][0-9])[0-9]{11}$)|(^6(?:011|5[0-9]{2})[0-9]{12}$)|(^(?:2131|1800|35\d{3})\d{11}$)/;
//     const expCart_r_exp = /(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/;
//     const code_r_exp = /^\d{3}$/;

//     let isValid = true;

//     if (nompre.value.trim() === "") {
//         alert("Please enter your name and surname.");
//         isValid = false;
//     }

//     if (address.value.trim() === "") {
//         alert("Please enter your address.");
//         isValid = false;
//     }

//     if (!cardN_r_exp.test(cartNun.value)) {
//         alert("Please enter a valid 16-digit credit card number.");
//         isValid = false;
//     }

//     if (!expCart_r_exp.test(cartExp.value)) {
//         alert("Please enter a valid expiration date in MM/YYYY format.");
//         isValid = false;
//     }

//     if (!code_r_exp.test(code.value)) {
//         alert("Please enter a valid 3-digit security code.");
//         isValid = false;
//     }

//     return isValid;
// }

// // Event listener for form submission
// const form = document.getElementById("form");
// form.addEventListener("submit", function (e) {
//     if (!validateForm()) {
//         e.preventDefault();
//     }
// });
