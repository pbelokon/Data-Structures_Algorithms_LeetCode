export default function gcdOfStrings(str1: string, str2: string): string {

  const gcd = (a, b) => { 
      while (b != 0) { 
          let temp = b; 
          b = a % b; 
          a = temp; 
      }

      return a; 
  }
  
  const deviser = str1.substring(0, gcd(str1.length, str2.length)); 

  const devider = (str, sub) => { 
      const n = str.length / sub.length; 
      return  sub.repeat(n) === str; 
  } 


  if (devider(str1, deviser) && devider(str2, deviser)) return deviser; 

  
  return ""; 
};