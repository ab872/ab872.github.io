<!--  viewCrudP1_js  -->



// start      viewCrudP1.js



//  this JavaScript file attempts to override the slight differences
//  in page rendering by different browsers

//  the goal is to provide a more consistent cross-browser experience








   if (isFirefox) { 
           //   begin      Firefox 

if (isAndroid) {
           //   begin      Firefox under Android

//  alert("Firefox under Android");


//   id="textPageTitle" 
//  font-size:28px;"
document.getElementById('textPageTitle').style.fontSize="42px";


//  adjust the size of the
//  Bootstrap icon
//  id="BootstrapIcon"           

document.getElementById("BootstrapIcon").style.width="64px"; 
document.getElementById("BootstrapIcon").style.height="64px";





//  id="copyrightMsg" 
//  font-size:12px;



//  id="bestResultsChromeMsg" 
//  font-size:12px;




//   id="pdfProvidedMsg" 
//  font-size:12px;





//  id="pdfDownloadMsg" 
//  font-size:12px;






//  id="pdfLicenseMsg" 
//  font-size:12px;







//  id="iconProvidedMsg" 
//  font-size:12px;






//  id="iconLicenseMsg" 
//  font-size:12px;





//   id="iconModifiedMsg" 
//  font-size:12px;







           //   end        Firefox under Android
        } 


        if (isWin10) {
           //   begin      Firefox under Win10



		//   id="textPageTitle" 
		//  font-size:28px;"
		document.getElementById('textPageTitle').style.fontSize="64px";



           	//  adjust the size of the
           	//   Bootstrap icon
           	//  id="BootstrapIcon"
           	document.getElementById("BootstrapIcon").style.width="64px"; 
           	document.getElementById("BootstrapIcon").style.height="64px";




		//  id="copyrightMsg" 
		//  font-size:12px;
		document.getElementById('copyrightMsg').style.fontSize="38px";

		//  id="bestResultsChromeMsg" 
		//  font-size:12px;
		document.getElementById('bestResultsChromeMsg').style.fontSize="38px";

		//   id="pdfProvidedMsg" 
		//  font-size:12px;
		document.getElementById('pdfProvidedMsg').style.fontSize="38px";

		//  id="pdfDownloadMsg" 
		//  font-size:12px;
		document.getElementById('pdfDownloadMsg').style.fontSize="38px";

		//  id="pdfLicenseMsg" 
		//  font-size:12px;
		document.getElementById('pdfLicenseMsg').style.fontSize="38px";

		//  id="iconProvidedMsg" 
		//  font-size:12px;
		document.getElementById('iconProvidedMsg').style.fontSize="38px";

		//  id="iconLicenseMsg" 
		//  font-size:12px;
		document.getElementById('iconLicenseMsg').style.fontSize="38px";

		//   id="iconModifiedMsg" 
		//  font-size:12px;
		document.getElementById('iconModifiedMsg').style.fontSize="38px";





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
           document.getElementById("BootstrapIcon").style.width="32px"; 
           document.getElementById("BootstrapIcon").style.height="32px";







           //   end       Chrome under Android
         } else {
           //   begin    Chrome others


		//   id="textPageTitle" 
		//  font-size:28px;"
		document.getElementById('textPageTitle').style.fontSize="64px";




           	//  adjust the size of the
           	//   Bootstrap icon
           	//  id="BootstrapIcon"
           	document.getElementById("BootstrapIcon").style.width="64px"; 
           	document.getElementById("BootstrapIcon").style.height="64px";




		//  id="copyrightMsg" 
		//  font-size:12px;
		document.getElementById('copyrightMsg').style.fontSize="38px";

		//  id="bestResultsChromeMsg" 
		//  font-size:12px;
		document.getElementById('bestResultsChromeMsg').style.fontSize="38px";

		//   id="pdfProvidedMsg" 
		//  font-size:12px;
		document.getElementById('pdfProvidedMsg').style.fontSize="38px";

		//  id="pdfDownloadMsg" 
		//  font-size:12px;
		document.getElementById('pdfDownloadMsg').style.fontSize="38px";

		//  id="pdfLicenseMsg" 
		//  font-size:12px;
		document.getElementById('pdfLicenseMsg').style.fontSize="38px";

		//  id="iconProvidedMsg" 
		//  font-size:12px;
		document.getElementById('iconProvidedMsg').style.fontSize="38px";

		//  id="iconLicenseMsg" 
		//  font-size:12px;
		document.getElementById('iconLicenseMsg').style.fontSize="38px";

		//   id="iconModifiedMsg" 
		//  font-size:12px;
		document.getElementById('iconModifiedMsg').style.fontSize="38px";





             //   end     Chrome others
          }







           //   end        Chrome
   } else if (isSafari) { 


if (isiPad) { 

} else if (isiPhone) { 

} else if (isMac) { 

}



           //   end        Safari
   } else if (isNewEdge) { 
	//   begin        new Edge

	//  alert("using the new Edge browser");


		//   id="textPageTitle" 
		//  font-size:28px;"
		document.getElementById('textPageTitle').style.fontSize="64px";




           	//  adjust the size of the
           	//   Bootstrap icon
           	//  id="BootstrapIcon"
           	document.getElementById("BootstrapIcon").style.width="64px"; 
           	document.getElementById("BootstrapIcon").style.height="64px";


		//  id="copyrightMsg" 
		//  font-size:12px;
		document.getElementById('copyrightMsg').style.fontSize="38px";

		//  id="bestResultsChromeMsg" 
		//  font-size:12px;
		document.getElementById('bestResultsChromeMsg').style.fontSize="38px";

		//   id="pdfProvidedMsg" 
		//  font-size:12px;
		document.getElementById('pdfProvidedMsg').style.fontSize="38px";

		//  id="pdfDownloadMsg" 
		//  font-size:12px;
		document.getElementById('pdfDownloadMsg').style.fontSize="38px";

		//  id="pdfLicenseMsg" 
		//  font-size:12px;
		document.getElementById('pdfLicenseMsg').style.fontSize="38px";

		//  id="iconProvidedMsg" 
		//  font-size:12px;
		document.getElementById('iconProvidedMsg').style.fontSize="38px";

		//  id="iconLicenseMsg" 
		//  font-size:12px;
		document.getElementById('iconLicenseMsg').style.fontSize="38px";

		//   id="iconModifiedMsg" 
		//  font-size:12px;
		document.getElementById('iconModifiedMsg').style.fontSize="38px";






           //   end        new Edge
   } else if (isEdge) { 

           //  adjust the size of the
           //   Bootstrap icon
           //  id="BootstrapIcon"
           document.getElementById("BootstrapIcon").style.width="64px"; 
           document.getElementById("BootstrapIcon").style.height="64px";



           //   end        Edge
   } else { 
          //  unknown browser



          //  end      unknown browser
   } 

  


// end     viewCrudP1.js






