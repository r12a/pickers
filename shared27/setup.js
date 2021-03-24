
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


var sortIndex = ['a','A','b','B','c','C','d','D','e','E','f','F','g','G','h','H','i','I','j','J','k','K','l','L','m','M','n','N','o','O','p','P','q','Q','r','R','s','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z','{','}','§','0','1','2','3','4','5','6','7','8','9','#','[',',','.',';',':','?','_',"'",'*','!','&','|',   '§', '±', '@', '$', '%', '^', '(', ')', '+', '-', '=', ']', '{', '}', '\'', '\\', '<', '>', ',', '/']


var typeAssistMap = ''


function makeTranslitCharacterMap () {
	// creates a string to be used for reverse translation and assigns it to typeAssistMap
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
	//console.log('charArray',charArray)
    
	//for (item in charArray) typeAssistMap += item+('\n')
	for (let i=0;i<window.sortIndex.length;i++) {
		if (charArray[window.sortIndex[i]]) typeAssistMap += charArray[window.sortIndex[i]]+'\n'
		}

 	console.log('typeAssistMap done')
    console.log(typeAssistMap)
	}



function makeTypeAssistMap (col) {
	// output: string: a mapping between keyboard keys and characters that will be used by 
    // the type assist routines
    // col: the number of the column in the spreadsheet containing the key to be mapped to
    // note: this replaces makeTranslitCharacterMap which only managed the 'key' column
    var charArray = {}
    
    // suck out the relevant data into the chars array
    for (var line in spreadsheetRows) {
        // continue if there is no key mentioned in the column
		if (spreadsheetRows[line][col] === '') continue
        
        var primary = false
		var keypress = spreadsheetRows[line][col]
        typeAssistMap = ''
		
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
	//console.log('charArray',charArray)
    
	//for (item in charArray) typeAssistMap += item+('\n')
	for (let i=0;i<window.sortIndex.length;i++) {
		if (charArray[window.sortIndex[i]]) typeAssistMap += charArray[window.sortIndex[i]]+'\n'
		}

 	console.log('typeAssistMap done')
    //console.log(typeAssistMap)
    return typeAssistMap
	}


function makeComplexTypeAssistMap (col) {
	// create a data object typeassist where the spreadsheet column data has alternatives 
	// uses latinRegister from shared24/latinregister
	
	// get the data
	var collector = []
	for (item in spreadsheetRows) {
        //console.log(item)
		/*if (spreadsheetRows[item][col]) {
			var items = spreadsheetRows[item][col].split(' ')
			for (let i=0;i<items.length;i++) collector.push(items[i]+'⛭'+item)
			}
		else { // if there's no IPA etc for this row, use the transliteration, if there is one
			if (spreadsheetRows[item][cols.transLoc]) collector.push(spreadsheetRows[item][cols.transLoc]+'⛭'+item)
			}*/
		if (spreadsheetRows[item][col] && spreadsheetRows[item][col] !== '•') {
			var items = spreadsheetRows[item][col].split(' ')
			for (let i=0;i<items.length;i++) collector.push(items[i]+'⛭'+item)
			}
        // if there's a § in the column, get the key from the key column
        // use the ⛯ symbol, to prevent this being changed by the register lookup
		else if (spreadsheetRows[item][col] === '•') {
			if (spreadsheetRows[item][cols.key]) collector.push(spreadsheetRows[item][cols.key]+'⛯'+item)
			}
        // if there's nothing in the column, ignore
		}
	
	// remove duplicates from collector
	const uniqueSet = new Set(collector)
	collector = [...uniqueSet]
    console.log('Collector',collector)
	
	var notInRegister = ''
    var lookup, keypress
    var charArray = {}
    
    for (i=0;i<collector.length;i++) {
        if (collector[i].includes('⛭')) {
            // find the appropriate key using the register
            lookup = collector[i].normalize('NFD')[0]
            if (typeof latinRegister[lookup] === 'undefined') notInRegister += lookup+' '
            else keypress = latinRegister[lookup]
            }
        else keypress = collector[i][0]
        //console.log('Looking for ',lookup,' found ',keypress)
        
        
		// create entry for the item
        if (charArray[keypress]) {
            //if (primary) charArray[keypress] = charArray[keypress].replace(keypress, keypress+' '+spreadsheetRows[line][cols.transLoc]+' '+line)
            //else 
            charArray[keypress] += ' '+collector[i].replace(/⛭|⛯/,' ')+' '
            }
        else {
            charArray[keypress] = keypress+' '+collector[i].replace(/⛭|⛯/,' ')+' '
            }
        }
    
    console.log('charArray',charArray)
    console.log('notInRegister',notInRegister)
    
    var typeAssistMap = ''
	//sort the results & create the typeAssistMap string
	for (let i=0;i<window.sortIndex.length;i++) {
		if (charArray[window.sortIndex[i]]) typeAssistMap += charArray[window.sortIndex[i]]+'\n'
		}

 	console.log('typeAssistMap done')
    //console.log(typeAssistMap)
    return typeAssistMap
 	}





//  STUFF TO DO TRANSLITERATION WHEN REQUESTED FROM THE TOP BAR
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

