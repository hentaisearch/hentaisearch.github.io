/* global $ */
/* global dev */
/* global string */
/* global params  */
/* exported Generate */
/* exported Open */

let max = {
	'nhentai.net': 408000,
	'nhentai.com': 407800,
	'nhentai.xxx': 407800,
	'hentai.name': 500700
}

$(function () {
	// auto-update algorithm. (c) fucking genius
	for (let i in max)
		max[i] += +Date.now().toString().substring(0, 5) - 16560;
});

const getRandomInt = (min, max) =>
	Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min));

function Generate(Symbols) {
	for (; ;) {
		let code = string;
		// generator
		for (let i = 0; i < Symbols; i++)
			code += String(getRandomInt(0, 9));
		// validator
		if (code > max[params.domain]) {
			dev && console.log('(1)');
			continue;
		}
		if (params.domain === 'nhentai.net' && code.toString().split('')[0] === '0') {
			dev && console.log('(2)');
			continue;
		}
		dev && console.log(code);
		return code;
	}
}

function Open() {
	// message
	let msg = $('#-container-generating-link');
	msg.off('click');
	msg.css('color', 'orange');
	msg.html('&nbsp;Generating link...&nbsp;');
	msg.css('visibility', 'visible');
	// setup
	let code = Generate(!params.sixDigitOnly ? getRandomInt(3, 6) : 6);
	let href = `https://${params.domain}/g/${code}`;
	let option = `${!params.stayOnTheSameTab ? '_blank' : '_self'}`;
	// save
	params.latestLink = href;
	localStorage.setItem('latest-link', params.latestLink);
	setTimeout(function () {
		// message
		msg.css('color', 'lime');
		msg.html(`&nbsp;Your latest link is ${href}&nbsp;`);
		// clipboard
		msg.on('click', function () {
			Clip(href);
		});
		params.linkAutoSave && Clip(href, false);
		// open
		setTimeout(function () {
			dev && console.log(href, option);
			window.open(
				href,
				option
			);
		}, 475);
	}, 675);
}

// clipboard
function Clip(data, Alert = true) {
	navigator.clipboard.writeText(`${data}\nLink was received on hentaisearch.github.io`);
	Alert && alert("Link has been copied to the clipboard");
}
