export const checkURL = (url) => {
    return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

export const convertNums = (x) => {
    if (x > 1000000) return (x * 0.000001).toFixed(1) + 'm'
    if (x > 1000) return (x * 0.001).toFixed(1) + 'k'
    return x
}

export const diffHours = (dt2, dt1) => {
    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60);
    return Math.abs(Math.round(diff));
}



// const htmlDecode = (input) => {
//     const doc = new DOMParser().parseFromString(input, "text/html");
//     return doc.documentElement.lastChild.innerHTML.replace('allowfullscreen', 'allowFullScreen').replace('class', 'className');
// }