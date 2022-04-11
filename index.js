<!--  index_js  -->



// start      index.js


//  this JavaScript file attempts to override the slight differences
//  in page rendering by different browsers

//  the goal is to provide a more consistent cross-browser experience








   if (isFirefox) { 
           //   begin      Firefox 



       if (isAndroid) {
           //   begin      Firefox under Android

           //  alert("Firefox under Android");


                   if (isAndroid5) { 

                      // begin     Firefox under Android5

                      // id="textIntroduction" 
                      // Original 14px document.getElementById('textIntroduction').style.fontSize="18px"; 
                      // id="textIntroductionEmphasized1" document.getElementById('textIntroductionEmphasized1').style.fontSize="19px"; 
                      // id="textIntroductionEmphasized2" document.getElementById('textIntroductionEmphasized2').style.fontSize="19px";

                      // the references section overlaps the 
                      // introduction.
                      // id="verticalSpacer1"
                      // font-size 19px; 
                      document.getElementById('verticalSpacer1').innerHTML="<br><br><br><br>";

                      //  adjust the size of the
                      //  Bootstrap icon
                      //  id="BootstrapIcon"           
             //         document.getElementById("BootstrapIcon").style.width="32px"; 
             //         document.getElementById("BootstrapIcon").style.height="32px";

                      //  id="textIntroduction" 
                      //      Original     14px    
              //       document.getElementById('textIntroduction').style.fontSize="48px";

                      //  id="textIntroductionEmphasized1"
               //       document.getElementById('textIntroductionEmphasized1').style.fontSize="49px";

                      //  id="textIntroductionEmphasized2"
              //        document.getElementById('textIntroductionEmphasized2').style.fontSize="49px";

                      //  id="textIntroCaption"
                      //  Original    12px
               //       document.getElementById('textIntroCaption').style.fontSize="3px";


                   // end Firefox under Android5 
                   } else {
                        //  others


                        //  adjust the size of the
                        //  Bootstrap icon
                        //  id="BootstrapIcon"           
                  //      document.getElementById("BootstrapIcon").style.width="32px"; 
                  //      document.getElementById("BootstrapIcon").style.height="32px";

                        //  id="textIntroduction" 
                        //      Original     14px    
                  //      document.getElementById('textIntroduction').style.fontSize="48px";

                        //  id="textIntroductionEmphasized1"
                  //      document.getElementById('textIntroductionEmphasized1').style.fontSize="49px";

                        //  id="textIntroductionEmphasized2"
                   //     document.getElementById('textIntroductionEmphasized2').style.fontSize="49px";

                        //  id="textIntroCaption"
                        //  Original    12px
                   //     document.getElementById('textIntroCaption').style.fontSize="3px";




			//  adjust the size of the
			//  Bootstrap icon
			//  id="BootstrapIcon"           document.getElementById("BootstrapIcon").style.width="64px"; 
           //		document.getElementById("BootstrapIcon").style.height="64px";



			document.getElementById('textIntroCaption').innerHTML="<i>Preview rendering of printed circuit<br>
			board produced by parsing the data files. Rendered using SVG graphics. Early version of the software.</i>";



			//  id="textIntroCaption"
			//  Original    12px
		//	document.getElementById('textIntroCaption').style.fontSize="78px";


			//  id="pdfIcon" 
			//  width="16" height="16" 
		//	document.getElementById("pdfIcon").style.width="128px"; 
           	//	document.getElementById("pdfIcon").style.height="128px";



                        //  end     others
                   }








           //   end        Firefox under Android
        } 

        if (isWin10) {
           //   begin      Firefox under Win10


           //  id="textIntroduction" 
           //      Original     14px    
           document.getElementById('textIntroduction').style.fontSize="24px";

           //  id="textIntroductionEmphasized1"
           document.getElementById('textIntroductionEmphasized1').style.fontSize="25px";

           //  id="textIntroductionEmphasized2"
           document.getElementById('textIntroductionEmphasized2').style.fontSize="25px";



           //   end        Firefox under Win10
        } 




           //   end        Firefox 
   } else if (isChrome) { 


        if (isAndroid) {
           //   begin    Chrome under Android

           //  alert("Chrome under Android");


	  //  id="textIntroCaption"
	  //  Original    12px
	  document.getElementById('textIntroCaption').style.fontSize="8px";


	  document.getElementById('textIntroCaption').innerHTML="<i>Preview rendering of printed circuit<br>
 	  board produced by parsing the data files. Rendered using SVG graphics. Early version of the software.</i>";



	  // Necessary for Chrome Android
	  //   id="verticalSpacer0" 
	  //   19px

	  document.getElementById('verticalSpacer0').innerHTML="<br><br>";



           //  adjust the size of the Bootstrap icon
           //  id="BootstrapIcon"
      //     document.getElementById("BootstrapIcon").style.width="32px"; 
      //     document.getElementById("BootstrapIcon").style.height="32px";



	    //  id="pdfIcon" 
	    //  width="16" height="16" 
	//    document.getElementById("pdfIcon").style.width="256px"; 
        //    document.getElementById("pdfIcon").style.height="256px";





           //  id="textIntroduction" 
           //      Original     14px    
           document.getElementById('textIntroduction').style.fontSize="28px";


           //  id="textIntroductionEmphasized1"
           document.getElementById('textIntroductionEmphasized1').style.fontSize="29px";

           //  id="textIntroductionEmphasized2"
           document.getElementById('textIntroductionEmphasized2').style.fontSize="29px";


           //   end       Chrome under Android
         } else {
           //   begin    Chrome others

           //  adjust the size of the 
           //  Bootstrap icon
           //  id="BootstrapIcon"
           document.getElementById("BootstrapIcon").style.width="16px"; 
           document.getElementById("BootstrapIcon").style.height="16px";


           //  id="textIntroduction" 
           //      Original     14px    
           document.getElementById('textIntroduction').style.fontSize="24px";

           //  id="textIntroductionEmphasized1"
           document.getElementById('textIntroductionEmphasized1').style.fontSize="25px";

           //  id="textIntroductionEmphasized2"
           document.getElementById('textIntroductionEmphasized2').style.fontSize="25px";


             //   end     Chrome others
          }



           //   end        Chrome
   } else if (isSafari) { 


           if (isiPad) { 


                   //  adjust the size of the Bootstrap icon
                   //  id="BootstrapIcon"
                   document.getElementById("BootstrapIcon").style.width="16px"; 
                   document.getElementById("BootstrapIcon").style.height="16px";

                   //  id="textIntroCaption"
                   //  Original    12px
                   document.getElementById('textIntroCaption').style.fontSize="8px";


                   //  id="textIntroduction" 
                   //      Original     14px    
                   document.getElementById('textIntroduction').style.fontSize="24px";


                   //  id="textIntroductionEmphasized1"
                   document.getElementById('textIntroductionEmphasized1').style.fontSize="25px";

                   //  id="textIntroductionEmphasized2"
                   document.getElementById('textIntroductionEmphasized2').style.fontSize="25px";


              //   end     is iPad
           } else if (isiPhone) { 

              //   end     is iPhone
           } else if (isMac) { 

              //   end     is Mac
           }


           //   end        Safari
   } else if (isEdge) { 


           //  id="textIntroduction" 
           //      Original     14px    
           document.getElementById('textIntroduction').style.fontSize="28px";

           //  id="textIntroductionEmphasized1"
           document.getElementById('textIntroductionEmphasized1').style.fontSize="29px";

           //  id="textIntroductionEmphasized2"
           document.getElementById('textIntroductionEmphasized2').style.fontSize="29px";


           //   end        Edge
   } else { 



   } 



      


// end     index.js


