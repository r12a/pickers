var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Syriac Estrangela' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2.5"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.2"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'syr-Syrc' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Syriac Estrangela'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "30";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u00A0";  // default base for combining characters
	factoryDefaults.uidir = "rtl" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'syriacPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Syriac character picker'
    template.sample = "ܘܐ̄ܢܵܫ̈ܝܼܢ ܐܵܡܪܝܼܢ ܕܲܐܟܙܢܵܐ ܩܲܕ݂ܡܵܝܲܬ݂ ܪܟ݂ܲܒ݂ ܐܵܬ݂ܘ̈ܵܬ݂ܲܐ ܥܸܒ݂ܪ̈ܵܝܵܬ݂ܲܐ ܘܲܒ݂ܗܹܝܢ ܣܡ ܢܡܘܣܐ ܆ ܗܟܢܐ ܘܫܝܠܡܘܢ ܪܟܒ ܐܬܘ̈ܬܐ ܕܣܦܪ̈ܐ ܐܚܪ̈ܢܐ ܘܝܗ̣ܒ ܠܥܡ̈ܡܐ ܕܐܬܝܩܪ ܡܢܗܘܢ ܂"
    template.blocklocation= '/scripts/syriac/block'  // blocklocation to use for examples
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'syriac'
	template.scriptcode = 'Syrc'



var inputAids = [
{"title":"Show cursive forms", "dataVar":"showCursive", "dataLocn":"cursive", "dataShortTitle":"S", "type":"hint"},
{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"window.latinOnly=true;makePalette(justLatinMap);makeKbdEventList(justLatinMap);"},
{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"window.latinOnly=false;makePalette(translitCharacterMap);makeKbdEventList(translitCharacterMap);"},
//{"title":"Latin to IPA", "dataVar":"showLOCTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"window.latinOnly=false;makePalette(ipaCharacterMap);makeKbdEventList(ipaCharacterMap);"},
{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard"}
]

var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Syriac text to a Latin transliteration.", "code":"doTranscription('toLatin')"},
]

