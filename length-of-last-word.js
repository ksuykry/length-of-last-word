var lengthOfLastWord = function(s) {
    let strSplit = s.split(" ");
    for(let i = strSplit.length-1; i >= 0; i--){
        let currWord = strSplit[i];
        if(currWord.length > 0){
            return currWord.length;
        }
    }
};
