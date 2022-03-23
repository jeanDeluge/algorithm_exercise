class Stack {
    constructor() {
        this.top = 0;
        this.arr = [];
        this.hash = {};
    }

    pop(){
        let result;

        if(this.top > 0) {
            result = this.arr[this.top - 1];
            delete this.arr[this.top--];
        }
        return result;
    }

    push(item) {
        this.arr[this.top++] = item;
        this.hash[item] = this.hash[item] ? this.hash[item]++ : 1;
    }

    length() {
        return this.top;
    }

    peek(){
        return this.arr[this.top-1];
    }
    clear(){
        // if(this.top < 0){
            this.arr = []
            this.top = 0
            // return;
        // }
        // delete this.arr[this.top--];
        // this.clear();

    }
    contains(item){
        // for(let i = 0; i < this.top; i++){
        //     if(this.arr[i] === item){
        //         return true
        //     }
        // }
        // return false
        return this.hash[item] ? true : false;
    }
}


const myStack = new Stack();

console.log("the number of items", myStack.top)

console.log("push test")
myStack.push("jean");

console.log("is jean contained?", myStack.contains("jean"))
console.log("current the number of items", myStack.length())
console.log("current arr", myStack.arr )

console.log("----------")

console.log("pop test")
console.log(myStack.pop())

console.log("is jean contained?", myStack.contains("jean"))
console.log("current the number of items", myStack.length())
console.log("current arr", myStack.arr )


console.log("----------")

console.log("clear test")
myStack.push("jean")
myStack.push("deluge")
myStack.push("red")
myStack.push("blue")

console.log("current items in arr", myStack.arr)
myStack.clear()
console.log("after use clear()", myStack.arr)

console.log("----------")

console.log("peek test")

myStack.push("jean")
myStack.push("deluge")
myStack.push("red")
myStack.push("blue")

console.log("the lastest item", myStack.peek())
console.log("current items in arr", myStack.arr)
console.log("length",myStack.length())