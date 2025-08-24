// function getBoredActivity(){
//     return fetch('https://bored-api.appbrewery.com/random')
//     .then(response =>{
//         if(!response.ok){
//             throw new Error ("Request unsuccessful");
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log('Success: ', data);
//     })
//     .catch(error => {
//         console.error("Error: ", error);
//     })
// }



async function getBoredActivity(callback){
    try{
        const response = await fetch('https://bored-api.appbrewery.com/random');

        if(!response.ok){
            throw new Error ("Request unsuccessful");
        }
         
        const data = await response.json();
        callback(data);
    }
    catch(error) {
        console.error("Error: ", error);
    }
}

function logActivity(data){
    console.log(data.activity);
}

getBoredActivity(logActivity);