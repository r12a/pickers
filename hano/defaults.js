var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Hanunoo WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'hnn' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Hanunoo WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u00A0";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'hanunooPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Hanunoo WF" ]


var template = {}
	template.title = 'Hanunoo character app'
	template.sample = "ᜣᜥ᜴ ᜫᜨᜳᜣ᜴ ᜰᜲ ᜪᜲᜮᜯᜨ᜴ ᜵ ᜨᜤ᜴ᜰᜲᜮᜳᜥ᜴ ᜰ ᜩᜰᜳᜠᜰᜨ᜴ ᜵ ᜫᜤ᜴ᜧᜮᜨ᜴ᜥᜲᜨ᜴ ᜬᜲ ᜢᜮᜨ᜴ ᜶"
	template.sampleSource = ''
	template.blocklocation= 'hano'  // block directory
	template.noteslocation = 'hano/hnn' // location of script notes
	template.vocablocation = 'hano/hnn_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'hano'
	template.scriptcode = 'Hano'
	template.fontLocale = 'hano'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '᜴'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['CGJ','\u034F'], ['PAMUDPOD','\u1734']]

// ᨔᨗᨔᨗᨊᨗᨊ ᨑᨘᨄ ᨈᨕᨘ ᨑᨗ ᨍᨍᨗᨕᨂᨗ ᨑᨗᨒᨗᨊᨚᨕᨙ ᨊᨄᨘᨊᨕᨗ ᨆᨊᨙᨂᨗ ᨑᨗᨕᨔᨙᨂᨙ ᨕᨒᨙᨅᨗᨑᨙ᨞ ᨊᨄᨘᨊᨕᨗ ᨑᨗᨕᨔᨙᨂᨙ ᨕᨀᨒᨙ᨞ ᨊᨄᨘᨊᨕᨗ ᨑᨗᨕᨔᨙᨂᨙ ᨕᨈᨗ ᨆᨑᨙᨊᨗ ᨊ ᨔᨗᨅᨚᨒᨙ ᨅᨚᨒᨙᨊ ᨄᨉ ᨔᨗᨄᨀᨈᨕᨘ ᨄᨉ ᨆᨔᨒᨔᨘᨑᨙ᨞ 



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Hanunoo text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
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
    show.language = "Hanunoo"


var inputAids = []


