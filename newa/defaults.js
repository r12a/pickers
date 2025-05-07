var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Newa WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'new' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Newa WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'newaPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Newa WF" ]

var template = {}
	template.title = 'Newa character app'
	template.sample = "𑐳𑐎𑐮𑐾𑑄 𑐩𑐣𑐹𑐟 𑐳𑑂𑐰𑐟𑐣𑑂𑐟𑑂𑐬 𑐰 𑐖𑑂𑐰𑐮𑐶𑐖𑑂𑐰𑑅 𑐁𑐟𑑂𑐩𑐳𑐩𑑂𑐩𑐵𑐣 𑐰 𑐰𑐵𑑄 𑐡𑐂𑐎𑐠𑑄 𑐧𑐸𑐂 𑑋 𑐂𑐥𑐶𑑄 𑐳𑑂𑐰𑐰𑐶𑐰𑐾𑐎 𑐰 𑐳𑐡𑑂𑐧𑐸𑐡𑑂𑐔𑐶 𑐡𑐫𑐵𑑅 𑐰𑐶𑐰𑐾𑐎𑐱𑐷𑐮 𑐖𑐸𑐂 𑐀𑐮𑐾 𑐠𑐰𑑄𑐠𑐰𑐫𑑂 𑐡𑐵𑐖𑐵𑐎𑐠𑑄 𑐴𑐣𑐵𑐧𑐣𑐵 𑐫𑐵𑐂 𑑋"
	template.sampleSource = ''
	template.blocklocation= 'newa'  // block directory
	template.noteslocation = 'newa/new' // location of script notes
	template.vocablocation = 'newa/new_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'newa'
	template.scriptcode = 'Newa'
	template.fontLocale = "newa"
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '\u{11442}'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Newa text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
{"title":"Translit+", "alt":"Convert to a Latin transliteration but then apply additional phonetic transformations.", "code":"doTranscription('transcription')", "warning":"Adds inherent vowels based on a very generalised rule. The result should be checked."},
]




var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = true
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'ISO'
    show.kbd = ""
    show.language = "Newar"


var inputAids = []

