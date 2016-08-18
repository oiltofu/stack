"use strict";

/*
 *author: 林登锋
 *2016.8.18
 *进制转换
 */

function Stack() {
    this.dataStore = [];
    this.top = 0;
}

//压入栈方法
Stack.prototype.push = function(element) {
    this.dataStore[this.top++] = element;
}

//出栈方法
//栈顶的元素删除
//top-1
//将栈顶元素返回给调用者
Stack.prototype.pop = function() {
    if(this.top==0) {
        return undefined;
    }
    var lastItem = this.dataStore.pop();
    this.top--;
    return lastItem;
}

Stack.prototype.toString = function() {
    if(this.top==0) {
        return "此栈为空";
    }
    return this.dataStore.join("|");
}

//查看栈顶元素方法
Stack.prototype.peek = function() {
    return this.dataStore[this.top-1];
}

//返回栈内元素数量
Stack.prototype.length = function() {
    return this.top;
}

//清空栈
Stack.prototype.clear = function() {
    this.top = 0;
    this.dataStore.length = 0;
}

//进制数转换
//n数字
//b进制数
//函数最后返回计算结果
function mulBase(n,b) {
    var stack = new Stack();
    do {
        stack.push(n%b);
        n = Math.floor(n/b);
    } while (n>0);
    var converted = "";
    do {
        converted += stack.pop();
    } while (stack.top>0);
    return converted;
}
console.log(mulBase(32,2));
