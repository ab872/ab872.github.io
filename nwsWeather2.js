<!--  nwsWeather2_js  -->



// start      nwsWeather2.js


//  this JavaScript file attempts to override the slight differences
//  in page rendering by different browsers

//  the goal is to provide a more consistent cross-browser experience





if (isAndroidEdge) { 

	//  	   alert("Edge under Android");

	//  svg id="BootstrapIcon" 
	//  width "16" height "16" 
	//  adjust the size of the
	//  Bootstrap icon
 	document.getElementById("BootstrapIcon").style.width="128px"; 
        document.getElementById("BootstrapIcon").style.height="128px";


	//  id= "locationInput"
	//  size="22" 
	//  maxlength="22" 
	document.getElementById("locationInput").size="18";
	document.getElementById("locationInput").maxlength="18";


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

	//  "pageTitle" 
	//  58px


	//  svg id="BootstrapIcon" 
	//  width "16" height "16" 
	//  adjust the size of the
	//  Bootstrap icon
	document.getElementById("BootstrapIcon").style.width="128px"; 
	document.getElementById("BootstrapIcon").style.height="128px";



	//  "copyRightMsg" 
	//  16px
	document.getElementById('copyRightMsg').style.fontSize="50px";

	//  "chromeBestMsg" 
	//  16px
	document.getElementById('chromeBestMsg').style.fontSize="50px";

	//  "iconsProvidedMsg" 
	//  16px
	document.getElementById('iconsProvidedMsg').style.fontSize="50px";

	//  "mitLicenseMsg" 
	//  16px
	document.getElementById('mitLicenseMsg').style.fontSize="50px"; 

	//  "iconsModifiedMsg" 
	//  16px 
	document.getElementById('iconsModifiedMsg').style.fontSize="50px"; 




	//  id="textForecastHeader" 
	//  15px
	//  <b>Extended Forecast for<br><br>
	document.getElementById('textForecastHeader').style.fontSize="50px"; 


	//  id="textForecastLocation" 
	//  17px
	//  <b>XXXX
	//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	//  XX</b>
	document.getElementById('textForecastLocation').style.fontSize="50px"; 


	//  id="textForecastCoordinates" 
	//  17px
	//  <b>XX.XX
	//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	//  XX.XX</b>
	document.getElementById('textForecastCoordinates').style.fontSize="50px"; 


	//  id="textForecastUpdateTime" 
	//  15px
	//  <b>XXXX-XX-XX
	//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	//  XX:XX:XX</b>
	document.getElementById('textForecastUpdateTime').style.fontSize="50px"; 




	// text for periods 1 to 14
	//  id="textPeriod1" 
	//  6px
	//  Xxxx<br>
	//  Xxxx<br>
	//  Xxxx<br>
	//  Xxxx

	document.getElementById('textPeriod1').style.fontSize="22px"; 

	document.getElementById('textPeriod2').style.fontSize="22px"; 

	document.getElementById('textPeriod3').style.fontSize="22px"; 

	document.getElementById('textPeriod4').style.fontSize="22px"; 

	document.getElementById('textPeriod5').style.fontSize="22px"; 

	document.getElementById('textPeriod6').style.fontSize="22px"; 

	document.getElementById('textPeriod7').style.fontSize="22px"; 

	document.getElementById('textPeriod8').style.fontSize="22px"; 

	document.getElementById('textPeriod9').style.fontSize="22px"; 

	document.getElementById('textPeriod10').style.fontSize="22px"; 

	document.getElementById('textPeriod11').style.fontSize="22px"; 

	document.getElementById('textPeriod12').style.fontSize="22px"; 

	document.getElementById('textPeriod13').style.fontSize="22px"; 

	document.getElementById('textPeriod14').style.fontSize="22px"; 



	document.getElementById('textPeriodUnused1').style.fontSize="22px"; 

	document.getElementById('textPeriodUnused2').style.fontSize="22px"; 



// end     all other Firefox under Android
}





           //   end        Firefox under Android
        } 





        if (isWin10) {
           //   begin      Firefox under Win10

		//  "copyRightMsg" 
		//  12px
		document.getElementById('copyRightMsg').style.fontSize="50px";

		//  "chromeBestMsg" 
		//  12px
		document.getElementById('chromeBestMsg').style.fontSize="50px";

		//  "iconsProvidedMsg" 
		//  12px
		document.getElementById('iconsProvidedMsg').style.fontSize="50px";

		//  "mitLicenseMsg" 
		//  12px
		document.getElementById('mitLicenseMsg').style.fontSize="50px"; 

		//  "iconsModifiedMsg" 
		//  12px 
		document.getElementById('iconsModifiedMsg').style.fontSize="50px"; 



		//  id="textForecastHeader" 
		//  15px
		//  <b>Extended Forecast for<br><br>
		document.getElementById('textForecastHeader').style.fontSize="30px"; 


		//  id="textForecastLocation" 
		//  17px
		//  <b>XXXX
		//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		//  XX</b>
		document.getElementById('textForecastLocation').style.fontSize="30px"; 


		//  id="textForecastCoordinates" 
		//  17px
		//  <b>XX.XX
		//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		//  XX.XX</b>
		document.getElementById('textForecastCoordinates').style.fontSize="30px"; 


		//  id="textForecastUpdateTime" 
		//  15px
		//  <b>XXXX-XX-XX
		//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		document.getElementById('textForecastUpdateTime').style.fontSize="30px"; 




	// text for periods 1 to 14
	//  id="textPeriod1" 
	//  6px
	//  Xxxx<br>
	//  Xxxx<br>
	//  Xxxx<br>
	//  Xxxx

	document.getElementById('textPeriod1').style.fontSize="22px"; 

	document.getElementById('textPeriod2').style.fontSize="22px"; 

	document.getElementById('textPeriod3').style.fontSize="22px"; 

	document.getElementById('textPeriod4').style.fontSize="22px"; 

	document.getElementById('textPeriod5').style.fontSize="22px"; 

	document.getElementById('textPeriod6').style.fontSize="22px"; 

	document.getElementById('textPeriod7').style.fontSize="22px"; 

	document.getElementById('textPeriod8').style.fontSize="22px"; 

	document.getElementById('textPeriod9').style.fontSize="22px"; 

	document.getElementById('textPeriod10').style.fontSize="22px"; 

	document.getElementById('textPeriod11').style.fontSize="22px"; 

	document.getElementById('textPeriod12').style.fontSize="22px"; 

	document.getElementById('textPeriod13').style.fontSize="22px"; 

	document.getElementById('textPeriod14').style.fontSize="22px"; 


	document.getElementById('textPeriodUnused1').style.fontSize="22px"; 

	document.getElementById('textPeriodUnused2').style.fontSize="22px"; 


           //   end        Firefox under Win10
        }






           //   end        Firefox 
   } else if (isChrome) { 


        if (isAndroid) {
           //   begin    Chrome under Android

       		//      alert("Chrome under Android");

		//  svg id="BootstrapIcon" 
		//  width "16" height "16" 
		//  adjust the size of the
		//  Bootstrap icon
		document.getElementById("BootstrapIcon").style.width="64px"; 
		document.getElementById("BootstrapIcon").style.height="64px";

           //   end       Chrome under Android
         } else {
           	//   begin    Chrome others

		//  "copyRightMsg" 
		//  12px
		document.getElementById('copyRightMsg').style.fontSize="50px";

		//  "chromeBestMsg" 
		//  12px
		document.getElementById('chromeBestMsg').style.fontSize="50px";

		//  "iconsProvidedMsg" 
		//  12px
		document.getElementById('iconsProvidedMsg').style.fontSize="50px";

		//  "mitLicenseMsg" 
		//  12px
		document.getElementById('mitLicenseMsg').style.fontSize="50px"; 

		//  "iconsModifiedMsg" 
		//  12px 
		document.getElementById('iconsModifiedMsg').style.fontSize="50px"; 




		//  id="textForecastHeader" 
		//  15px
		//  <b>Extended Forecast for<br><br>
		document.getElementById('textForecastHeader').style.fontSize="30px"; 


		//  id="textForecastLocation" 
		//  17px
		//  <b>XXXX
		//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		//  XX</b>
		document.getElementById('textForecastLocation').style.fontSize="30px"; 


		//  id="textForecastCoordinates" 
		//  17px
		//  <b>XX.XX
		//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		//  XX.XX</b>
		document.getElementById('textForecastCoordinates').style.fontSize="30px"; 


		//  id="textForecastUpdateTime" 
		//  15px
		//  <b>XXXX-XX-XX
		//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		document.getElementById('textForecastUpdateTime').style.fontSize="30px"; 




	// text for periods 1 to 14
	//  id="textPeriod1" 
	//  6px
	//  Xxxx<br>
	//  Xxxx<br>
	//  Xxxx<br>
	//  Xxxx

	document.getElementById('textPeriod1').style.fontSize="22px"; 

	document.getElementById('textPeriod2').style.fontSize="22px"; 

	document.getElementById('textPeriod3').style.fontSize="22px"; 

	document.getElementById('textPeriod4').style.fontSize="22px"; 

	document.getElementById('textPeriod5').style.fontSize="22px"; 

	document.getElementById('textPeriod6').style.fontSize="22px"; 

	document.getElementById('textPeriod7').style.fontSize="22px"; 

	document.getElementById('textPeriod8').style.fontSize="22px"; 

	document.getElementById('textPeriod9').style.fontSize="22px"; 

	document.getElementById('textPeriod10').style.fontSize="22px"; 

	document.getElementById('textPeriod11').style.fontSize="22px"; 

	document.getElementById('textPeriod12').style.fontSize="22px"; 

	document.getElementById('textPeriod13').style.fontSize="22px"; 

	document.getElementById('textPeriod14').style.fontSize="22px"; 


	document.getElementById('textPeriodUnused1').style.fontSize="22px"; 

	document.getElementById('textPeriodUnused2').style.fontSize="22px"; 



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

           //   end        Edge
   } else if (isNewEdge) { 

	//  alert("using the new Edge browser");

	//   end        new Edge
} else { 
         //  unknown browser


         //  end      unknown browser
   } 
             
  



// end     nwsWeather2.js






