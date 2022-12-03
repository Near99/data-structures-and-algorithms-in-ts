class ListNode<T> {
    private value_: T;
    private next_: ListNode<T> | null;

    constructor(value: T, next: ListNode<T> | null) {
        this.value_ = value;
        this.next_ = next;
    }

    public getValue(): T {
        return this.value_;
    }

    public getNext(): ListNode<T> | null {
        return this.next_;
    }

    public setNext(next: ListNode<T> | null): void {
        this.next_ = next;
    }

    public setValue(value: T): void {
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

    public insertFront(value: T): void {
        const newNode = new ListNode(value, null);
        if (this.head_ === null) {
            this.head_ = newNode;
            this.tail_ = newNode;
        } else {
            newNode.setNext(this.head_);
            this.head_ = newNode;
        }
    }

    public insertBack(value: T): void {
        const newNode = new ListNode(value, null);
        if (this.tail_ == null) {
            this.head_ = newNode;
        } else {
            this.tail_.setNext(newNode);
        }
        this.tail_ = newNode;
    }

    public removeFront(): ListNode<T> | null {
        if (this.head_ === null) {
            console.log("Empty list!");
            return null;
        }
        const nodeToDelete = this.head_;
        this.head_ = this.head_.getNext();
        if (this.head_ === null) this.tail_ = null;
        return nodeToDelete;
    }

    public removeEnd(): ListNode<T> | null {
        if (this.empty()) {
            console.log("Empty list!");
            return null;
        }
        if (this.head_ === this.tail_) {
            const nodeToDelete = this.tail_;
            this.head_ = this.tail_ = null;
            return nodeToDelete;
        }
        let pre: ListNode<T> | null = this.head_;
        while (pre && pre.getNext() !== this.tail_) {
            pre = pre?.getNext();
        }
        const nodeToDelete = this.tail_;
        this.tail_ = pre;
        pre?.setNext(null);
        return nodeToDelete;
    }

    public remove(value: T): ListNode<T> | null {
        if (this.empty()) {
            console.log("Empty list!");
            return null;
        }
        if (this.head_ && this.head_.getValue() === value) {
            const nodeToDelete = this.head_;
            if (this.tail_ === this.head_) this.tail_ = null;
            this.head_ = this.head_.getNext();
            return nodeToDelete;
        }
        let nodeToDelete = this.head_,
            pre: ListNode<T> | null = null;
        while (nodeToDelete && nodeToDelete.getValue() !== value) {
            pre = nodeToDelete;
            nodeToDelete = nodeToDelete.getNext();
        }
        if (this.tail_ && this.tail_.getValue() === value) {
            this.tail_ = pre;
        }
        if (nodeToDelete && nodeToDelete.getNext() !== undefined && pre) {
            pre.setNext(nodeToDelete.getNext());
            return nodeToDelete;
        }
        return null;
    }

    public reverse(): void {
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

    public getHead(): ListNode<T> | null {
        return this.head_;
    }

    public getTail(): ListNode<T> | null {
        return this.tail_;
    }

    public empty(): boolean {
        return this.head_ === null;
    }

    public print(): void {
        let temp = this.head_;
        while (temp) {
            console.log(temp.getValue());
            temp = temp.getNext();
        }
    }
}

(function test() {
    const listString = new LinkedList<string>();
    const listNumber = new LinkedList<number>();
    for (let i = 97; i <= 122; i++) {
        listString.insertBack(String.fromCharCode(i));
        console.assert(listString.removeFront()?.getValue() === String.fromCharCode(i));
    }
    for (let i = 97; i <= 122; i++) {
        listString.insertFront(String.fromCharCode(i));
        console.assert(listString.removeEnd()?.getValue() === String.fromCharCode(i));
    }
    for (let i = 1; i <= 10; i++) {
        listNumber.insertBack(i);
    }
    console.assert(listNumber.empty() === false);
    listNumber.remove(5);
    listNumber.remove(6);
    listNumber.remove(8);
    listNumber.remove(2);
    listNumber.remove(10);
    listNumber.remove(9);
    listNumber.remove(3);
    listNumber.remove(4);
    listNumber.print();
    listNumber.remove(1);
    listNumber.remove(7);
    console.assert(listNumber.getHead() === null);
    console.assert(listNumber.getTail() === null);
    console.assert(listNumber.empty() === true);
})();
