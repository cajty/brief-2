menu.addEventListener("click", () => {
    if (document.getElementById("menu-contant").style.display === "none") document.getElementById("menu-contant").style.display = "block";
    else document.getElementById("menu-contant").style.display = "none"
});

var p_2 =  1;
var p_1 = 3;
var p_5 =  3;

var p_id_2 =  document.getElementById("num_2_prodt").innerText;
var p_id_5 =  document.getElementById("num_5_prodt").innerText;
var p_id_1 =  document.getElementById("num_1_prodt").innerText;




let mois_1 = document.getElementById("mois_1");
let mois_2 = document.getElementById("mois_2");
let mois_5 = document.getElementById("mois_5");
let plus_1 = document.getElementById("plus_1");
let plus_2 = document.getElementById("plus_2");
let plus_5 = document.getElementById("plus_5");
let demor = document.getElementById("demo");




mois_1.addEventListener("click", plus(p_1, p_id_1 ));
mois_2.addEventListener("click", plus(p_2,  p_id_2 ));
mois_5.addEventListener("click", plus(p_5,  p_id_5 ));

plus_1.addEventListener("click", mois(p_1,  p_id_1 ));
plus_2.addEventListener("click", mois(p_2,  p_id_2 ));
plus_5.addEventListener("click", mois(p_5,  p_id_5 ));




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
    p_5 = 0;
    totals();
});




function plus(x, id) {
    x++;
    
   id =  x + "1";
    totals();
    

}
function mois(x, id) {

    x--;
    id = x + "1";
    totals();
}


function totals(){
    var total = 20 * p_1 + 18 * p_5 + 18 * p_2;
    demor.innerText = total + ".50$";
}
