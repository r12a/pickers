var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Makasar WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'mak' // language to use for examples
	factoryDefaults.uifont = 'Makasar WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u00A0";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'makasarPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Makasar WF" ]


var template = {}
	template.title = 'Makasar character app'
	template.sample = "𑻯𑻱𑻦𑻴𑻷𑻪𑻦𑻵𑻠𑻱𑻳𑻷𑻨𑻳𑻣𑻶𑻦𑻵𑻭𑻪𑻳𑻷𑻱𑻨𑻨𑻸29𑻣𑻭𑻠𑻭𑻷𑻪𑻠𑻭𑻴𑻯𑻣𑻴𑻮𑻶𑻨𑻷𑻱𑻰𑻮𑻣𑻷𑻨𑻤𑻠𑻭𑻳𑻠𑻭𑻱𑻵𑻢𑻷  𑻨𑻴𑻲𑻮𑻶𑻱𑻳𑻠𑻯𑻴𑻢𑻰𑻵𑻷  𑻪𑻶𑻣𑻮𑻶𑻶𑻭𑻶𑻷"
	template.sampleSource = ''
	template.blocklocation= ''  // block directory
	template.noteslocation = '' // location of script notes
	template.vocablocation = '' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'maka'
	template.scriptcode = 'Maka'
	template.fontLocale = 'maka'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '𑻷'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['CGJ','\u034F']]


// ᨔᨗᨔᨗᨊᨗᨊ ᨑᨘᨄ ᨈᨕᨘ ᨑᨗ ᨍᨍᨗᨕᨂᨗ ᨑᨗᨒᨗᨊᨚᨕᨙ ᨊᨄᨘᨊᨕᨗ ᨆᨊᨙᨂᨗ ᨑᨗᨕᨔᨙᨂᨙ ᨕᨒᨙᨅᨗᨑᨙ᨞ ᨊᨄᨘᨊᨕᨗ ᨑᨗᨕᨔᨙᨂᨙ ᨕᨀᨒᨙ᨞ ᨊᨄᨘᨊᨕᨗ ᨑᨗᨕᨔᨙᨂᨙ ᨕᨈᨗ ᨆᨑᨙᨊᨗ ᨊ ᨔᨗᨅᨚᨒᨙ ᨅᨚᨒᨙᨊ ᨄᨉ ᨔᨗᨄᨀᨈᨕᨘ ᨄᨉ ᨆᨔᨒᨔᨘᨑᨙ᨞ 



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Makasar text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
{"title":"Translit+", "alt":"Convert to a Latin transliteration but then apply additional phonetic transformations.", "code":"doTranscription('toLatin')", "warning":"Adds inherent vowels and applies angka, but doesn't provide the unwritten syllable final ng or glottal stop, nor the geminated consonants. The result should be checked."},
]





var show = {}  // indicates which inputAids to use
    show.shape = false
    show.hints = false
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = false
    show.kbd = "Makasar"
    show.language = "Makasar"


var inputAids = []

