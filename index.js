// // // adding 100para
// // const t1 = performance.now();
// // for(let i=1; i<=100;i++){
// //     let newElement = document.createElement('p');
// //     newElement.textContent = "This is para" + i;

// //     document.body.appendChild(newElement);
// // }
// // const t2 = performance.now();console.log("this took" + (t2-t1) + "ms");
// // // optimising a bit
// // const t3 = performance.now();
// // let myDiv = document.createElement('div');

// // for(i=1; i<=100;i++){
// //     let element = document.createElement('p');
// //     Element.textContent = 'This is para' + i;
// //     myDiv.appendChild(element);
// // }

// let fragment = document.createDocumentFragment();
// for(let i=1; i<=100;i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = "This is para" + i;

//     document.body.appendChild(newElement);
// }

// document.appendChild(fragment);










// function addPara(){
//     let para = document.createElement('p');
//     para.textContent = "js is single";
//     document.body.appendChild(para);
// }

// function appendNewMessage(){
//     let para = document.createElement('p');
//     para.textContent ='kya hal';
//     document.body.appendChild(para);
// }

// addPara();
// appendNewMessage();






// 2/2/24

// function sync(){
//     console.log('third');
// }


// let meraPromise = new Promise(function(resolve, reject){
//         setTimeout(function(){
//             console.log('I am insider Promise');
//         }, 5000);
//         // resolve(2338);
//         reject();
// })

// console.log('first');
let waadaa1 = new Promise(function(resolve,reject){
    setTimeout(()=> {
        console.log('settimeout1 started');
    },2000);
    resolve(true);
})
    let output = waadaa1.then(() => {
        let waadaa2 = new Promise(function(resolve,reject){
            setTimeout(() => {
                console.log('settimeout2 started');
            }, 3000);
            resolve('waadaa2 resolved');
        })
        return waadaa2;
    })
    output.then((value) => console.log(value));
    // good to go