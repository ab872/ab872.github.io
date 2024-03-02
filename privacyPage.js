<!--  privacyPage_js  -->



// start      privacyPage.js



//  this JavaScript file attempts to override the slight differences
//  in page rendering by different browsers

//  the goal is to provide a more consistent cross-browser experience








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







//   id="pageTitle" 
//  40px

document.getElementById('pageTitle').style.fontSize="80px";




 //  id="textX1" 
//  10px

document.getElementById('textX1').style.fontSize="35px";



//  id="textX1Emphasized1" 
//  11px

document.getElementById('textX1Emphasized1').style.fontSize="35px";



 //  id="textX1Emphasized2" 
//  11px


document.getElementById('textX1Emphasized2').style.fontSize="35px";



 //  id="textX1Emphasized3" 
//  11px



document.getElementById('textX1Emphasized3').style.fontSize="35px";


//   id="textX1Emphasized4" 
//  11px

document.getElementById('textX1Emphasized4').style.fontSize="35px";












document.getElementById('textX2').style.fontSize="35px";



document.getElementById('textX2Emphasized1').style.fontSize="35px";



document.getElementById('textX2Emphasized2').style.fontSize="35px";




document.getElementById('textX2Emphasized3').style.fontSize="35px";



document.getElementById('textX2Emphasized4').style.fontSize="35px";



document.getElementById('textX2Emphasized5').style.fontSize="35px";



document.getElementById('textX2Emphasized6').style.fontSize="35px";


document.getElementById('textX2Emphasized7').style.fontSize="35px";












//  id="textCopyright"
document.getElementById('textCopyright').style.fontSize="15px";


//  id="textBootstrap"
document.getElementById('textBootstrap').style.fontSize="11px";


//  id="textBootstrapLicense"
document.getElementById('textBootstrapLicense').style.fontSize="11px";


//  id="textIconsModified"
document.getElementById('textIconsModified').style.fontSize="11px";



           //   end        Firefox under Android
        } 


        if (isWin10) {
           //   begin      Firefox under Win10

		//  id="textX1" 
		//  10px
		document.getElementById('textX1').style.fontSize="25px";



		//  id="textX1Emphasized1" 
		//  11px
		document.getElementById('textX1Emphasized1').style.fontSize="25px";



		//  id="textX1Emphasized2" 
		//  11px
		document.getElementById('textX1Emphasized2').style.fontSize="25px";



		//  id="textX1Emphasized3" 
		//  11px
		document.getElementById('textX1Emphasized3').style.fontSize="25px";


		//   id="textX1Emphasized4" 
		//  11px
		document.getElementById('textX1Emphasized4').style.fontSize="25px";





		document.getElementById('textX2').style.fontSize="25px";

		document.getElementById('textX2Emphasized1').style.fontSize="25px";

		document.getElementById('textX2Emphasized2').style.fontSize="25px";

		document.getElementById('textX2Emphasized3').style.fontSize="25px";

		document.getElementById('textX2Emphasized4').style.fontSize="25px";

		document.getElementById('textX2Emphasized5').style.fontSize="25px";

		document.getElementById('textX2Emphasized6').style.fontSize="25px";

		document.getElementById('textX2Emphasized7').style.fontSize="25px";





	     document.getElementById('copyRightMsg').style.fontSize="25px";

	     document.getElementById('chromeBestMsg').style.fontSize="25px";

	     document.getElementById('iconsProvidedMsg').style.fontSize="25px";

	     document.getElementById('mitLicenseMsg').style.fontSize="25px";

	     document.getElementById('iconsModifiedMsg').style.fontSize="25px";



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
    document.getElementById("BootstrapIcon").style.width="96px";   
 document.getElementById("BootstrapIcon").style.height="96px";   
   





//  id="textCopyright"
document.getElementById('textCopyright').style.fontSize="9px";



//  id="textBootstrap"
document.getElementById('textBootstrap').style.fontSize="9px";


//  id="textBootstrapLicense"
document.getElementById('textBootstrapLicense').style.fontSize="9px";


//  id="textIconsModified"
document.getElementById('textIconsModified').style.fontSize="9px";




           //   end       Chrome under Android
         } else {
           //   begin    Chrome others


		//  id="textX1" 
		//  10px
		document.getElementById('textX1').style.fontSize="25px";



		//  id="textX1Emphasized1" 
		//  11px
		document.getElementById('textX1Emphasized1').style.fontSize="25px";



		//  id="textX1Emphasized2" 
		//  11px
		document.getElementById('textX1Emphasized2').style.fontSize="25px";



		//  id="textX1Emphasized3" 
		//  11px
		document.getElementById('textX1Emphasized3').style.fontSize="25px";


		//   id="textX1Emphasized4" 
		//  11px
		document.getElementById('textX1Emphasized4').style.fontSize="25px";





		document.getElementById('textX2').style.fontSize="25px";

		document.getElementById('textX2Emphasized1').style.fontSize="25px";

		document.getElementById('textX2Emphasized2').style.fontSize="25px";

		document.getElementById('textX2Emphasized3').style.fontSize="25px";

		document.getElementById('textX2Emphasized4').style.fontSize="25px";

		document.getElementById('textX2Emphasized5').style.fontSize="25px";

		document.getElementById('textX2Emphasized6').style.fontSize="25px";

		document.getElementById('textX2Emphasized7').style.fontSize="25px";


//  if the text is too large, we need to adjust the rows in the container template dynamically
//  for some reason its not working
//  25px seems to be the largest text size we can use right now

//  temporarily removed
//      alert("Chrome Win10 adjust explanation 1");

		//  id grid-containerPrivacyExplanation1
     		//  rows: 03vh 23vh 03vh
//  document.getElementById('grid-containerPrivacyExplanation1').style.gridTemplateRows = 
//  "03vh 65vh 03vh";

//    alert("Chrome Win10 adjust explanation 2");

		//  id="grid-containerPrivacyExplanation2"
     		//  grid-template-rows: 03vh 57vh 03vh
//  document.getElementById('grid-containerPrivacyExplanation2').style.gridTemplateRows = 
// 			"03vh 65vh 03vh";

//    alert("Chrome Win10 finished adjust explanation 1 and 2");




	     document.getElementById('copyRightMsg').style.fontSize="25px";

	     document.getElementById('chromeBestMsg').style.fontSize="25px";

	     document.getElementById('iconsProvidedMsg').style.fontSize="25px";

	     document.getElementById('mitLicenseMsg').style.fontSize="25px";

	     document.getElementById('iconsModifiedMsg').style.fontSize="25px";


             //   end     Chrome others
          }



           //   end        Chrome
   } else if (isSafari) { 

	if (isiPad) { 

		//  alert("using Safari browser  iPad");
		//  theBrowserIsUnknown = false;


if (deviceScreenWidth == 375) {

	//  alert("Safari iPad     screen 375 "); 



   //   end     screen width EQUAL to 375
} else if (deviceScreenWidth == 390) {

	//  alert("Safari iPad     screen 390 "); 


   //   end     screen width EQUAL to 390
} else if (deviceScreenWidth == 414) {

	//  alert("Safari iPad     screen 414 "); 


   //   end     screen width EQUAL to 414
} else if (deviceScreenWidth == 768) {

	 // alert("Safari iPad     screen 768 "); 




   //   end     screen width EQUAL to 768
} else if (deviceScreenWidth == 820) {

	  //  alert("Safari iPad     screen 820 "); 





   //   end     screen width EQUAL to 820
} else if (deviceScreenWidth == 100) {

	//  alert("Safari iPad     screen 100 "); 


   //   end     screen width EQUAL to 100
} else {

	 // alert("Safari iPad     screen  all others "); 



   //   end     screen width - others
}



	  //   end        isiPad
	} 


if (isiPhone) { 

		//  alert("using Safari browser on iPhone");
		//  theBrowserIsUnknown = false;


if (deviceScreenWidth == 375) {
  
	//  alert("Safari iPhone     screen 375 "); 



   //   end     screen width EQUAL to 375
} else if (deviceScreenWidth == 390) {

	//  alert("Safari iPhone     screen 390 "); 


   //   end     screen width EQUAL to 390
} else if (deviceScreenWidth == 414) {

	//  alert("Safari iPhone     screen 414 "); 




   //   end     screen width EQUAL to 414
} else if (deviceScreenWidth == 100) {

	//  alert("Safari iPhone     screen 100 "); 


   //   end     screen width EQUAL to 100
} else {

	//  alert("Safari iPhone     screen all others "); 




   //   end     screen width - others
}


	  //   end        isiPhone
	} 




if (isMac) { 

		//  alert("using Safari browser on a Mac");
		//  theBrowserIsUnknown = false;

	  //   end        isMac
	}



	//   end        Safari
} 








if (isEdge) { 

	//  alert("using the old Edge browser");
	//  theBrowserIsUnknown = false;

		//  id="textX1" 
		//  10px
		document.getElementById('textX1').style.fontSize="25px";



		//  id="textX1Emphasized1" 
		//  11px
		document.getElementById('textX1Emphasized1').style.fontSize="25px";



		//  id="textX1Emphasized2" 
		//  11px
		document.getElementById('textX1Emphasized2').style.fontSize="25px";



		//  id="textX1Emphasized3" 
		//  11px
		document.getElementById('textX1Emphasized3').style.fontSize="25px";


		//   id="textX1Emphasized4" 
		//  11px
		document.getElementById('textX1Emphasized4').style.fontSize="25px";





		document.getElementById('textX2').style.fontSize="25px";

		document.getElementById('textX2Emphasized1').style.fontSize="25px";

		document.getElementById('textX2Emphasized2').style.fontSize="25px";

		document.getElementById('textX2Emphasized3').style.fontSize="25px";

		document.getElementById('textX2Emphasized4').style.fontSize="25px";

		document.getElementById('textX2Emphasized5').style.fontSize="25px";

		document.getElementById('textX2Emphasized6').style.fontSize="25px";

		document.getElementById('textX2Emphasized7').style.fontSize="25px";





	     document.getElementById('copyRightMsg').style.fontSize="25px";

	     document.getElementById('chromeBestMsg').style.fontSize="25px";

	     document.getElementById('iconsProvidedMsg').style.fontSize="25px";

	     document.getElementById('mitLicenseMsg').style.fontSize="25px";

	     document.getElementById('iconsModifiedMsg').style.fontSize="25px";




	//   end        old Edge
} 





if (isNewEdge) { 
	//   begin        new Edge

	//  alert("using the new Edge browser");
	//  theBrowserIsUnknown = false;


		//  id="textX1" 
		//  10px
		document.getElementById('textX1').style.fontSize="25px";



		//  id="textX1Emphasized1" 
		//  11px
		document.getElementById('textX1Emphasized1').style.fontSize="25px";



		//  id="textX1Emphasized2" 
		//  11px
		document.getElementById('textX1Emphasized2').style.fontSize="25px";



		//  id="textX1Emphasized3" 
		//  11px
		document.getElementById('textX1Emphasized3').style.fontSize="25px";


		//   id="textX1Emphasized4" 
		//  11px
		document.getElementById('textX1Emphasized4').style.fontSize="25px";





		document.getElementById('textX2').style.fontSize="25px";

		document.getElementById('textX2Emphasized1').style.fontSize="25px";

		document.getElementById('textX2Emphasized2').style.fontSize="25px";

		document.getElementById('textX2Emphasized3').style.fontSize="25px";

		document.getElementById('textX2Emphasized4').style.fontSize="25px";

		document.getElementById('textX2Emphasized5').style.fontSize="25px";

		document.getElementById('textX2Emphasized6').style.fontSize="25px";

		document.getElementById('textX2Emphasized7').style.fontSize="25px";





	     document.getElementById('copyRightMsg').style.fontSize="25px";

	     document.getElementById('chromeBestMsg').style.fontSize="25px";

	     document.getElementById('iconsProvidedMsg').style.fontSize="25px";

	     document.getElementById('mitLicenseMsg').style.fontSize="25px";

	     document.getElementById('iconsModifiedMsg').style.fontSize="25px";





	//   end        new Edge
}






//  if (theBrowserIsUnknown) { 
//	//  unknown browser
//
//	alert("You are using using an unrecognized browser.");
//
//	//  end      unknown browser
//  } 





   //   } else { 
 //          //   begin      unknown browser



  //         //   end         unknown browser
 //     } 




// end     privacyPage.js



    
  

  