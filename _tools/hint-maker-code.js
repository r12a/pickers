function generateCode () {
	var lines = document.getElementById('in').value.split("\n")
	// '56F': ['587','576'],
	var out = ''
	for (var l=0;l<lines.length;l++) {  // for each line
		line = lines[l].replace(/\s+/g,' ').trim()
		if (line === '') continue
		chars = line.split(' ')
		
		for (q=0;q<chars.length;q++){
			firstItem = chars.shift()
			chars.push(firstItem)
			
			out += "'";  // print the trigger character
			for (let i=0;i<chars[0].length;i++) {
				out += chars[0].codePointAt(i).toString(16).toUpperCase()
				}
			out += "': ["
			for (let c=1;c<chars.length;c++) { // for each remaining character on the line
				out += "'"
				for (j=0;j<chars[c].length;j++) { // print that character
					out += chars[c].codePointAt(j).toString(16).toUpperCase()
					}
				out += "'"
				if (c<chars.length-1) { out += ", " }
				}
			out += "],\n"
			}
		}
	document.getElementById('out').value = out
	}