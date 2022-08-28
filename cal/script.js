// global var
i = null;
j = null;

mat = [];
trace = [];
rank = null;
determinant = null;

function line_input_onfocus(e)
{
    if(e.value=="行")
    {
        e.value = "";
        e.style.color = "black";
    }
}

function line_input_onblur(e)
{
    if(e.value == ""){e.value="行";e.style.color="rgb(179, 179, 179)";}
    else{
        if (!(/(^[1-9]\d*$)/.test(e.value)))
        {
            e.value="行";e.style.color="rgb(179, 179, 179)";
        }
    }
}

function column_input_onfocus(e)
{
    if(e.value=="列")
    {
        e.value = "";
        e.style.color = "black";
    }
}

function column_input_onblur(e)
{
    if(e.value == ""){e.value="列";e.style.color="rgb(179, 179, 179)";}
    else{
        if (!(/(^[1-9]\d*$)/.test(e.value)))
        {
            e.value="列";e.style.color="rgb(179, 179, 179)";
        }
    }
}
function nar_click(id, sel)
{
    e = document.getElementById(id);
    if(e.value=="行"||e.value=="列"){e.value=1;e.style.color="black";}
    else
    {
        if(sel==0){e.value++};
        if(sel==1){e.value--};
        if(e.value <= 0){e.value++};
    }
}

function submit_line_column(e)
{
    if(document.getElementById("line").value=="行" || document.getElementById("column").value=="列"){
    }
    else{
        e.disabled = true;
        e.style.cursor = "not-allowed";
        i = document.getElementById("line").value;
        j = document.getElementById("column").value;
        draw(i ,j);
        document.getElementById("pre").style.display = "none";
        document.getElementById("main").style.display = "flex";
    }

}
function a()
{
    i = 3;
    j = 3;
    draw(i, j);
}

function draw(i, j)
{
    mat_table = document.getElementById("mat_table");

    for(m = 0; m < i; m++)
    {
        linebox = document.createElement("div");
        mat_table.appendChild(linebox);
        lineOrdinal = document.createElement("a");
        lineOrdinal.innerHTML = "" + (m + 1);
        lineOrdinal.className = "lineOrdinal";
        linebox.appendChild(lineOrdinal);
        for(n = 0; n < j; n++)
        {
            inputbox = document.createElement("input");
            inputbox.className = "inputbox";
            inputbox.id = m + "" + n;
            inputbox.title = (m+1) + "行" + (n+1) + "列";
            linebox.appendChild(inputbox);

            inputbox.onclick = function (){
                if(this.value==0){this.value="";}
            }
            inputbox.onblur = function (){
                if(this.value==""){this.value=0;}
                else if( /\b^0+[1-9]+\b/.test(this.value)){
                    var tmp = this.value.match(/[^0][1-9]*/);
                    this.value = tmp;
                }
            }
        }
    }
    for(m=0;m<i;m++){mat.push([])};
}


function fixZero()
{
    for(m = 0; m < i; m++){
        for(n = 0; n < j; n++){
            get = document.getElementById(""+m+""+n);
            if(get.value==""){get.value=0;}
        }
    }
}
function clearAll()
{
    for(m = 0; m < i; m++){
        for(n = 0; n < j; n++){
            document.getElementById(""+m+""+n).value="";
        }
    }
}

function submit()
{
    flag = 1;
    for(m = 0; m < i; m++){
        for(n = 0; n < j; n++){
            if(document.getElementById(""+m+""+n).value==""){
                flag = 0;
                document.getElementById("in_err").style.display = "block";
                break;
            }
        }
    }
    if(flag==1){
        for(m = 0; m < i; m++){
            for(n = 0; n < j; n++){
                mat[m][n] = Number(document.getElementById(""+m+""+n).value);
            }
        }
    }
    calculate();
    showResult();
}

function calculate()
{
    for (n = 0; n < i; n++)
    {
        if (mat[n][n] == 0)							// 如果这一行的首元是0
        {
            for (m = n + 1; m < i; m++)		// 找到非零的一行
            {
                if (mat[m][n] == 0)
                    {
                        continue;
                    }

                for (place = n; place < i; place++)	// 替换
                {
                    tmp = mat[m][place];
                    mat[m][place] = mat[n][place];
                    mat[m][place] = tmp;
                }
            }
        }


        for (m = n + 1; m < i; m++)					// 按照比例相减
        {
            if(mat[m][n] == 0){continue;}

            k = mat[m][n] / mat[n][n];
            for (place = n; place < j; place++)
            {
                mat[m][place] -= k * mat[n][place];
            }
        }
    }
    rank = 0;
    for(m= 0; m < i; m++)
    {
        for(n = 0; n < j;n++){
            if(mat[m][n]!=0){
                rank++;
                break;
            }
        }
    }
    if(i==j)
    {
        determinant = 1;
        for(t = 0; t < i; t++){
            trace[t] = mat[t][t];
            determinant *=trace[t];
        }
    }
}

function showResult()
{
    re = document.getElementById("result");
    re.style.display = "flex";
    document.getElementById("rank").innerHTML ="秩为"+rank;
    if(determinant != null){
    document.getElementById("determinant").innerHTML = "行列式为"+determinant;
    }

}

document.addEventListener("keydown",function(){
    if(event.keyCode!=13){return;}
    this_id = document.activeElement.id;
    if(!(/\b^\d*$\b/.test(this_id))){return;}
    this_id_s = this_id.split("");
    if(this_id_s[0] < 0 || this_id_s[0] >= i || this_id_s[1] < 0 || this_id_s[2] >= j){return;}
    if(this_id == ""+ (i-1) + (j-1)){this.getElementById("conform").focus();return;}
    if(this_id_s[1]==j-1){
        this_id_s[0]++;
        this_id_s[1] = 0;
        document.getElementById(this_id_s[0] + "" + this_id_s[1]).focus();
    }else{
        this_id = this_id_s[0] + "" + ( Number(this_id_s[1]) + 1);
        this.getElementById(this_id).focus();
    }
    
})