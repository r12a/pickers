var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'East Syriac Adiabene' // text area font name (a single font, no quotes)
	factoryDefaults.size = "50";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2.5"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.2"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'aii' // language to use for examples
	factoryDefaults.uifont = 'East Syriac Adiabene'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "40";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "ܖ";  // default base for combining characters
	factoryDefaults.uidir = "rtl" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'aramaicPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Assyrian Neo-Aramaic character picker'
	template.sample = "ܐܸܢ ܦܵܝܫܝܼ ܒܘܼܓ̰ܪܹ̈ܐ، ܟܹܐ ܗܵܘܝܼ ܡܲܦܬܘܼܝܹܐ ܘܓܲܪܘܘܼܣܹܐ ܒܣܸܕܪܵܐ ܕܐܵܢ ܠܸܫܵܢܹ̈ܐ ܣܸܦܪ̈ܵܝܹܐ ܘܪܗܸܛܪ̈ܵܝܹܐ ܕܕܘܼܢܝܹܐ."
	template.blocklocation= '/scripts/syriac/block'  // blocklocation to use for examples
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'aramaic'
	template.scriptcode = 'Syrc'



var inputAids = [
{"title":"Show cursive forms", "dataVar":"showCursive", "dataLocn":"cursive", "dataShortTitle":"S", "type":"hint"},
{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"latintranscript", "dataShortTitle":"L", "type":"palette"},
{"title":"Transcribe to IPA", "dataVar":"showLOCTrans", "dataLocn":"loctranscript", "dataShortTitle":"T", "type":"palette"},
{"title":"Transcribe to Syriac", "dataVar":"showIPATrans", "dataLocn":"ipatranscript", "dataShortTitle":"T", "type":"palette"}
]

var controls = [
//{"title":"ISO 15919<br/>to Bengali", "alt":"Convert ISO 15919 Latin transcription to Bengali.", "code":"doTranscription('toBeng')"},
//{"title":"Bengali to<br/>ISO 15919", "alt":"Convert Bengali text to an ISO 15919 Latin transcription.", "code":"doTranscription('toISO')"},
//{"title":"Radice<br/>to Bengali", "alt":"Convert Radice Latin transcription to Bengali.", "code":"doTranscription('rtoBeng')"},
//{"title":"Bengali to<br/>Radice", "alt":"Convert Bengali text to a Radice Latin transcription.", "code":"doTranscription('toRadice')"},
]


var lastUpdate = '04-Jan-2018'
