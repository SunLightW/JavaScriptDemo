// 这里主要写一些JS对象相关的代码
var p = document.getElementById("demo");
var p1 = document.getElementById("demo1");
var p2 = document.getElementById("demo2");
var p3 = document.getElementById("demo3");
var p4 = document.getElementById("demo4");
var p5 = document.getElementById("demo5");
var p6 = document.getElementById("demo6");
var html = "下面是person的信息：";
var html1 = "下面是person的信息：";
var html2 = "下面是person的信息：";
var html3 = "下面是person的信息：";
var html4 = "下面是person的信息：";
var html5 = "下面是person的信息：";
var html6 = "下面是person的信息：";


//1 对象概览(对象的组成)
//----->对象的基本组成
//-------->基本值,name和age
//-------->函数，run()
//-------->对象:child{}

function f1() {
    var person = {
        name : "Jack",
        age : 18,

        run : function () {
            alert(this.name +"is running...");
        },
        child:{name:"Jones",age:10}
    };
    alert("person's name is"+person.name);
    alert("person's age is"+person.age);
    alert("使用person的run方法"+person.run());
    alert("person's child is"+person.child.name+";and he is"+person.child.age+"years now;");
}


//2 对象的属性
//----->数据属性
//-------->configurable
//-------->enumerable
//-------->writable
//-------->value
//----->访问器属性
//-------->get
//-------->set

function f2() {
    var Jasmine = {
        jname:"jasmine"
    };

    Object.defineProperty(Jasmine,"jname",[{
        configurable:false,
        enumerable:false,
        writable:false,

        get:function () {
            return this.jname;
        },
        set:function (jname2) {
            this.jname = jname2;
            return this.jname;
        }
    }]);

    Jasmine.jname = "wyz";
    alert(Jasmine.jname);

}



//2 对象的创建
//----->创建JS对象的方法有如下7种
//-------->工厂模式
//-------->构造器模式
//-------->原型模式
//-------->组合使用构造函数和原型模式
//-------->动态原型模式
//-------->寄生构造函数模式
//-------->稳妥构造函数模式


//2.1 工厂模式
function creatPerson(name,age) {
    var obj = new Object();
    obj.name1 = name;
    obj.age1 = age;
    obj.run1 = function () {
        alert(this.name1);
    };
    return obj;
}

//2.2 构造函数模式
function Person(name,age) {
    this.name2 = name;
    this.age2 = age;
    this.run2 = function () {
        alert(this.name2);
    }
}

//2.3 原型模式
function Person1() {
    Person1.prototype.name = "原型";
    Person1.prototype.age = 20;
    Person1.prototype.run3 = function () {
        alert(this.name)
    }
}

//2.4 原型混合构造函数模式


//2.5 动态原型模式


//2.6 寄生构造函数模式

//2.7 稳妥构造函数模式



