function not_null(id){
    k = document.getElementById(id).value;
    if(k == "" || k == null || k == undefined){
        return false;
    }
    return true;
}
function clearNumber(){
    document.getElementById("frec").value = "";
    document.getElementById("c").value = "";
    document.getElementById("r").value = "";
    document.getElementById("result").innerHTML="";
}
function confirm(){
    f = Number(document.getElementById("frec").value);
    c = Number(document.getElementById("c").value);
    r = Number(document.getElementById("r").value);

    if(isNaN(f) || !not_null("frec")){
        // no frec data
        if(isNaN(c)||!not_null("c") || isNaN(r)||!not_null("r")){
            return;
        }
        f = 1 / (2 * 3.14159 * r * c);
        document.getElementById("result").innerHTML = "截止频率：" + f.toPrecision(3) + " kHz";
    }else{
        if(!isNaN(c)&&not_null("c")){
            // c data exist
            r = 1 / (2 * 3.14159 * c * f);
            document.getElementById("result").innerHTML = "电阻值：" + r.toPrecision(3) + " kΩ";
        }else{
            if(!isNaN(r)&&not_null("r")){
                // r data  exist
                c = 1 / (2 * 3.14159 * r * f);
                document.getElementById("result").innerHTML = "电容值：" + c.toPrecision(3) + " uF";        
            }else{
                // onle frec
                r = 1 / (2 * 3.14159 * 0.01 * f);
                document.getElementById("c").value = "0.01";
                document.getElementById("result").innerHTML = "电阻值：" + r.toPrecision(3) + " kΩ";
                }
        }
    }
}

