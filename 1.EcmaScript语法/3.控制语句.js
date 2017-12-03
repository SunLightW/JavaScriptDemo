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
var x2="";
for (var i=0;i<10;i++){
    if (i==3){
        break;
    }
    x = "该数字为 " + i;
    console.log(x2);
};

//continue
var x1="";
for (var i=0;i<10;i++){
    if (i==3){
        continue;
    }
    x1= "该数字为 " + i ;
    console.log(x1);
}


//循环语句
//do...while
//while
//for
//for...in



//异常语句
//try...catch...finally
//throw