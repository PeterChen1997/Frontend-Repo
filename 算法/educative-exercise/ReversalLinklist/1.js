/**
 * Given the head of a LinkedList and a number ‘k’, reverse every alternating ‘k’ sized sub-list starting from the head.

If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.
 */

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    print_list() {
        let temp = this;
        while (temp !== null) {
            process.stdout.write(`${temp.value} `);
            temp = temp.next;
        }
        console.log();
    }
}


const reverse_alternate_k_elements = function (head, k) {
    if (!head || k <= 1) {
        return head
    }

    let current = head
    let previous = null
    while (true) {
        // store last node of the two parts
        const lastNodeOfThePreviousPart = previous
        const lastNodeOfTheSecondPart = current

        // reverse k nodes
        let i = 0
        let next = null
        while (current && i < k) {
            next = current.next
            current.next = previous
            previous = current
            current = next
            i++
        }

        // connect two parts
        // first part
        if (lastNodeOfThePreviousPart !== null) {
            lastNodeOfThePreviousPart.next = previous
        } else {
            head = previous
        }
        // second part
        lastNodeOfTheSecondPart.next = next

        // skip k nodes
        i = 0
        while (current && i < k) {
            previous = current
            current = current.next
            i++
        }

        if (!current) {
            break
        }
    }
    return head
};

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

process.stdout.write('Nodes of original LinkedList are: ');
head.print_list();
result = reverse_alternate_k_elements(head, 2);
process.stdout.write('Nodes of reversed LinkedList are: ');
result.print_list();