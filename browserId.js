<!--  browserId_js  -->



// start      browserId.js

//  alert("browserId.js has loaded");

   //  obtain the navigator info
   var whichAgent = navigator.userAgent;
 
   // these variables are instantiated to improve readability in if clauses
   //
   //        
   //        if (isChrome) { 
   //              
   //        }
   //
   //       is more readable than
   //
   //        if ( whichAgent.includes("Chrome") ) { 
   //              
   //        }
   //
   //
   //
   //
    var isFirefox = whichAgent.includes("Firefox"); 

    var isChrome = whichAgent.includes("Chrome"); 

    var isSafari = whichAgent.includes("Safari"); 

    var isiPad = whichAgent.includes("iPad"); 

    var isiPhone = whichAgent.includes("iPhone"); 

    var isMac = whichAgent.includes("Macintosh"); 

    //  old Edge on Win10
    var isEdge = whichAgent.includes("Edge"); 

    //  new Edge on Win10
    var isNewEdge = whichAgent.includes("Edg/"); 

    //  Edge on Android
    var isAndroidEdge = whichAgent.includes("EdgA/"); 

    var isWin10 = whichAgent.includes("Windows NT 10.0"); 

    var isAndroid =  whichAgent.includes("Android"); 


    var isAndroid4 =  whichAgent.includes("Android 4"); 

    var isAndroid5 =  whichAgent.includes("Android 5"); 

    var isAndroid6 = whichAgent.includes("Android 6"); 

    var isAndroid8 = whichAgent.includes("Android 8"); 




    //  var browsersFound = 0;


   //  there are a couple of cases where there are duplicate matches
   //  these two overrides correct the situation
    if (isChrome) { 
           isSafari = false;
    }

    if (isEdge) { 
           isChrome = false; 
    } 

    if (isNewEdge) { 
           isChrome = false; 
    } 

    if (isAndroidEdge) { 
           isChrome = false; 
    } 




    


// end     browserId.js