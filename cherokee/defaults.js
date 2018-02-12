var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Cherokee WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "42";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2.5"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'chr' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Cherokee WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'cherokeePicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Cherokee character picker'
	template.sample = "2. Ꮒꭶꮫ ꭰꮒᏼꮻ ꭴꮒꮂ ꮎꮝꭹ ꮪᏻꭺꮫ ꭴꮒꭹꮝꮧ ꮒꭶꭵꮙ ꭰᏸꮅ ꮒꭼꮎꮫꭲ, ꭴꮰꮿꮝꮧ ꭴꮹꮜ ꭴꮴꮅ ꭱꭵꭲ, ꭰꮄ ꭲꭶꮇꭿꮝꮧ ꭴꮎꭲ ꭴꮹꮜ ꭴꮴꮅ ꭰᏸꮅ ꮒꭼꮎꮫꭲ."
	template.blocklocation= 'cherokee'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = '/scripts/cherokee/block'
	template.scriptcode = 'Cher'



var inputAids = [
{"title":"Shape lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "initialCode":"kbd=document.getElementById('alphabet'); if (kbd.style.display==='none') {kbd.style.display='block';} else {kbd.style.display='none';}"},
{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"latintranscript", "dataShortTitle":"L", "type":"palette"},
{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard"}
]

var controls = [
{"title":"Cherokee<br/>to Latin", "alt":"Convert Cherokee text to a Latin transliteration.", "code":"doTranscription('toTranslit')"},
]
