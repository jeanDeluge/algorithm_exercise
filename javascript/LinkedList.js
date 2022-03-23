class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    
    constructor() {
        this.head = null
        this.length = 0;
    }

    getFirst(){
        if(!this.head){
            return "존재하지 않는 값입니다.";
        }
        return this.head;
    }
    toArray(){
        let current = this.head;
        let array = []

        while(current){
            array.push(current.next)
            current = current.next
        }
        return array
    }
    getByIndex(index){
        let current = this.head;
        let count = 0;

        while(current){
            if(count === index){
                return current
            }
            count++;
            current = current.next;
        }
        return null;
    }
    getByData(data){
        let current = this.head;
        while(current){
            if(data === current.data){
                return current
            }
            current = current.next;
        }
        return null;
    }
    getLast(){
        return this.getByIndex(this.length-1);

    }
    removeFirst(){
        let next = this.head.next;
        delete this.head;
        this.head = next;
        
    }
    removeLast(){
        delete this.getLast();
    }
    addFirst(data){
        if(!this.head){
            this.head = new Node(data)
        }
        let currentHead = this.head
        let newHead = new Node(data, currentHead)
        this.head = newHead
    }
    addLast(data){
        if(!this.head){
            this.addFirst();
        }
        let currentRear = this.getLast();
        let newRear = new Node()
    }
    insertByIndex(index, data){
        let prev = this.getByIndex(index);
        let current = new Node(data);
        
        current.next = prev.next;
        prev.next = current;

    }
    removeByIndex(index){
        let prev = this.getByIndex(index - 1);
        let target = prev.next;
        prev.next = target.next;
  
    }
    contains(data){
        if(!this.getByData(data)){
            return false;
        }
        return true;
    }
    size(){
        return this.length;
    }
    clear(){
        let current = this.head;
        while(current){
            delete this.head;
            current = current.next;
            this.head = current;
        }
    }
}