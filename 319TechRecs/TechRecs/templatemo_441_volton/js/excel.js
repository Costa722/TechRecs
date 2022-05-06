fetch('js/reviews.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

function appendData(data) {
    let mainContainer = document.getElementById("review_data");
    for (let i = 0; i < data.length; i++) {
        let div = document.createElement("div");
        div.innerHTML += '-------------------------------------------------------<br>';
        div.innerHTML += data[i].subject + '<br><br>';
        div.innerHTML += data[i].name.bold() + ' (' + data[i].email + ')' + ' says <br>' + '"' + data[i].review.italics() + '" <br>';
        mainContainer.appendChild(div);
    }
}

function addReviews() {
    let mainContainer = document.getElementById("review_data");

    let nameValue = document.getElementById("your-name").value;
    let messValue = document.getElementById("message").value;
    let emailValue = document.getElementById("email").value;
    let subValue = document.getElementById("your-subject").value;

    if (nameValue.length != 0 && messValue.length != 0 && emailValue.length != 0 && subValue.length != 0) {
        let div = document.createElement("div");

        div.innerHTML += '-------------------------------------------------------<br>';
        div.innerHTML += subValue + '<br><br>';
        div.innerHTML += nameValue.bold() + ' (' + emailValue + ')' + ' says <br>' + '"' + messValue.italics() + '" <br>';
        mainContainer.appendChild(div);

        document.getElementById("your-name").value = '';
        document.getElementById("message").value = '';
        document.getElementById("email").value = '';
        document.getElementById("your-subject").value = '';
    }

    else {
        alert("Missing Information");
    }
}