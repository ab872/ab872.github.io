<!--  browserZoom_js  -->

// start      browserZoom.js


function showZoomHelp() { 

  //     alert("begin     showZoomHelp");

//  window.open(url, winName,
//                             winFeatures);

//  winFeatures -
//  "toolbar=no[yes], location=no[yes], 
//   directories=no[yes], status=no[yes],
//   menubar=no[yes], scrollbars=no[yes],
//   resizable=no[yes], width=100,
//   height=100, top=100, left=100"



//  newWindow.document.write('xxx');

//  newWindow.document
//  .body.write('xxx');

//  newWindow.document.body
//  .innerHTML = "xxxx";

//  script  can't execute in newWindow

//    newWindow.close();







   if (isFirefox) { 
           //   begin      Firefox 


if (isAndroid) {
           //   begin      Firefox under Android

//  alert("Firefox under Android");


var displayStr = "";

displayStr = displayStr +
'<br><center><span style="color:Navy;font-size:48px;"><b>Browser Zoom</b></span></center><br>';




//  add help info here

displayStr = displayStr + 
'<center>';

displayStr = displayStr + 
'<span style="color:Black;font-size:24px;"><b>Chrome:</b>&nbsp;&nbsp;&nbsp;Click the three dots in the top right of the browser window.<br></span>';

displayStr = displayStr + 
'<img alt="browser zoom on the Chrome browser" src="image/colorPicker/chromeZoom.jpg" height="250" width="250" border="3" />';

displayStr = displayStr + 
'</center>';

displayStr = displayStr + 
'<br><br><br>';





displayStr = displayStr + 
'<center>';

displayStr = displayStr + 
'<span style="color:Black;font-size:24px;"><b>Edge:</b>&nbsp;&nbsp;&nbsp;Click the three dots in the top right of the browser window.<br></span>';

displayStr = displayStr + 
'<img alt="browser zoom on the Edge browser" src="image/colorPicker/edgeZoom.jpg" height="250" width="250" border="3" />';

displayStr = displayStr + 
'</center>';

displayStr = displayStr + 
'<br><br><br>';








displayStr = displayStr + 
'<center>';

displayStr = displayStr + 
'<span style="color:Black;font-size:24px;"><b>Firefox:</b>&nbsp;&nbsp;&nbsp;Click the three bars in the top right of the browser window.<br></span>';

displayStr = displayStr + 
'<img alt="browser zoom on the Firefox browser" src="image/colorPicker/firefoxZoom.jpg" height="250" width="250" border="3" />';

displayStr = displayStr + 
'</center>';

displayStr = displayStr + 
'<br><br><br>';


//   end      help info






var displayStr2 = "";


var displayStrEnd = "";

displayStrEnd = displayStrEnd +
'<br>';
 
displayStrEnd = displayStrEnd +
'<center><span style="color:Navy;font-size:28px;"><b>Copyright &#169; 2022. All rights reserved.</b></span></center><br><br>';

displayStrEnd = displayStrEnd +
'<br>'; 





var newWindow = 
window.open("", "ab872 - Color Table", "toolbar=no, status=no, scrollbars=yes width=100, height=100, left=100 top=100");

newWindow.document.write(displayStr);

newWindow.document.write(displayStr2);

newWindow.document.write(displayStrEnd);



           //   end     Firefox under Android
        } 

        if (isWin10) {
           //   begin      Firefox under Win10

  
var displayStr = "";

displayStr = displayStr +
'<br><center><span style="color:Navy;font-size:48px;"><b>Browser Zoom</b></span></center><br>';




//  add help info here

displayStr = displayStr + 
'<center>';

displayStr = displayStr + 
'<span style="color:Black;font-size:24px;"><b>Chrome:</b>&nbsp;&nbsp;&nbsp;Click the three dots in the top right of the browser window.<br></span>';

displayStr = displayStr + 
'<img alt="browser zoom on the Chrome browser" src="image/colorPicker/chromeZoom.jpg" height="250" width="250" border="3" />';

displayStr = displayStr + 
'</center>';

displayStr = displayStr + 
'<br><br><br>';





displayStr = displayStr + 
'<center>';

displayStr = displayStr + 
'<span style="color:Black;font-size:24px;"><b>Edge:</b>&nbsp;&nbsp;&nbsp;Click the three dots in the top right of the browser window.<br></span>';

displayStr = displayStr + 
'<img alt="browser zoom on the Edge browser" src="image/colorPicker/edgeZoom.jpg" height="250" width="250" border="3" />';

displayStr = displayStr + 
'</center>';

displayStr = displayStr + 
'<br><br><br>';








displayStr = displayStr + 
'<center>';

displayStr = displayStr + 
'<span style="color:Black;font-size:24px;"><b>Firefox:</b>&nbsp;&nbsp;&nbsp;Click the three bars in the top right of the browser window.<br></span>';

displayStr = displayStr + 
'<img alt="browser zoom on the Firefox browser" src="image/colorPicker/firefoxZoom.jpg" height="250" width="250" border="3" />';

displayStr = displayStr + 
'</center>';

displayStr = displayStr + 
'<br><br><br>';


//   end      help info





var displayStr2 = "";


var displayStrEnd = "";

displayStrEnd = displayStrEnd +
'<br>';
 
displayStrEnd = displayStrEnd +
'<center><span style="color:Navy;font-size:24px;"><b>Copyright &#169; 2022. All rights reserved.</b></span></center><br><br>';

displayStrEnd = displayStrEnd +
'<br>'; 



var newWindow = 
window.open("", "ab872 - Color Table", "toolbar=no, status=no, scrollbars=yes width=500, height=500, left=100 top=100");

newWindow.document.write(displayStr);

newWindow.document.write(displayStr2);

newWindow.document.write(displayStrEnd);




           //   end        Firefox under Win10
        } 




           //   end        Firefox 
   } else if (isChrome) { 


        if (isAndroid) {
           //   begin    Chrome under Android

          //   alert("Chrome under Android");


var displayStr = "";

displayStr = displayStr +
'<br><center><span style="color:Navy;font-size:48px;"><b>Browser Zoom</b></span></center><br>';



//  add help info here

displayStr = displayStr + 
'<center>';

displayStr = displayStr + 
'<span style="color:Black;font-size:24px;"><b>Chrome:</b>&nbsp;&nbsp;&nbsp;Click the three dots in the top right of the browser window.<br></span>';

displayStr = displayStr + 
'<img alt="browser zoom on the Chrome browser" src="image/colorPicker/chromeZoom.jpg" height="250" width="250" border="3" />';

displayStr = displayStr + 
'</center>';

displayStr = displayStr + 
'<br><br><br>';





displayStr = displayStr + 
'<center>';

displayStr = displayStr + 
'<span style="color:Black;font-size:24px;"><b>Edge:</b>&nbsp;&nbsp;&nbsp;Click the three dots in the top right of the browser window.<br></span>';

displayStr = displayStr + 
'<img alt="browser zoom on the Edge browser" src="image/colorPicker/edgeZoom.jpg" height="250" width="250" border="3" />';

displayStr = displayStr + 
'</center>';

displayStr = displayStr + 
'<br><br><br>';








displayStr = displayStr + 
'<center>';

displayStr = displayStr + 
'<span style="color:Black;font-size:24px;"><b>Firefox:</b>&nbsp;&nbsp;&nbsp;Click the three bars in the top right of the browser window.<br></span>';

displayStr = displayStr + 
'<img alt="browser zoom on the Firefox browser" src="image/colorPicker/firefoxZoom.jpg" height="250" width="250" border="3" />';

displayStr = displayStr + 
'</center>';

displayStr = displayStr + 
'<br><br><br>';


//   end      help info








var displayStr2 = "";


var displayStrEnd = "";

displayStrEnd = displayStrEnd +
'<br>';
 
displayStrEnd = displayStrEnd +
'<center><span style="color:Navy;font-size:22px;"><b>Copyright &#169; 2022. All rights reserved.</b></span></center><br><br>';

displayStrEnd = displayStrEnd +
'<br>'; 





var newWindow = 
window.open("", "ab872 - Color Table", "toolbar=no, status=no, scrollbars=yes width=100, height=100, left=100 top=100");


newWindow.document.write(displayStr);

newWindow.document.write(displayStr2);

newWindow.document.write(displayStrEnd);



           //   end       Chrome under Android
         } else {
           //   begin    Chrome others


var displayStr = "";

displayStr = displayStr +
'<br><center><span style="color:Navy;font-size:48px;"><b>Browser Zoom</b></span></center><br>';



//  add help info here

displayStr = displayStr + 
'<center>';

displayStr = displayStr + 
'<span style="color:Black;font-size:24px;"><b>Chrome:</b>&nbsp;&nbsp;&nbsp;Click the three dots in the top right of the browser window.<br></span>';

displayStr = displayStr + 
'<img alt="browser zoom on the Chrome browser" src="image/colorPicker/chromeZoom.jpg" height="250" width="250" border="3" />';

displayStr = displayStr + 
'</center>';

displayStr = displayStr + 
'<br><br><br>';





displayStr = displayStr + 
'<center>';

displayStr = displayStr + 
'<span style="color:Black;font-size:24px;"><b>Edge:</b>&nbsp;&nbsp;&nbsp;Click the three dots in the top right of the browser window.<br></span>';

displayStr = displayStr + 
'<img alt="browser zoom on the Edge browser" src="image/colorPicker/edgeZoom.jpg" height="250" width="250" border="3" />';

displayStr = displayStr + 
'</center>';

displayStr = displayStr + 
'<br><br><br>';








displayStr = displayStr + 
'<center>';

displayStr = displayStr + 
'<span style="color:Black;font-size:24px;"><b>Firefox:</b>&nbsp;&nbsp;&nbsp;Click the three bars in the top right of the browser window.<br></span>';

displayStr = displayStr + 
'<img alt="browser zoom on the Firefox browser" src="image/colorPicker/firefoxZoom.jpg" height="250" width="250" border="3" />';

displayStr = displayStr + 
'</center>';

displayStr = displayStr + 
'<br><br><br>';


//   end      help info




var displayStr2 = "";


var displayStrEnd = "";

displayStrEnd = displayStrEnd +
'<br>';
 
displayStrEnd = displayStrEnd +
'<center><span style="color:Navy;font-size:24px;"><b>Copyright &#169; 2022. All rights reserved.</b></span></center><br><br>';

displayStrEnd = displayStrEnd +
'<br>'; 




var newWindow = 
window.open("", "ab872 - Color Table", "toolbar=no, status=no, scrollbars=yes width=500, height=500, left=100 top=100");

newWindow.document.write(displayStr);

newWindow.document.write(displayStr2);

newWindow.document.write(displayStrEnd);



             //   end     Chrome others
          }


           //   end        Chrome
   } else if (isSafari) { 


var displayStr = "";

displayStr = displayStr +
'<br><center><span style="color:Navy;font-size:24px;"><b>Browser Zoom</b></span></center><br>';



//  add help info here

displayStr = displayStr + 
'<center>';

displayStr = displayStr + 
'<span style="color:Black;font-size:24px;"><b>Chrome:</b>&nbsp;&nbsp;&nbsp;Click the three dots in the top right of the browser window.<br></span>';

displayStr = displayStr + 
'<img alt="browser zoom on the Chrome browser" src="image/colorPicker/chromeZoom.jpg" height="250" width="250" border="3" />';

displayStr = displayStr + 
'</center>';

displayStr = displayStr + 
'<br><br><br>';





displayStr = displayStr + 
'<center>';

displayStr = displayStr + 
'<span style="color:Black;font-size:24px;"><b>Edge:</b>&nbsp;&nbsp;&nbsp;Click the three dots in the top right of the browser window.<br></span>';

displayStr = displayStr + 
'<img alt="browser zoom on the Edge browser" src="image/colorPicker/edgeZoom.jpg" height="250" width="250" border="3" />';

displayStr = displayStr + 
'</center>';

displayStr = displayStr + 
'<br><br><br>';








displayStr = displayStr + 
'<center>';

displayStr = displayStr + 
'<span style="color:Black;font-size:24px;"><b>Firefox:</b>&nbsp;&nbsp;&nbsp;Click the three bars in the top right of the browser window.<br></span>';

displayStr = displayStr + 
'<img alt="browser zoom on the Firefox browser" src="image/colorPicker/firefoxZoom.jpg" height="250" width="250" border="3" />';

displayStr = displayStr + 
'</center>';

displayStr = displayStr + 
'<br><br><br>';


//   end      help info




var displayStr2 = "";


var displayStrEnd = "";

displayStrEnd = displayStrEnd +
'<br>';
 
displayStrEnd = displayStrEnd +
'<center><span style="color:Navy;font-size:10px;"><b>Copyright &#169; 2022. All rights reserved.</b></span></center><br><br>';

displayStrEnd = displayStrEnd +
'<br>'; 




var newWindow = 
window.open("", "ab872 - Color Table", "toolbar=no, status=no, scrollbars=yes width=500, height=500, left=100 top=100");

newWindow.document.write(displayStr);

newWindow.document.write(displayStr2);

newWindow.document.write(displayStrEnd);




           //   end        Safari
   } else if (isEdge) { 


var displayStr = "";

displayStr = displayStr +
'<br><center><span style="color:Navy;font-size:48px;"><b>Browser Zoom</b></span></center><br>';



//  add help info here

displayStr = displayStr + 
'<center>';

displayStr = displayStr + 
'<span style="color:Black;font-size:24px;"><b>Chrome:</b>&nbsp;&nbsp;&nbsp;Click the three dots in the top right of the browser window.<br></span>';

displayStr = displayStr + 
'<img alt="browser zoom on the Chrome browser" src="image/colorPicker/chromeZoom.jpg" height="250" width="250" border="3" />';

displayStr = displayStr + 
'</center>';

displayStr = displayStr + 
'<br><br><br>';





displayStr = displayStr + 
'<center>';

displayStr = displayStr + 
'<span style="color:Black;font-size:24px;"><b>Edge:</b>&nbsp;&nbsp;&nbsp;Click the three dots in the top right of the browser window.<br></span>';

displayStr = displayStr + 
'<img alt="browser zoom on the Edge browser" src="image/colorPicker/edgeZoom.jpg" height="250" width="250" border="3" />';

displayStr = displayStr + 
'</center>';

displayStr = displayStr + 
'<br><br><br>';








displayStr = displayStr + 
'<center>';

displayStr = displayStr + 
'<span style="color:Black;font-size:24px;"><b>Firefox:</b>&nbsp;&nbsp;&nbsp;Click the three bars in the top right of the browser window.<br></span>';

displayStr = displayStr + 
'<img alt="browser zoom on the Firefox browser" src="image/colorPicker/firefoxZoom.jpg" height="250" width="250" border="3" />';

displayStr = displayStr + 
'</center>';

displayStr = displayStr + 
'<br><br><br>';


//   end      help info




var displayStr2 = "";


var displayStrEnd = "";

displayStrEnd = displayStrEnd +
'<br>';
 
displayStrEnd = displayStrEnd +
'<center><span style="color:Navy;font-size:24px;"><b>Copyright &#169; 2022. All rights reserved.</b></span></center><br><br>';

displayStrEnd = displayStrEnd +
'<br>'; 



var newWindow = 
window.open("", "ab872 - Color Table", "toolbar=no, status=no, scrollbars=yes width=500, height=500, left=100 top=100");

newWindow.document.write(displayStr);

newWindow.document.write(displayStr2);

newWindow.document.write(displayStrEnd);






           //   end        Edge
   } else { 
//  begin      unidentified browser


var displayStr = "";

displayStr = displayStr +
'<br><center><span style="color:Navy;font-size:24px;"><b>Browser Zoom</b></span></center><br>';




//  add help info here

displayStr = displayStr + 
'<center>';

displayStr = displayStr + 
'<span style="color:Black;font-size:24px;"><b>Chrome:</b>&nbsp;&nbsp;&nbsp;Click the three dots in the top right of the browser window.<br></span>';

displayStr = displayStr + 
'<img alt="browser zoom on the Chrome browser" src="image/colorPicker/chromeZoom.jpg" height="250" width="250" border="3" />';

displayStr = displayStr + 
'</center>';

displayStr = displayStr + 
'<br><br><br>';





displayStr = displayStr + 
'<center>';

displayStr = displayStr + 
'<span style="color:Black;font-size:24px;"><b>Edge:</b>&nbsp;&nbsp;&nbsp;Click the three dots in the top right of the browser window.<br></span>';

displayStr = displayStr + 
'<img alt="browser zoom on the Edge browser" src="image/colorPicker/edgeZoom.jpg" height="250" width="250" border="3" />';

displayStr = displayStr + 
'</center>';

displayStr = displayStr + 
'<br><br><br>';








displayStr = displayStr + 
'<center>';

displayStr = displayStr + 
'<span style="color:Black;font-size:24px;"><b>Firefox:</b>&nbsp;&nbsp;&nbsp;Click the three bars in the top right of the browser window.<br></span>';

displayStr = displayStr + 
'<img alt="browser zoom on the Firefox browser" src="image/colorPicker/firefoxZoom.jpg" height="250" width="250" border="3" />';

displayStr = displayStr + 
'</center>';

displayStr = displayStr + 
'<br><br><br>';


//   end      help info



var displayStr2 = "";


var displayStrEnd = "";

displayStrEnd = displayStrEnd +
'<br>';
 
displayStrEnd = displayStrEnd +
'<center><span style="color:Navy;font-size:10px;"><b>Copyright &#169; 2022. All rights reserved.</b></span></center><br><br>';

displayStrEnd = displayStrEnd +
'<br>'; 




var newWindow = 
window.open("", "ab872 - Color Table", "toolbar=no, status=no, scrollbars=yes width=500, height=500, left=100 top=100");

newWindow.document.write(displayStr);

newWindow.document.write(displayStr2);

newWindow.document.write(displayStrEnd);





      //  end       unidentified browser
   } 









   <!-- 
     -->

   //  alert("end     showZoomHelp");

   // end   function showZoomHelp
} 



// end     browserZoom.js




  
  

  
        
            