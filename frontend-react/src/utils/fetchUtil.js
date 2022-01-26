const TOKEN = localStorage.getItem('token') || null;
const URL = 'http://localhost:5000/';

const fetchHook = (url, options) => {
    
    options.headers = {
         "Content-Type": "application/json" ,
    }
    console.log(options);
    return fetch(`${URL}${url}`, options)
        .then(response => {
        if (response.status >= 400) {
            return  response.statusText || "Something went wrong";
        }
        return response.json();
        })
        .catch(error => {
            return error.message || error.statusText || "Something went wrong";
        });
    }
    const fetchHookWithToken = (url, options) => {
        options.headers = {
            'Authorization': `Bearer ${TOKEN}`
        }
        return fetchHook(url, options);
    }
    const fetchHookWithBody = (url, options, body) => {
        options.body = JSON.stringify(body);
        return fetchHook(url, options);
    }
    const fetchHookWithTokenAndBody = (url, options, body) => {
        options.headers = {
            'Authorization': `Bearer ${TOKEN}`
        }
        options.body = JSON.stringify(body);
        return fetchHook(url, options);
    }
    const fetchHookWithTokenAndFormData = (url, options, formData) => {
        options.headers = {
            'Authorization': `Bearer ${TOKEN}`
        }
        options.body = formData;
        return fetchHook(url, options);
    }
    const fetchHookWithTokenAndFormDataAndBody = (url, options, formData) => {
        options.headers = {
            'Authorization': `Bearer ${TOKEN}`
        }
        options.body = formData;
        return fetchHook(url, options);
    }
  
export {
    fetchHook,
    fetchHookWithToken,
    fetchHookWithBody,
    fetchHookWithTokenAndBody,
    fetchHookWithTokenAndFormData,
    fetchHookWithTokenAndFormDataAndBody,
}