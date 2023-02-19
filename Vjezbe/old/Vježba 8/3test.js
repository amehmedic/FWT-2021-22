let assert = chai.assert;
describe('Operacije', function() {
    var operand1={x:0,y:0};
    describe('saberi',function(){
        it('Dodaje vrijednosti x:3 i y:3, kada je operand1 x:2 i y:2', function() {
            Operacije.postaviX1({x:2,y:2});
            Operacije.ispisi();
            var operand2={x:3,y:3};
            var operand3 = Operacije.saberi(operand2);
            Operacije.ispisi();

            console.log("operand 3", operand3);
            assert.equal(operand3.x,5,'x treba biti 5');
            assert.equal(operand3.y,5,'y treba biti 5');
            
        });
    });

    describe('oduzmi',function(){
        it('Oduzima vrijednosti x:2 i y:2 kada je operand1 x:5 i y:5', function() {
            Operacije.postaviX1({x:5,y:5});
            Operacije.ispisi();
            var operand2={x:3,y:3};
            var operand4 = Operacije.oduzmi(operand2);
            Operacije.ispisi();
 
            console.log("operand 4", operand4);
            assert.equal(operand4.x,2,'x treba biti 2');
            assert.equal(operand4.y,2,'y treba biti 2');

        });
    });
});