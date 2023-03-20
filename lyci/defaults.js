var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Lycian WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.4"; // line height of text area
	factoryDefaults.language = 'xlc' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Lycian WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'lycianPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Lycian WF" ]


var template = {}
	template.title = 'Lycian'
	template.sample = "𐊁𐊂𐊚𐊑𐊏𐊚⁚𐊓𐊕𐊑𐊏𐊀𐊇𐊒⁚𐊎𐊚𐊏 𐊁𐊓𐊕𐊑𐊏𐊀𐊇𐊀𐊗𐊚⁚𐊛𐊀𐊏𐊀𐊅𐊀𐊈𐊀⁚𐊛𐊕𐊓𐊓𐊆𐊍𐊀𐊅𐊆⁚𐊁𐊛𐊂𐊆⁚𐊖𐊁𐊗𐊆𐊅𐊁𐊆𐊎𐊁"
	template.sampleSource = ''
	template.blocklocation= ''  // block directory
	template.noteslocation = '' // location of script notes
	template.vocablocation = '' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'lyci'
	template.scriptcode = 'lyci'
	template.fontLocale = "lyci"
	template.hints = true
		
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '⁚'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['CGJ','\u034F']]




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Lycian text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},


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
    show.language = "Lycian"


var inputAids = []



