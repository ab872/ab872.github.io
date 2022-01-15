<!--  colorPicker_js  -->



// start      colorPicker.js


//  this JavaScript file attempts to override the slight differences
//  in page rendering by different browsers

//  the goal is to provide a more consistent cross-browser experience








   if (isFirefox) { 
           //   begin      Firefox 

if (isAndroid) {
           //   begin      Firefox under Android

           alert("Firefox under Android");


           //  adjust the size of the
           //  Bootstrap icon
           //  id="BootstrapIcon"           
           document.getElementById("BootstrapIcon").style.width="32px"; 
           document.getElementById("BootstrapIcon").style.height="32px";


           //  adjust the size of the labels

           document.getElementById('textColorLabel').style.fontSize="8px";

           document.getElementById('textBackgroundLabel').style.fontSize="8px";

           document.getElementById('colorValueStrLabel').style.fontSize="8px";

           document.getElementById('colorSampleLabel').style.fontSize="8px";

           document.getElementById('fontSizeLabel').style.fontSize="8px";




           //  adjust the sample text

           document.getElementById('sampleText').innerHTML="This is a sample of the text.<br>";

           document.getElementById('sampleText').style.fontSize="12px";





            //  adjust the vertical spacing

            document.getElementById('verticalSpacer0').innerHTML="<br><br><br>";



           document.getElementById('verticalSpacer1').innerHTML="<br>";

           document.getElementById('verticalSpacer1').style.fontSize="3px";



           document.getElementById('verticalSpacer2').innerHTML="<br><br>";

           document.getElementById('verticalSpacer2').style.fontSize="3px";




           document.getElementById('verticalSpacer3').innerHTML="<br>";

           document.getElementById('verticalSpacer3').style.fontSize="3px";




           document.getElementById('verticalSpacer4').innerHTML="<br>";

           document.getElementById('verticalSpacer4').style.fontSize="3px";



           document.getElementById('verticalSpacer5').innerHTML="<br>";

           document.getElementById('verticalSpacer5').style.fontSize="3px";




           //  adjust position of the RGB
           //  values display

           document.getElementById('RgbValuesRedGreenSpace').innerHTML="&nbsp;&nbsp;&nbsp;";


           document.getElementById('RgbValuesGreenBlueSpace').innerHTML="&nbsp;&nbsp;&nbsp;";










           //  adjust position and size of the
           //   increase RGB buttons



           document.getElementById('increaseRgbInitialSpace').innerHTML="";




           document.getElementById('increaseRgbRedGreenSpace').innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

           document.getElementById('increaseRgbGreenBlueSpace').innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";





           document.getElementById("increaseRedButton").style.width="48px"; 
           document.getElementById("increaseRedButton").style.height="48px";


           document.getElementById("increaseRedButtonIcon").style.width="42px"; 
           document.getElementById("increaseRedButtonIcon").style.height="42px";






           document.getElementById("increaseGreenButton").style.width="48px"; 
           document.getElementById("increaseGreenButton").style.height="48px";


           document.getElementById("increaseGreenButtonIcon").style.width="42px"; 
           document.getElementById("increaseGreenButtonIcon").style.height="42px";






           document.getElementById("increaseBlueButton").style.width="48px"; 
           document.getElementById("increaseBlueButton").style.height="48px";


           document.getElementById("increaseBlueButtonIcon").style.width="42px"; 
           document.getElementById("increaseBlueButtonIcon").style.height="42px";





           //  id="increaseBlueButton"
           //  Original width:40px;height:40px

           //  id="increaseBlueButtonIcon"
           //  Original  width="32" height="32" 







           //  adjust position and size of the
           //   decrease RGB buttons


           document.getElementById('decreaseRgbInitialSpace').innerHTML="";



           document.getElementById('decreaseRgbRedGreenSpace').innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

           document.getElementById('decreaseRgbGreenBlueSpace').innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";





           document.getElementById("decreaseRedButton").style.width="48px"; 
           document.getElementById("decreaseRedButton").style.height="48px";


           document.getElementById("decreaseRedButtonIcon").style.width="42px"; 
           document.getElementById("decreaseRedButtonIcon").style.height="42px";





           document.getElementById("decreaseGreenButton").style.width="48px"; 
           document.getElementById("decreaseGreenButton").style.height="48px";


           document.getElementById("decreaseGreenButtonIcon").style.width="42px"; 
           document.getElementById("decreaseGreenButtonIcon").style.height="42px";






           document.getElementById("decreaseBlueButton").style.width="48px"; 
           document.getElementById("decreaseBlueButton").style.height="48px";


           document.getElementById("decreaseBlueButtonIcon").style.width="42px"; 
           document.getElementById("decreaseBlueButtonIcon").style.height="42px";





           //  id="decreaseBlueButton"
           //  Original width:40px;height:40px

           //  id="decreaseBlueButtonIcon"
           //  Original  width="32" height="32"





           //  adjust position of the RGB sliders

           // Original width 150px

           document.getElementById("redSlider").style.width="100px"; 

           document.getElementById("redSlider").style.border="4px solid red"; 




           document.getElementById("greenSlider").style.width="100px"; 

           document.getElementById("greenSlider").style.border="4px solid green"; 




           document.getElementById("blueSlider").style.width="100px"; 

           document.getElementById("blueSlider").style.border="4px solid blue"; 






           document.getElementById('sliderRgbRedGreenSpace').innerHTML =
                   "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

           document.getElementById('sliderRgbGreenBlueSpace').innerHTML =
                   "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";








           //  .style.backgroundColor="rgb(0, 0, 0)";
           //  border:2px solid lightgrey;
           //  border-radius:8px;

 



           //  adjust position and size of the RGB
           //  legends

           document.getElementById('colorLegendRed').innerHTML="<b>&nbsp;&nbsp;Red</b>";

           document.getElementById('colorLegendRed').style.fontSize="8px";




           document.getElementById('colorLegendGreen').innerHTML="<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Green</b>";

           document.getElementById('colorLegendGreen').style.fontSize="8px";




           document.getElementById('colorLegendBlue').innerHTML="<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blue</b>";

           document.getElementById('colorLegendBlue').style.fontSize="8px";



           document.getElementById('colorLegendEnd').innerHTML="<b>&nbsp;&nbsp;</b>";

           document.getElementById('colorLegendEnd').style.fontSize="8px";











           //   end     Firefox under Android
        } 

        if (isWin10) {
           //   begin      Firefox under Win10


           //  adjust the size of the
           //   Bootstrap icon
           //  id="BootstrapIcon"
           document.getElementById("BootstrapIcon").style.width="16px"; 
           document.getElementById("BootstrapIcon").style.height="16px";


           //  adjust the size of the icon in the info button
           //  id="svgInfoButton" 
           //  original width="32" 
           //  original height="32" 
           //  original transform="translate(-4,0)"   //  x, y
           document.getElementById("svgInfoButton").style.width="26px"; 
           document.getElementById("svgInfoButton").style.height="26px";
           //  reposition the icon      x  y
           document.getElementById("svgInfoButton").translate(0, 22);



           document.getElementById('textIntroduction').style.fontSize="24px";

           document.getElementById('textIntroductionEmphasized1').style.fontSize="25px";

           document.getElementById('textIntroductionEmphasized2').style.fontSize="25px";

           document.getElementById('textIntroductionEmphasized3').style.fontSize="25px";

           document.getElementById('textIntroductionEmphasized4').style.fontSize="25px";

           document.getElementById('textIntroductionEmphasized5').style.fontSize="25px";

           document.getElementById('textIntroductionEmphasized6').style.fontSize="25px";



           //  id="refHeader"   12px
           //  id="ref1"              10px
           //  id="refView1"          11px
           //  id="ref14"              10px
           //  id="refView14"          11px
           //  id="refLink1"




           document.getElementById('refHeader').style.fontSize="31px";

           document.getElementById('ref1').style.fontSize="24px";
           document.getElementById('refView1').style.fontSize="25px";
           document.getElementById('refLink1').style.fontSize="25px";


           document.getElementById('ref2').style.fontSize="24px";
           document.getElementById('refView2').style.fontSize="25px";           
           document.getElementById('refLink2').style.fontSize="25px";


           document.getElementById('ref3').style.fontSize="24px";
           document.getElementById('refView3').style.fontSize="25px";
           document.getElementById('refLink3').style.fontSize="25px";


           document.getElementById('ref4').style.fontSize="24px";
           document.getElementById('refView4').style.fontSize="25px";
           document.getElementById('refLink4').style.fontSize="25px";


           document.getElementById('ref5').style.fontSize="24px";
           document.getElementById('refView5').style.fontSize="25px";
           document.getElementById('refLink5').style.fontSize="25px";


           document.getElementById('ref6').style.fontSize="24px";
           document.getElementById('refView6').style.fontSize="25px";
           document.getElementById('refLink6').style.fontSize="25px";


           document.getElementById('ref7').style.fontSize="24px";
           document.getElementById('refView7').style.fontSize="25px";
           document.getElementById('refLink7').style.fontSize="25px";


           document.getElementById('ref8').style.fontSize="24px";
           document.getElementById('refView8').style.fontSize="25px";
           document.getElementById('refLink8').style.fontSize="25px";


           document.getElementById('ref9').style.fontSize="24px";
           document.getElementById('refView9').style.fontSize="25px";
           document.getElementById('refLink9').style.fontSize="25px";


           document.getElementById('ref10').style.fontSize="24px";
           document.getElementById('refView10').style.fontSize="25px";
           document.getElementById('refLink10').style.fontSize="25px";


           document.getElementById('ref11').style.fontSize="24px";
           document.getElementById('refView11').style.fontSize="25px";
           document.getElementById('refLink11').style.fontSize="25px";


           document.getElementById('ref12').style.fontSize="24px";
           document.getElementById('refView12').style.fontSize="25px";
           document.getElementById('refLink12').style.fontSize="25px";


           document.getElementById('ref13').style.fontSize="24px";
           document.getElementById('refView13').style.fontSize="25px";
           document.getElementById('refLink13').style.fontSize="25px";


           document.getElementById('ref14').style.fontSize="24px";
           document.getElementById('refView14').style.fontSize="25px";
           document.getElementById('refLink14').style.fontSize="25px";




           //  adjust the vertical spacing

            document.getElementById('verticalSpacer0').innerHTML="<br><br><br>";



           document.getElementById('verticalSpacer1').innerHTML="<br>";

      //     document.getElementById('verticalSpacer1').style.fontSize="3px";



           document.getElementById('verticalSpacer2').innerHTML="<br><br>";

     //      document.getElementById('verticalSpacer2').style.fontSize="3px";




           document.getElementById('verticalSpacer3').innerHTML="<br>";

     //      document.getElementById('verticalSpacer3').style.fontSize="3px";




           document.getElementById('verticalSpacer4').innerHTML="<br><br>";

    //       document.getElementById('verticalSpacer4').style.fontSize="3px";



           document.getElementById('verticalSpacer5').innerHTML="<br>";

    //       document.getElementById('verticalSpacer5').style.fontSize="3px";



 


           //  adjust the sample text

           document.getElementById('sampleText').innerHTML="This is a sample of the text.<br>";

           document.getElementById('sampleText').style.fontSize="16px";



 


           //  adjust the color string display size

           //  id="textColorLabel" 
           //  font-size:30px;"
           //  Text Color
           document.getElementById('textColorLabel').style.fontSize="18px";


           //  input 
           //  height:40px;
           //  font-size:30px;
           //  id="textColorInput" 
           //  title="the string for the text color value" 
           //  size="38" 
           //  maxlength="38"
           document.getElementById('textColorInput').style.height="20px";
           document.getElementById('textColorInput').style.fontSize="18px";






           //  id="textBackgroundLabel" 
           //  font-size:30px;
           //  Text Background
           document.getElementById('textBackgroundLabel').style.fontSize="18px";


           //  input 
           //  height:40px;
           //  font-size:30px;
           //  id="textBackgroundInput" 
           //  title="the string for the text background value"
           //  size="38" 
           //  maxlength="38" 
           document.getElementById('textBackgroundInput').style.height="20px";
           document.getElementById('textBackgroundInput').style.fontSize="18px";





           //  BUTTON 
           //  background-color:steelgray;
           //  color: goldenrod;
           //  width=120px;
           //  height:40px;
           //  id="setTextButton" 
           //  title="set the text color" 
           //  ACCESSKEY=T
           //  <span id="setTextCaption" style="font-size:28px;color:blue">

           document.getElementById('setTextButton').style.height="25px";
           document.getElementById('setTextButton').style.width="240px";
           document.getElementById('setTextCaption').style.fontSize="18px";


           //  BUTTON
           //  background-color:goldenrod;
           //  color:steelgray;
           //  width=120px;
           //  height:40px;
           //  id="setBackgroundButton" 
           //  title="set the background color" 
           //  ACCESSKEY=B
           //  <span id="setBackgroundCaption" style="font-size:28px;">

           document.getElementById('setBackgroundButton').style.height="25px";
           document.getElementById('setBackgroundButton').style.width="240px";
           document.getElementById('setBackgroundCaption').style.fontSize="18px";






          //  adjust the color value string label

           document.getElementById('colorValueStrLabel').style.fontSize="18px";


           //  BUTTON 
           //  width:90px;
           //  height:40px;
           //  id="colorInfoButton" 
           //  title="display a table of predefined colors" 
           //  ACCESSKEY=I
           //  <span id="infoCaption" style="font-size:28px;">

           document.getElementById('colorInfoButton').style.width="90px";
           document.getElementById('colorInfoButton').style.height="30px";
           document.getElementById('infoCaption').style.fontSize="18px";




          //  adjust the color value string display

           //  input 
           //  height:40px;
           //  font-size:30px;
           //  id="colorValueInput" 
           //  title="the string for the color value" 
           //  size="38" 
           //  maxlength="38"

           document.getElementById('colorValueInput').style.height="20px";

           document.getElementById('colorValueInput').style.fontSize="12px";






           document.getElementById('colorSampleLabel').style.fontSize="18px";


           //  input 
           //  height:40px;
           //  font-size:30px;
           //  id="sampleColorInput" 
           //  title="sample color" 
           //  size="4" 
           //  maxlength="4"
           //  readonly

           document.getElementById('sampleColorInput').style.height="20px";
           document.getElementById('sampleColorInput').style.fontSize="18px";




           //  input 
           //  height:40px;
           //  font-size:30px;
           //  id="redValueInput" 
           //  title="Red value" 
           //  size="4" 
           //  maxlength="4"

           document.getElementById('redValueInput').style.height="18px";
           document.getElementById('redValueInput').style.fontSize="16px";

           document.getElementById('greenValueInput').style.height="18px";
           document.getElementById('greenValueInput').style.fontSize="16px";

           document.getElementById('blueValueInput').style.height="18px";
           document.getElementById('blueValueInput').style.fontSize="16px";



           document.getElementById('RgbValuesRedGreenSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

       //    document.getElementById('RgbValuesRedGreenSpace').style.fontSize="16px";



           document.getElementById('RgbValuesGreenBlueSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

       //    document.getElementById('RgbValuesGreenBlueSpace').style.fontSize="16px";






         //  adjust the size of the remaining labels

           document.getElementById('fontSizeLabel').style.fontSize="18px";



//  <span id="fontSizeLabel" style="color:Black;font-size:30px;">Font Size</span><br>




           //  <input 
           //  height:40px;
           //  font-size:30px;
           //  id="sizeOfFontInput" 
           //  title="the font size" 
           //  size="5" 
           //  maxlength="5" 

           document.getElementById('sizeOfFontInput').style.height="18px";
           document.getElementById('sizeOfFontInput').style.fontSize="16px";




           //  BUTTON 
           //  width:40px;
           //  height:40px;
           //  id="decreaseFontSizeButton" 
           //  title="decrease the font size" 
           //  ACCESSKEY=f
           //  <span id="decreaseFontCaption" style="font-size:28px;">

           document.getElementById('decreaseFontSizeButton').style.width="30px";
           document.getElementById('decreaseFontSizeButton').style.height="30px";
           document.getElementById('decreaseFontCaption').style.fontSize="18px";



           //  &nbsp;&nbsp;&nbsp;&nbsp;

           //  input 
           //  id="fontSlider" 
           //  type="range" min="0" max="100" step="1" 
           //  width:480px;
           //  height:40px;
           //  -webkit-appearance:slider-horizontal" orient="horizontal"

           document.getElementById("fontSlider").style.width="480px"; 
           document.getElementById("fontSlider").style.height="22px"; 








           //  &nbsp;&nbsp;&nbsp;&nbsp;


           //  BUTTON
           //  width:40px;
           //  height:40px;
           //  id="increaseFontSizeButton" 
           //  title="increase the font size" 
           //  ACCESSKEY=F
           //  <span style="font-size:28px;">
           //  <span id="increaseFontCaption" style="font-size:28px;">


           //  svg  
           //  width="32" height="32" 
           //  transform="translate(-4,0)" 
           //  viewBox="0 0 16 16" 
           //  /svg


           document.getElementById('increaseFontSizeButton').style.width="30px";
           document.getElementById('increaseFontSizeButton').style.height="30px";
           document.getElementById('increaseFontCaption').style.fontSize="18px";










           //  adjust position of the RGB sliders

           // Original width 150px

           document.getElementById("redSlider").style.width="50px"; 
           document.getElementById("redSlider").style.height="260px"; 
           document.getElementById("redSlider").style.border="4px solid red"; 


           document.getElementById("greenSlider").style.width="50px"; 
           document.getElementById("greenSlider").style.height="260px"; 
           document.getElementById("greenSlider").style.border="4px solid green"; 


           document.getElementById("blueSlider").style.width="50px"; 
           document.getElementById("blueSlider").style.height="260px"; 
           document.getElementById("blueSlider").style.border="4px solid blue"; 






           document.getElementById('sliderRgbRedGreenSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

           document.getElementById('sliderRgbGreenBlueSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";






           //  adjust position and size of the RGB
           //  legends

           document.getElementById('colorLegendRed').innerHTML="<b>&nbsp;&nbsp;&nbsp;Red</b>";

           document.getElementById('colorLegendRed').style.fontSize="22px";




           document.getElementById('colorLegendGreen').innerHTML="<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Green</b>";

           document.getElementById('colorLegendGreen').style.fontSize="22px";




           document.getElementById('colorLegendBlue').innerHTML="<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blue</b>";

           document.getElementById('colorLegendBlue').style.fontSize="22px";



           document.getElementById('colorLegendEnd').innerHTML="<b>&nbsp;&nbsp;</b>";

           document.getElementById('colorLegendEnd').style.fontSize="22px";





           //  adjust position and size of the
           //   increase RGB buttons



           document.getElementById('increaseRgbInitialSpace').innerHTML="";




           document.getElementById('increaseRgbRedGreenSpace').innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

           document.getElementById('increaseRgbGreenBlueSpace').innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";


           //  id="increaseBlueButton"
           //  Original width:40px;height:40px

           //  id="increaseBlueButtonIcon"
           //  Original  width="32" height="32" 


           document.getElementById('increaseRgbInitialSpace').innerHTML = "";



           document.getElementById('increaseRgbRedGreenSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;";

           document.getElementById('increaseRgbGreenBlueSpace').innerHTML = 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;";



           document.getElementById("increaseRedButton").style.width="34px"; 
           document.getElementById("increaseRedButton").style.height="34px";

           document.getElementById("increaseRedButtonIcon").style.width="28px"; 
           document.getElementById("increaseRedButtonIcon").style.height="28px";




           document.getElementById("increaseGreenButton").style.width="34px"; 
           document.getElementById("increaseGreenButton").style.height="34px";

           document.getElementById("increaseGreenButtonIcon").style.width="28px"; 
           document.getElementById("increaseGreenButtonIcon").style.height="28px";




           document.getElementById("increaseBlueButton").style.width="34px"; 
           document.getElementById("increaseBlueButton").style.height="34px";

           document.getElementById("increaseBlueButtonIcon").style.width="28px"; 
           document.getElementById("increaseBlueButtonIcon").style.height="28px";






           //  adjust position and size of the
           //   decrease RGB buttons


           //  id="decreaseBlueButton"
           //  Original width:40px;height:40px

           //  id="decreaseBlueButtonIcon"
           //  Original  width="32" height="32"



           document.getElementById('decreaseRgbInitialSpace').innerHTML="";



           document.getElementById('decreaseRgbRedGreenSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;";


           document.getElementById('decreaseRgbGreenBlueSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;";






           document.getElementById("decreaseRedButton").style.width="34px"; 
           document.getElementById("decreaseRedButton").style.height="34px";

           document.getElementById("decreaseRedButtonIcon").style.width="28px"; 
           document.getElementById("decreaseRedButtonIcon").style.height="28px";





           document.getElementById("decreaseGreenButton").style.width="34px"; 
           document.getElementById("decreaseGreenButton").style.height="34px";

           document.getElementById("decreaseGreenButtonIcon").style.width="28px"; 
           document.getElementById("decreaseGreenButtonIcon").style.height="28px";






           document.getElementById("decreaseBlueButton").style.width="34px"; 
           document.getElementById("decreaseBlueButton").style.height="34px";

           document.getElementById("decreaseBlueButtonIcon").style.width="28px"; 
           document.getElementById("decreaseBlueButtonIcon").style.height="28px";





           //   end        Firefox under Win10
        } 




           //   end        Firefox 
   } else if (isChrome) { 


        if (isAndroid) {
           //   begin    Chrome under Android

           alert("Chrome under Android");



           //  adjust the size of the
           //   Bootstrap icon
           //  id="BootstrapIcon"
           document.getElementById("BootstrapIcon").style.width="32px"; 
           document.getElementById("BootstrapIcon").style.height="32px";





           //  adjust position of the RGB sliders

           document.getElementById('sliderRgbRedGreenSpace').innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

           document.getElementById('sliderRgbGreenBlueSpace').innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";





           //  adjust position of the
           //   increase RGB buttons

           //  document.getElementById
           //  ('increaseRgbInitialSpace')
           //  .innerHTML="";

           document.getElementById('increaseRgbRedGreenSpace').innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

           document.getElementById('increaseRgbGreenBlueSpace').innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";





           //  adjust position of the
           //   decrease RGB buttons


           //  document.getElementById
           //  ('decreaseRgbInitialSpace')
           //  .innerHTML="";



           document.getElementById('decreaseRgbRedGreenSpace').innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

           document.getElementById('decreaseRgbGreenBlueSpace').innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";







           //  adjust position of the RGB
           //  legends

           document.getElementById('colorLegendRed').innerHTML="<b>&nbsp;&nbsp;&nbsp;&nbsp;Red</b>";
  
           document.getElementById('colorLegendRed').style.fontSize="32px";



           document.getElementById('colorLegendGreen').innerHTML="<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Green</b>";

           document.getElementById('colorLegendGreen').style.fontSize="32px";



           document.getElementById('colorLegendBlue').innerHTML="<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blue</b>";

           document.getElementById('colorLegendBlue').style.fontSize="32px";




           document.getElementById('colorLegendEnd').innerHTML="<b>&nbsp;&nbsp;&nbsp;</b>";

           document.getElementById('colorLegendEnd').style.fontSize="32px";










           //   end       Chrome under Android
         } else {
           //   begin    Chrome others


           //  adjust the size of the
           //   Bootstrap icon
           //  id="BootstrapIcon"
           document.getElementById("BootstrapIcon").style.width="16px"; 
           document.getElementById("BootstrapIcon").style.height="16px";



           //  adjust the size of the icon in the info button
           //  id="svgInfoButton" 
           //  original width="32" 
           //  original height="32" 
           //  original transform="translate(-4,0)"   //  x, y
           document.getElementById("svgInfoButton").style.width="26px"; 
           document.getElementById("svgInfoButton").style.height="26px";
           //  reposition the icon      x  y
           document.getElementById("svgInfoButton").translate(0, 22);






           document.getElementById('textIntroduction').style.fontSize="24px";

           document.getElementById('textIntroductionEmphasized1').style.fontSize="25px";

           document.getElementById('textIntroductionEmphasized2').style.fontSize="25px";

           document.getElementById('textIntroductionEmphasized3').style.fontSize="25px";

           document.getElementById('textIntroductionEmphasized4').style.fontSize="25px";

           document.getElementById('textIntroductionEmphasized5').style.fontSize="25px";

           document.getElementById('textIntroductionEmphasized6').style.fontSize="25px";



           //  id="refHeader"   12px
           //  id="ref1"              10px
           //  id="refView1"          11px
           //  id="ref14"              10px
           //  id="refView14"          11px
           //  id="refLink1"




           document.getElementById('refHeader').style.fontSize="31px";

           document.getElementById('ref1').style.fontSize="24px";
           document.getElementById('refView1').style.fontSize="25px";
           document.getElementById('refLink1').style.fontSize="25px";


           document.getElementById('ref2').style.fontSize="24px";
           document.getElementById('refView2').style.fontSize="25px";           
           document.getElementById('refLink2').style.fontSize="25px";


           document.getElementById('ref3').style.fontSize="24px";
           document.getElementById('refView3').style.fontSize="25px";
           document.getElementById('refLink3').style.fontSize="25px";


           document.getElementById('ref4').style.fontSize="24px";
           document.getElementById('refView4').style.fontSize="25px";
           document.getElementById('refLink4').style.fontSize="25px";


           document.getElementById('ref5').style.fontSize="24px";
           document.getElementById('refView5').style.fontSize="25px";
           document.getElementById('refLink5').style.fontSize="25px";


           document.getElementById('ref6').style.fontSize="24px";
           document.getElementById('refView6').style.fontSize="25px";
           document.getElementById('refLink6').style.fontSize="25px";


           document.getElementById('ref7').style.fontSize="24px";
           document.getElementById('refView7').style.fontSize="25px";
           document.getElementById('refLink7').style.fontSize="25px";


           document.getElementById('ref8').style.fontSize="24px";
           document.getElementById('refView8').style.fontSize="25px";
           document.getElementById('refLink8').style.fontSize="25px";


           document.getElementById('ref9').style.fontSize="24px";
           document.getElementById('refView9').style.fontSize="25px";
           document.getElementById('refLink9').style.fontSize="25px";


           document.getElementById('ref10').style.fontSize="24px";
           document.getElementById('refView10').style.fontSize="25px";
           document.getElementById('refLink10').style.fontSize="25px";


           document.getElementById('ref11').style.fontSize="24px";
           document.getElementById('refView11').style.fontSize="25px";
           document.getElementById('refLink11').style.fontSize="25px";


           document.getElementById('ref12').style.fontSize="24px";
           document.getElementById('refView12').style.fontSize="25px";
           document.getElementById('refLink12').style.fontSize="25px";


           document.getElementById('ref13').style.fontSize="24px";
           document.getElementById('refView13').style.fontSize="25px";
           document.getElementById('refLink13').style.fontSize="25px";


           document.getElementById('ref14').style.fontSize="24px";
           document.getElementById('refView14').style.fontSize="25px";
           document.getElementById('refLink14').style.fontSize="25px";




           //  adjust the vertical spacing

            document.getElementById('verticalSpacer0').innerHTML="<br><br><br>";



           document.getElementById('verticalSpacer1').innerHTML="<br>";

      //     document.getElementById('verticalSpacer1').style.fontSize="3px";



           document.getElementById('verticalSpacer2').innerHTML="<br><br>";

     //      document.getElementById('verticalSpacer2').style.fontSize="3px";




           document.getElementById('verticalSpacer3').innerHTML="<br>";

     //      document.getElementById('verticalSpacer3').style.fontSize="3px";




           document.getElementById('verticalSpacer4').innerHTML="<br><br>";

    //       document.getElementById('verticalSpacer4').style.fontSize="3px";



           document.getElementById('verticalSpacer5').innerHTML="<br>";

    //       document.getElementById('verticalSpacer5').style.fontSize="3px";



 


           //  adjust the sample text

           document.getElementById('sampleText').innerHTML="This is a sample of the text.<br>";

           document.getElementById('sampleText').style.fontSize="16px";



 


           //  adjust the color string display size

           //  id="textColorLabel" 
           //  font-size:30px;"
           //  Text Color
           document.getElementById('textColorLabel').style.fontSize="18px";


           //  input 
           //  height:40px;
           //  font-size:30px;
           //  id="textColorInput" 
           //  title="the string for the text color value" 
           //  size="38" 
           //  maxlength="38"
           document.getElementById('textColorInput').style.height="20px";
           document.getElementById('textColorInput').style.fontSize="18px";






           //  id="textBackgroundLabel" 
           //  font-size:30px;
           //  Text Background
           document.getElementById('textBackgroundLabel').style.fontSize="18px";


           //  input 
           //  height:40px;
           //  font-size:30px;
           //  id="textBackgroundInput" 
           //  title="the string for the text background value"
           //  size="38" 
           //  maxlength="38" 
           document.getElementById('textBackgroundInput').style.height="20px";
           document.getElementById('textBackgroundInput').style.fontSize="18px";





           //  BUTTON 
           //  background-color:steelgray;
           //  color: goldenrod;
           //  width=120px;
           //  height:40px;
           //  id="setTextButton" 
           //  title="set the text color" 
           //  ACCESSKEY=T
           //  <span id="setTextCaption" style="font-size:28px;color:blue">

           document.getElementById('setTextButton').style.height="25px";
           document.getElementById('setTextButton').style.width="240px";
           document.getElementById('setTextCaption').style.fontSize="18px";


           //  BUTTON
           //  background-color:goldenrod;
           //  color:steelgray;
           //  width=120px;
           //  height:40px;
           //  id="setBackgroundButton" 
           //  title="set the background color" 
           //  ACCESSKEY=B
           //  <span id="setBackgroundCaption" style="font-size:28px;">

           document.getElementById('setBackgroundButton').style.height="25px";
           document.getElementById('setBackgroundButton').style.width="240px";
           document.getElementById('setBackgroundCaption').style.fontSize="18px";






          //  adjust the color value string label

           document.getElementById('colorValueStrLabel').style.fontSize="18px";


           //  BUTTON 
           //  width:90px;
           //  height:40px;
           //  id="colorInfoButton" 
           //  title="display a table of predefined colors" 
           //  ACCESSKEY=I
           //  <span id="infoCaption" style="font-size:28px;">

           document.getElementById('colorInfoButton').style.width="90px";
           document.getElementById('colorInfoButton').style.height="30px";
           document.getElementById('infoCaption').style.fontSize="18px";




          //  adjust the color value string display

           //  input 
           //  height:40px;
           //  font-size:30px;
           //  id="colorValueInput" 
           //  title="the string for the color value" 
           //  size="38" 
           //  maxlength="38"

           document.getElementById('colorValueInput').style.height="20px";

           document.getElementById('colorValueInput').style.fontSize="12px";






           document.getElementById('colorSampleLabel').style.fontSize="18px";


           //  input 
           //  height:40px;
           //  font-size:30px;
           //  id="sampleColorInput" 
           //  title="sample color" 
           //  size="4" 
           //  maxlength="4"
           //  readonly

           document.getElementById('sampleColorInput').style.height="20px";
           document.getElementById('sampleColorInput').style.fontSize="18px";




           //  input 
           //  height:40px;
           //  font-size:30px;
           //  id="redValueInput" 
           //  title="Red value" 
           //  size="4" 
           //  maxlength="4"

           document.getElementById('redValueInput').style.height="18px";
           document.getElementById('redValueInput').style.fontSize="16px";

           document.getElementById('greenValueInput').style.height="18px";
           document.getElementById('greenValueInput').style.fontSize="16px";

           document.getElementById('blueValueInput').style.height="18px";
           document.getElementById('blueValueInput').style.fontSize="16px";



           document.getElementById('RgbValuesRedGreenSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

       //    document.getElementById('RgbValuesRedGreenSpace').style.fontSize="16px";



           document.getElementById('RgbValuesGreenBlueSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

       //    document.getElementById('RgbValuesGreenBlueSpace').style.fontSize="16px";






         //  adjust the size of the remaining labels

           document.getElementById('fontSizeLabel').style.fontSize="18px";



//  <span id="fontSizeLabel" style="color:Black;font-size:30px;">Font Size</span><br>




           //  <input 
           //  height:40px;
           //  font-size:30px;
           //  id="sizeOfFontInput" 
           //  title="the font size" 
           //  size="5" 
           //  maxlength="5" 

           document.getElementById('sizeOfFontInput').style.height="18px";
           document.getElementById('sizeOfFontInput').style.fontSize="16px";




           //  BUTTON 
           //  width:40px;
           //  height:40px;
           //  id="decreaseFontSizeButton" 
           //  title="decrease the font size" 
           //  ACCESSKEY=f
           //  <span id="decreaseFontCaption" style="font-size:28px;">

           document.getElementById('decreaseFontSizeButton').style.width="30px";
           document.getElementById('decreaseFontSizeButton').style.height="30px";
           document.getElementById('decreaseFontCaption').style.fontSize="18px";



           //  &nbsp;&nbsp;&nbsp;&nbsp;

           //  input 
           //  id="fontSlider" 
           //  type="range" min="0" max="100" step="1" 
           //  width:480px;
           //  height:40px;
           //  -webkit-appearance:slider-horizontal" orient="horizontal"

           document.getElementById("fontSlider").style.width="480px"; 
           document.getElementById("fontSlider").style.height="22px"; 








           //  &nbsp;&nbsp;&nbsp;&nbsp;


           //  BUTTON
           //  width:40px;
           //  height:40px;
           //  id="increaseFontSizeButton" 
           //  title="increase the font size" 
           //  ACCESSKEY=F
           //  <span style="font-size:28px;">
           //  <span id="increaseFontCaption" style="font-size:28px;">


           //  svg  
           //  width="32" height="32" 
           //  transform="translate(-4,0)" 
           //  viewBox="0 0 16 16" 
           //  /svg


           document.getElementById('increaseFontSizeButton').style.width="30px";
           document.getElementById('increaseFontSizeButton').style.height="30px";
           document.getElementById('increaseFontCaption').style.fontSize="18px";










           //  adjust position of the RGB sliders

           // Original width 150px

           document.getElementById("redSlider").style.width="50px"; 
           document.getElementById("redSlider").style.height="260px"; 
           document.getElementById("redSlider").style.border="4px solid red"; 


           document.getElementById("greenSlider").style.width="50px"; 
           document.getElementById("greenSlider").style.height="260px"; 
           document.getElementById("greenSlider").style.border="4px solid green"; 


           document.getElementById("blueSlider").style.width="50px"; 
           document.getElementById("blueSlider").style.height="260px"; 
           document.getElementById("blueSlider").style.border="4px solid blue"; 






           document.getElementById('sliderRgbRedGreenSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

           document.getElementById('sliderRgbGreenBlueSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";






           //  adjust position and size of the RGB
           //  legends

           document.getElementById('colorLegendRed').innerHTML="<b>&nbsp;&nbsp;&nbsp;Red</b>";

           document.getElementById('colorLegendRed').style.fontSize="22px";




           document.getElementById('colorLegendGreen').innerHTML="<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Green</b>";

           document.getElementById('colorLegendGreen').style.fontSize="22px";




           document.getElementById('colorLegendBlue').innerHTML="<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blue</b>";

           document.getElementById('colorLegendBlue').style.fontSize="22px";



           document.getElementById('colorLegendEnd').innerHTML="<b>&nbsp;&nbsp;</b>";

           document.getElementById('colorLegendEnd').style.fontSize="22px";





           //  adjust position and size of the
           //   increase RGB buttons



           document.getElementById('increaseRgbInitialSpace').innerHTML="";




           document.getElementById('increaseRgbRedGreenSpace').innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

           document.getElementById('increaseRgbGreenBlueSpace').innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";


           //  id="increaseBlueButton"
           //  Original width:40px;height:40px

           //  id="increaseBlueButtonIcon"
           //  Original  width="32" height="32" 


           document.getElementById('increaseRgbInitialSpace').innerHTML = "";



           document.getElementById('increaseRgbRedGreenSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;";

           document.getElementById('increaseRgbGreenBlueSpace').innerHTML = 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;";



           document.getElementById("increaseRedButton").style.width="34px"; 
           document.getElementById("increaseRedButton").style.height="34px";

           document.getElementById("increaseRedButtonIcon").style.width="28px"; 
           document.getElementById("increaseRedButtonIcon").style.height="28px";




           document.getElementById("increaseGreenButton").style.width="34px"; 
           document.getElementById("increaseGreenButton").style.height="34px";

           document.getElementById("increaseGreenButtonIcon").style.width="28px"; 
           document.getElementById("increaseGreenButtonIcon").style.height="28px";




           document.getElementById("increaseBlueButton").style.width="34px"; 
           document.getElementById("increaseBlueButton").style.height="34px";

           document.getElementById("increaseBlueButtonIcon").style.width="28px"; 
           document.getElementById("increaseBlueButtonIcon").style.height="28px";






           //  adjust position and size of the
           //   decrease RGB buttons


           //  id="decreaseBlueButton"
           //  Original width:40px;height:40px

           //  id="decreaseBlueButtonIcon"
           //  Original  width="32" height="32"



           document.getElementById('decreaseRgbInitialSpace').innerHTML="";



           document.getElementById('decreaseRgbRedGreenSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;";


           document.getElementById('decreaseRgbGreenBlueSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;";






           document.getElementById("decreaseRedButton").style.width="34px"; 
           document.getElementById("decreaseRedButton").style.height="34px";

           document.getElementById("decreaseRedButtonIcon").style.width="28px"; 
           document.getElementById("decreaseRedButtonIcon").style.height="28px";





           document.getElementById("decreaseGreenButton").style.width="34px"; 
           document.getElementById("decreaseGreenButton").style.height="34px";

           document.getElementById("decreaseGreenButtonIcon").style.width="28px"; 
           document.getElementById("decreaseGreenButtonIcon").style.height="28px";






           document.getElementById("decreaseBlueButton").style.width="34px"; 
           document.getElementById("decreaseBlueButton").style.height="34px";

           document.getElementById("decreaseBlueButtonIcon").style.width="28px"; 
           document.getElementById("decreaseBlueButtonIcon").style.height="28px";







             //   end     Chrome others
          }







           //   end        Chrome
   } else if (isSafari) { 



           //  adjust the size of the
           //   Bootstrap icon
           //  id="BootstrapIcon"
           document.getElementById("BootstrapIcon").style.width="16px"; 
           document.getElementById("BootstrapIcon").style.height="16px";




           document.getElementById('textIntroduction').style.fontSize="24px";

           document.getElementById('textIntroductionEmphasized1').style.fontSize="25px";

           document.getElementById('textIntroductionEmphasized2').style.fontSize="25px";

           document.getElementById('textIntroductionEmphasized3').style.fontSize="25px";

           document.getElementById('textIntroductionEmphasized4').style.fontSize="25px";

           document.getElementById('textIntroductionEmphasized5').style.fontSize="25px";

           document.getElementById('textIntroductionEmphasized6').style.fontSize="25px";



           //  id="refHeader"   12px
           //  id="ref1"              10px
           //  id="refView1"          11px
           //  id="ref14"              10px
           //  id="refView14"          11px
           //  id="refLink1"




           document.getElementById('refHeader').style.fontSize="31px";

           document.getElementById('ref1').style.fontSize="24px";
           document.getElementById('refView1').style.fontSize="25px";
           document.getElementById('refLink1').style.fontSize="25px";


           document.getElementById('ref2').style.fontSize="24px";
           document.getElementById('refView2').style.fontSize="25px";           
           document.getElementById('refLink2').style.fontSize="25px";


           document.getElementById('ref3').style.fontSize="24px";
           document.getElementById('refView3').style.fontSize="25px";
           document.getElementById('refLink3').style.fontSize="25px";


           document.getElementById('ref4').style.fontSize="24px";
           document.getElementById('refView4').style.fontSize="25px";
           document.getElementById('refLink4').style.fontSize="25px";


           document.getElementById('ref5').style.fontSize="24px";
           document.getElementById('refView5').style.fontSize="25px";
           document.getElementById('refLink5').style.fontSize="25px";


           document.getElementById('ref6').style.fontSize="24px";
           document.getElementById('refView6').style.fontSize="25px";
           document.getElementById('refLink6').style.fontSize="25px";


           document.getElementById('ref7').style.fontSize="24px";
           document.getElementById('refView7').style.fontSize="25px";
           document.getElementById('refLink7').style.fontSize="25px";


           document.getElementById('ref8').style.fontSize="24px";
           document.getElementById('refView8').style.fontSize="25px";
           document.getElementById('refLink8').style.fontSize="25px";


           document.getElementById('ref9').style.fontSize="24px";
           document.getElementById('refView9').style.fontSize="25px";
           document.getElementById('refLink9').style.fontSize="25px";


           document.getElementById('ref10').style.fontSize="24px";
           document.getElementById('refView10').style.fontSize="25px";
           document.getElementById('refLink10').style.fontSize="25px";


           document.getElementById('ref11').style.fontSize="24px";
           document.getElementById('refView11').style.fontSize="25px";
           document.getElementById('refLink11').style.fontSize="25px";


           document.getElementById('ref12').style.fontSize="24px";
           document.getElementById('refView12').style.fontSize="25px";
           document.getElementById('refLink12').style.fontSize="25px";


           document.getElementById('ref13').style.fontSize="24px";
           document.getElementById('refView13').style.fontSize="25px";
           document.getElementById('refLink13').style.fontSize="25px";


           document.getElementById('ref14').style.fontSize="24px";
           document.getElementById('refView14').style.fontSize="25px";
           document.getElementById('refLink14').style.fontSize="25px";




           //  adjust the vertical spacing

            document.getElementById('verticalSpacer0').innerHTML="<br><br><br>";



           document.getElementById('verticalSpacer1').innerHTML="<br>";

      //     document.getElementById('verticalSpacer1').style.fontSize="3px";



           document.getElementById('verticalSpacer2').innerHTML="<br><br>";

     //      document.getElementById('verticalSpacer2').style.fontSize="3px";




           document.getElementById('verticalSpacer3').innerHTML="<br>";

     //      document.getElementById('verticalSpacer3').style.fontSize="3px";




           document.getElementById('verticalSpacer4').innerHTML="<br><br>";

    //       document.getElementById('verticalSpacer4').style.fontSize="3px";



           document.getElementById('verticalSpacer5').innerHTML="<br>";

    //       document.getElementById('verticalSpacer5').style.fontSize="3px";



 


           //  adjust the sample text

           document.getElementById('sampleText').innerHTML="This is a sample of the text.<br>";

           document.getElementById('sampleText').style.fontSize="16px";



 


           //  adjust the color string display size

           //  id="textColorLabel" 
           //  font-size:30px;"
           //  Text Color
           document.getElementById('textColorLabel').style.fontSize="18px";


           //  input 
           //  height:40px;
           //  font-size:30px;
           //  id="textColorInput" 
           //  title="the string for the text color value" 
           //  size="38" 
           //  maxlength="38"
           document.getElementById('textColorInput').style.height="20px";
           document.getElementById('textColorInput').style.fontSize="18px";






           //  id="textBackgroundLabel" 
           //  font-size:30px;
           //  Text Background
           document.getElementById('textBackgroundLabel').style.fontSize="18px";


           //  input 
           //  height:40px;
           //  font-size:30px;
           //  id="textBackgroundInput" 
           //  title="the string for the text background value"
           //  size="38" 
           //  maxlength="38" 
           document.getElementById('textBackgroundInput').style.height="20px";
           document.getElementById('textBackgroundInput').style.fontSize="18px";





           //  BUTTON 
           //  background-color:steelgray;
           //  color: goldenrod;
           //  width=120px;
           //  height:40px;
           //  id="setTextButton" 
           //  title="set the text color" 
           //  ACCESSKEY=T
           //  <span id="setTextCaption" style="font-size:28px;color:blue">

           document.getElementById('setTextButton').style.height="25px";
           document.getElementById('setTextButton').style.width="240px";
           document.getElementById('setTextCaption').style.fontSize="18px";


           //  BUTTON
           //  background-color:goldenrod;
           //  color:steelgray;
           //  width=120px;
           //  height:40px;
           //  id="setBackgroundButton" 
           //  title="set the background color" 
           //  ACCESSKEY=B
           //  <span id="setBackgroundCaption" style="font-size:28px;">

           document.getElementById('setBackgroundButton').style.height="25px";
           document.getElementById('setBackgroundButton').style.width="240px";
           document.getElementById('setBackgroundCaption').style.fontSize="18px";






          //  adjust the color value string label

           document.getElementById('colorValueStrLabel').style.fontSize="18px";


           //  BUTTON 
           //  width:90px;
           //  height:40px;
           //  id="colorInfoButton" 
           //  title="display a table of predefined colors" 
           //  ACCESSKEY=I
           //  <span id="infoCaption" style="font-size:28px;">

           document.getElementById('colorInfoButton').style.width="90px";
           document.getElementById('colorInfoButton').style.height="30px";
           document.getElementById('infoCaption').style.fontSize="18px";




          //  adjust the color value string display

           //  input 
           //  height:40px;
           //  font-size:30px;
           //  id="colorValueInput" 
           //  title="the string for the color value" 
           //  size="38" 
           //  maxlength="38"

           document.getElementById('colorValueInput').style.height="20px";

           document.getElementById('colorValueInput').style.fontSize="12px";






           document.getElementById('colorSampleLabel').style.fontSize="18px";


           //  input 
           //  height:40px;
           //  font-size:30px;
           //  id="sampleColorInput" 
           //  title="sample color" 
           //  size="4" 
           //  maxlength="4"
           //  readonly

           document.getElementById('sampleColorInput').style.height="20px";
           document.getElementById('sampleColorInput').style.fontSize="18px";




           //  input 
           //  height:40px;
           //  font-size:30px;
           //  id="redValueInput" 
           //  title="Red value" 
           //  size="4" 
           //  maxlength="4"

           document.getElementById('redValueInput').style.height="18px";
           document.getElementById('redValueInput').style.fontSize="16px";

           document.getElementById('greenValueInput').style.height="18px";
           document.getElementById('greenValueInput').style.fontSize="16px";

           document.getElementById('blueValueInput').style.height="18px";
           document.getElementById('blueValueInput').style.fontSize="16px";



           document.getElementById('RgbValuesRedGreenSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

       //    document.getElementById('RgbValuesRedGreenSpace').style.fontSize="16px";



           document.getElementById('RgbValuesGreenBlueSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

       //    document.getElementById('RgbValuesGreenBlueSpace').style.fontSize="16px";






         //  adjust the size of the remaining labels

           document.getElementById('fontSizeLabel').style.fontSize="18px";



//  <span id="fontSizeLabel" style="color:Black;font-size:30px;">Font Size</span><br>




           //  <input 
           //  height:40px;
           //  font-size:30px;
           //  id="sizeOfFontInput" 
           //  title="the font size" 
           //  size="5" 
           //  maxlength="5" 

           document.getElementById('sizeOfFontInput').style.height="18px";
           document.getElementById('sizeOfFontInput').style.fontSize="16px";




           //  BUTTON 
           //  width:40px;
           //  height:40px;
           //  id="decreaseFontSizeButton" 
           //  title="decrease the font size" 
           //  ACCESSKEY=f
           //  <span id="decreaseFontCaption" style="font-size:28px;">

           document.getElementById('decreaseFontSizeButton').style.width="30px";
           document.getElementById('decreaseFontSizeButton').style.height="30px";
           document.getElementById('decreaseFontCaption').style.fontSize="18px";



           //  &nbsp;&nbsp;&nbsp;&nbsp;

           //  input 
           //  id="fontSlider" 
           //  type="range" min="0" max="100" step="1" 
           //  width:480px;
           //  height:40px;
           //  -webkit-appearance:slider-horizontal" orient="horizontal"

           document.getElementById("fontSlider").style.width="480px"; 
           document.getElementById("fontSlider").style.height="22px"; 








           //  &nbsp;&nbsp;&nbsp;&nbsp;


           //  BUTTON
           //  width:40px;
           //  height:40px;
           //  id="increaseFontSizeButton" 
           //  title="increase the font size" 
           //  ACCESSKEY=F
           //  <span style="font-size:28px;">
           //  <span id="increaseFontCaption" style="font-size:28px;">


           //  svg  
           //  width="32" height="32" 
           //  transform="translate(-4,0)" 
           //  viewBox="0 0 16 16" 
           //  /svg


           document.getElementById('increaseFontSizeButton').style.width="30px";
           document.getElementById('increaseFontSizeButton').style.height="30px";
           document.getElementById('increaseFontCaption').style.fontSize="18px";










           //  adjust position of the RGB sliders

           // Original width 150px

           document.getElementById("redSlider").style.width="50px"; 
           document.getElementById("redSlider").style.height="260px"; 
           document.getElementById("redSlider").style.border="4px solid red"; 


           document.getElementById("greenSlider").style.width="50px"; 
           document.getElementById("greenSlider").style.height="260px"; 
           document.getElementById("greenSlider").style.border="4px solid green"; 


           document.getElementById("blueSlider").style.width="50px"; 
           document.getElementById("blueSlider").style.height="260px"; 
           document.getElementById("blueSlider").style.border="4px solid blue"; 






           document.getElementById('sliderRgbRedGreenSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

           document.getElementById('sliderRgbGreenBlueSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";






           //  adjust position and size of the RGB
           //  legends

           document.getElementById('colorLegendRed').innerHTML="<b>&nbsp;&nbsp;&nbsp;Red</b>";

           document.getElementById('colorLegendRed').style.fontSize="22px";




           document.getElementById('colorLegendGreen').innerHTML="<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Green</b>";

           document.getElementById('colorLegendGreen').style.fontSize="22px";




           document.getElementById('colorLegendBlue').innerHTML="<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blue</b>";

           document.getElementById('colorLegendBlue').style.fontSize="22px";



           document.getElementById('colorLegendEnd').innerHTML="<b>&nbsp;&nbsp;</b>";

           document.getElementById('colorLegendEnd').style.fontSize="22px";





           //  adjust position and size of the
           //   increase RGB buttons



           document.getElementById('increaseRgbInitialSpace').innerHTML="";




           document.getElementById('increaseRgbRedGreenSpace').innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

           document.getElementById('increaseRgbGreenBlueSpace').innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";


           //  id="increaseBlueButton"
           //  Original width:40px;height:40px

           //  id="increaseBlueButtonIcon"
           //  Original  width="32" height="32" 


           document.getElementById('increaseRgbInitialSpace').innerHTML = "";



           document.getElementById('increaseRgbRedGreenSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;";

           document.getElementById('increaseRgbGreenBlueSpace').innerHTML = 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;";



           document.getElementById("increaseRedButton").style.width="34px"; 
           document.getElementById("increaseRedButton").style.height="34px";

           document.getElementById("increaseRedButtonIcon").style.width="28px"; 
           document.getElementById("increaseRedButtonIcon").style.height="28px";




           document.getElementById("increaseGreenButton").style.width="34px"; 
           document.getElementById("increaseGreenButton").style.height="34px";

           document.getElementById("increaseGreenButtonIcon").style.width="28px"; 
           document.getElementById("increaseGreenButtonIcon").style.height="28px";




           document.getElementById("increaseBlueButton").style.width="34px"; 
           document.getElementById("increaseBlueButton").style.height="34px";

           document.getElementById("increaseBlueButtonIcon").style.width="28px"; 
           document.getElementById("increaseBlueButtonIcon").style.height="28px";






           //  adjust position and size of the
           //   decrease RGB buttons


           //  id="decreaseBlueButton"
           //  Original width:40px;height:40px

           //  id="decreaseBlueButtonIcon"
           //  Original  width="32" height="32"



           document.getElementById('decreaseRgbInitialSpace').innerHTML="";



           document.getElementById('decreaseRgbRedGreenSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;";


           document.getElementById('decreaseRgbGreenBlueSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;";






           document.getElementById("decreaseRedButton").style.width="34px"; 
           document.getElementById("decreaseRedButton").style.height="34px";

           document.getElementById("decreaseRedButtonIcon").style.width="28px"; 
           document.getElementById("decreaseRedButtonIcon").style.height="28px";





           document.getElementById("decreaseGreenButton").style.width="34px"; 
           document.getElementById("decreaseGreenButton").style.height="34px";

           document.getElementById("decreaseGreenButtonIcon").style.width="28px"; 
           document.getElementById("decreaseGreenButtonIcon").style.height="28px";






           document.getElementById("decreaseBlueButton").style.width="34px"; 
           document.getElementById("decreaseBlueButton").style.height="34px";

           document.getElementById("decreaseBlueButtonIcon").style.width="28px"; 
           document.getElementById("decreaseBlueButtonIcon").style.height="28px";








           //   end        Safari
   } else if (isEdge) { 



           //  adjust the size of the
           //   Bootstrap icon
           //  id="BootstrapIcon"
           document.getElementById("BootstrapIcon").style.width="16px"; 
           document.getElementById("BootstrapIcon").style.height="16px";



           //  adjust the size of the icon in the info button
           //  id="svgInfoButton" 
           //  original width="32" 
           //  original height="32" 
           //  original transform="translate(-4,0)"   //  x, y
           document.getElementById("svgInfoButton").style.width="26px"; 
           document.getElementById("svgInfoButton").style.height="26px";
           //  reposition the icon      x  y
           document.getElementById("svgInfoButton").translate(0, 22);






           document.getElementById('textIntroduction').style.fontSize="24px";

           document.getElementById('textIntroductionEmphasized1').style.fontSize="25px";

           document.getElementById('textIntroductionEmphasized2').style.fontSize="25px";

           document.getElementById('textIntroductionEmphasized3').style.fontSize="25px";

           document.getElementById('textIntroductionEmphasized4').style.fontSize="25px";

           document.getElementById('textIntroductionEmphasized5').style.fontSize="25px";

           document.getElementById('textIntroductionEmphasized6').style.fontSize="25px";



           //  id="refHeader"   12px
           //  id="ref1"              10px
           //  id="refView1"          11px
           //  id="ref14"              10px
           //  id="refView14"          11px
           //  id="refLink1"




           document.getElementById('refHeader').style.fontSize="31px";

           document.getElementById('ref1').style.fontSize="24px";
           document.getElementById('refView1').style.fontSize="25px";
           document.getElementById('refLink1').style.fontSize="25px";


           document.getElementById('ref2').style.fontSize="24px";
           document.getElementById('refView2').style.fontSize="25px";           
           document.getElementById('refLink2').style.fontSize="25px";


           document.getElementById('ref3').style.fontSize="24px";
           document.getElementById('refView3').style.fontSize="25px";
           document.getElementById('refLink3').style.fontSize="25px";


           document.getElementById('ref4').style.fontSize="24px";
           document.getElementById('refView4').style.fontSize="25px";
           document.getElementById('refLink4').style.fontSize="25px";


           document.getElementById('ref5').style.fontSize="24px";
           document.getElementById('refView5').style.fontSize="25px";
           document.getElementById('refLink5').style.fontSize="25px";


           document.getElementById('ref6').style.fontSize="24px";
           document.getElementById('refView6').style.fontSize="25px";
           document.getElementById('refLink6').style.fontSize="25px";


           document.getElementById('ref7').style.fontSize="24px";
           document.getElementById('refView7').style.fontSize="25px";
           document.getElementById('refLink7').style.fontSize="25px";


           document.getElementById('ref8').style.fontSize="24px";
           document.getElementById('refView8').style.fontSize="25px";
           document.getElementById('refLink8').style.fontSize="25px";


           document.getElementById('ref9').style.fontSize="24px";
           document.getElementById('refView9').style.fontSize="25px";
           document.getElementById('refLink9').style.fontSize="25px";


           document.getElementById('ref10').style.fontSize="24px";
           document.getElementById('refView10').style.fontSize="25px";
           document.getElementById('refLink10').style.fontSize="25px";


           document.getElementById('ref11').style.fontSize="24px";
           document.getElementById('refView11').style.fontSize="25px";
           document.getElementById('refLink11').style.fontSize="25px";


           document.getElementById('ref12').style.fontSize="24px";
           document.getElementById('refView12').style.fontSize="25px";
           document.getElementById('refLink12').style.fontSize="25px";


           document.getElementById('ref13').style.fontSize="24px";
           document.getElementById('refView13').style.fontSize="25px";
           document.getElementById('refLink13').style.fontSize="25px";


           document.getElementById('ref14').style.fontSize="24px";
           document.getElementById('refView14').style.fontSize="25px";
           document.getElementById('refLink14').style.fontSize="25px";




           //  adjust the vertical spacing

            document.getElementById('verticalSpacer0').innerHTML="<br><br><br>";



           document.getElementById('verticalSpacer1').innerHTML="<br>";

      //     document.getElementById('verticalSpacer1').style.fontSize="3px";



           document.getElementById('verticalSpacer2').innerHTML="<br><br>";

     //      document.getElementById('verticalSpacer2').style.fontSize="3px";




           document.getElementById('verticalSpacer3').innerHTML="<br>";

     //      document.getElementById('verticalSpacer3').style.fontSize="3px";




           document.getElementById('verticalSpacer4').innerHTML="<br><br>";

    //       document.getElementById('verticalSpacer4').style.fontSize="3px";



           document.getElementById('verticalSpacer5').innerHTML="<br>";

    //       document.getElementById('verticalSpacer5').style.fontSize="3px";



 


           //  adjust the sample text

           document.getElementById('sampleText').innerHTML="This is a sample of the text.<br>";

           document.getElementById('sampleText').style.fontSize="16px";



 


           //  adjust the color string display size

           //  id="textColorLabel" 
           //  font-size:30px;"
           //  Text Color
           document.getElementById('textColorLabel').style.fontSize="18px";


           //  input 
           //  height:40px;
           //  font-size:30px;
           //  id="textColorInput" 
           //  title="the string for the text color value" 
           //  size="38" 
           //  maxlength="38"
           document.getElementById('textColorInput').style.height="20px";
           document.getElementById('textColorInput').style.fontSize="18px";






           //  id="textBackgroundLabel" 
           //  font-size:30px;
           //  Text Background
           document.getElementById('textBackgroundLabel').style.fontSize="18px";


           //  input 
           //  height:40px;
           //  font-size:30px;
           //  id="textBackgroundInput" 
           //  title="the string for the text background value"
           //  size="38" 
           //  maxlength="38" 
           document.getElementById('textBackgroundInput').style.height="20px";
           document.getElementById('textBackgroundInput').style.fontSize="18px";





           //  BUTTON 
           //  background-color:steelgray;
           //  color: goldenrod;
           //  width=120px;
           //  height:40px;
           //  id="setTextButton" 
           //  title="set the text color" 
           //  ACCESSKEY=T
           //  <span id="setTextCaption" style="font-size:28px;color:blue">

           document.getElementById('setTextButton').style.height="25px";
           document.getElementById('setTextButton').style.width="240px";
           document.getElementById('setTextCaption').style.fontSize="18px";


           //  BUTTON
           //  background-color:goldenrod;
           //  color:steelgray;
           //  width=120px;
           //  height:40px;
           //  id="setBackgroundButton" 
           //  title="set the background color" 
           //  ACCESSKEY=B
           //  <span id="setBackgroundCaption" style="font-size:28px;">

           document.getElementById('setBackgroundButton').style.height="25px";
           document.getElementById('setBackgroundButton').style.width="240px";
           document.getElementById('setBackgroundCaption').style.fontSize="18px";






          //  adjust the color value string label

           document.getElementById('colorValueStrLabel').style.fontSize="18px";


           //  BUTTON 
           //  width:90px;
           //  height:40px;
           //  id="colorInfoButton" 
           //  title="display a table of predefined colors" 
           //  ACCESSKEY=I
           //  <span id="infoCaption" style="font-size:28px;">

           document.getElementById('colorInfoButton').style.width="90px";
           document.getElementById('colorInfoButton').style.height="30px";
           document.getElementById('infoCaption').style.fontSize="18px";




          //  adjust the color value string display

           //  input 
           //  height:40px;
           //  font-size:30px;
           //  id="colorValueInput" 
           //  title="the string for the color value" 
           //  size="38" 
           //  maxlength="38"

           document.getElementById('colorValueInput').style.height="20px";

           document.getElementById('colorValueInput').style.fontSize="12px";






           document.getElementById('colorSampleLabel').style.fontSize="18px";


           //  input 
           //  height:40px;
           //  font-size:30px;
           //  id="sampleColorInput" 
           //  title="sample color" 
           //  size="4" 
           //  maxlength="4"
           //  readonly

           document.getElementById('sampleColorInput').style.height="20px";
           document.getElementById('sampleColorInput').style.fontSize="18px";




           //  input 
           //  height:40px;
           //  font-size:30px;
           //  id="redValueInput" 
           //  title="Red value" 
           //  size="4" 
           //  maxlength="4"

           document.getElementById('redValueInput').style.height="18px";
           document.getElementById('redValueInput').style.fontSize="16px";

           document.getElementById('greenValueInput').style.height="18px";
           document.getElementById('greenValueInput').style.fontSize="16px";

           document.getElementById('blueValueInput').style.height="18px";
           document.getElementById('blueValueInput').style.fontSize="16px";



           document.getElementById('RgbValuesRedGreenSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

       //    document.getElementById('RgbValuesRedGreenSpace').style.fontSize="16px";



           document.getElementById('RgbValuesGreenBlueSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

       //    document.getElementById('RgbValuesGreenBlueSpace').style.fontSize="16px";






         //  adjust the size of the remaining labels

           document.getElementById('fontSizeLabel').style.fontSize="18px";



//  <span id="fontSizeLabel" style="color:Black;font-size:30px;">Font Size</span><br>




           //  <input 
           //  height:40px;
           //  font-size:30px;
           //  id="sizeOfFontInput" 
           //  title="the font size" 
           //  size="5" 
           //  maxlength="5" 

           document.getElementById('sizeOfFontInput').style.height="18px";
           document.getElementById('sizeOfFontInput').style.fontSize="16px";




           //  BUTTON 
           //  width:40px;
           //  height:40px;
           //  id="decreaseFontSizeButton" 
           //  title="decrease the font size" 
           //  ACCESSKEY=f
           //  <span id="decreaseFontCaption" style="font-size:28px;">

           document.getElementById('decreaseFontSizeButton').style.width="30px";
           document.getElementById('decreaseFontSizeButton').style.height="30px";
           document.getElementById('decreaseFontCaption').style.fontSize="18px";



           //  &nbsp;&nbsp;&nbsp;&nbsp;

           //  input 
           //  id="fontSlider" 
           //  type="range" min="0" max="100" step="1" 
           //  width:480px;
           //  height:40px;
           //  -webkit-appearance:slider-horizontal" orient="horizontal"

           document.getElementById("fontSlider").style.width="480px"; 
           document.getElementById("fontSlider").style.height="22px"; 








           //  &nbsp;&nbsp;&nbsp;&nbsp;


           //  BUTTON
           //  width:40px;
           //  height:40px;
           //  id="increaseFontSizeButton" 
           //  title="increase the font size" 
           //  ACCESSKEY=F
           //  <span style="font-size:28px;">
           //  <span id="increaseFontCaption" style="font-size:28px;">


           //  svg  
           //  width="32" height="32" 
           //  transform="translate(-4,0)" 
           //  viewBox="0 0 16 16" 
           //  /svg


           document.getElementById('increaseFontSizeButton').style.width="30px";
           document.getElementById('increaseFontSizeButton').style.height="30px";
           document.getElementById('increaseFontCaption').style.fontSize="18px";










           //  adjust position of the RGB sliders

           // Original width 150px

           document.getElementById("redSlider").style.width="50px"; 
           document.getElementById("redSlider").style.height="260px"; 
           document.getElementById("redSlider").style.border="4px solid red"; 


           document.getElementById("greenSlider").style.width="50px"; 
           document.getElementById("greenSlider").style.height="260px"; 
           document.getElementById("greenSlider").style.border="4px solid green"; 


           document.getElementById("blueSlider").style.width="50px"; 
           document.getElementById("blueSlider").style.height="260px"; 
           document.getElementById("blueSlider").style.border="4px solid blue"; 






           document.getElementById('sliderRgbRedGreenSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

           document.getElementById('sliderRgbGreenBlueSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";






           //  adjust position and size of the RGB
           //  legends

           document.getElementById('colorLegendRed').innerHTML="<b>&nbsp;&nbsp;&nbsp;Red</b>";

           document.getElementById('colorLegendRed').style.fontSize="22px";




           document.getElementById('colorLegendGreen').innerHTML="<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Green</b>";

           document.getElementById('colorLegendGreen').style.fontSize="22px";




           document.getElementById('colorLegendBlue').innerHTML="<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blue</b>";

           document.getElementById('colorLegendBlue').style.fontSize="22px";



           document.getElementById('colorLegendEnd').innerHTML="<b>&nbsp;&nbsp;</b>";

           document.getElementById('colorLegendEnd').style.fontSize="22px";





           //  adjust position and size of the
           //   increase RGB buttons



           document.getElementById('increaseRgbInitialSpace').innerHTML="";




           document.getElementById('increaseRgbRedGreenSpace').innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

           document.getElementById('increaseRgbGreenBlueSpace').innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";


           //  id="increaseBlueButton"
           //  Original width:40px;height:40px

           //  id="increaseBlueButtonIcon"
           //  Original  width="32" height="32" 


           document.getElementById('increaseRgbInitialSpace').innerHTML = "";



           document.getElementById('increaseRgbRedGreenSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;";

           document.getElementById('increaseRgbGreenBlueSpace').innerHTML = 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;";



           document.getElementById("increaseRedButton").style.width="34px"; 
           document.getElementById("increaseRedButton").style.height="34px";

           document.getElementById("increaseRedButtonIcon").style.width="28px"; 
           document.getElementById("increaseRedButtonIcon").style.height="28px";




           document.getElementById("increaseGreenButton").style.width="34px"; 
           document.getElementById("increaseGreenButton").style.height="34px";

           document.getElementById("increaseGreenButtonIcon").style.width="28px"; 
           document.getElementById("increaseGreenButtonIcon").style.height="28px";




           document.getElementById("increaseBlueButton").style.width="34px"; 
           document.getElementById("increaseBlueButton").style.height="34px";

           document.getElementById("increaseBlueButtonIcon").style.width="28px"; 
           document.getElementById("increaseBlueButtonIcon").style.height="28px";






           //  adjust position and size of the
           //   decrease RGB buttons


           //  id="decreaseBlueButton"
           //  Original width:40px;height:40px

           //  id="decreaseBlueButtonIcon"
           //  Original  width="32" height="32"



           document.getElementById('decreaseRgbInitialSpace').innerHTML="";



           document.getElementById('decreaseRgbRedGreenSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;";


           document.getElementById('decreaseRgbGreenBlueSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;";






           document.getElementById("decreaseRedButton").style.width="34px"; 
           document.getElementById("decreaseRedButton").style.height="34px";

           document.getElementById("decreaseRedButtonIcon").style.width="28px"; 
           document.getElementById("decreaseRedButtonIcon").style.height="28px";





           document.getElementById("decreaseGreenButton").style.width="34px"; 
           document.getElementById("decreaseGreenButton").style.height="34px";

           document.getElementById("decreaseGreenButtonIcon").style.width="28px"; 
           document.getElementById("decreaseGreenButtonIcon").style.height="28px";






           document.getElementById("decreaseBlueButton").style.width="34px"; 
           document.getElementById("decreaseBlueButton").style.height="34px";

           document.getElementById("decreaseBlueButtonIcon").style.width="28px"; 
           document.getElementById("decreaseBlueButtonIcon").style.height="28px";






           //   end        Edge
   } else { 

      //  unknown browser



           //  adjust the size of the
           //   Bootstrap icon
           //  id="BootstrapIcon"
           document.getElementById("BootstrapIcon").style.width="16px"; 
           document.getElementById("BootstrapIcon").style.height="16px";




           document.getElementById('textIntroduction').style.fontSize="24px";

           document.getElementById('textIntroductionEmphasized1').style.fontSize="25px";

           document.getElementById('textIntroductionEmphasized2').style.fontSize="25px";

           document.getElementById('textIntroductionEmphasized3').style.fontSize="25px";

           document.getElementById('textIntroductionEmphasized4').style.fontSize="25px";

           document.getElementById('textIntroductionEmphasized5').style.fontSize="25px";

           document.getElementById('textIntroductionEmphasized6').style.fontSize="25px";



           //  id="refHeader"   12px
           //  id="ref1"              10px
           //  id="refView1"          11px
           //  id="ref14"              10px
           //  id="refView14"          11px
           //  id="refLink1"




           document.getElementById('refHeader').style.fontSize="31px";

           document.getElementById('ref1').style.fontSize="24px";
           document.getElementById('refView1').style.fontSize="25px";
           document.getElementById('refLink1').style.fontSize="25px";


           document.getElementById('ref2').style.fontSize="24px";
           document.getElementById('refView2').style.fontSize="25px";           
           document.getElementById('refLink2').style.fontSize="25px";


           document.getElementById('ref3').style.fontSize="24px";
           document.getElementById('refView3').style.fontSize="25px";
           document.getElementById('refLink3').style.fontSize="25px";


           document.getElementById('ref4').style.fontSize="24px";
           document.getElementById('refView4').style.fontSize="25px";
           document.getElementById('refLink4').style.fontSize="25px";


           document.getElementById('ref5').style.fontSize="24px";
           document.getElementById('refView5').style.fontSize="25px";
           document.getElementById('refLink5').style.fontSize="25px";


           document.getElementById('ref6').style.fontSize="24px";
           document.getElementById('refView6').style.fontSize="25px";
           document.getElementById('refLink6').style.fontSize="25px";


           document.getElementById('ref7').style.fontSize="24px";
           document.getElementById('refView7').style.fontSize="25px";
           document.getElementById('refLink7').style.fontSize="25px";


           document.getElementById('ref8').style.fontSize="24px";
           document.getElementById('refView8').style.fontSize="25px";
           document.getElementById('refLink8').style.fontSize="25px";


           document.getElementById('ref9').style.fontSize="24px";
           document.getElementById('refView9').style.fontSize="25px";
           document.getElementById('refLink9').style.fontSize="25px";


           document.getElementById('ref10').style.fontSize="24px";
           document.getElementById('refView10').style.fontSize="25px";
           document.getElementById('refLink10').style.fontSize="25px";


           document.getElementById('ref11').style.fontSize="24px";
           document.getElementById('refView11').style.fontSize="25px";
           document.getElementById('refLink11').style.fontSize="25px";


           document.getElementById('ref12').style.fontSize="24px";
           document.getElementById('refView12').style.fontSize="25px";
           document.getElementById('refLink12').style.fontSize="25px";


           document.getElementById('ref13').style.fontSize="24px";
           document.getElementById('refView13').style.fontSize="25px";
           document.getElementById('refLink13').style.fontSize="25px";


           document.getElementById('ref14').style.fontSize="24px";
           document.getElementById('refView14').style.fontSize="25px";
           document.getElementById('refLink14').style.fontSize="25px";




           //  adjust the vertical spacing

            document.getElementById('verticalSpacer0').innerHTML="<br><br><br>";



           document.getElementById('verticalSpacer1').innerHTML="<br>";

      //     document.getElementById('verticalSpacer1').style.fontSize="3px";



           document.getElementById('verticalSpacer2').innerHTML="<br><br>";

     //      document.getElementById('verticalSpacer2').style.fontSize="3px";




           document.getElementById('verticalSpacer3').innerHTML="<br>";

     //      document.getElementById('verticalSpacer3').style.fontSize="3px";




           document.getElementById('verticalSpacer4').innerHTML="<br><br>";

    //       document.getElementById('verticalSpacer4').style.fontSize="3px";



           document.getElementById('verticalSpacer5').innerHTML="<br>";

    //       document.getElementById('verticalSpacer5').style.fontSize="3px";



 


           //  adjust the sample text

           document.getElementById('sampleText').innerHTML="This is a sample of the text.<br>";

           document.getElementById('sampleText').style.fontSize="16px";



 


           //  adjust the color string display size

           //  id="textColorLabel" 
           //  font-size:30px;"
           //  Text Color
           document.getElementById('textColorLabel').style.fontSize="18px";


           //  input 
           //  height:40px;
           //  font-size:30px;
           //  id="textColorInput" 
           //  title="the string for the text color value" 
           //  size="38" 
           //  maxlength="38"
           document.getElementById('textColorInput').style.height="20px";
           document.getElementById('textColorInput').style.fontSize="18px";






           //  id="textBackgroundLabel" 
           //  font-size:30px;
           //  Text Background
           document.getElementById('textBackgroundLabel').style.fontSize="18px";


           //  input 
           //  height:40px;
           //  font-size:30px;
           //  id="textBackgroundInput" 
           //  title="the string for the text background value"
           //  size="38" 
           //  maxlength="38" 
           document.getElementById('textBackgroundInput').style.height="20px";
           document.getElementById('textBackgroundInput').style.fontSize="18px";





           //  BUTTON 
           //  background-color:steelgray;
           //  color: goldenrod;
           //  width=120px;
           //  height:40px;
           //  id="setTextButton" 
           //  title="set the text color" 
           //  ACCESSKEY=T
           //  <span id="setTextCaption" style="font-size:28px;color:blue">

           document.getElementById('setTextButton').style.height="25px";
           document.getElementById('setTextButton').style.width="240px";
           document.getElementById('setTextCaption').style.fontSize="18px";


           //  BUTTON
           //  background-color:goldenrod;
           //  color:steelgray;
           //  width=120px;
           //  height:40px;
           //  id="setBackgroundButton" 
           //  title="set the background color" 
           //  ACCESSKEY=B
           //  <span id="setBackgroundCaption" style="font-size:28px;">

           document.getElementById('setBackgroundButton').style.height="25px";
           document.getElementById('setBackgroundButton').style.width="240px";
           document.getElementById('setBackgroundCaption').style.fontSize="18px";






          //  adjust the color value string label

           document.getElementById('colorValueStrLabel').style.fontSize="18px";


           //  BUTTON 
           //  width:90px;
           //  height:40px;
           //  id="colorInfoButton" 
           //  title="display a table of predefined colors" 
           //  ACCESSKEY=I
           //  <span id="infoCaption" style="font-size:28px;">

           document.getElementById('colorInfoButton').style.width="90px";
           document.getElementById('colorInfoButton').style.height="30px";
           document.getElementById('infoCaption').style.fontSize="18px";




          //  adjust the color value string display

           //  input 
           //  height:40px;
           //  font-size:30px;
           //  id="colorValueInput" 
           //  title="the string for the color value" 
           //  size="38" 
           //  maxlength="38"

           document.getElementById('colorValueInput').style.height="20px";

           document.getElementById('colorValueInput').style.fontSize="12px";






           document.getElementById('colorSampleLabel').style.fontSize="18px";


           //  input 
           //  height:40px;
           //  font-size:30px;
           //  id="sampleColorInput" 
           //  title="sample color" 
           //  size="4" 
           //  maxlength="4"
           //  readonly

           document.getElementById('sampleColorInput').style.height="20px";
           document.getElementById('sampleColorInput').style.fontSize="18px";




           //  input 
           //  height:40px;
           //  font-size:30px;
           //  id="redValueInput" 
           //  title="Red value" 
           //  size="4" 
           //  maxlength="4"

           document.getElementById('redValueInput').style.height="18px";
           document.getElementById('redValueInput').style.fontSize="16px";

           document.getElementById('greenValueInput').style.height="18px";
           document.getElementById('greenValueInput').style.fontSize="16px";

           document.getElementById('blueValueInput').style.height="18px";
           document.getElementById('blueValueInput').style.fontSize="16px";



           document.getElementById('RgbValuesRedGreenSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

       //    document.getElementById('RgbValuesRedGreenSpace').style.fontSize="16px";



           document.getElementById('RgbValuesGreenBlueSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

       //    document.getElementById('RgbValuesGreenBlueSpace').style.fontSize="16px";






         //  adjust the size of the remaining labels

           document.getElementById('fontSizeLabel').style.fontSize="18px";



//  <span id="fontSizeLabel" style="color:Black;font-size:30px;">Font Size</span><br>




           //  <input 
           //  height:40px;
           //  font-size:30px;
           //  id="sizeOfFontInput" 
           //  title="the font size" 
           //  size="5" 
           //  maxlength="5" 

           document.getElementById('sizeOfFontInput').style.height="18px";
           document.getElementById('sizeOfFontInput').style.fontSize="16px";




           //  BUTTON 
           //  width:40px;
           //  height:40px;
           //  id="decreaseFontSizeButton" 
           //  title="decrease the font size" 
           //  ACCESSKEY=f
           //  <span id="decreaseFontCaption" style="font-size:28px;">

           document.getElementById('decreaseFontSizeButton').style.width="30px";
           document.getElementById('decreaseFontSizeButton').style.height="30px";
           document.getElementById('decreaseFontCaption').style.fontSize="18px";



           //  &nbsp;&nbsp;&nbsp;&nbsp;

           //  input 
           //  id="fontSlider" 
           //  type="range" min="0" max="100" step="1" 
           //  width:480px;
           //  height:40px;
           //  -webkit-appearance:slider-horizontal" orient="horizontal"

           document.getElementById("fontSlider").style.width="480px"; 
           document.getElementById("fontSlider").style.height="22px"; 








           //  &nbsp;&nbsp;&nbsp;&nbsp;


           //  BUTTON
           //  width:40px;
           //  height:40px;
           //  id="increaseFontSizeButton" 
           //  title="increase the font size" 
           //  ACCESSKEY=F
           //  <span style="font-size:28px;">
           //  <span id="increaseFontCaption" style="font-size:28px;">


           //  svg  
           //  width="32" height="32" 
           //  transform="translate(-4,0)" 
           //  viewBox="0 0 16 16" 
           //  /svg


           document.getElementById('increaseFontSizeButton').style.width="30px";
           document.getElementById('increaseFontSizeButton').style.height="30px";
           document.getElementById('increaseFontCaption').style.fontSize="18px";










           //  adjust position of the RGB sliders

           // Original width 150px

           document.getElementById("redSlider").style.width="50px"; 
           document.getElementById("redSlider").style.height="260px"; 
           document.getElementById("redSlider").style.border="4px solid red"; 


           document.getElementById("greenSlider").style.width="50px"; 
           document.getElementById("greenSlider").style.height="260px"; 
           document.getElementById("greenSlider").style.border="4px solid green"; 


           document.getElementById("blueSlider").style.width="50px"; 
           document.getElementById("blueSlider").style.height="260px"; 
           document.getElementById("blueSlider").style.border="4px solid blue"; 






           document.getElementById('sliderRgbRedGreenSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

           document.getElementById('sliderRgbGreenBlueSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";






           //  adjust position and size of the RGB
           //  legends

           document.getElementById('colorLegendRed').innerHTML="<b>&nbsp;&nbsp;&nbsp;Red</b>";

           document.getElementById('colorLegendRed').style.fontSize="22px";




           document.getElementById('colorLegendGreen').innerHTML="<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Green</b>";

           document.getElementById('colorLegendGreen').style.fontSize="22px";




           document.getElementById('colorLegendBlue').innerHTML="<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blue</b>";

           document.getElementById('colorLegendBlue').style.fontSize="22px";



           document.getElementById('colorLegendEnd').innerHTML="<b>&nbsp;&nbsp;</b>";

           document.getElementById('colorLegendEnd').style.fontSize="22px";





           //  adjust position and size of the
           //   increase RGB buttons



           document.getElementById('increaseRgbInitialSpace').innerHTML="";




           document.getElementById('increaseRgbRedGreenSpace').innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

           document.getElementById('increaseRgbGreenBlueSpace').innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";


           //  id="increaseBlueButton"
           //  Original width:40px;height:40px

           //  id="increaseBlueButtonIcon"
           //  Original  width="32" height="32" 


           document.getElementById('increaseRgbInitialSpace').innerHTML = "";



           document.getElementById('increaseRgbRedGreenSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;";

           document.getElementById('increaseRgbGreenBlueSpace').innerHTML = 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;";



           document.getElementById("increaseRedButton").style.width="34px"; 
           document.getElementById("increaseRedButton").style.height="34px";

           document.getElementById("increaseRedButtonIcon").style.width="28px"; 
           document.getElementById("increaseRedButtonIcon").style.height="28px";




           document.getElementById("increaseGreenButton").style.width="34px"; 
           document.getElementById("increaseGreenButton").style.height="34px";

           document.getElementById("increaseGreenButtonIcon").style.width="28px"; 
           document.getElementById("increaseGreenButtonIcon").style.height="28px";




           document.getElementById("increaseBlueButton").style.width="34px"; 
           document.getElementById("increaseBlueButton").style.height="34px";

           document.getElementById("increaseBlueButtonIcon").style.width="28px"; 
           document.getElementById("increaseBlueButtonIcon").style.height="28px";






           //  adjust position and size of the
           //   decrease RGB buttons


           //  id="decreaseBlueButton"
           //  Original width:40px;height:40px

           //  id="decreaseBlueButtonIcon"
           //  Original  width="32" height="32"



           document.getElementById('decreaseRgbInitialSpace').innerHTML="";



           document.getElementById('decreaseRgbRedGreenSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;";


           document.getElementById('decreaseRgbGreenBlueSpace').innerHTML =
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                  "&nbsp;&nbsp;&nbsp;&nbsp;";






           document.getElementById("decreaseRedButton").style.width="34px"; 
           document.getElementById("decreaseRedButton").style.height="34px";

           document.getElementById("decreaseRedButtonIcon").style.width="28px"; 
           document.getElementById("decreaseRedButtonIcon").style.height="28px";





           document.getElementById("decreaseGreenButton").style.width="34px"; 
           document.getElementById("decreaseGreenButton").style.height="34px";

           document.getElementById("decreaseGreenButtonIcon").style.width="28px"; 
           document.getElementById("decreaseGreenButtonIcon").style.height="28px";






           document.getElementById("decreaseBlueButton").style.width="34px"; 
           document.getElementById("decreaseBlueButton").style.height="34px";

           document.getElementById("decreaseBlueButtonIcon").style.width="28px"; 
           document.getElementById("decreaseBlueButtonIcon").style.height="28px";








      //  end      unknown browser
   } 



  
    


// end     colorPicker.js