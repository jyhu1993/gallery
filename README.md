gallery
===
拼图布局
---
>>1,在html中新建`<div class = 'puzzle'></div>`<br/>
>>2,新建Gallery的实例;其中参数urlArr为图片地址所组成的数组;拼图布局可完成1~6张图片的布局要求；<br>
`var gallery = new Gallery(urlArr)`<br>
`gallery.setPuzzleFormat()`;

瀑布布局
---
>>1,在html中新建`<div class = 'falls'></div>`<br/>
>>2,新建Gallery的实例;其中参数urlArr为图片地址所组成的数组;setFallsFormat方法中的colNum参数为待布局的列数，interval为列与列之间的间隙<br>
`var gallery = new Gallery(urlArr);`<br>
`gallery.setFallsFormat(colNum,interval);`


