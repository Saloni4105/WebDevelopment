/* 
Promises & promises chaining
A Promise is in one of these states:
1. pending : initial state, neither fulfilled nor rejected.
2. fulfilled : meaning that the operation was completed succesfuuly.
3. rejected : meaning that the operation failed
*/

function fetchData(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            let success = true;
            if(success){
                resolve("Data fetched successfully");
            }else{
                reject("Error fetching data");
            }
        }, 3000);
    });
}

fetchData()
    .then((data) =>{console.log(data);
        // return`Hello`;
        return data.toLowerCase();
    })
    .then((value) =>{
        console.log(value);
    })
    .catch((error) => {console.error(error)})