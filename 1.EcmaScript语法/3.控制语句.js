//程序控制语句

//选择判断语句
//if...else
    var a = true;
    if (a){
        console.log("true");
    }else{
        console.log("false");
    }
//switch...case
    var x;
    var d=new Date().getDay();
    switch (d) {
        case 0 : x="今天是星期日";
            break;
        case 1:x="今天是星期一";
            break;
        case 2:x="今天是星期二";
            break;
        case 3:x="今天是星期三";
            break;
        case 4:x="今天是星期四";
            break;
        case 5:x="今天是星期五";
            break;
        case 6:x="今天是星期六";
            break;
    };
    console.log(x);


//跳转语句
//return
//break
var x1="";
for (var i=0;i<10;i++){
    if (i==3){
        break;
    }
    x1 = "break;;该数字为 " + i;
    console.log(x1);
};

//continue
var x2="";
for (var i=0;i<10;i++){
    if (i==3){
        continue;
    }
    x2= "continue;;;该数字为 " + i ;
    console.log(x2);
}


//循环语句
//while
var x3="",i=0;
while (i<5){
    x3= "while;;;该数字为 " + i;
    i++;
    console.log(x3);
}

//for
var x4 ="";
for (var i=0;i<5;i++){
    x4 = "for;;;该数字为 " + i ;
    console.log(x4);
}
//do...while
var x5 ="",i=0;
do{
    x5="该数字为 " + i ;
    i++;
}
while (i<5)
console.log(x5);

//for...in
var x6;
var txt="";
var person={fname:"Bill",lname:"Gates",age:56};
for (x6 in person){
    txt=txt + person[x6];
}
console.log(txt);

//异常语句
//try...catch...finally
//throw