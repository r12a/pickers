var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Sundanese Unicode 2013 WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'su' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Sundanese WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u00A0";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'sundanesePicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Sundanese WF", "Sundanese Unicode 2013 WF" ]


var template = {}
	template.title = 'Sundanese character app'
	template.sample = "ᮙᮛᮔᮨᮂᮔ ᮓᮤᮘᮨᮛᮨ ᮃᮊᮜ᮪ ᮏᮩᮀ ᮠᮒᮨ ᮔᮥᮛᮔᮤ, ᮎᮙ᮪ᮕᮥᮁ-ᮌᮅᮜ᮪ ᮏᮩᮀ ᮞᮞᮙᮔ ᮃᮚ ᮓᮤᮔ ᮞᮥᮙᮔᮨᮒ᮪ ᮓᮥᮓᮥᮜᮥᮛᮔ᮪."
	template.sampleSource = ''
	template.blocklocation= 'sund'  // block directory
	template.noteslocation = 'sund/su' // location of script notes
	template.vocablocation = 'sund/su_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'sund'
	template.scriptcode = 'Sund'
	template.fontLocale = 'sund'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '\u1BAA'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['PAMAAEH','\u1BAA']]


// ᮞᮊᮥᮙ᮪ᮔ ᮏᮜ᮪ᮙ ᮌᮥᮘᮢᮌ᮪ ᮊ ᮃᮜᮙ᮪ ᮓᮥᮑ ᮒᮨᮂᮞᮤᮖᮒ᮪ᮔ ᮙᮨᮛ᮪ᮓᮤᮊ ᮏᮩᮀ ᮘᮧᮌ ᮙᮛ᮪ᮒᮘᮒ᮪ ᮊᮒᮥᮒ᮪ ᮠᮊ᮪-ᮠᮊ᮪ ᮃᮔᮥ ᮞᮛᮥᮃ. ᮙᮛᮔᮨᮂᮔ ᮓᮤᮘᮨᮛᮨ ᮃᮊᮜ᮪ ᮏᮩᮀ ᮠᮒᮨ ᮔᮥᮛᮔᮤ, ᮎᮙ᮪ᮕᮥᮁ-ᮌᮅᮜ᮪ ᮏᮩᮀ ᮞᮞᮙᮔ ᮃᮚ ᮓᮤᮔ ᮞᮥᮙᮔᮨᮒ᮪ ᮓᮥᮓᮥᮜᮥᮛᮔ᮪. 



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Javanese text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
]




var pulldown = [
{"title":"Sundanese to Latin", "alt":"Convert Sundanese text to a Latin transcription.", "code":"doTranscription('toLatin')", "warning":"The result of this conversion needs to be checked for accuracy."},
]





var show = {}  // indicates which inputAids to use
    show.shape = false
    show.hints = true
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'Latin'
    show.kbd = "Sundanese"
    show.language = "Sundanese"


var inputAids = []



