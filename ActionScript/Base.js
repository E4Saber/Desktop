

//封装
function  FirClass(name, age) {
    this.name = name;
    this.age = age;
};

FirClass.prototype = {
    toString : function () {
        console.log(this.name + ':' + this.age);
    },
    saySomething : function () {
        console.log('saySomething');
    }
};

var cls1 = new FirClass('jack', 10);
cls1.toString();
cls1.saySomething();

//静态类
var StaticClass = function () {};
StaticClass.name = 'StaticClass_name';
StaticClass.Sum = function (val1, val2) {
    return val1 + val2;
};
console.log('StaticClass.name : ' + StaticClass.name);
console.log(StaticClass.Sum(1,4));



//继承
function People() {
    this.type = 'People';
};
People.prototype = {
    getType : function () {
        console.log('this is people');
    }
};
function Student(name, sex) {
    this.name = name;
    this.sex = sex;
};
//使用apply方法将父对象的构造函数绑定到子对象上
function Student_apply(name, sex) {
    //继承属性
    People.apply(this, arguments);
    this.name = name;
    this.sex = sex;
};
var stu = new Student_apply('jack', 'male');
console.log('继承属性 : ' +  stu.type);

//继承方法
function Student_proto(name, sex) {
    People.apply(this, arguments);
    var prop;
    for(prop in People.prototype) {
        var proto = this.constructor.prototype;
        if(!proto[prop]) {
            proto[prop] = People.prototype[prop];
        }
        proto[prop]['super'] = People.prototype;
    }
    this.name = name;
    this.sex = sex;
};
var stu1 = new Student_proto('json', 'female');
console.log( '继承方法 : ' + stu1.type);

stu1.getType( );