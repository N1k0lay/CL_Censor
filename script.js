const censor = () => {
    let library = [];
    return function (str1, str2 = 0) {
        if(str2 !== 0) {
            library.push([str1, str2]);
        } else {
            library.map(n => {
                str1 = str1.replaceAll(new RegExp(n[0], 'g'), n[1]);
            })
            return str1;
        }
    }
}

const changeScene = censor();

changeScene('PHP','JS');
changeScene('backend', 'frontend')
console.log(changeScene('PHP is the most popular programming language for backend web-development'));

const changeScene2 = censor();
changeScene2('PHP2','JS2');
changeScene2('backend2', 'frontend2')
console.log(changeScene2('PHP2 is the most popular programming language for backend2 web-development'));