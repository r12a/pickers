var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Aramaic WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "26";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.4"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'arc' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Aramaic WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'armiPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Aramaic WF" ]


var template = {}
	template.title = 'Imperial Aramaic'
	template.sample = "𐡁 𐡛𐡚𐡘 𐡋𐡀𐡐 𐡄𐡅 𐡉𐡅𐡌 𐡛𐡚𐡚𐡚 𐡋𐡐𐡇𐡍𐡎 𐡔𐡍𐡕 𐡜𐡚𐡙 𐡀𐡓𐡕𐡇𐡔𐡎𐡔 𐡌𐡋𐡊𐡀 𐡀𐡌𐡓 𐡐𐡉𐡉𐡏 𐡁𐡓 𐡐𐡇𐡉 𐡀𐡓𐡃𐡉𐡊𐡋 𐡋𐡎𐡅𐡍 𐡁𐡉𐡓𐡕𐡀 𐡋𐡌𐡁𐡈𐡇𐡉𐡄 𐡁𐡓𐡕 𐡌𐡇𐡎𐡉𐡄 𐡓𐡁 𐡉𐡃𐡍𐡉𐡀 𐡀𐡓𐡌𐡉𐡀 𐡆𐡉 𐡎𐡅𐡍 𐡋𐡃𐡂𐡋 𐡅𐡓𐡉𐡆𐡕 𐡏𐡋 𐡃𐡉𐡍𐡀 𐡆𐡉 𐡏𐡁𐡃𐡍 𐡍𐡐𐡃𐡕 𐡀𐡋 𐡊𐡎𐡐"
	template.blocklocation= 'armi'  // blocklocation to use for examples
	template.noteslocation = '' // location of script notes relevant to this app
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'armi'
	template.scriptcode = 'Armi'
	template.fontLocale = "armi"
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '𐡀'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u200C'], ['NBHY','\u2011'], 
	['RLM','\u200F'], ['LRM','\u200E'], ['ALM','\u061C']]
	template.moreKeys = [['RLI','\u2067'], ['LRI','\u2066'], ['FSI','\u2068'], 
	['PDI','\u2069'], ['RLO','\u202E'], ['LRO','\u202D'], ['PDF','\u202C'], 
	['CGJ','\u034F']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Aramaic text to a latin transliteration.", "code":"doTranscription('transliterate')"},


/*{"title":"Make<br/>vocab", "alt":"Expand a line to create an entry for a vocab file.", 

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
    show.language = "Aramaic"


var inputAids = []

