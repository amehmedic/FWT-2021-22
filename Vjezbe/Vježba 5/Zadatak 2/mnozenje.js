napraviTabelu(11,10);
function napraviTabelu(redovi, kolone) {
    var j=1;
    var izlaz = "<table border='1' width='500' cellspacing='0' cellpadding='5'>"
    for(i=1; i<=redovi; i++) {
        izlaz = izlaz + "<tr>";
        if(i!=1) {
            izlaz = izlaz + "<th>" + (i-1) + "</th>";
        }
        while(j <= kolone) {
            if(i == 1 && j == 1) {
                izlaz = izlaz + "<th>X</th>";
            }
            if(i==1) {
                izlaz = izlaz + "<th>" + i*j + "</th>";
            }
            else {
                izlaz = izlaz + "<td>" + (i-1)*(j) + "</td>";
            }
            j = j+1;
        }

        izlaz = izlaz + "</tr>";
        j=1;
    }
    izlaz = izlaz + "</table>";
    document.write(izlaz);
}