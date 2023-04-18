function choose_content(i){
    for(k = 0; k < 3; k++){
        document.getElementById(""+ k).style.display = "none";
    }
    document.getElementById(""+ i).style.display = "block";
}
