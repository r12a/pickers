var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Cherokee WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "28";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'chr' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Cherokee WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "20";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "" // type of hint to show alongside characters in the grids


var thisPicker = 'cherokeePicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Cherokee WF" ]


var template = {}
	template.title = 'Cherokee character app'
	template.sample = "2. ᏂᎦᏛ ᎠᏂᏴᏫ ᎤᏂᎲ ᎾᏍᎩ ᏚᏳᎪᏛ ᎤᏂᎩᏍᏗ ᏂᎦᎥᏉ ᎠᏰᎵ ᏂᎬᎾᏛᎢ, ᎤᏠᏯᏍᏗ ᎤᏩᏌ ᎤᏤᎵ ᎡᎥᎢ, ᎠᎴ ᎢᎦᎷᎯᏍᏗ ᎤᎾᎢ ᎤᏩᏌ ᎤᏤᎵ ᎠᏰᎵ ᏂᎬᎾᏛᎢ."
	template.sampleSource = ''
	template.blocklocation= 'cher'  // block directory
	template.noteslocation = 'cher/chr' // location of script notes
	template.vocablocation = 'cher/chr_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'cher'
	template.scriptcode = 'Cher'
	template.fontLocale = 'cher'
	template.hints = false
	template.bicameral = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Cherokee text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
{"title":"Mont-And to IPA", "alt":"Convert a Montgomery-Anderson transcription to an IPA transcription.", "code":"doTranscription('MAtoIPA')"},
]







var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = false
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'LOC'
    show.kbd = "Cherokee"
    show.language = "Cherokee"


var inputAids = []





