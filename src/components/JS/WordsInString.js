function countWords(str) {
    return str.split(' ').filter(word => word  !== '').length;
}

countWords('Hello there'); // 2
countWords('Hello there you'); // 3