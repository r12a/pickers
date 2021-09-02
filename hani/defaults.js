var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'PingFang SC' // text area font name (a single font, no quotes)
	factoryDefaults.size = "28";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.4"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'zh' // language to use for examples
	factoryDefaults.uifont = 'Hei'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'chinesePicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "" ]


var template = {}
	template.title = 'Chinese character app'
	template.sample = "第一条　人人生而自由，在尊严和权利上一律平等。他们赋有理性和良心，并应以兄弟关系的精神相对待。"
	template.blocklocation= '/scripts/punctuation/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'hani'
	template.scriptcode = 'Hani'
	template.fontLocale = 'hani'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003'], ['IDSP','\u3000']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]



var controls = [
{"title":"Lookup<br>Han", "alt":"Find Han characters from pinyin.", "code":"doTranscription('pinyinToHan')"},
]



var pulldown = [
{"title":"Toggle<br/>direction", "alt":"Switch direction of input area between vertical &amp; horizontal.", "code":"toggleDirectionality()"},

{"title":"English<br>to Han", "alt":"Find Han characters from english prompts.", "code":"doTranscription('englishToHan')"},

{"title":"Make<br>ruby", "alt":"Make HTML ruby markup from the highlighted text.", "code":"makeRuby(defaults.language,template.direction)"},
]



var inputAids = [
{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Chinese punctuation, etc. from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},
]




// this indicates which items are to be described in the help
// options include: intro,shape,hinting,typeAssist,latin,reverse & keyboard
var inputAidsHelp = 'showIntro,'
for (let i=0;i<inputAids.length;i++) {
	if (inputAids[i].dataVar) inputAidsHelp += ','+inputAids[i].dataVar
	}
