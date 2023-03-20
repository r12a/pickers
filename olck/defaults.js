var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Ol Chiki WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "28";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.4"; // line height of text area
	factoryDefaults.language = 'sat' // language to use for examples
	factoryDefaults.uifont = ' Noto Sans Ol Chiki WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'santaliPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ " Noto Sans Ol Chiki WF" ]


var template = {}
	template.title = 'Santali'
	template.sample = "ᱱᱤᱭᱟᱹ ᱣᱤᱠᱤᱯᱤᱰᱤᱭᱟ ᱫᱚ ᱥᱟᱱᱛᱟᱲᱤ ᱛᱮ ᱚᱞ ᱟᱠᱟᱱᱟ᱾ ᱚᱨᱦᱚᱸ ᱮᱴᱟᱜ ᱯᱟᱹᱨᱥᱤᱛᱮ ᱦᱚᱸ ᱟᱭᱢᱟ ᱣᱤᱠᱤᱯᱤᱰᱤᱭᱟ ᱢᱮᱱᱟᱜ-ᱟ᱾ ᱱᱚᱸᱰᱮ ᱠᱤᱪᱷᱩ ᱛᱟᱹᱞᱠᱟᱹ ᱮᱢ ᱦᱩᱭᱱᱟ᱾"
	template.sampleSource = ''
	template.blocklocation= 'olck'  // block directory
	template.noteslocation = 'olck/sat' // location of script notes
	template.vocablocation = 'olck/sat_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'olck'
	template.scriptcode = 'Olck'
	template.fontLocale = "olck"
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Santali text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]





var pulldown = [
]




var show = {}  // indicates which inputAids to use
    show.shape = false
    show.hints = false
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'ALA LC'
    show.kbd = "Microsoft Santali"
    show.language = "Santali"


var inputAids = []

