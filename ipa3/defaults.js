var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Doulos SIL WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "1.5"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'en-fonipa' // language to use for examples
	factoryDefaults.uifont = 'Doulos SIL WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'ipaPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Doulos SIL WF" ]


var template = {}
	template.title = 'IPA character app'
	template.sample = "/ɔːl ˈhɟʉːmən ˈbiːɪŋz ɑː bɔːn friː ænd ˈiːkwəl ɪn ˈdɪɡnɪtɪ ənd raɪts ‖ ðeɪ  ɑːr ɪnˈdæʊd wɪð ˈriːzᵊn ənd ˈkɒnʃəns ænd ʃʊd ækt təˈɰɔːdz wʌn əˈnʌðə ɪn ə ˈspɪrɪt ɒv ˈbrʌðəˌħʊd/"
	template.blocklocation= '/scripts/latin/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'ipa'
	template.scriptcode = 'Latn'
	template.fontLocale = 'latn'



var controls = [
]



var pulldown = [
]



var inputAids = [
{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type IPA from the keyboard."},

{"title":"Palette for type-assist", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"P", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Input characters from a palette."},

{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard", "desc":"Select characters from a keyboard layout."}
]
