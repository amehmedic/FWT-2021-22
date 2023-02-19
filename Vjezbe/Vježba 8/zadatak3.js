var Operacije =(function(){
    var operand1={x:0,y:0};
    var saberi = function(operand2)
    {
      return operand1= {x:operand1.x+operand2.x,y:operand1.y+operand2.y};
    }
    var oduzmi = function(operand2)
    {
      return operand1= {x:operand1.x-operand2.x,y:operand1.y-operand2.y};
    }
    var sx = function(operand2)
    {
      return operand1.x*operand2.x+operand1.y*operand2.y;
    }
    var postaviX1 = function(X1)
    {
      return operand1=X1;
    }
    var ispisi = function()
    {
      console.log("x: "+operand1.x+" , y: "+operand1.y);
    }
    return {
      saberi: saberi,
      oduzmi: oduzmi,
      sx: sx,
      postaviX1: postaviX1,
      ispisi: ispisi
  }
}());

