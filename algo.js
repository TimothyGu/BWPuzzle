var logEl = document.getElementById('log')
var maxEl = document.getElementById('max')
var maxSquare = {length: 0}
function change (i, j) {
	var classes = document.getElementById(i + '_' + j).classList
	classes.remove(!!grid[i][j])
	grid[i][j] = !grid[i][j]
	classes.add(grid[i][j])
}
function start () {
	if (maxSquare.start) document.getElementById(maxSquare.start[0] + '_' + maxSquare.start[1]).classList.remove('hilight3')
	maxSquare = {length: 0}
	for (var i = 0; i < m; i++) {
		if (i + maxSquare.length >= m) break
		for (var j = 0; j < n; j++) {
			if (j + maxSquare.length >= n) break
			announceTesting(i, j)
			finishTesting(i, j)
			if (grid[i][j]) {
				var length = find(i, j)
				if (length > maxSquare.length) {
					if (maxSquare.start) document.getElementById(maxSquare.start[0] + '_' + maxSquare.start[1]).classList.remove('hilight3')
					maxSquare = {
						start:  [i, j],
						end:    [i + length - 1, j + length - 1],
						length: length
					}
					maxEl.textContent = 'Current maximum: Starting from [' + i + ', ' + j + ']. Length ' + length + '.'
					document.getElementById(i + '_' + j).classList.add('hilight3')
				}
			}
		}
	}
}

function find (i, j) {
	var length = 1
	announceFinding(i, j)
	while (true) {
		if (!grid[i + length]) {
			logEl.textContent = 'Square starting from [' + i + ', ' + j + '] has length ' + length
			alert('Continue?')
			finishFinding(i, j)
			return length
		}

		announceTesting(i + length, j + length)
		finishTesting(i + length, j + length)
		if (!grid[i + length][j + length]) {
			logEl.textContent = 'Square starting from [' + i + ', ' + j + '] has length ' + length
			alert('Continue?')
			finishFinding(i, j)
			return length
		}

		for (var k = 0; k < length; k++) {
			announceTesting(i + length, j + k)
			finishTesting(i + length, j + k)
			if (!grid[i + length][j + k]) {
				logEl.textContent = 'Square starting from [' + i + ', ' + j + '] has length ' + length
				alert('Continue?')
				finishFinding(i, j)
				return length
			}


			announceTesting(i + k, j + length)
			finishTesting(i + k, j + length)
			if (!grid[i + k][j + length]) {
				logEl.textContent = 'Square starting from [' + i + ', ' + j + '] has length ' + length
				alert('Continue?')
				finishFinding(i, j)
				return length
			}
		}
		length ++
	}
}

function announceTesting (i, j) {
	logEl.textContent = 'testing [' + i + ', ' + j + ']'
	var el = document.getElementById(i + '_' + j)
	if (el) el.classList.add('hilight')
	alert('Continue?')
	return
}

function finishTesting (i, j) {
	var el = document.getElementById(i + '_' + j)
	if (el) el.classList.remove('hilight')
	return
}

function announceFinding (i, j) {
	var el = document.getElementById(i + '_' + j)
	if (el) el.classList.add('hilight2')
	return
}

function finishFinding (i, j) {
	var el = document.getElementById(i + '_' + j)
	if (el) el.classList.remove('hilight2')
	return
}
