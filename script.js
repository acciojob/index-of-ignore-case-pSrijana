function indexOfIgnoreCase(str, subStr) {
    if (subStr === "") return 0;
    
    str = str.toLowerCase();
    subStr = subStr.toLowerCase();

    for (let i = 0; i <= str.length - subStr.length; i++) {
        let found = true;

        for (let j = 0; j < subStr.length; j++) {
            if (str[i + j] !== subStr[j]) {
                found = false;
                break;
            }
        }

        if (found) {
            return i;
        }
    }

    return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));