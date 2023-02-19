window.onload = function () {
    var prva = document.querySelectorAll('ul.prva li');
      for(let i=0;i<prva.length;i++) {
          prva[i].style.display="none";
      }
      
    var druga = document.querySelectorAll('ul.druga li');
      for(let i=0;i<druga.length;i++) {
          druga[i].style.display="none";
      }
  }
  // ovo radimo da izbrisemo defaultni stil

  // dodajemo za onClick
  function klikDugme1(referenca) { 
    var prva = document.querySelectorAll('ul.prva li');
    if (referenca.textContent=="+ Prva godina") {
      referenca.textContent="- Prva godina";
      for(let i=0;i<prva.length;i++) {
          prva[i].style.display="block";
      }
    }
    else {
      referenca.textContent="+ Prva godina";    
      for(let i=0;i<prva.length;i++) {
          prva[i].style.display="none";
      }
    }
  }
  
  function klikDugme2(referenca) {	// pristup elementu preko this 
    var druga = document.querySelectorAll('ul.druga li');
    if (referenca.textContent=="+ Druga godina") {
      referenca.textContent="- Druga godina";
      for(let i=0;i<druga.length;i++) {
          druga[i].style.display="block";
      }
    }
    else {
      referenca.textContent="+ Druga godina";    
      for(let i=0;i<druga.length;i++) {
          druga[i].style.display="none";
      }
    }
  }