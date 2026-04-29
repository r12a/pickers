var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Mro WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "2"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'mro' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Mro WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'mroPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Mro WF" ]


var template = {}
	template.title = 'Mru'
	template.sample = "𖩏𖩖𖩔𖩆𖩊 𖩗𖩖𖩊 𖩎𖩆𖩁 𖩋𖩖 𖩍𖩖𖩌… 𖩏𖩖𖩎𖩊 𖩏𖩆𖩔𖩆𖩊 𖩌𖩖 𖩐𖩓𖩆𖩎 𖩖𖩂𖩑𖩌 𖩎𖩖… 𖩌𖩍𖩖𖩁𖩐𖩖 𖩂𖩑𖩌 𖩎𖩖 𖩖𖩎𖩆𖩁 𖩀𖩑𖩖𖩏 𖩈𖩝𖩐 𖩐𖩖…"
	template.sampleSource = 'https://omniglot.com/writing/mro.htm'
	template.blocklocation= 'mroo'  // block directory
	template.noteslocation = 'mroo/mro' // location of script notes
	template.vocablocation = 'mroo/mro_terms' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'mroo-mro'
	template.scriptcode = 'Mroo'
	template.fontLocale = 'mroo'
	template.hints = true
	template.bicameral = false

	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['CGJ','\u034F']]


var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Mro text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
]



var show = {}  // indicates which inputAids to use
    show.shape = false
    show.hints = false
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'Latin'
    show.kbd = ""
    show.language = "Mru"


var inputAids = []


