function foruwhile(str) { 
    if ((str===null) || (str==='')) 
        return false; 
    else
        str = str.toString(); 
    return str.replace(/\{(.+?)\/(.+?)\}/, '');
}

function zamijeni() {
    var tekst_area =document.getElementById("textArea");
    console.log(tekst_area.value);
    tekst_area.value = foruwhile(tekst_area.value); 
}