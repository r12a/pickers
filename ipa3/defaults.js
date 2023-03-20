var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Doulos SIL WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "100"; // px height of text area
	factoryDefaults.lineheight = "1.4"; // line height of text area
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
	template.title = 'IPA  <span style="font-size:50%">by type</span>'
	template.sample = "/ɔːl ˈhɟʉːmən ˈbiːɪŋz ɑː bɔːn friː ænd ˈiːkwəl ɪn ˈdɪɡnɪtɪ ənd raɪts ‖ ðeɪ  ɑːr ɪnˈdæʊd wɪð ˈriːzᵊn ənd ˈkɒnʃəns ænd ʃʊd ækt təˈɰɔːdz wʌn əˈnʌðə ɪn ə ˈspɪrɪt ɒv ˈbrʌðəˌħʊd/"
	template.blocklocation= 'latn'  // blocklocation to use for examples
    template.noteslocation = '' // location of script notes relevant to this app
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'ipa3'
	template.scriptcode = 'Latn'
	template.fontLocale = 'ipa'
	template.hints = false



var controls = [
]



var pulldown = [
]







var show = {}  // indicates which inputAids to use
    show.shape = false
    show.hints = false
    show.default = true
    show.latin = false
    show.ipa = false
    show.transc = ''
    show.kbd = "IPA"
    show.language = "IPA"


var inputAids = []

