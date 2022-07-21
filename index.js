
// start      index.js

//  var theBrowserIsUnknown = true;



//  alert("index.js has loaded");



//  this JavaScript file attempts to override the slight differences
//  in page rendering by different browsers

//  the goal is to provide a more consistent cross-browser experience


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
				//  document.getElementById("BootstrapIcon").style.width="64px"; 
				//           document.getElementById("BootstrapIcon").style.height="64px";


				document.getElementById('textIntroCaption').innerHTML=
					"<i>Preview rendering of printed circuit<br>" + 
					"board produced by parsing the data files. Rendered " + 
					"using SVG graphics. Early version of the software.</i>";


				//  id="textIntroCaption"
				//  Original    12px
				document.getElementById('textIntroCaption').style.fontSize="78px";

				//  id="pdfIcon" 
				//  width="16" height="16" 
				document.getElementById("pdfIcon").style.width="128px"; 
           			document.getElementById("pdfIcon").style.height="128px";


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

			//  alert("using the Firefox browser under Win10");
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



			//  id="mainPageTitleCheckMark1"
			//  16px
			//  >&#x2714; <
			document.getElementById('mainPageTitleCheckMark1').style.fontSize="36px";


			//  id="mainPageTitleCaption"
			//  16px
			//  ><b>Main Page</b><
			document.getElementById('mainPageTitleCaption').style.fontSize="36px";


			//  id="mainPageTitleCheckMark2"
			//  16px
			//  >&#x2714; <
			document.getElementById('mainPageTitleCheckMark2').style.fontSize="36px";




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


           //   end        Firefox under Win10
        }

	//   end        Firefox 
} 






if (isChrome) { 

	if (isAndroid) {
		//   begin    Chrome under Android

				   //  alert("using the Chrome browser under Android");
				   //  theBrowserIsUnknown = false;
				   
					//  id="textIntroCaption"
					//  Original    12px
					document.getElementById('textIntroCaption').style.fontSize="8px";


					document.getElementById('textIntroCaption').innerHTML=
						'<i>Preview rendering of printed circuit<br>' + 
						 'board produced by parsing the data files. Rendered using SVG ' +  
						 'graphics. Early version of the software.</i>';

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
					document.getElementById("pdfIcon").style.width="256px"; 
           			document.getElementById("pdfIcon").style.height="256px";


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
 

           	//   end       Chrome under Android
         } else {
			//   begin    Chrome others

			//  alert("using the Chrome browser on others");
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





			//  id="mainPageTitleCheckMark1"
			//  16px
			//  >&#x2714; <
			document.getElementById('mainPageTitleCheckMark1').style.fontSize="36px";


			//  id="mainPageTitleCaption"
			//  16px
			//  ><b>Main Page</b><
			document.getElementById('mainPageTitleCaption').style.fontSize="36px";


			//  id="mainPageTitleCheckMark2"
			//  16px
			//  >&#x2714; <
			document.getElementById('mainPageTitleCheckMark2').style.fontSize="36px";




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


    		//   end     Chrome others
		}

	//   end        Chrome
} 




if (isSafari) { 

	if (isiPad) { 

		//  alert("using the Safari browser on an iPad");
		//  theBrowserIsUnknown = false;

	} else if (isiPhone) { 

		//  alert("using the Safari browser on an iPhone");
		//  theBrowserIsUnknown = false;

	} else if (isMac) { 

		//  alert("using the Safari browser on a Mac");
		//  theBrowserIsUnknown = false;

	}

	//   end        Safari
} 





if (isEdge) { 

	//  alert("using the Edge browser");
	//  theBrowserIsUnknown = false;



	//   end        Edge
} 





if (isNewEdge) { 
	//   begin        new Edge

	//  alert("using the new Edge browser");
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





			//  id="mainPageTitleCheckMark1"
			//  16px
			//  >&#x2714; <
			document.getElementById('mainPageTitleCheckMark1').style.fontSize="36px";


			//  id="mainPageTitleCaption"
			//  16px
			//  ><b>Main Page</b><
			document.getElementById('mainPageTitleCaption').style.fontSize="36px";


			//  id="mainPageTitleCheckMark2"
			//  16px
			//  >&#x2714; <
			document.getElementById('mainPageTitleCheckMark2').style.fontSize="36px";




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



