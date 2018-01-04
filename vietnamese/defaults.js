var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Doulos SIL WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "1.5"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'vi' // language to use for examples
	factoryDefaults.uifont = 'Doulos SIL WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "32";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'vietnamesePicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Vietnamese character picker'
	template.sample = "2. Mọi người đều có quyền rời khỏi bất cứ nước nào, kể cả nước mình, cũng như có quyền trở về nước mình."
	template.blocklocation= '/scripts/latin/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'vietnamese'
	template.scriptcode = 'Latn'



var inputAids = [
]

var controls = [
{"title":"North Việt<br>to IPA", "alt":"Convert North Vietnamese text to an *approximation* of an IPA transcription.", "code":"doTranscription('toIPAN')"},
{"title":"South Việt<br>to IPA", "alt":"Convert South Vietnamese text to an *approximation* of an IPA transcription.", "code":"doTranscription('toIPAS')"},
]

