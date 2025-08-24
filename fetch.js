function getBoredActivity(){
    return fetch('https://bored-api.appbrewery.com/random')
    .then(response =>{
        if(!response.ok){
            throw new Error ("Request unsuccessful");
        }
        return response.json();
    })
    .then(data => {
        console.log('Success: ', data);
    })
    .catch(error => {
        console.error("Error: ", error);
    })
}

getBoredActivity();