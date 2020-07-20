function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function gen(valArr) {
    if (!valArr.length) {
        return new ListNode()
    }
    return new ListNode(valArr.shift(), gen(valArr))
}

module.exports = {
    ListNode,
    gen
}