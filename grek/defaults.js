var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Gentium Plus WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.5"; // line height of text area 
	factoryDefaults.language = 'el' // language to use for examples
	factoryDefaults.uifont = 'Gentium Plus WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'greekPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Gentium Plus WF" ]


var template = {}
	template.title = 'Modern Greek character app'
	template.sample = "ΑΡΘΡΟ 1 Όλοι οι άνθρωποι γεννιούνται ελεύθεροι και ίσοι στην αξιοπρέπεια και τα δικαιώματα. Είναι προικισμένοι με λογική και συνείδηση, και οφείλουν να συμπεριφέρονται μεταξύ τους με πνεύμα αδελφοσύνης."
	template.blocklocation= '/scripts/greek/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'greek'
	template.scriptcode = 'Grek'
	template.fontLocale = 'grek'
	template.hints = true




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Greek text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
//{"title":"Greek<br/>to ISO", "alt":"Convert Greek text to an ISO 9:1995 Latin transliteration.", "code":"doTranscription('toISO')"},
]



var pulldown = [
]


var inputAids = [
//{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

//{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Greek from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},

//{"title":"ISO to Hindi", "dataVar":"showISOCharMap", "dataLocn":"transcriptionPalette", "dataShortTitle":"I", "type":"palette", "initialCode":"window.latinOnly=false;makePalette(isoCharacterMap);makeKbdEventList(isoCharacterMap);", "desc":"Create XXXX text from characters in the XXXX transcription."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type Greek from the keyboard via reverse transliteration."},

//{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard", "desc":"Select characters from a keyboard layout."}
]
