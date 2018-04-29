var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Lisu WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'lis' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Lisu WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'lisuPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Lisu character picker'
	//template.sample = "ꓠꓬꓲꓻꓠꓬꓲ ꓣꓳꓽꓡꓲꓢꓴ ꓫꓵꓽꓐꓴ ꓒꓵꓽꓒꓽ ꓐꓴꓣꓱꓽˍꓔꓬˍꓟ ꓢꓽꓚꓻ ꓛꓲꓻꓐꓶꓻꓔꓯꓸꓣꓱꓽꓐˍꓡˍꓠꓼꓟ꓾ ꓞꓳꓻꓡꓯꓸ ꓐꓴˍꓶꓻꓙꓳˍꓡꓳ꓿ꓟꓬꓽꓠꓬꓲ ꓕꓲꓽꓐꓱꓻꓟˍꓠꓬ꓾"
	template.sample = "ꓞꓳ ꓘꓹ ꓠꓯꓹꓼ ꓢꓲ ꓫꓬ ꓟ ꓙ ꓖꓴ ꓗꓪ ꓟꓬꓱꓽ ꓧꓳꓽ ꓢꓴ ꓠꓬ꓾ ꓞꓳ ꓘꓹ ꓗꓪ ꓟ ꓞꓳ ꓟ ꓐꓴ ꓔꓯ ꓮ ꓡꓲ ꓬꓰ ꓠꓯꓹ ꓟ꓾ ꓟꓬꓱꓽ ꓔꓯ ꓧꓳꓽ ꓪꓴꓸ ꓟꓴ ꓢꓴ ꓬꓲ ꓜꓴꓻ ꓤ (Committee) ꓕꓲ ꓜꓴꓻ ꓢꓲꓺ ꓖꓶ ꓠꓯꓹ ꓡꓳ꓿"
    // sample source: http://www.evertype.com/standards/iso10646/pdf/fraser-sample.pdf
	template.blocklocation= '/scripts/lisu/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'lisu'
	template.scriptcode = 'Lisu'



var inputAids = [
{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"latintranscript", "dataShortTitle":"L", "type":"palette"},
{"title":"Reverse transliteration", "dataVar":"showTransliterate", "dataLocn":"transliterate", "dataShortTitle":"R", "type":"palette"},
{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard"}
]

var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Lisu text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
//{"title":"ISO 15919<br/>to Bengali", "alt":"Convert ISO 15919 Latin transcription to Bengali.", "code":"doTranscription('toBeng')"},
//{"title":"Bengali to<br/>ISO 15919", "alt":"Convert Bengali text to an ISO 15919 Latin transcription.", "code":"doTranscription('toISO')"},
//{"title":"Radice<br/>to Bengali", "alt":"Convert Radice Latin transcription to Bengali.", "code":"doTranscription('rtoBeng')"},
//{"title":"Bengali to<br/>Radice", "alt":"Convert Bengali text to a Radice Latin transcription.", "code":"doTranscription('toRadice')"},
]
