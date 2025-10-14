import { FormData } from "../components/Contact";

export async function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';

	return new Promise((resolve, reject)=>{
		if(data.honeypot.length >0){
			console.log('Honey pot detected. Returning...')
		}
	
  	fetch(apiEndpoint, {
  	  method: 'POST',
  	  body: JSON.stringify(data),
  	})
  	  .then((res) => res.json())
  	  .then((response) => {
				resolve(response)
  	  })
  	  .catch((err) => {
  	    reject(err)
  	  });
	})
}