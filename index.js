// promises

// promises needs two parts
// 1st part -> promise "content"
let myPromise = new Promise((resolve,reject) => {
    let success = false;
    setTimeout(() => {
        if(success){
            resolve("Is successful!")
        }
        else{
            reject("Is unsuccessful :(")
        }
    }, 5000)
    
});

// 2nd part -> calling of the promise "content"

myPromise
.then((resolve) => {
    console.log(resolve);
}
)
.catch((reject) => {
    console.log(reject);
})
.finally(
    console.log("complete")
)

function doJumpers(){
    console.log("JUMP!");
}

console.log("go do something else");

doJumpers();