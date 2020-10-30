// Created by iWeb 3.0.4 local-build-20150130

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,1077),url:'In_the_News_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'In_the_News_files/stroke_1.png'},{rect:new IWRect(1,-1,828,2),url:'In_the_News_files/stroke_2.png'},{rect:new IWRect(829,-1,2,2),url:'In_the_News_files/stroke_3.png'},{rect:new IWRect(829,1,2,1077),url:'In_the_News_files/stroke_4.png'},{rect:new IWRect(829,1078,2,3),url:'In_the_News_files/stroke_5.png'},{rect:new IWRect(1,1078,828,3),url:'In_the_News_files/stroke_6.png'},{rect:new IWRect(-1,1078,2,3),url:'In_the_News_files/stroke_7.png'}],new IWSize(830,1079))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('In_the_News_files/In_the_NewsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');detectBrowser();Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
