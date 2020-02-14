var firebaseConfig = {
    apiKey: "AIzaSyCMEvwj5iH_uDUiQD2_DNqC1Shzxavid8c",
    authDomain: "mapula-hanyane.firebaseapp.com",
    databaseURL: "https://mapula-hanyane.firebaseio.com",
    projectId: "mapula-hanyane",
    storageBucket: "mapula-hanyane.appspot.com",
    messagingSenderId: "187922823713",
    appId: "1:187922823713:web:579ba820126707b6e48160",
    measurementId: "G-4JBQFHGVQ6"
};

firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function contact - form(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var SurName = getInputVal('SurName');
    var email = getInputVal('email');

    var message = getInputVal('message');

    // Save message
    saveMessage(name, surName, email, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('ccontact-formm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}



// Save message to firebase
function saveMessage(name, SurName, email, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        SurName: SurName,
        email: email,

        message: message
    });
}