export function check(test, ref) {
   if(test) {
      console.log(`(OK) | ${ref}`)
      return true
   } else {
      console.warn(`(ERROR) | ${ref}`)
      return false
   }
}