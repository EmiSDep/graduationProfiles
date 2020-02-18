const getButton = document.getElementById('getBtn');
const postButton = document.getElementById('postBtn')

const sendHttpRequest = (method, url, data) => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: data ? { 'Content-Type': 'application/json' } : {}
    }).then(response => {
        if (response.status >= 400) {
        // response.ok
        return response.json().then(errResData => {
            const error = new Error('Something went wrong');
            error.data = errResData;
            throw error;
        });
    }
    return response.json();
});
};

const getData = () => {
    sendHttpRequest('GET', 'http://localhost:3000/graduates')
    .then(responseData => {
        console.log(responseData)
        document.getElementById('name').innerText = "Name : " + responseData[0].name;
        document.getElementById('gradYear').innerText = "Graduation Year : " + responseData[0].gradYearMonth;
        document.getElementById('title').innerText = "Title : " + responseData[0].jobTitle;
        document.getElementById('gitHub').innerText = "github : " + responseData[0].gitHub;
    });
};

const sendData = () => {
    sendHttpRequest('POST', 'http://localhost:3000/graduates', {
        name: document.getElementById('name').value,
        gradYearMonth: document.getElementById('year').value,
        jobTitle: document.getElementById('jobTitle').value,
        gitHub: document.getElementById('github').value



    })
    .then(responseData => {
        console.log(responseData)
    })
    .catch(err => {
        console.log(err);
    })
}

if(getButton) {
getButton.addEventListener('click', getData);
}
if(postButton) {
    postButton.addEventListener('click', sendData);
}