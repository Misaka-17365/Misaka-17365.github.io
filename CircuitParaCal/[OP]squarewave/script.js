function not_null(id){
    k = document.getElementById(id).value;
    if(k == "" || k == null || k == undefined){
        return false;
    }
    return true;
}
function clearNumber(){
    document.getElementById("c").value = "";
    document.getElementById("r").value = "";
    document.getElementById("k").value = "";
    document.getElementById("result").innerHTML="";
}
function confirm(){
    c = Number(document.getElementById("c").value);
    r = Number(document.getElementById("r").value);
    k = Number(document.getElementById("k").value);

    if(!isNaN(c)&&not_null("c")&&!isNaN(r)&&not_null("r")&&!isNaN(k)&&not_null("k")){
        f = 1 / (2 * r * c * Math.log(1 + 2*k));

        document.getElementById("result").innerHTML = "频率：" + f.toPrecision(3) + "kHz,占空比：50%";
    }
}

