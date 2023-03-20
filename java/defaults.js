var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Javanese WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "2.4"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'jv' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Javanese WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'javanesePicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Javanese WF", "Tuladha Jejeg WF" ]

 
var template = {}
	template.title = 'Javanese character app'
	template.sample = "ꦧꦧ꧀꧇꧑꧇​꧋ꦱ​ꦧꦼ​ꦤ꧀ꦲꦸ​ꦮꦺꦴꦁ​ꦏ​ꦭ​ꦲꦶ​ꦫ​ꦏꦺ​ꦏ​ꦤ꧀ꦛꦶ​ꦩꦂ​ꦢꦶ​ꦏ​ꦭ​ꦤ꧀ꦢꦂ​ꦧꦺ​ꦩꦂ​ꦠ​ꦧ​ꦠ꧀ꦭ​ꦤ꧀ꦲ​ꦏ꧀ꦲ​ꦏ꧀ꦏꦁ​ꦥ​ꦝ꧉​"
	template.sampleSource = "https://unicode.org/udhr/d/udhr_jav_java.html"
	template.blocklocation= 'java'  // block directory
	template.noteslocation = 'java/jv' // location of script notes
	template.vocablocation = 'java/jv_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'java'
	template.scriptcode = 'Java'
	template.fontLocale = 'java'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '꧀'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]
	
	// this indicates which items are to be described in the help
	// options include: intro,shape,hinting,typeAssist,latin,reverse & keyboard
	template.inputaids1 = 'intro,shape,typeAssist,latin,reverse,'
	template.inputaids2 = 'keyboard'


// ꦏꦧꦺꦃꦥꦶꦤꦫꦶꦔꦤ꧀ꦲꦏꦭ꧀ꦭꦤ꧀ꦏꦭ꧀ꦧꦸꦱꦂꦠꦏꦲꦗꦧ꧀ꦥꦱꦿꦮꦸꦁꦔꦤ꧀ꦲꦁꦒꦺꦴꦤꦺꦩꦼꦩꦶꦠꦿꦤ꧀ꦱꦶꦗꦶꦭꦤ꧀ꦱꦶꦗꦶꦤꦺꦏꦤ꧀ꦛꦶꦗꦶꦮꦺꦴꦱꦸꦩꦢꦸꦭꦸꦂ


var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Javanese text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
//{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to XXXX text.", "code":"doTranscription('revTransliterate')", "warning":"The Latin text must follow the transliteration scheme developed for this app."},
]






var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = false
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'Latin'
    show.kbd = "Javanese"
    show.language = "Javanese"


var inputAids = []


