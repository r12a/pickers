var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Satisar Sharada WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "200"; // px height of text area
	factoryDefaults.lineheight = "1.6"; // line height of text area 
	factoryDefaults.language = 'ks' // language to use for examples
	factoryDefaults.uifont = 'Satisar Sharada WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'sharadaPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Satisar Sharada WF", "Noto Sans Sharada WF" ]


var template = {}
	template.title = 'Sharada'
	template.sample = "𑆱𑆽𑆫𑆴 𑆬𑆾𑆒 𑆗𑆼 𑆲𑆶𑆑𑆷𑆑 𑆠𑆼 𑆍𑆘𑆠 𑆬𑆴𑆲𑆳𑆘 𑆲𑆼𑆲𑆵 𑆘𑆼𑆩𑆼𑆠. 𑆠𑆶𑆩𑆤 𑆗𑆼 𑆘𑆩𑆵𑆫 𑆠𑆼 𑆃𑆑𑆼𑆬 𑆢𑆤𑆼 𑆄𑆩𑆼𑆖. 𑆠𑆳𑆮𑆪 𑆥𑆘𑆼 𑆠𑆼𑆩𑆤 𑆨𑆽𑆪𑆼 𑆧𑆫𑆳𑆢𑆼𑆫𑆵 𑆱𑆳𑆁 𑆫𑆾𑆘𑆶𑆤."
	template.sampleSource = 'https://www.omniglot.com/writing/sharda.htm'
	template.blocklocation= 'shrd'  // block directory
	template.noteslocation = 'shrd/ks' // location of script notes
	template.vocablocation = 'shrd/ks_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'shrd-ks'
	template.scriptcode = 'Shrd'
	template.fontLocale = 'shrd'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '\u0E3A'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Sharada text to a latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [

{"title":"Translit+", "alt":"Convert to a Latin transliteration but then apply additional phonetic transformations.", "code":"doTranscription('translitPlus')", "warning":"Adds inherent vowels and palatalisation. The result should be checked."},
]






var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = true
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'ISO'
    show.kbd = ""
    show.language = "Sharada"


var inputAids = []

