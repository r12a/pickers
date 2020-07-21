var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'SolaimanLipi' // text area font name (a single font, no quotes)
	factoryDefaults.size = "45";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'bn' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Bengali'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'bengaliPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Bengali WF" ]


var template = {}
	template.title = 'Bengali character app'
	template.sample = "২. প্রত্যেকের‌ই নিজ দেশ সহ যে কোন দেশ পরিত্যাগ এবং স্বদেশে প্রত্যাবর্তনের অধিকার রয়েছে।"
	template.blocklocation= '/scripts/bengali/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'bengali'
	template.scriptcode = 'Beng'
	template.fontLocale = 'beng'



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Bengali text to a Latin transliteration.", "code":"doTranscription('transliterate')"},

]



var pulldown = [
//{"title":"Bengali<br/>to IPA", "alt":"Convert Bengali text to a very approximate IPA transcription.", "code":"doTranscription('toIPA')", "warning":"This only produces an APPROXIMATION to an IPA transcription. Use it as a base and refine it by hand."},
{"title":"Bengali to IPA", "alt":"Convert Bengali text to a very approximate IPA transcription.", "code":"doTranscription('transcription')", "warning":"This only produces an APPROXIMATION to an IPA transcription. Use it as a base and refine it by hand."},

{"title":"Bengali to ISO", "alt":"Convert Bengali text to an ISO 15919 Latin transcription.", "code":"doTranscription('toISO')"},

//{"title":"ISO 15919<br/>to Bengali", "alt":"Convert ISO 15919 Latin transcription to Bengali.", "code":"doTranscription('toBeng')"},
{"title":"Bengali to Radice", "alt":"Convert Bengali text to a Radice Latin transcription.", "code":"doTranscription('toRadice')"},

//{"title":"Radice<br/>to Bengali", "alt":"Convert Radice Latin transcription to Bengali.", "code":"doTranscription('rtoBeng')"},
// THE FORMER ALL NEED UPDATING
]


var inputAids = [
{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Bengali from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},

{"title":"ISO to Bengali", "dataVar":"showISOCharMap", "dataLocn":"transcriptionPalette", "dataShortTitle":"I", "type":"palette", "initialCode":"setUpTypeAssist(false, isoCharacterMap, isoCharacterMap)", "desc":"Create Bengali text from characters in the XXXX transcription."},

{"title":"Radice to Bengali", "dataVar":"showRadiceTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, radiceCharacterMap, radiceCharacterMap)"},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type Bengali from the keyboard via reverse transliteration."},

{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard", "desc":"Select characters from a keyboard layout."}

]

