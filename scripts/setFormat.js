function Gallery(urlArr){
	this.length = urlArr.length;
	this.url = urlArr;
}
//拼图相册版式；
Gallery.prototype.setPuzzleFormat = function(){
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
//瀑布相册版式，colNum设置列数，interval设置每列之间的间隔；
Gallery.prototype.setFallsFormat = function(colNum,interval){
	var falls = document.querySelector('.falls');
	//按输入的数值设置列及间隔；
	for (var i = 0; i < colNum; i++) {
		var div = document.createElement('div');
		div.style.width = 100/colNum + '%';
		div.setAttribute('class','column');
		div.style.marginLeft = parseInt(interval)/2 + 'px';
		div.style.marginRight = parseInt(interval)/2 + 'px';
		falls.appendChild(div);
	}
	var urlArr = this.url;
	//同步设置第一行的图片；同步加载；
	for (var j = 0; j < colNum; j++) {
		var img = document.createElement('img');
		img.setAttribute('src',urlArr[j]);
		img.setAttribute('class','fallsImg');
		img.style.marginBottom = interval;
		var columns = document.querySelectorAll('.column');	
		columns[j].appendChild(img);	
	}
	var flag = 0;
    //需等待之前的图片已加载完成再计算column的高度，确定下一张图片放在何处；
	var k = colNum;
	//设置下一张图片的位置；
	setNextImg();
	function setNextImg(){
		var imgAll = document.querySelectorAll('img');
		for (var i = 0; i < imgAll.length; i++) {
			imgAll[i].onload = function(){
				flag++;
				if (flag == k) {
					var columns = document.querySelectorAll('.column');	
					var columnsHeight = [];
					for (var i = 0; i < columns.length; i++) {
						columnsHeight.push(columns[i].clientHeight);
					}
					var minHeight = Math.min.apply(Math,columnsHeight);
					var index = columnsHeight.indexOf(minHeight);
					var img = document.createElement('img');
					img.setAttribute('src',urlArr[k]);
					img.setAttribute('class','fallsImg');
					img.style.marginBottom = interval;
					columns[index].appendChild(img);
					k++;
					if (k < urlArr.length) {
						//循环调用该函数，直至图片全部加载完；
						setNextImg();
					}else{
						//所有图片都加载完，即setNextImg()执行完毕，再在图片上绑定事件；
						clickEvent();
					}					
				}
			};
		}	
	}	
	//点击其中一幅图片时出现大图；	
	function clickEvent(){
		var falls = document.querySelector('.falls');
		var imgAll = document.querySelectorAll('img');
		for (var i = 0; i < imgAll.length; i++) {
			imgAll[i].addEventListener('click',function(event){
				var target = event.target;
				//生成遮挡罩；
				var div = document.createElement('div');
				div.setAttribute('class','coverLayer');
				falls.parentNode.insertBefore(div,falls);
				var cloneTarget = target.cloneNode(true);
				cloneTarget.setAttribute('class','cloneImg');
				div.parentNode.insertBefore(cloneTarget,div);	
				div.addEventListener('click',function(){
					div.parentNode.removeChild(div);
					cloneTarget.parentNode.removeChild(cloneTarget);
				},false);
			},false);
		}
	}
};




























