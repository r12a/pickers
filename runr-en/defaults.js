var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'BabelStone Moon Runes WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "24";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.4"; // line height of text area
	factoryDefaults.language = 'en' // language to use for examples
	factoryDefaults.uifont = 'BabelStone Runic Berhtwald WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'runrenPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "BabelStone Moon Runes WF", "BabelStone Runic Berhtwald WF" ]


var template = {}
	template.title = 'Tolkien Runes'
	template.sample = "ᚹᚣᚱᛗᛋᛏᚫᚾᛞ᛫ᛒᚣ᛫ᚦᛖ᛫ᚷᚱᛖᚣ᛫ᛋᛏᚩᚾᛖ᛫ᚹᚻᛁᛚᛖ᛫ᚦᛖ᛫ᚦᚱᚢᛋᚻ᛫ᛱᚾᚩᚳᛱᛋ᛫ᚫᚾᛞ᛫ᚦᛖ᛫ᛋᛖᛏᛏᛁᚾᚷ᛫ᛋᚢᚾ᛫ᚹᛁᚦ᛫ᚦᛖ᛫ᛚᚫᛋᛏ᛫ᛚᛁᚷᚻᛏ᛫ᚩᚠ᛫ᛞᚢᚱᛁᚾᛋ᛫ᛞᚫᚣ᛫ᚹᛁᛚᛚ᛫ᛋᚻᛁᚾᛖ᛫ᚢᛈᚩᚾ᛫ᚦᛖ᛫ᛱᛖᚣᚻᚩᛚᛖ  ᚦ⃞     ᛋᛗᚪᚢᚷ"
	template.sampleSource = 'https://www.babelstone.co.uk/Fonts/MoonRunes.html'
	template.blocklocation= 'runic'  // block directory
	template.noteslocation = '' // location of script notes
	template.vocablocation = '' // location of term database
	template.direction = "bidi" // indicates whether this is a picker for a RTL script
	template.github = 'runr-en'
	template.scriptcode = 'Runr'
	template.fontLocale = "runr"
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '᛫'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['CGJ','\u034F'], ['RLO','\u202E'], ['PDF','\u202C']]



var controls = [
{"title":"Trans-<br>late", "alt":"Convert to a Latin transliteration but then apply additional orthographic transformations.", "code":"doTranscription('translitPlus')", "warning":"Expands some runes to more than one Latin letter."},

{"title":"Latin to<br/>Runic", "alt":"Convert Latin text to Hobbit runes.", "code":"doTranscription('toRunic')", "warning":"Converts ordinary Latin text to Hobbit runes."},
]





var pulldown = [
{"title":"Transliterate", "alt":"Convert Runic text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},

]





var show = {}  // indicates which inputAids to use
    show.shape = false
    show.hints = false
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'Latin'
    show.kbd = ""
    show.language = "Hobbit runes"


var inputAids = []

