import { bodyInformation } from "./body.js";
import {apiKey, quoteApi} from "./API.js";






const randomQuote = async()=>{
    
    try{
        const response = await fetch(quoteApi ,{
        method: 'GET',
        headers: {'X-Api-Key': apiKey},
       contentType: 'text/javascript'
    });
        const data = await response.json();
  
    bodyInformation.quote.textContent = data[0].quote.toUpperCase();
    bodyInformation.name.textContent = data[0].author;
    bodyInformation.category.textContent += data[0].category.toUpperCase();
    
    
    }
  catch(err){
    console.log(`${err} failed to get data from server `);
    if(err){
        
        bodyInformation.name.textContent ='NOT A VALID REQUEST';
        bodyInformation.category.textContent += 'ERROR';
    }
  }

    
}

randomQuote()