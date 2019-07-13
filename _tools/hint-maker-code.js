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
	
	// reduce redundancy
	out = out.replace(/ /g,'')
	out = out.replace(/'/g,'')
	out = out.replace(/\[|\]/g,'')
	var lines = out.split('\n')
	out = ''
	var triggerList = {}
	for (let i=0;i<lines.length;i++) {
		if (lines[i] == '') continue
	console.log('linesi',lines[i])
		var temp = lines[i].split(':')
		var trigger = temp[0]
		var targets = temp[1]
		var targetArray = targets.split(',')
		
		if (triggerList[trigger]) {
			triggerList[trigger] = triggerList[trigger].concat(targetArray)
			// remove redundancy in the list of targets
			const uniqueSet = new Set(triggerList[trigger])
			triggerList[trigger] = [...uniqueSet]
			}
		else triggerList[trigger] = targetArray
		}
	
	for (item in triggerList) {
		out += '"'+item+'": ['
		for (let j=0;j<triggerList[item].length-1;j++) {
			out += '"'+triggerList[item][j]+'"'
			if (j<triggerList[item].length-2) out += ', '
			}
		out += '],\n'
		}
	
	out = out.replace(/"",/g,'')
	
	document.getElementById('out').value = out
	document.getElementById('out').select()
	}