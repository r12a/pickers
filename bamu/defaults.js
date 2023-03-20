var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Bamum' // text area font name (a single font, no quotes)
	factoryDefaults.size = "35";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'bax' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Bamum'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'bamumPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Bamum WF" ]


var template = {}
	template.title = 'Bamum character app'
	template.sample = "ꛦ-ꚳꛊꚤ ꚳꚣꚧ꛱ꛦꚧ꛱ ꚳ꛰ꚴꚢ ꛲ꛗ   ꛧ-ꚳꛊꚤ ꛄꚧ꛱ ꚳ꛰ꛤ꛰ ꚩꚤ ꛲ꛗ   ꛨ-ꛅꚧ꛱ ꛣꚠ ꚳꛊꚤꚳ ꛎꛦ ꛛꚧ꛱ ꛲ꛗ   ꛩ-꛲ꚣꛤ ꛅꚧ꛱ ꛇꛛꚧ꛱ ꛤ꛰ ꛨ ꚣꛤ ꛛꚧ꛱ ꛦ꛰ꚳ꛰   ꛪ-ꛕꚠꛤ ꛅꚧ ꛈ ꛅꚧ꛱ ꛖ ꚳ꛰ꛤ꛰ ꛲ꚱꛅ꛱"
	template.sampleSource = ''
	template.blocklocation= 'bamu'  // block directory
	template.noteslocation = 'bamu/bax' // location of script notes
	template.vocablocation = '' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'bamu'
	template.scriptcode = 'Bamu'
	template.fontLocale = 'bamu'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '꛰'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Bamum text to a one-to-one Latin transliteration.", 
"warning":"A transcription is supplied automatically, but needs to be checked.", 

"code":"console.log('calling');doTranscription('transliterate')"},
]



var pulldown = [
{"title":"Bamum to Latin", "alt":"Convert Bamum script text to the Latin orthography.", "code":"doTranscription('toLatin')", "warning":"The result of this conversion needs to be checked for accuracy."},
]






var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = false
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'Latin'
    show.kbd = ""
    show.language = "Bamoun"


var inputAids = []



