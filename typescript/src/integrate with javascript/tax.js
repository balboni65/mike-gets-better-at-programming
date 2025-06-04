// @ts-nocheck
//  - Add to files where we don't want the ts compiler to check
//  - This stops an error for "implicit any" on the "income" argument

export function calcualteTax(income) {
  return income * 0.3;
}
