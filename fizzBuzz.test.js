import { jest, test, expect } from '@jest/globals'
import funcs from './fizzBuzz.js'
// const {async} =  require("async_hooks")


test("Fizzbuzz function exist", ()=>{
    expect(funcs.fizzBuzz).toBeDefined()
})

test("output should be contain 'fizz'/'buzz'", () => {
    console.log = jest.fn()
    funcs.fizzBuzz(10)
    expect(console.log).toBeCalledWith("fizz")
    expect(console.log).toBeCalledWith("buzz")
})

test("output for >= 15 should be contain 'fizz buzz' ", () => {
    console.log = jest.fn()
    funcs.fizzBuzz(15)
    expect(console.log).toBeCalledWith("fizz buzz")
})

test("async for axios fetched should be  Leanne Graham", async() => {
    expect.assertions(1)
    // return funcs.fetchUser() // if promise use then catch as resolver we need to use return, if not assertion didnt catch any of callback
    //     .then(data => {
    //         expect(data.data.name).toEqual('Leanne Graham')
    //     })
    const result = await funcs.fetchUser() // if we use async await as resolver just need to give await
    expect(result.data.name).toEqual('Leanne Graham')    
})
