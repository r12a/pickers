globals.showLOCTrans = ''
globals.showTransliteration = ''
globals.showIPATrans = ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false

function localInitialise () {

	}


var _h = {
"628": ["62A", "62B", "67B", "751", "67E"],
"630": ["62F"],
"631": ["632"],
"632": ["631"],
"633": ["634"],
"634": ["633"],
"635": ["648", "636"],
"636": ["635", "648"],
"637": ["69F", "638"],
"638": ["637", "69F"],
"639": ["63A", "62C", "62D"],
"641": ["648", "8BB"],
"642": ["64F648", "64F648", "64F648", "64F648627652", "648", "8BC"],
"643": ["6A9", "763"],
"644": ["8BD", "646",  "625650", "64E627", "62364E"],
"645": ["648", "647"],
"646": ["644", "8BD"],
"647": ["645", "648"],
"648": ["8BB", "641",  "8BC", "642", "64F648", "64F648627652", "636", "635", "647"],
"751": ["67E", "628", "62A", "62B", "67B"],
"763": ["643", "6A9"],
"625650": ["64E627", "62364E", "64F648627652", "644"],
"650649": ["649650655", "67065C649", "64967065C", "6CC", "6D1", "63F"],
"649650655": ["67065C649", "64967065C", "6CC", "6D1", "63F", "650649"],
"62A": ["62B", "67B", "751", "67E", "628"],
"62B": ["67B", "751", "67E", "628", "62A"],
"67B": ["751", "67E", "628", "62A", "62B"],
"67E": ["628", "62A", "62B", "67B", "751"],
"62F": ["630"],
"6A9": ["763", "643"],
"69F": ["638", "637"],
"63A": ["62C", "62D", "639"],
"62C": ["62D", "639", "63A"],
"62D": ["639", "63A", "62C"],
"8BB": ["641", "648"],
"64F648": ["64F648", "64F648627652", "648", "8BC", "642"],
"64F648627652": ["648", "8BC", "642", "64F648",  "644", "625650", "64E627"],
"8BC": ["642", "64F648", "64F648", "64F648", "64F648627652", "648"],
"6D1": ["63F", "650649", "649650655", "67065C649", "64967065C", "6CC"],
"63F": ["650649", "649650655", "67065C649", "64967065C", "6CC", "6D1"],
"67065C649": ["64967065C", "6CC", "6D1", "63F", "650649", "649650655"],
"64967065C": ["6CC", "6D1", "63F", "650649", "649650655", "67065C649"],
"6CC": ["6D1", "63F", "650649", "649650655", "67065C649", "64967065C"],
"8BD": ["646", "644"],
"64E627": ["62364E", "64F648627652", "644", "625650"],
"62364E": ["64F648627652", "644", "625650", "64E627"],
end: {}
}


var keyboarddef = [
]



function setLocalButtons () {
	// overrides the function that hides the makeEg and charLink buttons
	
	}


function event_mouseoverCharX ()  {
	// overrides the function in shared20/code.js to add shaping forms for all syriac styles
	
	// add cursive forms to table
	var char = this.textContent
	if (spreadsheetRows[char] && spreadsheetRows[char][cols.shape]) {
		document.getElementById('cursive').innerHTML = spreadsheetRows[char][cols.shape].replace(/ /g,'&nbsp;&nbsp;').replace(/ـ/g,'\u200D')
		}
	
	// display character information
	var span = document.createElement( 'span' );
	span.setAttribute( 'id', 'charname' );
	var charinfo = document.createTextNode( this.title );
	span.appendChild(charinfo);
	
	var chardata = document.getElementById('chardata');	
	chardata.replaceChild( span, chardata.firstChild );
		
	// highlight similar characters
	if (globals.showShapeHints && _h[this.id]) {
		ptr = this.id
		for (i=0;i<_h[ptr].length;i++) {
			document.getElementById(_h[ptr][i]).style.backgroundColor = '#FFE6B2'
			}
		}
	}


/*
shapes

ب ت ث ٻ ݑ پ
د ذ
ك ک ݣ
ط ڟ ظ
ع غ ج ح
ࢻ ف
ࢼ ق ُو ُو ُو ُواْ
س ش
ص و ض
ی ۑ ؿ ِى ىِٕ ٰٜى ىٰٜ
ر ز
ࢽ ن ل
إِ َا أَ ُواْ
ه م
*/



function showAlternatives (className, state) {
	nodes = document.querySelectorAll(className)
	if (state) state = 'inline-block'
	else state = 'none'
	for (let i=0;i<nodes.length;i++) nodes[i].style.display = state
	}


