<!--  vuejs_js  -->



// start      vuejs.js


//  this JavaScript file attempts to override the slight differences
//  in page rendering by different browsers

//  the goal is to provide a more consistent cross-browser experience





if (isAndroidEdge) { 

//  	   alert("Edge under Android");





  // end Edge under Android
} 






   if (isFirefox) { 
           //   begin      Firefox 

if (isAndroid) {
           //   begin      Firefox under Android

//  alert("Firefox under Android");




if (isAndroid5) { 

// begin     Firefox under Android5



 // end Firefox under Android5 

} else {

// all other Firefox under Android




document.getElementById('grid-containerIntro').style.gridTemplateRows = `03vh 170vh 03vh`;



document.getElementById('grid-containerReference').style.gridTemplateRows = `03vh 1400vh 03vh`;




// end     all other Firefox under Android
}





           //   end        Firefox under Android
        } 





        if (isWin10) {
           //   begin      Firefox under Win10

           //  grid-containerIntro 
           //  03vh 270vh 03vh; 
	document.getElementById('grid-containerIntro').style.gridTemplateRows = "03vh 140vh 03vh";


        //  03vh 2060vh 03vh
	document.getElementById('grid-containerReference').style.gridTemplateRows = "03vh 1750vh 03vh";



				//  id="svgVueJS1"
				//  width="84" height="92"
				document.getElementById("svgVueJS1").style.width="120px"; 
				document.getElementById("svgVueJS1").style.height="120px";


                               //  id="addToOrderButtonCaption" 
                               //  48px
		               document.getElementById('addToOrderButtonCaption').style.fontSize="38px"; 





		//  "copyRightMsg" 
		//  12px
		document.getElementById('copyRightMsg').style.fontSize="32px";

		//  "chromeBestMsg" 
		//  12px
		document.getElementById('chromeBestMsg').style.fontSize="32px";



		//  adjust the size of the
		//  Bootstrap icon
		//  id="BootstrapIcon"           
		document.getElementById("BootstrapIcon").style.width="96px"; 
		document.getElementById("BootstrapIcon").style.height="96px";



		//  "iconsProvidedMsg" 
		//  12px
		document.getElementById('iconsProvidedMsg').style.fontSize="32px";

		//  "mitLicenseMsg" 
		//  12px
		document.getElementById('mitLicenseMsg').style.fontSize="32px"; 

		//  "iconsModifiedMsg" 
		//  12px 
		document.getElementById('iconsModifiedMsg').style.fontSize="32px"; 




		document.getElementById('vueJsHeadingMsg').style.fontSize="32px"; 

		document.getElementById('vueJsLogoMsg').style.fontSize="32px"; 

		document.getElementById('vueJsModifiedMsg').style.fontSize="32px"; 

		document.getElementById('vueJsTermsMsg').style.fontSize="32px"; 

		document.getElementById('vueJsMitLicenseMsg').style.fontSize="32px"; 

		document.getElementById('vueJsLocatedMsg').style.fontSize="32px"; 



		//  document.getElementById('vueJsMitLicenseMsg').style.fontSize="32px"; 



           //   end        Firefox under Win10
        }






           //   end        Firefox 
   } else if (isChrome) { 


        if (isAndroid) {
           //   begin    Chrome under Android

       //      alert("Chrome under Android");






           //   end       Chrome under Android
         } else {
           //   begin    Chrome others

           //  grid-containerIntro 
           //  03vh 270vh 03vh; 
	document.getElementById('grid-containerIntro').style.gridTemplateRows = "03vh 170vh 03vh";


        //  03vh 2060vh 03vh
	document.getElementById('grid-containerReference').style.gridTemplateRows = "03vh 1910vh 03vh";



				//  id="svgVueJS1"
				//  width="84" height="92"
				document.getElementById("svgVueJS1").style.width="120px"; 
				document.getElementById("svgVueJS1").style.height="120px";


                               //  id="addToOrderButtonCaption" 
                               //  48px
		               document.getElementById('addToOrderButtonCaption').style.fontSize="38px"; 





		//  "copyRightMsg" 
		//  12px
		document.getElementById('copyRightMsg').style.fontSize="32px";

		//  "chromeBestMsg" 
		//  12px
		document.getElementById('chromeBestMsg').style.fontSize="32px";



		//  adjust the size of the
		//  Bootstrap icon
		//  id="BootstrapIcon"           
		document.getElementById("BootstrapIcon").style.width="96px"; 
		document.getElementById("BootstrapIcon").style.height="96px";



		//  "iconsProvidedMsg" 
		//  12px
		document.getElementById('iconsProvidedMsg').style.fontSize="32px";

		//  "mitLicenseMsg" 
		//  12px
		document.getElementById('mitLicenseMsg').style.fontSize="32px"; 

		//  "iconsModifiedMsg" 
		//  12px 
		document.getElementById('iconsModifiedMsg').style.fontSize="32px"; 




		document.getElementById('vueJsHeadingMsg').style.fontSize="32px"; 

		document.getElementById('vueJsLogoMsg').style.fontSize="32px"; 

		document.getElementById('vueJsModifiedMsg').style.fontSize="32px"; 

		document.getElementById('vueJsTermsMsg').style.fontSize="32px"; 

		document.getElementById('vueJsMitLicenseMsg').style.fontSize="32px"; 

		document.getElementById('vueJsLocatedMsg').style.fontSize="32px"; 



		//  document.getElementById('vueJsMitLicenseMsg').style.fontSize="32px"; 



             //   end     Chrome others
          }







           //   end        Chrome
   } else if (isSafari) { 


if (isiPad) { 


           //   end        Safari iPad
} else if (isiPhone) { 



           //   end        Safari iPhone
} else if (isMac) { 



           //   end        Safari Mac
}



           //   end        Safari
   } else if (isEdge) { 

	//  alert("using the old Edge browser");

           //  grid-containerIntro 
           //  03vh 270vh 03vh; 
	document.getElementById('grid-containerIntro').style.gridTemplateRows = "03vh 140vh 03vh";


        //  03vh 2060vh 03vh
	document.getElementById('grid-containerReference').style.gridTemplateRows = "03vh 1750vh 03vh";



				//  id="svgVueJS1"
				//  width="84" height="92"
				document.getElementById("svgVueJS1").style.width="120px"; 
				document.getElementById("svgVueJS1").style.height="120px";


                               //  id="addToOrderButtonCaption" 
                               //  48px
		               document.getElementById('addToOrderButtonCaption').style.fontSize="38px"; 





		//  "copyRightMsg" 
		//  12px
		document.getElementById('copyRightMsg').style.fontSize="32px";

		//  "chromeBestMsg" 
		//  12px
		document.getElementById('chromeBestMsg').style.fontSize="32px";



		//  adjust the size of the
		//  Bootstrap icon
		//  id="BootstrapIcon"           
		document.getElementById("BootstrapIcon").style.width="96px"; 
		document.getElementById("BootstrapIcon").style.height="96px";



		//  "iconsProvidedMsg" 
		//  12px
		document.getElementById('iconsProvidedMsg').style.fontSize="32px";

		//  "mitLicenseMsg" 
		//  12px
		document.getElementById('mitLicenseMsg').style.fontSize="32px"; 

		//  "iconsModifiedMsg" 
		//  12px 
		document.getElementById('iconsModifiedMsg').style.fontSize="32px"; 




		document.getElementById('vueJsHeadingMsg').style.fontSize="32px"; 

		document.getElementById('vueJsLogoMsg').style.fontSize="32px"; 

		document.getElementById('vueJsModifiedMsg').style.fontSize="32px"; 

		document.getElementById('vueJsTermsMsg').style.fontSize="32px"; 

		document.getElementById('vueJsMitLicenseMsg').style.fontSize="32px"; 

		document.getElementById('vueJsLocatedMsg').style.fontSize="32px"; 



		//  document.getElementById('vueJsMitLicenseMsg').style.fontSize="32px"; 



           //   end        Edge
   } else if (isNewEdge) { 

	//  alert("using the new Edge browser");

           //  grid-containerIntro 
           //  03vh 270vh 03vh; 
	document.getElementById('grid-containerIntro').style.gridTemplateRows = "03vh 140vh 03vh";


        //  03vh 2060vh 03vh
	document.getElementById('grid-containerReference').style.gridTemplateRows = "03vh 1750vh 03vh";



				//  id="svgVueJS1"
				//  width="84" height="92"
				document.getElementById("svgVueJS1").style.width="120px"; 
				document.getElementById("svgVueJS1").style.height="120px";


                               //  id="addToOrderButtonCaption" 
                               //  48px
		               document.getElementById('addToOrderButtonCaption').style.fontSize="38px"; 





		//  "copyRightMsg" 
		//  12px
		document.getElementById('copyRightMsg').style.fontSize="32px";

		//  "chromeBestMsg" 
		//  12px
		document.getElementById('chromeBestMsg').style.fontSize="32px";



		//  adjust the size of the
		//  Bootstrap icon
		//  id="BootstrapIcon"           
		document.getElementById("BootstrapIcon").style.width="96px"; 
		document.getElementById("BootstrapIcon").style.height="96px";



		//  "iconsProvidedMsg" 
		//  12px
		document.getElementById('iconsProvidedMsg').style.fontSize="32px";

		//  "mitLicenseMsg" 
		//  12px
		document.getElementById('mitLicenseMsg').style.fontSize="32px"; 

		//  "iconsModifiedMsg" 
		//  12px 
		document.getElementById('iconsModifiedMsg').style.fontSize="32px"; 




		document.getElementById('vueJsHeadingMsg').style.fontSize="32px"; 

		document.getElementById('vueJsLogoMsg').style.fontSize="32px"; 

		document.getElementById('vueJsModifiedMsg').style.fontSize="32px"; 

		document.getElementById('vueJsTermsMsg').style.fontSize="32px"; 

		document.getElementById('vueJsMitLicenseMsg').style.fontSize="32px"; 

		document.getElementById('vueJsLocatedMsg').style.fontSize="32px"; 



		//  document.getElementById('vueJsMitLicenseMsg').style.fontSize="32px"; 



	//   end        new Edge
} else { 
         //  unknown browser


         //  end      unknown browser
   } 
             
      
    


// end     vuejs.js






