var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Nag Mundari WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "2"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'unr' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Nag Mundari WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'nagmPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Nag Mundari WF" ]


var template = {}
	template.title = 'Nag Mundari'
	template.sample = "𞓝𞓐𞓨𞓐𞓗-𞓱: 𞓛𞓐𞓗𞓤𞓨 𞓞𞓐𞓪𞓐 𞓢𞓐𞓢𞓤𞓮 𞓧𞓕𞓨𞓕𞓣𞓔 𞓐𞓜𞓐𞓙 𞓐𞓢𞓝𞓚𞓓𞓕𞓣 𞓢𞓐𞓣𞓤𞓓𞓕𞓦 𞓑𞓕𞓚𞓝𞓚 𞓗𞓕𞓗𞓐𞓝 𞓣𞓤 𞓖𞓐𞓨𞓐𞓧 𞓖𞓐𞓣𞓐𞓔𞓤𞓝𞓤 𞓕𞓡𞓕𞓨𞓕𞓡 𞓐𞓜𞓐𞓦 𞓗𞓐𞓣𞓕𞓗𞓐𞓣𞓚 𞓨𞓕𞓧𞓕𞓢𞓕𞓨𞓕. 𞓚𞓨𞓢𞓟𞓦𞓢𞓤 𞓛𞓤𞓥𞓕 𞓐𞓜𞓐𞓦 𞓖𞓚𞓮𞓭 𞓑𞓤𞓪𞓤𞓦 𞓖𞓚𞓭𞓟𞓣𞓤𞓓𞓕𞓙 𞓤𞓨𞓤𞓧𞓢𞓐 𞓨𞓕𞓧𞓕𞓢𞓕𞓨𞓕 𞓐𞓜𞓐𞓙 𞓚𞓨𞓢𞓟𞓙 𞓒𞓐𞓙𞓝𞓤 𞓞𞓕𞓦𞓤𞓓𞓕 𞓗𞓐𞓓𞓕 𞓒𞓤𞓢𞓕 𞓖𞓕𞓦𞓕𞓣 𞓗𞓕𞓢𞓕𞓝𞓚𞓘𞓕𞓙."
	template.sampleSource = 'https://www.unicode.org/L2/L2003/03259-intro-lepcha.pdf'
	template.blocklocation= 'nagm'  // block directory
	template.noteslocation = 'nagm/unr' // location of script notes
	template.vocablocation = 'nagm/unr_terms' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'nagm-unr'
	template.scriptcode = 'Nagm'
	template.fontLocale = 'nagm'
	template.hints = true
	template.bicameral = false

	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['CGJ','\u034F']]


var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Nag Mundari text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
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
    show.kbd = "Nedumaran"
    show.language = "Nag Mundari"


var inputAids = []


