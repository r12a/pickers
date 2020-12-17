var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Canadian Aboriginal WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'crk' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Canadian Aboriginal WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'crkPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var webFonts = [ "Noto Sans Canadian Aboriginal WF" ]


var template = {}
	template.title = 'Plains Cree character app'
	template.sample = "ᐁᑯᓯ ᒫᑲ ᐁᑎᑵ ᐊᓂᒪ ᑳ ᐃᑘᐟ ᐊᐘ ᐅᐢᑭᓃᑭᐤ, ᒥᔼᓯᐣ, ᑮᐢᐱᐣ ᑕ ᑲᑵ ᓂᓯᑐᐦᑕᒣᐠ ᐁᑿ ᒦᓇ ᑕ ᑲᑵ ᒥᑐᓂ ᐑᒋᐦᐃᓱᔦᐠ ᐊᓂᒪ, ᐆᒪ ᓀᐦᐃᔭᐍᐏᐣ ᑭᐢᐱᐣ ᑭᓅᐦᑌ ᑭᐢᑫᔨᐦᑌᓈᐚᐤ᙮"
	template.blocklocation= '/scripts/cans/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'cans-crk'
	template.scriptcode = 'Cans'
	template.fontLocale = 'cans'
	template.hints = true



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Cree text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},


{"title":"Make<br/>vocab", "alt":"Create an entry for a vocab file.", 

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
_output.focus();`},

]



var pulldown = [
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Cree text.", "code":"doTranscription('revTransliterate')", "warning":"The Latin text must follow the transliteration scheme developed for this app."},

{"title":"Vocab to<br>Markup", "alt":"Convert a vocab entry to example markup.", "code":"vocab2Markup(getHighlightedText(document.getElementById('output')))"},

{"title":"Cree<br/>to IPA", "alt":"Convert Inuktitut text to an <em>approximate</em> IPA transcription.", "code":"doTranscription('toIPA')", "warning":"This only produces an <em>approximation</em> to an IPA transcription. Use it as a base and refine it by hand." },

{"title":"Cree<br>to Latin", "alt":"Convert Cree script text to the Latin orthography.", "code":"doTranscription('transcription')", "warning":"The result of this conversion needs to be checked for accuracy."},

{"title":"Find vocab", "alt":"Search for examples containing the highlighted text", "code":"openVocabWindow('/scripts/cans/crk_vocab')"},
]




var inputAids = [
{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Tifinagh from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},
]




// this indicates which items are to be described in the help
// options include: intro,shape,hinting,typeAssist,latin,reverse & keyboard
var inputAidsHelp = 'showIntro,'
for (let i=0;i<inputAids.length;i++) {
	if (inputAids[i].dataVar) inputAidsHelp += ','+inputAids[i].dataVar
	}

