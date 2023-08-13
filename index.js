
// start      index.js

//  var theBrowserIsUnknown = true;

// temporary change       for testing 12345678
// temporary change 2     for testing 87654321

//  alert("index.js has loaded");



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

		//  alert("using the Firefox browser under Android");
		//  theBrowserIsUnknown = false;

		if (isAndroid5) { 

			// begin     Firefox under Android5

			//  alert("using the Firefox browser under Android 5");
			//  theBrowserIsUnknown = false;

			 	// id="textIntroduction" 
				// Original 14px 
				//  document.getElementById('textIntroduction').style.fontSize="18px"; 

				// id="textIntroductionEmphasized1" 
				//  document.getElementById('textIntroductionEmphasized1').style.fontSize=
				//  "19px"; 

				// id="textIntroductionEmphasized2" 
				//  document.getElementById('textIntroductionEmphasized2').style.fontSize=
				//  "19px";


				// the references section overlaps the 
				// introduction.

 				// id="verticalSpacer1"
 				// font-size 19px; 

				document.getElementById('verticalSpacer1').innerHTML="<br><br>";

 			// end Firefox under Android5 

		} else {

			// all other Firefox under Android

				//  alert("using the Firefox browser under Android - all others");
				//  theBrowserIsUnknown = false;



				//   id="imageIntro" 
				//  height="162" 
				//  width="375" 
			//	document.getElementById("imageIntro").style.height="202px";
			//	document.getElementById("imageIntro").style.width="468px"; 



			
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
				//  id="BootstrapIcon"           
				document.getElementById("BootstrapIcon").style.width="64px"; 
				document.getElementById("BootstrapIcon").style.height="64px";



				document.getElementById('textIntroCaption').innerHTML=
					"<i>Preview rendering of printed circuit<br>" + 
					"board produced by parsing the data files. Rendered " + 
					"using SVG graphics. Early version of the software.</i>";



				//  id="textIntroCaption"
				//  Original    12px
				document.getElementById('textIntroCaption').style.fontSize="18px";



				//  id="pdfIcon" 
				//  width="16" height="16" 
				document.getElementById("pdfIcon").style.width="64px"; 
           			document.getElementById("pdfIcon").style.height="64px";



				//    id="mp4Icon"
				//    width="16" height="16" 
				document.getElementById("mp4Icon").style.width="64px"; 
           			document.getElementById("mp4Icon").style.height="64px";


				//    id="mp4Icon2"
				//    width="16" height="16" 
				document.getElementById("mp4Icon2").style.width="64px"; 
           			document.getElementById("mp4Icon2").style.height="64px";




				//    id="cameraIcon"
				//    width="36" height="36" 
				document.getElementById("cameraIcon").style.width="64px"; 
           			document.getElementById("cameraIcon").style.height="64px";




				//  id="textPhotoGalleryCaption" style="color:Grey;font-
				//  size   12px

				//    <i>A collection of photos arranged in a<br>
				//   grid pattern using CSS GRID.<br>
				//  Includes references.
				//  </i>



				document.getElementById('textSVGanimationCaption').innerHTML=
					'<i>It is possible to animate an SVG. One way<br>' + 
					'to do so is by using <span id="textAnimationEmphasized1" ' + 
					'style="color:Navy;font-size:11px;"><b>JavaScript</b></span> to<br>' + 
					'manipulate the <span id="textAnimationEmphasized2" ' + 
					'style="color:Navy;font-size:11px;"><b>DOM</b></span>.<br>' + 
					'These are early attempts at <span id="textAnimationEmphasized3" ' + 
					'style="color:Navy;font-size:11px;"><b><i>animation<br>' + 
					'using SVG</i></b></span>. They run inside a ' + 
					'<span id="textAnimationEmphasized4" ' + 
					'style="color:Navy;font-size:11px;"><b><i>web<br>' + 
					'browser</i></b></span>, and were written in ' + 
					'<span id="textAnimationEmphasized5" ' + 
					'style="color:Navy;font-size:11px;"><b><i>2013</i></b></span>. A<br>' + 
					'short discussion of SVG animation<br>' + 
					'with references and examples.<br>' + 
					'Includes a walkthrough of the<br>' + 
					'code for a simple animation.' + 
					'</i>';



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



					//  document.getElementById
					//  ("mp4Icon").style.width="128px"; 

					//  document.getElementById
					//  ("mp4Icon").style.height="128px";


	


	//  id="textRobotEmphasized2" 
	//  12px
	//  <i>http://developer.android.com/distribute/googleplay/promote/brand.html</i>
	document.getElementById('textRobotEmphasized2').innerHTML=
	'<i>http://developer.android.com/distribute/<br>' + 
	'googleplay/promote/brand.html</i>';




if (deviceScreenWidth == 1133) {

	//    //  alert("Firefox Android     screen width EQUAL to 1133 "); 

	//  id="grid-containerAndroid"
     	//  grid-template-rows: 0.3vh 95vh 0.3vh
	document.getElementById('grid-containerAndroid').style.gridTemplateRows = "0.3vh 115vh 0.3vh";



	//  id="grid-containerCAD"
     	//  grid-template-rows: 0.3vh 135vh 0.3vh
	document.getElementById('grid-containerCAD').style.gridTemplateRows = "0.3vh 115vh 0.3vh";



	//  id="grid-containerDatabase"
     	//  grid-template-rows: 0.3vh 215vh 0.3vh
	document.getElementById('grid-containerDatabase').style.gridTemplateRows = "0.3vh 230vh 0.3vh";



	//  id="grid-containerGraphics"
     	//  grid-template-rows: 0.3vh 225vh 0.3vh
	document.getElementById('grid-containerGraphics').style.gridTemplateRows = "0.3vh 190vh 0.3vh";



	//  id="grid-containerMisc"
     	//  grid-template-rows: 0.3vh 190vh 0.3vh
	document.getElementById('grid-containerMisc').style.gridTemplateRows = "0.3vh 190vh 0.3vh";



	//  id="grid-containerWindows"
     	//  grid-template-rows: 0.3vh 95vh 0.3vh
	document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 85vh 0.3vh";



   //   end     screen width EQUAL to 1133
} else if (deviceScreenWidth == 100) {

	//  alert("Firefox Android     screen width EQUAL to 100 "); 


   //   end     screen width EQUAL to 100
} else {

	//  alert("Firefox Android     screen width EQUAL to all others "); 


	//  id="grid-containerAndroid"
     	//  grid-template-rows: 0.3vh 95vh 0.3vh
	document.getElementById('grid-containerAndroid').style.gridTemplateRows = "0.3vh 65vh 0.3vh";



	//  id="grid-containerCAD"
     	//  grid-template-rows: 0.3vh 135vh 0.3vh
	document.getElementById('grid-containerCAD').style.gridTemplateRows = "0.3vh 70vh 0.3vh";



	//  id="grid-containerDatabase"
     	//  grid-template-rows: 0.3vh 215vh 0.3vh
	document.getElementById('grid-containerDatabase').style.gridTemplateRows = "0.3vh 150vh 0.3vh";



	//  id="grid-containerGraphics"
     	//  grid-template-rows: 0.3vh 225vh 0.3vh
	document.getElementById('grid-containerGraphics').style.gridTemplateRows = "0.3vh 90vh 0.3vh";



	//  id="grid-containerMisc"
     	//  grid-template-rows: 0.3vh 190vh 0.3vh
	document.getElementById('grid-containerMisc').style.gridTemplateRows = "0.3vh 300vh 0.3vh";



	//  id="grid-containerWindows"
     	//  grid-template-rows: 0.3vh 95vh 0.3vh
	document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 65vh 0.3vh";


	//  adjust the size of the
	//  Bootstrap icon
	//  id="BootstrapIcon"           
	document.getElementById("BootstrapIcon").style.width="96px"; 
	document.getElementById("BootstrapIcon").style.height="96px";


   //   end     screen width - others
}

					
			// end     all other Firefox under Android
		}

           //   end        Firefox under Android
        } 




        if (isWin10) {
           //   begin      Firefox under Win10

			//  alert("using the Firefox browser under Win10");
			//  theBrowserIsUnknown = false;


			//  id="mainPageSiteTitle"
			//  28px
			//  ><b>ab872</b><
			document.getElementById('mainPageSiteTitle').style.fontSize="68px";


			//   id="imagePcbIntro" 
			//  height="162"   //  202
			//  width="375"    //  468
			document.getElementById("imagePcbIntro").style.height="303px";
			document.getElementById("imagePcbIntro").style.width="702px"; 


			//  id="textIntroCaption"
			//  Original    12px
			document.getElementById('textIntroCaption').style.fontSize="18px";






			//	document.getElementById('textIntroduction').innerHTML=
			//		'A collection of various <span id="textIntroductionEmphasized1" ' + 
			//		'style="color:Navy;font-size:45px;"><b>projects</b></span> ' +  
			//		'and <span id="textIntroductionEmphasized2" ' + 
			//		'style="color:Navy;font-size:45px;"><b>experiments</b><br><br>';


			document.getElementById('textIntroduction').style.fontSize="68px";

			document.getElementById('textIntroductionEmphasized1').style.fontSize="69px";

			document.getElementById('textIntroductionEmphasized2').style.fontSize="69px";





			//  adjust the size of the
			//  Bootstrap icon
			//  id="BootstrapIcon"           
			document.getElementById("BootstrapIcon").style.width="128px"; 
			document.getElementById("BootstrapIcon").style.height="128px";







			//  id="textRobotCaption1" 
			//  12px
			document.getElementById('textRobotCaption1').style.fontSize="18px";

			//  id="textRobotEmphasized1" 
			//  12px
			document.getElementById('textRobotEmphasized1').style.fontSize="18px";



			//  id="textRobotCaption2" 
			//  12px
			document.getElementById('textRobotCaption2').style.fontSize="18px";

			//  id="textRobotEmphasized2" 
			//  12px
			document.getElementById('textRobotEmphasized2').style.fontSize="18px";



			//  id="textRobotCaption3" 
			//  12px
			document.getElementById('textRobotCaption3').style.fontSize="18px";

			//  id="textRobotEmphasized3" 
			//  12px
			document.getElementById('textRobotEmphasized3').style.fontSize="18px";



			//  id="textRobotCaption4" 
			//  12px
			document.getElementById('textRobotCaption4').style.fontSize="18px";

			//  id="textRobotEmphasized4" 
			//  12px
			document.getElementById('textRobotEmphasized4').style.fontSize="18px";









			//  id="linkGerberViewer" 
			//  size:16px
			document.getElementById('linkGerberViewer').style.fontSize="28px";

			//  id="pdfIcon" 
			//  width="80" height="80" 
			document.getElementById("pdfIcon").style.width="96px"; 
			document.getElementById("pdfIcon").style.height="96px";

			//  id="textGerberViewerCaption" 
			//  14px
			document.getElementById('textGerberViewerCaption').style.fontSize="24px";






			//  id="linkCrudP1video"
			//  16px
			document.getElementById('linkCrudP1video').style.fontSize="28px";

			//  id="textCrudP1Caption"
			//  14px
			document.getElementById('textCrudP1Caption').style.fontSize="24px";



			//  id="linkCrudP1"
			//  16px
			document.getElementById('linkCrudP1').style.fontSize="28px";


			//  id="textCrudP1bCaption"
			//  14px
			document.getElementById('textCrudP1bCaption').style.fontSize="24px";



			//  id="linkCrudP2"
			//  16px
			document.getElementById('linkCrudP2').style.fontSize="28px";

			//  id="textCrudP2Caption"
			//  14px
			document.getElementById('textCrudP2Caption').style.fontSize="24px";



			//  id="linkCrudP3"
			//  16px
			document.getElementById('linkCrudP3').style.fontSize="28px";

			//  id="textCrudP3Caption"
			//  14px
			document.getElementById('textCrudP3Caption').style.fontSize="24px";



			//  id="linkCrudP4"
			//  16px
			document.getElementById('linkCrudP4').style.fontSize="28px";


			//  id="textCrudP4Caption"
			//  14px
			document.getElementById('textCrudP4Caption').style.fontSize="24px";





			//  id="linkCrudP5"
			//  16px
			document.getElementById('linkCrudP5').style.fontSize="28px";


			//  id="textCrudP5Caption"
			//  14px
			document.getElementById('textCrudP5Caption').style.fontSize="24px";







			//  id="textSqliteLogoPublicDomain"
			//  14px
			document.getElementById('textSqliteLogoPublicDomain').style.fontSize="24px";


			//  id="textSqliteLogoDownloadHere"
			//  14px
			document.getElementById('textSqliteLogoDownloadHere').style.fontSize="24px";


			//  id="textSqliteDownloadHere"
			//  14px
			document.getElementById('textSqliteDownloadHere').style.fontSize="24px";




			//  id="linkSVGgraphics"
			//  16px
			document.getElementById('linkSVGgraphics').style.fontSize="28px";


			//  id="textSVGgraphicsCaption"
			//  14px
			document.getElementById('textSVGgraphicsCaption').style.fontSize="24px";



			//  id="linkSVGanimation"
			//  16px
			document.getElementById('linkSVGanimation').style.fontSize="28px";

			//  id="textSVGanimationCaption"
			//  14px
			document.getElementById('textSVGanimationCaption').style.fontSize="24px";

			//  id="textAnimationEmphasized1"
			//  15px
			document.getElementById('textAnimationEmphasized1').style.fontSize="25px";

			//  id="textAnimationEmphasized2"
			//  15px
			document.getElementById('textAnimationEmphasized2').style.fontSize="25px";

			//  id="textAnimationEmphasized3"
			//  15px
			document.getElementById('textAnimationEmphasized3').style.fontSize="25px";

			//  id="textAnimationEmphasized4"
			//  15px
			document.getElementById('textAnimationEmphasized4').style.fontSize="25px";

			//  id="textAnimationEmphasized5"
			//  15px
			document.getElementById('textAnimationEmphasized5').style.fontSize="25px";




			//  id="linkRayTraceGraphics"
			//  16px
			document.getElementById('linkRayTraceGraphics').style.fontSize="28px";

			//  id="textRayTraceGraphicsCaption"
			//  14px
			document.getElementById('textRayTraceGraphicsCaption').style.fontSize="24px";






			//  id="cameraIcon"
			//  width   80    height   80 
			document.getElementById("cameraIcon").style.width="128px"; 
			document.getElementById("cameraIcon").style.height="128px";

			//  id="linkPhotoGallery"
			//  16px
			document.getElementById('linkPhotoGallery').style.fontSize="28px";


			//  id="textPhotoGalleryCaption"
			//  14px
			document.getElementById('textPhotoGalleryCaption').style.fontSize="24px";

			document.getElementById('textPhotoGalleryCaption').innerHTML=
				'<i>A collection of photos arranged in a grid pattern using CSS GRID.' + 
				'<br>' + 
				'Includes references.</i>';








			//  id="linkColorPicker"
			//  16px
			document.getElementById('linkColorPicker').style.fontSize="28px";

			//  id="textColorPickerCaption"
			//  14px;
			document.getElementById('textColorPickerCaption').style.fontSize="24px";


			document.getElementById('textColorPickerCaption').innerHTML=
				'<i>Color picker which allows visual comparison of two colors. ' + 
				'<br>' + 
				'Gives a visual check of the contrast between the two. ' +  
				'Zoom sample text ' + 
				'<br>' + 
				'up or down in size to check its appearance. ' + 
				'Includes references.</i>';





			//  id="svgCloudSun1" 
     			//  width   80      height   80
			document.getElementById("svgCloudSun1").style.width="96px"; 
			document.getElementById("svgCloudSun1").style.height="96px";


			//  id="linkNwsWeather"
			//  16px
			document.getElementById('linkNwsWeather').style.fontSize="28px";

			//  id="textNwsWeatherCaption"
			//  14px;
			document.getElementById('textNwsWeatherCaption').style.fontSize="24px";

			document.getElementById('textNwsWeatherCaption').innerHTML=
				'<i>A demo of using a <b>REST API</b> to retrieve an extended weather forecast ' + 
				'<br>' + 
				'from the <b>National Weather Service</b> (<b>NWS</b>) ' +  
				'using their public REST API.' + 
				'<br>' + 
				'Includes references.</i>';


		//  "linkAngularJS1"
		document.getElementById('linkAngularJS1').style.fontSize="28px"; 

		//  "textAngularJS1Caption"
		document.getElementById('textAngularJS1Caption').style.fontSize="24px"; 




		//  "textWebApp1Link"
		document.getElementById('textWebApp1Link').style.fontSize="24px"; 

		//  "textWebApp1Caption1"
		document.getElementById('textWebApp1Caption1').style.fontSize="20px"; 

		//  "textWebApp1Caption2"
		document.getElementById('textWebApp1Caption2').style.fontSize="24px"; 

		//  "textWebApp1Caption2Emphasized1" 
		document.getElementById('textWebApp1Caption2Emphasized1').style.fontSize="24px"; 

		//  "textWebApp1Caption2Emphasized2" 
		document.getElementById('textWebApp1Caption2Emphasized2').style.fontSize="24px"; 

		//  "textWebApp1Caption2Emphasized3" 
		document.getElementById('textWebApp1Caption2Emphasized3').style.fontSize="24px"; 

		//  "textWebApp1Caption2Emphasized4" 
		document.getElementById('textWebApp1Caption2Emphasized4').style.fontSize="24px"; 

		//  "textWebApp1Caption2Emphasized5" 
		document.getElementById('textWebApp1Caption2Emphasized5').style.fontSize="24px"; 






		//  "textFizzBuzzLink"
		document.getElementById('textFizzBuzzLink').style.fontSize="24px"; 

		//  "textFizzBuzzCaption1"
		document.getElementById('textFizzBuzzCaption1').style.fontSize="20px"; 

		//  "textFizzBuzzCaption2"
		document.getElementById('textFizzBuzzCaption2').style.fontSize="24px"; 

		//  "textFizzBuzzCaption2Emphasized1" 
		document.getElementById('textFizzBuzzCaption2Emphasized1').style.fontSize="24px"; 

		//  "textFizzBuzzCaption2Emphasized2" 
		document.getElementById('textFizzBuzzCaption2Emphasized2').style.fontSize="24px"; 

		//  "textFizzBuzzCaption2Emphasized3" 
		document.getElementById('textFizzBuzzCaption2Emphasized3').style.fontSize="24px"; 

		//  "textFizzBuzzCaption2Emphasized4" 
		document.getElementById('textFizzBuzzCaption2Emphasized4').style.fontSize="24px"; 

		//  "textFizzBuzzCaption2Emphasized5" 
		document.getElementById('textFizzBuzzCaption2Emphasized5').style.fontSize="24px"; 







			//  id="linkOnTheWay1"
			//  16px
			document.getElementById('linkOnTheWay1').style.fontSize="28px";

			//  id="linkOnTheWay2"
			//  16px
			document.getElementById('linkOnTheWay2').style.fontSize="28px";

			//  id="linkOnTheWay3"
			//  16px
			document.getElementById('linkOnTheWay3').style.fontSize="28px";

			//  id="linkOnTheWay4"
			//  16px
			document.getElementById('linkOnTheWay4').style.fontSize="28px";

			//  id="linkOnTheWay5"
			//  16px
			document.getElementById('linkOnTheWay5').style.fontSize="28px";



















			//  id="copyrightMsg"
			//  12px
			//  <b>&nbsp;&nbsp;&nbsp;Copyright &#169; 2021 - 2022. All rights reserved.</b>
			document.getElementById('copyrightMsg').style.fontSize="38px";

 
			//  id="bestResultsMsg"
			//  12px
			//  <b>&nbsp;&nbsp;&nbsp;Best results when using the Chrome browser.</b>
			document.getElementById('bestResultsMsg').style.fontSize="38px";


			//  id="iconsProvidedMsg"
			//  12px
			//  <b>&nbsp;&nbsp;&nbsp;Icons provided via the 
			//  <a href="https://icons.getbootstrap.com/" target="_blank">Bootstrap Icons</a> collection.</b>
			document.getElementById('iconsProvidedMsg').style.fontSize="38px";

 

			//  id="iconsCopyrightMsg"
			//  12px
			//  <b>&nbsp;&nbsp;&nbsp; Bootstrap Icons are under the 
			//  <a href="https://github.com/twbs/icons/blob/main/LICENSE.md" target="_blank">MIT</a> license.</b>
			document.getElementById('iconsCopyrightMsg').style.fontSize="38px";



			//  id="iconsModifiedMsg"
			//  12px
			//  <b>&nbsp;&nbsp;&nbsp;Some icons in this collection have been modified.</b>
			document.getElementById('iconsModifiedMsg').style.fontSize="38px";






				//  id="svgAngularJS1"
				//  width="75" height="82"
				document.getElementById("svgAngularJS1").style.width="112px"; 
				document.getElementById("svgAngularJS1").style.height="123px";


		//  "angularJSmitLicenseMsg" 
		document.getElementById('angularJSmitLicenseMsg').style.fontSize="38px"; 


		//  "angularJSlogoMsg"
		document.getElementById('angularJSlogoMsg').style.fontSize="38px"; 

		//   "angularJSmodifiedMsg"
		document.getElementById('angularJSmodifiedMsg').style.fontSize="38px"; 




		//  "angularJStermsMsg"
		document.getElementById('angularJStermsMsg').style.fontSize="24px"; 

		//  "angularJScreativeCommonsMsg"
		document.getElementById('angularJScreativeCommonsMsg').style.fontSize="24px"; 


		//  "angularJSlocatedAtMsg"
		document.getElementById('angularJSlocatedAtMsg').style.fontSize="24px"; 

	//      <span id="angularJSlocatedAtMsg" style="color:Black;font-size:12px;">Located at</span><br>
	document.getElementById('angularJSlocatedAtMsg').innerHTML=
		"<center>" + 
		"Located at" +
		"<center>";










	//  id="grid-containerAndroid"
     	//  grid-template-rows: 0.3vh 95vh 0.3vh
	document.getElementById('grid-containerAndroid').style.gridTemplateRows = "0.3vh 115vh 0.3vh";

	//  id="grid-containerCAD"
     	//  grid-template-rows: 0.3vh 135vh 0.3vh
	document.getElementById('grid-containerCAD').style.gridTemplateRows = "0.3vh 135vh 0.3vh";



	//  id="grid-containerDatabase"
     	//  grid-template-rows: 0.3vh 215vh 0.3vh
	document.getElementById('grid-containerDatabase').style.gridTemplateRows = "0.3vh 220vh 0.3vh";



	//  id="grid-containerGraphics"
     	//  grid-template-rows: 0.3vh 225vh 0.3vh
	document.getElementById('grid-containerGraphics').style.gridTemplateRows = "0.3vh 165vh 0.3vh";



	//  id="grid-containerWindows"
     	//  grid-template-rows: 0.3vh 95vh 0.3vh
	document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 135vh 0.3vh";



	//  id="grid-containerMisc"
     	//  grid-template-rows: 0.3vh 190vh 0.3vh
	document.getElementById('grid-containerMisc').style.gridTemplateRows = "0.3vh 415vh 0.3vh";







//  *** size adjustments for this are not working
//  *** need to check for typo

			//  id="textGraphApp1"
			//  16px;">
			//  <b>Using the Canvas in C#</b>
			document.getElementById('textGraphApp1').style.fontSize="24px";



			//  id="textGraphAppCaption"
			//  14px
			document.getElementById('textGraphAppCaption').style.fontSize="28px";


			//  id="textIntroductionPre"
			//  10px
			document.getElementById('textIntroductionPre').style.fontSize="24px";


			//  id="textGraphAppCaption2"
			//  10px
			//  <b>Operating System:</b>
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;
			document.getElementById('textGraphAppCaption2').style.fontSize="24px";



			//  id="textGraphAppCaption3"
			//  10px
			//  <b>Windows 7 - 10</b>
			document.getElementById('textGraphAppCaption3').style.fontSize="24px";



			//  id="textGraphAppCaption4"
			//  10px
			//  <b>Development IDE:</b>
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;
			document.getElementById('textGraphAppCaption4').style.fontSize="24px";

			document.getElementById('textGraphAppCaption4').innerHTML=
				'<b>Development IDE:</b>' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';



			//  id="textGraphAppCaption5"
			//  10px
			//  <b>Visual Studio</b>
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			document.getElementById('textGraphAppCaption5').style.fontSize="24px";

			document.getElementById('textGraphAppCaption5').innerHTML=
				'<b>Visual Studio</b>' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';




			//  id="textGraphAppCaption6"
			//  10px
			//  <b>Language:</b>
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;
			document.getElementById('textGraphAppCaption6').style.fontSize="24px";

			document.getElementById('textGraphAppCaption6').innerHTML=
				'<b>Language:</b>' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';




			//  id="textGraphAppCaption7"
			//  10px
			//  <b>C#</b>
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			document.getElementById('textGraphAppCaption7').style.fontSize="24px";

			document.getElementById('textGraphAppCaption7').innerHTML=
				'<b>C#</b>' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';



			//  id="textGraphAppCaption8"
			//  10px
			//  <b>Demo features:</b>
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			document.getElementById('textGraphAppCaption8').style.fontSize="24px";

			document.getElementById('textGraphAppCaption8').innerHTML=
				'<b>Demo features:</b>' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;';









			//  id="textGraphAppCaption9"
			//  10px
			//  &#x2022; 1. Drawing on the Windows graphic Canvas.
			//  &nbsp;&nbsp;&nbsp;<br>
			//  &#x2022; 2. Data inspection via zoom in or zoom out.
			//  &nbsp;&nbsp;&nbsp;&nbsp;
			//  <br>
			//  &#x2022; 3. Dynamic repositioning of the viewing
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;
			//  <br>
			//  window.
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  <br>
			//  &#x2022; 4. Selectable data cursors.
			//   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;
			//  <br>
			//  &#x2022; 5. Step through the data using the cursor.
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  </b>



			document.getElementById('textGraphAppCaption9').style.fontSize="24px";


			document.getElementById('textGraphAppCaption9').innerHTML= 
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









		   
			//	document.getElementById('textSVGanimationCaption').innerHTML=
			//	'<i>It is possible to animate an SVG. One way<br>' + 
			//	'to do so is by using <span id="textAnimationEmphasized1" ' + 
			//	'style="color:Navy;font-size:11px;"><b>JavaScript</b></span> to<br>' + 
			//	'manipulate the <span id="textAnimationEmphasized2" ' + 
			//	'style="color:Navy;font-size:11px;"><b>DOM</b></span>.<br>' + 
			//	'These are early attempts at <span id="textAnimationEmphasized3" ' + 
			//	'style="color:Navy;font-size:11px;"><b><i>animation<br>' + 
			//	'using SVG</i></b></span>. They run inside a ' + 
			//	'<span id="textAnimationEmphasized4" ' + 
			//	'style="color:Navy;font-size:11px;"><b><i>web<br>' + 
			//	'browser</i></b></span>, and were written in ' + 
			//	'<span id="textAnimationEmphasized5" ' + 
			//	'style="color:Navy;font-size:11px;"><b><i>2013</i></b></span>. A<br>' + 
			//	'short discussion of SVG animation<br>' + 
			//	'with references and examples.<br>' + 
			//	'Includes a walkthrough of the<br>' + 
			//	'code for a simple animation.' + 
			//	'</i>';












           //   end        Firefox under Win10
        }

	//   end        Firefox 
} 






if (isChrome) { 

	if (isAndroid) {
		//   begin    Chrome under Android

			//  alert("using the Chrome browser under Android");
			//  theBrowserIsUnknown = false;


			document.getElementById('textIntroCaption').innerHTML=
				"<i>Preview rendering of printed circuit<br>" + 
				"board produced by parsing the data files. Rendered<br>" + 
				"using SVG graphics. Early version of the software.</i>";


			//  id="textIntroCaption"
			//  Original    12px
			document.getElementById('textIntroCaption').style.fontSize="18px";




			// Necessary for Chrome Android
			//   id="verticalSpacer0" 
			//   19px
			document.getElementById('verticalSpacer0').innerHTML="<br><br>";


			//  adjust the size of the
			//  Bootstrap icon
			//  id="BootstrapIcon"           
			document.getElementById("BootstrapIcon").style.width="64px"; 
           		document.getElementById("BootstrapIcon").style.height="64px";




			//  id="pdfIcon" 
			//  width="16" height="16" 
			document.getElementById("pdfIcon").style.width="64px"; 
           		document.getElementById("pdfIcon").style.height="64px";



			//    id="mp4Icon"
			//    width="16" height="16" 
			document.getElementById("mp4Icon").style.width="64px"; 
           		document.getElementById("mp4Icon").style.height="64px";


			//    id="mp4Icon2"
			//    width="16" height="16" 
			document.getElementById("mp4Icon2").style.width="64px"; 
           		document.getElementById("mp4Icon2").style.height="64px";




			//    id="cameraIcon"
			//    width="36" height="36" 
			document.getElementById("cameraIcon").style.width="64px"; 
           		document.getElementById("cameraIcon").style.height="64px";




			//  id="textPhotoGalleryCaption" style="color:Grey;font-
			//  size   12px

			//    ><i>A collection of photos arranged in a<br>
			//   grid pattern using CSS GRID.<br>
			//  Includes references.
			//  </i>





 			document.getElementById('textIntroduction').style.fontSize = "12px"; 

			document.getElementById('textIntroductionEmphasized1').style.fontSize = 
				"13px"; 

			document.getElementById('textIntroductionEmphasized2').style.fontSize = 
				"13px";


			document.getElementById('textSVGanimationCaption').innerHTML=
			'<i>It is possible to animate an SVG. One way<br>' + 
			'to do so is by using <span id="textAnimationEmphasized1" ' + 
			'style="color:Navy;font-size:11px;"><b>JavaScript</b></span> to<br>' + 
			'manipulate the <span id="textAnimationEmphasized2" ' + 
			'style="color:Navy;font-size:11px;"><b>DOM</b></span>.<br>' + 
			'These are early attempts at <span id="textAnimationEmphasized3" ' + 
			'style="color:Navy;font-size:11px;"><b><i>animation<br>' + 
			'using SVG</i></b></span>. They run inside a ' + 
			'<span id="textAnimationEmphasized4" ' + 
			'style="color:Navy;font-size:11px;"><b><i>web<br>' + 
			'browser</i></b></span>, and were written in ' + 
			'<span id="textAnimationEmphasized5" ' + 
			'style="color:Navy;font-size:11px;"><b><i>2013</i></b></span>. A<br>' + 
			'short discussion of SVG animation<br>' + 
			'with references and examples.<br>' + 
			'Includes a walkthrough of the<br>' + 
			'code for a simple animation.' + 
			'</i>';
 



	//  id="textRobotEmphasized2" 
	//  12px
	//  <i>http://developer.android.com/distribute/googleplay/promote/brand.html</i>
	document.getElementById('textRobotEmphasized2').innerHTML=
	'<i>http://developer.android.com/distribute/<br>' + 
	'googleplay/promote/brand.html</i>';




if (deviceScreenWidth == 1143) {

	//  //  alert("Chrome Android     screen width EQUAL to 1143 "); 

	//  id="grid-containerAndroid"
     	//  grid-template-rows: 0.3vh 95vh 0.3vh
	document.getElementById('grid-containerAndroid').style.gridTemplateRows = "0.3vh 125vh 0.3vh";

	//  id="grid-containerCAD"
     	//  grid-template-rows: 0.3vh 135vh 0.3vh
	document.getElementById('grid-containerCAD').style.gridTemplateRows = "0.3vh 155vh 0.3vh";



	//  id="grid-containerDatabase"
     	//  grid-template-rows: 0.3vh 215vh 0.3vh
	document.getElementById('grid-containerDatabase').style.gridTemplateRows = "0.3vh 260vh 0.3vh";



	//  id="grid-containerGraphics"
     	//  grid-template-rows: 0.3vh 225vh 0.3vh
	document.getElementById('grid-containerGraphics').style.gridTemplateRows = "0.3vh 150vh 0.3vh";



	//  id="grid-containerMisc"
     	//  grid-template-rows: 0.3vh 190vh 0.3vh
	document.getElementById('grid-containerMisc').style.gridTemplateRows = "0.3vh 220vh 0.3vh";



	//  id="grid-containerWindows"
     	//  grid-template-rows: 0.3vh 95vh 0.3vh
	document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 125vh 0.3vh";




   //   end     screen width EQUAL to 1143
} else if (deviceScreenWidth == 100) {

	//  alert("Chrome Android     screen width EQUAL to 100 "); 


   //   end     screen width EQUAL to 100
} else {

	//  //  alert("Chrome Android     screen width EQUAL to all others "); 


	//  id="grid-containerAndroid"
     	//  grid-template-rows: 0.3vh 95vh 0.3vh
	document.getElementById('grid-containerAndroid').style.gridTemplateRows = "0.3vh 75vh 0.3vh";

	//  id="grid-containerCAD"
     	//  grid-template-rows: 0.3vh 135vh 0.3vh
	document.getElementById('grid-containerCAD').style.gridTemplateRows = "0.3vh 65vh 0.3vh";



	//  id="grid-containerDatabase"
     	//  grid-template-rows: 0.3vh 215vh 0.3vh
	document.getElementById('grid-containerDatabase').style.gridTemplateRows = "0.3vh 160vh 0.3vh";



	//  id="grid-containerGraphics"
     	//  grid-template-rows: 0.3vh 225vh 0.3vh
	document.getElementById('grid-containerGraphics').style.gridTemplateRows = "0.3vh 110vh 0.3vh";



	//  id="grid-containerMisc"
     	//  grid-template-rows: 0.3vh 190vh 0.3vh
	document.getElementById('grid-containerMisc').style.gridTemplateRows = "0.3vh 130vh 0.3vh";



	//  id="grid-containerWindows"
     	//  grid-template-rows: 0.3vh 95vh 0.3vh
	document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 65vh 0.3vh";



   //   end     screen width - others
}


           	//   end       Chrome under Android
         } else {
			//   begin    Chrome others

			//  alert("using the Chrome browser on others");
			//  theBrowserIsUnknown = false;



			//  id="mainPageSiteTitle"
			//  28px
			//  ><b>ab872</b><
			document.getElementById('mainPageSiteTitle').style.fontSize="72px";



			//	document.getElementById('textIntroduction').innerHTML=
			//		'A collection of various <span id="textIntroductionEmphasized1" ' + 
			//		'style="color:Navy;font-size:45px;"><b>projects</b></span> ' +  
			//		'and <span id="textIntroductionEmphasized2" ' + 
			//		'style="color:Navy;font-size:45px;"><b>experiments</b><br><br>';

			document.getElementById('textIntroduction').style.fontSize="68px";

			document.getElementById('textIntroductionEmphasized1').style.fontSize="69px";

			document.getElementById('textIntroductionEmphasized2').style.fontSize="69px";




			//   id="imagePcbIntro" 
			//  height="162"   //  202
			//  width="375"    //  468
			document.getElementById("imagePcbIntro").style.height="303px";
			document.getElementById("imagePcbIntro").style.width="702px"; 


			//  id="textIntroCaption"
			//  Original    12px
			document.getElementById('textIntroCaption').style.fontSize="18px";







			//  adjust the size of the
			//  Bootstrap icon
			//  id="BootstrapIcon"           
			document.getElementById("BootstrapIcon").style.width="128px"; 
			document.getElementById("BootstrapIcon").style.height="128px";




			//  id="textRobotCaption1" 
			//  12px
			document.getElementById('textRobotCaption1').style.fontSize="18px";

			//  id="textRobotEmphasized1" 
			//  12px
			document.getElementById('textRobotEmphasized1').style.fontSize="18px";



			//  id="textRobotCaption2" 
			//  12px
			document.getElementById('textRobotCaption2').style.fontSize="18px";

			//  id="textRobotEmphasized2" 
			//  12px
			document.getElementById('textRobotEmphasized2').style.fontSize="18px";



			//  id="textRobotCaption3" 
			//  12px
			document.getElementById('textRobotCaption3').style.fontSize="18px";

			//  id="textRobotEmphasized3" 
			//  12px
			document.getElementById('textRobotEmphasized3').style.fontSize="18px";



			//  id="textRobotCaption4" 
			//  12px
			document.getElementById('textRobotCaption4').style.fontSize="18px";

			//  id="textRobotEmphasized4" 
			//  12px
			document.getElementById('textRobotEmphasized4').style.fontSize="18px";







			//  id="linkGerberViewer" 
			//  size:16px
			document.getElementById('linkGerberViewer').style.fontSize="28px";

			//  id="pdfIcon" 
			//  width="80" height="80" 
			document.getElementById("pdfIcon").style.width="96px"; 
			document.getElementById("pdfIcon").style.height="96px";

			//  id="textGerberViewerCaption" 
			//  14px
			document.getElementById('textGerberViewerCaption').style.fontSize="24px";






			//  id="linkCrudP1video"
			//  16px
			document.getElementById('linkCrudP1video').style.fontSize="28px";

			//  id="textCrudP1Caption"
			//  14px
			document.getElementById('textCrudP1Caption').style.fontSize="24px";



			//  id="linkCrudP1"
			//  16px
			document.getElementById('linkCrudP1').style.fontSize="28px";


			//  id="textCrudP1bCaption"
			//  14px
			document.getElementById('textCrudP1bCaption').style.fontSize="24px";



			//  id="linkCrudP2"
			//  16px
			document.getElementById('linkCrudP2').style.fontSize="28px";

			//  id="textCrudP2Caption"
			//  14px
			document.getElementById('textCrudP2Caption').style.fontSize="24px";



			//  id="linkCrudP3"
			//  16px
			document.getElementById('linkCrudP3').style.fontSize="28px";

			//  id="textCrudP3Caption"
			//  14px
			document.getElementById('textCrudP3Caption').style.fontSize="24px";



			//  id="linkCrudP4"
			//  16px
			document.getElementById('linkCrudP4').style.fontSize="28px";


			//  id="textCrudP4Caption"
			//  14px
			document.getElementById('textCrudP4Caption').style.fontSize="24px";


			//  id="linkCrudP5"
			//  16px
			document.getElementById('linkCrudP5').style.fontSize="28px";


			//  id="textCrudP5Caption"
			//  14px
			document.getElementById('textCrudP5Caption').style.fontSize="24px";










			//  id="textSqliteLogoPublicDomain"
			//  14px
			document.getElementById('textSqliteLogoPublicDomain').style.fontSize="24px";


			//  id="textSqliteLogoDownloadHere"
			//  14px
			document.getElementById('textSqliteLogoDownloadHere').style.fontSize="24px";


			//  id="textSqliteDownloadHere"
			//  14px
			document.getElementById('textSqliteDownloadHere').style.fontSize="24px";




			//  id="linkSVGgraphics"
			//  16px
			document.getElementById('linkSVGgraphics').style.fontSize="28px";


			//  id="textSVGgraphicsCaption"
			//  14px
			document.getElementById('textSVGgraphicsCaption').style.fontSize="24px";



			//  id="linkSVGanimation"
			//  16px
			document.getElementById('linkSVGanimation').style.fontSize="28px";

			//  id="textSVGanimationCaption"
			//  14px
			document.getElementById('textSVGanimationCaption').style.fontSize="24px";




			//  id="textAnimationEmphasized1"
			//  15px
			document.getElementById('textAnimationEmphasized1').style.fontSize="25px";

			//  id="textAnimationEmphasized2"
			//  15px
			document.getElementById('textAnimationEmphasized2').style.fontSize="25px";

			//  id="textAnimationEmphasized3"
			//  15px
			document.getElementById('textAnimationEmphasized3').style.fontSize="25px";

			//  id="textAnimationEmphasized4"
			//  15px
			document.getElementById('textAnimationEmphasized4').style.fontSize="25px";

			//  id="textAnimationEmphasized5"
			//  15px
			document.getElementById('textAnimationEmphasized5').style.fontSize="25px";




			//  id="linkRayTraceGraphics"
			//  16px
			document.getElementById('linkRayTraceGraphics').style.fontSize="28px";

			//  id="textRayTraceGraphicsCaption"
			//  14px
			document.getElementById('textRayTraceGraphicsCaption').style.fontSize="24px";






			//  id="cameraIcon"
			//  width   80    height   80 
			document.getElementById("cameraIcon").style.width="96px"; 
			document.getElementById("cameraIcon").style.height="96px";

			//  id="linkPhotoGallery"
			//  16px
			document.getElementById('linkPhotoGallery').style.fontSize="28px";

			//  id="textPhotoGalleryCaption"
			//  14px
			document.getElementById('textPhotoGalleryCaption').style.fontSize="24px";

			document.getElementById('textPhotoGalleryCaption').innerHTML=
				'<i>A collection of photos arranged in a grid pattern using CSS GRID.' + 
				'<br>' + 
				'Includes references.</i>';












			//  id="linkColorPicker"
			//  16px
			document.getElementById('linkColorPicker').style.fontSize="28px";

			//  id="textColorPickerCaption"
			//  14px;
			document.getElementById('textColorPickerCaption').style.fontSize="24px";

			document.getElementById('textColorPickerCaption').innerHTML=
				'<i>Color picker which allows visual comparison of two colors. ' + 
				'<br>' + 
				'Gives a visual check of the contrast between the two. ' +  
				'Zoom sample text ' + 
				'<br>' + 
				'up or down in size to check its appearance. ' + 
				'Includes references.</i>';

 


			//  id="svgCloudSun1" 
     			//  width   80      height   80
			document.getElementById("svgCloudSun1").style.width="96px"; 
			document.getElementById("svgCloudSun1").style.height="96px";

			//  id="linkNwsWeather"
			//  16px
			document.getElementById('linkNwsWeather').style.fontSize="28px";

			//  id="textNwsWeatherCaption"
			//  14px;
			document.getElementById('textNwsWeatherCaption').style.fontSize="24px";

			document.getElementById('textNwsWeatherCaption').innerHTML=
				'<i>A demo of using a <b>REST API</b> to retrieve an extended weather forecast ' + 
				'<br>' + 
				'from the <b>National Weather Service</b> (<b>NWS</b>) ' +  
				'using their public REST API.' + 
				'<br>' + 
				'Includes references.</i>';

		//  "linkAngularJS1"
		document.getElementById('linkAngularJS1').style.fontSize="28px"; 

		//  "textAngularJS1Caption"
		document.getElementById('textAngularJS1Caption').style.fontSize="24px"; 




		//  "textWebApp1Link"
		document.getElementById('textWebApp1Link').style.fontSize="24px"; 

		//  "textWebApp1Caption1"
		document.getElementById('textWebApp1Caption1').style.fontSize="20px"; 

		//  "textWebApp1Caption2"
		document.getElementById('textWebApp1Caption2').style.fontSize="24px"; 

		//  "textWebApp1Caption2Emphasized1" 
		document.getElementById('textWebApp1Caption2Emphasized1').style.fontSize="24px"; 

		//  "textWebApp1Caption2Emphasized2" 
		document.getElementById('textWebApp1Caption2Emphasized2').style.fontSize="24px"; 

		//  "textWebApp1Caption2Emphasized3" 
		document.getElementById('textWebApp1Caption2Emphasized3').style.fontSize="24px"; 

		//  "textWebApp1Caption2Emphasized4" 
		document.getElementById('textWebApp1Caption2Emphasized4').style.fontSize="24px"; 

		//  "textWebApp1Caption2Emphasized5" 
		document.getElementById('textWebApp1Caption2Emphasized5').style.fontSize="24px"; 






		//  "textFizzBuzzLink"
		document.getElementById('textFizzBuzzLink').style.fontSize="24px"; 

		//  "textFizzBuzzCaption1"
		document.getElementById('textFizzBuzzCaption1').style.fontSize="20px"; 

		//  "textFizzBuzzCaption2"
		document.getElementById('textFizzBuzzCaption2').style.fontSize="24px"; 

		//  "textFizzBuzzCaption2Emphasized1" 
		document.getElementById('textFizzBuzzCaption2Emphasized1').style.fontSize="24px"; 

		//  "textFizzBuzzCaption2Emphasized2" 
		document.getElementById('textFizzBuzzCaption2Emphasized2').style.fontSize="24px"; 

		//  "textFizzBuzzCaption2Emphasized3" 
		document.getElementById('textFizzBuzzCaption2Emphasized3').style.fontSize="24px"; 

		//  "textFizzBuzzCaption2Emphasized4" 
		document.getElementById('textFizzBuzzCaption2Emphasized4').style.fontSize="24px"; 

		//  "textFizzBuzzCaption2Emphasized5" 
		document.getElementById('textFizzBuzzCaption2Emphasized5').style.fontSize="24px"; 





			//  id="linkOnTheWay1"
			//  16px
			document.getElementById('linkOnTheWay1').style.fontSize="28px";

			//  id="linkOnTheWay2"
			//  16px
			document.getElementById('linkOnTheWay2').style.fontSize="28px";

			//  id="linkOnTheWay3"
			//  16px
			document.getElementById('linkOnTheWay3').style.fontSize="28px";

			//  id="linkOnTheWay4"
			//  16px
			document.getElementById('linkOnTheWay4').style.fontSize="28px";

			//  id="linkOnTheWay5"
			//  16px
			document.getElementById('linkOnTheWay5').style.fontSize="28px";














			//  id="copyrightMsg"
			//  12px
			//  <b>&nbsp;&nbsp;&nbsp;Copyright &#169; 2021 - 2022. All rights reserved.</b>
			document.getElementById('copyrightMsg').style.fontSize="38px";

 
			//  id="bestResultsMsg"
			//  12px
			//  <b>&nbsp;&nbsp;&nbsp;Best results when using the Chrome browser.</b>
			document.getElementById('bestResultsMsg').style.fontSize="38px";


			//  id="iconsProvidedMsg"
			//  12px
			//  <b>&nbsp;&nbsp;&nbsp;Icons provided via the 
			//  <a href="https://icons.getbootstrap.com/" target="_blank">Bootstrap Icons</a> collection.</b>
			document.getElementById('iconsProvidedMsg').style.fontSize="38px";

 

			//  id="iconsCopyrightMsg"
			//  12px
			//  <b>&nbsp;&nbsp;&nbsp; Bootstrap Icons are under the 
			//  <a href="https://github.com/twbs/icons/blob/main/LICENSE.md" target="_blank">MIT</a> license.</b>
			document.getElementById('iconsCopyrightMsg').style.fontSize="38px";



			//  id="iconsModifiedMsg"
			//  12px
			//  <b>&nbsp;&nbsp;&nbsp;Some icons in this collection have been modified.</b>
			document.getElementById('iconsModifiedMsg').style.fontSize="38px";






	//  id="grid-containerAndroid"
     	//  grid-template-rows: 0.3vh 95vh 0.3vh
	document.getElementById('grid-containerAndroid').style.gridTemplateRows = "0.3vh 115vh 0.3vh";

	//  id="grid-containerCAD"
     	//  grid-template-rows: 0.3vh 135vh 0.3vh
	document.getElementById('grid-containerCAD').style.gridTemplateRows = "0.3vh 145vh 0.3vh";



	//  id="grid-containerDatabase"
     	//  grid-template-rows: 0.3vh 215vh 0.3vh
	document.getElementById('grid-containerDatabase').style.gridTemplateRows = "0.3vh 230vh 0.3vh";



	//  id="grid-containerGraphics"
     	//  grid-template-rows: 0.3vh 225vh 0.3vh
	document.getElementById('grid-containerGraphics').style.gridTemplateRows = "0.3vh 165vh 0.3vh";



	//  id="grid-containerMisc"
     	//  grid-template-rows: 0.3vh 190vh 0.3vh
	document.getElementById('grid-containerMisc').style.gridTemplateRows = "0.3vh 415vh 0.3vh";



	//  id="grid-containerWindows"
     	//  grid-template-rows: 0.3vh 95vh 0.3vh
	document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 135vh 0.3vh";









			//  id="textGraphApp1"
			//  16px;">
			//  <b>Using the Canvas in C#</b>
			document.getElementById('textGraphApp1').style.fontSize="28px";



			//  id="textGraphAppCaption"
			//  14px
			document.getElementById('textGraphAppCaption').style.fontSize="24px";


			//  id="textIntroductionPre"
			//  10px
			document.getElementById('textIntroductionPre').style.fontSize="20px";


			//  id="textGraphAppCaption2"
			//  10px
			//  <b>Operating System:</b>
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;
			document.getElementById('textGraphAppCaption2').style.fontSize="24px";



			//  id="textGraphAppCaption3"
			//  10px
			//  <b>Windows 7 - 10</b>
			document.getElementById('textGraphAppCaption3').style.fontSize="24px";



			//  id="textGraphAppCaption4"
			//  10px
			//  <b>Development IDE:</b>
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;
			document.getElementById('textGraphAppCaption4').style.fontSize="24px";

			document.getElementById('textGraphAppCaption4').innerHTML=
				'<b>Development IDE:</b>' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';



			//  id="textGraphAppCaption5"
			//  10px
			//  <b>Visual Studio</b>
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			document.getElementById('textGraphAppCaption5').style.fontSize="24px";

			document.getElementById('textGraphAppCaption5').innerHTML=
				'<b>Visual Studio</b>' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';




			//  id="textGraphAppCaption6"
			//  10px
			//  <b>Language:</b>
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;
			document.getElementById('textGraphAppCaption6').style.fontSize="24px";

			document.getElementById('textGraphAppCaption6').innerHTML=
				'<b>Language:</b>' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';




			//  id="textGraphAppCaption7"
			//  10px
			//  <b>C#</b>
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			document.getElementById('textGraphAppCaption7').style.fontSize="24px";

			document.getElementById('textGraphAppCaption7').innerHTML=
				'<b>C#</b>' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';



			//  id="textGraphAppCaption8"
			//  10px
			//  <b>Demo features:</b>
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			document.getElementById('textGraphAppCaption8').style.fontSize="24px";

			document.getElementById('textGraphAppCaption8').innerHTML=
				'<b>Demo features:</b>' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;';









			//  id="textGraphAppCaption9"
			//  10px
			//  &#x2022; 1. Drawing on the Windows graphic Canvas.
			//  &nbsp;&nbsp;&nbsp;<br>
			//  &#x2022; 2. Data inspection via zoom in or zoom out.
			//  &nbsp;&nbsp;&nbsp;&nbsp;
			//  <br>
			//  &#x2022; 3. Dynamic repositioning of the viewing
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;
			//  <br>
			//  window.
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  <br>
			//  &#x2022; 4. Selectable data cursors.
			//   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;
			//  <br>
			//  &#x2022; 5. Step through the data using the cursor.
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  </b>



			document.getElementById('textGraphAppCaption9').style.fontSize="24px";


			document.getElementById('textGraphAppCaption9').innerHTML= 
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


















		   
			//	document.getElementById('textSVGanimationCaption').innerHTML=
			//	'<i>It is possible to animate an SVG. One way<br>' + 
			//	'to do so is by using <span id="textAnimationEmphasized1" ' + 
			//	'style="color:Navy;font-size:11px;"><b>JavaScript</b></span> to<br>' + 
			//	'manipulate the <span id="textAnimationEmphasized2" ' + 
			//	'style="color:Navy;font-size:11px;"><b>DOM</b></span>.<br>' + 
			//	'These are early attempts at <span id="textAnimationEmphasized3" ' + 
			//	'style="color:Navy;font-size:11px;"><b><i>animation<br>' + 
			//	'using SVG</i></b></span>. They run inside a ' + 
			//	'<span id="textAnimationEmphasized4" ' + 
			//	'style="color:Navy;font-size:11px;"><b><i>web<br>' + 
			//	'browser</i></b></span>, and were written in ' + 
			//	'<span id="textAnimationEmphasized5" ' + 
			//	'style="color:Navy;font-size:11px;"><b><i>2013</i></b></span>. A<br>' + 
			//	'short discussion of SVG animation<br>' + 
			//	'with references and examples.<br>' + 
			//	'Includes a walkthrough of the<br>' + 
			//	'code for a simple animation.' + 
			//	'</i>';







				//  id="textIntroduction" 
				//      Original     14px    
				//  document.getElementById('textIntroduction').style.fontSize="96px";


				//  id="textIntroductionEmphasized1"
				//  document.getElementById(
				//  'textIntroductionEmphasized1').style.
				//  fontSize="97px";


				//  id="textIntroductionEmphasized2"
				//  document.getElementById(
				//  'textIntroductionEmphasized2').style.
				//  fontSize="97px";


				//  document.getElementById('textIntroCaption').innerHTML="
				//  <i>Preview rendering of printed circuit<br>
				//  board produced by parsing the data files. Rendered using SVG graphics. 
				//  Early version of the software.</i>";






				//  id="pdfIcon" 
				//  width="16" height="16" 
				//  document.getElementById("pdfIcon").style.width="128px"; 
				//  document.getElementById("pdfIcon").style.height="128px";


						   



				//    id= textSVGanimationCaption
				//    color Grey     font-size 12px

				//  document.getElementById
				//  ('textSVGanimationCaption').
				//  style.fontSize="78px"



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







				//  id="svgAngularJS1"
				//  width="75" height="82"
				document.getElementById("svgAngularJS1").style.width="112px"; 
				document.getElementById("svgAngularJS1").style.height="123px";



		//  "angularJSmitLicenseMsg" 
		document.getElementById('angularJSmitLicenseMsg').style.fontSize="38px"; 


		//  "angularJSlogoMsg"
		document.getElementById('angularJSlogoMsg').style.fontSize="38px"; 

		//   "angularJSmodifiedMsg"
		document.getElementById('angularJSmodifiedMsg').style.fontSize="38px"; 



		//  "angularJStermsMsg"
		document.getElementById('angularJStermsMsg').style.fontSize="24px"; 

		//  "angularJScreativeCommonsMsg"
		document.getElementById('angularJScreativeCommonsMsg').style.fontSize="24px"; 


		//  "angularJSlocatedAtMsg"
		document.getElementById('angularJSlocatedAtMsg').style.fontSize="24px"; 

	//      <span id="angularJSlocatedAtMsg" style="color:Black;font-size:12px;">Located at</span><br>
	document.getElementById('angularJSlocatedAtMsg').innerHTML=
		"<center>" + 
		"Located at" +
		"<center>";



		//  "angularjsCreativeCommonsLinkMsg"
		//  12px
		//  
		document.getElementById('angularJSCreativeCommonsLinkMsg').style.fontSize="96px"; 

//  id="angularJScreativeCommonsLinkMsg"
//  the font size is not changing



    		//   end     Chrome others
		}

	//   end        Chrome
} 




if (isSafari) { 

	if (isiPad) { 

		//  alert("using the Safari browser on an iPad");
		//  theBrowserIsUnknown = false;



			//  id="mainPageSiteTitle"
			//  28px
			//  ><b>ab872</b><
			document.getElementById('mainPageSiteTitle').style.fontSize="48px";



			//  adjust the size of the
			//  Bootstrap icon
			//  id="BootstrapIcon"           
			document.getElementById("BootstrapIcon").style.width="64px"; 
			document.getElementById("BootstrapIcon").style.height="64px";









			//	document.getElementById('textIntroduction').innerHTML=
			//		'A collection of various <span id="textIntroductionEmphasized1" ' + 
			//		'style="color:Navy;font-size:45px;"><b>projects</b></span> ' +  
			//		'and <span id="textIntroductionEmphasized2" ' + 
			//		'style="color:Navy;font-size:45px;"><b>experiments</b><br><br>';



			//  id="copyrightMsg"
			//  12px
			//  <b>&nbsp;&nbsp;&nbsp;Copyright &#169; 2021 - 2022. All rights reserved.</b>
			document.getElementById('copyrightMsg').style.fontSize="24px";

 
			//  id="bestResultsMsg"
			//  12px
			//  <b>&nbsp;&nbsp;&nbsp;Best results when using the Chrome browser.</b>
			document.getElementById('bestResultsMsg').style.fontSize="24px";


			//  id="iconsProvidedMsg"
			//  12px
			//  <b>&nbsp;&nbsp;&nbsp;Icons provided via the 
			//  <a href="https://icons.getbootstrap.com/" target="_blank">Bootstrap Icons</a> collection.</b>
			document.getElementById('iconsProvidedMsg').style.fontSize="24px";

 

			//  id="iconsCopyrightMsg"
			//  12px
			//  <b>&nbsp;&nbsp;&nbsp; Bootstrap Icons are under the 
			//  <a href="https://github.com/twbs/icons/blob/main/LICENSE.md" target="_blank">MIT</a> license.</b>
			document.getElementById('iconsCopyrightMsg').style.fontSize="24px";



			//  id="iconsModifiedMsg"
			//  12px
			//  <b>&nbsp;&nbsp;&nbsp;Some icons in this collection have been modified.</b>
			document.getElementById('iconsModifiedMsg').style.fontSize="24px";



		   
			//	document.getElementById('textSVGanimationCaption').innerHTML=
			//	'<i>It is possible to animate an SVG. One way<br>' + 
			//	'to do so is by using <span id="textAnimationEmphasized1" ' + 
			//	'style="color:Navy;font-size:11px;"><b>JavaScript</b></span> to<br>' + 
			//	'manipulate the <span id="textAnimationEmphasized2" ' + 
			//	'style="color:Navy;font-size:11px;"><b>DOM</b></span>.<br>' + 
			//	'These are early attempts at <span id="textAnimationEmphasized3" ' + 
			//	'style="color:Navy;font-size:11px;"><b><i>animation<br>' + 
			//	'using SVG</i></b></span>. They run inside a ' + 
			//	'<span id="textAnimationEmphasized4" ' + 
			//	'style="color:Navy;font-size:11px;"><b><i>web<br>' + 
			//	'browser</i></b></span>, and were written in ' + 
			//	'<span id="textAnimationEmphasized5" ' + 
			//	'style="color:Navy;font-size:11px;"><b><i>2013</i></b></span>. A<br>' + 
			//	'short discussion of SVG animation<br>' + 
			//	'with references and examples.<br>' + 
			//	'Includes a walkthrough of the<br>' + 
			//	'code for a simple animation.' + 
			//	'</i>';







				//  id="textIntroduction" 
				//      Original     14px    
				//  document.getElementById('textIntroduction').style.fontSize="96px";


				//  id="textIntroductionEmphasized1"
				//  document.getElementById(
				//  'textIntroductionEmphasized1').style.
				//  fontSize="97px";


				//  id="textIntroductionEmphasized2"
				//  document.getElementById(
				//  'textIntroductionEmphasized2').style.
				//  fontSize="97px";


				//  document.getElementById('textIntroCaption').innerHTML="
				//  <i>Preview rendering of printed circuit<br>
				//  board produced by parsing the data files. Rendered using SVG graphics. 
				//  Early version of the software.</i>";



				//  id="textIntroCaption"
				//  Original    12px
				//  document.getElementById('textIntroCaption').style.fontSize="78px";


				//  id="pdfIcon" 
				//  width="16" height="16" 
				//  document.getElementById("pdfIcon").style.width="128px"; 
				//  document.getElementById("pdfIcon").style.height="128px";


						   



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


				//    id="cameraIcon"
				//    width="36" height="36" 
				document.getElementById("cameraIcon").style.width="64px"; 
           			document.getElementById("cameraIcon").style.height="64px";



if (deviceScreenWidth == 375) {

	//  alert("Safari iPad     screen width EQUAL to 375 "); 



   //   end     screen width EQUAL to 375
} else if (deviceScreenWidth == 414) {

	//  alert("Safari iPhone     screen width EQUAL to 414 "); 


   //   end     screen width EQUAL to 414
} else if (deviceScreenWidth == 390) {

	//  alert("Safari iPad     screen width EQUAL to 390 "); 


   //   end     screen width EQUAL to 390
} else if (deviceScreenWidth == 414) {

	//  alert("Safari iPad     screen width EQUAL to 414 "); 


   //   end     screen width EQUAL to 414
} else if (deviceScreenWidth == 768) {

	 // alert("Safari iPad     screen width EQUAL to 768 "); 

	//  id="grid-containerAndroid"
     	//  grid-template-rows: 0.3vh 95vh 0.3vh
	document.getElementById('grid-containerAndroid').style.gridTemplateRows = "0.3vh 65vh 0.3vh";

	//  id="grid-containerCAD"
     	//  grid-template-rows: 0.3vh 135vh 0.3vh
	document.getElementById('grid-containerCAD').style.gridTemplateRows = "0.3vh 55vh 0.3vh";



	//  id="grid-containerDatabase"
     	//  grid-template-rows: 0.3vh 215vh 0.3vh
	document.getElementById('grid-containerDatabase').style.gridTemplateRows = "0.3vh 130vh 0.3vh";



	//  id="grid-containerGraphics"
     	//  grid-template-rows: 0.3vh 225vh 0.3vh
	document.getElementById('grid-containerGraphics').style.gridTemplateRows = "0.3vh 90vh 0.3vh";



	//  id="grid-containerMisc"
     	//  grid-template-rows: 0.3vh 190vh 0.3vh
	document.getElementById('grid-containerMisc').style.gridTemplateRows = "0.3vh 110vh 0.3vh";



	//  id="grid-containerWindows"
     	//  grid-template-rows: 0.3vh 95vh 0.3vh
	document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 25vh 0.3vh";


   //   end     screen width EQUAL to 768
} else if (deviceScreenWidth == 820) {

	  //  alert("Safari iPad     screen width EQUAL to 820 "); 


	//  id="grid-containerAndroid"
     	//  grid-template-rows: 0.3vh 95vh 0.3vh
	document.getElementById('grid-containerAndroid').style.gridTemplateRows = "0.3vh 65vh 0.3vh";

	//  id="grid-containerCAD"
     	//  grid-template-rows: 0.3vh 135vh 0.3vh
	document.getElementById('grid-containerCAD').style.gridTemplateRows = "0.3vh 55vh 0.3vh";



	//  id="grid-containerDatabase"
     	//  grid-template-rows: 0.3vh 215vh 0.3vh
	document.getElementById('grid-containerDatabase').style.gridTemplateRows = "0.3vh 130vh 0.3vh";



	//  id="grid-containerGraphics"
     	//  grid-template-rows: 0.3vh 225vh 0.3vh
	document.getElementById('grid-containerGraphics').style.gridTemplateRows = "0.3vh 90vh 0.3vh";



	//  id="grid-containerMisc"
     	//  grid-template-rows: 0.3vh 190vh 0.3vh
	document.getElementById('grid-containerMisc').style.gridTemplateRows = "0.3vh 110vh 0.3vh";



	//  id="grid-containerWindows"
     	//  grid-template-rows: 0.3vh 95vh 0.3vh
	document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 25vh 0.3vh";




   //   end     screen width EQUAL to 820
} else if (deviceScreenWidth == 100) {

	//  alert("Safari iPad     screen width EQUAL to 100 "); 


   //   end     screen width EQUAL to 100
} else {

	 // alert("Safari iPad     screen width EQUAL to all others "); 

	//  id="grid-containerAndroid"
     	//  grid-template-rows: 0.3vh 95vh 0.3vh
	document.getElementById('grid-containerAndroid').style.gridTemplateRows = "0.3vh 65vh 0.3vh";

	//  id="grid-containerCAD"
     	//  grid-template-rows: 0.3vh 135vh 0.3vh
	document.getElementById('grid-containerCAD').style.gridTemplateRows = "0.3vh 55vh 0.3vh";



	//  id="grid-containerDatabase"
     	//  grid-template-rows: 0.3vh 215vh 0.3vh
	document.getElementById('grid-containerDatabase').style.gridTemplateRows = "0.3vh 130vh 0.3vh";



	//  id="grid-containerGraphics"
     	//  grid-template-rows: 0.3vh 225vh 0.3vh
	document.getElementById('grid-containerGraphics').style.gridTemplateRows = "0.3vh 90vh 0.3vh";



	//  id="grid-containerMisc"
     	//  grid-template-rows: 0.3vh 190vh 0.3vh
	document.getElementById('grid-containerMisc').style.gridTemplateRows = "0.3vh 110vh 0.3vh";



	//  id="grid-containerWindows"
     	//  grid-template-rows: 0.3vh 95vh 0.3vh
	document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 25vh 0.3vh";



   //   end     screen width - others
}





	  //   end        isiPad
	} else if (isiPhone) { 

		//  alert("using the Safari browser on an iPhone");
		//  theBrowserIsUnknown = false;



if (deviceScreenWidth == 375) {
  
	//  alert("Safari iPhone     screen width EQUAL to 375 "); 



	//  id="textRobotEmphasized2" 
	//  12px
	//  <i>http://developer.android.com/distribute/googleplay/promote/brand.html</i>
	document.getElementById('textRobotEmphasized2').innerHTML=
	'<i>http://developer.android.com/distribute/<br>' + 
	'googleplay/promote/brand.html</i>';



	//  id="grid-containerAndroid"
     	//  grid-template-rows: 0.3vh 95vh 0.3vh
	document.getElementById('grid-containerAndroid').style.gridTemplateRows='0.3vh 65vh 0.3vh';



	//  id="grid-containerCAD"
     	//  grid-template-rows: 0.3vh 135vh 0.3vh
	document.getElementById('grid-containerCAD').style.gridTemplateRows = "0.3vh 15vh 0.3vh";



	//  id="grid-containerDatabase"
     	//  grid-template-rows: 0.3vh 215vh 0.3vh
	document.getElementById('grid-containerDatabase').style.gridTemplateRows = "0.3vh 130vh 0.3vh";



	//  id="grid-containerGraphics"
     	//  grid-template-rows: 0.3vh 225vh 0.3vh
	document.getElementById('grid-containerGraphics').style.gridTemplateRows = "0.3vh 90vh 0.3vh";



	//  id="grid-containerMisc"
     	//  grid-template-rows: 0.3vh 190vh 0.3vh
	document.getElementById('grid-containerMisc').style.gridTemplateRows = "0.3vh 110vh 0.3vh";



	//  id="grid-containerWindows"
     	//  grid-template-rows: 0.3vh 95vh 0.3vh
	document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 25vh 0.3vh";



   //   end     screen width EQUAL to 375
} else if (deviceScreenWidth == 390) {

	//  alert("Safari iPhone     screen width EQUAL to 390 "); 

	//  id="textRobotEmphasized2" 
	//  12px
	//  <i>http://developer.android.com/distribute/googleplay/promote/brand.html</i>
	document.getElementById('textRobotEmphasized2').innerHTML=
	'<i>http://developer.android.com/distribute/<br>' + 
	'googleplay/promote/brand.html</i>';



	//  id="grid-containerAndroid"
     	//  grid-template-rows: 0.3vh 95vh 0.3vh
	document.getElementById('grid-containerAndroid').style.gridTemplateRows = "0.3vh 65vh 0.3vh";

	//  id="grid-containerCAD"
     	//  grid-template-rows: 0.3vh 135vh 0.3vh
	document.getElementById('grid-containerCAD').style.gridTemplateRows = "0.3vh 55vh 0.3vh";



	//  id="grid-containerDatabase"
     	//  grid-template-rows: 0.3vh 215vh 0.3vh
	document.getElementById('grid-containerDatabase').style.gridTemplateRows = "0.3vh 130vh 0.3vh";



	//  id="grid-containerGraphics"
     	//  grid-template-rows: 0.3vh 225vh 0.3vh
	document.getElementById('grid-containerGraphics').style.gridTemplateRows = "0.3vh 90vh 0.3vh";



	//  id="grid-containerMisc"
     	//  grid-template-rows: 0.3vh 190vh 0.3vh
	document.getElementById('grid-containerMisc').style.gridTemplateRows = "0.3vh 110vh 0.3vh";



	//  id="grid-containerWindows"
     	//  grid-template-rows: 0.3vh 95vh 0.3vh
	document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 25vh 0.3vh";



   //   end     screen width EQUAL to 390
} else if (deviceScreenWidth == 414) {

	//  alert("Safari iPhone     screen width EQUAL to 414 "); 

	//  id="textRobotEmphasized2" 
	//  12px
	//  <i>http://developer.android.com/distribute/googleplay/promote/brand.html</i>
	document.getElementById('textRobotEmphasized2').innerHTML=
	'<i>http://developer.android.com/distribute/<br>' + 
	'googleplay/promote/brand.html</i>';



	//  id="grid-containerAndroid"
     	//  grid-template-rows: 0.3vh 95vh 0.3vh
	document.getElementById('grid-containerAndroid').style.gridTemplateRows = "0.3vh 65vh 0.3vh";

	//  id="grid-containerCAD"
     	//  grid-template-rows: 0.3vh 135vh 0.3vh
	document.getElementById('grid-containerCAD').style.gridTemplateRows = "0.3vh 55vh 0.3vh";



	//  id="grid-containerDatabase"
     	//  grid-template-rows: 0.3vh 215vh 0.3vh
	document.getElementById('grid-containerDatabase').style.gridTemplateRows = "0.3vh 130vh 0.3vh";



	//  id="grid-containerGraphics"
     	//  grid-template-rows: 0.3vh 225vh 0.3vh
	document.getElementById('grid-containerGraphics').style.gridTemplateRows = "0.3vh 90vh 0.3vh";



	//  id="grid-containerMisc"
     	//  grid-template-rows: 0.3vh 190vh 0.3vh
	document.getElementById('grid-containerMisc').style.gridTemplateRows = "0.3vh 110vh 0.3vh";



	//  id="grid-containerWindows"
     	//  grid-template-rows: 0.3vh 95vh 0.3vh
	document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 25vh 0.3vh";




   //   end     screen width EQUAL to 414
} else if (deviceScreenWidth == 100) {

	//  alert("Safari iPhone     screen width EQUAL to 100 "); 


   //   end     screen width EQUAL to 100
} else {

	//  alert("Safari iPhone     screen width EQUAL to all others "); 


	//  id="grid-containerAndroid"
     	//  grid-template-rows: 0.3vh 95vh 0.3vh
	document.getElementById('grid-containerAndroid').style.gridTemplateRows = "0.3vh 65vh 0.3vh";

	//  id="grid-containerCAD"
     	//  grid-template-rows: 0.3vh 135vh 0.3vh
	document.getElementById('grid-containerCAD').style.gridTemplateRows = "0.3vh 55vh 0.3vh";



	//  id="grid-containerDatabase"
     	//  grid-template-rows: 0.3vh 215vh 0.3vh
	document.getElementById('grid-containerDatabase').style.gridTemplateRows = "0.3vh 130vh 0.3vh";



	//  id="grid-containerGraphics"
     	//  grid-template-rows: 0.3vh 225vh 0.3vh
	document.getElementById('grid-containerGraphics').style.gridTemplateRows = "0.3vh 90vh 0.3vh";



	//  id="grid-containerMisc"
     	//  grid-template-rows: 0.3vh 190vh 0.3vh
	document.getElementById('grid-containerMisc').style.gridTemplateRows = "0.3vh 110vh 0.3vh";



	//  id="grid-containerWindows"
     	//  grid-template-rows: 0.3vh 95vh 0.3vh
	document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 25vh 0.3vh";



   //   end     screen width - others
}





	  //   end        isiPhone
	} else if (isMac) { 

		//  alert("using the Safari browser on a Mac");
		//  theBrowserIsUnknown = false;

	  //   end        isMac
	}

	//   end        Safari
} 





if (isEdge) { 

	//  alert("using the old Edge browser");
	//  theBrowserIsUnknown = false;



			//  id="mainPageSiteTitle"
			//  28px
			//  ><b>ab872</b><
			document.getElementById('mainPageSiteTitle').style.fontSize="48px";



			//  adjust the size of the
			//  Bootstrap icon
			//  id="BootstrapIcon"           
			document.getElementById("BootstrapIcon").style.width="64px"; 
			document.getElementById("BootstrapIcon").style.height="64px";








			//	document.getElementById('textIntroduction').innerHTML=
			//		'A collection of various <span id="textIntroductionEmphasized1" ' + 
			//		'style="color:Navy;font-size:45px;"><b>projects</b></span> ' +  
			//		'and <span id="textIntroductionEmphasized2" ' + 
			//		'style="color:Navy;font-size:45px;"><b>experiments</b><br><br>';



			//  id="copyrightMsg"
			//  12px
			//  <b>&nbsp;&nbsp;&nbsp;Copyright &#169; 2021 - 2022. All rights reserved.</b>
			document.getElementById('copyrightMsg').style.fontSize="24px";

 
			//  id="bestResultsMsg"
			//  12px
			//  <b>&nbsp;&nbsp;&nbsp;Best results when using the Chrome browser.</b>
			document.getElementById('bestResultsMsg').style.fontSize="24px";


			//  id="iconsProvidedMsg"
			//  12px
			//  <b>&nbsp;&nbsp;&nbsp;Icons provided via the 
			//  <a href="https://icons.getbootstrap.com/" target="_blank">Bootstrap Icons</a> collection.</b>
			document.getElementById('iconsProvidedMsg').style.fontSize="24px";

 

			//  id="iconsCopyrightMsg"
			//  12px
			//  <b>&nbsp;&nbsp;&nbsp; Bootstrap Icons are under the 
			//  <a href="https://github.com/twbs/icons/blob/main/LICENSE.md" target="_blank">MIT</a> license.</b>
			document.getElementById('iconsCopyrightMsg').style.fontSize="24px";



			//  id="iconsModifiedMsg"
			//  12px
			//  <b>&nbsp;&nbsp;&nbsp;Some icons in this collection have been modified.</b>
			document.getElementById('iconsModifiedMsg').style.fontSize="24px";




	//  id="grid-containerAndroid"
     	//  grid-template-rows: 0.3vh 95vh 0.3vh
	document.getElementById('grid-containerAndroid').style.gridTemplateRows = "0.3vh 85vh 0.3vh";

	//  id="grid-containerCAD"
     	//  grid-template-rows: 0.3vh 135vh 0.3vh
	document.getElementById('grid-containerCAD').style.gridTemplateRows = "0.3vh 105vh 0.3vh";



	//  id="grid-containerDatabase"
     	//  grid-template-rows: 0.3vh 215vh 0.3vh
	document.getElementById('grid-containerDatabase').style.gridTemplateRows = "0.3vh 190vh 0.3vh";



	//  id="grid-containerGraphics"
     	//  grid-template-rows: 0.3vh 225vh 0.3vh
	document.getElementById('grid-containerGraphics').style.gridTemplateRows = "0.3vh 155vh 0.3vh";



	//  id="grid-containerMisc"
     	//  grid-template-rows: 0.3vh 190vh 0.3vh
	document.getElementById('grid-containerMisc').style.gridTemplateRows = "0.3vh 315vh 0.3vh";



	//  id="grid-containerWindows"
     	//  grid-template-rows: 0.3vh 95vh 0.3vh
	document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 105vh 0.3vh";




document.getElementById('androidGraphicsTitle').style.fontSize="66px";

document.getElementById('cadGraphicsTitle').style.fontSize="66px";

document.getElementById('databaseGraphicsTitle').style.fontSize="66px";

document.getElementById('graphicGraphicsTitle').style.fontSize="66px";

document.getElementById('windowsGraphicsTitle').style.fontSize="66px";

//  id  "miscGraphicsTitle" 66px      Miscellaneous
document.getElementById('miscGraphicsTitle').style.fontSize="66px";







			//  id="textGraphApp1"
			//  16px;">
			//  <b>Using the Canvas in C#</b>
			document.getElementById('textGraphApp1').style.fontSize="28px";



			//  id="textGraphAppCaption"
			//  14px
			document.getElementById('textGraphAppCaption').style.fontSize="28px";


			//  id="textIntroductionPre"
			//  10px
			document.getElementById('textIntroductionPre').style.fontSize="24px";


			//  id="textGraphAppCaption2"
			//  10px
			//  <b>Operating System:</b>
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;
			document.getElementById('textGraphAppCaption2').style.fontSize="24px";



			//  id="textGraphAppCaption3"
			//  10px
			//  <b>Windows 7 - 10</b>
			document.getElementById('textGraphAppCaption3').style.fontSize="24px";



			//  id="textGraphAppCaption4"
			//  10px
			//  <b>Development IDE:</b>
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;
			document.getElementById('textGraphAppCaption4').style.fontSize="24px";

			document.getElementById('textGraphAppCaption4').innerHTML=
				'<b>Development IDE:</b>' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';



			//  id="textGraphAppCaption5"
			//  10px
			//  <b>Visual Studio</b>
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			document.getElementById('textGraphAppCaption5').style.fontSize="24px";

			document.getElementById('textGraphAppCaption5').innerHTML=
				'<b>Visual Studio</b>' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';




			//  id="textGraphAppCaption6"
			//  10px
			//  <b>Language:</b>
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;
			document.getElementById('textGraphAppCaption6').style.fontSize="24px";

			document.getElementById('textGraphAppCaption6').innerHTML=
				'<b>Language:</b>' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';




			//  id="textGraphAppCaption7"
			//  10px
			//  <b>C#</b>
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			document.getElementById('textGraphAppCaption7').style.fontSize="24px";

			document.getElementById('textGraphAppCaption7').innerHTML=
				'<b>C#</b>' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';



			//  id="textGraphAppCaption8"
			//  10px
			//  <b>Demo features:</b>
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			document.getElementById('textGraphAppCaption8').style.fontSize="24px";

			document.getElementById('textGraphAppCaption8').innerHTML=
				'<b>Demo features:</b>' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;';









			//  id="textGraphAppCaption9"
			//  10px
			//  &#x2022; 1. Drawing on the Windows graphic Canvas.
			//  &nbsp;&nbsp;&nbsp;<br>
			//  &#x2022; 2. Data inspection via zoom in or zoom out.
			//  &nbsp;&nbsp;&nbsp;&nbsp;
			//  <br>
			//  &#x2022; 3. Dynamic repositioning of the viewing
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;
			//  <br>
			//  window.
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  <br>
			//  &#x2022; 4. Selectable data cursors.
			//   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;
			//  <br>
			//  &#x2022; 5. Step through the data using the cursor.
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  </b>



			document.getElementById('textGraphAppCaption9').style.fontSize="24px";


			document.getElementById('textGraphAppCaption9').innerHTML= 
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







		   
			//	document.getElementById('textSVGanimationCaption').innerHTML=
			//	'<i>It is possible to animate an SVG. One way<br>' + 
			//	'to do so is by using <span id="textAnimationEmphasized1" ' + 
			//	'style="color:Navy;font-size:11px;"><b>JavaScript</b></span> to<br>' + 
			//	'manipulate the <span id="textAnimationEmphasized2" ' + 
			//	'style="color:Navy;font-size:11px;"><b>DOM</b></span>.<br>' + 
			//	'These are early attempts at <span id="textAnimationEmphasized3" ' + 
			//	'style="color:Navy;font-size:11px;"><b><i>animation<br>' + 
			//	'using SVG</i></b></span>. They run inside a ' + 
			//	'<span id="textAnimationEmphasized4" ' + 
			//	'style="color:Navy;font-size:11px;"><b><i>web<br>' + 
			//	'browser</i></b></span>, and were written in ' + 
			//	'<span id="textAnimationEmphasized5" ' + 
			//	'style="color:Navy;font-size:11px;"><b><i>2013</i></b></span>. A<br>' + 
			//	'short discussion of SVG animation<br>' + 
			//	'with references and examples.<br>' + 
			//	'Includes a walkthrough of the<br>' + 
			//	'code for a simple animation.' + 
			//	'</i>';







				//  id="textIntroduction" 
				//      Original     14px    
				//  document.getElementById('textIntroduction').style.fontSize="96px";


				//  id="textIntroductionEmphasized1"
				//  document.getElementById(
				//  'textIntroductionEmphasized1').style.
				//  fontSize="97px";


				//  id="textIntroductionEmphasized2"
				//  document.getElementById(
				//  'textIntroductionEmphasized2').style.
				//  fontSize="97px";


				//  document.getElementById('textIntroCaption').innerHTML="
				//  <i>Preview rendering of printed circuit<br>
				//  board produced by parsing the data files. Rendered using SVG graphics. 
				//  Early version of the software.</i>";



				//  id="textIntroCaption"
				//  Original    12px
				//  document.getElementById('textIntroCaption').style.fontSize="78px";


				//  id="pdfIcon" 
				//  width="16" height="16" 
				//  document.getElementById("pdfIcon").style.width="128px"; 
				//           document.getElementById("pdfIcon").style.height="128px";


						   



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



			//  id="cameraIcon"
			//  width   80    height   80 
			document.getElementById("cameraIcon").style.width="128px"; 
			document.getElementById("cameraIcon").style.height="128px";


		//  "textFizzBuzzLink"
		document.getElementById('textFizzBuzzLink').style.fontSize="18px"; 

		//  "textFizzBuzzCaption1"
		document.getElementById('textFizzBuzzCaption1').style.fontSize="18px"; 

		//  "textFizzBuzzCaption2"
		document.getElementById('textFizzBuzzCaption2').style.fontSize="18px"; 

		//  "textFizzBuzzCaption2Emphasized1" 
		document.getElementById('textFizzBuzzCaption2Emphasized1').style.fontSize="18px"; 

		//  "textFizzBuzzCaption2Emphasized2" 
		document.getElementById('textFizzBuzzCaption2Emphasized2').style.fontSize="18px"; 

		//  "textFizzBuzzCaption2Emphasized3" 
		document.getElementById('textFizzBuzzCaption2Emphasized3').style.fontSize="18px"; 

		//  "textFizzBuzzCaption2Emphasized4" 
		document.getElementById('textFizzBuzzCaption2Emphasized4').style.fontSize="18px"; 

		//  "textFizzBuzzCaption2Emphasized5" 
		document.getElementById('textFizzBuzzCaption2Emphasized5').style.fontSize="18px"; 




				//  id="svgAngularJS1"
				//  width="75" height="82"
				document.getElementById("svgAngularJS1").style.width="112px"; 
				document.getElementById("svgAngularJS1").style.height="123px";


		//  "angularJSmitLicenseMsg" 
		document.getElementById('angularJSmitLicenseMsg').style.fontSize="38px"; 


		//  "angularJSlogoMsg"
		document.getElementById('angularJSlogoMsg').style.fontSize="38px"; 

		//   "angularJSmodifiedMsg"
		document.getElementById('angularJSmodifiedMsg').style.fontSize="38px"; 




		//  "angularJStermsMsg"
		document.getElementById('angularJStermsMsg').style.fontSize="24px"; 

		//  "angularJScreativeCommonsMsg"
		document.getElementById('angularJScreativeCommonsMsg').style.fontSize="24px"; 


		//  "angularJSlocatedAtMsg"
		document.getElementById('angularJSlocatedAtMsg').style.fontSize="24px"; 

	//      <span id="angularJSlocatedAtMsg" style="color:Black;font-size:12px;">Located at</span><br>
	document.getElementById('angularJSlocatedAtMsg').innerHTML=
		"<center>" + 
		"Located at" +
		"<center>";



		//  <span id="angularjsCreativeCommonsLinkMsg" style="font-size:12px;">
		//  <b><i>https://creativecommons.org/licenses/by-sa/3.0/</i></b></span>
		document.getElementById('angularJSCreativeCommonsLinkMsg').style.fontSize="24px"; 






	//   end        old Edge
} 





if (isNewEdge) { 
	//   begin        new Edge

	//  alert("using the new Edge browser");
	//  theBrowserIsUnknown = false;


			//  id="mainPageSiteTitle"
			//  28px
			//  ><b>ab872</b><
			document.getElementById('mainPageSiteTitle').style.fontSize="72px";



			//	document.getElementById('textIntroduction').innerHTML=
			//		'A collection of various <span id="textIntroductionEmphasized1" ' + 
			//		'style="color:Navy;font-size:45px;"><b>projects</b></span> ' +  
			//		'and <span id="textIntroductionEmphasized2" ' + 
			//		'style="color:Navy;font-size:45px;"><b>experiments</b><br><br>';

			document.getElementById('textIntroduction').style.fontSize="68px";

			document.getElementById('textIntroductionEmphasized1').style.fontSize="69px";

			document.getElementById('textIntroductionEmphasized2').style.fontSize="69px";






			//  adjust the size of the
			//  Bootstrap icon
			//  id="BootstrapIcon"           
			document.getElementById("BootstrapIcon").style.width="128px"; 
			document.getElementById("BootstrapIcon").style.height="128px";



			//  id="linkGerberViewer" 
			//  size:16px
			document.getElementById('linkGerberViewer').style.fontSize="28px";

			//  id="pdfIcon" 
			//  width="80" height="80" 
			document.getElementById("pdfIcon").style.width="96px"; 
			document.getElementById("pdfIcon").style.height="96px";

			//  id="textGerberViewerCaption" 
			//  14px
			document.getElementById('textGerberViewerCaption').style.fontSize="24px";






			//  id="linkCrudP1video"
			//  16px
			document.getElementById('linkCrudP1video').style.fontSize="28px";

			//  id="textCrudP1Caption"
			//  14px
			document.getElementById('textCrudP1Caption').style.fontSize="24px";



			//  id="linkCrudP1"
			//  16px
			document.getElementById('linkCrudP1').style.fontSize="28px";


			//  id="textCrudP1bCaption"
			//  14px
			document.getElementById('textCrudP1bCaption').style.fontSize="24px";



			//  id="linkCrudP2"
			//  16px
			document.getElementById('linkCrudP2').style.fontSize="28px";

			//  id="textCrudP2Caption"
			//  14px
			document.getElementById('textCrudP2Caption').style.fontSize="24px";



			//  id="linkCrudP3"
			//  16px
			document.getElementById('linkCrudP3').style.fontSize="28px";

			//  id="textCrudP3Caption"
			//  14px
			document.getElementById('textCrudP3Caption').style.fontSize="24px";



			//  id="linkCrudP4"
			//  16px
			document.getElementById('linkCrudP4').style.fontSize="28px";


			//  id="textCrudP4Caption"
			//  14px
			document.getElementById('textCrudP4Caption').style.fontSize="24px";


			//  id="linkCrudP5"
			//  16px
			document.getElementById('linkCrudP5').style.fontSize="28px";


			//  id="textCrudP5Caption"
			//  14px
			document.getElementById('textCrudP5Caption').style.fontSize="24px";










			//  id="textSqliteLogoPublicDomain"
			//  14px
			document.getElementById('textSqliteLogoPublicDomain').style.fontSize="24px";


			//  id="textSqliteLogoDownloadHere"
			//  14px
			document.getElementById('textSqliteLogoDownloadHere').style.fontSize="24px";


			//  id="textSqliteDownloadHere"
			//  14px
			document.getElementById('textSqliteDownloadHere').style.fontSize="24px";




			//  id="linkSVGgraphics"
			//  16px
			document.getElementById('linkSVGgraphics').style.fontSize="28px";


			//  id="textSVGgraphicsCaption"
			//  14px
			document.getElementById('textSVGgraphicsCaption').style.fontSize="24px";



			//  id="linkSVGanimation"
			//  16px
			document.getElementById('linkSVGanimation').style.fontSize="28px";

			//  id="textSVGanimationCaption"
			//  14px
			document.getElementById('textSVGanimationCaption').style.fontSize="24px";

			//  id="textAnimationEmphasized1"
			//  15px
			document.getElementById('textAnimationEmphasized1').style.fontSize="25px";

			//  id="textAnimationEmphasized2"
			//  15px
			document.getElementById('textAnimationEmphasized2').style.fontSize="25px";

			//  id="textAnimationEmphasized3"
			//  15px
			document.getElementById('textAnimationEmphasized3').style.fontSize="25px";

			//  id="textAnimationEmphasized4"
			//  15px
			document.getElementById('textAnimationEmphasized4').style.fontSize="25px";

			//  id="textAnimationEmphasized5"
			//  15px
			document.getElementById('textAnimationEmphasized5').style.fontSize="25px";




			//  id="linkRayTraceGraphics"
			//  16px
			document.getElementById('linkRayTraceGraphics').style.fontSize="28px";

			//  id="textRayTraceGraphicsCaption"
			//  14px
			document.getElementById('textRayTraceGraphicsCaption').style.fontSize="24px";







			//  id="cameraIcon"
			//  width   80    height   80 
			document.getElementById("cameraIcon").style.width="128px"; 
			document.getElementById("cameraIcon").style.height="128px";

			//  id="linkPhotoGallery"
			//  16px
			document.getElementById('linkPhotoGallery').style.fontSize="28px";

			//  id="textPhotoGalleryCaption"
			//  14px
			document.getElementById('textPhotoGalleryCaption').style.fontSize="24px";









			//  id="linkColorPicker"
			//  16px
			document.getElementById('linkColorPicker').style.fontSize="28px";

			//  id="textColorPickerCaption"
			//  14px;
			document.getElementById('textColorPickerCaption').style.fontSize="24px";






			//  id="svgCloudSun1" 
     			//  width   80      height   80
			document.getElementById("svgCloudSun1").style.width="96px"; 
			document.getElementById("svgCloudSun1").style.height="96px";

			//  id="linkNwsWeather"
			//  16px
			document.getElementById('linkNwsWeather').style.fontSize="28px";

			//  id="textNwsWeatherCaption"
			//  14px;
			document.getElementById('textNwsWeatherCaption').style.fontSize="24px";

			document.getElementById('textNwsWeatherCaption').innerHTML=
				'<i>A demo of using a <b>REST API</b> to retrieve an extended weather forecast ' + 
				'<br>' + 
				'from the <b>National Weather Service</b> (<b>NWS</b>) ' +  
				'using their public REST API.' + 
				'<br>' + 
				'Includes references.</i>';



		//  "linkAngularJS1"
		document.getElementById('linkAngularJS1').style.fontSize="28px"; 

		//  "textAngularJS1Caption"
		document.getElementById('textAngularJS1Caption').style.fontSize="24px"; 



		//  "textFizzBuzzLink"
		document.getElementById('textFizzBuzzLink').style.fontSize="28px"; 

		//  "textFizzBuzzCaption1"
		document.getElementById('textFizzBuzzCaption1').style.fontSize="24px"; 

		//  "textFizzBuzzCaption2"
		document.getElementById('textFizzBuzzCaption2').style.fontSize="24px"; 

		//  "textFizzBuzzCaption2Emphasized1" 
		document.getElementById('textFizzBuzzCaption2Emphasized1').style.fontSize="24px"; 

		//  "textFizzBuzzCaption2Emphasized2" 
		document.getElementById('textFizzBuzzCaption2Emphasized2').style.fontSize="24px"; 

		//  "textFizzBuzzCaption2Emphasized3" 
		document.getElementById('textFizzBuzzCaption2Emphasized3').style.fontSize="24px"; 

		//  "textFizzBuzzCaption2Emphasized4" 
		document.getElementById('textFizzBuzzCaption2Emphasized4').style.fontSize="24px"; 

		//  "textFizzBuzzCaption2Emphasized5" 
		document.getElementById('textFizzBuzzCaption2Emphasized5').style.fontSize="24px"; 





			//  id="linkOnTheWay1"
			//  16px
			document.getElementById('linkOnTheWay1').style.fontSize="28px";

			//  id="linkOnTheWay2"
			//  16px
			document.getElementById('linkOnTheWay2').style.fontSize="28px";

			//  id="linkOnTheWay3"
			//  16px
			document.getElementById('linkOnTheWay3').style.fontSize="28px";

			//  id="linkOnTheWay4"
			//  16px
			document.getElementById('linkOnTheWay4').style.fontSize="28px";

			//  id="linkOnTheWay5"
			//  16px
			document.getElementById('linkOnTheWay5').style.fontSize="28px";





			//  id="copyrightMsg"
			//  12px
			//  <b>&nbsp;&nbsp;&nbsp;Copyright &#169; 2021 - 2022. All rights reserved.</b>
			document.getElementById('copyrightMsg').style.fontSize="38px";

 
			//  id="bestResultsMsg"
			//  12px
			//  <b>&nbsp;&nbsp;&nbsp;Best results when using the Chrome browser.</b>
			document.getElementById('bestResultsMsg').style.fontSize="38px";


			//  id="iconsProvidedMsg"
			//  12px
			//  <b>&nbsp;&nbsp;&nbsp;Icons provided via the 
			//  <a href="https://icons.getbootstrap.com/" target="_blank">Bootstrap Icons</a> collection.</b>
			document.getElementById('iconsProvidedMsg').style.fontSize="38px";

 

			//  id="iconsCopyrightMsg"
			//  12px
			//  <b>&nbsp;&nbsp;&nbsp; Bootstrap Icons are under the 
			//  <a href="https://github.com/twbs/icons/blob/main/LICENSE.md" target="_blank">MIT</a> license.</b>
			document.getElementById('iconsCopyrightMsg').style.fontSize="38px";



			//  id="iconsModifiedMsg"
			//  12px
			//  <b>&nbsp;&nbsp;&nbsp;Some icons in this collection have been modified.</b>
			document.getElementById('iconsModifiedMsg').style.fontSize="38px";




	//  id="grid-containerAndroid"
     	//  grid-template-rows: 0.3vh 95vh 0.3vh
	document.getElementById('grid-containerAndroid').style.gridTemplateRows = "0.3vh 115vh 0.3vh";

	//  id="grid-containerCAD"
     	//  grid-template-rows: 0.3vh 135vh 0.3vh
	document.getElementById('grid-containerCAD').style.gridTemplateRows = "0.3vh 135vh 0.3vh";



	//  id="grid-containerDatabase"
     	//  grid-template-rows: 0.3vh 215vh 0.3vh
	document.getElementById('grid-containerDatabase').style.gridTemplateRows = "0.3vh 220vh 0.3vh";



	//  id="grid-containerGraphics"
     	//  grid-template-rows: 0.3vh 225vh 0.3vh
	document.getElementById('grid-containerGraphics').style.gridTemplateRows = "0.3vh 155vh 0.3vh";



	//  id="grid-containerWindows"
     	//  grid-template-rows: 0.3vh 95vh 0.3vh
	document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 135vh 0.3vh";




	//  id="grid-containerMisc"
     	//  grid-template-rows: 0.3vh 190vh 0.3vh
	document.getElementById('grid-containerMisc').style.gridTemplateRows = "0.3vh 415vh 0.3vh";











			//  id="textGraphApp1"
			//  16px;">
			//  <b>Using the Canvas in C#</b>
			document.getElementById('textGraphApp1').style.fontSize="28px";



			//  id="textGraphAppCaption"
			//  14px
			document.getElementById('textGraphAppCaption').style.fontSize="28px";


			//  id="textIntroductionPre"
			//  10px
			document.getElementById('textIntroductionPre').style.fontSize="24px";


			//  id="textGraphAppCaption2"
			//  10px
			//  <b>Operating System:</b>
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;
			document.getElementById('textGraphAppCaption2').style.fontSize="24px";



			//  id="textGraphAppCaption3"
			//  10px
			//  <b>Windows 7 - 10</b>
			document.getElementById('textGraphAppCaption3').style.fontSize="24px";



			//  id="textGraphAppCaption4"
			//  10px
			//  <b>Development IDE:</b>
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;
			document.getElementById('textGraphAppCaption4').style.fontSize="24px";

			document.getElementById('textGraphAppCaption4').innerHTML=
				'<b>Development IDE:</b>' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';



			//  id="textGraphAppCaption5"
			//  10px
			//  <b>Visual Studio</b>
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			document.getElementById('textGraphAppCaption5').style.fontSize="24px";

			document.getElementById('textGraphAppCaption5').innerHTML=
				'<b>Visual Studio</b>' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';




			//  id="textGraphAppCaption6"
			//  10px
			//  <b>Language:</b>
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;
			document.getElementById('textGraphAppCaption6').style.fontSize="24px";

			document.getElementById('textGraphAppCaption6').innerHTML=
				'<b>Language:</b>' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';




			//  id="textGraphAppCaption7"
			//  10px
			//  <b>C#</b>
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			document.getElementById('textGraphAppCaption7').style.fontSize="24px";

			document.getElementById('textGraphAppCaption7').innerHTML=
				'<b>C#</b>' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';



			//  id="textGraphAppCaption8"
			//  10px
			//  <b>Demo features:</b>
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			document.getElementById('textGraphAppCaption8').style.fontSize="24px";

			document.getElementById('textGraphAppCaption8').innerHTML=
				'<b>Demo features:</b>' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
				'&nbsp;&nbsp;&nbsp;';









			//  id="textGraphAppCaption9"
			//  10px
			//  &#x2022; 1. Drawing on the Windows graphic Canvas.
			//  &nbsp;&nbsp;&nbsp;<br>
			//  &#x2022; 2. Data inspection via zoom in or zoom out.
			//  &nbsp;&nbsp;&nbsp;&nbsp;
			//  <br>
			//  &#x2022; 3. Dynamic repositioning of the viewing
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;
			//  <br>
			//  window.
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  <br>
			//  &#x2022; 4. Selectable data cursors.
			//   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  &nbsp;&nbsp;
			//  <br>
			//  &#x2022; 5. Step through the data using the cursor.
			//  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			//  </b>



			document.getElementById('textGraphAppCaption9').style.fontSize="24px";


			document.getElementById('textGraphAppCaption9').innerHTML= 
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







		   
			//	document.getElementById('textSVGanimationCaption').innerHTML=
			//	'<i>It is possible to animate an SVG. One way<br>' + 
			//	'to do so is by using <span id="textAnimationEmphasized1" ' + 
			//	'style="color:Navy;font-size:11px;"><b>JavaScript</b></span> to<br>' + 
			//	'manipulate the <span id="textAnimationEmphasized2" ' + 
			//	'style="color:Navy;font-size:11px;"><b>DOM</b></span>.<br>' + 
			//	'These are early attempts at <span id="textAnimationEmphasized3" ' + 
			//	'style="color:Navy;font-size:11px;"><b><i>animation<br>' + 
			//	'using SVG</i></b></span>. They run inside a ' + 
			//	'<span id="textAnimationEmphasized4" ' + 
			//	'style="color:Navy;font-size:11px;"><b><i>web<br>' + 
			//	'browser</i></b></span>, and were written in ' + 
			//	'<span id="textAnimationEmphasized5" ' + 
			//	'style="color:Navy;font-size:11px;"><b><i>2013</i></b></span>. A<br>' + 
			//	'short discussion of SVG animation<br>' + 
			//	'with references and examples.<br>' + 
			//	'Includes a walkthrough of the<br>' + 
			//	'code for a simple animation.' + 
			//	'</i>';







				//  id="textIntroduction" 
				//      Original     14px    
				//  document.getElementById('textIntroduction').style.fontSize="96px";


				//  id="textIntroductionEmphasized1"
				//  document.getElementById(
				//  'textIntroductionEmphasized1').style.
				//  fontSize="97px";


				//  id="textIntroductionEmphasized2"
				//  document.getElementById(
				//  'textIntroductionEmphasized2').style.
				//  fontSize="97px";


				//  document.getElementById('textIntroCaption').innerHTML="
				//  <i>Preview rendering of printed circuit<br>
				//  board produced by parsing the data files. Rendered using SVG graphics. 
				//  Early version of the software.</i>";



				//  id="textIntroCaption"
				//  Original    12px
				//  document.getElementById('textIntroCaption').style.fontSize="78px";


				//  id="pdfIcon" 
				//  width="16" height="16" 
				//  document.getElementById("pdfIcon").style.width="128px"; 
				//           document.getElementById("pdfIcon").style.height="128px";


						   



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




				//  id="svgAngularJS1"
				//  width="75" height="82"
				document.getElementById("svgAngularJS1").style.width="112px"; 
				document.getElementById("svgAngularJS1").style.height="123px";


		//  "angularJSmitLicenseMsg" 
		document.getElementById('angularJSmitLicenseMsg').style.fontSize="38px"; 


		//  "angularJSlogoMsg"
		document.getElementById('angularJSlogoMsg').style.fontSize="38px"; 

		//   "angularJSmodifiedMsg"
		document.getElementById('angularJSmodifiedMsg').style.fontSize="38px"; 










		//  "angularJStermsMsg"
		document.getElementById('angularJStermsMsg').style.fontSize="18px"; 

		//  "angularJScreativeCommonsMsg"
		document.getElementById('angularJScreativeCommonsMsg').style.fontSize="18px";


		//  "angularJSlocatedAtMsg"
		document.getElementById('angularJSlocatedAtMsg').style.fontSize="18px"; 

	//      <span id="angularJSlocatedAtMsg" style="color:Black;font-size:12px;">Located at</span><br>
	document.getElementById('angularJSlocatedAtMsg').innerHTML=
		"<center>" + 
		"Located at" +
		"<center>";



		//  <span id="angularjsCreativeCommonsLinkMsg" style="font-size:12px;">
	//	document.getElementById('angularjsCreativeCommonsLinkMsg').style.fontSize="38px"; 
	//	document.getElementById('angularJSCreativeCommonsLinkMsg').style.fontSize="48px"; 





	//   end        new Edge
}






//  if (theBrowserIsUnknown) { 
//	//  unknown browser
//
//	alert("You are using using an unrecognized browser.");
//
//	//  end      unknown browser
//  } 




// end     index.js



