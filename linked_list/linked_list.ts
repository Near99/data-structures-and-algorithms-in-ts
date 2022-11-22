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

    constructor() {
        this.head_ = null;
    }

    public insert(value: T) {
        const newNode = new ListNode(value, null);
        if (this.head_ === null) {
            this.head_ = newNode;
        } else {
            newNode.setNext(this.head_);
            this.head_ = newNode;
        }
    }

    public print() {
        let temp = this.head_;
        while (temp) {
            console.log(temp.getValue());
            temp = temp.getNext();
        }
    }
}

const list = new LinkedList();
for (let i = 0; i < 100; i++) {
    list.insert(i);
}
list.print();
