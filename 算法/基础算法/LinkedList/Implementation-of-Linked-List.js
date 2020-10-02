class LinkListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    static insertAtHead(head, data) {
        let newNode = new LinkListNode(data);
        newNode.next = head;
        return newNode;
    }

    static insertAtTail(head, node) {
        if (!head) {
            return node;
        }

        let temp = head;
        while (temp.next) {
            temp = temp.next;
        }

        temp.next = node;

        return head;
    }

    static createRandomLinkedList(length) {
        let listHead = null;
        for (let i = 0; i < length; i++) {
            listHead = this.insertAtHead(
                listHead,
                Math.floor(Math.random() * 100)
            );
        }
        return listHead;
    }

    static createLinkedList(list) {
        let listHead = null;
        list.reverse();
        for (let i = 0; i < list.length; i++) {
            listHead = this.insertAtHead(listHead, list[i]);
        }
        return listHead;
    }

    static display(head) {
        let temp = head;
        let resultStr = "";
        while (temp) {
            resultStr += temp.data;
            temp = temp.next;
            if (temp) {
                resultStr += ", ";
            }
        }
        return resultStr;
    }
}

export default LinkedList;
