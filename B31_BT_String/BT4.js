/*
    Creat a function `truncate(text, maxlength)` that check the length of the text and if it
    exceeds maxlength - replaces the end of str with the ellipsis character `"_"` to make 
    it length equal to maxlength

    Horizontal ellipsis code is 8230. String.fromCodePoint(8230)
    UTF-16 '\u2026'
    http://www.compart.com/en/unicode/U+2026

*/

function truncate(text, maxlength){
    if(text.length <= maxlength) return text;

    const shortStr = text.slice(0, maxlength - 1);

    return `${shortStr}\u2026`;
}
console.log(truncate('Sondinh2k3', 4));