<!--  onTheWay_js  -->



// start      onTheWay.js



//  this JavaScript file attempts to override the slight differences
//  in page rendering by different browsers

//  the goal is to provide a more consistent cross-browser experience








   if (isFirefox) { 
           //   begin      Firefox 

		if (isAndroid) {
           	   //   begin      Firefox under Android

				//  alert("Firefox under Android");

				//  adjust the size of the
				//  Bootstrap icon
				//  id="BootstrapIcon"           

				document.getElementById("BootstrapIcon").style.width="64px"; 
				document.getElementById("BootstrapIcon").style.height="64px";

           	   //   end        Firefox under Android
        	} 


        	if (isWin10) {
           	//   begin      Firefox under Win10


           		//  adjust the size of the
           		//   Bootstrap icon
           		//  id="BootstrapIcon"
           		document.getElementById("BootstrapIcon").style.width="128px"; 
           		document.getElementById("BootstrapIcon").style.height="128px";



           	   //   end        Firefox under Win10
        	}




           //   end        Firefox 
   } else if (isChrome) { 


        if (isAndroid) {
           //   begin    Chrome under Android

      	   	//     alert("Chrome under Android");


           	/  adjust the size of the
           	//   Bootstrap icon
           	//  id="BootstrapIcon"
           	document.getElementById("BootstrapIcon").style.width="32px"; 
           	document.getElementById("BootstrapIcon").style.height="32px";



           //   end       Chrome under Android
         } else {
           //   begin    Chrome others

           	//  adjust the size of the
           	//   Bootstrap icon
           	//  id="BootstrapIcon"
           	document.getElementById("BootstrapIcon").style.width="128px"; 
           	document.getElementById("BootstrapIcon").style.height="128px";

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

           	//  adjust the size of the
           	//   Bootstrap icon
           	//  id="BootstrapIcon"
           	document.getElementById("BootstrapIcon").style.width="128px"; 
           	document.getElementById("BootstrapIcon").style.height="128px";


           //   end        new Edge
   } else if (isEdge) { 
	//   begin        Edge

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

  


// end     onTheWay.js






