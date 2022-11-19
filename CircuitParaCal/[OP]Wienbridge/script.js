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
    document.getElementById("result").innerHTML="";
}
function confirm(){
    c = Number(document.getElementById("c").value);
    r = Number(document.getElementById("r").value);

    if(!isNaN(c)&&not_null("c")&&!isNaN(r)&&not_null("r")){
        f = 1 / (2 * 3.15159 * r * c);

        document.getElementById("result").innerHTML = "频率：" + f.toPrecision(3) + "kHz";
    }
}

