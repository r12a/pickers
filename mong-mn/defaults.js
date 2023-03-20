var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Mongolian WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "28";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "400"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'mn' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Mongolian WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'mongolianPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Mongolian WF" ]


var template = {}
	template.title = 'Mongolian character app'
	template.sample = "ᠣᠩᠭᠤᠯ ᠦᠰᠦᠭ ᠦᠨ ᠵᠥᠪ ᠪᠢᠴᠢᠯᠭᠡ ᠶᠢᠨ ᠳᠦᠷᠢᠮ ᠳᠦ᠂ ᠦᠭᠡ ᠶᠢᠨ ᠦᠨᠳᠦᠰᠦᠨ ᠳᠦ ᠳᠠᠭᠠᠪᠤᠷᠢ ᠵᠠᠯᠭᠠᠬᠤ ᠳᠤ ᠵᠠᠷᠢᠮ ᠦᠭᠡ ᠶᠢᠨ ᠡᠴᠦᠰ ᠦᠨ ᠠᠪᠢᠶ᠎ᠠ ᠨᠢ ᠭᠡᠭᠡᠭᠳᠡᠳᠡᠭ᠂ ᠡᠭᠦᠨ ᠢ ᠠᠪᠢᠶ᠎ᠠ ᠭᠡᠭᠡᠭᠳᠡᠬᠦ ᠦᠵᠡᠭᠳᠡᠯ ᠭᠡᠨ᠎ᠡ᠃ "
	template.sampleSource = ''
	template.blocklocation= 'mong'  // block directory
	template.noteslocation = 'mong/mn' // location of script notes
	template.vocablocation = 'mong/mn_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'mong-mn'
	template.scriptcode = 'Mong'
	template.fontLocale = 'mong'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003'], ['IDSP','\u3000']]
	template.defaultInvisible = '\u202F'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['MVS','\u180E'], ['FVS1','\u180B'], ['FVS2','\u180C'], ['FVS3','\u180D'], 
	['FVS4','\u180F']]
	template.moreKeys = [['FVS1','\u180B'], ['FVS2','\u180C'], ['FVS3','\u180D'], 
	['FVS4','\u180F']]




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Mongolian text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [

{"title":"Mongolian to JSM", "alt":"Convert Mongolian text to a Joint Sino-Mongolian transcription.", "code":"doTranscription('toJSM')"},

{"title":"Toggle direction", "alt":"Switch direction of input area between vertical &amp; horizontal.", "code":"toggleDirectionality()"},

//{"title":"Cyrillic<br/>to Mongolian", "alt":"Convert Mongolian text in Cyrillic to Traditional Mongolian.", "code":"doTranscription('cyrlToMong')"},
]




var show = {}  // indicates which inputAids to use
    show.shape = false
    show.hints = false
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'LOC'
    show.kbd = "Mongolian"
    show.language = "Mongolian"


var inputAids = []
