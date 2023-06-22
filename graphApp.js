<!--  graphApp_js  -->



// start      graphApp.js



//  this JavaScript file attempts to override the slight differences
//  in page rendering by different browsers

//  the goal is to provide a more consistent cross-browser experience


//    alert("graphApp   js   has loaded   ****");



   if (isFirefox) { 
           //   begin      Firefox 

if (isAndroid) {
           //   begin      Firefox under Android

//    alert("Firefox under Android");

           //  adjust the size of the 
           //  Bootstrap icon
           //  id="BootstrapIcon"
           document.getElementById("BootstrapIcon").style.width="96px"; 
           document.getElementById("BootstrapIcon").style.height="96px";



//  id="textIntroduction" 
//  document.getElementById
//  ('textIntroduction').style.
//  fontSize="38px";


//  id="textIntroductionEmphasized1"
//  document.getElementById
//  ('textIntroductionEmphasized1').style.
//  fontSize="39px";



//   id="textTitle"
//    Original    24px
document.getElementById('textTitle').style.fontSize="40px";


id="textTitle2"
document.getElementById('textTitle2').style.fontSize="36px";


id="textTitle3"
document.getElementById('textTitle3').style.fontSize="36px";








//  id="textReferenceHeading" 
//  Original      12px
document.getElementById('textReferenceHeading').style.fontSize="36px";



//  id="textCopyright"
document.getElementById('textCopyright').style.fontSize="17px";


//  id="textBootstrap"
document.getElementById('textBootstrap').style.fontSize="17px";


//  id="textBootstrapLicense"
document.getElementById('textBootstrapLicense').style.fontSize="17px";


//  id="textIconsModified"
document.getElementById('textIconsModified').style.fontSize="17px";






//  id="decreaseVolumeButton"

//  id="volumeSlider" 
//  width:340px    height:60px

//  id="increaseVolumeButton"
//  id="muteButton"








           //   end        Firefox under Android
        } 


        if (isWin10) {
           //   begin      Firefox under Win10

      //     alert("Firefox under Win10");


//  id="textReferenceHeading" 
//  Original      12px
document.getElementById('textReferenceHeading').style.fontSize="36px";



//  id="textCopyright"
document.getElementById('textCopyright').style.fontSize="32px";


//  id="textBootstrap"
document.getElementById('textBootstrap').style.fontSize="32px";


//  id="textBootstrapLicense"
document.getElementById('textBootstrapLicense').style.fontSize="32px";


//  id="textIconsModified"
document.getElementById('textIconsModified').style.fontSize="32px";





//  id="textTitle"
//  24px
//  <b>Using the Canvas in C#</b>
document.getElementById('textTitle').style.fontSize="65px";


//  id="textIntroductionPre"
//  10px
document.getElementById('textIntroductionPre').style.fontSize="28px";



//  id="textCanvas1"
//  10px
//  <b>Operating System:</b>
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
document.getElementById('textCanvas1').style.fontSize="24px";



//  id="textCanvas2"
//  10px
//  <b>
//  Windows 7 - 10
//  </b>
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
document.getElementById('textCanvas2').style.fontSize="24px";



//  id="textCanvas3"
//  10px
//  <b>Development IDE:</b>
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
document.getElementById('textCanvas3').style.fontSize="24px";



//  id="textCanvas4"
//  10px
//  <b>
//  Visual Studio
//  </b>
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;
document.getElementById('textCanvas4').style.fontSize="24px";


//  id="textCanvas5"
//  10px
//  <b>Language:</b>
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;
document.getElementById('textCanvas5').style.fontSize="24px";

document.getElementById('textCanvas5').innerHTML=
	'<b>Language:</b>' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';



//  id="textCanvas6"
//  10px
//  <b>
//  C#
//  </b>
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
document.getElementById('textCanvas6').style.fontSize="24px";

document.getElementById('textCanvas6').innerHTML=
	'<b>C#</b>' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;';




//  id="textCanvas7"
//  10px
//  <b>Demo features:</b>
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;
document.getElementById('textCanvas7').style.fontSize="24px";

document.getElementById('textCanvas7').innerHTML=
	'<b>Demo features:</b>' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;';




//  id="textCanvas8"
//  10px
//  <b>
//  &#x2022; 1. Drawing on the Windows graphic Canvas.
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  <br>
//  &#x2022; 2. Data inspection via zoom in or zoom out.
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;
//  <br>
//  &#x2022; 3. Dynamic repositioning of the viewing window.
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;
//  <br>
//  &#x2022; 4. Selectable data cursors.
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;
//  <br>
//  &#x2022; 5. Step through the data using the cursor.
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;
//  </b>
document.getElementById('textCanvas8').style.fontSize="24px";

document.getElementById('textCanvas8').innerHTML= 
	'<b>' + 
	'&#x2022; 1. Drawing on the Windows graphic Canvas.' + 
	'&nbsp;&nbsp;<br>' + 
	'&#x2022; 2. Data inspection via zoom in or zoom out.' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'<br>' + 
	'&#x2022; 3. Dynamic repositioning of the viewing' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'<br>' + 
	'window.' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;' + 
	'<br>' + 
	'&#x2022; 4. Selectable data cursors.' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;' + 
	'<br>' + 
	'&#x2022; 5. Step through the data using the cursor.' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;' + 
	'</b>';













//  id="textIntroduction"
//  10px
document.getElementById('textIntroduction').style.fontSize="28px";


//  id="textIntroductionEmphasized1"
//  10px
//  <b>learning experience</b>
document.getElementById('textIntroductionEmphasized1').style.fontSize="24px";


//  id="textIntroductionEmphasized2"
//  10px
//  <b>drawing graphics</b>
document.getElementById('textIntroductionEmphasized2').style.fontSize="24px";


//  id="textIntroductionEmphasized3"
//  10px
//  <b>2010</b>
document.getElementById('textIntroductionEmphasized3').style.fontSize="24px";


//  id="textIntroductionEmphasized4"
//  10px
//  <b>graphs</b>
document.getElementById('textIntroductionEmphasized4').style.fontSize="24px";


//  id="textIntroductionEmphasized5"
//  10px
//  <b>Up to ten graphs</b>
document.getElementById('textIntroductionEmphasized5').style.fontSize="24px";


//  id="textIntroductionEmphasized6"
//  10px
//  <b>zoom in</b>
document.getElementById('textIntroductionEmphasized6').style.fontSize="24px";


//  id="textIntroductionEmphasized7"
//  10px
//  <b>zoom out</b>
document.getElementById('textIntroductionEmphasized7').style.fontSize="24px";


//  id="textIntroductionEmphasized8"
//  10px
//  <b>reposition the viewing window</b>
document.getElementById('textIntroductionEmphasized8').style.fontSize="24px";


//  id="textIntroductionEmphasized9"
//  10px
//  <b>step through the data</b>
document.getElementById('textIntroductionEmphasized9').style.fontSize="24px";


//  id="textIntroductionEmphasized10"
//  10px
//  <b>cursor</b>
document.getElementById('textIntroductionEmphasized10').style.fontSize="24px";



//  id="noVideoExplanation"
//  12px
document.getElementById('noVideoExplanation').style.fontSize="24px";


//  id="selectExplanation"
//  12px
document.getElementById('selectExplanation').style.fontSize="24px";




//  id="textReference1"
//  10px
document.getElementById('textReference1').style.fontSize="24px";


//  id="textReferenceView1"
//  11px
document.getElementById('textReferenceView1').style.fontSize="24px";



//  id="textReferenceLink1"
//  11px
document.getElementById('textReferenceLink1').style.fontSize="24px";




//  id="textReference2"
//  10px
document.getElementById('textReference2').style.fontSize="24px";

//  id="textReferenceView2"
//  11px
document.getElementById('textReferenceView2').style.fontSize="24px";


//  id="textReferenceLink2"
//  11px
document.getElementById('textReferenceLink2').style.fontSize="24px";





//  id="textReference3"
//  10px
document.getElementById('textReference3').style.fontSize="24px";

//  id="textReferenceView3"
//  11px
document.getElementById('textReferenceView3').style.fontSize="24px";


//  id="textReferenceLink3"
//  11px
document.getElementById('textReferenceLink3').style.fontSize="24px";




//  id="textReference4"
//  10px
document.getElementById('textReference4').style.fontSize="24px";

//  id="textReferenceView4"
//  11px
document.getElementById('textReferenceView4').style.fontSize="24px";


//  id="textReferenceLink4"
//  11px
document.getElementById('textReferenceLink4').style.fontSize="24px";




//  id="textReference5"
//  10px
document.getElementById('textReference5').style.fontSize="24px";

//  id="textReferenceView5"
//  11px
document.getElementById('textReferenceView5').style.fontSize="24px";


//  id="textReferenceLink5"
//  11px
document.getElementById('textReferenceLink5').style.fontSize="24px";



//  id="textReference5Emphasized1"
//  10px
document.getElementById('textReference5Emphasized1').style.fontSize="24px";


//  id="textReference5Emphasized2"
//  10px
document.getElementById('textReference5Emphasized2').style.fontSize="24px";



//  id="textReference6"
//  10px
document.getElementById('textReference6').style.fontSize="24px";

//  id="textReferenceView6"
//  11px
document.getElementById('textReferenceView6').style.fontSize="24px";


//  id="textReferenceLink6"
//  11px
document.getElementById('textReferenceLink6').style.fontSize="24px";




//  id="textReference7"
//  10px
document.getElementById('textReference7').style.fontSize="24px";

//  id="textReferenceView7"
//  11px
document.getElementById('textReferenceView7').style.fontSize="24px";


//  id="textReferenceLink7"
//  11px
document.getElementById('textReferenceLink7').style.fontSize="24px";




//  id="textReference8"
//  10px
document.getElementById('textReference8').style.fontSize="24px";

//  id="textReferenceView8"
//  11px
document.getElementById('textReferenceView8').style.fontSize="24px";


//  id="textReferenceLink8"
//  11px
document.getElementById('textReferenceLink8').style.fontSize="24px";



//  id="textReference9"
//  10px
document.getElementById('textReference9').style.fontSize="24px";

//  id="textReferenceView9"
//  11px
document.getElementById('textReferenceView9').style.fontSize="24px";


//  id="textReferenceLink9"
//  11px
document.getElementById('textReferenceLink9').style.fontSize="24px";




//  id="textReference10"
//  10px
document.getElementById('textReference10').style.fontSize="24px";

//  id="textReferenceView10"
//  11px
document.getElementById('textReferenceView10').style.fontSize="24px";


//  id="textReferenceLink10"
//  11px
document.getElementById('textReferenceLink10').style.fontSize="24px";





//  id="textReference11"
//  10px
document.getElementById('textReference11').style.fontSize="24px";

//  id="textReferenceView11"
//  11px
document.getElementById('textReferenceView11').style.fontSize="24px";


//  id="textReferenceLink11"
//  11px
document.getElementById('textReferenceLink11').style.fontSize="24px";





//  id="textReference12"
//  10px
document.getElementById('textReference12').style.fontSize="24px";

//  id="textReferenceView12"
//  11px
document.getElementById('textReferenceView12').style.fontSize="24px";


//  id="textReferenceLink12"
//  11px
document.getElementById('textReferenceLink12').style.fontSize="24px";






//  id="textReference13"
//  10px
document.getElementById('textReference13').style.fontSize="24px";

//  id="textReferenceView13"
//  11px
document.getElementById('textReferenceView13').style.fontSize="24px";


//  id="textReferenceLink13"
//  11px
document.getElementById('textReferenceLink13').style.fontSize="24px";






//  id="textReference14"
//  10px
document.getElementById('textReference14').style.fontSize="24px";

//  id="textReferenceView14"
//  11px
document.getElementById('textReferenceView14').style.fontSize="24px";


//  id="textReferenceLink14"
//  11px
document.getElementById('textReferenceLink14').style.fontSize="24px";





//  id="textReference15"
//  10px
document.getElementById('textReference15').style.fontSize="24px";

//  id="textReferenceView15"
//  11px
document.getElementById('textReferenceView15').style.fontSize="24px";


//  id="textReferenceLink15"
//  11px
document.getElementById('textReferenceLink15').style.fontSize="24px";




//  id="textReference16"
//  10px
document.getElementById('textReference16').style.fontSize="24px";

//  id="textReferenceView16"
//  11px
document.getElementById('textReferenceView16').style.fontSize="24px";


//  id="textReferenceLink16"
//  11px
document.getElementById('textReferenceLink16').style.fontSize="24px";





//  id="textReference17"
//  10px
document.getElementById('textReference17').style.fontSize="24px";

//  id="textReferenceView17"
//  11px
document.getElementById('textReferenceView17').style.fontSize="24px";


//  id="textReferenceLink17"
//  11px
document.getElementById('textReferenceLink17').style.fontSize="24px";






//  id="textReference18"
//  10px
document.getElementById('textReference18').style.fontSize="24px";

//  id="textReferenceView18"
//  11px
document.getElementById('textReferenceView18').style.fontSize="24px";


//  id="textReferenceLink18"
//  11px
document.getElementById('textReferenceLink18').style.fontSize="24px";





//  id="textReference19"
//  10px
document.getElementById('textReference19').style.fontSize="24px";

//  id="textReferenceView19"
//  11px
document.getElementById('textReferenceView19').style.fontSize="24px";


//  id="textReferenceLink19"
//  11px
document.getElementById('textReferenceLink19').style.fontSize="24px";





//  id="textReference20"
//  10px
document.getElementById('textReference20').style.fontSize="24px";

//  id="textReferenceView20"
//  11px
document.getElementById('textReferenceView20').style.fontSize="24px";


//  id="textReferenceLink20"
//  11px
document.getElementById('textReferenceLink20').style.fontSize="24px";





//  id="textReference21"
//  10px
document.getElementById('textReference21').style.fontSize="24px";

//  id="textReferenceView21"
//  11px
document.getElementById('textReferenceView21').style.fontSize="24px";


//  id="textReferenceLink21"
//  11px
document.getElementById('textReferenceLink21').style.fontSize="24px";






//  id="textReference22"
//  10px
document.getElementById('textReference22').style.fontSize="24px";

//  id="textReferenceView22"
//  11px
document.getElementById('textReferenceView22').style.fontSize="24px";


//  id="textReferenceLink22"
//  11px
document.getElementById('textReferenceLink22').style.fontSize="24px";






//  id="textReference23"
//  10px
document.getElementById('textReference23').style.fontSize="24px";

//  id="textReferenceView23"
//  11px
document.getElementById('textReferenceView23').style.fontSize="24px";


//  id="textReferenceLink23"
//  11px
document.getElementById('textReferenceLink23').style.fontSize="24px";







//  id="textReference24"
//  10px
document.getElementById('textReference24').style.fontSize="24px";

//  id="textReferenceView24"
//  11px
document.getElementById('textReferenceView24').style.fontSize="24px";


//  id="textReferenceLink24"
//  11px
document.getElementById('textReferenceLink24').style.fontSize="24px";








//  id="textReference25"
//  10px
document.getElementById('textReference25').style.fontSize="24px";

//  id="textReferenceView25"
//  11px
document.getElementById('textReferenceView25').style.fontSize="24px";


//  id="textReferenceLink25"
//  11px
document.getElementById('textReferenceLink25').style.fontSize="24px";






//  id="textReference26"
//  10px
document.getElementById('textReference26').style.fontSize="24px";

//  id="textReferenceView26"
//  11px
document.getElementById('textReferenceView26').style.fontSize="24px";


//  id="textReferenceLink26"
//  11px
document.getElementById('textReferenceLink26').style.fontSize="24px";




        //  ***   not working   ***
        //   alert("Firefox Win10  -  set template rows");

	//  id="grid-containerIntroduction"
     	//  grid-template-rows: 0.3vh 80vh 0.3vh
	//  document.getElementById('grid-containerIntroduction').style.gridTemplateRows = "0.3vh 80vh 0.3vh;";

        //   alert("Firefox Win10  -  set template rows successful");



           //   end        Firefox under Win10
        } 



           //   end        Firefox 
   } else if (isChrome) { 



        if (isAndroid) {
           //   begin    Chrome under Android

//           alert("Chrome under Android");



           //  adjust the size of the 
           //  Bootstrap icon
           //  id="BootstrapIcon"  
   
      //  document.getElementById
//  ("BootstrapIcon").style.width="32px";   
   
    //  document.getElementById
//  ("BootstrapIcon").style.height="32px";







//  id="textReferenceHeading" 
//  Original      12px
document.getElementById('textReferenceHeading').style.fontSize="16px";




//  id="textBootstrap"
document.getElementById('textBootstrap').style.fontSize="11px";


//  id="textBootstrapLicense"
document.getElementById('textBootstrapLicense').style.fontSize="11px";


//  id="textIconsModified"
document.getElementById('textIconsModified').style.fontSize="11px";






           //   end       Chrome under Android
         } else {
           //   begin    Chrome others


        //  alert("Chrome others");



//  id="textTitle"
//  24px
//  <b>Using the Canvas in C#</b>
document.getElementById('textTitle').style.fontSize="65px";



//  id="textIntroductionPre"
//  10px
document.getElementById('textIntroductionPre').style.fontSize="28px";



//  id="textCanvas1"
//  10px
//  <b>Operating System:</b>
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
document.getElementById('textCanvas1').style.fontSize="24px";



//  id="textCanvas2"
//  10px
//  <b>
//  Windows 7 - 10
//  </b>
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
document.getElementById('textCanvas2').style.fontSize="24px";



//  id="textCanvas3"
//  10px
//  <b>Development IDE:</b>
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
document.getElementById('textCanvas3').style.fontSize="24px";



//  id="textCanvas4"
//  10px
//  <b>
//  Visual Studio
//  </b>
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;
document.getElementById('textCanvas4').style.fontSize="24px";


//  id="textCanvas5"
//  10px
//  <b>Language:</b>
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;
document.getElementById('textCanvas5').style.fontSize="24px";

document.getElementById('textCanvas5').innerHTML=
	'<b>Language:</b>' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';



//  id="textCanvas6"
//  10px
//  <b>
//  C#
//  </b>
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
document.getElementById('textCanvas6').style.fontSize="24px";

document.getElementById('textCanvas6').innerHTML=
	'<b>C#</b>' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;';




//  id="textCanvas7"
//  10px
//  <b>Demo features:</b>
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;
document.getElementById('textCanvas7').style.fontSize="24px";

document.getElementById('textCanvas7').innerHTML=
	'<b>Demo features:</b>' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;';




//  id="textCanvas8"
//  10px
//  <b>
//  &#x2022; 1. Drawing on the Windows graphic Canvas.
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  <br>
//  &#x2022; 2. Data inspection via zoom in or zoom out.
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;
//  <br>
//  &#x2022; 3. Dynamic repositioning of the viewing window.
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;
//  <br>
//  &#x2022; 4. Selectable data cursors.
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;
//  <br>
//  &#x2022; 5. Step through the data using the cursor.
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;
//  </b>
document.getElementById('textCanvas8').style.fontSize="24px";

document.getElementById('textCanvas8').innerHTML= 
	'<b>' + 
	'&#x2022; 1. Drawing on the Windows graphic Canvas.' + 
	'&nbsp;&nbsp;<br>' + 
	'&#x2022; 2. Data inspection via zoom in or zoom out.' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'<br>' + 
	'&#x2022; 3. Dynamic repositioning of the viewing' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'<br>' + 
	'window.' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;' + 
	'<br>' + 
	'&#x2022; 4. Selectable data cursors.' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;' + 
	'<br>' + 
	'&#x2022; 5. Step through the data using the cursor.' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;' + 
	'</b>';






//  id="textIntroduction"
//  10px
document.getElementById('textIntroduction').style.fontSize="28px";


//  id="textIntroductionEmphasized1"
//  10px
//  <b>learning experience</b>
document.getElementById('textIntroductionEmphasized1').style.fontSize="24px";


//  id="textIntroductionEmphasized2"
//  10px
//  <b>drawing graphics</b>
document.getElementById('textIntroductionEmphasized2').style.fontSize="24px";


//  id="textIntroductionEmphasized3"
//  10px
//  <b>2010</b>
document.getElementById('textIntroductionEmphasized3').style.fontSize="24px";


//  id="textIntroductionEmphasized4"
//  10px
//  <b>graphs</b>
document.getElementById('textIntroductionEmphasized4').style.fontSize="24px";


//  id="textIntroductionEmphasized5"
//  10px
//  <b>Up to ten graphs</b>
document.getElementById('textIntroductionEmphasized5').style.fontSize="24px";


//  id="textIntroductionEmphasized6"
//  10px
//  <b>zoom in</b>
document.getElementById('textIntroductionEmphasized6').style.fontSize="24px";


//  id="textIntroductionEmphasized7"
//  10px
//  <b>zoom out</b>
document.getElementById('textIntroductionEmphasized7').style.fontSize="24px";


//  id="textIntroductionEmphasized8"
//  10px
//  <b>reposition the viewing window</b>
document.getElementById('textIntroductionEmphasized8').style.fontSize="24px";


//  id="textIntroductionEmphasized9"
//  10px
//  <b>step through the data</b>
document.getElementById('textIntroductionEmphasized9').style.fontSize="24px";


//  id="textIntroductionEmphasized10"
//  10px
//  <b>cursor</b>
document.getElementById('textIntroductionEmphasized10').style.fontSize="24px";



//  id="noVideoExplanation"
//  12px
document.getElementById('noVideoExplanation').style.fontSize="24px";


//  id="selectExplanation"
//  12px
document.getElementById('selectExplanation').style.fontSize="24px";




//  id="textReferenceHeading" 
//  Original      12px
document.getElementById('textReferenceHeading').style.fontSize="36px";





//  id="textReference1"
//  10px
document.getElementById('textReference1').style.fontSize="24px";


//  id="textReferenceView1"
//  11px
document.getElementById('textReferenceView1').style.fontSize="24px";



//  id="textReferenceLink1"
//  11px
document.getElementById('textReferenceLink1').style.fontSize="24px";




//  id="textReference2"
//  10px
document.getElementById('textReference2').style.fontSize="24px";

//  id="textReferenceView2"
//  11px
document.getElementById('textReferenceView2').style.fontSize="24px";


//  id="textReferenceLink2"
//  11px
document.getElementById('textReferenceLink2').style.fontSize="24px";





//  id="textReference3"
//  10px
document.getElementById('textReference3').style.fontSize="24px";

//  id="textReferenceView3"
//  11px
document.getElementById('textReferenceView3').style.fontSize="24px";


//  id="textReferenceLink3"
//  11px
document.getElementById('textReferenceLink3').style.fontSize="24px";




//  id="textReference4"
//  10px
document.getElementById('textReference4').style.fontSize="24px";

//  id="textReferenceView4"
//  11px
document.getElementById('textReferenceView4').style.fontSize="24px";


//  id="textReferenceLink4"
//  11px
document.getElementById('textReferenceLink4').style.fontSize="24px";




//  id="textReference5"
//  10px
document.getElementById('textReference5').style.fontSize="24px";

//  id="textReferenceView5"
//  11px
document.getElementById('textReferenceView5').style.fontSize="24px";


//  id="textReferenceLink5"
//  11px
document.getElementById('textReferenceLink5').style.fontSize="24px";



//  id="textReference5Emphasized1"
//  10px
document.getElementById('textReference5Emphasized1').style.fontSize="24px";


//  id="textReference5Emphasized2"
//  10px
document.getElementById('textReference5Emphasized2').style.fontSize="24px";



//  id="textReference6"
//  10px
document.getElementById('textReference6').style.fontSize="24px";

//  id="textReferenceView6"
//  11px
document.getElementById('textReferenceView6').style.fontSize="24px";


//  id="textReferenceLink6"
//  11px
document.getElementById('textReferenceLink6').style.fontSize="24px";




//  id="textReference7"
//  10px
document.getElementById('textReference7').style.fontSize="24px";

//  id="textReferenceView7"
//  11px
document.getElementById('textReferenceView7').style.fontSize="24px";


//  id="textReferenceLink7"
//  11px
document.getElementById('textReferenceLink7').style.fontSize="24px";




//  id="textReference8"
//  10px
document.getElementById('textReference8').style.fontSize="24px";

//  id="textReferenceView8"
//  11px
document.getElementById('textReferenceView8').style.fontSize="24px";


//  id="textReferenceLink8"
//  11px
document.getElementById('textReferenceLink8').style.fontSize="24px";



//  id="textReference9"
//  10px
document.getElementById('textReference9').style.fontSize="24px";

//  id="textReferenceView9"
//  11px
document.getElementById('textReferenceView9').style.fontSize="24px";


//  id="textReferenceLink9"
//  11px
document.getElementById('textReferenceLink9').style.fontSize="24px";




//  id="textReference10"
//  10px
document.getElementById('textReference10').style.fontSize="24px";

//  id="textReferenceView10"
//  11px
document.getElementById('textReferenceView10').style.fontSize="24px";


//  id="textReferenceLink10"
//  11px
document.getElementById('textReferenceLink10').style.fontSize="24px";





//  id="textReference11"
//  10px
document.getElementById('textReference11').style.fontSize="24px";

//  id="textReferenceView11"
//  11px
document.getElementById('textReferenceView11').style.fontSize="24px";


//  id="textReferenceLink11"
//  11px
document.getElementById('textReferenceLink11').style.fontSize="24px";





//  id="textReference12"
//  10px
document.getElementById('textReference12').style.fontSize="24px";

//  id="textReferenceView12"
//  11px
document.getElementById('textReferenceView12').style.fontSize="24px";


//  id="textReferenceLink12"
//  11px
document.getElementById('textReferenceLink12').style.fontSize="24px";






//  id="textReference13"
//  10px
document.getElementById('textReference13').style.fontSize="24px";

//  id="textReferenceView13"
//  11px
document.getElementById('textReferenceView13').style.fontSize="24px";


//  id="textReferenceLink13"
//  11px
document.getElementById('textReferenceLink13').style.fontSize="24px";






//  id="textReference14"
//  10px
document.getElementById('textReference14').style.fontSize="24px";

//  id="textReferenceView14"
//  11px
document.getElementById('textReferenceView14').style.fontSize="24px";


//  id="textReferenceLink14"
//  11px
document.getElementById('textReferenceLink14').style.fontSize="24px";





//  id="textReference15"
//  10px
document.getElementById('textReference15').style.fontSize="24px";

//  id="textReferenceView15"
//  11px
document.getElementById('textReferenceView15').style.fontSize="24px";


//  id="textReferenceLink15"
//  11px
document.getElementById('textReferenceLink15').style.fontSize="24px";




//  id="textReference16"
//  10px
document.getElementById('textReference16').style.fontSize="24px";

//  id="textReferenceView16"
//  11px
document.getElementById('textReferenceView16').style.fontSize="24px";


//  id="textReferenceLink16"
//  11px
document.getElementById('textReferenceLink16').style.fontSize="24px";





//  id="textReference17"
//  10px
document.getElementById('textReference17').style.fontSize="24px";

//  id="textReferenceView17"
//  11px
document.getElementById('textReferenceView17').style.fontSize="24px";


//  id="textReferenceLink17"
//  11px
document.getElementById('textReferenceLink17').style.fontSize="24px";






//  id="textReference18"
//  10px
document.getElementById('textReference18').style.fontSize="24px";

//  id="textReferenceView18"
//  11px
document.getElementById('textReferenceView18').style.fontSize="24px";


//  id="textReferenceLink18"
//  11px
document.getElementById('textReferenceLink18').style.fontSize="24px";





//  id="textReference19"
//  10px
document.getElementById('textReference19').style.fontSize="24px";

//  id="textReferenceView19"
//  11px
document.getElementById('textReferenceView19').style.fontSize="24px";


//  id="textReferenceLink19"
//  11px
document.getElementById('textReferenceLink19').style.fontSize="24px";





//  id="textReference20"
//  10px
document.getElementById('textReference20').style.fontSize="24px";

//  id="textReferenceView20"
//  11px
document.getElementById('textReferenceView20').style.fontSize="24px";


//  id="textReferenceLink20"
//  11px
document.getElementById('textReferenceLink20').style.fontSize="24px";





//  id="textReference21"
//  10px
document.getElementById('textReference21').style.fontSize="24px";

//  id="textReferenceView21"
//  11px
document.getElementById('textReferenceView21').style.fontSize="24px";


//  id="textReferenceLink21"
//  11px
document.getElementById('textReferenceLink21').style.fontSize="24px";






//  id="textReference22"
//  10px
document.getElementById('textReference22').style.fontSize="24px";

//  id="textReferenceView22"
//  11px
document.getElementById('textReferenceView22').style.fontSize="24px";


//  id="textReferenceLink22"
//  11px
document.getElementById('textReferenceLink22').style.fontSize="24px";






//  id="textReference23"
//  10px
document.getElementById('textReference23').style.fontSize="24px";

//  id="textReferenceView23"
//  11px
document.getElementById('textReferenceView23').style.fontSize="24px";


//  id="textReferenceLink23"
//  11px
document.getElementById('textReferenceLink23').style.fontSize="24px";







//  id="textReference24"
//  10px
document.getElementById('textReference24').style.fontSize="24px";

//  id="textReferenceView24"
//  11px
document.getElementById('textReferenceView24').style.fontSize="24px";


//  id="textReferenceLink24"
//  11px
document.getElementById('textReferenceLink24').style.fontSize="24px";








//  id="textReference25"
//  10px
document.getElementById('textReference25').style.fontSize="24px";

//  id="textReferenceView25"
//  11px
document.getElementById('textReferenceView25').style.fontSize="24px";


//  id="textReferenceLink25"
//  11px
document.getElementById('textReferenceLink25').style.fontSize="24px";






//  id="textReference26"
//  10px
document.getElementById('textReference26').style.fontSize="24px";

//  id="textReferenceView26"
//  11px
document.getElementById('textReferenceView26').style.fontSize="24px";


//  id="textReferenceLink26"
//  11px
document.getElementById('textReferenceLink26').style.fontSize="24px";





//  id="textCopyright"
document.getElementById('textCopyright').style.fontSize="24px";


//  id="textBootstrap"
document.getElementById('textBootstrap').style.fontSize="24px";


//  id="textBootstrapLicense"
document.getElementById('textBootstrapLicense').style.fontSize="24px";


//  id="textIconsModified"
document.getElementById('textIconsModified').style.fontSize="24px";



        //  ***   not working   ***
        //   alert("Chrome  others  -  set template rows");

	//  id="grid-containerIntroduction"
     	//  grid-template-rows: 0.3vh 80vh 0.3vh
	//  document.getElementById('grid-containerIntroduction').style.gridTemplateRows = "0.3vh 80vh 0.3vh;";

        //   alert("Chrome  others  -  set template rows successful");



             //   end     Chrome others
          }




           //   end        Chrome
   } else if (isSafari) { 


           //   end        Safari
   } else if (isEdge) { 


//  id="textTitle"
//  24px
//  <b>Using the Canvas in C#</b>
document.getElementById('textTitle').style.fontSize="65px";



//  id="textIntroductionPre"
//  10px
document.getElementById('textIntroductionPre').style.fontSize="28px";



//  id="textCanvas1"
//  10px
//  <b>Operating System:</b>
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
document.getElementById('textCanvas1').style.fontSize="24px";



//  id="textCanvas2"
//  10px
//  <b>
//  Windows 7 - 10
//  </b>
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
document.getElementById('textCanvas2').style.fontSize="24px";



//  id="textCanvas3"
//  10px
//  <b>Development IDE:</b>
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
document.getElementById('textCanvas3').style.fontSize="24px";



//  id="textCanvas4"
//  10px
//  <b>
//  Visual Studio
//  </b>
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;
document.getElementById('textCanvas4').style.fontSize="24px";


//  id="textCanvas5"
//  10px
//  <b>Language:</b>
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;
document.getElementById('textCanvas5').style.fontSize="24px";

document.getElementById('textCanvas5').innerHTML=
	'<b>Language:</b>' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';



//  id="textCanvas6"
//  10px
//  <b>
//  C#
//  </b>
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
document.getElementById('textCanvas6').style.fontSize="24px";

document.getElementById('textCanvas6').innerHTML=
	'<b>C#</b>' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;';




//  id="textCanvas7"
//  10px
//  <b>Demo features:</b>
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;
document.getElementById('textCanvas7').style.fontSize="24px";

document.getElementById('textCanvas7').innerHTML=
	'<b>Demo features:</b>' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;';




//  id="textCanvas8"
//  10px
//  <b>
//  &#x2022; 1. Drawing on the Windows graphic Canvas.
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  <br>
//  &#x2022; 2. Data inspection via zoom in or zoom out.
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;
//  <br>
//  &#x2022; 3. Dynamic repositioning of the viewing window.
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;
//  <br>
//  &#x2022; 4. Selectable data cursors.
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;
//  <br>
//  &#x2022; 5. Step through the data using the cursor.
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;
//  </b>
document.getElementById('textCanvas8').style.fontSize="24px";

document.getElementById('textCanvas8').innerHTML= 
	'<b>' + 
	'&#x2022; 1. Drawing on the Windows graphic Canvas.' + 
	'&nbsp;&nbsp;<br>' + 
	'&#x2022; 2. Data inspection via zoom in or zoom out.' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'<br>' + 
	'&#x2022; 3. Dynamic repositioning of the viewing' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'<br>' + 
	'window.' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;' + 
	'<br>' + 
	'&#x2022; 4. Selectable data cursors.' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;' + 
	'<br>' + 
	'&#x2022; 5. Step through the data using the cursor.' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;' + 
	'</b>';






//  id="textIntroduction"
//  10px
document.getElementById('textIntroduction').style.fontSize="28px";


//  id="textIntroductionEmphasized1"
//  10px
//  <b>learning experience</b>
document.getElementById('textIntroductionEmphasized1').style.fontSize="24px";


//  id="textIntroductionEmphasized2"
//  10px
//  <b>drawing graphics</b>
document.getElementById('textIntroductionEmphasized2').style.fontSize="24px";


//  id="textIntroductionEmphasized3"
//  10px
//  <b>2010</b>
document.getElementById('textIntroductionEmphasized3').style.fontSize="24px";


//  id="textIntroductionEmphasized4"
//  10px
//  <b>graphs</b>
document.getElementById('textIntroductionEmphasized4').style.fontSize="24px";


//  id="textIntroductionEmphasized5"
//  10px
//  <b>Up to ten graphs</b>
document.getElementById('textIntroductionEmphasized5').style.fontSize="24px";


//  id="textIntroductionEmphasized6"
//  10px
//  <b>zoom in</b>
document.getElementById('textIntroductionEmphasized6').style.fontSize="24px";


//  id="textIntroductionEmphasized7"
//  10px
//  <b>zoom out</b>
document.getElementById('textIntroductionEmphasized7').style.fontSize="24px";


//  id="textIntroductionEmphasized8"
//  10px
//  <b>reposition the viewing window</b>
document.getElementById('textIntroductionEmphasized8').style.fontSize="24px";


//  id="textIntroductionEmphasized9"
//  10px
//  <b>step through the data</b>
document.getElementById('textIntroductionEmphasized9').style.fontSize="24px";


//  id="textIntroductionEmphasized10"
//  10px
//  <b>cursor</b>
document.getElementById('textIntroductionEmphasized10').style.fontSize="24px";



//  id="noVideoExplanation"
//  12px
document.getElementById('noVideoExplanation').style.fontSize="24px";


//  id="selectExplanation"
//  12px
document.getElementById('selectExplanation').style.fontSize="24px";




//  id="textReferenceHeading" 
//  Original      12px
document.getElementById('textReferenceHeading').style.fontSize="36px";





//  id="textReference1"
//  10px
document.getElementById('textReference1').style.fontSize="24px";


//  id="textReferenceView1"
//  11px
document.getElementById('textReferenceView1').style.fontSize="24px";



//  id="textReferenceLink1"
//  11px
document.getElementById('textReferenceLink1').style.fontSize="24px";




//  id="textReference2"
//  10px
document.getElementById('textReference2').style.fontSize="24px";

//  id="textReferenceView2"
//  11px
document.getElementById('textReferenceView2').style.fontSize="24px";


//  id="textReferenceLink2"
//  11px
document.getElementById('textReferenceLink2').style.fontSize="24px";





//  id="textReference3"
//  10px
document.getElementById('textReference3').style.fontSize="24px";

//  id="textReferenceView3"
//  11px
document.getElementById('textReferenceView3').style.fontSize="24px";


//  id="textReferenceLink3"
//  11px
document.getElementById('textReferenceLink3').style.fontSize="24px";




//  id="textReference4"
//  10px
document.getElementById('textReference4').style.fontSize="24px";

//  id="textReferenceView4"
//  11px
document.getElementById('textReferenceView4').style.fontSize="24px";


//  id="textReferenceLink4"
//  11px
document.getElementById('textReferenceLink4').style.fontSize="24px";




//  id="textReference5"
//  10px
document.getElementById('textReference5').style.fontSize="24px";

//  id="textReferenceView5"
//  11px
document.getElementById('textReferenceView5').style.fontSize="24px";


//  id="textReferenceLink5"
//  11px
document.getElementById('textReferenceLink5').style.fontSize="24px";



//  id="textReference5Emphasized1"
//  10px
document.getElementById('textReference5Emphasized1').style.fontSize="24px";


//  id="textReference5Emphasized2"
//  10px
document.getElementById('textReference5Emphasized2').style.fontSize="24px";



//  id="textReference6"
//  10px
document.getElementById('textReference6').style.fontSize="24px";

//  id="textReferenceView6"
//  11px
document.getElementById('textReferenceView6').style.fontSize="24px";


//  id="textReferenceLink6"
//  11px
document.getElementById('textReferenceLink6').style.fontSize="24px";




//  id="textReference7"
//  10px
document.getElementById('textReference7').style.fontSize="24px";

//  id="textReferenceView7"
//  11px
document.getElementById('textReferenceView7').style.fontSize="24px";


//  id="textReferenceLink7"
//  11px
document.getElementById('textReferenceLink7').style.fontSize="24px";




//  id="textReference8"
//  10px
document.getElementById('textReference8').style.fontSize="24px";

//  id="textReferenceView8"
//  11px
document.getElementById('textReferenceView8').style.fontSize="24px";


//  id="textReferenceLink8"
//  11px
document.getElementById('textReferenceLink8').style.fontSize="24px";



//  id="textReference9"
//  10px
document.getElementById('textReference9').style.fontSize="24px";

//  id="textReferenceView9"
//  11px
document.getElementById('textReferenceView9').style.fontSize="24px";


//  id="textReferenceLink9"
//  11px
document.getElementById('textReferenceLink9').style.fontSize="24px";




//  id="textReference10"
//  10px
document.getElementById('textReference10').style.fontSize="24px";

//  id="textReferenceView10"
//  11px
document.getElementById('textReferenceView10').style.fontSize="24px";


//  id="textReferenceLink10"
//  11px
document.getElementById('textReferenceLink10').style.fontSize="24px";





//  id="textReference11"
//  10px
document.getElementById('textReference11').style.fontSize="24px";

//  id="textReferenceView11"
//  11px
document.getElementById('textReferenceView11').style.fontSize="24px";


//  id="textReferenceLink11"
//  11px
document.getElementById('textReferenceLink11').style.fontSize="24px";





//  id="textReference12"
//  10px
document.getElementById('textReference12').style.fontSize="24px";

//  id="textReferenceView12"
//  11px
document.getElementById('textReferenceView12').style.fontSize="24px";


//  id="textReferenceLink12"
//  11px
document.getElementById('textReferenceLink12').style.fontSize="24px";






//  id="textReference13"
//  10px
document.getElementById('textReference13').style.fontSize="24px";

//  id="textReferenceView13"
//  11px
document.getElementById('textReferenceView13').style.fontSize="24px";


//  id="textReferenceLink13"
//  11px
document.getElementById('textReferenceLink13').style.fontSize="24px";






//  id="textReference14"
//  10px
document.getElementById('textReference14').style.fontSize="24px";

//  id="textReferenceView14"
//  11px
document.getElementById('textReferenceView14').style.fontSize="24px";


//  id="textReferenceLink14"
//  11px
document.getElementById('textReferenceLink14').style.fontSize="24px";





//  id="textReference15"
//  10px
document.getElementById('textReference15').style.fontSize="24px";

//  id="textReferenceView15"
//  11px
document.getElementById('textReferenceView15').style.fontSize="24px";


//  id="textReferenceLink15"
//  11px
document.getElementById('textReferenceLink15').style.fontSize="24px";




//  id="textReference16"
//  10px
document.getElementById('textReference16').style.fontSize="24px";

//  id="textReferenceView16"
//  11px
document.getElementById('textReferenceView16').style.fontSize="24px";


//  id="textReferenceLink16"
//  11px
document.getElementById('textReferenceLink16').style.fontSize="24px";





//  id="textReference17"
//  10px
document.getElementById('textReference17').style.fontSize="24px";

//  id="textReferenceView17"
//  11px
document.getElementById('textReferenceView17').style.fontSize="24px";


//  id="textReferenceLink17"
//  11px
document.getElementById('textReferenceLink17').style.fontSize="24px";






//  id="textReference18"
//  10px
document.getElementById('textReference18').style.fontSize="24px";

//  id="textReferenceView18"
//  11px
document.getElementById('textReferenceView18').style.fontSize="24px";


//  id="textReferenceLink18"
//  11px
document.getElementById('textReferenceLink18').style.fontSize="24px";





//  id="textReference19"
//  10px
document.getElementById('textReference19').style.fontSize="24px";

//  id="textReferenceView19"
//  11px
document.getElementById('textReferenceView19').style.fontSize="24px";


//  id="textReferenceLink19"
//  11px
document.getElementById('textReferenceLink19').style.fontSize="24px";





//  id="textReference20"
//  10px
document.getElementById('textReference20').style.fontSize="24px";

//  id="textReferenceView20"
//  11px
document.getElementById('textReferenceView20').style.fontSize="24px";


//  id="textReferenceLink20"
//  11px
document.getElementById('textReferenceLink20').style.fontSize="24px";





//  id="textReference21"
//  10px
document.getElementById('textReference21').style.fontSize="24px";

//  id="textReferenceView21"
//  11px
document.getElementById('textReferenceView21').style.fontSize="24px";


//  id="textReferenceLink21"
//  11px
document.getElementById('textReferenceLink21').style.fontSize="24px";






//  id="textReference22"
//  10px
document.getElementById('textReference22').style.fontSize="24px";

//  id="textReferenceView22"
//  11px
document.getElementById('textReferenceView22').style.fontSize="24px";


//  id="textReferenceLink22"
//  11px
document.getElementById('textReferenceLink22').style.fontSize="24px";






//  id="textReference23"
//  10px
document.getElementById('textReference23').style.fontSize="24px";

//  id="textReferenceView23"
//  11px
document.getElementById('textReferenceView23').style.fontSize="24px";


//  id="textReferenceLink23"
//  11px
document.getElementById('textReferenceLink23').style.fontSize="24px";







//  id="textReference24"
//  10px
document.getElementById('textReference24').style.fontSize="24px";

//  id="textReferenceView24"
//  11px
document.getElementById('textReferenceView24').style.fontSize="24px";


//  id="textReferenceLink24"
//  11px
document.getElementById('textReferenceLink24').style.fontSize="24px";








//  id="textReference25"
//  10px
document.getElementById('textReference25').style.fontSize="24px";

//  id="textReferenceView25"
//  11px
document.getElementById('textReferenceView25').style.fontSize="24px";


//  id="textReferenceLink25"
//  11px
document.getElementById('textReferenceLink25').style.fontSize="24px";






//  id="textReference26"
//  10px
document.getElementById('textReference26').style.fontSize="24px";

//  id="textReferenceView26"
//  11px
document.getElementById('textReferenceView26').style.fontSize="24px";


//  id="textReferenceLink26"
//  11px
document.getElementById('textReferenceLink26').style.fontSize="24px";





//  id="textCopyright"
document.getElementById('textCopyright').style.fontSize="24px";


//  id="textBootstrap"
document.getElementById('textBootstrap').style.fontSize="24px";


//  id="textBootstrapLicense"
document.getElementById('textBootstrapLicense').style.fontSize="24px";


//  id="textIconsModified"
document.getElementById('textIconsModified').style.fontSize="24px";



           //   end        Edge
   } else if (isNewEdge) { 
	//   begin        new Edge

	//  alert("using the new Edge browser");
	//  theBrowserIsUnknown = false;



	//   *** not working in EDGE ***
	//  id="grid-container"
     	//  grid-template-rows: 0.3vh 80vh 0.3vh;
	//  document.getElementById('grid-container').style.gridTemplateRows = "0.3vh 90vh 0.3vh;";





//  id="textTitle"
//  24px
//  <b>Using the Canvas in C#</b>
document.getElementById('textTitle').style.fontSize="65px";



//  id="textIntroductionPre"
//  10px
document.getElementById('textIntroductionPre').style.fontSize="28px";



//  id="textCanvas1"
//  10px
//  <b>Operating System:</b>
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
document.getElementById('textCanvas1').style.fontSize="24px";



//  id="textCanvas2"
//  10px
//  <b>
//  Windows 7 - 10
//  </b>
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
document.getElementById('textCanvas2').style.fontSize="24px";



//  id="textCanvas3"
//  10px
//  <b>Development IDE:</b>
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
document.getElementById('textCanvas3').style.fontSize="24px";



//  id="textCanvas4"
//  10px
//  <b>
//  Visual Studio
//  </b>
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;
document.getElementById('textCanvas4').style.fontSize="24px";


//  id="textCanvas5"
//  10px
//  <b>Language:</b>
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;
document.getElementById('textCanvas5').style.fontSize="24px";

document.getElementById('textCanvas5').innerHTML=
	'<b>Language:</b>' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';



//  id="textCanvas6"
//  10px
//  <b>
//  C#
//  </b>
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
document.getElementById('textCanvas6').style.fontSize="24px";

document.getElementById('textCanvas6').innerHTML=
	'<b>C#</b>' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;';




//  id="textCanvas7"
//  10px
//  <b>Demo features:</b>
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;
document.getElementById('textCanvas7').style.fontSize="24px";

document.getElementById('textCanvas7').innerHTML=
	'<b>Demo features:</b>' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;';




//  id="textCanvas8"
//  10px
//  <b>
//  &#x2022; 1. Drawing on the Windows graphic Canvas.
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  <br>
//  &#x2022; 2. Data inspection via zoom in or zoom out.
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;
//  <br>
//  &#x2022; 3. Dynamic repositioning of the viewing window.
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;
//  <br>
//  &#x2022; 4. Selectable data cursors.
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;
//  <br>
//  &#x2022; 5. Step through the data using the cursor.
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  &nbsp;&nbsp;&nbsp;&nbsp;
//  </b>
document.getElementById('textCanvas8').style.fontSize="24px";

document.getElementById('textCanvas8').innerHTML= 
	'<b>' + 
	'&#x2022; 1. Drawing on the Windows graphic Canvas.' + 
	'&nbsp;&nbsp;<br>' + 
	'&#x2022; 2. Data inspection via zoom in or zoom out.' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'<br>' + 
	'&#x2022; 3. Dynamic repositioning of the viewing' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'<br>' + 
	'window.' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;' + 
	'<br>' + 
	'&#x2022; 4. Selectable data cursors.' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;&nbsp;' + 
	'<br>' + 
	'&#x2022; 5. Step through the data using the cursor.' + 
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
	'&nbsp;' + 
	'</b>';






//  id="textIntroduction"
//  10px
document.getElementById('textIntroduction').style.fontSize="28px";


//  id="textIntroductionEmphasized1"
//  10px
//  <b>learning experience</b>
document.getElementById('textIntroductionEmphasized1').style.fontSize="24px";


//  id="textIntroductionEmphasized2"
//  10px
//  <b>drawing graphics</b>
document.getElementById('textIntroductionEmphasized2').style.fontSize="24px";


//  id="textIntroductionEmphasized3"
//  10px
//  <b>2010</b>
document.getElementById('textIntroductionEmphasized3').style.fontSize="24px";


//  id="textIntroductionEmphasized4"
//  10px
//  <b>graphs</b>
document.getElementById('textIntroductionEmphasized4').style.fontSize="24px";


//  id="textIntroductionEmphasized5"
//  10px
//  <b>Up to ten graphs</b>
document.getElementById('textIntroductionEmphasized5').style.fontSize="24px";


//  id="textIntroductionEmphasized6"
//  10px
//  <b>zoom in</b>
document.getElementById('textIntroductionEmphasized6').style.fontSize="24px";


//  id="textIntroductionEmphasized7"
//  10px
//  <b>zoom out</b>
document.getElementById('textIntroductionEmphasized7').style.fontSize="24px";


//  id="textIntroductionEmphasized8"
//  10px
//  <b>reposition the viewing window</b>
document.getElementById('textIntroductionEmphasized8').style.fontSize="24px";


//  id="textIntroductionEmphasized9"
//  10px
//  <b>step through the data</b>
document.getElementById('textIntroductionEmphasized9').style.fontSize="24px";


//  id="textIntroductionEmphasized10"
//  10px
//  <b>cursor</b>
document.getElementById('textIntroductionEmphasized10').style.fontSize="24px";



//  id="noVideoExplanation"
//  12px
document.getElementById('noVideoExplanation').style.fontSize="24px";


//  id="selectExplanation"
//  12px
document.getElementById('selectExplanation').style.fontSize="24px";




//  id="textReferenceHeading" 
//  Original      12px
document.getElementById('textReferenceHeading').style.fontSize="36px";





//  id="textReference1"
//  10px
document.getElementById('textReference1').style.fontSize="24px";


//  id="textReferenceView1"
//  11px
document.getElementById('textReferenceView1').style.fontSize="24px";



//  id="textReferenceLink1"
//  11px
document.getElementById('textReferenceLink1').style.fontSize="24px";




//  id="textReference2"
//  10px
document.getElementById('textReference2').style.fontSize="24px";

//  id="textReferenceView2"
//  11px
document.getElementById('textReferenceView2').style.fontSize="24px";


//  id="textReferenceLink2"
//  11px
document.getElementById('textReferenceLink2').style.fontSize="24px";





//  id="textReference3"
//  10px
document.getElementById('textReference3').style.fontSize="24px";

//  id="textReferenceView3"
//  11px
document.getElementById('textReferenceView3').style.fontSize="24px";


//  id="textReferenceLink3"
//  11px
document.getElementById('textReferenceLink3').style.fontSize="24px";




//  id="textReference4"
//  10px
document.getElementById('textReference4').style.fontSize="24px";

//  id="textReferenceView4"
//  11px
document.getElementById('textReferenceView4').style.fontSize="24px";


//  id="textReferenceLink4"
//  11px
document.getElementById('textReferenceLink4').style.fontSize="24px";




//  id="textReference5"
//  10px
document.getElementById('textReference5').style.fontSize="24px";

//  id="textReferenceView5"
//  11px
document.getElementById('textReferenceView5').style.fontSize="24px";


//  id="textReferenceLink5"
//  11px
document.getElementById('textReferenceLink5').style.fontSize="24px";



//  id="textReference5Emphasized1"
//  10px
document.getElementById('textReference5Emphasized1').style.fontSize="24px";


//  id="textReference5Emphasized2"
//  10px
document.getElementById('textReference5Emphasized2').style.fontSize="24px";



//  id="textReference6"
//  10px
document.getElementById('textReference6').style.fontSize="24px";

//  id="textReferenceView6"
//  11px
document.getElementById('textReferenceView6').style.fontSize="24px";


//  id="textReferenceLink6"
//  11px
document.getElementById('textReferenceLink6').style.fontSize="24px";




//  id="textReference7"
//  10px
document.getElementById('textReference7').style.fontSize="24px";

//  id="textReferenceView7"
//  11px
document.getElementById('textReferenceView7').style.fontSize="24px";


//  id="textReferenceLink7"
//  11px
document.getElementById('textReferenceLink7').style.fontSize="24px";




//  id="textReference8"
//  10px
document.getElementById('textReference8').style.fontSize="24px";

//  id="textReferenceView8"
//  11px
document.getElementById('textReferenceView8').style.fontSize="24px";


//  id="textReferenceLink8"
//  11px
document.getElementById('textReferenceLink8').style.fontSize="24px";



//  id="textReference9"
//  10px
document.getElementById('textReference9').style.fontSize="24px";

//  id="textReferenceView9"
//  11px
document.getElementById('textReferenceView9').style.fontSize="24px";


//  id="textReferenceLink9"
//  11px
document.getElementById('textReferenceLink9').style.fontSize="24px";




//  id="textReference10"
//  10px
document.getElementById('textReference10').style.fontSize="24px";

//  id="textReferenceView10"
//  11px
document.getElementById('textReferenceView10').style.fontSize="24px";


//  id="textReferenceLink10"
//  11px
document.getElementById('textReferenceLink10').style.fontSize="24px";





//  id="textReference11"
//  10px
document.getElementById('textReference11').style.fontSize="24px";

//  id="textReferenceView11"
//  11px
document.getElementById('textReferenceView11').style.fontSize="24px";


//  id="textReferenceLink11"
//  11px
document.getElementById('textReferenceLink11').style.fontSize="24px";





//  id="textReference12"
//  10px
document.getElementById('textReference12').style.fontSize="24px";

//  id="textReferenceView12"
//  11px
document.getElementById('textReferenceView12').style.fontSize="24px";


//  id="textReferenceLink12"
//  11px
document.getElementById('textReferenceLink12').style.fontSize="24px";






//  id="textReference13"
//  10px
document.getElementById('textReference13').style.fontSize="24px";

//  id="textReferenceView13"
//  11px
document.getElementById('textReferenceView13').style.fontSize="24px";


//  id="textReferenceLink13"
//  11px
document.getElementById('textReferenceLink13').style.fontSize="24px";






//  id="textReference14"
//  10px
document.getElementById('textReference14').style.fontSize="24px";

//  id="textReferenceView14"
//  11px
document.getElementById('textReferenceView14').style.fontSize="24px";


//  id="textReferenceLink14"
//  11px
document.getElementById('textReferenceLink14').style.fontSize="24px";





//  id="textReference15"
//  10px
document.getElementById('textReference15').style.fontSize="24px";

//  id="textReferenceView15"
//  11px
document.getElementById('textReferenceView15').style.fontSize="24px";


//  id="textReferenceLink15"
//  11px
document.getElementById('textReferenceLink15').style.fontSize="24px";




//  id="textReference16"
//  10px
document.getElementById('textReference16').style.fontSize="24px";

//  id="textReferenceView16"
//  11px
document.getElementById('textReferenceView16').style.fontSize="24px";


//  id="textReferenceLink16"
//  11px
document.getElementById('textReferenceLink16').style.fontSize="24px";





//  id="textReference17"
//  10px
document.getElementById('textReference17').style.fontSize="24px";

//  id="textReferenceView17"
//  11px
document.getElementById('textReferenceView17').style.fontSize="24px";


//  id="textReferenceLink17"
//  11px
document.getElementById('textReferenceLink17').style.fontSize="24px";






//  id="textReference18"
//  10px
document.getElementById('textReference18').style.fontSize="24px";

//  id="textReferenceView18"
//  11px
document.getElementById('textReferenceView18').style.fontSize="24px";


//  id="textReferenceLink18"
//  11px
document.getElementById('textReferenceLink18').style.fontSize="24px";





//  id="textReference19"
//  10px
document.getElementById('textReference19').style.fontSize="24px";

//  id="textReferenceView19"
//  11px
document.getElementById('textReferenceView19').style.fontSize="24px";


//  id="textReferenceLink19"
//  11px
document.getElementById('textReferenceLink19').style.fontSize="24px";





//  id="textReference20"
//  10px
document.getElementById('textReference20').style.fontSize="24px";

//  id="textReferenceView20"
//  11px
document.getElementById('textReferenceView20').style.fontSize="24px";


//  id="textReferenceLink20"
//  11px
document.getElementById('textReferenceLink20').style.fontSize="24px";





//  id="textReference21"
//  10px
document.getElementById('textReference21').style.fontSize="24px";

//  id="textReferenceView21"
//  11px
document.getElementById('textReferenceView21').style.fontSize="24px";


//  id="textReferenceLink21"
//  11px
document.getElementById('textReferenceLink21').style.fontSize="24px";






//  id="textReference22"
//  10px
document.getElementById('textReference22').style.fontSize="24px";

//  id="textReferenceView22"
//  11px
document.getElementById('textReferenceView22').style.fontSize="24px";


//  id="textReferenceLink22"
//  11px
document.getElementById('textReferenceLink22').style.fontSize="24px";






//  id="textReference23"
//  10px
document.getElementById('textReference23').style.fontSize="24px";

//  id="textReferenceView23"
//  11px
document.getElementById('textReferenceView23').style.fontSize="24px";


//  id="textReferenceLink23"
//  11px
document.getElementById('textReferenceLink23').style.fontSize="24px";







//  id="textReference24"
//  10px
document.getElementById('textReference24').style.fontSize="24px";

//  id="textReferenceView24"
//  11px
document.getElementById('textReferenceView24').style.fontSize="24px";


//  id="textReferenceLink24"
//  11px
document.getElementById('textReferenceLink24').style.fontSize="24px";








//  id="textReference25"
//  10px
document.getElementById('textReference25').style.fontSize="24px";

//  id="textReferenceView25"
//  11px
document.getElementById('textReferenceView25').style.fontSize="24px";


//  id="textReferenceLink25"
//  11px
document.getElementById('textReferenceLink25').style.fontSize="24px";






//  id="textReference26"
//  10px
document.getElementById('textReference26').style.fontSize="24px";

//  id="textReferenceView26"
//  11px
document.getElementById('textReferenceView26').style.fontSize="24px";


//  id="textReferenceLink26"
//  11px
document.getElementById('textReferenceLink26').style.fontSize="24px";





//  id="textCopyright"
document.getElementById('textCopyright').style.fontSize="24px";


//  id="textBootstrap"
document.getElementById('textBootstrap').style.fontSize="24px";


//  id="textBootstrapLicense"
document.getElementById('textBootstrapLicense').style.fontSize="24px";


//  id="textIconsModified"
document.getElementById('textIconsModified').style.fontSize="24px";




        //  ***   not working   ***
        //   alert("Edge  new  -  set template rows");

	//  id="grid-containerIntroduction"
     	//  grid-template-rows: 0.3vh 80vh 0.3vh
	//  document.getElementById('grid-containerIntroduction').style.gridTemplateRows = "0.3vh 80vh 0.3vh;";

        //   alert("Edge  new  -  set template rows successful");



	//   end        new Edge
} else { 
           //   begin      unknown browser



           //   end         unknown browser
   } 








// end     graphApp.js



    
    

  