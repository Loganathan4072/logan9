

let isLoginFormVisible = false;

function showLoginForm() {
    const loginForm = document.getElementById('loginForm');

    loginForm.style.display = 'block';
}

function login(event) {
    event.preventDefault();

    const officerName = document.getElementById('officerName').value;
    const password = document.getElementById('password').value;

    // You should implement your authentication logic here.
    // For this example, let's assume the login is successful if
    // the officerName is not empty and the password is "password".
    if (officerName !== "" && password === "password") {
        // Redirect to the officer website (replace with the actual URL)
        window.location.href = "https://www.officerwebsite.com";
    } else {
        alert("Invalid login credentials. Please try again.");
    }
}
function openOfficerPage() {
    window.open('officer.html', '_blank');
    const loginForm = document.getElementById('loginForm');

    loginForm.style.display = 'none';
}

// JavaScript code for displaying regions and handling deletions in index.html
document.addEventListener('DOMContentLoaded', () => {
    const regionsDiv = document.getElementById('water-supply-regions');

    // Retrieve region data from Local Storage
    const regionsData = JSON.parse(localStorage.getItem('regions')) || [];

    // Display each region in the regionsDiv
    regionsData.forEach((region, index) => {
        const regionItem = document.createElement('div');
        regionItem.className = 'region';
        regionItem.innerHTML = `
            <p>Area Name: ${region.areaName}</p>
            <p>Supplier Name: ${region.supplierName}</p>
            <p>Supplier Phone: ${region.supplierPhone}</p>
            <p>Water Status: ${region.waterStatus}</p>
        `;
        regionsDiv.appendChild(regionItem);
    });

    // Add event listeners for delete buttons (no delete buttons in index.html)
});


function openPopupForm() {
    var popup = document.getElementById('grievancePopup');
    popup.style.display = 'block';
}
// ... (Other JavaScript code)

// Send Mail Button Click Event
const sendButton = document.getElementById('sendButton');
sendButton.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const address = document.getElementById('address').value;
    const grievance = document.getElementById('grievance').value;

    // Check if any field is empty
    if (name === '' || phoneNumber === '' || address === '' || grievance === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Create a grievance object
    const grievanceData = {
        name: name,
        phoneNumber: phoneNumber,
        address: address,
        grievance: grievance
      
    };

    // Store the grievance data in Local Storage
    const existingGrievances = JSON.parse(localStorage.getItem('grievances')) || [];
    existingGrievances.push(grievanceData);
    localStorage.setItem('grievances', JSON.stringify(existingGrievances));

    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('phoneNumber').value = '';
    document.getElementById('address').value = '';
    document.getElementById('grievance').value = '';

    // Close the Grievance popup
    const grievancePopup = document.getElementById('grievancePopup');
    grievancePopup.style.display = 'none';

    // Refresh the Grievances in officer.html (you need to implement this part)
    // ...

    alert('Grievance sent successfully.');
});

    

function cancel()
{
    
    var popup = document.getElementById('grievancePopup');
    popup.style.display = 'none';
    
}

(function() {

    "use strict";
  
    /**
     * Cache variables
     */
    var menu = document.querySelector("#c-circle-nav");
    var toggle = document.querySelector("#c-circle-nav__toggle");
    var mask = document.createElement("div");
    var activeClass = "is-active";
  
    /**
     * Create mask
     */
    mask.classList.add("c-mask");
    document.body.appendChild(mask);
  
    /**
     * Listen for clicks on the toggle
     */
    toggle.addEventListener("click", function(e) {
      e.preventDefault();
      toggle.classList.contains(activeClass) ? deactivateMenu() : activateMenu();
    });
  
    /**
     * Listen for clicks on the mask, which should close the menu
     */
    mask.addEventListener("click", function() {
      deactivateMenu();
      console.log('click');
    });
  
    /**
     * Activate the menu 
     */
    function activateMenu() {
      menu.classList.add(activeClass);
      toggle.classList.add(activeClass);
      mask.classList.add(activeClass);
    }
  
    /**
     * Deactivate the menu 
     */
    function deactivateMenu() {
      menu.classList.remove(activeClass);
      toggle.classList.remove(activeClass);
      mask.classList.remove(activeClass);
    }
  
  })();