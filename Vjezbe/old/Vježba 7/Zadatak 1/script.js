function ukloniTagove(str) { 
    if ((str===null) || (str==='')) 
        return false; 
    else
        str = str.toString(); 
    return str.replace( /(<([^>]+)>)/ig, ''); 
}

function zamijeni() {
    var tekst_area =document.getElementById("textArea");
    console.log(tekst_area.value);
    tekst_area.value = ukloniTagove(tekst_area.value); 
}