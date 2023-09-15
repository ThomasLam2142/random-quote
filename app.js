const apiKey = "PTbwdqMrdlxrRtkPM10+Aw==lD8ZiFQmacEY6A7g";
const apiUrl = "https://api.api-ninjas.com/v1/quotes?category=happiness";
const textBody = document.querySelector(".quote-container");
const authorBody = document.querySelector(".author-container");


function quoteFetch(){
    console.log("Generate a quote");

    


    let options = {
        method: 'GET',
        headers: { 'x-api-key': apiKey }
    }
    
    let url = 'https://api.api-ninjas.com/v1/quotes?category=happiness'
    
    
    fetch(url,options)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
        console.log(data);
        
        const quoteMem =data[0].quote;
        const authorMem =data[0].author;

        console.log(quoteMem);    
        console.log(authorMem);  


        
        textBody.textContent = quoteMem;
        authorBody.textContent = "-"+authorMem;       
        
        })
        .catch(err => {
            console.log(`error ${err}`)
        }); 


      
}