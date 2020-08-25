/**
 * Rotate a LinkedList (medium) #
Given the head of a Singly LinkedList and a number ‘k’, rotate the LinkedList to the right by ‘k’ nodes.
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


const rotate = function (head, rotations) {
    if (!head || !head.next || rotations <= 0) {
        return head
    }

    // find the end of the list and the last node
    let lastNode = head
    let listLen = 0
    while (lastNode.next) {
        lastNode = lastNode.next
        listLen++
    }

    // join list
    lastNode.next = head

    // find the end node of the rotate list
    rotations %= listLen
    skipLen = listLen - rotations
    let lastNodeOfTheList = head
    while (skipLen > 0) {
        lastNodeOfTheList = lastNodeOfTheList.next
        skipLen--
    }

    // split list
    head = lastNodeOfTheList.next
    lastNodeOfTheList.next = null

    return head;
};

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

process.stdout.write('Nodes of original LinkedList are: ');
head.print_list();
result = rotate(head, 3);
process.stdout.write('Nodes of reversed LinkedList are: ');
result.print_list();