<!--  index_js  -->

//  ===
// start      index.js

//  var theBrowserIsUnknown = true;

// temporary change       for testing 12345678
// temporary change 2     for testing 87654321

   // alert("index.js has loaded");


  //  alert("adjust layout using overrides" + "<br>");

//  this JavaScript file attempts to override the slight differences
//  in page rendering by different browsers

//  the goal is to provide a more consistent cross-browser experience


//  ******************************************************************
//  ***    set the sizes of some of the elements when using em     ***
//  It's not clear why this is necessary, since the sizes were already
//  declared in the HTML file. But there is an obvious difference in 
//  the quality of the text if you don't override the assignment here.
//  ******************************************************************

document.getElementById('mainPageSiteTitle').style.fontSize="4.5em";

document.getElementById('textIntroduction').style.fontSize="2.5em";
document.getElementById('textIntroductionEmphasized1').style.fontSize="1.0em";
document.getElementById('textIntroductionEmphasized2').style.fontSize="1.0em";

//  id="androidGraphicsTitle"
//  4.125em
document.getElementById('androidGraphicsTitle').style.fontSize="4.125em";

//  id="cadGraphicsTitle"
//  4.125em
document.getElementById('cadGraphicsTitle').style.fontSize="4.125em";

id="graphicsTitle"
//  4.125em
document.getElementById('graphicsTitle').style.fontSize="4.125em";

//  id="databaseGraphicsTitle"
//  4.125em
document.getElementById('databaseGraphicsTitle').style.fontSize="4.125em";

//  id="graphicGraphicsTitle"
//  4.125em
document.getElementById('graphicGraphicsTitle').style.fontSize="4.125em";

//  id="windowsGraphicsTitle"
//  4.125em
document.getElementById('windowsGraphicsTitle').style.fontSize="4.125em";

//  id="miscGraphicsTitle"
//  4.125em
document.getElementById('miscGraphicsTitle').style.fontSize="4.125em";


//      <span id="angularJSlocatedAtMsg" style="color:Black;font-size:18px;">Located at</span><br>
document.getElementById('angularJSlocatedAtMsg').innerHTML=
	"<center>" + 
	"Located at" +
	"<center>";
			
document.getElementById('copyrightMsg').style.fontSize="2.5em";
document.getElementById('bestResultsMsg').style.fontSize="2.5em";

//	document.getElementById("BootstrapIcon").style.width="6em"; 
//	document.getElementById("BootstrapIcon").style.height="6em";

document.getElementById('iconsProvidedMsg').style.fontSize="2em";
document.getElementById('iconsCopyrightMsg').style.fontSize="2em";
document.getElementById('iconsModifiedMsg').style.fontSize="2em";

//  id="linkPrivacyPolicy"
//  1.875em
document.getElementById('linkPrivacyPolicy').style.fontSize="1.875em";



//  ******************************************************************
//  The case statement below is necessary to account for discrepancies
//  in page rendering between the various browsers. It requires that we
//  fully identify the browser. Not just the OS, OS version and browser
//  version, but also the screen size.
//  ******************************************************************
//  

  //  alert("adjust layout using screen width" + "<br>");


switch(deviceScreenWidth) {
      case 360:      //  Android 
      	 //   alert("using screen width = 360" + "<br>");

         if(isChrome) {
		//  alert("Chrome Android     screen width EQUAL to 360 "); 

		//  id="grid-containerAndroid"
     		//  grid-template-rows: 0.3vh 95vh 0.3vh
		document.getElementById('grid-containerAndroid').style.gridTemplateRows = "0.3vh 115vh 0.3vh";

		//  id="grid-containerCAD"
     		//  grid-template-rows: 0.3vh 135vh 0.3vh
		document.getElementById('grid-containerCAD').style.gridTemplateRows = "0.3vh 85vh 0.3vh";

		//  id="grid-containerCloud"
     		//  grid-template-rows: 0.3vh 190vh 0.3vh
		document.getElementById('grid-containerCloud').style.gridTemplateRows = "0.3vh 300vh 0.3vh";

		//  id="grid-containerDatabase"
     		//  grid-template-rows: 0.3vh 215vh 0.3vh
		document.getElementById('grid-containerDatabase').style.gridTemplateRows = "0.3vh 250vh 0.3vh";

		//  id="grid-containerGraphics"
     		//  grid-template-rows: 0.3vh 225vh 0.3vh
		document.getElementById('grid-containerGraphics').style.gridTemplateRows = "0.3vh 140vh 0.3vh";

		//  id="grid-containerWindows"
     		//  grid-template-rows: 0.3vh 95vh 0.3vh
		document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 105vh 0.3vh";

		//  id="grid-containerMisc"
     		//  grid-template-rows: 0.3vh 190vh 0.3vh
	  	document.getElementById('grid-containerMisc').style.gridTemplateRows = "0.3vh 320vh 0.3vh";

	 }

         if(isFirefox) {
		//  alert("Firefox Android     screen width EQUAL to 360 "); 

		//  *** required by some browsers ***
		//  id="textIntroCaption"
		//  0.75em
		document.getElementById('textIntroCaption').style.fontSize="0.3em";

		//  *** required by some browsers ***
		document.getElementById('textIntroduction').style.fontSize="3.5em";
		document.getElementById('textIntroductionEmphasized1').style.fontSize="1.0em";
		document.getElementById('textIntroductionEmphasized2').style.fontSize="1.0em";


		//  id="grid-containerAndroid"
     		//  grid-template-rows: 0.3vh 95vh 0.3vh
		document.getElementById('grid-containerAndroid').style.gridTemplateRows = "0.3vh 105vh 0.3vh";

		//  id="grid-containerCAD"
     		//  grid-template-rows: 0.3vh 135vh 0.3vh
		document.getElementById('grid-containerCAD').style.gridTemplateRows = "0.3vh 85vh 0.3vh";

		//  id="grid-containerCloud"
     		//  grid-template-rows: 0.3vh 190vh 0.3vh
		document.getElementById('grid-containerCloud').style.gridTemplateRows = "0.3vh 220vh 0.3vh";

		//  id="grid-containerDatabase"
     		//  grid-template-rows: 0.3vh 215vh 0.3vh
		document.getElementById('grid-containerDatabase').style.gridTemplateRows = "0.3vh 180vh 0.3vh";

		//  id="grid-containerGraphics"
     		//  grid-template-rows: 0.3vh 225vh 0.3vh
		document.getElementById('grid-containerGraphics').style.gridTemplateRows = "0.3vh 110vh 0.3vh";

		//  id="grid-containerWindows"
     		//  grid-template-rows: 0.3vh 95vh 0.3vh
		document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 65vh 0.3vh";

		//  id="grid-containerMisc"
     		//  grid-template-rows: 0.3vh 190vh 0.3vh
	  	document.getElementById('grid-containerMisc').style.gridTemplateRows = "0.3vh 250vh 0.3vh";

	 }



         if(isNewEdge) {
            //  alert("Microsoft Edge (new) using screen width = 360" + "<br>");


         } 



         if(isEdge) {
            //  alert("Microsoft Edge (old) using screen width = 360" + "<br>"); 


         } 


         if(isAndroidEdge) {
		//  alert("Edge Android     screen width EQUAL to 360 "); 

		//  *** required by some browsers ***
		//  id="textIntroCaption"
		//  0.75em
		document.getElementById('textIntroCaption').style.fontSize="0.7em";



		//  id="grid-containerAndroid"
     		//  grid-template-rows: 0.3vh 95vh 0.3vh
		document.getElementById('grid-containerAndroid').style.gridTemplateRows = "0.3vh 115vh 0.3vh";

		//  id="grid-containerCAD"
     		//  grid-template-rows: 0.3vh 135vh 0.3vh
		document.getElementById('grid-containerCAD').style.gridTemplateRows = "0.3vh 85vh 0.3vh";

		//  id="grid-containerCloud"
     		//  grid-template-rows: 0.3vh 190vh 0.3vh
		document.getElementById('grid-containerCloud').style.gridTemplateRows = "0.3vh 330vh 0.3vh";

		//  id="grid-containerDatabase"
     		//  grid-template-rows: 0.3vh 215vh 0.3vh
		document.getElementById('grid-containerDatabase').style.gridTemplateRows = "0.3vh 220vh 0.3vh";

		//  id="grid-containerGraphics"
     		//  grid-template-rows: 0.3vh 225vh 0.3vh
		document.getElementById('grid-containerGraphics').style.gridTemplateRows = "0.3vh 140vh 0.3vh";

		//  id="grid-containerWindows"
     		//  grid-template-rows: 0.3vh 95vh 0.3vh
		document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 105vh 0.3vh";

		//  id="grid-containerMisc"
     		//  grid-template-rows: 0.3vh 190vh 0.3vh
	  	document.getElementById('grid-containerMisc').style.gridTemplateRows = "0.3vh 320vh 0.3vh";




         }

         break;
      case 375:      //  iPad, iPhone
      	 //   alert("using screen width = 375" + "<br>");

	 if (isSafari && isiPhone) {
		//  alert("Safari iPhone     screen width EQUAL to 375 "); 

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

		//  id="grid-containerWindows"
     		//  grid-template-rows: 0.3vh 95vh 0.3vh
		document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 25vh 0.3vh";

		//  id="grid-containerMisc"
     		//  grid-template-rows: 0.3vh 190vh 0.3vh
		document.getElementById('grid-containerMisc').style.gridTemplateRows = "0.3vh 110vh 0.3vh";

	 }



         break;
      case 390:      //  iPad, iPhone
      	 //   alert("using screen width = 390" + "<br>");

	if (isSafari && isiPhone) {
		//  alert("Safari iPhone     screen width EQUAL to 390 "); 

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

		//  id="grid-containerWindows"
     		//  grid-template-rows: 0.3vh 95vh 0.3vh
		document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 25vh 0.3vh";

		//  id="grid-containerMisc"
     		//  grid-template-rows: 0.3vh 190vh 0.3vh
		document.getElementById('grid-containerMisc').style.gridTemplateRows = "0.3vh 110vh 0.3vh";

	}


         break;
     case 408:      //  Android
     	 //	alert("using screen width = 408" + "<br>");


			switch(deviceScreenHeight) {
				case 929:      
         				//  alert("using screen width = 408    screen height = 929" + "<br>");

				         if(isFirefox) {
                     
	    	  			//	alert("Firefox Android  -  screen width = 408, screen height = 929 "); 

						//  *** required by some browsers ***
						document.getElementById('textIntroduction').style.fontSize="3.5em";
						document.getElementById('textIntroductionEmphasized1').style.fontSize="1.0em";
						document.getElementById('textIntroductionEmphasized2').style.fontSize="1.0em";

			
			//  id="grid-containerAndroid"
   			//  grid-template-rows: 0.3vh 95vh 0.3vh
			document.getElementById('grid-containerAndroid').style.gridTemplateRows = "0.3vh 65vh 0.3vh";

			//  id="grid-containerCAD"
     			//  grid-template-rows: 0.3vh 135vh 0.3vh
			document.getElementById('grid-containerCAD').style.gridTemplateRows = "0.3vh 65vh 0.3vh";

			//  id="grid-containerCloud"
     			//  grid-template-rows: 0.3vh 190vh 0.3vh
			document.getElementById('grid-containerCloud').style.gridTemplateRows = "0.3vh 150vh 0.3vh";

			//  id="grid-containerDatabase"
     			//  grid-template-rows: 0.3vh 215vh 0.3vh
			document.getElementById('grid-containerDatabase').style.gridTemplateRows = "0.3vh 150vh 0.3vh";

			//  id="grid-containerGraphics"
     			//  grid-template-rows: 0.3vh 225vh 0.3vh
			document.getElementById('grid-containerGraphics').style.gridTemplateRows = "0.3vh 80vh 0.3vh";

			//  id="grid-containerWindows"
     			//  grid-template-rows: 0.3vh 95vh 0.3vh
			document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 55vh 0.3vh";


	               //  id="grid-containerTest"
     		       //  grid-template-rows: 0.3vh 140vh 0.3vh
		       document.getElementById("grid-containerTest").style.gridTemplateRows = "0.3vh 80vh 0.3vh";


			//  id="grid-containerMisc"
     			//  grid-template-rows: 0.3vh 190vh 0.3vh
	  		document.getElementById('grid-containerMisc').style.gridTemplateRows = "0.3vh 140vh 0.3vh";
                
             
	 	}



	         		break;
      				default:
   
				//  end switch
			}
                           
       	 break;
     case 412:      //  Android
     		//	alert("using screen width = 412" + "<br>");

         if(isChrome) {
                     
	    	//	  alert("Chrome Android  -  screen width EQUAL to 412 "); 

		//  id="grid-containerAndroid"
     		//  grid-template-rows: 0.3vh 95vh 0.3vh
		document.getElementById('grid-containerAndroid').style.gridTemplateRows = "0.3vh 85vh 0.3vh";

		//  id="grid-containerCAD"
     		//  grid-template-rows: 0.3vh 135vh 0.3vh
		document.getElementById('grid-containerCAD').style.gridTemplateRows = "0.3vh 65vh 0.3vh";

		//  id="grid-containerCloud"
     		//  grid-template-rows: 0.3vh 190vh 0.3vh
		document.getElementById('grid-containerCloud').style.gridTemplateRows = "0.3vh 120vh 0.3vh";

		//  id="grid-containerDatabase"
     		//  grid-template-rows: 0.3vh 215vh 0.3vh
		document.getElementById('grid-containerDatabase').style.gridTemplateRows = "0.3vh 160vh 0.3vh";

		//  id="grid-containerGraphics"
     		//  grid-template-rows: 0.3vh 225vh 0.3vh
		document.getElementById('grid-containerGraphics').style.gridTemplateRows = "0.3vh 100vh 0.3vh";


// for some reason is not changing
		//  id="grid-containerWindows"
     		//  grid-template-rows: 0.3vh 95vh 0.3vh
		document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 40vh 0.3vh";

	        //  id="grid-containerTest"
     		//  grid-template-rows: 0.3vh 140vh 0.3vh
		document.getElementById("grid-containerTest").style.gridTemplateRows = "0.3vh 100vh 0.3vh";


// for some reason is not changing
//  alert("Chrome Android  -  screen width 412 - set Misc");

		//  id="grid-containerMisc"
     		//  grid-template-rows: 0.3vh 190vh 0.3vh
	  	document.getElementById('grid-containerMisc').style.gridTemplateRows = "0.3vh 100vh 0.3vh";

//  the command executes but the layout doesnt change
//     alert("Chrome Android  -  screen width 412 - set Misc was successful");
             
             
	 }




         if(isAndroidEdge) {
		//  alert("Edge Android     screen width EQUAL to 412 "); 
	 }

                        
	    	switch(deviceScreenHeight) {
	    		case 922:      
         		//	alert("using screen height = 922" + "<br>");
                    
	         	break;
      	    		case 938:      
         			//  alert("EDGE Android using screen width = 412   screen height = 938" + "<br>"); 


		//  *** required by some browsers ***
		//  id="textIntroCaption"
		//  0.75em
		document.getElementById('textIntroCaption').style.fontSize="0.7em";



		//  id="grid-containerAndroid"
     		//  grid-template-rows: 0.3vh 95vh 0.3vh
		document.getElementById('grid-containerAndroid').style.gridTemplateRows = "0.3vh 85vh 0.3vh";

		//  id="grid-containerCAD"
     		//  grid-template-rows: 0.3vh 135vh 0.3vh
		document.getElementById('grid-containerCAD').style.gridTemplateRows = "0.3vh 65vh 0.3vh";

		//  id="grid-containerCloud"
     		//  grid-template-rows: 0.3vh 190vh 0.3vh
		document.getElementById('grid-containerCloud').style.gridTemplateRows = "0.3vh 190vh 0.3vh";

		//  id="grid-containerDatabase"
     		//  grid-template-rows: 0.3vh 215vh 0.3vh
		document.getElementById('grid-containerDatabase').style.gridTemplateRows = "0.3vh 200vh 0.3vh";

		//  id="grid-containerGraphics"
     		//  grid-template-rows: 0.3vh 225vh 0.3vh
		document.getElementById('grid-containerGraphics').style.gridTemplateRows = "0.3vh 100vh 0.3vh";

		//  id="grid-containerWindows"
     		//  grid-template-rows: 0.3vh 95vh 0.3vh
		document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 85vh 0.3vh";

	        //  id="grid-containerTest"
     		//  grid-template-rows: 0.3vh 140vh 0.3vh
		document.getElementById("grid-containerTest").style.gridTemplateRows = "0.3vh 100vh 0.3vh";

		//  id="grid-containerMisc"
     		//  grid-template-rows: 0.3vh 190vh 0.3vh
	  	document.getElementById('grid-containerMisc').style.gridTemplateRows = "0.3vh 170vh 0.3vh";
                


	         	break;
      	     		default:
                          
	       		//  end switch
	 	}
                    
         break;
      case 414:      //  iPad, iPhone
	//   alert("using screen width = 414" + "<br>");

	if (isSafari && isiPhone) {

		//  alert("Safari iPhone     screen width EQUAL to 414 "); 

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

		//  id="grid-containerWindows"
     		//  grid-template-rows: 0.3vh 95vh 0.3vh
		document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 25vh 0.3vh";

		//  id="grid-containerMisc"
     		//  grid-template-rows: 0.3vh 190vh 0.3vh
		document.getElementById('grid-containerMisc').style.gridTemplateRows = "0.3vh 110vh 0.3vh";

	}


        break;
      case 768:      //  iPad
      	//   alert("using screen width = 768" + "<br>"); 

	if (isSafari && isiPad) { 

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

		//  id="grid-containerWindows"
     		//  grid-template-rows: 0.3vh 95vh 0.3vh
		document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 25vh 0.3vh";

		//  id="grid-containerMisc"
     		//  grid-template-rows: 0.3vh 190vh 0.3vh
		document.getElementById('grid-containerMisc').style.gridTemplateRows = "0.3vh 110vh 0.3vh";

	}


         break;
      case 820:      //  iPad
      	//   alert("using screen width = 820" + "<br>"); 

	if (isSafari && isiPad) { 
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

		//  id="grid-containerWindows"
     		//  grid-template-rows: 0.3vh 95vh 0.3vh
		document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 25vh 0.3vh";

		//  id="grid-containerMisc"
     		//  grid-template-rows: 0.3vh 190vh 0.3vh
		document.getElementById('grid-containerMisc').style.gridTemplateRows = "0.3vh 110vh 0.3vh";

	}

         break;
      case 1133:     //  Android
      //   alert("using screen width = 1133" + "<br>");

         if(isChrome) {
            //  alert("Chrome using screen width = 1133" + "<br>");
         } 

         if(isFirefox) {
            //	  alert("Firefox using screen width = 1133" + "<br>"); 

			//  id="grid-containerAndroid"
     			//  grid-template-rows: 0.3vh 95vh 0.3vh
			document.getElementById('grid-containerAndroid').style.gridTemplateRows = "0.3vh 140vh 0.3vh";

			//  id="grid-containerCAD"
     			//  grid-template-rows: 0.3vh 135vh 0.3vh
			document.getElementById('grid-containerCAD').style.gridTemplateRows = "0.3vh 140vh 0.3vh";

			//  id="grid-containerCloud"
     			//  grid-template-rows: 0.3vh 170vh 0.3vh
			document.getElementById('grid-containerCloud').style.gridTemplateRows = "0.3vh 260vh 0.3vh";

			//  id="grid-containerDatabase"
     			//  grid-template-rows: 0.3vh 215vh 0.3vh
			document.getElementById('grid-containerDatabase').style.gridTemplateRows = "0.3vh 300vh 0.3vh";

			//  id="grid-containerGraphics"
     			//  grid-template-rows: 0.3vh 225vh 0.3vh
			document.getElementById('grid-containerGraphics').style.gridTemplateRows = "0.3vh 160vh 0.3vh";

			//  id="grid-containerWindows"
     			//  grid-template-rows: 0.3vh 95vh 0.3vh
			document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 130vh 0.3vh";

			//  id="grid-containerTest"
     			//  grid-template-rows: 0.3vh 140vh 0.3vh
			document.getElementById("grid-containerTest").style.gridTemplateRows = "0.3vh 160vh 0.3vh";

			//  id="grid-containerMisc"
     			//  grid-template-rows: 0.3vh 170vh 0.3vh
			document.getElementById("grid-containerMisc").style.gridTemplateRows = "0.3vh 260vh 0.3vh";


         } 

         if(isNewEdge) {
            //  alert("Microsoft Edge (new) using screen width = 1133" + "<br>");
         } 

         if(isEdge) {
            //  alert("Microsoft Edge (old) using screen width = 1133" + "<br>"); 
         } 


         break;
      case 1143:     //  Android
      //   alert("using screen width = 1143" + "<br>"); 

         if(isChrome) {
            	//  alert("Chrome using screen width = 1143" + "<br>"); 
		//  alert("Chrome Android     screen width EQUAL to 1143 "); 

			//  id="grid-containerAndroid"
     			//  grid-template-rows: 0.3vh 95vh 0.3vh
			document.getElementById('grid-containerAndroid').style.gridTemplateRows = "0.3vh 135vh 0.3vh";

			//  id="grid-containerCAD"
     			//  grid-template-rows: 0.3vh 135vh 0.3vh
			document.getElementById('grid-containerCAD').style.gridTemplateRows = "0.3vh 140vh 0.3vh";

			//  id="grid-containerCloud"
     			//  grid-template-rows: 0.3vh 170vh 0.3vh
			document.getElementById('grid-containerCloud').style.gridTemplateRows = "0.3vh 280vh 0.3vh";

			//  id="grid-containerDatabase"
     			//  grid-template-rows: 0.3vh 215vh 0.3vh
			document.getElementById('grid-containerDatabase').style.gridTemplateRows = "0.3vh 320vh 0.3vh";

			//  id="grid-containerGraphics"
     			//  grid-template-rows: 0.3vh 225vh 0.3vh
			document.getElementById('grid-containerGraphics').style.gridTemplateRows = "0.3vh 160vh 0.3vh";

			//  id="grid-containerWindows"
     			//  grid-template-rows: 0.3vh 95vh 0.3vh
			document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 115vh 0.3vh";

			//  id="grid-containerTest"
     			//  grid-template-rows: 0.3vh 140vh 0.3vh
			document.getElementById("grid-containerTest").style.gridTemplateRows = "0.3vh 160vh 0.3vh";

			//  id="grid-containerMisc"
     			//  grid-template-rows: 0.3vh 170vh 0.3vh
			document.getElementById("grid-containerMisc").style.gridTemplateRows = "0.3vh 280vh 0.3vh";


         } 

         if(isFirefox) {
            //  alert("Firefox using screen width = 1143"); 
         } 

         if(isAndroidEdge) {
            	 // alert("Microsoft Edge (Android) using screen width = 1143"); 

			//  id="grid-containerAndroid"
     			//  grid-template-rows: 0.3vh 95vh 0.3vh
			document.getElementById('grid-containerAndroid').style.gridTemplateRows = "0.3vh 135vh 0.3vh";

			//  id="grid-containerCAD"
     			//  grid-template-rows: 0.3vh 135vh 0.3vh
			document.getElementById('grid-containerCAD').style.gridTemplateRows = "0.3vh 125vh 0.3vh";

			//  id="grid-containerCloud"
     			//  grid-template-rows: 0.3vh 170vh 0.3vh
			document.getElementById('grid-containerCloud').style.gridTemplateRows = "0.3vh 270vh 0.3vh";

			//  id="grid-containerDatabase"
     			//  grid-template-rows: 0.3vh 215vh 0.3vh
			document.getElementById('grid-containerDatabase').style.gridTemplateRows = "0.3vh 310vh 0.3vh";

			//  id="grid-containerGraphics"
     			//  grid-template-rows: 0.3vh 225vh 0.3vh
			document.getElementById('grid-containerGraphics').style.gridTemplateRows = "0.3vh 160vh 0.3vh";

			//  id="grid-containerWindows"
     			//  grid-template-rows: 0.3vh 95vh 0.3vh
			document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 115vh 0.3vh";


			//  id="grid-containerTest"
     			//  grid-template-rows: 0.3vh 140vh 0.3vh
			document.getElementById("grid-containerTest").style.gridTemplateRows = "0.3vh 160vh 0.3vh";


			//  id="grid-containerMisc"
     			//  grid-template-rows: 0.3vh 170vh 0.3vh
			document.getElementById("grid-containerMisc").style.gridTemplateRows = "0.3vh 280vh 0.3vh";

         } 

         if(isNewEdge) {
            //  alert("Microsoft Edge (new) using screen width = 1143" + "<br>");
         } 

         if(isEdge) {
            //  alert("Microsoft Edge (old) using screen width = 1143" + "<br>"); 
         } 

         break;
       	 case 1280:     //  Win10
         	//	alert("using screen width = 1280" + "<br>"); 
                            
         		if(isChrome) {
            			//  alert("Chrome using screen width = 1280" + "<br>");
         		} 
                        
         		if(isFirefox) {
            			//  alert("Firefox using screen width = 1280" + "<br>"); 
         		} 
                           
         		if(isNewEdge) {
            			//  alert("Microsoft Edge (new) using screen width = 1280" + "<br>"); 
         		} 
                     
         		if(isEdge) {
            			//  alert("Microsoft Edge (old) using screen width = 1280" + "<br>"); 
         		} 
                   
         break;
      	 case 1366:     //  Win10
       	 	//   alert("using screen width = 1366" + "<br>"); 
                  
	 	if(isChrome) {
            		//  alert("Chrome using screen width = 1366" + "<br>"); 
         	} 
                        
         	if(isFirefox) {
            		//  alert("Firefox using screen width = 1366" + "<br>"); 
         	} 
                      
         	if(isNewEdge) {
            		//  alert("Microsoft Edge (new) using screen width = 1366" + "<br>"); 
         	} 
                         
         	if(isEdge) {
            		//  alert("Microsoft Edge (old) using screen width = 1366" + "<br>"); 
         	} 
                      
                    
         break;
      	 case 1536:     //  Win10
      		//	   alert("using screen width = 1536" + "<br>");
                           
         	if(isChrome) {
            	//	  window.alert("Chrome using screen width = 1536" + "<br>");

			//  id="grid-containerAndroid"
     			//  grid-template-rows: 0.3vh 95vh 0.3vh
			document.getElementById('grid-containerAndroid').style.gridTemplateRows = "0.3vh 105vh 0.3vh";

			//  id="grid-containerCAD"
     			//  grid-template-rows: 0.3vh 135vh 0.3vh
			document.getElementById('grid-containerCAD').style.gridTemplateRows = "0.3vh 125vh 0.3vh";

			//  id="grid-containerCloud"
     			//  grid-template-rows: 0.3vh 170vh 0.3vh
			document.getElementById('grid-containerCloud').style.gridTemplateRows = "0.3vh 200vh 0.3vh";

			//  id="grid-containerDatabase"
     			//  grid-template-rows: 0.3vh 215vh 0.3vh
			document.getElementById('grid-containerDatabase').style.gridTemplateRows = "0.3vh 250vh 0.3vh";

			//  id="grid-containerGraphics"
     			//  grid-template-rows: 0.3vh 225vh 0.3vh
			document.getElementById('grid-containerGraphics').style.gridTemplateRows = "0.3vh 115vh 0.3vh";

			//  id="grid-containerWindows"
     			//  grid-template-rows: 0.3vh 95vh 0.3vh
			document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 85vh 0.3vh";

			//  id="grid-containerTest"
     			//  grid-template-rows: 0.3vh 140vh 0.3vh
			document.getElementById("grid-containerTest").style.gridTemplateRows = "0.3vh 110vh 0.3vh";


			//  id="grid-containerMisc"
     			//  grid-template-rows: 0.3vh 170vh 0.3vh
			document.getElementById("grid-containerMisc").style.gridTemplateRows = "0.3vh 210vh 0.3vh";


         	} 
                          
         	if(isFirefox) {
            		//  alert("Firefox using screen width = 1536" + "<br>");
			//  alert("using the Firefox browser under Win10");


			//  id="grid-containerAndroid"
     			//  grid-template-rows: 0.3vh 95vh 0.3vh
			document.getElementById('grid-containerAndroid').style.gridTemplateRows = "0.3vh 125vh 0.3vh";

			//  id="grid-containerCAD"
     			//  grid-template-rows: 0.3vh 135vh 0.3vh
			document.getElementById('grid-containerCAD').style.gridTemplateRows = "0.3vh 125vh 0.3vh";

			//  id="grid-containerCloud"
     			//  grid-template-rows: 0.3vh 170vh 0.3vh
			document.getElementById('grid-containerCloud').style.gridTemplateRows = "0.3vh 240vh 0.3vh";

			//  id="grid-containerDatabase"
     			//  grid-template-rows: 0.3vh 215vh 0.3vh
			document.getElementById('grid-containerDatabase').style.gridTemplateRows = "0.3vh 300vh 0.3vh";

			//  id="grid-containerGraphics"
     			//  grid-template-rows: 0.3vh 225vh 0.3vh
			document.getElementById('grid-containerGraphics').style.gridTemplateRows = "0.3vh 145vh 0.3vh";

			//  id="grid-containerWindows"
     			//  grid-template-rows: 0.3vh 95vh 0.3vh
			document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 105vh 0.3vh";

			//  id="grid-containerTest"
     			//  grid-template-rows: 0.3vh 140vh 0.3vh
			document.getElementById("grid-containerTest").style.gridTemplateRows = "0.3vh 140vh 0.3vh";

			//  id="grid-containerMisc"
     			//  grid-template-rows: 0.3vh 190vh 0.3vh
			document.getElementById('grid-containerMisc').style.gridTemplateRows = "0.3vh 250vh 0.3vh";

         	} 
                        
         	if(isNewEdge) {
            		//  alert("Microsoft Edge (new) using screen width = 1536" + "<br>");

			//  id="grid-containerAndroid"
     			//  grid-template-rows: 0.3vh 95vh 0.3vh
			document.getElementById('grid-containerAndroid').style.gridTemplateRows = "0.3vh 125vh 0.3vh";

			//  id="grid-containerCAD"
     			//  grid-template-rows: 0.3vh 135vh 0.3vh
			document.getElementById('grid-containerCAD').style.gridTemplateRows = "0.3vh 135vh 0.3vh";

			//  id="grid-containerCloud"
     			//  grid-template-rows: 0.3vh 170vh 0.3vh
			document.getElementById('grid-containerCloud').style.gridTemplateRows = "0.3vh 260vh 0.3vh";

			//  id="grid-containerDatabase"
     			//  grid-template-rows: 0.3vh 215vh 0.3vh
			document.getElementById('grid-containerDatabase').style.gridTemplateRows = "0.3vh 300vh 0.3vh";

			//  id="grid-containerGraphics"
     			//  grid-template-rows: 0.3vh 225vh 0.3vh
			document.getElementById('grid-containerGraphics').style.gridTemplateRows = "0.3vh 155vh 0.3vh";

			//  id="grid-containerWindows"
     			//  grid-template-rows: 0.3vh 95vh 0.3vh
			document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 115vh 0.3vh";


			//  id="grid-containerTest"
     			//  grid-template-rows: 0.3vh 140vh 0.3vh
			document.getElementById("grid-containerTest").style.gridTemplateRows = "0.3vh 140vh 0.3vh";


			//  id="grid-containerMisc"
     			//  grid-template-rows: 0.3vh 190vh 0.3vh
			document.getElementById('grid-containerMisc').style.gridTemplateRows = "0.3vh 250vh 0.3vh";

         	} 
                      
         	if(isEdge) {
            		//  alert("Microsoft Edge (old) using screen width = 1536" + "<br>");

			//  id="grid-containerAndroid"
     			//  grid-template-rows: 0.3vh 95vh 0.3vh
			document.getElementById('grid-containerAndroid').style.gridTemplateRows = "0.3vh 125vh 0.3vh";

			//  id="grid-containerCAD"
     			//  grid-template-rows: 0.3vh 135vh 0.3vh
			document.getElementById('grid-containerCAD').style.gridTemplateRows = "0.3vh 135vh 0.3vh";

			//  id="grid-containerCloud"
     			//  grid-template-rows: 0.3vh 170vh 0.3vh
			document.getElementById('grid-containerCloud').style.gridTemplateRows = "0.3vh 260vh 0.3vh";

			//  id="grid-containerDatabase"
     			//  grid-template-rows: 0.3vh 215vh 0.3vh
			document.getElementById('grid-containerDatabase').style.gridTemplateRows = "0.3vh 260vh 0.3vh";

			//  id="grid-containerGraphics"
     			//  grid-template-rows: 0.3vh 225vh 0.3vh
			document.getElementById('grid-containerGraphics').style.gridTemplateRows = "0.3vh 155vh 0.3vh";

			//  id="grid-containerWindows"
     			//  grid-template-rows: 0.3vh 95vh 0.3vh
			document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 115vh 0.3vh";


			//  id="grid-containerTest"
     			//  grid-template-rows: 0.3vh 140vh 0.3vh
			document.getElementById("grid-containerTest").style.gridTemplateRows = "0.3vh 140vh 0.3vh";


			//  id="grid-containerMisc"
     			//  grid-template-rows: 0.3vh 190vh 0.3vh
			document.getElementById('grid-containerMisc').style.gridTemplateRows = "0.3vh 280vh 0.3vh";

         	} 
                   
                    
         break;
      	 case 1707:     //  Win10
      	 	//   alert("using screen width = 1707" + "<br>");
                        
         	if(isChrome) {
            		//  alert("Chrome using screen width = 1707" + "<br>");


			//  id="grid-containerAndroid"
     			//  grid-template-rows: 0.3vh 95vh 0.3vh
			document.getElementById('grid-containerAndroid').style.gridTemplateRows = "0.3vh 85vh 0.3vh";

			//  id="grid-containerCAD"
     			//  grid-template-rows: 0.3vh 135vh 0.3vh
			document.getElementById('grid-containerCAD').style.gridTemplateRows = "0.3vh 145vh 0.3vh";

			//  id="grid-containerCloud"
     			//  grid-template-rows: 0.3vh 170vh 0.3vh
			document.getElementById('grid-containerCloud').style.gridTemplateRows = "0.3vh 260vh 0.3vh";

			//  id="grid-containerDatabase"
     			//  grid-template-rows: 0.3vh 215vh 0.3vh
			document.getElementById('grid-containerDatabase').style.gridTemplateRows = "0.3vh 220vh 0.3vh";

			//  id="grid-containerGraphics"
     			//  grid-template-rows: 0.3vh 225vh 0.3vh
			document.getElementById('grid-containerGraphics').style.gridTemplateRows = "0.3vh 185vh 0.3vh";

			//  id="grid-containerWindows"
     			//  grid-template-rows: 0.3vh 95vh 0.3vh
			document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 135vh 0.3vh";

			//  id="grid-containerMisc"
     			//  grid-template-rows: 0.3vh 170vh 0.3vh
			document.getElementById("grid-containerMisc").style.gridTemplateRows = "0.3vh 270vh 0.3vh";




         	} 
                          
         	if(isFirefox) {
            		//  alert("Firefox using screen width = 1707" + "<br>");
			//  alert("using the Firefox browser under Win10");

			//  id="grid-containerAndroid"
     			//  grid-template-rows: 0.3vh 95vh 0.3vh
			document.getElementById('grid-containerAndroid').style.gridTemplateRows = "0.3vh 115vh 0.3vh";

			//  id="grid-containerCAD"
     			//  grid-template-rows: 0.3vh 135vh 0.3vh
			document.getElementById('grid-containerCAD').style.gridTemplateRows = "0.3vh 135vh 0.3vh";

			//  id="grid-containerCloud"
     			//  grid-template-rows: 0.3vh 170vh 0.3vh
			document.getElementById('grid-containerCloud').style.gridTemplateRows = "0.3vh 240vh 0.3vh";

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
			document.getElementById('grid-containerMisc').style.gridTemplateRows = "0.3vh 250vh 0.3vh"

         	} 
                               
         	if(isNewEdge) {
            		//  alert("Microsoft Edge (new) using screen width = 1707" + "<br>");


			document.getElementById('textIntroduction').innerHTML += "<br><br><br><br><br>";

			//  id="grid-containerAndroid"
     			//  grid-template-rows: 0.3vh 95vh 0.3vh
			document.getElementById('grid-containerAndroid').style.gridTemplateRows = "0.3vh 135vh 0.3vh";

			//  id="grid-containerCAD"
     			//  grid-template-rows: 0.3vh 135vh 0.3vh
			document.getElementById('grid-containerCAD').style.gridTemplateRows = "0.3vh 155vh 0.3vh";

			//  id="grid-containerCloud"
     			//  grid-template-rows: 0.3vh 170vh 0.3vh
			document.getElementById('grid-containerCloud').style.gridTemplateRows = "0.3vh 320vh 0.3vh";

			//  id="grid-containerDatabase"
     			//  grid-template-rows: 0.3vh 215vh 0.3vh
			document.getElementById('grid-containerDatabase').style.gridTemplateRows = "0.3vh 280vh 0.3vh";

			//  id="grid-containerGraphics"
     			//  grid-template-rows: 0.3vh 225vh 0.3vh
			document.getElementById('grid-containerGraphics').style.gridTemplateRows = "0.3vh 205vh 0.3vh";

			//  id="grid-containerWindows"
     			//  grid-template-rows: 0.3vh 95vh 0.3vh
			document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 135vh 0.3vh";

			//  id="grid-containerMisc"
     			//  grid-template-rows: 0.3vh 190vh 0.3vh
			document.getElementById('grid-containerMisc').style.gridTemplateRows = "0.3vh 360vh 0.3vh"

         	} 
                           
         	if(isEdge) {
            		//  alert("Microsoft Edge (old) using screen width = 1707" + "<br>");

			//  id="grid-containerAndroid"
     			//  grid-template-rows: 0.3vh 95vh 0.3vh
			document.getElementById('grid-containerAndroid').style.gridTemplateRows = "0.3vh 85vh 0.3vh";

		        //  66px works but 4.125em doesnt work
			//  trying to override it here also does not work
			//  document.getElementById('androidGraphicsTitle').style.fontSize="8em";

			//  id="grid-containerCAD"
     			//  grid-template-rows: 0.3vh 135vh 0.3vh
			document.getElementById('grid-containerCAD').style.gridTemplateRows = "0.3vh 105vh 0.3vh";

			//  id="grid-containerCloud"
     			//  grid-template-rows: 0.3vh 170vh 0.3vh
			document.getElementById('grid-containerCloud').style.gridTemplateRows = "0.3vh 200vh 0.3vh";

			//  id="grid-containerDatabase"
     			//  grid-template-rows: 0.3vh 215vh 0.3vh
			document.getElementById('grid-containerDatabase').style.gridTemplateRows = "0.3vh 190vh 0.3vh";

			//  id="grid-containerGraphics"
     			//  grid-template-rows: 0.3vh 225vh 0.3vh
			document.getElementById('grid-containerGraphics').style.gridTemplateRows = "0.3vh 155vh 0.3vh";

			//  id="grid-containerWindows"
     			//  grid-template-rows: 0.3vh 95vh 0.3vh
			document.getElementById('grid-containerWindows').style.gridTemplateRows = "0.3vh 105vh 0.3vh";

			//  id="grid-containerMisc"
     			//  grid-template-rows: 0.3vh 190vh 0.3vh
			document.getElementById('grid-containerMisc').style.gridTemplateRows = "0.3vh 220vh 0.3vh";


         	} 
                      
                      
         break;
      	 default:
		//  if (theBrowserIsUnknown) { 
		//	//  unknown browser
		//
		//	alert("You are using using an unrecognized browser.");
		//
		//	//  end      unknown browser
		//  } 

   //  end switch
}




// end     index.js


