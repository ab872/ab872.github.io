<!--  nwsWeather2_js  -->



// start      nwsWeather2.js


//  this JavaScript file attempts to override the slight differences
//  in page rendering by different browsers

//  the goal is to provide a more consistent cross-browser experience


  	 //  alert("nwsWeather2.js successfully loaded");






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



 	// end 	     Firefox under Android5 
} else if (isAndroid12) { 

	// begin     Firefox under Android12



 	// end 	     Firefox under Android12
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



	document.getElementById('grid-containerIntro').style.gridTemplateRows = `03vh 180vh 03vh`;

	document.getElementById('grid-containerReference').style.gridTemplateRows = `03vh 1640vh 03vh`;


	//  id="grid-containerWeather1"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1').style.gridTemplateRows = `0.5vh 09vh 0.5vh`;

	//  id="grid-containerWeather1b"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1b').style.gridTemplateRows = `0.5vh 09vh 0.5vh`;

	//  id="grid-containerWeather1c"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1c').style.gridTemplateRows = `0.5vh 09vh 0.5vh`;

	//  id="grid-containerWeather1d"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1d').style.gridTemplateRows = `0.5vh 09vh 0.5vh`;




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


	//  id="textIntroductionEmphasized19" 
	//  25px
	//  <b>39.67,-97.08</b>
	document.getElementById('textIntroductionEmphasized19').style.fontSize="65px"; 






	document.getElementById('grid-containerIntro').style.gridTemplateRows = `03vh 170vh 03vh`;

	document.getElementById('grid-containerReference').style.gridTemplateRows = `03vh 1770vh 03vh`;



	//  id="grid-containerForecastTitle"
	//  grid-template-rows: 01vh 25vh 01vh
	document.getElementById('grid-containerForecastTitle').style.gridTemplateRows = `01vh 28vh 01vh`;

	//  id="grid-containerWeather1"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1').style.gridTemplateRows = `0.5vh 20vh 0.5vh`;

	//  id="grid-containerWeather1b"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1b').style.gridTemplateRows = `0.5vh 20vh 0.5vh`;

	//  id="grid-containerWeather1c"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1c').style.gridTemplateRows = `0.5vh 20vh 0.5vh`;

	//  id="grid-containerWeather1d"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1d').style.gridTemplateRows = `0.5vh 20vh 0.5vh`;



           //   end        Firefox under Win10
        }






           //   end        Firefox 
   } else if (isChrome) { 



        if (isAndroid) {
           //   begin    Chrome under Android

       	   //      alert("Chrome under Android");


		if (isAndroid12) { 
			// begin     Chrome under Android12

			//  svg id="BootstrapIcon" 
			//  width "16" height "16" 
			//  adjust the size of the
			//  Bootstrap icon
			document.getElementById("BootstrapIcon").style.width="64px"; 
			document.getElementById("BootstrapIcon").style.height="64px";


			document.getElementById('grid-containerIntro').style.gridTemplateRows = `03vh 240vh 03vh`;

			document.getElementById('grid-containerReference').style.gridTemplateRows = `03vh 2300vh 03vh`;


 			// end 	     Chrome under Android12
		} else {
 			// begin 	all other Chrome under Android

			//  svg id="BootstrapIcon" 
			//  width "16" height "16" 
			//  adjust the size of the
			//  Bootstrap icon
			document.getElementById("BootstrapIcon").style.width="64px"; 
			document.getElementById("BootstrapIcon").style.height="64px";


			document.getElementById('grid-containerIntro').style.gridTemplateRows = `03vh 240vh 03vh`;

			document.getElementById('grid-containerReference').style.gridTemplateRows = `03vh 2300vh 03vh`;


		//  id="grid-containerWeather1"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1').style.gridTemplateRows = `0.5vh 09vh 0.5vh`;

		//  id="grid-containerWeather1b"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1b').style.gridTemplateRows = `0.5vh 09vh 0.5vh`;

		//  id="grid-containerWeather1c"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1c').style.gridTemplateRows = `0.5vh 09vh 0.5vh`;

		//  id="grid-containerWeather1d"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1d').style.gridTemplateRows = `0.5vh 09vh 0.5vh`;




 			// end 	     	all other Chrome under Android
		}


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


	//  id="textIntroductionEmphasized19" 
	//  25px
	//  <b>39.67,-97.08</b>
	document.getElementById('textIntroductionEmphasized19').style.fontSize="65px"; 



	document.getElementById('grid-containerIntro').style.gridTemplateRows = `03vh 160vh 03vh`;

	document.getElementById('grid-containerReference').style.gridTemplateRows = `03vh 1735vh 03vh`;



	//  id="grid-containerForecastTitle"
	//  grid-template-rows: 01vh 25vh 01vh
	document.getElementById('grid-containerForecastTitle').style.gridTemplateRows = `01vh 28vh 01vh`;

	//  id="grid-containerWeather1"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1').style.gridTemplateRows = `0.5vh 20vh 0.5vh`;

	//  id="grid-containerWeather1b"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1b').style.gridTemplateRows = `0.5vh 20vh 0.5vh`;

	//  id="grid-containerWeather1c"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1c').style.gridTemplateRows = `0.5vh 20vh 0.5vh`;

	//  id="grid-containerWeather1d"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1d').style.gridTemplateRows = `0.5vh 20vh 0.5vh`;





             	//   end     Chrome others
          }


 
           //   end        Chrome
   } else if (isSafariLine) {


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

	document.getElementById('textPeriod1').style.fontSize="10px"; 

	document.getElementById('textPeriod2').style.fontSize="10px"; 

	document.getElementById('textPeriod3').style.fontSize="10px"; 

	document.getElementById('textPeriod4').style.fontSize="10px"; 

	document.getElementById('textPeriod5').style.fontSize="10px"; 

	document.getElementById('textPeriod6').style.fontSize="10px"; 

	document.getElementById('textPeriod7').style.fontSize="10px"; 

	document.getElementById('textPeriod8').style.fontSize="10px"; 

	document.getElementById('textPeriod9').style.fontSize="10px"; 

	document.getElementById('textPeriod10').style.fontSize="10px"; 

	document.getElementById('textPeriod11').style.fontSize="10px"; 

	document.getElementById('textPeriod12').style.fontSize="10px"; 

	document.getElementById('textPeriod13').style.fontSize="10px"; 

	document.getElementById('textPeriod14').style.fontSize="10px"; 


	document.getElementById('textPeriodUnused1').style.fontSize="10px"; 

	document.getElementById('textPeriodUnused2').style.fontSize="10px"; 



	//  id="textIntroductionEmphasized19" 
	//  25px
	//  <b>39.67,-97.08</b>
	document.getElementById('textIntroductionEmphasized19').style.fontSize="65px"; 



if (deviceScreenWidth == 414) {



	document.getElementById('grid-containerIntro').style.gridTemplateRows = `03vh 143.7vh 03vh`;

	document.getElementById('grid-containerReference').style.gridTemplateRows = `03vh 1459vh 03vh`;


	//  id="grid-containerForecastTitle"
	//  grid-template-rows: 01vh 25vh 01vh
	document.getElementById('grid-containerForecastTitle').style.gridTemplateRows = `01vh 14vh 01vh`;

	//  id="grid-containerWeather1"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1').style.gridTemplateRows = `0.5vh 07vh 0.5vh`;

	//  id="grid-containerWeather1b"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1b').style.gridTemplateRows = `0.5vh 07vh 0.5vh`;

	//  id="grid-containerWeather1c"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1c').style.gridTemplateRows = `0.5vh 07vh 0.5vh`;

	//  id="grid-containerWeather1d"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1d').style.gridTemplateRows = `0.5vh 07vh 0.5vh`;


   //   end     screen width EQUAL to 414
} else if (deviceScreenWidth == 100) {

	//  alert("Safari LINE     screen width EQUAL to 100 "); 


   //   end     screen width EQUAL to 100
} else {

	document.getElementById('grid-containerIntro').style.gridTemplateRows = `03vh 143.7vh 03vh`;

	document.getElementById('grid-containerReference').style.gridTemplateRows = `03vh 1459vh 03vh`;


	//  id="grid-containerForecastTitle"
	//  grid-template-rows: 01vh 25vh 01vh
	document.getElementById('grid-containerForecastTitle').style.gridTemplateRows = `01vh 14vh 01vh`;

	//  id="grid-containerWeather1"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1').style.gridTemplateRows = `0.5vh 07vh 0.5vh`;

	//  id="grid-containerWeather1b"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1b').style.gridTemplateRows = `0.5vh 07vh 0.5vh`;

	//  id="grid-containerWeather1c"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1c').style.gridTemplateRows = `0.5vh 07vh 0.5vh`;

	//  id="grid-containerWeather1d"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1d').style.gridTemplateRows = `0.5vh 07vh 0.5vh`;

   //   end     screen width - others
}


	//  end Safari LINE
   } else if (isSafari) { 


	if (isiPad) { 


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


	//  id="textIntroductionEmphasized19" 
	//  25px
	//  <b>39.67,-97.08</b>
	document.getElementById('textIntroductionEmphasized19').style.fontSize="65px"; 






if (deviceScreenWidth == 375) {


		document.getElementById('grid-containerIntro').style.gridTemplateRows = `03vh 200vh 03vh`;

		document.getElementById('grid-containerReference').style.gridTemplateRows = `03vh 1990vh 03vh`;


		//  id="grid-containerForecastTitle"
		//  grid-template-rows: 01vh 25vh 01vh
		document.getElementById('grid-containerForecastTitle').style.gridTemplateRows = `01vh 20vh 01vh`;

		//  id="grid-containerWeather1"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1').style.gridTemplateRows = `0.5vh 09vh 0.5vh`;

		//  id="grid-containerWeather1b"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1b').style.gridTemplateRows = `0.5vh 09vh 0.5vh`;

		//  id="grid-containerWeather1c"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1c').style.gridTemplateRows = `0.5vh 09vh 0.5vh`;

		//  id="grid-containerWeather1d"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1d').style.gridTemplateRows = `0.5vh 09vh 0.5vh`;


   //   end     screen width EQUAL to 375
} else if (deviceScreenWidth == 390) {


		document.getElementById('grid-containerIntro').style.gridTemplateRows = `03vh 150vh 03vh`;

		document.getElementById('grid-containerReference').style.gridTemplateRows = `03vh 1555vh 03vh`;


		//  id="grid-containerForecastTitle"
		//  grid-template-rows: 01vh 25vh 01vh
		document.getElementById('grid-containerForecastTitle').style.gridTemplateRows = `01vh 18vh 01vh`;

		//  id="grid-containerWeather1"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1').style.gridTemplateRows = `0.5vh 07vh 0.5vh`;

		//  id="grid-containerWeather1b"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1b').style.gridTemplateRows = `0.5vh 07vh 0.5vh`;

		//  id="grid-containerWeather1c"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1c').style.gridTemplateRows = `0.5vh 07vh 0.5vh`;

		//  id="grid-containerWeather1d"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1d').style.gridTemplateRows = `0.5vh 07vh 0.5vh`;


   //   end     screen width EQUAL to 390
} else if (deviceScreenWidth == 414) {



	document.getElementById('grid-containerIntro').style.gridTemplateRows = `03vh 146vh 03vh`;

	document.getElementById('grid-containerReference').style.gridTemplateRows = `03vh 1460vh 03vh`;


	//  id="grid-containerForecastTitle"
	//  grid-template-rows: 01vh 25vh 01vh
	document.getElementById('grid-containerForecastTitle').style.gridTemplateRows = `01vh 14vh 01vh`;

	//  id="grid-containerWeather1"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1').style.gridTemplateRows = `0.5vh 07vh 0.5vh`;

	//  id="grid-containerWeather1b"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1b').style.gridTemplateRows = `0.5vh 07vh 0.5vh`;

	//  id="grid-containerWeather1c"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1c').style.gridTemplateRows = `0.5vh 07vh 0.5vh`;

	//  id="grid-containerWeather1d"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1d').style.gridTemplateRows = `0.5vh 07vh 0.5vh`;


   //   end     screen width EQUAL to 414
} else if (deviceScreenWidth == 768) {



		document.getElementById('grid-containerIntro').style.gridTemplateRows = `03vh 136vh 03vh`;

		document.getElementById('grid-containerReference').style.gridTemplateRows = `03vh 1365vh 03vh`;


		//  id="grid-containerForecastTitle"
		//  grid-template-rows: 01vh 25vh 01vh
		document.getElementById('grid-containerForecastTitle').style.gridTemplateRows = `01vh 16vh 01vh`;

		//  id="grid-containerWeather1"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1').style.gridTemplateRows = `0.5vh 11vh 0.5vh`;

		//  id="grid-containerWeather1b"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1b').style.gridTemplateRows = `0.5vh 11vh 0.5vh`;

		//  id="grid-containerWeather1c"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1c').style.gridTemplateRows = `0.5vh 11vh 0.5vh`;

		//  id="grid-containerWeather1d"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1d').style.gridTemplateRows = `0.5vh 11vh 0.5vh`;


   //   end     screen width EQUAL to 768
} else if (deviceScreenWidth == 820) {


		document.getElementById('grid-containerIntro').style.gridTemplateRows = `03vh 117vh 03vh`;

		document.getElementById('grid-containerReference').style.gridTemplateRows = `03vh 1230vh 03vh`;


		//  id="grid-containerForecastTitle"
		//  grid-template-rows: 01vh 25vh 01vh
		document.getElementById('grid-containerForecastTitle').style.gridTemplateRows = `01vh 16vh 01vh`;

		//  id="grid-containerWeather1"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1').style.gridTemplateRows = `0.5vh 10vh 0.5vh`;

		//  id="grid-containerWeather1b"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1b').style.gridTemplateRows = `0.5vh 10vh 0.5vh`;

		//  id="grid-containerWeather1c"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1c').style.gridTemplateRows = `0.5vh 10vh 0.5vh`;

		//  id="grid-containerWeather1d"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1d').style.gridTemplateRows = `0.5vh 10vh 0.5vh`;


   //   end     screen width EQUAL to 820
} else if (deviceScreenWidth == 100) {

	//  alert("Safari iPad     screen width EQUAL to 100 "); 


   //   end     screen width EQUAL to 100
} else {

		document.getElementById('grid-containerIntro').style.gridTemplateRows = `03vh 117vh 03vh`;

		document.getElementById('grid-containerReference').style.gridTemplateRows = `03vh 1230vh 03vh`;


		//  id="grid-containerForecastTitle"
		//  grid-template-rows: 01vh 25vh 01vh
		document.getElementById('grid-containerForecastTitle').style.gridTemplateRows = `01vh 16vh 01vh`;

		//  id="grid-containerWeather1"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1').style.gridTemplateRows = `0.5vh 10vh 0.5vh`;

		//  id="grid-containerWeather1b"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1b').style.gridTemplateRows = `0.5vh 10vh 0.5vh`;

		//  id="grid-containerWeather1c"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1c').style.gridTemplateRows = `0.5vh 10vh 0.5vh`;

		//  id="grid-containerWeather1d"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1d').style.gridTemplateRows = `0.5vh 10vh 0.5vh`;

   //   end     screen width - others
}



           //   end        Safari iPad
	} else if (isiPhone) { 



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

		document.getElementById('textPeriod1').style.fontSize="14px"; 

		document.getElementById('textPeriod2').style.fontSize="14px"; 

		document.getElementById('textPeriod3').style.fontSize="14px"; 

		document.getElementById('textPeriod4').style.fontSize="14px"; 

		document.getElementById('textPeriod5').style.fontSize="14px"; 

		document.getElementById('textPeriod6').style.fontSize="14px"; 

		document.getElementById('textPeriod7').style.fontSize="14px"; 

		document.getElementById('textPeriod8').style.fontSize="14px"; 

		document.getElementById('textPeriod9').style.fontSize="14px"; 

		document.getElementById('textPeriod10').style.fontSize="14px"; 

		document.getElementById('textPeriod11').style.fontSize="14px"; 

		document.getElementById('textPeriod12').style.fontSize="14px"; 

		document.getElementById('textPeriod13').style.fontSize="14px"; 

		document.getElementById('textPeriod14').style.fontSize="14px"; 


		document.getElementById('textPeriodUnused1').style.fontSize="14px"; 

		document.getElementById('textPeriodUnused2').style.fontSize="14px"; 

		//  id="textIntroductionEmphasized19" 
		//  25px
		//  <b>39.67,-97.08</b>
		document.getElementById('textIntroductionEmphasized19').style.fontSize="65px"; 




if (deviceScreenWidth == 375) {

		document.getElementById('grid-containerIntro').style.gridTemplateRows = `03vh 200vh 03vh`;

		document.getElementById('grid-containerReference').style.gridTemplateRows = `03vh 1990vh 03vh`;


		//  id="grid-containerForecastTitle"
		//  grid-template-rows: 01vh 25vh 01vh
		document.getElementById('grid-containerForecastTitle').style.gridTemplateRows = `01vh 20vh 01vh`;

		//  id="grid-containerWeather1"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1').style.gridTemplateRows = `0.5vh 09vh 0.5vh`;

		//  id="grid-containerWeather1b"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1b').style.gridTemplateRows = `0.5vh 09vh 0.5vh`;

		//  id="grid-containerWeather1c"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1c').style.gridTemplateRows = `0.5vh 09vh 0.5vh`;

		//  id="grid-containerWeather1d"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1d').style.gridTemplateRows = `0.5vh 09vh 0.5vh`;


   //   end     screen width EQUAL to 375
} else if (deviceScreenWidth == 390) {


		document.getElementById('grid-containerIntro').style.gridTemplateRows = `03vh 150vh 03vh`;

		document.getElementById('grid-containerReference').style.gridTemplateRows = `03vh 1555vh 03vh`;


		//  id="grid-containerForecastTitle"
		//  grid-template-rows: 01vh 25vh 01vh
		document.getElementById('grid-containerForecastTitle').style.gridTemplateRows = `01vh 18vh 01vh`;

		//  id="grid-containerWeather1"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1').style.gridTemplateRows = `0.5vh 07vh 0.5vh`;

		//  id="grid-containerWeather1b"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1b').style.gridTemplateRows = `0.5vh 07vh 0.5vh`;

		//  id="grid-containerWeather1c"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1c').style.gridTemplateRows = `0.5vh 07vh 0.5vh`;

		//  id="grid-containerWeather1d"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1d').style.gridTemplateRows = `0.5vh 07vh 0.5vh`;


   //   end     screen width EQUAL to 390
} else if (deviceScreenWidth == 414) {



	document.getElementById('grid-containerIntro').style.gridTemplateRows = `03vh 146vh 03vh`;

	document.getElementById('grid-containerReference').style.gridTemplateRows = `03vh 1460vh 03vh`;


	//  id="grid-containerForecastTitle"
	//  grid-template-rows: 01vh 25vh 01vh
	document.getElementById('grid-containerForecastTitle').style.gridTemplateRows = `01vh 14vh 01vh`;

	//  id="grid-containerWeather1"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1').style.gridTemplateRows = `0.5vh 07vh 0.5vh`;

	//  id="grid-containerWeather1b"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1b').style.gridTemplateRows = `0.5vh 07vh 0.5vh`;

	//  id="grid-containerWeather1c"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1c').style.gridTemplateRows = `0.5vh 07vh 0.5vh`;

	//  id="grid-containerWeather1d"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1d').style.gridTemplateRows = `0.5vh 07vh 0.5vh`;


   //   end     screen width EQUAL to 414
} else if (deviceScreenWidth == 100) {

	//  alert("Safari iPhone     screen width EQUAL to 100 "); 


   //   end     screen width EQUAL to 100
} else {

		document.getElementById('grid-containerIntro').style.gridTemplateRows = `03vh 205vh 03vh`;

		document.getElementById('grid-containerReference').style.gridTemplateRows = `03vh 2000vh 03vh`;


		//  id="grid-containerForecastTitle"
		//  grid-template-rows: 01vh 25vh 01vh
		document.getElementById('grid-containerForecastTitle').style.gridTemplateRows = `01vh 20vh 01vh`;

		//  id="grid-containerWeather1"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1').style.gridTemplateRows = `0.5vh 09vh 0.5vh`;

		//  id="grid-containerWeather1b"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1b').style.gridTemplateRows = `0.5vh 09vh 0.5vh`;

		//  id="grid-containerWeather1c"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1c').style.gridTemplateRows = `0.5vh 09vh 0.5vh`;

		//  id="grid-containerWeather1d"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1d').style.gridTemplateRows = `0.5vh 09vh 0.5vh`;

   //   end     screen width - others
}


           //   end        Safari iPhone
	} else if (isMac) { 



           //   end        Safari Mac
	}

           //   end        Safari
   } else if (isEdge) { 

	//  alert("using the old Edge browser");


	//  id="textIntroduction" 
	//  24px
	document.getElementById('textIntroduction').style.fontSize="46px";


	//  id="textIntroductionEmphasized1"
	//  25px
	document.getElementById('textIntroductionEmphasized1').style.fontSize="47px";


	//  id="textIntroductionEmphasized2"
	//  25px
	document.getElementById('textIntroductionEmphasized2').style.fontSize="47px";


	//  id="textIntroductionEmphasized3"
	//  25px
	document.getElementById('textIntroductionEmphasized3').style.fontSize="47px";


	//  id="textIntroductionEmphasized4"
	//  25px
	document.getElementById('textIntroductionEmphasized4').style.fontSize="47px";


	//  id="textIntroductionEmphasized5"
	//  25px
	document.getElementById('textIntroductionEmphasized5').style.fontSize="47px";


	//  id="textIntroductionEmphasized6"
	//  25px
	document.getElementById('textIntroductionEmphasized6').style.fontSize="47px";


	//  id="textIntroductionEmphasized7"
	//  25px
	document.getElementById('textIntroductionEmphasized7').style.fontSize="47px";


	//  id="textIntroductionEmphasized8"
	//  25px
	document.getElementById('textIntroductionEmphasized8').style.fontSize="47px";


	//  id="textIntroductionEmphasized9"
	//  25px
	document.getElementById('textIntroductionEmphasized9').style.fontSize="47px";


	//  id="textIntroductionEmphasized10"
	//  25px
	document.getElementById('textIntroductionEmphasized10').style.fontSize="47px";


	//  id="textIntroductionEmphasized11"
	//  25px
	document.getElementById('textIntroductionEmphasized11').style.fontSize="47px";


	//  id="textIntroductionEmphasized12"
	//  25px
	document.getElementById('textIntroductionEmphasized12').style.fontSize="47px";


	//  id="textIntroductionEmphasized13"
	//  25px
	document.getElementById('textIntroductionEmphasized13').style.fontSize="47px";


	//  id="textIntroductionEmphasized14"
	//  25px
	document.getElementById('textIntroductionEmphasized14').style.fontSize="47px";


	//  id="textIntroductionEmphasized15"
	//  25px
	document.getElementById('textIntroductionEmphasized15').style.fontSize="47px";


	//  id="textIntroductionEmphasized16"
	//  25px
	document.getElementById('textIntroductionEmphasized16').style.fontSize="47px";


	//  id="textIntroductionEmphasized17"
	//  25px
	document.getElementById('textIntroductionEmphasized17').style.fontSize="47px";


	//  id="textIntroductionEmphasized18"
	//  25px
	document.getElementById('textIntroductionEmphasized18').style.fontSize="47px";




	//  id="textIntroductionEmphasized20"
	//  25px
	document.getElementById('textIntroductionEmphasized20').style.fontSize="47px";

	//  id="textIntroductionEmphasized21"
	//  25px
	document.getElementById('textIntroductionEmphasized21').style.fontSize="47px";

	//  id="textIntroductionEmphasized22"
	//  25px
	document.getElementById('textIntroductionEmphasized22').style.fontSize="47px";


	//  id="textIntroductionEmphasized23"
	//  25px 
	document.getElementById('textIntroductionEmphasized23').style.fontSize="47px";

	//  id="textIntroductionEmphasized24"
	//  25px
	document.getElementById('textIntroductionEmphasized24').style.fontSize="47px";

	//  id="textIntroductionEmphasized25"
	//  25px
	document.getElementById('textIntroductionEmphasized25').style.fontSize="47px";





		//  "copyRightMsg" 
		//  12px
		document.getElementById('copyRightMsg').style.fontSize="70px";

		//  "chromeBestMsg" 
		//  12px
		document.getElementById('chromeBestMsg').style.fontSize="70px";

		//  "iconsProvidedMsg" 
		//  12px
		document.getElementById('iconsProvidedMsg').style.fontSize="70px";

		//  "mitLicenseMsg" 
		//  12px
		document.getElementById('mitLicenseMsg').style.fontSize="70px"; 

		//  "iconsModifiedMsg" 
		//  12px 
		document.getElementById('iconsModifiedMsg').style.fontSize="70px"; 




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
		document.getElementById('textForecastUpdateTime').style.fontSize="50px"; 




	// text for periods 1 to 14
	//  id="textPeriod1" 
	//  6px
	//  Xxxx<br>
	//  Xxxx<br>
	//  Xxxx<br>
	//  Xxxx

	document.getElementById('textPeriod1').style.fontSize="25px"; 

	document.getElementById('textPeriod2').style.fontSize="25px"; 

	document.getElementById('textPeriod3').style.fontSize="25px"; 

	document.getElementById('textPeriod4').style.fontSize="25px"; 

	document.getElementById('textPeriod5').style.fontSize="25px"; 

	document.getElementById('textPeriod6').style.fontSize="25px"; 

	document.getElementById('textPeriod7').style.fontSize="25px"; 

	document.getElementById('textPeriod8').style.fontSize="25px"; 

	document.getElementById('textPeriod9').style.fontSize="25px"; 

	document.getElementById('textPeriod10').style.fontSize="25px"; 

	document.getElementById('textPeriod11').style.fontSize="25px"; 

	document.getElementById('textPeriod12').style.fontSize="25px"; 

	document.getElementById('textPeriod13').style.fontSize="25px"; 

	document.getElementById('textPeriod14').style.fontSize="25px"; 


	document.getElementById('textPeriodUnused1').style.fontSize="25px"; 

	document.getElementById('textPeriodUnused2').style.fontSize="25px"; 


	//  id="textIntroductionEmphasized19" 
	//  25px
	//  <b>39.67,-97.08</b>
	document.getElementById('textIntroductionEmphasized19').style.fontSize="65px"; 




if (deviceScreenWidth == 1707) {

	//  alert("old Edge browser  -  screen width = 1707");


	document.getElementById('grid-containerIntro').style.gridTemplateRows = `03vh 250vh 03vh`;

	document.getElementById('grid-containerReference').style.gridTemplateRows = `03vh 1360vh 03vh`;



	//  id="grid-containerForecastTitle"
	//  grid-template-rows: 01vh 25vh 01vh
	document.getElementById('grid-containerForecastTitle').style.gridTemplateRows = `01vh 30vh 01vh`;

	//  id="grid-containerWeather1"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1').style.gridTemplateRows = `0.5vh 15vh 0.5vh`;

	//  id="grid-containerWeather1b"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1b').style.gridTemplateRows = `0.5vh 15vh 0.5vh`;

	//  id="grid-containerWeather1c"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1c').style.gridTemplateRows = `0.5vh 15vh 0.5vh`;

	//  id="grid-containerWeather1d"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1d').style.gridTemplateRows = `0.5vh 15vh 0.5vh`;


   //   end     screen width EQUAL to 1707
}  else if (deviceScreenWidth == 1536) {

	//  alert("old Edge browser  -  screen width = 1536");


	document.getElementById('grid-containerIntro').style.gridTemplateRows = `03vh 190vh 03vh`;

	document.getElementById('grid-containerReference').style.gridTemplateRows = `03vh 1820vh 03vh`;


   //   end     screen width EQUAL to 1536
} else if (deviceScreenWidth == 100) {

	//  alert("old EDGE     screen width EQUAL to 100 "); 

   //   end     screen width EQUAL to 100
} else {

	//  alert("old Edge browser  -  screen width = all others");


	document.getElementById('grid-containerIntro').style.gridTemplateRows = `03vh 142vh 03vh`;

	document.getElementById('grid-containerReference').style.gridTemplateRows = `03vh 1340vh 03vh`;



	//  id="grid-containerForecastTitle"
	//  grid-template-rows: 01vh 25vh 01vh
	document.getElementById('grid-containerForecastTitle').style.gridTemplateRows = `01vh 24vh 01vh`;

	//  id="grid-containerWeather1"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1').style.gridTemplateRows = `0.5vh 15vh 0.5vh`;

	//  id="grid-containerWeather1b"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1b').style.gridTemplateRows = `0.5vh 15vh 0.5vh`;

	//  id="grid-containerWeather1c"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1c').style.gridTemplateRows = `0.5vh 15vh 0.5vh`;

	//  id="grid-containerWeather1d"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1d').style.gridTemplateRows = `0.5vh 15vh 0.5vh`;


   //   end     screen width - others
}


           //   end        old Edge
   } else if (isNewEdge) { 

	//  alert("using the new Edge browser");



	//  id="textIntroduction" 
	//  24px
	document.getElementById('textIntroduction').style.fontSize="46px";


	//  id="textIntroductionEmphasized1"
	//  25px
	document.getElementById('textIntroductionEmphasized1').style.fontSize="47px";


	//  id="textIntroductionEmphasized2"
	//  25px
	document.getElementById('textIntroductionEmphasized2').style.fontSize="47px";


	//  id="textIntroductionEmphasized3"
	//  25px
	document.getElementById('textIntroductionEmphasized3').style.fontSize="47px";


	//  id="textIntroductionEmphasized4"
	//  25px
	document.getElementById('textIntroductionEmphasized4').style.fontSize="47px";


	//  id="textIntroductionEmphasized5"
	//  25px
	document.getElementById('textIntroductionEmphasized5').style.fontSize="47px";


	//  id="textIntroductionEmphasized6"
	//  25px
	document.getElementById('textIntroductionEmphasized6').style.fontSize="47px";


	//  id="textIntroductionEmphasized7"
	//  25px
	document.getElementById('textIntroductionEmphasized7').style.fontSize="47px";


	//  id="textIntroductionEmphasized8"
	//  25px
	document.getElementById('textIntroductionEmphasized8').style.fontSize="47px";


	//  id="textIntroductionEmphasized9"
	//  25px
	document.getElementById('textIntroductionEmphasized9').style.fontSize="47px";


	//  id="textIntroductionEmphasized10"
	//  25px
	document.getElementById('textIntroductionEmphasized10').style.fontSize="47px";


	//  id="textIntroductionEmphasized11"
	//  25px
	document.getElementById('textIntroductionEmphasized11').style.fontSize="47px";


	//  id="textIntroductionEmphasized12"
	//  25px
	document.getElementById('textIntroductionEmphasized12').style.fontSize="47px";


	//  id="textIntroductionEmphasized13"
	//  25px
	document.getElementById('textIntroductionEmphasized13').style.fontSize="47px";


	//  id="textIntroductionEmphasized14"
	//  25px
	document.getElementById('textIntroductionEmphasized14').style.fontSize="47px";


	//  id="textIntroductionEmphasized15"
	//  25px
	document.getElementById('textIntroductionEmphasized15').style.fontSize="47px";


	//  id="textIntroductionEmphasized16"
	//  25px
	document.getElementById('textIntroductionEmphasized16').style.fontSize="47px";


	//  id="textIntroductionEmphasized17"
	//  25px
	document.getElementById('textIntroductionEmphasized17').style.fontSize="47px";


	//  id="textIntroductionEmphasized18"
	//  25px
	document.getElementById('textIntroductionEmphasized18').style.fontSize="47px";




	//  id="textIntroductionEmphasized20"
	//  25px
	document.getElementById('textIntroductionEmphasized20').style.fontSize="47px";

	//  id="textIntroductionEmphasized21"
	//  25px
	document.getElementById('textIntroductionEmphasized21').style.fontSize="47px";

	//  id="textIntroductionEmphasized22"
	//  25px
	document.getElementById('textIntroductionEmphasized22').style.fontSize="47px";


	//  id="textIntroductionEmphasized23"
	//  25px 
	document.getElementById('textIntroductionEmphasized23').style.fontSize="47px";

	//  id="textIntroductionEmphasized24"
	//  25px
	document.getElementById('textIntroductionEmphasized24').style.fontSize="47px";

	//  id="textIntroductionEmphasized25"
	//  25px
	document.getElementById('textIntroductionEmphasized25').style.fontSize="47px";




		//  "copyRightMsg" 
		//  12px
		document.getElementById('copyRightMsg').style.fontSize="60px";

		//  "chromeBestMsg" 
		//  12px
		document.getElementById('chromeBestMsg').style.fontSize="60px";

		//  "iconsProvidedMsg" 
		//  12px
		document.getElementById('iconsProvidedMsg').style.fontSize="60px";

		//  "mitLicenseMsg" 
		//  12px
		document.getElementById('mitLicenseMsg').style.fontSize="60px"; 

		//  "iconsModifiedMsg" 
		//  12px 
		document.getElementById('iconsModifiedMsg').style.fontSize="60px"; 




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
		document.getElementById('textForecastUpdateTime').style.fontSize="50px"; 




	// text for periods 1 to 14
	//  id="textPeriod1" 
	//  6px
	//  Xxxx<br>
	//  Xxxx<br>
	//  Xxxx<br>
	//  Xxxx

	document.getElementById('textPeriod1').style.fontSize="25px"; 

	document.getElementById('textPeriod2').style.fontSize="25px"; 

	document.getElementById('textPeriod3').style.fontSize="25px"; 

	document.getElementById('textPeriod4').style.fontSize="25px"; 

	document.getElementById('textPeriod5').style.fontSize="25px"; 

	document.getElementById('textPeriod6').style.fontSize="25px"; 

	document.getElementById('textPeriod7').style.fontSize="25px"; 

	document.getElementById('textPeriod8').style.fontSize="25px"; 

	document.getElementById('textPeriod9').style.fontSize="25px"; 

	document.getElementById('textPeriod10').style.fontSize="25px"; 

	document.getElementById('textPeriod11').style.fontSize="25px"; 

	document.getElementById('textPeriod12').style.fontSize="25px"; 

	document.getElementById('textPeriod13').style.fontSize="25px"; 

	document.getElementById('textPeriod14').style.fontSize="25px"; 


	document.getElementById('textPeriodUnused1').style.fontSize="25px"; 

	document.getElementById('textPeriodUnused2').style.fontSize="25px"; 


	//  id="textIntroductionEmphasized19" 
	//  25px
	//  <b>39.67,-97.08</b>
	document.getElementById('textIntroductionEmphasized19').style.fontSize="65px"; 



if (deviceScreenWidth == 1707) {

	//  alert("new Edge browser  -  screen width = 1707");


	document.getElementById('grid-containerIntro').style.gridTemplateRows = `03vh 240vh 03vh`;

	document.getElementById('grid-containerReference').style.gridTemplateRows = `03vh 1500vh 03vh`;



	//  id="grid-containerForecastTitle"
	//  grid-template-rows: 01vh 25vh 01vh
	document.getElementById('grid-containerForecastTitle').style.gridTemplateRows = `01vh 30vh 01vh`;

	//  id="grid-containerWeather1"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1').style.gridTemplateRows = `0.5vh 15vh 0.5vh`;

	//  id="grid-containerWeather1b"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1b').style.gridTemplateRows = `0.5vh 15vh 0.5vh`;

	//  id="grid-containerWeather1c"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1c').style.gridTemplateRows = `0.5vh 15vh 0.5vh`;

	//  id="grid-containerWeather1d"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1d').style.gridTemplateRows = `0.5vh 15vh 0.5vh`;


   //   end     screen width EQUAL to 1707
}  else if (deviceScreenWidth == 1536) {

	//  alert("new Edge browser  -  screen width = 1536");

	document.getElementById('grid-containerIntro').style.gridTemplateRows = `03vh 340vh 03vh`;

	document.getElementById('grid-containerReference').style.gridTemplateRows = `03vh 1840vh 03vh`;



	//  id="grid-containerForecastTitle"
	//  grid-template-rows: 01vh 25vh 01vh
	document.getElementById('grid-containerForecastTitle').style.gridTemplateRows = `01vh 40vh 01vh`;

	//  id="grid-containerWeather1"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1').style.gridTemplateRows = `0.5vh 20vh 0.5vh`;

	//  id="grid-containerWeather1b"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1b').style.gridTemplateRows = `0.5vh 20vh 0.5vh`;

	//  id="grid-containerWeather1c"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1c').style.gridTemplateRows = `0.5vh 20vh 0.5vh`;

	//  id="grid-containerWeather1d"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1d').style.gridTemplateRows = `0.5vh 20vh 0.5vh`;



   //   end     screen width EQUAL to 1536
} else if (deviceScreenWidth == 100) {

	//  alert("new EDGE     screen width EQUAL to 100 "); 

   //   end     screen width EQUAL to 100
} else {

	//  alert("new Edge browser  -  screen width = all others");


	document.getElementById('grid-containerIntro').style.gridTemplateRows = `03vh 240vh 03vh`;

	document.getElementById('grid-containerReference').style.gridTemplateRows = `03vh 1570vh 03vh`;



	//  id="grid-containerForecastTitle"
	//  grid-template-rows: 01vh 25vh 01vh
	document.getElementById('grid-containerForecastTitle').style.gridTemplateRows = `01vh 27vh 01vh`;

	//  id="grid-containerWeather1"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1').style.gridTemplateRows = `0.5vh 20vh 0.5vh`;

	//  id="grid-containerWeather1b"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1b').style.gridTemplateRows = `0.5vh 20vh 0.5vh`;

	//  id="grid-containerWeather1c"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1c').style.gridTemplateRows = `0.5vh 20vh 0.5vh`;

	//  id="grid-containerWeather1d"
	//  grid-template-rows: 0.5vh 19vh 0.5vh
	document.getElementById('grid-containerWeather1d').style.gridTemplateRows = `0.5vh 20vh 0.5vh`;


   //   end     screen width - others
}


	//   end        new Edge
} else { 
         //  unknown browser


         //  end      unknown browser
   } 
             
  



// end     nwsWeather2.js






