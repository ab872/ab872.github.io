<!--  angularjs_js  -->



// start      angularjs.js


//  this JavaScript file attempts to override the slight differences
//  in page rendering by different browsers

//  the goal is to provide a more consistent cross-browser experience


//   22 june 2023
//   temporary change to verify Git is working from new repository location
//   2nd temporary change to verify Git is working from new repository location


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



document.getElementById('grid-containerReference').style.gridTemplateRows = `03vh 1800vh 03vh`;




// end     all other Firefox under Android
}





           //   end        Firefox under Android
        } 





        if (isWin10) {
           //   begin      Firefox under Win10

	document.getElementById('grid-containerIntro').style.gridTemplateRows = `03vh 140vh 03vh`;

	document.getElementById('grid-containerReference').style.gridTemplateRows = `03vh 1975vh 03vh`;


	//      <span id="textApacheLicense" style="font-size:13px;">
	//      <b><i>https://www.apache.org/licenses/LICENSE-2.0</i></b></span>
	document.getElementById('textApacheLicense').style.fontSize="23px";

	//      <span id="txtOrderItemsList1" style="color:Black;font-size:48px;"></span>
	document.getElementById('txtOrderItemsList1').style.fontSize="34px";



	//       <span id="memberNumberLabel" style="color:Black;font-size:56px;"><b>Member number:</b></span>
	document.getElementById('memberNumberLabel').innerHTML=
		"<br><b>Member number:</b>";


	//       <span id="addressLabel" style="color:Black;font-size:56px;"><b>Address:</b></span>
	document.getElementById('addressLabel').innerHTML=
		"<br><b>Address:</b>";


	//      <button id="addToOrderButton" style="height:80px;width:300px;border-radius:8px;margin-top:3px;margin-bottom:3px" 
	//      ng-click="addToOrder()">
	//      <span style="color:Black;font-size:48px;"><b>Add to Order</b></span>     
	//      </button>
 	document.getElementById("addToOrderButton").style.width="450px"; 
        document.getElementById("addToOrderButton").style.height="120px";



		//  "copyRightMsg" 
		//  12px
		document.getElementById('copyRightMsg').style.fontSize="42px";

		//  "chromeBestMsg" 
		//  12px
		document.getElementById('chromeBestMsg').style.fontSize="42px";

		//  "iconsProvidedMsg" 
		//  12px
		document.getElementById('iconsProvidedMsg').style.fontSize="42px";

		//  "mitLicenseMsg" 
		//  12px
		document.getElementById('mitLicenseMsg').style.fontSize="42px"; 

		//  "iconsModifiedMsg" 
		//  12px 
		document.getElementById('iconsModifiedMsg').style.fontSize="42px"; 





		//      <span id="angularJSheadingMsg" style="color:Black;font-size:24px;"><b>AngularJS</b></span>
		document.getElementById('angularJSheadingMsg').style.fontSize="42px"; 


		//  "angularJSmitLicenseMsg"
		document.getElementById('angularJSmitLicenseMsg').style.fontSize="42px"; 

		//  "angularJSlogoMsg"
		document.getElementById('angularJSlogoMsg').style.fontSize="42px"; 

		//   "angularjsModifiedMsg"
		document.getElementById('angularjsModifiedMsg').style.fontSize="42px"; 

		//  "angularjsDisplayTermsMsg"
		document.getElementById('angularjsDisplayTermsMsg').style.fontSize="18px"; 

		//  "angularjsCreativeCommonsMsg"
		document.getElementById('angularjsCreativeCommonsMsg').style.fontSize="18px"; 

		//  "angularjsLocatedAtMsg"
		document.getElementById('angularjsLocatedAtMsg').style.fontSize="18px"; 

	//      <span id="angularjsLocatedAtMsg" style="color:Black;font-size:12px;">Located at</span><br>
	document.getElementById('angularjsLocatedAtMsg').innerHTML=
		"<center>" + 
		"Located at" +
		"<center>";



		//  <span id="angularjsCreativeCommonsLinkMsg" style="font-size:12px;">
		//  <b><i>https://creativecommons.org/licenses/by-sa/3.0/</i></b></span>
		document.getElementById('angularjsCreativeCommonsLinkMsg').style.fontSize="18px"; 



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


	document.getElementById('grid-containerIntro').style.gridTemplateRows = `03vh 140vh 03vh`;

	document.getElementById('grid-containerReference').style.gridTemplateRows = `03vh 1945vh 03vh`;

	//      <span id="angularjsLocatedAtMsg" style="color:Black;font-size:12px;">Located at</span><br>
	document.getElementById('angularjsLocatedAtMsg').innerHTML=
		"<center>" + 
		"Located at" +
		"<center>";


	//       <span id="memberNumberLabel" style="color:Black;font-size:56px;"><b>Member number:</b></span>
	document.getElementById('memberNumberLabel').innerHTML=
		"<br><b>Member number:</b>";


	//       <span id="addressLabel" style="color:Black;font-size:56px;"><b>Address:</b></span>
	document.getElementById('addressLabel').innerHTML=
		"<br><b>Address:</b>";


	//      <button id="addToOrderButton" style="height:80px;width:300px;border-radius:8px;margin-top:3px;margin-bottom:3px" 
	//      ng-click="addToOrder()">
	//      <span style="color:Black;font-size:48px;"><b>Add to Order</b></span>     
	//      </button>
 	document.getElementById("addToOrderButton").style.width="450px"; 
        document.getElementById("addToOrderButton").style.height="120px";


	//      <span id="textApacheLicense" style="font-size:13px;">
	//      <b><i>https://www.apache.org/licenses/LICENSE-2.0</i></b></span>
	document.getElementById('textApacheLicense').style.fontSize="23px";



	//      <span id="txtOrderItemsList1" style="color:Black;font-size:48px;"></span>
	document.getElementById('txtOrderItemsList1').style.fontSize="34px";




		//  "copyRightMsg" 
		//  12px
		document.getElementById('copyRightMsg').style.fontSize="42px";

		//  "chromeBestMsg" 
		//  12px
		document.getElementById('chromeBestMsg').style.fontSize="42px";

		//  "iconsProvidedMsg" 
		//  12px
		document.getElementById('iconsProvidedMsg').style.fontSize="42px";

		//  "mitLicenseMsg" 
		//  12px
		document.getElementById('mitLicenseMsg').style.fontSize="42px"; 

		//  "iconsModifiedMsg" 
		//  12px 
		document.getElementById('iconsModifiedMsg').style.fontSize="42px"; 





		//      <span id="angularJSheadingMsg" style="color:Black;font-size:24px;"><b>AngularJS</b></span>
		document.getElementById('angularJSheadingMsg').style.fontSize="42px"; 


		//  "angularJSmitLicenseMsg"
		document.getElementById('angularJSmitLicenseMsg').style.fontSize="42px"; 

		//  "angularJSlogoMsg"
		document.getElementById('angularJSlogoMsg').style.fontSize="42px"; 

		//   "angularjsModifiedMsg"
		document.getElementById('angularjsModifiedMsg').style.fontSize="42px"; 

		//  "angularjsDisplayTermsMsg"
		document.getElementById('angularjsDisplayTermsMsg').style.fontSize="24px"; 

		//  "angularjsCreativeCommonsMsg"
		document.getElementById('angularjsCreativeCommonsMsg').style.fontSize="24px"; 

		//  "angularjsLocatedAtMsg"
		document.getElementById('angularjsLocatedAtMsg').style.fontSize="24px"; 


		//  <span id="angularjsCreativeCommonsLinkMsg" style="font-size:12px;">
		//  <b><i>https://creativecommons.org/licenses/by-sa/3.0/</i></b></span>
		document.getElementById('angularjsCreativeCommonsLinkMsg').style.fontSize="24px"; 




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


	document.getElementById('grid-containerIntro').style.gridTemplateRows = `03vh 140vh 03vh`;

	document.getElementById('grid-containerReference').style.gridTemplateRows = `03vh 1975vh 03vh`;


	//      <span id="textApacheLicense" style="font-size:13px;">
	//      <b><i>https://www.apache.org/licenses/LICENSE-2.0</i></b></span>
	document.getElementById('textApacheLicense').style.fontSize="23px";

	//      <span id="txtOrderItemsList1" style="color:Black;font-size:48px;"></span>
	document.getElementById('txtOrderItemsList1').style.fontSize="34px";



	//       <span id="memberNumberLabel" style="color:Black;font-size:56px;"><b>Member number:</b></span>
	document.getElementById('memberNumberLabel').innerHTML=
		"<br><b>Member number:</b>";


	//       <span id="addressLabel" style="color:Black;font-size:56px;"><b>Address:</b></span>
	document.getElementById('addressLabel').innerHTML=
		"<br><b>Address:</b>";


	//      <button id="addToOrderButton" style="height:80px;width:300px;border-radius:8px;margin-top:3px;margin-bottom:3px" 
	//      ng-click="addToOrder()">
	//      <span style="color:Black;font-size:48px;"><b>Add to Order</b></span>     
	//      </button>
 	document.getElementById("addToOrderButton").style.width="450px"; 
        document.getElementById("addToOrderButton").style.height="120px";



		//  "copyRightMsg" 
		//  12px
		document.getElementById('copyRightMsg').style.fontSize="42px";

		//  "chromeBestMsg" 
		//  12px
		document.getElementById('chromeBestMsg').style.fontSize="42px";

		//  "iconsProvidedMsg" 
		//  12px
		document.getElementById('iconsProvidedMsg').style.fontSize="42px";

		//  "mitLicenseMsg" 
		//  12px
		document.getElementById('mitLicenseMsg').style.fontSize="42px"; 

		//  "iconsModifiedMsg" 
		//  12px 
		document.getElementById('iconsModifiedMsg').style.fontSize="42px"; 





		//      <span id="angularJSheadingMsg" style="color:Black;font-size:24px;"><b>AngularJS</b></span>
		document.getElementById('angularJSheadingMsg').style.fontSize="42px"; 


		//  "angularJSmitLicenseMsg"
		document.getElementById('angularJSmitLicenseMsg').style.fontSize="42px"; 

		//  "angularJSlogoMsg"
		document.getElementById('angularJSlogoMsg').style.fontSize="42px"; 

		//   "angularjsModifiedMsg"
		document.getElementById('angularjsModifiedMsg').style.fontSize="42px"; 

		//  "angularjsDisplayTermsMsg"
		document.getElementById('angularjsDisplayTermsMsg').style.fontSize="18px"; 

		//  "angularjsCreativeCommonsMsg"
		document.getElementById('angularjsCreativeCommonsMsg').style.fontSize="18px"; 


		//  "angularjsLocatedAtMsg"
		document.getElementById('angularjsLocatedAtMsg').style.fontSize="18px"; 

	//      <span id="angularjsLocatedAtMsg" style="color:Black;font-size:12px;">Located at</span><br>
	document.getElementById('angularjsLocatedAtMsg').innerHTML=
		"<center>" + 
		"Located at" +
		"<center>";



		//  <span id="angularjsCreativeCommonsLinkMsg" style="font-size:12px;">
		//  <b><i>https://creativecommons.org/licenses/by-sa/3.0/</i></b></span>
		document.getElementById('angularjsCreativeCommonsLinkMsg').style.fontSize="18px"; 






           //   end        Edge
   } else if (isNewEdge) { 

	//  alert("using the new Edge browser");

	document.getElementById('grid-containerIntro').style.gridTemplateRows = `03vh 140vh 03vh`;

	document.getElementById('grid-containerReference').style.gridTemplateRows = `03vh 2030vh 03vh`;


	//      <span id="textApacheLicense" style="font-size:13px;">
	//      <b><i>https://www.apache.org/licenses/LICENSE-2.0</i></b></span>
	document.getElementById('textApacheLicense').style.fontSize="23px";

	//      <span id="txtOrderItemsList1" style="color:Black;font-size:48px;"></span>
	document.getElementById('txtOrderItemsList1').style.fontSize="34px";



	//       <span id="memberNumberLabel" style="color:Black;font-size:56px;"><b>Member number:</b></span>
	document.getElementById('memberNumberLabel').innerHTML=
		"<br><b>Member number:</b>";


	//       <span id="addressLabel" style="color:Black;font-size:56px;"><b>Address:</b></span>
	document.getElementById('addressLabel').innerHTML=
		"<br><b>Address:</b>";


	//      <button id="addToOrderButton" style="height:80px;width:300px;border-radius:8px;margin-top:3px;margin-bottom:3px" 
	//      ng-click="addToOrder()">
	//      <span style="color:Black;font-size:48px;"><b>Add to Order</b></span>     
	//      </button>
 	document.getElementById("addToOrderButton").style.width="450px"; 
        document.getElementById("addToOrderButton").style.height="120px";



		//  "copyRightMsg" 
		//  12px
		document.getElementById('copyRightMsg').style.fontSize="42px";

		//  "chromeBestMsg" 
		//  12px
		document.getElementById('chromeBestMsg').style.fontSize="42px";

		//  "iconsProvidedMsg" 
		//  12px
		document.getElementById('iconsProvidedMsg').style.fontSize="42px";

		//  "mitLicenseMsg" 
		//  12px
		document.getElementById('mitLicenseMsg').style.fontSize="42px"; 

		//  "iconsModifiedMsg" 
		//  12px 
		document.getElementById('iconsModifiedMsg').style.fontSize="42px"; 





		//      <span id="angularJSheadingMsg" style="color:Black;font-size:24px;"><b>AngularJS</b></span>
		document.getElementById('angularJSheadingMsg').style.fontSize="42px"; 


		//  "angularJSmitLicenseMsg"
		document.getElementById('angularJSmitLicenseMsg').style.fontSize="42px"; 

		//  "angularJSlogoMsg"
		document.getElementById('angularJSlogoMsg').style.fontSize="42px"; 

		//   "angularjsModifiedMsg"
		document.getElementById('angularjsModifiedMsg').style.fontSize="42px"; 

		//  "angularjsDisplayTermsMsg"
		document.getElementById('angularjsDisplayTermsMsg').style.fontSize="18px"; 

		//  "angularjsCreativeCommonsMsg"
		document.getElementById('angularjsCreativeCommonsMsg').style.fontSize="18px";


		//  "angularjsLocatedAtMsg"
		document.getElementById('angularjsLocatedAtMsg').style.fontSize="18px"; 

	//      <span id="angularjsLocatedAtMsg" style="color:Black;font-size:12px;">Located at</span><br>
	document.getElementById('angularjsLocatedAtMsg').innerHTML=
		"<center>" + 
		"Located at" +
		"<center>";



		//  <span id="angularjsCreativeCommonsLinkMsg" style="font-size:12px;">
		//  <b><i>https://creativecommons.org/licenses/by-sa/3.0/</i></b></span>
		document.getElementById('angularjsCreativeCommonsLinkMsg').style.fontSize="18px"; 






	//   end        new Edge
} else { 
         //  unknown browser


         //  end      unknown browser
   } 
             
      
    


// end     angularjs.js