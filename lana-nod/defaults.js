var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Hariphunchai WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'nod' // language to use for examples
	factoryDefaults.uifont = 'Lanna Alif WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u0020";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'northernthaiPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ 'Hariphunchai WF', 'Payap Lanna WF', "Lamphun WF", "Noto Serif Tai Tham WF", "Lanna Alif WF" ]


var template = {}
	template.title = 'Northern Thai character app'
	template.sample = "ᨣᩢ᩠ᨶᩉᩖᩮᩨᨠᩥ᩠ᨶ ᨣᩢᩐᩢᩣᨡᩣ᩠ᨿᨸᩮ᩠ᨶᨦᩫ᩠ᨶ ᨠᩮ᩠ᨷᩉᩬᨾᩋᩬᨾᩅᩱᩢᨯ᩠᩶ᨦᨶᩦ᩶ ᨴᩩᨠᪧᨸᩦᨾᩣᨷᩢᨡᩣ᩠ᨯ ᨧᩥ᩠᩵ᨦᨠ᩠ᨴᩣᩴᩉᩨ᩶ᨡᩮᩢᩣᨻᩳ᩵ᨾᩯ᩵ᩃᩪᨠ ᨷᩢᨯᩱ᩶ᨠᩢ᩠᩶ᨶᩈᩢ᩠ᨦᩈᩢ᩠ᨠᨩᩮᩨᩬ"
	template.sampleSource = ''
	template.blocklocation= 'lana'  // block directory
	template.noteslocation = 'lana/nod' // location of script notes
	template.vocablocation = 'lana/nod_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'lana-nod'
	template.scriptcode = 'Lana'
	template.fontLocale = 'lana-nod'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '\u1A60'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['SAKOT','\u1A60']]




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Northern Thai text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
//{"title":"Translit<br/>++", "alt":"Transliterate but convert complex vowels to sounds.", "code":"doTranscription('transcription')", "warning":"Transliterates, but renders sound for complex vowels."},
]





var pulldown = [
]







var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = true
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = ''
    show.kbd = "Northern Thai"
    show.language = "Northern Thai"


var inputAids = []

