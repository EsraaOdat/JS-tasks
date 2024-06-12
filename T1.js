const url = "https://66681676f53957909ff67af8.mockapi.io/users/Animals";
let jsonobj = []; 

async function getdata() {
    const response = await fetch(url);
    jsonobj = await response.json();
    console.log("jsonobj:", jsonobj);
    
    const selectElement = document.getElementById("mySelect");


    for (let i = 0; i < jsonobj.length; i++) {
        const option = document.createElement("option");
        option.value = jsonobj[i].name; 
        option.textContent = jsonobj[i].name; 
        selectElement.appendChild(option);
    }
}

getdata();

function myFunction() {
    var x = document.getElementById("mySelect").value;
    for (let i = 0; i < jsonobj.length; i++) {
        if (x === jsonobj[i].name) {
            document.getElementById("img").src = jsonobj[i].image;
            break;
        }
    }
}