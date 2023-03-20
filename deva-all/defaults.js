var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Serif Devanagari WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'hi' // language to use for examples
	factoryDefaults.uifont = 'Noto Serif Devanagari WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "32";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "" // type of hint to show alongside characters in the grids


var thisPicker = 'devanagariPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Serif Devanagari WF" ]


var template = {}
	template.title = 'All Devanagari character app'
	template.sample = "(२) प्रत्येक व्यक्ति को अपने या पराये किसी भी देश को छोड़नो और अपने देश को वापस आनो का अधिकार है ।"
	template.sampleSource = ''
	template.blocklocation= 'deva'  // block directory
	template.noteslocation = 'deva/hi' // location of script notes
	template.vocablocation = '' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'deva-all'
	template.scriptcode = 'Deva'
	template.fontLocale = 'deva'
	template.hints = false
	
	privilegedKey = '\u0E3A'  // § key assignment
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['CGJ','\u034F']]
	template.defaultCtrlkey = '\u0E3A'
	template.ctrlkeys = [['VIRAMA','\u0E3A']]



var controls = [
//{"title":"Trans-<br/>literate", "alt":"Convert devanagari text to a latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
]





var show = {}  // indicates which inputAids to use
    show.shape = false
    show.hints = true
    show.default = false
    show.latin = false
    show.ipa = false
    show.transc = ''
    show.kbd = "Devanagari"
    show.language = "Devanagari"


var inputAids = []



var inputAids = [
{"title":"Hint at similar shapes", "id":"showShapeHints", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"title":"Type assist: Map keys to a Devanagari keyboard.", 
"desc":"Use a Devanagari keyboard mapping to type from the keyboard.",
"dataShortTitle":"K", "type":"palette", 
"initialCode":"document.getElementById('keyboard').style.display='block';"
},
]
