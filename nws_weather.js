
// start      nws_weather.js

//  this JavaScript file attempts to override the slight differences
//  in page rendering by different browsers
//  the goal is to provide a more consistent cross-browser experience

 //   alert("nws_weather javascritpt successfully loaded");





//  ******************************************************************
//  The case statement below is necessary to account for discrepancies
//  in page rendering between the various browsers. It requires that we
//  fully identify the browser. Not just the OS, OS version and browser
//  version, but also the screen size.
//  ******************************************************************
//  

//    alert("adjust layout using screen width   " + deviceScreenWidth + "<br>");



switch(deviceScreenWidth) {
      case 360:      //  Android 
      	 //   alert("using screen width = 360" + "<br>");

         if(isChrome) {
		//  alert("Chrome Android     screen width EQUAL to 360 "); 


		//  id="grid-containerWeather1"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1').style.gridTemplateRows = `0.5vh 08vh 0.5vh`;

		//  id="grid-containerWeather1b"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1b').style.gridTemplateRows = `0.5vh 09vh 0.5vh`;

		//  id="grid-containerWeather1c"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1c').style.gridTemplateRows = `0.5vh 09vh 0.5vh`;

		//  id="grid-containerWeather1d"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1d').style.gridTemplateRows = `0.5vh 09vh 0.5vh`;

	               // text for periods 1 to 14
	               //  id="textPeriod1" 
	               //  6px
	               //  Xxxx<br>
	               //  Xxxx<br>
	               //  Xxxx<br>
	               //  Xxxx

	               document.getElementById('textPeriod1').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod2').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod3').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod4').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod5').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod6').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod7').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod8').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod9').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod10').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod11').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod12').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod13').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod14').style.fontSize="1.5625em"; 


	               document.getElementById('textPeriodUnused1').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriodUnused2').style.fontSize="1.5625em"; 


	 }

         if(isFirefox) {
		//  alert("Firefox Android     screen width EQUAL to 360 "); 


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

	               // text for periods 1 to 14
	               //  id="textPeriod1" 
	               //  6px
	               //  Xxxx<br>
	               //  Xxxx<br>
	               //  Xxxx<br>
	               //  Xxxx

	               document.getElementById('textPeriod1').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod2').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod3').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod4').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod5').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod6').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod7').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod8').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod9').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod10').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod11').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod12').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod13').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod14').style.fontSize="1.5625em"; 


	               document.getElementById('textPeriodUnused1').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriodUnused2').style.fontSize="1.5625em"; 


	 }



         if(isNewEdge) {
            //  alert("Microsoft Edge (new) using screen width = 360" + "<br>");


         } 



         if(isEdge) {
              //  alert("Microsoft Edge (old) using screen width = 360" + "<br>"); 

         } 


         if(isAndroidEdge) {
		//  alert("Edge Android     screen width EQUAL to 360 "); 


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

	               // text for periods 1 to 14
	               //  id="textPeriod1" 
	               //  6px
	               //  Xxxx<br>
	               //  Xxxx<br>
	               //  Xxxx<br>
	               //  Xxxx

	               document.getElementById('textPeriod1').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod2').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod3').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod4').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod5').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod6').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod7').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod8').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod9').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod10').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod11').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod12').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod13').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod14').style.fontSize="1.5625em"; 


	               document.getElementById('textPeriodUnused1').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriodUnused2').style.fontSize="1.5625em"; 


         }

         break;
      case 375:      //  iPad, iPhone
      	 //   alert("using screen width = 375" + "<br>");

	 if (isSafari && isiPhone) {
		//  alert("Safari iPhone     screen width EQUAL to 375 "); 


            //   end     Safari iPhone - screen width EQUAL to 375
	 }

         break;
      case 390:      //  iPad, iPhone
      	 //   alert("using screen width = 390" + "<br>");

	if (isSafari && isiPhone) {
		//  alert("Safari iPhone     screen width EQUAL to 390 "); 


           //   end     Safari iPhone - screen width EQUAL to 390
	}


         break;
     case 408:      //  Android
     	 //	alert("using screen width = 408" + "<br>");


			switch(deviceScreenHeight) {
				case 913:      
         				//  alert("using screen width = 408    screen height = 913" + "<br>");

				    if(isFirefox) {
                     
	    	  	               //  alert("Firefox Android  -  screen width = 408, screen height = 913 "); 

	 	                    }

	         		break;
				case 929:      
         				//  alert("using screen width = 408    screen height = 929" + "<br>");

				   if(isFirefox) {
                     
	    	  		      //  alert("Firefox Android  -  screen width = 408, screen height = 929 "); 
             
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

	               // text for periods 1 to 14
	               //  id="textPeriod1" 
	               //  6px
	               //  Xxxx<br>
	               //  Xxxx<br>
	               //  Xxxx<br>
	               //  Xxxx

	               document.getElementById('textPeriod1').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod2').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod3').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod4').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod5').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod6').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod7').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod8').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod9').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod10').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod11').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod12').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod13').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod14').style.fontSize="1.5625em"; 


	               document.getElementById('textPeriodUnused1').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriodUnused2').style.fontSize="1.5625em"; 


	 	                   }

	         		break;
      				default:
   
				//  end switch
			}
                           
       	 break;
     case 412:      //  Android
     		//	alert("using screen width = 412" + "<br>");

         if(isChrome) {
                     
//	    		  alert("Chrome Android  -  screen width EQUAL to 412 "); 

                        
	    	switch(deviceScreenHeight) {
	    		case 922:      
         		//	alert("Chrome Android - screen width 412  screen height 922" + "<br>");


	         	break;
      	    		case 938:      
         	//    alert("Chrome Android - screen width = 412   screen height = 938" + "<br>"); 

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

	               // text for periods 1 to 14
	               //  id="textPeriod1" 
	               //  6px
	               //  Xxxx<br>
	               //  Xxxx<br>
	               //  Xxxx<br>
	               //  Xxxx

	               document.getElementById('textPeriod1').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod2').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod3').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod4').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod5').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod6').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod7').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod8').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod9').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod10').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod11').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod12').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod13').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod14').style.fontSize="1.5625em"; 


	               document.getElementById('textPeriodUnused1').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriodUnused2').style.fontSize="1.5625em"; 


	         	break;
      	     		default:
                          
	       		//  end switch
	 	}



	 }




         if(isAndroidEdge) {
	//	  alert("Edge Android     screen width EQUAL to 412 "); 
	 

                        
	    	switch(deviceScreenHeight) {
	    		case 922:      
         		//	alert("Edge Android   screen width 412  screen height 922" + "<br>");
               

	         	break;
      	    		case 938:      
         	//    alert("EDGE Android using screen width = 412   screen height = 938" + "<br>"); 

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

	               // text for periods 1 to 14
	               //  id="textPeriod1" 
	               //  6px
	               //  Xxxx<br>
	               //  Xxxx<br>
	               //  Xxxx<br>
	               //  Xxxx

	               document.getElementById('textPeriod1').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod2').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod3').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod4').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod5').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod6').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod7').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod8').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod9').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod10').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod11').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod12').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod13').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod14').style.fontSize="1.5625em"; 


	               document.getElementById('textPeriodUnused1').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriodUnused2').style.fontSize="1.5625em"; 



	         	break;
      	     		default:
                          
	       		//  end switch
	 	}

       }
                    
         break;
      case 414:      //  iPad, iPhone
	//   alert("using screen width = 414" + "<br>");

	if (isSafari && isiPhone) {

		//  alert("Safari iPhone     screen width EQUAL to 414 "); 


	}

        break;
      case 768:      //  iPad
      	//   alert("using screen width = 768" + "<br>"); 

	if (isSafari && isiPad) { 

	 	// alert("Safari iPad     screen width EQUAL to 768 "); 


           //   end     Safari iPad - screen width EQUAL to 768
	}


         break;
      case 820:      //  iPad
      	//   alert("using screen width = 820" + "<br>"); 

	if (isSafari && isiPad) { 
		//  alert("Safari iPad     screen width EQUAL to 820 "); 



           //   end     Safari iPad - screen width EQUAL to 820
	}

         break;
      case 1133:     //  Android
      //   alert("using screen width = 1133" + "<br>");

         if(isChrome) {
            //  alert("Chrome using screen width = 1133" + "<br>");
         } 

         if(isFirefox) {
            	//  alert("Firefox using screen width = 1133" + "<br>"); 


		//  id="grid-containerWeather1"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1').style.gridTemplateRows = `0.5vh 26vh 0.5vh`;

		//  id="grid-containerWeather1b"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1b').style.gridTemplateRows = `0.5vh 26vh 0.5vh`;

		//  id="grid-containerWeather1c"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1c').style.gridTemplateRows = `0.5vh 26vh 0.5vh`;

		//  id="grid-containerWeather1d"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1d').style.gridTemplateRows = `0.5vh 26vh 0.5vh`;

	               // text for periods 1 to 14
	               //  id="textPeriod1" 
	               //  6px
	               //  Xxxx<br>
	               //  Xxxx<br>
	               //  Xxxx<br>
	               //  Xxxx

	               document.getElementById('textPeriod1').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod2').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod3').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod4').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod5').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod6').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod7').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod8').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod9').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod10').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod11').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod12').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod13').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod14').style.fontSize="1.5625em"; 


	               document.getElementById('textPeriodUnused1').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriodUnused2').style.fontSize="1.5625em"; 


         } 

         if(isNewEdge) {
            //  alert("Microsoft Edge (new) using screen width = 1133" + "<br>");
         } 

         if(isEdge) {
            //  alert("Microsoft Edge (old) using screen width = 1133" + "<br>"); 
         } 


         break;
      case 1143:     //  Android
     //    alert("using screen width = >1143<" + "\n"); 

         if(isChrome) {
            	//  alert("Chrome using screen width = 1143" + "<br>"); 
		//  alert("Chrome Android     screen width EQUAL to 1143 "); 


		//  id="grid-containerWeather1"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1').style.gridTemplateRows = `0.5vh 26vh 0.5vh`;

		//  id="grid-containerWeather1b"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1b').style.gridTemplateRows = `0.5vh 26vh 0.5vh`;

		//  id="grid-containerWeather1c"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1c').style.gridTemplateRows = `0.5vh 26vh 0.5vh`;

		//  id="grid-containerWeather1d"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1d').style.gridTemplateRows = `0.5vh 26vh 0.5vh`;

	               // text for periods 1 to 14
	               //  id="textPeriod1" 
	               //  6px
	               //  Xxxx<br>
	               //  Xxxx<br>
	               //  Xxxx<br>
	               //  Xxxx

	               document.getElementById('textPeriod1').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod2').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod3').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod4').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod5').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod6').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod7').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod8').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod9').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod10').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod11').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod12').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod13').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod14').style.fontSize="1.5625em"; 


	               document.getElementById('textPeriodUnused1').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriodUnused2').style.fontSize="1.5625em"; 


         } 

         if(isFirefox) {
            //  alert("Firefox using screen width = 1143"); 
         } 

         if(isAndroidEdge) {
            	//  alert("Microsoft Edge (Android) using screen width = 1143"); 


		//  id="grid-containerWeather1"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1').style.gridTemplateRows = `0.5vh 26vh 0.5vh`;

		//  id="grid-containerWeather1b"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1b').style.gridTemplateRows = `0.5vh 26vh 0.5vh`;

		//  id="grid-containerWeather1c"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1c').style.gridTemplateRows = `0.5vh 26vh 0.5vh`;

		//  id="grid-containerWeather1d"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1d').style.gridTemplateRows = `0.5vh 26vh 0.5vh`;

	               // text for periods 1 to 14
	               //  id="textPeriod1" 
	               //  6px
	               //  Xxxx<br>
	               //  Xxxx<br>
	               //  Xxxx<br>
	               //  Xxxx

	               document.getElementById('textPeriod1').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod2').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod3').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod4').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod5').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod6').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod7').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod8').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod9').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod10').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod11').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod12').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod13').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod14').style.fontSize="1.5625em"; 


	               document.getElementById('textPeriodUnused1').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriodUnused2').style.fontSize="1.5625em"; 


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
               //        window.alert("Chrome using screen width = 1536" + "<br>");

	               // text for periods 1 to 14
	               //  id="textPeriod1" 
	               //  6px
	               //  Xxxx<br>
	               //  Xxxx<br>
	               //  Xxxx<br>
	               //  Xxxx

	               document.getElementById('textPeriod1').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod2').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod3').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod4').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod5').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod6').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod7').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod8').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod9').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod10').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod11').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod12').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod13').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod14').style.fontSize="1.5625em"; 


	               document.getElementById('textPeriodUnused1').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriodUnused2').style.fontSize="1.5625em"; 


         	} 
                          
         	if(isFirefox) {
            		//  alert("Firefox using screen width = 1536" + "<br>");
			//  alert("using the Firefox browser under Win10");

		//  id="grid-containerWeather1"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1').style.gridTemplateRows = `0.5vh 26vh 0.5vh`;

		//  id="grid-containerWeather1b"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1b').style.gridTemplateRows = `0.5vh 26vh 0.5vh`;

		//  id="grid-containerWeather1c"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1c').style.gridTemplateRows = `0.5vh 26vh 0.5vh`;

		//  id="grid-containerWeather1d"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1d').style.gridTemplateRows = `0.5vh 26vh 0.5vh`;

	               // text for periods 1 to 14
	               //  id="textPeriod1" 
	               //  6px
	               //  Xxxx<br>
	               //  Xxxx<br>
	               //  Xxxx<br>
	               //  Xxxx

	               document.getElementById('textPeriod1').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod2').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod3').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod4').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod5').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod6').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod7').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod8').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod9').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod10').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod11').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod12').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod13').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod14').style.fontSize="1.5625em"; 


	               document.getElementById('textPeriodUnused1').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriodUnused2').style.fontSize="1.5625em"; 


         	} 
                        
         	if(isNewEdge) {
            		//  alert("Microsoft Edge (new) using screen width = 1536" + "<br>");


//  seems to not be working
//  
//	document.getElementById('grid-containerIntro').style.gridTemplateRows = `03vh 160vh 03vh`;
//	document.getElementById('grid-containerReference').style.gridTemplateRows = `03vh 1459vh 03vh`;
//
//  the alert appears so there was no syntx error
//
//  alert("finished setting template rows");

		//  id="grid-containerWeather1"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1').style.gridTemplateRows = `0.5vh 26vh 0.5vh`;

		//  id="grid-containerWeather1b"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1b').style.gridTemplateRows = `0.5vh 26vh 0.5vh`;

		//  id="grid-containerWeather1c"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1c').style.gridTemplateRows = `0.5vh 26vh 0.5vh`;

		//  id="grid-containerWeather1d"
		//  grid-template-rows: 0.5vh 19vh 0.5vh
		document.getElementById('grid-containerWeather1d').style.gridTemplateRows = `0.5vh 26vh 0.5vh`;

	               // text for periods 1 to 14
	               //  id="textPeriod1" 
	               //  6px
	               //  Xxxx<br>
	               //  Xxxx<br>
	               //  Xxxx<br>
	               //  Xxxx

	               document.getElementById('textPeriod1').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod2').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod3').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod4').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod5').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod6').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod7').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod8').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod9').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod10').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod11').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod12').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod13').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriod14').style.fontSize="1.5625em"; 


	               document.getElementById('textPeriodUnused1').style.fontSize="1.5625em"; 

	               document.getElementById('textPeriodUnused2').style.fontSize="1.5625em"; 


         	} 
                      
         	if(isEdge) {
            		//  alert("Microsoft Edge (old) using screen width = 1536" + "<br>");


         	} 

         break;
      	 case 1707:     //  Win10
      	 	//   alert("using screen width = 1707" + "<br>");
                        
         	if(isChrome) {
            		//  alert("Chrome using screen width = 1707" + "<br>");

         	} 
                          
         	if(isFirefox) {
            		//  alert("Firefox using screen width = 1707" + "<br>");
			//  alert("using the Firefox browser under Win10");

         	} 
                               
         	if(isNewEdge) {
            		//  alert("Microsoft Edge (new) using screen width = 1707" + "<br>");

         	} 
                           
         	if(isEdge) {
            		//  alert("Microsoft Edge (old) using screen width = 1707" + "<br>");


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








// end     nws_weather.js






