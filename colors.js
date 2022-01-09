<!--  colors_js  -->



// start      colors.js


function getColorStr( rValue, gValue, bValue ) {

var colorName = "";

colorName = 'Custom color';


//  alert("getColorStr  -  rvalue = " + 
//  rValue + 
//  "    gvalue = " + 
//  gValue + 
//  "    bvalue = " + 
//  bValue);



if( (rValue == "240") && (gValue == "248") && (bValue == "255") ) {

colorName = 'AliceBlue';

//  AliceBlue  0xf0f8ff  (240, 248, 255)  


} else if( (rValue == "250") && (gValue == "235") && (bValue == "215") ) {

colorName = 'AntiqueWhite';

//  AntiqueWhite  0xfaebd7  
//  (250, 235, 215)  


} else if( (rValue == "0") && (gValue == "255") && (bValue == "255") ) {

colorName = 'Aqua';

//  Aqua  0x00ffff  (0, 255, 255)  

} else if( (rValue == "127") && (gValue == "255") && (bValue == "212") ) {

colorName = 'Aquamarine';

//  Aquamarine  0x7fffd4  (127, 255, 212) 


} else if( (rValue == "240") && (gValue == "255") && (bValue == "255") ) {

colorName = 'Azure';

//  Azure  0xf0ffff  (240, 255, 255)  

} else if( (rValue == "245") && (gValue == "245") && (bValue == "220") ) {

colorName = 'Beige';

//  Beige  0xf5f5dc  (245, 245, 220)  

} else if( (rValue == "255") && (gValue == "228") && (bValue == "196") ) {

colorName = 'Bisque';

//  Bisque  0xffe4c4  (255, 228, 196)  

} else if( (rValue == "0") && (gValue == "0") && (bValue == "0") ) {

colorName = 'Black';

//  Black  0x000000  (0, 0, 0) 

} else if( (rValue == "255") && (gValue == "235") && (bValue == "205") ) {

colorName = 'BlanchedAlmond';

//  BlanchedAlmond  0xffebcd  
//  (255, 235, 205)  

} else if( (rValue == "0") && (gValue == "0") && (bValue == "255") ) {

colorName = 'Blue';

//  Blue  0x0000ff  (0, 0, 255) 

} else if( (rValue == "138") && (gValue == "43") && (bValue == "226") ) {

colorName = 'BlueViolet';

//  BlueViolet  0x8a2be2  (138, 43, 226)  

} else if( (rValue == "165") && (gValue == "42") && (bValue == "42") ) {

colorName = 'Brown';

//  Brown  0xa52a2a  (165, 42, 42)  

} else if( (rValue == "222") && (gValue == "184") && (bValue == "135") ) {

colorName = 'BurlyWood';

//  BurlyWood  0xdeb887  (222, 184, 135)  
 
} else if( (rValue == "95") && (gValue == "158") && (bValue == "160") ) {

colorName = 'CadetBlue';

//  CadetBlue  0x5f9ea0  (95, 158, 160)  

} else if( (rValue == "127") && (gValue == "255") && (bValue == "0") ) {

colorName = 'Chartreuse';

//  Chartreuse  0x7f 0xff 0x00  
//  (127, 255, 0)  

} else if( (rValue == "210") && (gValue == "105") && (bValue == "30") ) {

colorName = 'Chocolate';

//  Chocolate  0xd2 0x69 0x1e  
//  (210, 105, 30) 

} else if( (rValue == "255") && (gValue == "127") && (bValue == "80") ) {

colorName = 'Coral';

//  Coral  0xff 0x7f 0x50  (255, 127, 80)  

} else if( (rValue == "100") && (gValue == "149") && (bValue == "237") ) {

colorName = 'CornflowerBlue';

//  CornflowerBlue  0x64 0x95 0xed  
//  (100, 149, 237) 

} else if( (rValue == "255") && (gValue == "248") && (bValue == "220") ) {

colorName = 'Cornsilk';

//  Cornsilk  0xff 0xf8 0xdc  
//  (255, 248, 220)  

} else if( (rValue == "220") && (gValue == "20") && (bValue == "60") ) {

colorName = 'Crimson';

//  Crimson  0xdc 0x14 0x3c  
//  (220, 20, 60)  

} else if( (rValue == "0") && (gValue == "255") && (bValue == "255") ) {

colorName = 'Cyan';

//  Cyan  0x00 0xff 0xff  (0, 255, 255)  

} else if( (rValue == "0") && (gValue == "0") && (bValue == "139") ) {

colorName = 'DarkBlue';

//  DarkBlue  0x00 0x00 0x8b  (0, 0, 139)  

} else if( (rValue == "0") && (gValue == "139") && (bValue == "139") ) {

colorName = 'DarkCyan';

//  DarkCyan  0x00 0x8b 0x8b  
//  (0, 139, 139)  

} else if( (rValue == "184") && (gValue == "134") && (bValue == "11") ) {

colorName = 'DarkGoldenrod';

//  DarkGoldenrod  0xb8 0x86 0x0b  
//  (184, 134, 11) 

} else if( (rValue == "169") && (gValue == "169") && (bValue == "169") ) {

colorName = 'DarkGray';

//  DarkGray  0xa9 0xa9 0xa9  
//  (169, 169, 169)  

} else if( (rValue == "0") && (gValue == "100") && (bValue == "0") ) {

colorName = 'DarkGreen';

//  DarkGreen  0x00 0x64 0x00  
//  (0, 100, 0)  

} else if( (rValue == "189") && (gValue == "183") && (bValue == "107") ) {

colorName = 'DarkKhaki';

//  DarkKhaki  0xbd 0xb7 0x6b  
//  (189, 183, 107) 

} else if( (rValue == "139") && (gValue == "0") && (bValue == "139") ) {

colorName = 'DarkMagenta';

//  DarkMagenta  0x8b 0x00 0x8b  
//  (139, 0, 139)

} else if( (rValue == "85") && (gValue == "107") && (bValue == "47") ) {

colorName = 'DarkOliveGreen';

//  DarkOliveGreen  0x55 0x6b 0x2f  
//  (85, 107, 47)  

} else if( (rValue == "255") && (gValue == "140") && (bValue == "0") ) {

colorName = 'DarkOrange';

//  DarkOrange  0xff 0x8c 0x00  
//  (255, 140, 0)

} else if( (rValue == "153") && (gValue == "50") && (bValue == "204") ) {

colorName = 'DarkOrchid';

// DarkOrchid  0x99 0x32 0xcc  
//  (153, 50, 204)  

} else if( (rValue == "139") && (gValue == "0") && (bValue == "0") ) {

colorName = 'DarkRed';

//  DarkRed  0x8b 0x00 0x00  (139, 0, 0)  

} else if( (rValue == "233") && (gValue == "150") && (bValue == "122") ) {

colorName = 'DarkSalmon';

//  DarkSalmon  0xe9 0x96 0x7a  
//  (233, 150, 122)

} else if( (rValue == "143") && (gValue == "188") && (bValue == "143") ) {

colorName = 'DarkSeaGreen';

//  DarkSeaGreen  0x8f 0xbc 0x8f  
//  (143, 188, 143)

} else if( (rValue == "72") && (gValue == "61") && (bValue == "139") ) {

colorName = 'DarkSlateBlue';

//  DarkSlateBlue  0x48 0x3d 0x8b  
//  (72, 61, 139) 

} else if( (rValue == "47") && (gValue == "79") && (bValue == "79") ) {

colorName = 'DarkSlateGray';

//  DarkSlateGray  0x2f 0x4f 0x4f  
//  (47, 79, 79) 

} else if( (rValue == "0") && (gValue == "206") && (bValue == "209") ) {

colorName = 'DarkTurquoise';

//  DarkTurquoise  0x00 0xce 0xd1  
//  (0, 206, 209) 

} else if( (rValue == "148") && (gValue == "0") && (bValue == "211") ) {

colorName = 'DarkViolet';

//  DarkViolet  0x94 0x00 0xd3  
//  (148, 0, 211)  

} else if( (rValue == "255") && (gValue == "20") && (bValue == "147") ) {

colorName = 'DeepPink';

//  DeepPink  0xff 0x14 0x93  
//  (255, 20, 147)  

} else if( (rValue == "0") && (gValue == "191") && (bValue == "255") ) {

colorName = 'DeepSkyBlue';

//  DeepSkyBlue  0x00 0xbf 0xff  
//  (0, 191, 255) 

} else if( (rValue == "105") && (gValue == "105") && (bValue == "105") ) {

colorName = 'DimGray';

//  DimGray  0x69 0x69 0x69  
//  (105, 105, 105) 

} else if( (rValue == "30") && (gValue == "144") && (bValue == "255") ) {

colorName = 'DodgerBlue';

//  DodgerBlue  0x1e 0x90 0xff  
//  (30, 144, 255)  

} else if( (rValue == "178") && (gValue == "34") && (bValue == "34") ) {

colorName = 'FireBrick';

//  FireBrick  0xb2 0x22 0x22  
//  (178, 34, 34)  

} else if( (rValue == "255") && (gValue == "250") && (bValue == "240") ) {

colorName = 'FloralWhite';

//  FloralWhite  0xff 0xfa 0xf0  
//  (255, 250, 240) 

} else if( (rValue == "34") && (gValue == "139") && (bValue == "34") ) {

colorName = 'ForestGreen';

//  ForestGreen  0x22 0x8b 0x22  
//  (34, 139, 34)  

} else if( (rValue == "255") && (gValue == "0") && (bValue == "255") ) {

colorName = 'Fuchsia';

//  Fuchsia  0xff 0x00 0xff  (255, 0, 255)  

} else if( (rValue == "220") && (gValue == "220") && (bValue == "220") ) {

colorName = 'Gainsboro';

//  Gainsboro  0xdc 0xdc 0xdc  
//  (220, 220, 220) 

} else if( (rValue == "248") && (gValue == "248") && (bValue == "255") ) {

colorName = 'GhostWhite';

//  GhostWhite  0xf8 0xf8 0xff  
//  (248, 248, 255)

} else if( (rValue == "255") && (gValue == "215") && (bValue == "0") ) {

colorName = 'Gold';

//  Gold  0xff 0xd7 0x00  (255, 215, 0)  

} else if( (rValue == "218") && (gValue == "165") && (bValue == "32") ) {

colorName = 'Goldenrod';

//  Goldenrod  0xda 0xa5 0x20  
//  (218, 165, 32)

} else if( (rValue == "128") && (gValue == "128") && (bValue == "128") ) {

colorName = 'Gray';

//  Gray  0x80 0x80 0x80  
//  (128, 128, 128)  

} else if( (rValue == "0") && (gValue == "128") && (bValue == "0") ) {

colorName = 'Green';

//  Green  0x00 0x80 0x00  (0, 128, 0)  

} else if( (rValue == "173") && (gValue == "255") && (bValue == "47") ) {

colorName = 'GreenYellow';

//  GreenYellow  0xad 0xff 0x2f  
//  (173, 255, 47)

} else if( (rValue == "240") && (gValue == "255") && (bValue == "240") ) {

colorName = 'HoneyDew';

//  HoneyDew  0xf0 0xff 0xf0  
//  (240, 255, 240)

} else if( (rValue == "255") && (gValue == "105") && (bValue == "180") ) {

colorName = 'HotPink';

//  HotPink  0xff 0x69 0xb4  
//  (255, 105, 180)  

} else if( (rValue == "205") && (gValue == "92") && (bValue == "92") ) {

colorName = 'IndianRed';

//  IndianRed  0xcd 0x5c 0x5c  
//  (205, 92, 92)  

} else if( (rValue == "75") && (gValue == "0") && (bValue == "130") ) {

colorName = 'Indigo';

//  Indigo  0x4b 0x00 0x82  (75, 0, 130)  

} else if( (rValue == "255") && (gValue == "255") && (bValue == "240") ) {

colorName = 'Ivory';

//  Ivory  0xff 0xff 0xf0  (255, 255, 240)  

} else if( (rValue == "240") && (gValue == "230") && (bValue == "140") ) {

colorName = 'Khaki';

//  Khaki  0xf0 0xe6 0x8c  (240, 230, 140)

} else if( (rValue == "230") && (gValue == "230") && (bValue == "250") ) {

colorName = 'Lavender';

//  Lavender  0xe6 0xe6 0xfa  
//  (230, 230, 250) 

} else if( (rValue == "255") && (gValue == "240") && (bValue == "245") ) {

colorName = 'LavenderBlush';

//  LavenderBlush 0xff 0xf0 0xf5  
//  (255, 240, 245)

} else if( (rValue == "124") && (gValue == "252") && (bValue == "0") ) {

colorName = 'LawnGreen';

//  LawnGreen  0x7c 0xfc 0x00  
//  (124, 252, 0) 

} else if( (rValue == "255") && (gValue == "250") && (bValue == "205") ) {

colorName = 'LemonChiffon';

//  LemonChiffon  0xff 0xfa 0xcd  
//  (255, 250, 205)  

} else if( (rValue == "173") && (gValue == "216") && (bValue == "230") ) {

colorName = 'LightBlue';

//  LightBlue  0xad 0xd8 0xe6  
//  (173, 216, 230)

} else if( (rValue == "240") && (gValue == "128") && (bValue == "128") ) {

colorName = 'LightCoral';

//  LightCoral  0xf0 0x80 0x80  
//  (240, 128, 128) 

} else if( (rValue == "224") && (gValue == "255") && (bValue == "255") ) {

colorName = 'LightCyan';

//  LightCyan  0xe0 0xff 0xff  
//  (224, 255, 255)  

} else if( (rValue == "250") && (gValue == "250") && (bValue == "210") ) {

colorName = 'LightGoldenrodYellow';

//  LightGoldenrodYellow  0xfa 0xfa 0xd2
//  (250, 250, 210) 

} else if( (rValue == "211") && (gValue == "211") && (bValue == "211") ) {

      colorName = 'LightGray';

      //  LightGray  0xd3 0xd3 0xd3  
      //  (211, 211, 211)

} else if( (rValue == "144") && (gValue == "238") && (bValue == "144") ) {

     colorName = 'LightGreen';

     //  LightGreen 0x90 0xee 0x90 
     //  (144, 238, 144)

} else if( (rValue == "255") && (gValue == "182") && (bValue == "193") ) {

     colorName = 'LightPink';

     //  LightPink 0xff 0xb6 0xc1 
     //  (255, 182, 193)

} else if( (rValue == "255") && (gValue == "160") && (bValue == "122") ) {

     colorName = 'LightSalmon';

     //  LightSalmon 0xff 0xa0 0x7a 
     //  (255, 160, 122)

} else if( (rValue == "32") && (gValue == "178") && (bValue == "170") ) {

     colorName = 'LightSeaGreen';

     //  LightSeaGreen 0x20 0xb2 0xaa 
     //  (32, 178, 170)

} else if( (rValue == "135") && (gValue == "206") && (bValue == "250") ) {

     colorName = 'LightSkyBlue';

     //  LightSkyBlue 0x87 0xce 0xfa 
     //  (135, 206, 250)

} else if( (rValue == "119") && (gValue == "136") && (bValue == "153") ) {

     colorName = 'LightSlateGray';

    //  LightSlateGray 0x77 0x88 0x99
    //  (119, 136, 153)

} else if( (rValue == "176") && (gValue == "196") && (bValue == "222") ) {

     colorName = 'LightSteelBlue';

     //  LightSteelBlue 0xb0 0xc4 0xde 
     //  (176, 196, 222)

} else if( (rValue == "255") && (gValue == "255") && (bValue == "224") ) {

     colorName = 'LightYellow';

     //  LightYellow 0xff 0xff 0xe0 
     //  (255, 255, 224)

} else if( (rValue == "0") && (gValue == "255") && (bValue == "0") ) {

     colorName = 'Lime';

     //  Lime 0x00 0xff 0x00 
     //  (0, 255, 0)

} else if( (rValue == "50") && (gValue == "205") && (bValue == "50") ) {

     colorName = 'LimeGreen';

     //  LimeGreen 0x32 0xcd 0x32 
     //  (50, 205, 50)

} else if( (rValue == "250") && (gValue == "240") && (bValue == "230") ) {

     colorName = 'Linen';

     //  Linen 0xfa 0xf0 0xe6
     //  (250, 240, 230)

} else if( (rValue == "255") && (gValue == "0") && (bValue == "255") ) {

     colorName = 'Magenta';

     //  Magenta 0xff 0x00 0xff 
     //  (255, 0, 255)

} else if( (rValue == "128") && (gValue == "0") && (bValue == "0") ) {

     colorName = 'Maroon';

     //  Maroon 0x80 0x00 0x00 
     //  (128, 0, 0)

} else if( (rValue == "102") && (gValue == "205") && (bValue == "170") ) {

     colorName = 'MediumAquamarine';

     //  MediumAquamarine
     //  0x66 0xcd 0xaa
     //  (102, 205, 170)

} else if( (rValue == "0") && (gValue == "0") && (bValue == "205") ) {

     colorName = 'MediumBlue';

     //  MediumBlue 0x00 0x00 0xcd 
     //  (0, 0, 205)

} else if( (rValue == "186") && (gValue == "85") && (bValue == "211") ) {

     colorName = 'MediumOrchid';

     //  MediumOrchid 0xba 0x55 0xd3 
     //  (186, 85, 211)

} else if( (rValue == "147") && (gValue == "112") && (bValue == "216") ) {

     colorName = 'MediumPurple';

     //  MediumPurple 0x93 0x70 0xd8 
     //  (147, 112, 216)

} else if( (rValue == "60") && (gValue == "179") && (bValue == "113") ) {

     colorName = 'MediumSeaGreen';

     //  MediumSeaGreen 0x3c 0xb3 0x71
     //  (60, 179, 113)

} else if( (rValue == "123") && (gValue == "104") && (bValue == "238") ) {

     colorName = 'MediumSlateBlue';

     //  MediumSlateBlue 0x7b 0x68 0xee
     //  (123, 104, 238)

} else if( (rValue == "0") && (gValue == "250") && (bValue == "154") ) {

     colorName = 'MediumSpringGreen';

     //  MediumSpringGreen 
     //  0x00 0xfa 0x9a
     //  (0, 250, 154)

} else if( (rValue == "72") && (gValue == "209") && (bValue == "204") ) {

     colorName = 'MediumTurquoise';

     //  MediumTurquoise 0x48 0xd1 0xcc
     //  (72, 209, 204)

} else if( (rValue == "199") && (gValue == "21") && (bValue == "133") ) {

     colorName = 'MediumVioletRed';

     //  MediumVioletRed 0xc7 0x15 0x85
     //  (199, 21, 133)

} else if( (rValue == "25") && (gValue == "25") && (bValue == "112") ) {

     colorName = 'MidnightBlue';

     //  MidnightBlue 0x19 0x19 0x70 
     //  (25, 25, 112)

} else if( (rValue == "245") && (gValue == "255") && (bValue == "250") ) {

     colorName = 'MintCream';

     //  MintCream 0xf5 0xff 0xfa 
     //  (245, 255, 250)

} else if( (rValue == "255") && (gValue == "228") && (bValue == "225") ) {

     colorName = 'MistyRose';

     //  MistyRose 0xff 0xe4 0xe1 
     //  (255, 228, 225)

} else if( (rValue == "255") && (gValue == "228") && (bValue == "181") ) {

     colorName = 'Moccasin';

     //  Moccasin 0xff 0xe4 0xb5 
     //  (255, 228, 181)

} else if( (rValue == "255") && (gValue == "222") && (bValue == "173") ) {

     colorName = 'NavajoWhite';

     //  NavajoWhite 0xff 0xde 0xad 
     //  (255, 222, 173)

} else if( (rValue == "0") && (gValue == "0") && (bValue == "128") ) {

     colorName = 'Navy';

     //  Navy 0x00 0x00 0x80 (0, 0, 128)

} else if( (rValue == "253") && (gValue == "245") && (bValue == "230") ) {

     colorName = 'OldLace';

     //  OldLace 0xfd 0xf5 0xe6 
     //  (253, 245, 230)

} else if( (rValue == "128") && (gValue == "128") && (bValue == "0") ) {

     colorName = 'Olive';

     //  Olive 0x80 0x80 0x00 (128, 128, 0)

} else if( (rValue == "107") && (gValue == "142") && (bValue == "35") ) {

     colorName = 'OliveDrab';

    //  OliveDrab 0x6b 0x8e 0x23 
    //  (107, 142, 35)

} else if( (rValue == "255") && (gValue == "165") && (bValue == "0") ) {

     colorName = 'Orange';

     //  Orange 0xff 0xa5 0x00
     //  (255, 165, 0)

} else if( (rValue == "255") && (gValue == "69") && (bValue == "0") ) {

     colorName = 'OrangeRed';

     //  OrangeRed 0xff 0x45 0x00 
     //  (255, 69, 0)

} else if( (rValue == "218") && (gValue == "112") && (bValue == "214") ) {

     colorName = 'Orchid';

     //  Orchid 0xda 0x70 0xd6 
     //  (218, 112, 214)

} else if( (rValue == "238") && (gValue == "232") && (bValue == "170") ) {

     colorName = 'PaleGoldenrod';

     //  PaleGoldenrod 0xee 0xe8 0xaa 
     //  (238, 232, 170)

} else if( (rValue == "152") && (gValue == "251") && (bValue == "152") ) {

     colorName = 'PaleGreen';

     //  PaleGreen 0x98 0xfb 0x98 
     //  (152, 251, 152)

} else if( (rValue == "175") && (gValue == "238") && (bValue == "238") ) {

     colorName = 'PaleTurquoise';

     //  PaleTurquoise 0xaf 0xee 0xee 
     //  (175, 238, 238)

} else if( (rValue == "216") && (gValue == "112") && (bValue == "147") ) {

     colorName = 'PaleVioletRed';

     //  PaleVioletRed 0xd8 0x70 0x93 
    //  (216, 112, 147)

} else if( (rValue == "255") && (gValue == "239") && (bValue == "213") ) {

     colorName = 'PapayaWhip';

     //  PapayaWhip 0xff 0xef 0xd5 
     //  (255, 239, 213)

} else if( (rValue == "255") && (gValue == "218") && (bValue == "185") ) {

     colorName = 'PeachPuff';

     //  PeachPuff 0xff 0xda 0xb9 
     //  (255, 218, 185)

} else if( (rValue == "205") && (gValue == "133") && (bValue == "63") ) {

     colorName = 'Peru';

     //  Peru 0xcd 0x85 0x3f (205, 133, 63)

} else if( (rValue == "255") && (gValue == "192") && (bValue == "203") ) {

     colorName = 'Pink';

     //  Pink 0xff 0xc0 0xcb (255, 192, 203)

} else if( (rValue == "221") && (gValue == "160") && (bValue == "221") ) {

     colorName = 'Plum';

     //  Plum 0xdd 0xa0 0xdd
     //  (221, 160, 221)

} else if( (rValue == "176") && (gValue == "224") && (bValue == "230") ) {

     colorName = 'PowderBlue';

     //  PowderBlue 0xb0 0xe0 0xe6 
     //  (176, 224, 230)

} else if( (rValue == "128") && (gValue == "0") && (bValue == "128") ) {

     colorName = 'Purple';

     //  Purple 0x80 0x00 0x80
     //  (128, 0, 128)

} else if( (rValue == "102") && (gValue == "51") && (bValue == "153") ) {

     colorName = 'RebeccaPurple';

     //  RebeccaPurple 0x66 0x33 0x99 
     //  (102, 51, 153)

} else if( (rValue == "255") && (gValue == "0") && (bValue == "0") ) {

     colorName = 'Red';

     //  Red 0xff 0x00 0x00 (255, 0, 0)

} else if( (rValue == "188") && (gValue == "143") && (bValue == "143") ) {

     colorName = 'RosyBrown';

     //  RosyBrown 0xbc 0x8f 0x8f 
     //  (188, 143, 143)

} else if( (rValue == "65") && (gValue == "105") && (bValue == "225") ) {

     colorName = 'RoyalBlue';

     //  RoyalBlue 0x41 0x69 0xe1 
     //  (65, 105, 225)

} else if( (rValue == "139") && (gValue == "69") && (bValue == "19") ) {

     colorName = 'SaddleBrown';

     //  SaddleBrown 0x8b 0x45 0x13 
     //  (139, 69, 19)

} else if( (rValue == "250") && (gValue == "128") && (bValue == "114") ) {

     colorName = 'Salmon';

     //  Salmon 0xfa 0x80 0x72 
     //  (250, 128, 114)

} else if( (rValue == "244") && (gValue == "164") && (bValue == "96") ) {

     colorName = 'SandyBrown';

     //  SandyBrown 0xf4 0xa4 0x60 
    //  (244, 164, 96)

} else if( (rValue == "46") && (gValue == "139") && (bValue == "87") ) {

     colorName = 'SeaGreen';

     //  SeaGreen 0x2e 0x8b 0x57 
     //  (46, 139, 87)

} else if( (rValue == "255") && (gValue == "245") && (bValue == "238") ) {

     colorName = 'SeaShell';

     //  SeaShell 0xff 0xf5 0xee 
     //  (255, 245, 238)

} else if( (rValue == "160") && (gValue == "82") && (bValue == "45") ) {

     colorName = 'Sienna';

     //  Sienna 0xa0 0x52 0x2d 
     //  (160, 82, 45)

} else if( (rValue == "192") && (gValue == "192") && (bValue == "192") ) {

     colorName = 'Silver';

     //  Silver 0xc0 0xc0 0xc0 
     //  (192, 192, 192)

} else if( (rValue == "135") && (gValue == "206") && (bValue == "235") ) {

     colorName = 'SkyBlue';

     //  SkyBlue 0x87 0xce 0xeb 
     //  (135, 206, 235)

} else if( (rValue == "106") && (gValue == "90") && (bValue == "205") ) {

     colorName = 'SlateBlue';

     //  SlateBlue 0x6a 0x5a 0xcd 
     //  (106, 90, 205)

} else if( (rValue == "112") && (gValue == "128") && (bValue == "144") ) {

     colorName = 'SlateGray';

     //  SlateGray 0x70 0x80 0x90 
     //  (112, 128, 144)

} else if( (rValue == "255") && (gValue == "250") && (bValue == "250") ) {

     colorName = 'Snow';

     //  Snow 0xff 0xfa 0xfa 
     //  (255, 250, 250)

} else if( (rValue == "0") && (gValue == "255") && (bValue == "127") ) {

     colorName = 'SpringGreen';

     //  SpringGreen 0x00 0xff 0x7f 
     //  (0, 255, 127)

} else if( (rValue == "70") && (gValue == "130") && (bValue == "180") ) {

     colorName = 'SteelBlue';

     //  SteelBlue 0x46 0x82 0xb4 
     //  (70, 130, 180)

} else if( (rValue == "210") && (gValue == "180") && (bValue == "140") ) {

     colorName = 'Tan';

     //  Tan 0xd2 0xb4 0x8c (210, 180, 140)

} else if( (rValue == "0") && (gValue == "128") && (bValue == "128") ) {

     colorName = 'Teal';

     //  Teal 0x00 0x80 0x80 (0, 128, 128)

} else if( (rValue == "216") && (gValue == "191") && (bValue == "216") ) {

     colorName = 'Thistle';

     //  Thistle 0xd8 0xbf 0xd8
     //  (216, 191, 216)

} else if( (rValue == "255") && (gValue == "99") && (bValue == "71") ) {

     colorName = 'Tomato';

     //  Tomato 0xff 0x63 0x47 
     //  (255, 99, 71)

} else if( (rValue == "64") && (gValue == "224") && (bValue == "208") ) {

     colorName = 'Turquoise';

     //  Turquoise 0x40 0xe0 0xd0 
     //  (64, 224, 208)

} else if( (rValue == "238") && (gValue == "130") && (bValue == "238") ) {

     colorName = 'Violet';

     //  Violet 0xee 0x82 0xee
     //  (238, 130, 238)

} else if( (rValue == "245") && (gValue == "222") && (bValue == "179") ) {

     colorName = 'Wheat';

     //  Wheat 0xf5 0xde 0xb3
     //  (245, 222, 179)

} else if( (rValue == "255") && (gValue == "255") && (bValue == "255") ) {

     colorName = 'White';

     //  White 0xff 0xff 0xff
     //  (255, 255, 255)

} else if( (rValue == "245") && (gValue == "245") && (bValue == "245") ) {

     colorName = 'WhiteSmoke';

     //  WhiteSmoke 0xf5 0xf5 0xf5 
     //  (245, 245, 245)

} else if( (rValue == "255") && (gValue == "255") && (bValue == "0") ) {

     colorName = 'Yellow';

     //  Yellow 0xff 0xff 0x00 (255, 255, 0)

} else if( (rValue == "154") && (gValue == "205") && (bValue == "50") ) {

     colorName = 'YellowGreen';

     //  YellowGreen 0x9a 0xcd 0x32 
     //  (154, 205, 50)

} 










var redHexStr = "";
var greenHexStr = "";
var blueHexStr = "";

if( rValue < 16 ) {
       redHexStr = "0" +     
       Number(rValue).toString(16);
} else {
       redHexStr =
       Number(rValue).toString(16);
}

if( gValue < 16 ) {
       greenHexStr = "0" +
       Number(gValue).toString(16);
} else {
       greenHexStr =
       Number(gValue).toString(16);
}

if( bValue < 16 ) {
      blueHexStr = "0" +
      Number(bValue).toString(16);
} else {
      blueHexStr =
      Number(bValue).toString(16);
}




return colorName +
'    ' + 
'0x' +
redHexStr + 
greenHexStr + 
blueHexStr + 
'     ' + 
'rgb( ' + rValue + ', ' + gValue + ', ' +
bValue + ' )  ';


   //  end       function getColorStr
}











// end     colors.js

    