var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Kayah Li WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.4"; // line height of text area
	factoryDefaults.language = 'kyu' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Kayah Li WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'kayahliPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Kayah Li WF" ]


var template = {}
	template.title = 'Kayah Li'
	template.sample = "ꤙꤤ ꤋꤢꤨ꤭ꤡꤛꤥꤔꤢ ꤡꤛꤣ ꤟꤢꤩꤏꤥ꤬ꤘꤣ꤬ꤑꤢ꤭ ꤕꤢꤩ ꤔꤤꤔꤢ꤬ꤠꤢꤩ꤬ ꤠꤟꤤ꤭ꤢꤨ ꤒꤢ꤬ꤟꤢꤩ꤬ ꤔꤢ ꤡꤢꤪꤗꤢꤚꤛꤢ꤬ ꤢ꤬ꤒꤟꤢꤧ꤬ꤟꤢꤩꤙꤢꤧ꤬ ꤢ꤬ꤋꤢꤧ꤭ ꤔꤌꤣ꤬ ꤢꤧ꤬ꤞꤤ꤭ ꤕꤟꤛꤢꤐꤟꤢꤧꤜꤟꤛꤢ꤬ꤊꤟꤢ꤬ ꤢꤧ꤬ꤞꤤ꤭ꤞꤢꤧ ꤚꤢꤪ ꤢ꤬ ꤔꤟꤤꤘꤢ꤭ ꤜꤟꤢꤪ꤭ꤋꤛꤢꤩ꤭ꤞꤛꤢ ꤡꤢꤪꤗꤢ꤬ꤚꤛꤢ꤬ꤘꤢꤨ꤬ ꤍꤟꤥ꤯"
	template.sampleSource = ''
	template.blocklocation= 'kali'  // block directory
	template.noteslocation = 'kali/kyu' // location of script notes
	template.vocablocation = 'kali/kyu_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'kali'
	template.scriptcode = 'Kali'
	template.fontLocale = "kali"
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Kayah Li text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]





var pulldown = [

//{"title":"Translit+", "alt":"Convert to a Latin transliteration but then apply additional phonetic transformations.", "code":"doTranscription('translitPlus')", "warning":"Adds inherent vowels and palatalisation. The result should be checked."},

//{"title":"XXXX to Latin", "alt":"Convert XXXX text to a Latin transcription.", "code":"doTranscription('transcription')"},

//{"title":"XXXX to Latin", "alt":"Convert XXXX script text to the Latin orthography.", "code":"doTranscription('transcription')", "warning":"The result of this conversion needs to be checked for accuracy."},

//{"title":"XXXX to Radice", "alt":"Convert XXXX text to the Latin transcription used by Radice.", "code":"doTranscription('transcription')"},

//{"title":"XXXX<br/>to ISO", "alt":"Convert XXXX text to an ISO 15919 Latin transcription.", "code":"doTranscription('toISO15919')"},

//{"title":"XXXX<br/>to IPA", "alt":"Convert XXX text to an <em>approximate</em> IPA transcription.", "code":"doTranscription('toIPA')", "warning":"This only produces an <em>approximation</em> to an IPA transcription. Use it as a base and refine it by hand." },

//{"title":"XXXX<br/>to IPA", "alt":"Convert XXX text to an <em>approximate</em> IPA transcription.", "code":"doTranscription('toISO15919')", "warning":"Separate syllables with spaces before use! Full transcription requires fully vowelled text! This only produces an APPROXIMATION to an IPA transcription. Use it as a base and refine it by hand." },

//{"title":"ISO to<br/>XXXX", "alt":"Convert an ISO 15919 transcription to XXXX text.", "code":"doTranscription('toDeva')"},
]


//, "warning":"The results should be checked for accuracy."








var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = true
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'Latin'
    show.kbd = "Kyebogyi"
    show.language = "Kayah Li"


var inputAids = []

