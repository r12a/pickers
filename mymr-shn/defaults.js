var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Serif Myanmar WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "28";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "2.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'shn' // language to use for examples
	factoryDefaults.uifont = 'Noto Serif Myanmar WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'shanPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Serif Myanmar WF", "Noto Sans Myanmar WF", "Tharlon WF" ]


var template = {}
	template.title = 'Shan character app'
	template.sample = "တွၼ်ႈ 1 ၵူၼ်းၵူႊၵေႃႉၼႆႉ ပဵၼ်ဢၼ်ၵိူတ်ႇမႃးလူၺ်ႈၵုင်ႇမုၼ်ဢၼ်လွတ်ႈလႅဝ်းၽဵင်ႇပဵင်းၵၼ် လႄႈ သုၼ်ႇလႆႈဢၼ် လွတ်ႈလႅဝ်းၽဵင်ႇ ပဵင်းၵၼ်။"
	template.sampleSource = ''
	template.blocklocation= 'mymr'  // block directory
	template.noteslocation = 'mymr/shn' // location of script notes
	template.vocablocation = 'mymr/shn_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'mymr-shn'
	template.scriptcode = 'Mymr'
	template.fontLocale = 'mymr-shn'
	template.hints = true
	
	template.defaultSpace = '\u200B'
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '\u103A'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Shan text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]




var pulldown = [
]




var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = false
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'LOC'
    show.kbd = "Shan"
    show.language = "Shan"


var inputAids = []
