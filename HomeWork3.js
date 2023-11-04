"use strict"

// 1. 'number' + 3 + 3;
// Result: 'number33';
// Explanation: JS interprets the "'number'" as a string, then JS concatenates string with numbers (it happens if one of values is string);

// 2. null + 3;
// Result: 3
// Explanation: JS interprets null as 0 when we use arithmetic operations, then it performs 0+3 operation;

// 3. 5 && "qwerty";
// Result: 'qwerty'
/* Explanation: JS interprets 5 and "qwerty" values as TRUE. The && operator returns the last truthy value. 
   Both 5 and "qwerty" are truthy, so it returns "qwerty."
   */

// 4. +'40' + +'2' + "hillel";
// Result: '42hillel'
/* Explanation: JS converts +'40' and +'2' into numbers (becouse of unary plus ('+') operator applied to the strings) and interprets "hillel" as string. 
   Then, it adds these numbers together (40+2=42) and combines the result with 'hillel' to get '42hillel'
   */

// 5. '10' - 5 === 6;
// Result: false
/* Explanation: JS interprets string '10' as number when it tries to perform subtraction from a string, 
   in this case JS can interprets it as a number becouse the current string consists only numbers, 
   then performs 10 - 5 and compares the result with 6. 5 is not equal to 6.
   */

// 6. true + false;
// Result: 1
// Explanation: JavaScript treats true as 1, and false as 0 in arithmetic operations, then performs additing of the values (1+0=1).

// 7. '4px' - 3;
// Result: NaN (Not-a-Number)
/* Explanation: JS interprets '4px' as string and 3 as number.
   JS cant substruct number from a string directly if the sting consist letters. The results in NaN.
   */

// 8.  '4' - 3;
// Result: 1
// Explanation: JS trats the string '4' as number when it tries to perform substraction. Then it performs substraction number from number (4-3=1).

// 9. '6' + 3 ** 0
// Result: '61'
/* Explanation: JS interprets string '6' as a string. Then performs raising 3 to the power of 0 (the result is 1). 
   Then performs string '6' and number 1 concatenations.
   */

// 10. 12 / '6';
// Result: 2
// Explanation: The string '6' is converted to a number before division if string doesnt consist any letters.

// 11.  '10' + (5 === 6);
// Result: '10false'
/* Explanation: JS treats the string '10' as a string. Then performs comparison (5 === 6) resulted in false.
   Then JS concatenates string '10' and false.
   */

// 12. null == '';
// Result: false
/* Explanation: JS interprets '' as empty string and null as null. Null is a special value in JavaScript representing the absence of a value.
   '' is an empty string, which means it contains no characters. The == operator is used for loose equality, 
   which attempts to convert the operands to a common type before making the comparison. However, null and an empty string cannot be considered equal.
   JS does not convert the empty string '' to null because these are distinct data types. Null is not equal to an empty string.
   */

// 13. !!'false' == !!'true';
// Result: true
/* Explanation: First, JS applies the !! operator to both 'false' and 'true'. It converts them to their respective boolean values.
   !!'false' becomes !!true, which is true.
   !!'true' also becomes !!true, which is true.
   True is being compared to true. Since both sides of the comparison are true, the result is true.
   */

// 14. 0 || '0' && 1;
// Result: 1
/* Explanation: JS consider first operand 0 as false. Then string '0' as true becouse string is non-empty. 
   Then third operand 1 as true. 
   So, the result of the expression 0 || '0' && 1 is 1. This is because the logical AND operation results in 1, 
   and the logical OR operation is not needed in this case.
   */

// 15. (+null == false) < 1;
// Result: false
/* Explanation: JS converts +null into 0 (becouse of unary plus ('+') is before value); 
   Then JS compares 0 and false resulted in true;
   Finally, JS compares true < 1. This comparison is 'false' because true is treated as 1 and equal 1;
   */

// 16. false && true || true;
// Result: true
/* Explanation: JS solve first part of expression (false && true) resulted in false (becouse JS && operator stops at the first falsy value);
   Then solve second part of expression (false || true) and returns truthy value (in this case 'true')
   */

// 17. false && (false || true);
// Result: false
/* Explanation: JS evaluates first (false || true) resulted in true (because || operator returns first truthy value);
   Then JS evaluates false && (true) resulted in false (because && operator returns first falsy value);
   */

// 18. (+null == false) < 1 ** 5;
// Result: false
/* Explanation: JS first evaluates (+null == false) resulted in true, becouse (0 == 0);
   Then JS rsises 1 to the power of 5, which is resulten in 1;
   Then JS evaluates true < 1 resulted in false (becouse true is 1 and 1=1);
   */