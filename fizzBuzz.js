import axios from "axios"

export const funcs = {
    fizzBuzz: (input) => {
        for (let i = 1; i <= input; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                console.log("fizz buzz")
            } else if (i % 3 == 0) {
                console.log("fizz")
            } else if (i % 5 == 0) {
                console.log("buzz")
            } else {
                console.log(i)
            }

        }
    },
    fetchUser: async() => {
        try {
            return await axios.get('https://jsonplaceholder.typicode.com/users/1')
        } catch (error) {
            return error
        }
    }

}

export default funcs 