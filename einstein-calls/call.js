document.addEventListener("DOMContentLoaded", function(event) {
    attachEvent();
});

function attachEvent(){
    document.getElementById('einstein-call1').addEventListener('click', function() {
      
        const buttonId = this.id;
        alert('Button clicked! ID: ' + buttonId + ' | Title: ' + this.title);
        postCall(buttonId);
    });
}


function postCall(buttonId) {
    const url = "https://uma-hackathon.vercel.app/api/call";

    let fname = document.getElementById(buttonId+"-fname").value;
    let lname = document.getElementById(buttonId+"-lname").value;
   
    let email = document.getElementById(buttonId+"-email").value;
    let phNo = document.getElementById(buttonId+'-phNo').value;


    // Create the CallRequest object
    const callRequest = {
        phoneNumber: phNo,
        name: `${fname} ${lname}`,
        email: email
    };

    // Convert CallRequest to JSON
    const jsonBody = JSON.stringify(callRequest);

    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    try {
        // Initialize a synchronous POST request
        xhr.open("POST", url, false);
        xhr.setRequestHeader("Content-Type", "application/json");

        // Send the request with the JSON body
        xhr.send(jsonBody);

        // Check the status code
        if (xhr.status !== 200) {
            throw new Error(`Failed with HTTP error code: ${xhr.status}`);
        }

        // Parse the JSON response
        const apiResponse = JSON.parse(xhr.responseText);

        // Log the result for verification
        console.log("Status:", apiResponse.status);
        console.log("Message:", apiResponse.message);
        console.log("Call ID:", apiResponse.callId);
        console.log("Batch ID:", apiResponse.batchId);
        console.log("Jsonbin ID:", apiResponse.jsonbinId);

        // Create and return the result map
        const result = {
            phoneNumber: contactObj.phone,
            name: `${contactObj.firstName} ${contactObj.lastName}`,
            email: contactObj.email,
            id: apiResponse.jsonbinId
        };

        return result;
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}

// Example usage:
const contactObj = {
    phone: "+917892312231",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com"
};

const result = postCall(contactObj);
console.log("Result:", result);
