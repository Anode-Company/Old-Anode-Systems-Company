// Created by iWeb 3.0.4 local-build-20150130

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,454),url:'Pipeline_Survey_Example_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Pipeline_Survey_Example_files/stroke_1.png'},{rect:new IWRect(1,-1,544,2),url:'Pipeline_Survey_Example_files/stroke_2.png'},{rect:new IWRect(545,-1,2,2),url:'Pipeline_Survey_Example_files/stroke_3.png'},{rect:new IWRect(545,1,2,454),url:'Pipeline_Survey_Example_files/stroke_4.png'},{rect:new IWRect(545,455,2,3),url:'Pipeline_Survey_Example_files/stroke_5.png'},{rect:new IWRect(1,455,544,3),url:'Pipeline_Survey_Example_files/stroke_6.png'},{rect:new IWRect(-1,455,2,3),url:'Pipeline_Survey_Example_files/stroke_7.png'}],new IWSize(546,456))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Pipeline_Survey_Example_files/Pipeline_Survey_ExampleMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');detectBrowser();Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}
