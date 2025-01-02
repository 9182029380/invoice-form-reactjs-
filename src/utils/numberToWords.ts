const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function convertLessThanThousand(num: number): string {
  if (num === 0) return '';
  
  let result = '';
  
  if (num >= 100) {
    result += ones[Math.floor(num / 100)] + ' hundred ';
    num %= 100;
    if (num > 0) result += 'and ';
  }
  
  if (num >= 20) {
    result += tens[Math.floor(num / 10)] + ' ';
    num %= 10;
  } else if (num >= 10) {
    result += teens[num - 10] + ' ';
    return result;
  }
  
  if (num > 0) {
    result += ones[num] + ' ';
  }
  
  return result;
}

export function numberToWords(num: number): string {
  if (num === 0) return 'zero rupees';
  
  let result = '';
  
  if (num >= 100000) {
    result += convertLessThanThousand(Math.floor(num / 100000)) + 'lakh ';
    num %= 100000;
  }
  
  if (num >= 1000) {
    result += convertLessThanThousand(Math.floor(num / 1000)) + 'thousand ';
    num %= 1000;
  }
  
  result += convertLessThanThousand(num);
  
  return result.trim() + ' rupees only';
}