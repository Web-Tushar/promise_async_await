//   
// todo : syntax of promise
// /

// status  of promise 1) pending 2)fullfied/resolved 3) reject

// const x = new Promise((resolve, reject) => {
//      if(1){
//           setTimeout(() => {
//                let y = "your task is ready"
//                resolve(y)
               
//             }, 2000);
//      }else{
//           setTimeout(() => {
//                let y = "your task is faild"
//                reject()
//                throw new Error(y)
               
//             }, 2000);
//      }
       
// })



// function myResolve(result){
//    console.log("your task is ready :",  result);
// }
// function myResult(myResult){
//    console.log("your task is failed :",  myResult);
// }
// x.then((data)=>{
//      console.log(data);
// }).catch((err)=>{
//      console.log(err);
// }).finally(()=>{
//      console.warn("okay"); 
// })


function userfatchingData(){
     const myPromise = new Promise((resolve, reject) => {
          fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
                return response.json()
          }).then((normalData)=>{
               resolve(normalData)

          }).catch((err)=>{
               reject(err)
          })
          
})
return myPromise
}

function todosfatchingData(){
     const myPromise = new Promise((resolve, reject) => {
          fetch("https://jsonplaceholder.typicode.com/todos").then((response)=>{
                return response.json()
          }).then((normalData)=>{
               resolve(normalData)

          }).catch((err)=>{
               reject(err)
          })
          
})
return myPromise
}

function albumsfatchingData(){
     const myPromise = new Promise((resolve, reject) => {
          fetch("https://jsonplaceholder.typicode.com/albums").then((response)=>{
                return response.json()
          }).then((normalData)=>{
               resolve(normalData)

          }).catch((err)=>{
               reject(err)
          })
          
})
return myPromise
}


/*
calling data

*/

// albumsfatchingData().then((albumsdata)=>{
//      console.log(albumsdata);
// }).then(()=>{
//      return todosfatchingData();
// }).then((todoData)=>{
//   console.log(todoData);
// }).then(()=>{
//   return userfatchingData() 
     
// }).then((userData)=>{
//      console.log(userData);

// }).catch((err)=>{
//      console.log(err);

// })

// [calling promise with asyc await]==//

(async function allFunction(){
      const todoData = await todosfatchingData();
      const albums = await albumsfatchingData();
      const user = await userfatchingData();

      console.log(todoData);
      console.log(albums);
      console.log(user);
})()


