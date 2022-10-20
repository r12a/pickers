var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Miao WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, px (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.8"; // line height of text area
	factoryDefaults.language = 'hmd' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Miao WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "32";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "" // type of hint to show alongside characters in the grids


var thisPicker = 'miaoallPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Miao WF" ]

 
var template = {}
	template.title = 'All Miao (Pollard)'
	template.sample = "𖼐𖽪𖾐 𖼞𖽪 𖼷𖽷 𖽐𖼊𖽪𖾏 𖼷𖽷 𖼊𖽡 𖽐𖼞𖽻𖾏. 𖼽𖽘 𖼮𖽷𖾑 𖼨𖽑𖽪𖾐. 𖽐𖼊𖽪𖾏 𖼎𖽻 𖼡𖽑𖽔𖾑 𖼀𖽱 𖼎𖽻, 𖼡𖽻𖾐 𖽐𖼊𖽪𖾏 𖼀𖽡𖾐 𖼳𖽔𖾐 𖼡𖽔𖾑 𖼳𖽷𖾐 𖼷𖽷 𖼮𖽡. 𖼡𖽻𖾐 𖽐𖼊𖽪𖾏 𖼀𖽡𖾐 𖼳𖽔𖾐 𖼞𖽪 𖼖𖽡𖽝𖾐 𖽐𖼚𖽻 𖼳𖽷𖾐 𖼎𖽑𖽪𖾐 𖼞𖽡𖾐 𖼄𖽱𖾐 𖼽𖽠 𖼮𖽡𖽙𖾏 𖼚𖽘𖾐 𖼐𖽑𖽪𖾐 𖼷𖽷 𖼮𖽡. 𖼊𖽡𖾐 𖼎𖽻 𖼡𖽑𖽔𖾑 𖼀𖽱 𖼎𖽻, 𖽐𖼚𖽡𖽝𖾏 𖼊𖽡𖾐 𖼊𖽜𖾐 𖼐𖽜𖾐 𖼡𖽔𖾑 𖼳𖽷𖾐 𖼷𖽷 𖼮𖽡."
	template.sampleSource = ''
	template.blocklocation= ''  // block directory
	template.noteslocation = '' // location of script notes
	template.vocablocation = '' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'miao-all'
	template.scriptcode = 'Plrd'
	template.fontLocale = 'plrd'
	template.hints = false
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '𖽐'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['CGJ','\u034F'], ['RIGHT','\u16F8F'], ['TOP RIGHT','\u16F90'], ['ABOVE','\u16F91'], ['BELOW','\u16F92']]



var inputAids = [
]


var pulldown = [
]


var controls = [
]





// this indicates which items are to be described in the help
// options include: intro,shape,hinting,typeAssist,latin,reverse & keyboard
var inputAidsHelp = ''
