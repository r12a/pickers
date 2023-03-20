var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Lydian WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.4"; // line height of text area
	factoryDefaults.language = 'xld' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Lydian WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'lydianPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Lydian WF" ]


var template = {}
	template.title = 'Lydian'
	template.sample = "𐤠𐤨𐤯𐤦𐤫 𐤫𐤵𐤲𐤦𐤳 𐤲𐤤𐤩𐤷𐤨 𐤱𐤶𐤫𐤳𐤷𐤦𐤱𐤦𐤣 𐤱𐤠𐤨𐤪𐤷 𐤠𐤭𐤯𐤦𐤪𐤰𐤮 𐤦𐤡𐤮𐤦𐤪𐤳𐤦𐤳 𐤠𐤭𐤯𐤦𐤪𐤰𐤨 𐤨𐤰𐤩𐤰𐤪𐤳𐤦𐤳 𐤠𐤠𐤭𐤠𐤷 𐤡𐤦𐤭𐤠𐤷𐤨 𐤨𐤷𐤦𐤣𐤠𐤷 𐤨𐤬𐤱𐤰𐤷𐤨 𐤲𐤦𐤭𐤠𐤷 𐤲𐤤𐤩𐤷𐤨 𐤡𐤦𐤩𐤷 𐤥𐤹𐤡𐤠𐤲𐤶𐤫𐤯"
	template.sampleSource = ''
	template.blocklocation= ''  // block directory
	template.noteslocation = '' // location of script notes
	template.vocablocation = '' // location of term database
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'lydi'
	template.scriptcode = 'lydi'
	template.fontLocale = "lydi"
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '𐤦'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u200C'], ['NBHY','\u2011'], 
	['RLM','\u200F'], ['LRM','\u200E'], ['ALM','\u061C']]
	template.moreKeys = [['RLI','\u2067'], ['LRI','\u2066'], ['FSI','\u2068'], 
	['PDI','\u2069'], ['RLO','\u202E'], ['LRO','\u202D'], ['PDF','\u202C'], 
	['CGJ','\u034F']]





var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Lydian text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},


/*{"title":"Make<br/>vocab", "alt":"Create an entry for a vocab file.", 

"code":`_output=document.getElementById('output'); 
input=replaceSlash(getHighlightedText(_output),'|').split('|'); 
if (! hasHighlight(_output)) _output.value=''; 

term = input[0];
meaning = input[1];
ipa = input[2]? input[2] : '';
alt = input[3]? input[3] : '';
notes = input[4]? input[4] : '';

add(getVocabWithAlt(term, meaning, ipa, notes, alt));
vocab2Example(getHighlightedText(document.getElementById('output')));
_output.focus();`},*/
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
    show.language = "Lydian"


var inputAids = []

