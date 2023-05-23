var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Namdhinggo SIL WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'lif' // language to use for examples
	factoryDefaults.uifont = 'Namdhinggo SIL WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'lifPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Namdhinggo SIL WF" ]


var template = {}
	template.title = 'Limbu'
	template.sample = "ᤁᤧᤖᤧᤰ ᤕᤠᤵᤔᤡᤜᤠ᤹ ᤀᤡᤱᤎᤠᤱ ᤏᤢ ᤕᤢᤰᤖᤧ ᤏᤠ᤺ᤶᤓᤣᤀᤥ ᤛᤠᤘᤠ᤺ᤴᤏᤥᤏᤢᤀᤣ ᤆᤥ᤺ᤰᤕᤢᤶᤓᤥᤒᤠ ᤏᤢ ᤐᤧᤶᤒᤧᤶᤒᤠ ᤔᤧᤘᤠ᤹ ॥"
	template.sampleSource = ''
	template.blocklocation= 'limb'  // block directory
	template.noteslocation = 'limb/lif' // location of script notes
	template.vocablocation = 'limb/lif_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'limb-lif'
	template.scriptcode = 'Limb'
	template.fontLocale = 'limb'
	template.hints = true
	template.bicameral = false

	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['CGJ','\u034F']]

// ᤁᤧᤖᤧᤰ ᤕᤠᤵᤔᤡᤜᤠ᤹ ᤀᤡᤱᤎᤠᤱ ᤏᤢ ᤕᤢᤰᤖᤧ ᤏᤠ᤺ᤶᤓᤣᤀᤥ ᤛᤠᤘᤠ᤺ᤴᤏᤥᤏᤢᤀᤣ ᤆᤥ᤺ᤰᤕᤢᤶᤓᤥᤒᤠ ᤏᤢ ᤐᤧᤶᤒᤧᤶᤒᤠ ᤔᤧᤘᤠ᤹ ॥ ᤂᤢᤏᤡ᤹ ᤏᤡᤛᤡ᤺ᤰᤐᤠ ᤏᤢ ᤂᤧᤛᤡᤱ ᤔᤧᤍᤠᤖᤢᤀᤠᤱ ᤔᤧᤍᤩᤧᤀᤠᤱ ᤔᤧᤘᤠ᤹ ᤜᤧᤰᤁᤩᤠᤱ  ᤌᤡᤰᤘᤣ᤹ᤀᤥ ᤑᤢ᤹ᤏᤢᤛᤠ᤹ ᤀᤡᤛᤡᤰ ᤀᤥᤃᤠᤵ ᤆᤥ᤺ᤰᤔᤠᤛᤡ ᤐᤥ᤺ᤱ ॥

var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Limbu text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
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
    show.kbd = "Mukdum"
    show.language = "Limbu"


var inputAids = []

