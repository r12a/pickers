var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Wancho WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.4"; // line height of text area
	factoryDefaults.language = 'nnp' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Wancho WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "◌";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'nnpPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Wancho WF" ]


var template = {}
	template.title = 'Wancho'
	template.sample = "𞋙𞋞𞋩𞋛𞋔 𞋉𞋞𞋮𞋎𞋀𞋮 𞋔𞋜𞋘𞋯 𞋐𞋀𞋞𞋯 𞋔𞋁𞋞 𞋋𞋁𞋘 𞋚𞋕𞋉𞋯 𞋃𞋁 𞋐𞋛𞋯 𞋔𞋁𞋮𞋉 𞋋𞋁𞋜𞋫 𞋘𞋢 𞋌𞋞𞋝𞋮 𞋇𞋁 𞋊𞋞𞋫 𞋃𞋁 𞋉𞋞𞋮𞋊𞋞𞋮, 𞋃𞋁 𞋃𞋀𞋮 𞋈𞋁𞋘 𞋅𞋕𞋜𞋮 𞋔𞋁 𞋃𞋁𞋜 𞋃𞋁 𞋉𞋀𞋞 𞋈𞋁 𞋋𞋁𞋜𞋫 𞋀 𞋊𞋁𞋐𞋜."
	template.sampleSource = 'https://omniglot.com/writing/wanchoscript.htm'
	template.blocklocation= 'wcho'  // block directory
	template.noteslocation = 'wcho/nnp' // location of script notes
	template.vocablocation = 'wcho/nnp_terms' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'wcho'
	template.scriptcode = 'Wcho'
	template.fontLocale = "wcho"
	template.hints = true
	template.bicameral = true

	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['CGJ','\u034F']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Wancho text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
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
    show.kbd = true
    show.language = "Wancho"


var inputAids = []




