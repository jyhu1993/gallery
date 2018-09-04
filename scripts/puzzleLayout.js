function Gallery(urlArr){
	this.length = urlArr.length;
	this.url = urlArr;
}
//相册版式；
Gallery.prototype.setFormat = function(){
	var len = this.length;
	var urlArr = this.url;
	var puzzle = document.querySelector('.puzzle');
	puzzle.innerHTML = '';
	for (var i = 0; i < len; i++) {
		var puzzleChild = document.createElement('div');
		puzzleChild.setAttribute('class','puzzle-' + len);
		puzzle.appendChild(puzzleChild);
		puzzleChild.style.backgroundImage = 'url(' + urlArr[i] + ')';
	}
};
var urlArr1 = ['../images/001.jpg'];
var urlArr2 = ['../images/001.jpg','../images/002.jpg'];
var urlArr3 = ['../images/001.jpg','../images/002.jpg','../images/003.jpg'];
var urlArr4 = ['../images/001.jpg','../images/002.jpg','../images/003.jpg','../images/004.jpg'];
var urlArr5 = ['../images/001.jpg','../images/002.jpg','../images/003.jpg','../images/004.jpg'
              ,'../images/005.jpg'];
var urlArr6 = ['../images/001.jpg','../images/002.jpg','../images/003.jpg','../images/004.jpg'
              ,'../images/005.jpg','../images/006.jpg'];
//异步执行上述数组图片；
(function(){
	function step1(){
		return new Promise(function(resolve,reject){
			var gallery = new Gallery(urlArr1);
			gallery.setFormat();
			setTimeout(resolve,2000,'');
		});
	}
	function step2(){
		return new Promise(function(resolve,reject){
			var gallery = new Gallery(urlArr2);
			gallery.setFormat();
			setTimeout(resolve,2000,'');			
		});
	}
	function step3(){
		return new Promise(function(resolve,reject){
			var gallery = new Gallery(urlArr3);
			gallery.setFormat();
			setTimeout(resolve,2000,'');			
		});
	}
	function step4(){
		return new Promise(function(resolve,reject){
			var gallery = new Gallery(urlArr4);
			gallery.setFormat();
			setTimeout(resolve,2000,'');			
		});
	}
	function step5(){
		return new Promise(function(resolve,reject){
			var gallery = new Gallery(urlArr5);
			gallery.setFormat();
			setTimeout(resolve,2000,'');			
		});
	}
	function step6(){
		return new Promise(function(resolve,reject){
			var gallery = new Gallery(urlArr6);
			gallery.setFormat();
			setTimeout(resolve,2000,'');			
		});
	}
	step1().then(step2)
		   .then(step3)
		   .then(step4)
		   .then(step5)
		   .then(step6);
})();























