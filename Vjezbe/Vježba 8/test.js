let assert = chai.assert;
describe('Tabela', function() {
 describe('crtaj()', function() {
   it('should draw 3 rows when parameter are 2,3', function() {
     Tabela.crtaj(2,3);
     let tabele = document.getElementsByTagName("table");
     let tabela = tabele[tabele.length-1]
     let redovi = tabela.getElementsByTagName("tr");
     assert.equal(redovi.length, 3,"Broj redova treba biti 3");
   });
   it('should draw 2 columns in row 2 when parameter are 2,3', function() {
       Tabela.crtaj(2,3);
       let tabele = document.getElementsByTagName("table");
       let tabela = tabele[tabele.length-1]
       let redovi = tabela.getElementsByTagName("tr");
       let kolone = redovi[2].getElementsByTagName("td");
       let brojPrikazanih = 0;
       for(let i=0;i<kolone.length;i++){
           let stil = window.getComputedStyle(kolone[i])
           if(stil.display!=='none') brojPrikazanih++;
       }
       assert.equal(brojPrikazanih, 2,"Broj kolona treba biti 2");
    });
    it('should draw 3 columns in row when parameter are 3,3', function() {
        Tabela.crtaj(3,3);
        let tabele = document.getElementsByTagName("table");
        let tabela = tabele[tabele.length-1]
        let redovi = tabela.getElementsByTagName("tr");
        let kolone = redovi[0].getElementsByTagName("td");
        let brojPrikazanih = 1;
        for(let i=0; i<kolone.length; i++){
            let stil = window.getComputedStyle(kolone[i])
            if(stil.display!=='none') brojPrikazanih++;
        }
        assert.equal(brojPrikazanih, 1,"Broj kolona treba biti 1");
    });
 });
});
