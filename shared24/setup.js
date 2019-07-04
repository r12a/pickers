function OLDcompare(a, b) {
  var nameA = a.toUpperCase(); // ignore upper and lowercase
  var nameB = b.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
}

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

 	//console.log(translitCharacterMap)
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

	//console.log(autoTranslitArray)

	//for (item in charArray) translitCharacterMap += item+('\n')
	//for (let i=0;i<window.sortIndex.length;i++) {
	//	if (charArray[window.sortIndex[i]]) translitCharacterMap += charArray[window.sortIndex[i]]+'\n'
//		}

 	//console.log(translitCharacterMap)
	}


function OLDmakeTransliterationArray () {
	// creates an array of correlated items that will be used by the transliteration control
	// takes the data from the spreadsheet
	
    var lines1=[], lines2=[], lines3=[], lines4=[], linesmore=[]
	list = list.trim()
	list = list.replace(/ +/g,' ')
	var listarray = list.split('\n')
	
	for (let i=0;i<listarray.length;i++) {
		pair = listarray[i].replace(/^[ \t\uFEFF]+|[\ \t\uFEFF]+$/g, '') // nnbsp friendly .trim()
		// skip blank lines
        if (pair === '') continue
        
		pairarray = pair.split('\t')
        // skip lines with no key
        console.log('from',pairarray[from], 'to',pairarray[to],'key',pairarray[to-1])
        if (to > from && pairarray[to-1] === undefined) { console.log('quitting'); continue}
        else if (to < from && pairarray[from-1] === undefined) continue


        var out = ''
		out += 'str = str.replace(/'
        if (pairarray[from].includes('-')) {
            pairarray[from] = pairarray[from].replace(/-/,'(.)')
            pairarray[to] = '\$1'+pairarray[to]
            }
        out += pairarray[from]
        out += '/g, "'
        
        if (pairarray[to]) var result = pairarray[to].replace(/ +/g,' ')
        else result = ''
        console.log('result', result)
        if (result.includes(' ') && result !== ' ') out += '['+result.replace(/ /g,'{')+']'
        else out += result
        out += '")\n'

        if (pairarray[from].length === 1) lines1.push(out)
        else if (pairarray[from].length === 2) lines2.push(out)
        else if (pairarray[from].length === 3) lines3.push(out)
        else if (pairarray[from].length === 4) lines4.push(out)
        else linesmore.push(out)         
		}
    
    lines1.sort()
    lines2.sort()
    lines3.sort()
    lines4.sort()
    linesmore.sort()
    lines = linesmore.concat(lines4, lines3, lines2, lines1)

    return lines.join('')
		
	}