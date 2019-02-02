export const factorial = (num: number) => {
  let a = 1
  for (let i = num; i > 1; i--) a *= i
  return a
}
