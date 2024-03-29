var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Rejang WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.4"; // line height of text area
	factoryDefaults.language = 'rej' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Rejang WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'rejangPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Rejang WF" ]


var template = {}
	template.title = 'Rejang'
	template.sample = "ꤰꥈꤳꥎ ꤳꥈꥐ ꤾꥁꥉꥑ ꤸꥎꥑꤴꥉꤰ, ꤳ꥓ꤸꥈꥆꥐ ꥁꥋꤰ꥓-ꥁꥋꤰ꥓ ꤴꥎ ꤼ꥓ꤽꥊ.  ꤰꥈꤳꥎ ꤵꤱꥇꥒꤰ꥓-ꤷꥒ ꥆꤰꥎꥒ ꤶꥉꤰꥉꥑ ꤲꥉꥐ ꥆꤳꥊꥎ, ꤰꥎꥑꤵꥋ ꥆꥋ ꤰꥎꤾꥋꤰ꥓-ꤵꥎ ꤷꥎꥒꤰꥈꥆꤳ꥓-ꤷꥒ ꤴꥋ ꤲꥉꥐ ꤾꥈꤿꥎꥐ ꤾꥎꤸ꥓ ꥆꤼꥊ ꤼꥎꤶꤼꥈꥒꤰ꥓."
	template.sampleSource = ''
	template.blocklocation= 'rjng'  // block directory
	template.noteslocation = 'rjng/rej' // location of script notes
	template.vocablocation = 'rjng/rej_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'rjng'
	template.scriptcode = 'rjng'
	template.fontLocale = "rjng"
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['CGJ','\u034F']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Rejang text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},


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
    show.language = "Rejang"


var inputAids = []
