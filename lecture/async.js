// Note: we're going to be using fakeAxios instead of axios. It's just a simulation.
// It doesn't really contact the internet so it's much faster. It uses promises
// so should get the point across exactly the same.
const fakeAxios = require('./fakeAxios')






// What order are these printed in? Draw a picture like from the video.
// Think about it, then uncomment it and run it.
// How could we change it?
// console.log('1')
// fakeAxios.get('some url').then(response => {
//   console.log('2')
// })
// console.log('3')

// Answer
// 1
// 3
// 2






// Look, it's the same with async callbacks. Think about it, then uncomment it and run it.
// console.log('1')
// setTimeout(() => console.log('2'), 100)
// console.log('3')

// Answer (same thing)
// 1
// 3
// 2




// Watch this video until 17:30:
// https://www.youtube.com/watch?v=8aGhZQkoFbQ&vl=en









// Challenge. Write a function called setTimeout2 that takes milliseconds first and a callback
// second, but otherwise behaves like setTimeout.

// Solution

function setTimeout2(ms, fn) {
  setTimeout(fn, ms)
}








// How can we get this code to not resemble callback hell (nesting)?
// Try to clean it up and produce the same result (console.log the results array).
// const results = []
// fakeAxios.post('www.getlatlon.fake', { ip: 'fake' }).then(response1 => {
//   results.push(response1.data)
//   fakeAxios.post('www.getaddressfromlatlon.fake', { latlon: response1.data }).then(response2 => {
//     results.push(response2.data)
//     fakeAxios.get('www.registerhereforspam.fake', { address: response2.data }).then(response3 => {
//       results.push(response3.data)
//       console.log('results', results)
//     })
//   })
// })

// Solution
const results = []
fakeAxios.post('www.getlatlon.fake', { ip: 'fake' }).then(response => {
  results.push(response.data)
  return fakeAxios.post('www.getaddressfromlatlon.fake', { latlon: response.data })
}).then(response => {
  results.push(response.data)
  return fakeAxios.post('www.registerhereforspam.fake', { address: response.data })
}).then(response => {
  results.push(response.data)
  console.log('results', results)
})








// Challenge: write your own Promise.all. Call it `multiPromise`. It should return a single promise.
// It should handle errors. It should take in an array of promises, or to simplify, you can have it
// take in two parameters, each a promise.

// Solution
function multiPromise(array) {
  return new Promise((resolve, reject) => {
    let promise1IsDone = false
    let promise2IsDone = false
    const results = [undefined, undefined]
    array[0].then(resp => {
      promise1IsDone = true
      results[0] = resp
      checkDone()
    }).catch(reject)
    array[1].then(resp => {
      promise2IsDone = true
      results[1] = resp
      checkDone()
    }).catch(reject)
    function checkDone() {
      if (promise1IsDone && promise2IsDone) {
        resolve(results)
      }
    }
  })
}
