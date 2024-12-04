/* 

This demo is written in "vanilla" JavaScript, and is built upon the demo-123 code, which loads the sqlite3 
JavaScript/WebAssembly (WASM) module in a web page. The demo-123 code is located at

https://sqlite.org/wasm/file/demo-123.html?txt

https://sqlite.org/wasm/file/demo-123.js?txt


Code which was added to the original demo and which is
specific to this application is Copyright 2024. All rights reserved.


The demo-123 code has been released under the following license
below, which is located at        https://sqlite.org/wasm/file/demo-123.js?txt

*/



/*
  2022-09-19

  The author disclaims copyright to this source code.  In place of a
  legal notice, here is a blessing:

  *   May you do good and not evil.
  *   May you find forgiveness for yourself and forgive others.
  *   May you share freely, never taking more than you give.

  ***********************************************************************

  A basic demonstration of the SQLite3 "OO#1" API.
*/

/*

This demo has a few limitations:

      a)  databases are not persistent - they disappear when the page is reloaded
            we need to build the database when the page is loaded

           *** future functionality ***
           1)   make the database persistent by integrating the 

                  Origin private file system (OPFS)      
                         https://developer.mozilla.org/en-US/docs/Web/API/File_System_API/Origin_private_file_system

           2)   avoid building the database when the page loads by integrating the ability to use a 
                  database file located on the server using The File System Access API or using legacy
                  JavaScript methods.
                  https://web.dev/articles/read-files
                  https://developer.chrome.com/docs/capabilities/web-apis/file-system-access

                  https://web.dev/articles/xhr2
                  New tricks in XMLHttpRequest2 
                  Eric Bidelman
                  Last updated 2011-05-27 UTC.

                            Download + save files to the HTML5 file system
                            Let's say you have an image gallery and want to fetch a bunch of images then save
                            them locally using the HTML5 File System. One way to accomplish this would be to
                            request images as Blobs and write them out using FileWriter:

                            window.requestFileSystem  = 
                                      window.requestFileSystem || window.webkitRequestFileSystem;

                            function onError(e) {
                                    console.log('Error', e);
                            }

                           var xhr = new XMLHttpRequest();
                           xhr.open('GET', '/path/to/image.png', true);
                           xhr.responseType = 'blob';

                           xhr.onload = function(e) {
                                   window.requestFileSystem(TEMPORARY, 1024 * 1024, function(fs) {
                                             fs.root.getFile('image.png', {create: true}, function(fileEntry) {
                                                     fileEntry.createWriter(function(writer) {
                                                             writer.onwrite = function(e) { ... };
                                                             writer.onerror = function(e) { ... };
                                                             var blob = new Blob([xhr.response], {type: 'image/png'});
                                                             writer.write(blob);
                                                      }, onError);
                                             }, onError);
                                   }, onError);
                           };

                           xhr.send();

                          Note: To use this code, see browser support and storage limitations in the
                                     "Exploring the FileSystem APIs" tutorial.


      b)  the database size limit depends on the browser and the device

      c)  running long-running queries in the main thread can interfere with UI rendering
          you should load and run sqlite3 from a Worker
                https://sqlite.org/wasm/doc/trunk/demo-123.md

      d)  A recent (post-2020), full-featured browser is required. Firefox and the Chrome family of
            browsers are known to be sufficient on most platforms. This framework currently targets only
            browsers.
                https://sqlite.org/wasm/file/demo-123.js?txt

*/


//  ******************************************************************
//  The case statement below is necessary to account for discrepancies
//  in page rendering between the various browsers. It requires that we
//  fully identify the browser. Not just the OS, OS version and browser
//  version, but also the screen size.
//  ******************************************************************
//  

switch(deviceScreenWidth) {
      case 360:      //  Android 
      	 //   alert("using screen width = 360" + "<br>");

         if(isChrome) {
		//  alert("Chrome Android     screen width EQUAL to 360 "); 

			document.getElementById('grid-containerReference').style.gridTemplateRows = "0.3vh 480vh 0.3vh";

	 }

         if(isFirefox) {
		//  alert("Firefox Android     screen width EQUAL to 360 "); 

			document.getElementById('grid-containerReference').style.gridTemplateRows = "0.3vh 340vh 0.3vh";


	 }

         if(isAndroidEdge) {
		//  alert("Edge Android     screen width EQUAL to 360 "); 

			document.getElementById('grid-containerReference').style.gridTemplateRows = "0.3vh 480vh 0.3vh";


         }

         break;
      case 375:      //  iPad, iPhone
      	 //   alert("using screen width = 375" + "<br>");

	 if (isSafari && isiPhone) {
		//  alert("Safari iPhone     screen width EQUAL to 375 "); 


	 }



         break;
      case 390:      //  iPad, iPhone
      	 //   alert("using screen width = 390" + "<br>");

	if (isSafari && isiPhone) {
		//  alert("Safari iPhone     screen width EQUAL to 390 "); 


	}


         break;
     case 408:      //  Android
     	 	//  alert("using screen width = 408" + "<br>");


			switch(deviceScreenHeight) {
				case 929:      
         				//  alert("using screen width = 408    screen height = 929" + "<br>");

				         if(isFirefox) {
                     
	    	  			       //	alert("Firefox Android  -  screen width = 408, screen height = 929 "); 
             
	                                       document.getElementById('grid-containerReference').style.gridTemplateRows = 
                                                      "0.3vh 260vh 0.3vh";

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

	                        document.getElementById('grid-containerReference').style.gridTemplateRows = 
                                          "0.3vh 360vh 0.3vh";


	         	break;
      	     		default:
                          
	       		//  end switch
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


	}


         break;
      case 820:      //  iPad
      	//   alert("using screen width = 820" + "<br>"); 

	if (isSafari && isiPad) { 
		//  alert("Safari iPad     screen width EQUAL to 820 "); 

	}

         break;
      case 1133:     //  Android
      //   alert("using screen width = 1133" + "<br>");

         if(isChrome) {
            //  alert("Chrome using screen width = 1133" + "<br>");
         } 

         if(isFirefox) {
            //	  alert("Firefox using screen width = 1133" + "<br>"); 

	        document.getElementById('grid-containerReference').style.gridTemplateRows = "0.3vh 580vh 0.3vh";

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

	        document.getElementById('grid-containerReference').style.gridTemplateRows = "0.3vh 520vh 0.3vh";


         } 

         if(isFirefox) {
            //  alert("Firefox using screen width = 1143"); 
         } 

         if(isAndroidEdge) {
            	 // alert("Microsoft Edge (Android) using screen width = 1143"); 

	        document.getElementById('grid-containerReference').style.gridTemplateRows = "0.3vh 520vh 0.3vh";

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
      			//   alert("using screen width = 1536" + "<br>");
                           
         	if(isChrome) {
            		//  window.alert("Chrome using screen width = 1536" + "<br>");

         	} 
                          
         	if(isFirefox) {
            		//  window.alert("Firefox using screen width = 1536" + "<br>");
			//  alert("using the Firefox browser under Win10");

			document.getElementById('grid-containerReference').style.gridTemplateRows = "0.3vh 460vh 0.3vh";

         	} 
                        
         	if(isNewEdge) {
            		//  alert("Microsoft Edge (new) using screen width = 1536" + "<br>");

			document.getElementById('grid-containerReference').style.gridTemplateRows = "0.3vh 460vh 0.3vh";

         	} 
                      
         	if(isEdge) {
            		//  alert("Microsoft Edge (old) using screen width = 1536" + "<br>");

			document.getElementById('grid-containerReference').style.gridTemplateRows = "0.3vh 460vh 0.3vh";

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







function clearTheDisplay() {

     document.getElementById("Rest1name").innerHTML = 
         '<center>&nbsp;&nbsp;*****&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest1distance").innerHTML = 
         '<center>&nbsp;&nbsp;*****&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest1gas").innerHTML = 
          '<center>&nbsp;&nbsp;******&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest1diesel").innerHTML = 
          '<center>&nbsp;&nbsp;******&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest1food").innerHTML = 
          '<center>&nbsp;&nbsp;******&nbsp;&nbsp;</center>'; 



     document.getElementById("Rest2name").innerHTML = 
         '<center>&nbsp;&nbsp;*****&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest2distance").innerHTML = 
         '<center>&nbsp;&nbsp;*****&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest2gas").innerHTML = 
          '<center>&nbsp;&nbsp;******&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest2diesel").innerHTML = 
          '<center>&nbsp;&nbsp;******&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest2food").innerHTML = 
          '<center>&nbsp;&nbsp;******&nbsp;&nbsp;</center>'; 


     document.getElementById("Rest3name").innerHTML = 
         '<center>&nbsp;&nbsp;*****&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest3distance").innerHTML = 
         '<center>&nbsp;&nbsp;*****&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest3gas").innerHTML = 
          '<center>&nbsp;&nbsp;******&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest3diesel").innerHTML = 
          '<center>&nbsp;&nbsp;******&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest3food").innerHTML = 
          '<center>&nbsp;&nbsp;******&nbsp;&nbsp;</center>'; 


     document.getElementById("Rest4name").innerHTML = 
         '<center>&nbsp;&nbsp;*****&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest4distance").innerHTML = 
         '<center>&nbsp;&nbsp;*****&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest4gas").innerHTML = 
          '<center>&nbsp;&nbsp;******&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest4diesel").innerHTML = 
          '<center>&nbsp;&nbsp;******&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest4food").innerHTML = 
          '<center>&nbsp;&nbsp;******&nbsp;&nbsp;</center>'; 


     document.getElementById("Rest5name").innerHTML = 
         '<center>&nbsp;&nbsp;*****&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest5distance").innerHTML = 
         '<center>&nbsp;&nbsp;*****&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest5gas").innerHTML = 
          '<center>&nbsp;&nbsp;******&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest5diesel").innerHTML = 
          '<center>&nbsp;&nbsp;******&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest5food").innerHTML = 
          '<center>&nbsp;&nbsp;******&nbsp;&nbsp;</center>'; 



     document.getElementById("Rest6name").innerHTML = 
         '<center>&nbsp;&nbsp;*****&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest6distance").innerHTML = 
         '<center>&nbsp;&nbsp;*****&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest6gas").innerHTML = 
          '<center>&nbsp;&nbsp;******&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest6diesel").innerHTML = 
          '<center>&nbsp;&nbsp;******&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest6food").innerHTML = 
          '<center>&nbsp;&nbsp;******&nbsp;&nbsp;</center>'; 



     document.getElementById("Rest7name").innerHTML = 
         '<center>&nbsp;&nbsp;*****&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest7distance").innerHTML = 
         '<center>&nbsp;&nbsp;*****&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest7gas").innerHTML = 
          '<center>&nbsp;&nbsp;******&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest7diesel").innerHTML = 
          '<center>&nbsp;&nbsp;******&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest7food").innerHTML = 
          '<center>&nbsp;&nbsp;******&nbsp;&nbsp;</center>'; 



     document.getElementById("Rest8name").innerHTML = 
         '<center>&nbsp;&nbsp;*****&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest8distance").innerHTML = 
         '<center>&nbsp;&nbsp;*****&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest8gas").innerHTML = 
          '<center>&nbsp;&nbsp;******&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest8diesel").innerHTML = 
          '<center>&nbsp;&nbsp;******&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest8food").innerHTML = 
          '<center>&nbsp;&nbsp;******&nbsp;&nbsp;</center>'; 



     document.getElementById("Rest9name").innerHTML = 
         '<center>&nbsp;&nbsp;*****&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest9distance").innerHTML = 
         '<center>&nbsp;&nbsp;*****&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest9gas").innerHTML = 
          '<center>&nbsp;&nbsp;******&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest9diesel").innerHTML = 
          '<center>&nbsp;&nbsp;******&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest9food").innerHTML = 
          '<center>&nbsp;&nbsp;******&nbsp;&nbsp;</center>'; 



     document.getElementById("Rest10name").innerHTML = 
         '<center>&nbsp;&nbsp;*****&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest10distance").innerHTML = 
         '<center>&nbsp;&nbsp;*****&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest10gas").innerHTML = 
          '<center>&nbsp;&nbsp;******&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest10diesel").innerHTML = 
          '<center>&nbsp;&nbsp;******&nbsp;&nbsp;</center>'; 

     document.getElementById("Rest10food").innerHTML = 
          '<center>&nbsp;&nbsp;******&nbsp;&nbsp;</center>'; 


      //  end    function clearTheDisplay
   }








   function getStopsWithinRange(startLong, endLong) {

      clearTheDisplay();


'use strict';
(function(){
  /**
     Set up our output channel differently depending
     on whether we are running in a worker thread or
     the main (UI) thread.
  */
  let logHtml;
  if(globalThis.window === globalThis /* UI thread */){
    //  console.log("Running demo from main UI thread.");
    //  log("Running demo from main UI thread.");
    logHtml = function(cssClass,...args){
      const ln = document.createElement('div');
      if(cssClass) ln.classList.add(cssClass);
      ln.append(document.createTextNode(args.join(' ')));
      document.body.append(ln);
    };
  }else{ /* Worker thread */
    //  console.log("Running demo from Worker thread.");
    //  log("Running demo from Worker thread.");
    logHtml = function(cssClass,...args){
      postMessage({
        type:'log',
        payload:{cssClass, args}
      });
    };
  }
  const log = (...args)=>logHtml('',...args);
  const warn = (...args)=>logHtml('warning',...args);
  const error = (...args)=>logHtml('error',...args);

  const demo2 = function(sqlite3){
    const capi = sqlite3.capi/*C-style API*/,
          oo = sqlite3.oo1/*high-level OO API*/;
//    log("The SQLite version is",capi.sqlite3_libversion());
//  document.getElementById("execOut").innerHTML += "The SQLite version is" + capi.sqlite3_libversion() + "<br>";

//    log("sqlite3 version",capi.sqlite3_libversion(), capi.sqlite3_sourceid());
    const db = new oo.DB("/travelers.db",'ct');
//    log("transient db =",db.filename);
    /**
       Never(!) rely on garbage collection to clean up DBs and
       (especially) prepared statements. Always wrap their lifetimes
       in a try/finally construct, as demonstrated below. By and
       large, client code can entirely avoid lifetime-related
       complications of prepared statement objects by using the
       DB.exec() method for SQL execution.
    */



    try {

//      log("Check if foreign keys are enabled ...");
      db.exec({
        sql: "PRAGMA foreign_keys",
        rowMode: 'array', // 'array' (default), 'object', or 'stmt'
        callback: function(row){
//          log("row ",++this.counter,"=",row);
          if(row == 0) {
//          log("\t\t" + "*** foreign keys ARE NOT enabled ***");
          }
          else {
//          log("\t\t" + "*** foreign keys ARE enabled ***");
          }
        }.bind({counter: 0})
      });
//      log("Query finished.");
//      log("\n");
//      log("_");



//      log("*** ENABLE foreign keys ***");
      db.exec("PRAGMA foreign_keys=1");
//      log("\n");
//      log("_");



//      log("Check if foreign keys are enabled ...");
      db.exec({
        sql: "PRAGMA foreign_keys",
        rowMode: 'array', // 'array' (default), 'object', or 'stmt'
        callback: function(row){
//          log("row ",++this.counter,"=",row);
          if(row == 0) {
//          log("\t\t" + "*** foreign keys ARE NOT enabled ***");
          }
          else {
//          log("\t\t" + "*** foreign keys ARE enabled ***");
          }
        }.bind({counter: 0})
      });
//      log("Query finished.");
//      log("\n");
//      log("_");





var sqlStatement = "SELECT a.restStop_id, a.restStopName, a.longtitude, a.lattitude, c.status, d.status, e.status " + 
"FROM REST_STOP a " + 
"JOIN GAS c " + 
"ON a.gas = c.gas_id " + 
"JOIN DIESEL d " + 
"ON a.diesel = d.diesel_id " + 
"JOIN FOOD e " + 
"ON a.food = e.food_id " + 
"WHERE longtitude BETWEEN " + 
startLong + 
" AND " + 
endLong + 
" GROUP BY restStopName ORDER BY restStop_id";



      db.exec({
        sql: sqlStatement,
        rowMode: 'stmt', // 'array' (default), 'object', or 'stmt'
        callback: function(row){
          ++this.counter;


         switch(this.counter) {

             case 1:       
                //  alert("case = 1");

  	        document.getElementById("Rest1name").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(1) + 
  	            "&nbsp;&nbsp;</center>"; 

	        var tmpDistance = calculateDistance( startLong+10, 900, row.get(2), row.get(3) );

                if (tmpDistance < 0) {
  	            document.getElementById("Rest1distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Maroon;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                } else {
  	            document.getElementById("Rest1distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Black;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                }

  	        document.getElementById("Rest1gas").innerHTML =  
                    "<center>&nbsp;&nbsp;" + 
                    row.get(4) + 
  	            "&nbsp;&nbsp;</center>"; 

  	        document.getElementById("Rest1diesel").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(5) + 
  	            "&nbsp;&nbsp;</center>"; 

  	         document.getElementById("Rest1food").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(6) + 
  	            "&nbsp;&nbsp;</center>"; 

             break;


             case 2:       
                //  alert("case = 2");

  	        document.getElementById("Rest2name").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(1) + 
  	            "&nbsp;&nbsp;</center>"; 

	        tmpDistance = calculateDistance( startLong+10, 900, row.get(2), row.get(3) );

                if (tmpDistance < 0) {
  	            document.getElementById("Rest2distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Maroon;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                } else {
  	            document.getElementById("Rest2distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Black;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                }

  	        document.getElementById("Rest2gas").innerHTML =  
                    "<center>&nbsp;&nbsp;" + 
                    row.get(4) + 
  	            "&nbsp;&nbsp;</center>"; 

  	        document.getElementById("Rest2diesel").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(5) + 
  	            "&nbsp;&nbsp;</center>"; 

  	         document.getElementById("Rest2food").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(6) + 
  	            "&nbsp;&nbsp;</center>"; 

             break;



             case 3:       
                //  alert("case = 3");

  	        document.getElementById("Rest3name").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(1) + 
  	            "&nbsp;&nbsp;</center>"; 

	        tmpDistance = calculateDistance( startLong+10, 900, row.get(2), row.get(3) );

                if (tmpDistance < 0) {
  	            document.getElementById("Rest3distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Maroon;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                } else {
  	            document.getElementById("Rest3distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Black;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                }

  	        document.getElementById("Rest3gas").innerHTML =  
                    "<center>&nbsp;&nbsp;" + 
                    row.get(4) + 
  	            "&nbsp;&nbsp;</center>"; 

  	        document.getElementById("Rest3diesel").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(5) + 
  	            "&nbsp;&nbsp;</center>"; 

  	         document.getElementById("Rest3food").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(6) + 
  	            "&nbsp;&nbsp;</center>"; 

             break;


             case 4:       
                //  alert("case = 4");

  	        document.getElementById("Rest4name").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(1) + 
  	            "&nbsp;&nbsp;</center>"; 

	        tmpDistance = calculateDistance( startLong+10, 900, row.get(2), row.get(3) );

                if (tmpDistance < 0) {
  	            document.getElementById("Rest4distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Maroon;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                } else {
  	            document.getElementById("Rest4distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Black;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                }

  	        document.getElementById("Rest4gas").innerHTML =  
                    "<center>&nbsp;&nbsp;" + 
                    row.get(4) + 
  	            "&nbsp;&nbsp;</center>"; 

  	        document.getElementById("Rest4diesel").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(5) + 
  	            "&nbsp;&nbsp;</center>"; 

  	         document.getElementById("Rest4food").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(6) + 
  	            "&nbsp;&nbsp;</center>"; 

             break;





             case 5:       
                //  alert("case = 5");

  	        document.getElementById("Rest5name").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(1) + 
  	            "&nbsp;&nbsp;</center>"; 

	        tmpDistance = calculateDistance( startLong+10, 900, row.get(2), row.get(3) );

                if (tmpDistance < 0) {
  	            document.getElementById("Rest5distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Maroon;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                } else {
  	            document.getElementById("Rest5distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Black;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                }

  	        document.getElementById("Rest5gas").innerHTML =  
                    "<center>&nbsp;&nbsp;" + 
                    row.get(4) + 
  	            "&nbsp;&nbsp;</center>"; 

  	        document.getElementById("Rest5diesel").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(5) + 
  	            "&nbsp;&nbsp;</center>"; 

  	         document.getElementById("Rest5food").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(6) + 
  	            "&nbsp;&nbsp;</center>"; 

             break;





             case 6:       
                //  alert("case = 6");

  	        document.getElementById("Rest6name").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(1) + 
  	            "&nbsp;&nbsp;</center>"; 

	        tmpDistance = calculateDistance( startLong+10, 900, row.get(2), row.get(3) );

                if (tmpDistance < 0) {
  	            document.getElementById("Rest6distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Maroon;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                } else {
  	            document.getElementById("Rest6distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Black;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                }

  	        document.getElementById("Rest6gas").innerHTML =  
                    "<center>&nbsp;&nbsp;" + 
                    row.get(4) + 
  	            "&nbsp;&nbsp;</center>"; 

  	        document.getElementById("Rest6diesel").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(5) + 
  	            "&nbsp;&nbsp;</center>"; 

  	         document.getElementById("Rest6food").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(6) + 
  	            "&nbsp;&nbsp;</center>"; 

             break;





             case 7:       
                //  alert("case = 7");

  	        document.getElementById("Rest7name").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(1) + 
  	            "&nbsp;&nbsp;</center>"; 

	        tmpDistance = calculateDistance( startLong+10, 900, row.get(2), row.get(3) );

                if (tmpDistance < 0) {
  	            document.getElementById("Rest7distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Maroon;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                } else {
  	            document.getElementById("Rest7distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Black;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                }

  	        document.getElementById("Rest7gas").innerHTML =  
                    "<center>&nbsp;&nbsp;" + 
                    row.get(4) + 
  	            "&nbsp;&nbsp;</center>"; 

  	        document.getElementById("Rest7diesel").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(5) + 
  	            "&nbsp;&nbsp;</center>"; 

  	         document.getElementById("Rest7food").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(6) + 
  	            "&nbsp;&nbsp;</center>"; 

             break;





             case 8:       
                //  alert("case = 8");

  	        document.getElementById("Rest8name").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(1) + 
  	            "&nbsp;&nbsp;</center>"; 

	        tmpDistance = calculateDistance( startLong+10, 900, row.get(2), row.get(3) );

                if (tmpDistance < 0) {
  	            document.getElementById("Rest8distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Maroon;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                } else {
  	            document.getElementById("Rest8distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Black;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                }

  	        document.getElementById("Rest8gas").innerHTML =  
                    "<center>&nbsp;&nbsp;" + 
                    row.get(4) + 
  	            "&nbsp;&nbsp;</center>"; 

  	        document.getElementById("Rest8diesel").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(5) + 
  	            "&nbsp;&nbsp;</center>"; 

  	         document.getElementById("Rest8food").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(6) + 
  	            "&nbsp;&nbsp;</center>"; 

             break;







             case 9:       
                //  alert("case = 9");

  	        document.getElementById("Rest9name").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(1) + 
  	            "&nbsp;&nbsp;</center>"; 

	        tmpDistance = calculateDistance( startLong+10, 900, row.get(2), row.get(3) );

                if (tmpDistance < 0) {
  	            document.getElementById("Rest9distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Maroon;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                } else {
  	            document.getElementById("Rest9distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Black;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                }

  	        document.getElementById("Rest9gas").innerHTML =  
                    "<center>&nbsp;&nbsp;" + 
                    row.get(4) + 
  	            "&nbsp;&nbsp;</center>"; 

  	        document.getElementById("Rest9diesel").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(5) + 
  	            "&nbsp;&nbsp;</center>"; 

  	         document.getElementById("Rest9food").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(6) + 
  	            "&nbsp;&nbsp;</center>"; 

             break;





             case 10:       
                //  alert("case = 10");

  	        document.getElementById("Rest10name").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(1) + 
  	            "&nbsp;&nbsp;</center>"; 

	        tmpDistance = calculateDistance( startLong+10, 900, row.get(2), row.get(3) );

                if (tmpDistance < 0) {
  	            document.getElementById("Rest10distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Maroon;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                } else {
  	            document.getElementById("Rest10distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Black;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                }

  	        document.getElementById("Rest10gas").innerHTML =  
                    "<center>&nbsp;&nbsp;" + 
                    row.get(4) + 
  	            "&nbsp;&nbsp;</center>"; 

  	        document.getElementById("Rest10diesel").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(5) + 
  	            "&nbsp;&nbsp;</center>"; 

  	         document.getElementById("Rest10food").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(6) + 
  	            "&nbsp;&nbsp;</center>"; 

             break;

               default:
                  //  xxxxx
   
              //  end switch
           }


        }.bind({counter: 0})
      });
//      document.getElementById("execOut").innerHTML += "Query finished.<br><br>";
//      log("Query finished.");
//      log("\n");
//      log("_");




    }finally{

        //  **********************************************
        db.close();
        //  **********************************************

    }


  }/*demo2()*/;








 // log("Loading and initializing sqlite3 module...");
  if(globalThis.window!==globalThis) /*worker thread*/{
    log("globalThis.window!==globalThis    worker thread");

      /*
        If sqlite3.js is in a directory other than this script, in order
        to get sqlite3.js to resolve sqlite3.wasm properly, we have to
        explicitly tell it where sqlite3.js is being loaded from. We do
        that by passing the `sqlite3.dir=theDirName` URL argument to
        _this_ script. That URL argument will be seen by the JS/WASM
        loader and it will adjust the sqlite3.wasm path accordingly. If
       sqlite3.js/.wasm are in the same directory as this script then
        that's not needed.

        URL arguments passed as part of the filename via importScripts()
        are simply lost, and such scripts see the globalThis.location of
        _this_ script.
      */
      let sqlite3Js = 'sqlite3.js';
      const urlParams = new URL(globalThis.location.href).searchParams;
      if(urlParams.has('sqlite3.dir')){
        sqlite3Js = urlParams.get('sqlite3.dir') + '/' + sqlite3Js;
      }
      importScripts(sqlite3Js);

      //  end    if(globalThis.window!==globalThis)
  }



    try {
//      document.getElementById("execOut").innerHTML += "try demo2 ...<br>";
//      log("try demo2 ...");
      demo2(sqlite3);
    }catch(e){
      error("Exception:",e.message);
    }




  globalThis.sqlite3InitModule({
    /* We can redirect any stdout/stderr from the module like so, but
       note that doing so makes use of Emscripten-isms, not
       well-defined sqlite APIs. */
    print: log,
    printErr: error
  }).then(

  //  document.getElementById("execOut").innerHTML += "Initialization complete, try function sqlite3 ...<br>";
  //  log("Initialization complete, try function sqlite3 ...");

  function(sqlite3){
 //    //  console.log('sqlite3 =',sqlite3);
 //   log('sqlite3 =',sqlite3);
 //   log("Initialization complete.");
//  document.getElementById("execOut").innerHTML += "Initialization complete.<br>";


    try {

    }catch(e){
      error("Exception:",e.message);
    }


     //   end     function(sqlite3)
  }

     //  end then
  );

     //  end       globalThis.sqlite3InitModule
  })();



      //  end    function getStopsWithinRange
   }










function updateGps() 
{ 
      currentLong += 5;

      if( currentLong > 500 ) { 
          currentLong = 445; 
      } 

       document.getElementById("CurrentLong").innerHTML = 
               '<center>' + 
               '<span style="color:Navy;font-size:1.25em;">' +
               '&nbsp;&nbsp;' + 
               currentLong + 
               '&nbsp;&nbsp;' + 
               '</span>' + 
               '</center>';

       getStopsWithinRange(currentLong-10, currentLong+10);

   //   end     function updateGps
}






function calculateDistance( currentLong, currentLatt, targetLong, targetLatt )
{

     var direction = 0;

     var legA = 0;
     var legB = 0;
     var legHypotenuse = 0;

     if ( targetLong > currentLong ) {
          direction = 1;
          legA = targetLong - currentLong;

          //  end    targetLong > currentLong
     }
     else if ( targetLong < currentLong ) 
     {
          direction = -1;
          legA = currentLong - targetLong;
     }


     if ( targetLatt > currentLatt ) {
          legB = targetLatt - currentLatt;

          //  end    targetLatt > currentLatt
     }
     else if ( targetLatt < currentLatt ) 
     {
          legB = currentLatt - targetLatt;
     }

      legHypotenuse = (legA ** 2) + (legB ** 2);

      legHypotenuse = Math.sqrt(legHypotenuse);


      if ( direction < 0 ) {
         legHypotenuse = 0 - legHypotenuse;
      }

      return legHypotenuse;

  // end function calculateDistance
}














'use strict';
(function(){
  /**
     Set up our output channel differently depending
     on whether we are running in a worker thread or
     the main (UI) thread.
  */
  let logHtml;
  if(globalThis.window === globalThis /* UI thread */){
    //  console.log("Running demo from main UI thread.");
    //  log("Running demo from main UI thread.");
    logHtml = function(cssClass,...args){
      const ln = document.createElement('div');
      if(cssClass) ln.classList.add(cssClass);
      ln.append(document.createTextNode(args.join(' ')));
      document.body.append(ln);
    };
  }else{ /* Worker thread */
    //  console.log("Running demo from Worker thread.");
    //  log("Running demo from Worker thread.");
    logHtml = function(cssClass,...args){
      postMessage({
        type:'log',
        payload:{cssClass, args}
      });
    };
  }
  const log = (...args)=>logHtml('',...args);
  const warn = (...args)=>logHtml('warning',...args);
  const error = (...args)=>logHtml('error',...args);

  const demo1 = function(sqlite3){
    const capi = sqlite3.capi/*C-style API*/,
          oo = sqlite3.oo1/*high-level OO API*/;
    log("Check if SQLite is available ...");
    log("The SQLite version is",capi.sqlite3_libversion());

//    log("sqlite3 version",capi.sqlite3_libversion(), capi.sqlite3_sourceid());
    const db = new oo.DB("/travelers.db",'ct');
//    log("transient db =",db.filename);
    /**
       Never(!) rely on garbage collection to clean up DBs and
       (especially) prepared statements. Always wrap their lifetimes
       in a try/finally construct, as demonstrated below. By and
       large, client code can entirely avoid lifetime-related
       complications of prepared statement objects by using the
       DB.exec() method for SQL execution.
    */

   var currentLong;
   var currentLatt;


    try {

//      log("Check if foreign keys are enabled ...");
      db.exec({
        sql: "PRAGMA foreign_keys",
        rowMode: 'array', // 'array' (default), 'object', or 'stmt'
        callback: function(row){
//          log("row ",++this.counter,"=",row);
          if(row == 0) {
          log("\t\t" + "*** foreign keys ARE NOT enabled ***");
          }
          else {
          log("\t\t" + "*** foreign keys ARE enabled ***");
          }
        }.bind({counter: 0})
      });
//      log("Query finished.");
//      log("\n");
//      log("_");



      log("*** ENABLE foreign keys ***");
      db.exec("PRAGMA foreign_keys=1");
//      log("\n");
//      log("_");



//      log("Check if foreign keys are enabled ...");
      db.exec({
        sql: "PRAGMA foreign_keys",
        rowMode: 'array', // 'array' (default), 'object', or 'stmt'
        callback: function(row){
//          log("row ",++this.counter,"=",row);
          if(row == 0) {
          log("\t\t" + "*** foreign keys ARE NOT enabled ***");
          }
          else {
          log("\t\t" + "*** foreign keys ARE enabled ***");
          }
        }.bind({counter: 0})
      });
//      log("Query finished.");
//      log("\n");
//      log("_");



      log("Initializing the database ...");
//      log("\n");
//      log("_");



//      log("_");

//      log("\n");
//      log("******* Create Tables GAS, DIESEL and FOOD  *****************");
//      log("\n");
//      log("_");




//      log("DROP TABLE IF EXISTS GAS ...");
      db.exec("DROP TABLE IF EXISTS GAS");
      log("\n");



//      log("CREATE TABLE IF NOT EXISTS GAS ( gas_id unique, status VARCHAR(6), PRIMARY KEY(gas_id) )   ...");
      db.exec("CREATE TABLE IF NOT EXISTS GAS ( gas_id unique, status VARCHAR(6), PRIMARY KEY(gas_id) )");
      log("\n");



//      log("INSERT INTO GAS entry 0 ...");
        db.exec({
          sql: "INSERT INTO GAS ( gas_id, status ) values ($a,$b)",
          // bind by parameter name...
          bind: {$a: 0, $b: 'GAS' }
        });

//      log("INSERT INTO GAS entry 1 ...");
        db.exec({
          sql: "INSERT INTO GAS ( gas_id, status ) values ($a,$b)",
          // bind by parameter name...
          bind: {$a: 1, $b: 'NO GAS' }
        });


//      log("Query GAS table ...");
//      db.exec({
//        sql: "select * from GAS",
//        rowMode: 'array', // 'array' (default), 'object', or 'stmt'
//        callback: function(row){
//          log("row ",++this.counter,"=",row);
//        }.bind({counter: 0})
//      });
//      log("Query finished.");
//      log("\n");
//      log("_");






//      log("DROP TABLE IF EXISTS DIESEL ...");
      db.exec("DROP TABLE IF EXISTS DIESEL");
      log("\n");


//      log("CREATE TABLE IF NOT EXISTS DIESEL ( diesel_id unique, status VARCHAR(9), PRIMARY KEY(diesel_id) )   ...");
      db.exec("CREATE TABLE IF NOT EXISTS DIESEL ( diesel_id unique, status VARCHAR(9), PRIMARY KEY(diesel_id) )");
      log("\n");



//      log("INSERT INTO DIESEL entry 0 ...");
        db.exec({
          sql: "INSERT INTO DIESEL ( diesel_id, status ) values ($a,$b)",
          // bind by parameter name...
          bind: {$a: 0, $b: 'DIESEL' }
        });

//      log("INSERT INTO DIESEL entry 1 ...");
        db.exec({
          sql: "INSERT INTO DIESEL ( diesel_id, status ) values ($a,$b)",
          // bind by parameter name...
          bind: {$a: 1, $b: 'NO DIESEL' }
        });


//      log("Query DIESEL table ...");
//      db.exec({
//        sql: "select * from DIESEL",
//        rowMode: 'array', // 'array' (default), 'object', or 'stmt'
//        callback: function(row){
//          log("row ",++this.counter,"=",row);
//        }.bind({counter: 0})
//      });
//      log("Query finished.");
//      log("\n");
//      log("_");






//      log("DROP TABLE IF EXISTS FOOD ...");
      db.exec("DROP TABLE IF EXISTS FOOD");
      log("\n");


//      log("CREATE TABLE IF NOT EXISTS FOOD ( food_id unique, status VARCHAR(7), PRIMARY KEY(food_id) )   ...");
      db.exec("CREATE TABLE IF NOT EXISTS FOOD ( food_id unique, status VARCHAR(7), PRIMARY KEY(food_id) )");
      log("\n");



//      log("INSERT INTO FOOD entry 0 ...");
        db.exec({
          sql: "INSERT INTO FOOD ( food_id, status ) values ($a,$b)",
          // bind by parameter name...
          bind: {$a: 0, $b: 'FOOD' }
        });

//      log("INSERT INTO FOOD entry 1 ...");
        db.exec({
          sql: "INSERT INTO FOOD ( food_id, status ) values ($a,$b)",
          // bind by parameter name...
          bind: {$a: 1, $b: 'NO FOOD' }
        });


//      log("Query FOOD table ...");
//      db.exec({
//        sql: "select * from FOOD",
//        rowMode: 'array', // 'array' (default), 'object', or 'stmt'
//        callback: function(row){
//          log("row ",++this.counter,"=",row);
//        }.bind({counter: 0})
//      });
//      log("Query finished.");
//      log("\n");
//      log("_");




//      log("DROP TABLE IF EXISTS REST_STOP ...");
      db.exec("DROP TABLE IF EXISTS REST_STOP");
      log("\n");



//      log("*******       CREATE TABLE IF NOT EXISTS REST_STOP   ...");
      db.exec("CREATE TABLE IF NOT EXISTS REST_STOP ( restStop_id unique, restStopName VARCHAR(28), longtitude INTEGER, lattitude INTEGER, gas INTEGER, diesel INTEGER, food INTEGER, PRIMARY KEY(restStop_id), FOREIGN KEY (gas) REFERENCES GAS (gas_id) ON DELETE CASCADE ON UPDATE CASCADE, FOREIGN KEY (diesel) REFERENCES DIESEL (diesel_id) ON DELETE CASCADE ON UPDATE CASCADE, FOREIGN KEY (food) REFERENCES FOOD (food_id) ON DELETE CASCADE ON UPDATE CASCADE)");
      log("\n");



//      log("INSERT INTO REST_STOP entry 0 ...");
        db.exec({
          sql: "INSERT INTO REST_STOP ( restStop_id, restStopName, longtitude, lattitude, gas, diesel, food ) values ($a,$b,$c,$d,$e,$f,$g)",
          // bind by parameter name...
          bind: {$a: 0, $b: 'Petrol King #1', $c: 450, $d: 900, $e: 0, $f: 0, $g: 0 }
        });


//        log("INSERT INTO REST_STOP entry 1 ...");
        db.exec({
          sql: "INSERT INTO REST_STOP ( restStop_id, restStopName, longtitude, lattitude, gas, diesel, food ) values ($a,$b,$c,$d,$e,$f,$g)",
          // bind by parameter name...
          bind: {$a: 1, $b: 'Oil City #2', $c: 457, $d: 900, $e: 1, $f: 1, $g: 1 }
        });

//        log("INSERT INTO REST_STOP entry 2 ...");
        db.exec({
          sql: "INSERT INTO REST_STOP ( restStop_id, restStopName, longtitude, lattitude, gas, diesel, food ) values ($a,$b,$c,$d,$e,$f,$g)",
          // bind by parameter name...
          bind: {$a: 2, $b: 'Burger Stop #3', $c: 462, $d: 900, $e: 1, $f: 1, $g: 0 }
        });

//        log("INSERT INTO REST_STOP entry 3 ...");
        db.exec({
          sql: "INSERT INTO REST_STOP ( restStop_id, restStopName, longtitude, lattitude, gas, diesel, food ) values ($a,$b,$c,$d,$e,$f,$g)",
          // bind by parameter name...
          bind: {$a: 3, $b: 'Fill \'Er Up #4', $c: 462, $d: 900, $e: 0, $f: 0, $g: 1 }
        });

//        log("INSERT INTO REST_STOP entry 4 ...");
        db.exec({
          sql: "INSERT INTO REST_STOP ( restStop_id, restStopName, longtitude, lattitude, gas, diesel, food ) values ($a,$b,$c,$d,$e,$f,$g)",
          // bind by parameter name...
          bind: {$a: 4, $b: 'Taco Town #5', $c: 467, $d: 900, $e: 1, $f: 1, $g: 0 }
        });

//        log("INSERT INTO REST_STOP entry 5 ...");
        db.exec({
          sql: "INSERT INTO REST_STOP ( restStop_id, restStopName, longtitude, lattitude, gas, diesel, food ) values ($a,$b,$c,$d,$e,$f,$g)",
          // bind by parameter name...
          bind: {$a: 5, $b: 'Oil City #6', $c: 467, $d: 900, $e: 0, $f: 0, $g: 1 }
        });

//        log("INSERT INTO REST_STOP entry 6 ...");
        db.exec({
          sql: "INSERT INTO REST_STOP ( restStop_id, restStopName, longtitude, lattitude, gas, diesel, food ) values ($a,$b,$c,$d,$e,$f,$g)",
          // bind by parameter name...
          bind: {$a: 6, $b: 'Petrol King #7', $c: 475, $d: 900, $e: 0, $f: 0, $g: 0 }
        });

//        log("INSERT INTO REST_STOP entry 7 ...");
        db.exec({
          sql: "INSERT INTO REST_STOP ( restStop_id, restStopName, longtitude, lattitude, gas, diesel, food ) values ($a,$b,$c,$d,$e,$f,$g)",
          // bind by parameter name...
          bind: {$a: 7, $b: 'Fill \'Er Up #8', $c: 482, $d: 900, $e: 0, $f: 0, $g: 0 }
        });

//        log("INSERT INTO REST_STOP entry 8 ...");
        db.exec({
          sql: "INSERT INTO REST_STOP ( restStop_id, restStopName, longtitude, lattitude, gas, diesel, food ) values ($a,$b,$c,$d,$e,$f,$g)",
          // bind by parameter name...
          bind: {$a: 8, $b: 'Burger Stop #9', $c: 487, $d: 900, $e: 1, $f: 1, $g: 0 }
        });

//        log("INSERT INTO REST_STOP entry 9 ...");
        db.exec({
          sql: "INSERT INTO REST_STOP ( restStop_id, restStopName, longtitude, lattitude, gas, diesel, food ) values ($a,$b,$c,$d,$e,$f,$g)",
          // bind by parameter name...
          bind: {$a: 9, $b: 'Petrol King #10', $c: 487, $d: 900, $e: 0, $f: 0, $g: 0 }
        });

//        log("INSERT INTO REST_STOP entry 10 ...");
        db.exec({
          sql: "INSERT INTO REST_STOP ( restStop_id, restStopName, longtitude, lattitude, gas, diesel, food ) values ($a,$b,$c,$d,$e,$f,$g)",
          // bind by parameter name...
          bind: {$a: 10, $b: 'Oil City #11', $c: 492, $d: 900, $e: 1, $f: 1, $g: 1 }
        });

//        log("INSERT INTO REST_STOP entry 11 ...");
        db.exec({
          sql: "INSERT INTO REST_STOP ( restStop_id, restStopName, longtitude, lattitude, gas, diesel, food ) values ($a,$b,$c,$d,$e,$f,$g)",
          // bind by parameter name...
          bind: {$a: 11, $b: 'Burger Stop #12', $c: 492, $d: 900, $e: 1, $f: 1, $g: 0 }
        });

//        log("INSERT INTO REST_STOP entry 12 ...");
        db.exec({
          sql: "INSERT INTO REST_STOP ( restStop_id, restStopName, longtitude, lattitude, gas, diesel, food ) values ($a,$b,$c,$d,$e,$f,$g)",
          // bind by parameter name...
          bind: {$a: 12, $b: 'Fill \'Er Up #13', $c: 492, $d: 900, $e: 0, $f: 0, $g: 0 }
        });

//        log("INSERT INTO REST_STOP entry 13 ...");
        db.exec({
          sql: "INSERT INTO REST_STOP ( restStop_id, restStopName, longtitude, lattitude, gas, diesel, food ) values ($a,$b,$c,$d,$e,$f,$g)",
          // bind by parameter name...
          bind: {$a: 13, $b: 'Taco Town #14', $c: 502, $d: 900, $e: 1, $f: 1, $g: 0 }
        });

//        log("INSERT INTO REST_STOP entry 14 ...");
        db.exec({
          sql: "INSERT INTO REST_STOP ( restStop_id, restStopName, longtitude, lattitude, gas, diesel, food ) values ($a,$b,$c,$d,$e,$f,$g)",
          // bind by parameter name...
          bind: {$a: 14, $b: 'Oil City #15', $c: 502, $d: 900, $e: 0, $f: 0, $g: 0 }
        });

//        log("INSERT INTO REST_STOP entry 15 ...");
        db.exec({
          sql: "INSERT INTO REST_STOP ( restStop_id, restStopName, longtitude, lattitude, gas, diesel, food ) values ($a,$b,$c,$d,$e,$f,$g)",
          // bind by parameter name...
          bind: {$a: 15, $b: 'Petrol King #16', $c: 510, $d: 900, $e: 0, $f: 0, $g: 1 }
        });

//        log("INSERT INTO REST_STOP entry 16 ...");
        db.exec({
          sql: "INSERT INTO REST_STOP ( restStop_id, restStopName, longtitude, lattitude, gas, diesel, food ) values ($a,$b,$c,$d,$e,$f,$g)",
          // bind by parameter name...
          bind: {$a: 16, $b: 'Burger Stop #17', $c: 518, $d: 900, $e: 1, $f: 1, $g: 0 }
        });

//        log("INSERT INTO REST_STOP entry 17 ...");
        db.exec({
          sql: "INSERT INTO REST_STOP ( restStop_id, restStopName, longtitude, lattitude, gas, diesel, food ) values ($a,$b,$c,$d,$e,$f,$g)",
          // bind by parameter name...
          bind: {$a: 17, $b: 'Fill \'Er Up #18', $c: 518, $d: 900, $e: 0, $f: 0, $g: 1 }
        });
//        log("\n");
//        log("_");



//      log("***  Database Initialization complete.  ***");
//      log("\n");
//      log("_");




//      log("*****    Query REST_STOP without foreign keys ...");
//      db.exec({
//        sql: "select * from REST_STOP",
//        rowMode: 'array', // 'array' (default), 'object', or 'stmt'
//        callback: function(row){
//          log("row ",++this.counter,"=",row);
//        }.bind({counter: 0})
//      });
//      log("Query finished.");
//      log("\n");
//      log("_");




var longWindowStart = 445;
var longWindowEnd = 465;




var sqlStatement = "SELECT a.restStop_id, a.restStopName, a.longtitude, a.lattitude, c.status, d.status, e.status " + 
"FROM REST_STOP a " + 
"JOIN GAS c " + 
"ON a.gas = c.gas_id " + 
"JOIN DIESEL d " + 
"ON a.diesel = d.diesel_id " + 
"JOIN FOOD e " + 
"ON a.food = e.food_id " + 
"WHERE longtitude BETWEEN " + 
longWindowStart + 
" AND " + 
longWindowEnd + 
" GROUP BY restStopName ORDER BY restStop_id";



//      document.getElementById("execOut").innerHTML = "";
//
//      document.getElementById("execOut").innerHTML += 
//           "***** Query REST_STOP with foreign keys where longtitude BETWEEN " + longWindowStart + 
//           " AND " + longWindowEnd + " ...<br>";


//        log("***** Query REST_STOP with foreign keys where longtitude BETWEEN ", 
//                      longWindowStart, " AND ", longWindowEnd, " ...");
      db.exec({
        sql: sqlStatement,
        rowMode: 'stmt', // 'array' (default), 'object', or 'stmt'
        callback: function(row){
          ++this.counter;
//          log("row ",++this.counter," _ ",row.get(0), " _ ", row.get(1), " _ ", row.get(2), " _ ", row.get(3),
//               " _ ", row.get(4), " _ ", row.get(5), " _ ", row.get(6));
//
//          log("row ",++this.counter,"=",row);
//          document.getElementById("execOut").innerHTML += 
//               "row " + this.counter + "=" + 
//               row.get(0) + 
//               "  " + 
//               row.get(1) + 
//               "  " + 
//               row.get(2) + 
//               "  " + 
//               row.get(3) + 
//               "  " + 
//               row.get(4) + 
//               "  " + 
//               row.get(5) + 
//               "  " + 
//               row.get(6) + 
//               "  " + 
//               "<br>";


         switch(this.counter) {

             case 1:       
                //  alert("case = 1");

  	        document.getElementById("Rest1name").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(1) + 
  	            "&nbsp;&nbsp;</center>"; 

	        var tmpDistance = calculateDistance( longWindowStart, 900, row.get(2), row.get(3) );


                if (tmpDistance < 0) {
  	            document.getElementById("Rest1distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Maroon;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                } else {
  	            document.getElementById("Rest1distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Black;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                }


  	        document.getElementById("Rest1gas").innerHTML =  
                    "<center>&nbsp;&nbsp;" + 
                    row.get(4) + 
  	            "&nbsp;&nbsp;</center>"; 

  	        document.getElementById("Rest1diesel").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(5) + 
  	            "&nbsp;&nbsp;</center>"; 

  	         document.getElementById("Rest1food").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(6) + 
  	            "&nbsp;&nbsp;</center>"; 

             break;


             case 2:       
                //  alert("case = 2");

  	        document.getElementById("Rest2name").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(1) + 
  	            "&nbsp;&nbsp;</center>"; 

	        var tmpDistance = calculateDistance( longWindowStart, 900, row.get(2), row.get(3) );


                if (tmpDistance < 0) {
  	            document.getElementById("Rest2distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Maroon;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                } else {
  	            document.getElementById("Rest2distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Black;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                }


  	        document.getElementById("Rest2gas").innerHTML =  
                    "<center>&nbsp;&nbsp;" + 
                    row.get(4) + 
  	            "&nbsp;&nbsp;</center>"; 

  	        document.getElementById("Rest2diesel").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(5) + 
  	            "&nbsp;&nbsp;</center>"; 

  	         document.getElementById("Rest2food").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(6) + 
  	            "&nbsp;&nbsp;</center>"; 

             break;


             case 3:       
                //  alert("case = 3");

  	        document.getElementById("Rest3name").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(1) + 
  	            "&nbsp;&nbsp;</center>"; 

	        var tmpDistance = calculateDistance( longWindowStart, 900, row.get(2), row.get(3) );


                if (tmpDistance < 0) {
  	            document.getElementById("Rest3distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Maroon;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                } else {
  	            document.getElementById("Rest3distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Black;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                }


  	        document.getElementById("Rest3gas").innerHTML =  
                    "<center>&nbsp;&nbsp;" + 
                    row.get(4) + 
  	            "&nbsp;&nbsp;</center>"; 

  	        document.getElementById("Rest3diesel").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(5) + 
  	            "&nbsp;&nbsp;</center>"; 

  	         document.getElementById("Rest3food").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(6) + 
  	            "&nbsp;&nbsp;</center>"; 

             break;




             case 4:       
                //  alert("case = 4");

  	        document.getElementById("Rest4name").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(1) + 
  	            "&nbsp;&nbsp;</center>"; 

	        var tmpDistance = calculateDistance( longWindowStart, 900, row.get(2), row.get(3) );


                if (tmpDistance < 0) {
  	            document.getElementById("Rest4distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Maroon;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                } else {
  	            document.getElementById("Rest4distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Black;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                }


  	        document.getElementById("Rest4gas").innerHTML =  
                    "<center>&nbsp;&nbsp;" + 
                    row.get(4) + 
  	            "&nbsp;&nbsp;</center>"; 

  	        document.getElementById("Rest4diesel").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(5) + 
  	            "&nbsp;&nbsp;</center>"; 

  	         document.getElementById("Rest4food").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(6) + 
  	            "&nbsp;&nbsp;</center>"; 

             break;



             case 5:       
                //  alert("case = 5");

  	        document.getElementById("Rest5name").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(1) + 
  	            "&nbsp;&nbsp;</center>"; 

	        var tmpDistance = calculateDistance( longWindowStart, 900, row.get(2), row.get(3) );


                if (tmpDistance < 0) {
  	            document.getElementById("Rest5distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Maroon;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                } else {
  	            document.getElementById("Rest5distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Black;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                }


  	        document.getElementById("Rest5gas").innerHTML =  
                    "<center>&nbsp;&nbsp;" + 
                    row.get(4) + 
  	            "&nbsp;&nbsp;</center>"; 

  	        document.getElementById("Rest5diesel").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(5) + 
  	            "&nbsp;&nbsp;</center>"; 

  	         document.getElementById("Rest5food").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(6) + 
  	            "&nbsp;&nbsp;</center>"; 

             break;




             case 6:       
                //  alert("case = 6");

  	        document.getElementById("Rest6name").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(1) + 
  	            "&nbsp;&nbsp;</center>"; 

	        var tmpDistance = calculateDistance( longWindowStart, 900, row.get(2), row.get(3) );


                if (tmpDistance < 0) {
  	            document.getElementById("Rest6distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Maroon;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                } else {
  	            document.getElementById("Rest6distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Black;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                }


  	        document.getElementById("Rest6gas").innerHTML =  
                    "<center>&nbsp;&nbsp;" + 
                    row.get(4) + 
  	            "&nbsp;&nbsp;</center>"; 

  	        document.getElementById("Rest6diesel").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(5) + 
  	            "&nbsp;&nbsp;</center>"; 

  	         document.getElementById("Rest6food").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(6) + 
  	            "&nbsp;&nbsp;</center>"; 

             break;



             case 7:       
                //  alert("case = 7");

  	        document.getElementById("Rest7name").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(1) + 
  	            "&nbsp;&nbsp;</center>"; 

	        var tmpDistance = calculateDistance( longWindowStart, 900, row.get(2), row.get(3) );


                if (tmpDistance < 0) {
  	            document.getElementById("Rest7distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Maroon;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                } else {
  	            document.getElementById("Rest7distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Black;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                }


  	        document.getElementById("Rest7gas").innerHTML =  
                    "<center>&nbsp;&nbsp;" + 
                    row.get(4) + 
  	            "&nbsp;&nbsp;</center>"; 

  	        document.getElementById("Rest7diesel").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(5) + 
  	            "&nbsp;&nbsp;</center>"; 

  	         document.getElementById("Rest7food").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(6) + 
  	            "&nbsp;&nbsp;</center>"; 

             break;



             case 8:       
                //  alert("case = 8");

  	        document.getElementById("Rest8name").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(1) + 
  	            "&nbsp;&nbsp;</center>"; 

	        var tmpDistance = calculateDistance( longWindowStart, 900, row.get(2), row.get(3) );


                if (tmpDistance < 0) {
  	            document.getElementById("Rest8distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Maroon;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                } else {
  	            document.getElementById("Rest8distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Black;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                }


  	        document.getElementById("Rest8gas").innerHTML =  
                    "<center>&nbsp;&nbsp;" + 
                    row.get(4) + 
  	            "&nbsp;&nbsp;</center>"; 

  	        document.getElementById("Rest8diesel").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(5) + 
  	            "&nbsp;&nbsp;</center>"; 

  	         document.getElementById("Rest8food").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(6) + 
  	            "&nbsp;&nbsp;</center>"; 

             break;




             case 9:       
                //  alert("case = 9");

  	        document.getElementById("Rest9name").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(1) + 
  	            "&nbsp;&nbsp;</center>"; 

	        var tmpDistance = calculateDistance( longWindowStart, 900, row.get(2), row.get(3) );


                if (tmpDistance < 0) {
  	            document.getElementById("Rest9distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Maroon;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                } else {
  	            document.getElementById("Rest9distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Black;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                }


  	        document.getElementById("Rest9gas").innerHTML =  
                    "<center>&nbsp;&nbsp;" + 
                    row.get(4) + 
  	            "&nbsp;&nbsp;</center>"; 

  	        document.getElementById("Rest9diesel").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(5) + 
  	            "&nbsp;&nbsp;</center>"; 

  	         document.getElementById("Rest9food").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(6) + 
  	            "&nbsp;&nbsp;</center>"; 

             break;




             case 10:       
                //  alert("case = 10");

  	        document.getElementById("Rest10name").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(1) + 
  	            "&nbsp;&nbsp;</center>"; 

	        var tmpDistance = calculateDistance( longWindowStart, 900, row.get(2), row.get(3) );


                if (tmpDistance < 0) {
  	            document.getElementById("Rest10distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Maroon;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                } else {
  	            document.getElementById("Rest10distance").innerHTML = 
                    '<center>' + 
                    '<span style="color:Black;"><b>' + 
                    tmpDistance + 
                    '</b></span>' + 
  	            '</center>'; 
                }


  	        document.getElementById("Rest10gas").innerHTML =  
                    "<center>&nbsp;&nbsp;" + 
                    row.get(4) + 
  	            "&nbsp;&nbsp;</center>"; 

  	        document.getElementById("Rest10diesel").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(5) + 
  	            "&nbsp;&nbsp;</center>"; 

  	         document.getElementById("Rest10food").innerHTML = 
                    "<center>&nbsp;&nbsp;" + 
                    row.get(6) + 
  	            "&nbsp;&nbsp;</center>"; 

             break;








               default:
                  //  echo ' <script> alert("case = default" + "<br>"); </script>';
   
              //  end switch
           }


        }.bind({counter: 0})
      });
//      document.getElementById("execOut").innerHTML += "Query finished.<br><br>";
//      log("Query finished.");
//      log("\n");
//      log("_");







//      log("\n");
//      log("************************");
      log("Database initialization complete");
//      log("************************");
//      log("\n");


      currentLong = 445;
      currentLatt = 900;


       document.getElementById("CurrentLong").innerHTML = 
               '<center>' + 
               '<span style="color:Navy;font-size:1.25em;">' +
               '&nbsp;&nbsp;' + 
               currentLong + 
               '&nbsp;&nbsp;' + 
               '</span>' + 
               '</center>';

       document.getElementById("CurrentLatt").innerHTML = 
               '<center>' + 
               '<span style="color:Navy;font-size:1.25em;">' +
               '&nbsp;&nbsp;' + 
               currentLatt + 
               '&nbsp;&nbsp;' + 
               '</span>' + 
               '</center>';







    }finally{

//  **********************************************
        db.close();
  //      log("Database closed.");

//  **********************************************

    }

  //  log("***  That's all, folks!  ***");

    /**
       Some of the features of the OO API not demonstrated above...

       - get change count (total or statement-local, 32- or 64-bit)
       - get a DB's file name

       Misc. Stmt features:

       - Various forms of bind()
       - clearBindings()
       - reset()
       - Various forms of step()
       - Variants of get() for explicit type treatment/conversion,
         e.g. getInt(), getFloat(), getBlob(), getJSON()
       - getColumnName(ndx), getColumnNames()
       - getParamIndex(name)
    */
  }/*demo1()*/;

  log("Loading and initializing the sqlite3 module ...");
  if(globalThis.window!==globalThis) /*worker thread*/{
    //  log("running in worker thread ......");

    /*
      If sqlite3.js is in a directory other than this script, in order
      to get sqlite3.js to resolve sqlite3.wasm properly, we have to
      explicitly tell it where sqlite3.js is being loaded from. We do
      that by passing the `sqlite3.dir=theDirName` URL argument to
      _this_ script. That URL argument will be seen by the JS/WASM
      loader and it will adjust the sqlite3.wasm path accordingly. If
      sqlite3.js/.wasm are in the same directory as this script then
      that's not needed.

      URL arguments passed as part of the filename via importScripts()
      are simply lost, and such scripts see the globalThis.location of
      _this_ script.
    */
    let sqlite3Js = 'sqlite3.js';
    const urlParams = new URL(globalThis.location.href).searchParams;
    if(urlParams.has('sqlite3.dir')){
      sqlite3Js = urlParams.get('sqlite3.dir') + '/' + sqlite3Js;
    }
    importScripts(sqlite3Js);
    //   end     if(globalThis.window!==globalThis) /*worker thread*/
  }


 // log("Initializing the sqlite3 module ...");

  globalThis.sqlite3InitModule({
    /* We can redirect any stdout/stderr from the module like so, but
       note that doing so makes use of Emscripten-isms, not
       well-defined sqlite APIs. */
    print: log,
    printErr: error
  }).then(function(sqlite3){
    //  console.log('sqlite3 =',sqlite3);
  //  log('sqlite3 =',sqlite3);
    log("Initialization complete.");
    //  **** make sqlite3 global ***
    globalThis.sqlite3 = sqlite3;
    //  ****************************
    try {
      demo1(sqlite3);
    }catch(e){
      error("Exception:",e.message);
    }
  });
})();
