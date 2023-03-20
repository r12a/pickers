var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Canadian Aboriginal WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'ike' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Canadian Aboriginal WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "" // type of hint to show alongside characters in the grids


var thisPicker = 'ike'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
  
var webFonts = [ "Noto Sans Canadian Aboriginal WF" ]


var template = {}
	template.title = 'Eastern Canadian Inuktitut character app'
	template.sample = "ᐃᓚᖓ 1. ᐃᓅᔪᓕᒫᑦ ᐊᓂᖅᑎᕆᔪᓕᒫᑦ ᐃᓅᓚᐅᕐᒪᑕ ᐃᓱᒪᕐᓱᕐᖢᑎᒃ ᐊᒻᒪᓗ ᐊᔾᔨᐅᖃᑎᒌᒃᖢᑎᒃ ᓂᕐᓱᐊᖑᓂᒃᑯᑦ ᐊᒻᒪᓗ ᐱᔪᓐᓇᐃᑎᑎᒍᑦ. ᐃᓱᖃᖅᑐᖁᑎᖃᕐᑎᑕᐅᕙᓕᕐᐳᑦ ᐱᔾᔪᑎᖃᕐᓂᒃᑯᑦ ᖃᑕᙳᑎᒌᑦᑎᐊᕆᐊᖃᕐᓂᒃᑯᓪᓗ."
	template.sampleSource = ''
	template.blocklocation= 'cans'  // block directory
	template.noteslocation = 'cans/ike' // location of script notes
	template.vocablocation = 'cans/ike_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'cans-ike'
	template.scriptcode = 'Cans'
	template.fontLocale = 'cans'
	template.hints = false
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Inuktitut text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},


/*{"title":"Make<br/>vocab", "alt":"Create an entry for a vocab file.", 

"code":`_output=document.getElementById('output'); 
input=replaceSlash(getHighlightedText(_output),'|').split('|'); 
if (! hasHighlight(_output)) _output.value=''; 

term = input[0];
meaning = input[1];
ipa = input[2]? input[2] : transcribetoIPA(input[0]);
alt = input[3]? input[3] : '';
latin = transcribetoLatin(input[0]);
if (ipa !== latin) alt = '(' + latin + ')';
notes = input[4]? input[4] : '';

add(getVocabWithAlt(term, meaning, ipa, notes, alt));
vocab2Example(getHighlightedText(document.getElementById('output')));
_output.focus();`},*/

]



var pulldown = [
{"title":"Inuktitut to IPA", "alt":"Convert Inuktitut text to an <em>approximate</em> IPA transcription.", "code":"doTranscription('toIPA')", "warning":"This only produces an <em>approximation</em> to an IPA transcription. Use it as a base and refine it by hand." },

{"title":"Inuktitut to Latin", "alt":"Convert Inuktitut script text to the Latin orthography.", "code":"doTranscription('transcription')", "warning":"The result of this conversion needs to be checked for accuracy."},
]






var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = false
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'Latin'
    show.kbd = ""
    show.language = "Inuktitut"


var inputAids = []



