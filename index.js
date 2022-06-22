<!--  index_js  -->



// start      index.js


//  this JavaScript file attempts to override the slight differences
//  in page rendering by different browsers

//  the goal is to provide a more consistent cross-browser experience








   if (isFirefox) { 
           //   begin      Firefox 

if (isAndroid) {
           //   begin      Firefox under Android

alert("Firefox under Android");



if (isAndroid5) { 

// begin     Firefox under Android5

 // id="textIntroduction" 
// Original 14px document.getElementById('textIntroduction').style.fontSize="18px"; 

// id="textIntroductionEmphasized1" document.getElementById('textIntroductionEmphasized1').style.fontSize="19px"; 

// id="textIntroductionEmphasized2" document.getElementById('textIntroductionEmphasized2').style.fontSize="19px";


// the references section overlaps the 
// introduction.

 // id="verticalSpacer1"
 // font-size 19px; 

document.getElementById('verticalSpacer1').innerHTML="<br><br>";


 // end Firefox under Android5 

} else {

// all other Firefox under Android



//  id="textIntroduction" 
//      Original     14px    
//  document.getElementById(
//  'textIntroduction').style.
//  fontSize="96px";


//  id="textIntroductionEmphasized1"
//  document.getElementById(
//  'textIntroductionEmphasized1').style.
//  fontSize="97px";


//  id="textIntroductionEmphasized2"
//  document.getElementById(
//  'textIntroductionEmphasized2').style.
//  fontSize="97px";




//  adjust the size of the
//  Bootstrap icon
//  id="BootstrapIcon"           document.getElementById("BootstrapIcon").style.width="64px"; 
           document.getElementById("BootstrapIcon").style.height="64px";








document.getElementById('textIntroCaption').innerHTML="<i>Preview rendering of printed circuit<br>
board produced by parsing the data files. Rendered using SVG graphics. Early version of the software.</i>";



//  id="textIntroCaption"
//  Original    12px
document.getElementById('textIntroCaption').style.fontSize="78px";






//  id="pdfIcon" 
//  width="16" height="16" 
document.getElementById("pdfIcon").style.width="128px"; 
           document.getElementById("pdfIcon").style.height="128px";





document.getElementById('textSVGanimationCaption').innerHTML="<i>It's possible to animate an SVG. One way<br>
to do so is by using <span id="textAnimationEmphasized1" style="color:Navy;font-size:11px;"><b>JavaScript</b></span> to<br>
manipulate the <span id="textAnimationEmphasized2" style="color:Navy;font-size:11px;"><b>DOM</b></span>.<br>
These are early attempts at <span id="textAnimationEmphasized3" style="color:Navy;font-size:11px;"><b><i>animation<br>
using SVG</i></b></span>. They run inside a <span id="textAnimationEmphasized4" style="color:Navy;font-size:11px;"><b><i>web<br>
browser</i></b></span>, and were written in <span id="textAnimationEmphasized5" style="color:Navy;font-size:11px;"><b><i>2013</i></b></span>. A<br>
short discussion of SVG animation<br>
with references and examples.<br>
Includes a walkthrough of the<br>
code for a simple animation.
</i>";



//    id= textSVGanimationCaption
//    color Grey     font-size 12px

//  document.getElementById
//  ('textSVGanimationCaption').
//  style.fontSize="78px";



//    id="textAnimationEmphasized1" 
//    color Navy     font-size 11px


//    id="textAnimationEmphasized2" 
//    color Navy        font-size 11px


//    id="textAnimationEmphasized3" 
//    color Navy       font-size 11px


//    id="textAnimationEmphasized4" 
//    color Navy     font-size 11px


//    id="textAnimationEmphasized5" 
//    color Navy     font-size 11px


//    svg id="mp4Icon"
//    width="16" height="16" 

//  document.getElementById
//  ("mp4Icon").style.width="128px"; 

//  document.getElementById
//  ("mp4Icon").style.height="128px";





// end     all other Firefox under Android
}



           //   end        Firefox under Android
        } 





        if (isWin10) {
           //   begin      Firefox under Win10




           //   end        Firefox under Win10
        }






           //   end        Firefox 
   } else if (isChrome) { 


        if (isAndroid) {
           //   begin    Chrome under Android

       //      alert("Chrome under Android");



//  id="textIntroCaption"
//  Original    12px
document.getElementById('textIntroCaption').style.fontSize="8px";


document.getElementById('textIntroCaption').innerHTML="<i>Preview rendering of printed circuit<br>
 board produced by parsing the data files. Rendered using SVG graphics. Early version of the software.</i>";




// Necessary for Chrome Android
//   id="verticalSpacer0" 
//   19px

document.getElementById('verticalSpacer0').innerHTML="<br><br>";


     

//  adjust the size of the
//  Bootstrap icon
//  id="BootstrapIcon"           document.getElementById("BootstrapIcon").style.width="64px"; 
           document.getElementById("BootstrapIcon").style.height="64px";






          

//  id="pdfIcon" 
//  width="16" height="16" 
document.getElementById("pdfIcon").style.width="256px"; 
           document.getElementById("pdfIcon").style.height="256px";






 document.getElementById('textIntroduction').style.fontSize = "12px"; 

 document.getElementById('textIntroductionEmphasized1').style.fontSize = "13px"; 

 document.getElementById('textIntroductionEmphasized2').style.fontSize = "13px";



document.getElementById('textSVGanimationCaption').innerHTML="<i>It's possible to animate an SVG. One way<br>
to do so is by using <span id="textAnimationEmphasized1" style="color:Navy;font-size:11px;"><b>JavaScript</b></span> to<br>
manipulate the <span id="textAnimationEmphasized2" style="color:Navy;font-size:11px;"><b>DOM</b></span>.<br>
These are early attempts at <span id="textAnimationEmphasized3" style="color:Navy;font-size:11px;"><b><i>animation<br>
using SVG</i></b></span>. They run inside a <span id="textAnimationEmphasized4" style="color:Navy;font-size:11px;"><b><i>web<br>
browser</i></b></span>, and were written in <span id="textAnimationEmphasized5" style="color:Navy;font-size:11px;"><b><i>2013</i></b></span>. A<br>
short discussion of SVG animation<br>
with references and examples.<br>
Includes a walkthrough of the<br>
code for a simple animation.
</i>";





           //   end       Chrome under Android
         } else {
           //   begin    Chrome others

           //  adjust the size of the 
           //  Bootstrap icon
           //  id="BootstrapIcon"
           document.getElementById("BootstrapIcon").style.width="32px"; 
           document.getElementById("BootstrapIcon").style.height="32px";







             //   end     Chrome others
          }







           //   end        Chrome
   } else if (isSafari) { 


if (isiPad) { 

} else if (isiPhone) { 

} else if (isMac) { 

}



           //   end        Safari
   } else if (isEdge) { 




           //   end        Edge
   } else { 
         //  unknown browser


         //  end      unknown browser
   } 





          
          
  



// end     index.js