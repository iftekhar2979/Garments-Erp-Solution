// const numberToWord=function numberToWord(number){


//  if(number.toString().length > 7){
// word='overLimited'
//      return word
//  }
//     let num = ('0000000'+ number).slice(-7).match(/^(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/);
//     if(!num) return;

//     word= num[1] != 0 ? (oneToTwenty[Number(num[1])] || `${tenth[num[1][0]]} ${oneToTwenty[num[1][1]]}` )+' million ' : ''; 

//     word +=num[2] != 0 ? (oneToTwenty[Number(num[2])] || `${tenth[num[2][0]]} ${oneToTwenty[num[2][1]]}` )+'hundred ' : ''; 
//     word +=num[3] != 0 ? (oneToTwenty[Number(num[3])] || `${tenth[num[3][0]]} ${oneToTwenty[num[3][1]]}`)+' thousand ' : ''; 
//     word +=num[4] != 0 ? (oneToTwenty[Number(num[4])] || `${tenth[num[4][0]]} ${oneToTwenty[num[4][1]]}`) +'hundred ': ''; 
//     word +=num[5] != 0 ? (oneToTwenty[Number(num[5])] || `${tenth[num[5][0]]} ${oneToTwenty[num[5][1]]} `) : '';

//     return word

// }



function toWords(s) {
    var th = ['', 'thousand', 'million', 'billion', 'trillion'];

    var dg = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var tn = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var tw = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    s = s.toString();
    s = s.replace(/[\, ]/g, '');
    if (s != parseFloat(s)) return 'not a number';
    var x = s.indexOf('.');
    if (x == -1) x = s.length;
    if (x > 15) return 'too big';
    var n = s.split('');
    var str = '';
    var sk = 0;
    for (var i = 0; i < x; i++) {
        if ((x - i) % 3 == 2) {
            if (n[i] == '1') {
                str += tn[Number(n[i + 1])] + ' ';
                i++;
                sk = 1;
            } else if (n[i] != 0) {
                str += tw[n[i] - 2] + ' ';
                sk = 1;
            }
        } else if (n[i] != 0) {
            str += dg[n[i]] + ' ';
            if ((x - i) % 3 == 0) str += 'hundred ';
            sk = 1;
        }
        if ((x - i) % 3 == 1) {
            if (sk) str += th[(x - i - 1) / 3] + ' ';
            sk = 0;
        }
    }
    if (x != s.length) {
        var y = s.length;
        str += 'dollar and ';
        for (var i = x + 1; i < y; i++) str += dg[n[i]] + ' ';
        str += 'cent'
    }
    return str.replace(/\s+/g, ' ');
}
function MakingDollarConvert(num) {
    let str
    let val = num.toFixed(2)
    let valBeforePoint = num.toFixed(2)
    let pointAvailible = false
    for (let i = 0; i <= val.length; i++) {
        if (val[i] == '.') {
            pointAvailible = true
            let afterPoint = i + 1
            let beforePoint = i
            val = val.slice(afterPoint)
            valBeforePoint = valBeforePoint.slice(0, beforePoint)
        }
    }
    if (pointAvailible) {
        val = Number(val)
        valBeforePoint = Number(valBeforePoint)
        str = `${toWords(valBeforePoint)} & Cents ${toWords(val)}`
        return str

    } else {
        val = Number(val)
        str = `${toWords(val)}`
        return str
    }


}
export default MakingDollarConvert