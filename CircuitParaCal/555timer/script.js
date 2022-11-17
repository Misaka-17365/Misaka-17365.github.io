function not_null(id){
    k = document.getElementById(id).value;
    if(k == "" || k == null || k == undefined){
        return false;
    }
    return true;
}
function clearNumber(){
    document.getElementById("c").value = "";
    document.getElementById("r1").value = "";
    document.getElementById("r2").value = "";
    document.getElementById("result").innerHTML="";
}
function confirm(){
    c = Number(document.getElementById("c").value);
    r1 = Number(document.getElementById("r1").value);
    r2 = Number(document.getElementById("r2").value);

    if(!isNaN(c)&&not_null("c")&&!isNaN(r1)&&not_null("r1")&&!isNaN(r2)&&not_null("r2")){
        D = (r1 + r2)/(r1 + 2 * r2);
        f = 1 / (0.693 * (r1 + r2 * 2) * c);

        document.getElementById("result").innerHTML = "频率：" + f.toPrecision(3) + "kHz,占空比：" + (D*100).toPrecision(3) + "%";
    }
}

