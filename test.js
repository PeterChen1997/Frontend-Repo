function click() {
    let item = document.querySelector('.layui-layer-shade') || 'null'
    if(item == 'null') {
        console.log('null')
        return;
    } else {
        console.log('click')
        item.click()
        return;
    }
}

setInterval(click, 5000)