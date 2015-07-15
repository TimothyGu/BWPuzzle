var grid = [
	[ true,  true,  true,  false ],
	[ false, false, true,  true  ],
	[ false, true,  true,  true  ],
	[ true,  true,  false, true  ]
]

// var m = grid.length, n = grid[0].length
var hash = document.location.hash.substr(1)
var splitted = hash.split(',')
var m = +splitted[0] || 4, n = +splitted[1] || 4

document.write('<table><tbody>')
for (var i = 0; i < m; i++) {
	if (!grid[i]) grid[i] = []
	document.write('<tr>')
	for (var j = 0; j < n; j++) {
		document.write('<td id="' + i + '_' + j + '" class="' + (grid[i][j] ? 'true' : 'false') + '" onclick="change(' + i + ', ' + j + ')"></td>')
	}
	document.write('</tr>')
}
document.write('</tbody></table>')
