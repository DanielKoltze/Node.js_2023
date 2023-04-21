/*
why: Because javascript is single-threaded

Examples:

Fetching over a network
Heavy calculations
Reading / Wrting to files
Hasing / comparing
Databases

*/


/*
Solution 1:
Callbacks / cb
con: Callback hell / pyramid of doom
*/

/*
Solution 2:
Promises

Two states.
- pending
-fulfilled
    - rejected
    - resolved
*/
/*
new Promise((resolve,reject) => {
    setTimeout(() => {
        try{
            resolve("YAY")
        }catch{
            reject("NAY")
        }
    },3000)
    
}).then(succesMessage => console.log(succesMessage))
.catch(errorMessage => console.log(errorMessage))
*/


function celebrate(){
    console.log("Celebrating:")
    return new Promise((resolve,reject) => {
        try{
            throw Error
            resolve("WUHU")
        }catch{
            reject("NOOO")
        }
    })
}
celebrate()
.then(message => console.log(message))
.catch(error => console.log("errorMessage: " + error))