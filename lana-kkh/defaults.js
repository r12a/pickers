var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'A Tai Tham KH New WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'kkh' // language to use for examples
	factoryDefaults.uifont = 'A Tai Tham KH New WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'taikhuenPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Serif Tai Tham WF", "Lanna Alif WF", "A Tai Tham KH New WF" ]


var template = {}
	template.title = 'Tai Khün character app'
	template.sample = "ᨡᩳ᩶ 1 ᨾᨶᩩᩔ᩼ᨴ᩠ᨦᩢᩉᩖᩣ᩠ᨿᨠᩮ᩠ᨯᩨᨾᩣᨾᩦᨻ᩠ᨦᩈᩁᩓᩢᨹ᩠ᨿ᩵ᨦᨻ᩠ᨿᨦᨠ᩠ᨶᩢ ᨶᩱᨠᩥᨲ᩠ᨲᩥᩈ᩠ᨠᩢ ᩓᩢᩈᩥᨴ᩠ᨵᩥ ᨲ᩵ᩣ᩠ᨦᨣᩳ᩶ᨣᩢᨾᩦᨾᨶᩮᩣᨵᨾ᩠ᨾ᩼ᩓᩢ ᨣ᩠ᩅᩁᨷᨭᩥᨷ᩠ᨲᩢᨲᩳ᩵ᨠ᩠ᨶᩢᨯᩢ᩠ᩅ᩠ᨿᨣ᩠ᩅᩣ᩠ᨾᨹ᩠ᨿ᩵ᨦᨻ᩠ᨿᨦᨠ᩠ᨶᩢ"
	template.sampleSource = ''
	template.blocklocation= 'lana'  // block directory
	template.noteslocation = 'lana/kkh' // location of script notes
	template.vocablocation = 'lana/kkh_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'lana-kkh'
	template.scriptcode = 'Lana'
	template.fontLocale = 'lana-kkh'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '\u1A60'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['SAKOT','\u1A60']]




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Khün text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
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
    show.kbd = "Tai Khün"
    show.language = "Tai Khün"


var inputAids = []



