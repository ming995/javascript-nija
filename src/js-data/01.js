/**
 * JS 字符串和数字的处理
 * FROM: 内容来源掘进小册
 */

/**
 *  string.charCodeAt() 
 *  return: 0-65535的整数，表示一个UTF-16的编码单元，ASCII编码的前128位和unicode前128位一致
 *  所以可以使用charCodeAt()对于英文字母，符号，数字做出区分
 * 
 *  ASCII：65-90 => A-Z / 97-122 => a-z / 空格 => 32
 *  
 *  demo: 去除一句话中的标点符号
 */

// ================================================================================================================
const charCodeStr = 'How old are you ?';
let finalStr = '';

for(let i = 0; i < charCodeStr.length; i++) {

    // 总结：在做完循环的时候讲需要用到的结果赋值给一个变量，对于后面的代码来说可以简洁
    const letter = charCodeStr[i];
    const asciiCode = letter.charCodeAt();

    if((asciiCode >= 65 && asciiCode <= 90) || (asciiCode >= 97 && asciiCode <= 122) || asciiCode === 32) {
        finalStr += letter;
    }
}

console.log(finalStr);

// ================================================================================================================

/**
 *  string.fromCharCode(num, num1, num2 ... numN)
 *  return: 返回指定的unicode值序列
 *  
 *  demo: 大写字母转小写字母
 * 
 *  注意：大小写转换的时候可以使用 toLowerCase
 */

// ================================================================================================================

const fromCharCodeStr = 'HELLO WORLD';
let formatStr = ''

for(let i = 0; i < fromCharCodeStr.length; i++) {
    let letter = fromCharCodeStr[i];
    let asciiCode = letter.charCodeAt();

    if(asciiCode >= 65 && asciiCode <= 90) {
        formatStr += String.fromCharCode(asciiCode + 32);
    } else {
        formatStr += letter;
    }
}
console.log(formatStr);

// ================================================================================================================

/**
 *  split()
 *  return: 字符串数组
 *  
 *  使用指定的分隔符，将一个字符串分割为一个字符串数组
 */

// ================================================================================================================

const mainStr = "你好，世界";
let strArray = [];

strArray = mainStr.split('');
console.log(strArray);
// ================================================================================================================

/**
 *  数字幂运算
 *  
 */

// ================================================================================================================



// ================================================================================================================






