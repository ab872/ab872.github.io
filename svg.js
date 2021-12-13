<!--  svg_js  -->



// start      svg.js


//  this JavaScript file attempts to override the slight differences
//  in page rendering by different browsers

//  the goal is to provide a more consistent cross-browser experience



   //  obtain the navigator info
   var whichAgent = navigator.userAgent;
 

    var isFirefox = whichAgent.includes("Firefox"); 

    var isChrome = whichAgent.includes("Chrome"); 

    var isSafari = whichAgent.includes("Safari"); 

    var isiPad = whichAgent.includes("iPad"); 

    var isEdge = whichAgent.includes("Edge"); 

    var isWin10 = whichAgent.includes("Windows NT 10.0"); 

    var isAndroid4 =  whichAgent.includes("Android 4"); 

    var isAndroid6 = whichAgent.includes("Android 6"); 


    //  var browsersFound = 0;


   //  there are a couple of cases where there are duplicate matches
   //  these two overrides correct the situation
    if (isChrome) { 
           isSafari = false;
    }

    if (isEdge) { 
           isChrome = false; 
    } 






   if (isFirefox) { 

//  adjust the size of the Bootstrap icon
//  id="BootstrapIcon"
document.getElementById("BootstrapIcon").style.width="32px"; 
document.getElementById("BootstrapIcon").style.height="32px";


//  adjust the size of the captions
//  under the graphics
//  original font size    6px
//  id="textCaption1"
//              to
//  id="textCaption10"
document.getElementById('textCaption1').style.fontSize="36px";

//  original   line-height: 50%
document.getElementById('textCaption1').style.lineHeight="95%";


document.getElementById('textCaption2').style.fontSize="36px";

//  original   line-height: 50%
document.getElementById('textCaption2').style.lineHeight="95%";


document.getElementById('textCaption3').style.fontSize="36px";

//  original   line-height: 50%
document.getElementById('textCaption3').style.lineHeight="95%";


document.getElementById('textCaption4').style.fontSize="36px";

//  original   line-height: 50%
document.getElementById('textCaption4').style.lineHeight="95%";


document.getElementById('textCaption5').style.fontSize="36px";

//  original   line-height: 50%
document.getElementById('textCaption5').style.lineHeight="95%";



document.getElementById('textCaption6').style.fontSize="36px";

//  original   line-height: 50%
document.getElementById('textCaption6').style.lineHeight="95%";




document.getElementById('textCaption7').style.fontSize="36px";

//  original   line-height: 50%
document.getElementById('textCaption7').style.lineHeight="95%";



document.getElementById('textCaption8').style.fontSize="36px";

//  original   line-height: 50%
document.getElementById('textCaption8').style.lineHeight="95%";




document.getElementById('textCaption9').style.fontSize="36px";

//  original   line-height: 50%
document.getElementById('textCaption9').style.lineHeight="95%";




document.getElementById('textCaption10').style.fontSize="36px";

//  original   line-height: 50%
document.getElementById('textCaption10').style.lineHeight="95%";







   } else if (isChrome) { 

//  adjust the size of the Bootstrap icon
//  id="BootstrapIcon"
document.getElementById("BootstrapIcon").style.width="16px"; 
document.getElementById("BootstrapIcon").style.height="16px";



//  adjust the size of the captions
//  under the graphics
//  original font size    6px
//  id="textCaption1"
//              to
//  id="textCaption10"
document.getElementById('textCaption1').style.fontSize="19px";

document.getElementById('textCaption2').style.fontSize="19px";

document.getElementById('textCaption3').style.fontSize="19px";

document.getElementById('textCaption4').style.fontSize="19px";

document.getElementById('textCaption5').style.fontSize="19px";

document.getElementById('textCaption6').style.fontSize="19px";

document.getElementById('textCaption7').style.fontSize="19px";

document.getElementById('textCaption8').style.fontSize="19px";

document.getElementById('textCaption9').style.fontSize="19px";

document.getElementById('textCaption10').style.fontSize="19px";





   } else if (isSafari) { 



   } else if (isEdge) { 


//  adjust the size of the captions
//  under the graphics
//  original font size    6px
//  id="textCaption1"
//              to
//  id="textCaption10"
document.getElementById('textCaption1').style.fontSize="18px";

//  original   line-height: 50%
document.getElementById('textCaption1').style.lineHeight="95%";


document.getElementById('textCaption2').style.fontSize="18px";

//  original   line-height: 50%
document.getElementById('textCaption2').style.lineHeight="95%";


document.getElementById('textCaption3').style.fontSize="18px";

//  original   line-height: 50%
document.getElementById('textCaption3').style.lineHeight="95%";


document.getElementById('textCaption4').style.fontSize="18px";

//  original   line-height: 50%
document.getElementById('textCaption4').style.lineHeight="95%";


document.getElementById('textCaption5').style.fontSize="18px";

//  original   line-height: 50%
document.getElementById('textCaption5').style.lineHeight="95%";



document.getElementById('textCaption6').style.fontSize="18px";

//  original   line-height: 50%
document.getElementById('textCaption6').style.lineHeight="95%";




document.getElementById('textCaption7').style.fontSize="18px";

//  original   line-height: 50%
document.getElementById('textCaption7').style.lineHeight="95%";





document.getElementById('textCaption8').style.fontSize="18px";

//  original   line-height: 50%
document.getElementById('textCaption8').style.lineHeight="95%";




document.getElementById('textCaption9').style.fontSize="18px";

//  original   line-height: 50%
document.getElementById('textCaption9').style.lineHeight="95%";




document.getElementById('textCaption10').style.fontSize="18px";

//  original   line-height: 50%
document.getElementById('textCaption10').style.lineHeight="95%";






   } else { 



   } 









function sample1() { 

   //  alert("begin     sample1");

   <!-- 


     -->

   //  alert("end     sample1");

   // end   function sample1
} 



  

  


// end     svg.js