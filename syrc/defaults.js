var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Estrangelo Edessa WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.2"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'syr' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Syriac Estrangela'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'syriacPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Syriac Eastern WF", "Noto Sans Syriac Estrangela WF", "Noto Sans Syriac Western WF", "East Syriac Adiabene WF", "Estrangelo Edessa WF", "Serto Jerusalem WF" ]


var template = {}
	template.title = 'Syriac character app'
    template.sample = "ܘܐ̄ܢܵܫ̈ܝܼܢ ܐܵܡܪܝܼܢ ܕܲܐܟܙܢܵܐ ܩܲܕ݂ܡܵܝܲܬ݂ ܪܟ݂ܲܒ݂ ܐܵܬ݂ܘ̈ܵܬ݂ܲܐ ܥܸܒ݂ܪ̈ܵܝܵܬ݂ܲܐ ܘܲܒ݂ܗܹܝܢ ܣܡ ܢܡܘܣܐ ܆ ܗܟܢܐ ܘܫܝܠܡܘܢ ܪܟܒ ܐܬܘ̈ܬܐ ܕܣܦܪ̈ܐ ܐܚܪ̈ܢܐ ܘܝܗ̣ܒ ܠܥܡ̈ܡܐ ܕܐܬܝܩܪ ܡܢܗܘܢ ܂"
    template.blocklocation= '/scripts/syriac/block'  // blocklocation to use for examples
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'syrc'
	template.scriptcode = 'Syrc'
	template.cursive = true
	template.fontLocale = 'syrc'
	template.hints = true


var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Syriac text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to XXXX text.", "code":"doTranscription('revTransliterate')", "warning":"The Latin text must follow the transliteration scheme developed for this app."},

{"title":"Vocab to<br>Markup", "alt":"Convert a vocab entry to example markup.", "code":"vocab2Markup(getHighlightedText(document.getElementById('output')))"},
]


var inputAids = [
{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Syriac from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type Syriac from the keyboard via reverse transliteration."},

{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard", "desc":"Select characters from a keyboard layout."}
]




// this indicates which items are to be described in the help
// options include: intro,shape,hinting,typeAssist,latin,reverse & keyboard
var inputAidsHelp = 'showIntro,'
for (let i=0;i<inputAids.length;i++) {
	if (inputAids[i].dataVar) inputAidsHelp += ','+inputAids[i].dataVar
	}

