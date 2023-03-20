var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Adelle Sans EXT Light WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "28";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'en' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Light WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u00A0";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "" // type of hint to show alongside characters in the grids


var thisPicker = 'latnAfrPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Gentium Plus WF", "Adelle Sans EXT Light WF", "Noto Sans Light WF" ]


var template = {}
	template.title = 'Pan-African Latin character app'
	template.sample = "Bánlʊrʊ́ʊ ɩrʊ́ báa weení na kezéńbíídi gɛ bɩka bɛdɛ́ɛ ɖɔɔzɩ́tɩ na yíkowá kɛgɛ́ɛ ɖéyí-ɖéyí gɛ. Bɔwɛná laakárɩ na ɩrʊ́tɩ bɩka bɩɩbɔ́ɔ́zɩ bɔcɔɔná ɖamá koobíre cɔwʊrɛ." // from https://unicode.org/udhr/d/udhr_kdh.html
	template.sampleSource = ''
	template.blocklocation= 'latn'  // block directory
	template.noteslocation = '' // location of script notes
	template.vocablocation = '' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'latn-afr'
	template.scriptcode = 'Latn'
	template.fontLocale = 'latn-afr'
	template.hints = false
	template.bicameral = true

	
	privilegedKey = ''  // § key assignment
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]
	template.defaultCtrlkey = ''
	template.ctrlkeys = []



var controls = [
]



var pulldown = [
]







var show = {}  // indicates which inputAids to use
    show.shape = false
    show.hints = false
    show.default = true
    show.latin = 'Latin'
    show.ipa = false
    show.transc = ''
    show.kbd = ""
    show.language = "African"


var inputAids = []

