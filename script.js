// api url
const api_url = "https://picsum.photos/v2/list";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    let data = await response.json();
    console.log("Here is your data",data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    
    let tab =
    `<div class="row row-cols-1 row-cols-md-4 mt-5">` 
    
    // Loop to access all rows 
    for (let r of data) {
            tab +=  `    
        <div class="col">
        <div class="card mb-3" style="max-width: 15rem;">
        <img src=${r.download_url} class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${r.author}</h5>
        </div>
        </div>
        </div>
        
        <br />`;
       
    }
    // Setting innerHTML as tab variable
    document.getElementById("Pictures").innerHTML = tab;
}