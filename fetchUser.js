import axios from "axios"
import  {funcs} from "./fizzBuzz.js" //If using export we should require it with {} but if using export deafult we dont need. and we can define it both using export or export default


// async function fetchUser() {
//     try {
//         let data = await axios.get('https://jsonplaceholder.typicode.com/users/1')

//         return console.log(data.data)
//     } catch (error) {
//         return error
//     }
// }

// console.log(fetchUser())


 let data = await funcs.fetchUser()
console.log( data.data )