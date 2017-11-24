function f1() {
    //获得元素,属性操作
    var b1 = document.getElementById("p1");
    var a = b1.getAttribute("id");
    b1.setAttribute('font-size','2cm');
    var b = b1.getAttribute("font-size");
    alert(b);
    alert(a);
    b1.removeAttribute('font-size');
    var c = b1.getAttribute("font-size");
    alert(c);
}




function f2() {
    //获得元素，文本操作
    var b2 = document.getElementById("p2");
    var c = b2.innerHTML;
    console.log('原始：'+c);
    b2.insertData(2,'jjjjj');
    var c = b2.innerHTML;
    console.log('2号位插入'+c);
    b2.appendData('jasmine1');
    var c = b2.innerHTML;
    console.log();
    b2.deleteData(2,5);
    var c = b2.innerHTML;
    console.log();
    b2.replaceData(0,2,'jas');
    var c = b2.innerHTML;
    console.log();
    b2.splitText(3);
    var c = b2.innerHTML;
    console.log();
    b2.substring(2,5);
    var c = b2.innerHTML;
    console.log();
}