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
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'syriacPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Syriac character app'
    template.sample = "ܘܐ̄ܢܵܫ̈ܝܼܢ ܐܵܡܪܝܼܢ ܕܲܐܟܙܢܵܐ ܩܲܕ݂ܡܵܝܲܬ݂ ܪܟ݂ܲܒ݂ ܐܵܬ݂ܘ̈ܵܬ݂ܲܐ ܥܸܒ݂ܪ̈ܵܝܵܬ݂ܲܐ ܘܲܒ݂ܗܹܝܢ ܣܡ ܢܡܘܣܐ ܆ ܗܟܢܐ ܘܫܝܠܡܘܢ ܪܟܒ ܐܬܘ̈ܬܐ ܕܣܦܪ̈ܐ ܐܚܪ̈ܢܐ ܘܝܗ̣ܒ ܠܥܡ̈ܡܐ ܕܐܬܝܩܪ ܡܢܗܘܢ ܂"
    template.blocklocation= '/scripts/syriac/block'  // blocklocation to use for examples
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'syriac'
	template.scriptcode = 'Syrc'



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Syriac text to a Latin transliteration.", "code":"doTranscription('toLatin')"},
]



var pulldown = [
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Syriac text.", "code":"doTranscription('revTransliterate')"},
]


var inputAids = [
//{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

//{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Syriac from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type Syriac from the keyboard via reverse transliteration."},

{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard", "desc":"Select characters from a keyboard layout."}




//{"title":"Show cursive forms", "dataVar":"showCursive", "dataLocn":"cursive", "dataShortTitle":"S", "type":"hint"},

]

