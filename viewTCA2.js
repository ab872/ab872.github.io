<!--  viewTCA2_js  -->



// start      viewTCA2.js



//  this JavaScript file attempts to override the slight differences
//  in page rendering by different browsers

//  the goal is to provide a more consistent cross-browser experience








   if (isFirefox) { 
           //   begin      Firefox 

if (isAndroid) {
           //   begin      Firefox under Android

//  alert("Firefox under Android");



           //  adjust the size of the
           //   Bootstrap icon
           //  id="BootstrapIcon"
           document.getElementById("BootstrapIcon").style.width="96px"; 
           document.getElementById("BootstrapIcon").style.height="96px";









//   id="textPageTitle" 
//  font-size:28px;"
document.getElementById('textPageTitle').style.fontSize="42px";






//  id="copyrightMsg" 
//  12px



//  id="bestResultsChromeMsg" 
//  12px




//   id="pdfProvidedMsg" 
//  12px





//  id="pdfDownloadMsg" 
//  12px






//  id="pdfLicenseMsg" 
//  12px







//  id="iconProvidedMsg" 
//  12px






//  id="iconLicenseMsg" 
//  12px





//   id="iconModifiedMsg" 
//  12px







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

      //     alert("Chrome under Android");


           //  adjust the size of the
           //   Bootstrap icon
           //  id="BootstrapIcon"
           document.getElementById("BootstrapIcon").style.width="96px"; 
           document.getElementById("BootstrapIcon").style.height="96px";







           //   end       Chrome under Android
         } else {
           //   begin    Chrome others

   //  alert("Chrome - others");

           //  adjust the size of the 
           //  Bootstrap icon
           //  id="BootstrapIcon"
           document.getElementById("BootstrapIcon").style.width="96px"; 
           document.getElementById("BootstrapIcon").style.height="96px";


		//  id="copyrightMsg" 
		//  12px
    		document.getElementById('copyrightMsg').style.fontSize="24px";

		//  id="bestResultsChromeMsg" 
		//  12px
    		document.getElementById('bestResultsChromeMsg').style.fontSize="24px";

		//   id="pdfProvidedMsg" 
		//  12px
    		document.getElementById('pdfProvidedMsg').style.fontSize="24px";

		//  id="pdfDownloadMsg" 
		//  12px
    		document.getElementById('pdfDownloadMsg').style.fontSize="24px";

		//  id="pdfLicenseMsg" 
		//  12px
    		document.getElementById('pdfLicenseMsg').style.fontSize="24px";

		//  id="iconProvidedMsg" 
		//  12px
    		document.getElementById('iconProvidedMsg').style.fontSize="24px";

		//  id="iconLicenseMsg" 
		//  12px
    		document.getElementById('iconLicenseMsg').style.fontSize="24px";

		//   id="iconModifiedMsg" 
		//  12px
   		 document.getElementById('iconModifiedMsg').style.fontSize="24px";






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

  


// end     viewTCA2.js



  



