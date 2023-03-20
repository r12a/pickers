var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Tai Le WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'tdd' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Tai Le WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'tailePicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Tai Le WF" ]


var template = {}
	template.title = 'Tai Le character app'
	template.sample = "ᥘᥬ̈ᥔᥩᥛ̇ᥝᥢ̈ᥘᥭ̇，ᥐᥩᥙᥘᥭ̀ᥑᥨᥛ̌ᥑᥦᥢ́ᥖᥫᥒ̈ᥐᥣ，ᥝᥣᥐᥖᥣᥙ̌ᥐᥨᥢ̈ᥑᥥᥢ́ᥛᥣ̈ᥔᥥ́，ᥛᥣᥢ̀ᥘᥣ̈ᥟᥢᥐᥬ̀ᥓᥛᥑᥩᥙ̌ᥞᥤᥛ̈ᥙᥥ̀ᥢᥣᥢ̇ᥘᥢ̇，ᥛᥤ̈ᥐᥣᥭ̈ᥚᥣᥒ̇ᥓᥤᥢᥚᥧᥒ́ᥘᥫᥒᥑᥝ̀ᥛᥣᥢ̇ᥛᥣ̈，ᥟᥣᥛᥥᥝ̈ᥖᥭ̈ᥖᥒ̈ᥘᥣᥭ́ᥟᥩᥢᥐᥢᥐᥣ̌ᥓᥩᥭᥗᥦᥛ́．"
	template.sampleSource = 'http://www.seasite.niu.edu/tai/TaiDehong/story1/gif&jpg/p3.jpg'
	template.blocklocation= 'tale'  // block directory
	template.noteslocation = 'tale/tdd' // location of script notes
	template.vocablocation = 'tale/tdd_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'tale'
	template.scriptcode = 'Tale'
	template.fontLocale = 'tale'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003'], ['IDSP','\u3000']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Tai Le text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
{"title":"Switch tones", "alt":"Convert tone letters to marks, and vice versa.", "code":"switchTones()"},
]





var show = {}  // indicates which inputAids to use
    show.shape = false
    show.hints = false
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = ''
    show.kbd = "Tai Le"
    show.language = "Tai Le"


var inputAids = []

