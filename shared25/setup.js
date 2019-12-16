
function compareLength (a, b) {
  var nameA = a.length; 
  var nameB = b.length; 
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
}

debug=true

var sortIndex = ['a','A','b','B','c','C','d','D','e','E','f','F','g','G','h','H','i','I','j','J','k','K','l','L','m','M','n','N','o','O','p','P','q','Q','r','R','s','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z','{','}','§','0','1','2','3','4','5','6','7','8','9','#','[',',','.',';',':','?','_',"'",'*','!','&','|',   '§', '±', '@', '$', '%', '^', '(', ')', '+', '-', '=', ']', '{', '}', '\'', '\\', '<', '>', ',', '/']


var translitCharacterMap = ''


function makeTranslitCharacterMap () {
	// creates a string to be used for reverse translation and assigns it to translitCharacterMap
	// that is then used elsewhere to set up the reverse translation panel
	// takes its information from the spreadsheet
    var charArray = {}
    
    // suck out the relevant data into the chars array
    for (var line in spreadsheetRows) {
		if (spreadsheetRows[line][cols.key] === '') continue
        var primary = false
		var keypress = spreadsheetRows[line][cols.key]
		
		// check for a marker that this pair should come first
		if (keypress.includes('¶')) {
            primary = true
            keypress = keypress.replace('¶', '')
            }

		// create entry for the item
        if (charArray[keypress]) {
            if (primary) charArray[keypress] = charArray[keypress].replace(keypress, keypress+' '+spreadsheetRows[line][cols.transLoc]+' '+line)
            else charArray[keypress] += ' '+spreadsheetRows[line][cols.transLoc]+' '+line
            }
        else {
            charArray[keypress] = keypress+' '+spreadsheetRows[line][cols.transLoc]+' '+line
            }
		
		}
	//console.log(charArray)
    
	//for (item in charArray) translitCharacterMap += item+('\n')
	for (let i=0;i<window.sortIndex.length;i++) {
		if (charArray[window.sortIndex[i]]) translitCharacterMap += charArray[window.sortIndex[i]]+'\n'
		}

 	console.log(translitCharacterMap)
	}



var autoTranslitArray = {}

function makeAutoTranslitArray () {
	// creates an array of correlated items that will be used by the transliteration control
	// takes the data from the spreadsheet
	
    
    // suck out the relevant data into the chars array
    for (var line in spreadsheetRows) {
		if (spreadsheetRows[line][cols.transLoc] === '') continue		
			
        // create entry for the item
        if (autoTranslitArray[line]) console.log('Unexpected duplicate in makeTransliterationArray: ',line)
        else autoTranslitArray[line] = spreadsheetRows[line][cols.transLoc]
		
		}

	// swap the keys and values of autoTranslitArray to create an array that can be use for latin->native
	// then move all the values to an array, sorted by the number of characters in the key
	// this is so that the actual reverse transliteration can find base+combining first when
	// running through the array to do replacements
  	window.revTranslitArray = []
	
	for (i=5;i>-1;i--) {
		for(var key in autoTranslitArray) {
			if (autoTranslitArray[key].length === i) {
				revTranslitArray.push([autoTranslitArray[key],key])
				//revTranslitArray[autoTranslitArray[key]] = key
				}
			}
		}
	}

