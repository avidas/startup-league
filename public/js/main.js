$(document).ready(function() {

  // Place JavaScript code here...
  // 
  // 
    function animateRows() {
        // simple animation to fade in all but the top story
        
        var rowNum = 0;
        var dur = 50;
        $(".feed li").each(function() {
            console.log("here");
            if (rowNum === 1) { 
                // skip 1st row
                return; 
            } 
            // capture current row
            var elm = $(this);
            console.log(elm);
            // schedule it to fade in
            setTimeout(function() { 
                console.log("here");
                elm.fadeIn();
            }, dur); 
            dur += 50;
            rowNum += 1;
        });
    };

    function disFlash() {
      setTimeout(function(){
        $('.alert').slideUp(1500);
      }, 2500);
    };

    //animateRows();
    disFlash();
});