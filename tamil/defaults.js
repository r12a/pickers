var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Tamil WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'ta' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Tamil WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'tamilPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Tamil character app'
	template.sample = "2. தனது சொந்த நாடு உட்பட ஏதேனும் நாட்டை விட்டுச் செல்லவும் தத்தமது நாட்டுக்குத் திரும்பவும் ஒவ்வொருவருக்கும் உரிமையுண்டு."
	template.blocklocation= '/scripts/tamil/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'tamil'
	template.scriptcode = 'Taml'




var controls = [
{"title":"Trans-<br>literate", "alt":"Convert Tamil text to a Latin transliteration.", "code":"doTranscription('transliterate')", "warning":"Produce a codepoint-by-codepoint, reversible Latin transliteration."},
]





var pulldown = [
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Javanese text.", "code":"doTranscription('revTransliterate')"},

{"title":"Trans-<br>scribe", "alt":"Convert to a Latin transcription.", "code":"doTranscription('transcription')", "warning":"Normalise text, add inherent vowels, and simplify some sequences."},

{"title":"Tamil<br>to ISO", "alt":"Convert Tamil text to an ISO Latin transcription.", "code":"doTranscription('toISO')", "warning":"Produce an ISO Latin transcription."},

//{"title":"Tamil<br>to IPA", "alt":"Convert Tamil text to an phonetic transcription.", "code":"doTranscription('toIPA')"},

{"title":"ISO to<br/>Tamil", "alt":"Convert ISO latin text to Tamil transcription.", "code":"doTranscription('fromISO')"},
]



var inputAids = [
{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Tamil from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},

{"title":"ISO to Tamil", "dataVar":"showISOCharMap", "dataLocn":"transcriptionPalette", "dataShortTitle":"I", "type":"palette", "initialCode":"setUpTypeAssist(false, isoCharacterMap, isoCharacterMap)", "desc":"Create Tamil text from characters in the ISO transcription."},

{"title":"IPA to Tamil", "dataVar":"showIPACharMap", "dataLocn":"transcriptionPalette", "dataShortTitle":"I", "type":"palette", "initialCode":"setUpTypeAssist(false, ipaCharacterMap, ipaCharacterMap)", "desc":"Create Tamil text from characters in an IPA transcription."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type Tamil from the keyboard via reverse transliteration."},

{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard", "desc":"Select characters from a keyboard layout."}
]
