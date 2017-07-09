function generateCode () {
	var lines = document.getElementById('in').value.split("\n")
	// '56F': ['587','576'],
	out = ''
	for (var l=0;l<lines.length;l++) {  // for each line
		chars = lines[l].split(' ')
		out += "'";  // print the trigger character
		for (i=0;i<chars[0].length;i++) {
			out += chars[0].codePointAt(i).toString(16).toUpperCase()
			}
		out += "': ["
		for (c=1;c<chars.length;c++) { // for each remaining character on the line
			out += "'"
			for (j=0;j<chars[c].length;j++) { // print that character
				out += chars[c].codePointAt(j).toString(16).toUpperCase()
				}
			out += "'"
			if (c<chars.length-1) { out += ", " }
			}
		out += "],\n"
		}
	document.getElementById('out').value = out
	}