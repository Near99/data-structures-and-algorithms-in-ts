class ListNode<T> {
    private value_: T;
    private next_: ListNode<T> | null;

    constructor(value: T, next: ListNode<T> | null) {
        this.value_ = value;
        this.next_ = next;
    }

    public getValue() {
        return this.value_;
    }

    public getNext() {
        return this.next_;
    }

    public setNext(next: ListNode<T> | null) {
        this.next_ = next;
    }

    public setValue(value: T) {
        this.value_ = value;
    }
}

class LinkedList<T> {
    private head_: ListNode<T> | null;
    private tail_: ListNode<T> | null;

    constructor() {
        this.head_ = null;
        this.tail_ = null;
    }

    public insertFront(value: T) {
        const newNode = new ListNode(value, null);
        if (this.head_ === null) {
            this.head_ = newNode;
            this.tail_ = newNode;
        } else {
            newNode.setNext(this.head_);
            this.head_ = newNode;
        }
    }

    public insertBack(value: T) {
        const newNode = new ListNode(value, null);
        if (this.tail_ == null) {
            this.head_ = newNode;
        } else {
            this.tail_.setNext(newNode);
        }
        this.tail_ = newNode;
    }

    public reverse() {
        let pre: ListNode<T> | null = null,
            curr = this.head_,
            next: ListNode<T> | null = null;
        while (curr) {
            next = curr.getNext();
            curr.setNext(pre);
            pre = curr;
            curr = next;
        }
        this.head_ = pre;
    }

    public print() {
        let temp = this.head_;
        while (temp) {
            console.log(temp.getValue());
            temp = temp.getNext();
        }
        console.log(this.head_);
    }
}

(function test() {
    const list = new LinkedList<number>();
    for (let i = 0; i < 5; i++) {
        list.insertFront(i);
    }
    list.reverse();
    list.print();
})();
