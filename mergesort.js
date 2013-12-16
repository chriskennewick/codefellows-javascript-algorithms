function mergeSort(array) {

    if (array.length < 2)
        return array;

    var mid = Math.floor(array.length / 2),
        left = array.slice(0, mid),
        right = array.slice(mid);

    var leftSorted = mergeSort(left),
        rightSorted = mergeSort(right);

    var sortedResult = [];

    while (leftSorted.length > 0 || rightSorted.length > 0) {
        if (leftSorted.length === 0) {
            sortedResult = sortedResult.concat(rightSorted);
            rightSorted = [];
            break;
        }
        if (rightSorted.length === 0) {
            sortedResult = sortedResult.concat(leftSorted);
            leftSorted = [];
            break;
        }

        var elem = (leftSorted[0] < rightSorted[0]) ? leftSorted.shift() : rightSorted.shift();
        sortedResult.push(elem);

    }

    return sortedResult;

}

var arr = [9, 4, 3, 2, 8, 5, 4, 3, 2, 2, 1, 0];
console.log("Before sort:");
console.log(arr);
var result = mergeSort(arr);
console.log("After sort:");
console.log(result);