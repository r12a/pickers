var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Nokyung WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'khb' // language to use for examples
	factoryDefaults.uifont = 'Nokyung WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "26";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'newtailuePicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Nokyung WF" ]


var template = {}
	template.title = 'New Tai Lü character app'
	template.sample = "ᦝᧂᦑᦸᦰᦵᦑᦲᧈᦓᦲᦰᦗᦻᦗᦲᧈᦈᧅᦶᦐᦏᦲᧈᦏᦾᧉᦟᧁᧈᦺᦞᧉᦺᦃ ᦂᦱᧇᦵᦂᧂᦆᧄᦂᦸᧃᧈᦵᦓᦲ，ᦅᧄᦙᦲᦺᦞᧉᦈᧅᦺᦃᦉᦱᧃᦍᦸᦍᦹᧃᧈ"
	template.sampleSource = ''
	template.blocklocation= 'talu'  // block directory
	template.noteslocation = 'talu/khb' // location of script notes
	template.vocablocation = 'talu/khb_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'talu'
	template.scriptcode = 'Talu'
	template.fontLocale = 'talu'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003'], ['IDSP','\u3000']]
	template.defaultInvisible = 'ᦰ'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Lü text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]




var pulldown = [
{"title":"Translit+", "alt":"Convert to a Latin transliteration but then apply additional phonetic transformations.", "code":"doTranscription('transcription')", "warning":"Adds inherent vowels and spaces, and reorder prescript vowels, etc. The result should be checked."},

{"title":"Add spaces", "alt":"Add spaces between syllables.", "code":"doTranscription('addSpaces')"},
]




var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = true
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'Latin'
    show.kbd = "Lü"
    show.language = "Lü"


var inputAids = []

