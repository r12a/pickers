var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Mandaic WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'mid' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Mandaic WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u00A0";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'mandaicPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Mandaic WF" ]


var template = {}
	template.title = 'Mandaic character app'
	template.sample = "ࡊࡋ ࡁࡓ ࡀࡍࡀࡔࡀ ࡌࡉࡕࡋࡉࡓ ࡔࡀࡅࡉࡀ ࡁࡏࡒࡀࡓࡀ ࡅࡀࡂࡓࡉࡀ࡞"
	template.sampleSource = ''
	template.blocklocation= 'mand'  // block directory
	template.noteslocation = 'mand/mid' // location of script notes
	template.vocablocation = 'mand/mid_vocab' // location of term database
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'mand'
	template.scriptcode = 'Mand'
	template.fontLocale = 'mand'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003'], ['IDSP','\u3000'] ]
	template.defaultInvisible = 'ࡏ'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u200C'], ['NBHY','\u2011'], 
	['RLM','\u200F'], ['LRM','\u200E'], ['ALM','\u061C']]
	template.moreKeys = [['VIRAMA','\u0E3A'], ['RLI','\u2067'], ['LRI','\u2066'], ['FSI','\u2068'], 
	['PDI','\u2069'], ['RLO','\u202E'], ['LRO','\u202D'], ['PDF','\u202C'], 
	['CGJ','\u034F']]


// ᨔᨗᨔᨗᨊᨗᨊ ᨑᨘᨄ ᨈᨕᨘ ᨑᨗ ᨍᨍᨗᨕᨂᨗ ᨑᨗᨒᨗᨊᨚᨕᨙ ᨊᨄᨘᨊᨕᨗ ᨆᨊᨙᨂᨗ ᨑᨗᨕᨔᨙᨂᨙ ᨕᨒᨙᨅᨗᨑᨙ᨞ ᨊᨄᨘᨊᨕᨗ ᨑᨗᨕᨔᨙᨂᨙ ᨕᨀᨒᨙ᨞ ᨊᨄᨘᨊᨕᨗ ᨑᨗᨕᨔᨙᨂᨙ ᨕᨈᨗ ᨆᨑᨙᨊᨗ ᨊ ᨔᨗᨅᨚᨒᨙ ᨅᨚᨒᨙᨊ ᨄᨉ ᨔᨗᨄᨀᨈᨕᨘ ᨄᨉ ᨆᨔᨒᨔᨘᨑᨙ᨞ 



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Mandaic text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [

{"title":"Translit+", "alt":"Convert to a Latin transliteration but then apply additional phonetic transformations.", "code":"doTranscription('transcription')", "warning":"Simplifies extended consonants that use the affrication mark, uses the  vocalisation mark for more accurate vowel transcription, doubles transcription text where a gemination marker occurs, etc.  The result should be checked."},

{"title":"Mandaic to WWS", "alt":"Convert Mandaic text to a Latin transcription.", "code":"doTranscription('toLatin')", "warning":"Explores vowel ambiguities. Transcription base on chapter in the book, The Worlds Writing Systems."},
]




var show = {}  // indicates which inputAids to use
    show.shape = false
    show.hints = false
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'Latin'
    show.kbd = "Mandaic"
    show.language = "Mandaic"


var inputAids = []

