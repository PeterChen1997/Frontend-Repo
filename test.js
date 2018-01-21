function fn(source, result) {
    if (source.length == 0)
        res.push(result.join(''));
    else
        for (var i = 0; i < source.length; i++)
            fn(source.slice(0, i).concat(source.slice(i + 1)), result.concat(source[i]));
}
let res = []
fn('a',[])

console.log(res)