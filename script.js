var eng = 0;
var engurl = 'https://cn.bing.com/search?q=';
var skin = 0;

function searchgo()
{
    if(document.getElementById('searchbar').value!='Something to Search'){
        window.open(engurl+document.getElementById('searchbar').value);
    }
}

function changeColor() {
    if (document.getElementById("searchbar").value != "Something to Search") { 
        if(skin == 0){
            document.getElementById("searchbar").style.color = "black"; 
        }
        if(skin == 1){
            document.getElementById("searchbar").style.color = "white"; 
        }
    }
    else { document.getElementById("searchbar").style.color = "rgba(128, 128, 128, 0.503)"; }
}

function changeEng(n)
{
    eng = n;
    a = document.getElementById("engdis");
    switch (eng){
        case 0:
            a.innerHTML = "Bing";
            engurl = 'https://cn.bing.com/search?q=';
            break;
        case 1:
            a.innerHTML = "Ecosia";
            engurl = 'https://www.ecosia.org/search?q=';
            break;
        case 2:
            a.innerHTML = "Google";
            engurl = 'https://www.google.com/search?q=';
            break;
    } 
}

function changeSkin()
{
    if(skin == 0){
        skin = 1;
        document.getElementById("skin").href = "style_night.css";
        document.getElementById("skinswitch").src = "figure/night.svg";
        return;
    }
    if(skin == 1){
        skin = 0;
        document.getElementById("skin").href = "style_day.css";
        document.getElementById("skinswitch").src = "figure/day.svg";
        return;
    }
}
