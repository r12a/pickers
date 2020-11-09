var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Thaana WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'dv' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Thaana WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'thaanaPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Thaana WF" ]


var template = {}
	template.title = 'Thaana character app'
    template.sample = "2. ހަމަކޮންމެ މީހަކަށްމެ، އޭނާގެ އަމިއްލަ ޤައުމު ނުވަތަ އެހެން ޤައުމެއް ދޫކޮށް ދިއުމުގެ ޙައްޤާއި، އޭނާގެ އަމިއްލަ ޤައުމަށް އެނބުރި އައުމުގެ ޙައްޤު ލިބިގެންވެއެވެ."
    template.blocklocation= '/scripts/thaana/block'  // blocklocation to use for examples
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'thaana'
	template.scriptcode = 'Thaa'
	template.fontLocale = 'thaa'
	template.hints = true



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Thaana text to a Latin transliteration.", "code":"doTranscription('transliterate')"},

{"title":"Transl<br/>++", "alt":"Convert Thaana text to a Latin transcription.", "code":"doTranscription('transcription')", "warning":"Show gemination, prenasalisation, and reduce various word-finals."},
]



var pulldown = [
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Thaana text.", "code":"doTranscription('revTransliterate')"},

{"title":"Thaana to<br/>Maldivian Latin", "alt":"Convert Thaana text to a Maldivian Latin transliteration.", "code":"doTranscription('toMaldivian')"},
]



var inputAids = [
{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Dhivehi from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},

{"title":"Maldivian Latin to Thaana", "dataVar":"showMLTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"M", "type":"palette", "initialCode":"setUpTypeAssist(false, mlCharacterMap, mlCharacterMap)", "desc":"Create Thaana text from characters in the Maldivian transcription."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type Thaana from the keyboard via reverse transliteration."},

{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard", "desc":"Select characters from a keyboard layout."}
]

