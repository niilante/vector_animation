var c = document.getElementById('c');
var circlebutton = document.getElementById('circle');
var dvdbutton = document.getElementById('dvd');
var stop = document.getElementById('stop');
var rid;

var d = new Image();
d.src = "dvd.png";

var s = document.getElementById('vector');

var start = false;

var clear = function(e) {
	while (s.lastChild) {
	s.removeChild(s.lastChild);
	}
	start = false;
}

var animatecircle = function(e) {
	clear(e);

	var x = s.clientWidth / 2;
	var y = s.clientHeight / 2;		
	var r = 0;

	var min;
	var max;	

	var circle = function() {
	
		var c1 = document.createElementNS("http://www.w3.org/2000/svg","circle");
		c1.setAttribute("cx", x);
		c1.setAttribute("cy", y);
		c1.setAttribute("r", r);
		c1.setAttribute("fill","#00FFFF");
		s.appendChild(c1);

	}

	window.cancelAnimationFrame(rid);
	
	var grow = function() {
		r++;
	}

	var shrink = function() {
		r--;
	}

	var drawDot = function() {
		console.log(rid);
		clear(e);

		if (r <= 0) {
			min = true;
			max = false;
		}

		if (r >= 75) {
			min = false;
			max = true;
		}
	
		if (min) {
			grow();
		}

		if (max) { 
			shrink();
		}

		circle();
		rid = window.requestAnimationFrame(drawDot);
	};
	drawDot();
};

var animateDVD = function(e) {
	clear(e);
	window.cancelAnimationFrame(rid);

	var x = s.clientWidth - 525;
	var y = s.clientHeight - 135;

	var vx = 1;
	var vy = 1;

	var DVD = function(x,y) {
		var dvd = document.createElementNS('http://www.w3.org/2000/svg','image');
		dvd.setAttribute('x', x);
		dvd.setAttribute('y', y)
		dvd.setAttribute('width', 100);
		dvd.setAttribute('height', 40);
		dvd.setAttribute('href', 'dvd.png');
		s.appendChild(dvd);
	}

	var bounce = function() {
		console.log(rid);
		clear(e);

		x += vx;
		y += vy;

		if (x >= s.clientWidth - 70 || x <= -25) {
			vx *= -1;
		}

		if (y >= s.clientHeight - 30 || y <= 0) {
			vy *= -1;
		}
		
		DVD(x,y);	

		rid = window.requestAnimationFrame(bounce);	
	};
	bounce();
};

var stopIt = function() {
    console.log(rid);
    window.cancelAnimationFrame(rid);
};


circlebutton.addEventListener('click', animatecircle);
dvdbutton.addEventListener('click', animateDVD);
stop.addEventListener('click', stopIt);