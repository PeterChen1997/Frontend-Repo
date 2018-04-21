```js

class VNode {
    constructor(nodeName, attributes, children) {
        this.nodeName = nodeName;
        this.attributes = attributes;
        this.children = children;
    }
}

function render(vNode, parent) {
    let builtDOM = buildDOMByVNode(vNode);
    parent.appendChild(builtDOM);
    return builtDOM;
}

function buildDOMByVNode(vNode) {
    if (typeof vNode === 'string') {
        return document.createTextNode(vNode);
    }

    let {nodeName, attributes: attrs, children} = vNode;
    if (typeof nodeName === 'string') {
        let node = document.createElement(nodeName);
        if (attrs) {
            for (let key in attrs) {
                if(!attrs.hasOwnProperty(key)) continue;
                setAttributes(node, key, attrs[key]);
            }
        }
        if (children) {
            children.forEach(child => {
                let subNode = buildDOMByVNode(child);
                node.appendChild(subNode);
            });
        }
        return node;
    }
}

function h(nodeName, attributes, ...args) {
    let children = args.length ? [].concat(...args) : null;
    return new VNode(nodeName, attributes, children);
}


function setAttributes(node, attr, value) {
    node.setAttribute(attr, value);
}

export default {
    render,
    h
}


```
