// officer-script.js

function openPopupForm() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
}
function openeditform(){
    var popup = document.getElementById('editRegionForm');
    popup.style.display = 'block';
}
function openGrievancePopupForm() {
    var popup = document.getElementById('grievanceMailsPopup');
    popup.style.display = 'block';
}
function closegrievanceMailsPopup() {
    document.getElementById('grievanceMailsPopup').style.display = 'none';
    
}

function addRegion() {
    var areaName = document.getElementById('area-name').value;
    var supplierName = document.getElementById('supplier-name').value;
    var supplierPhone = document.getElementById('supplier-phone').value;
    var waterStatus = document.getElementById('water-status').value;

    var regionBox = document.querySelector('.region-box');

    // Create a new region div
    var regionDiv = document.createElement('div');
    regionDiv.className = 'region';
    regionDiv.innerHTML = `
            <h3 id="area-Name">${areaName}</h3>
            <p>Supplier Name: ${supplierName}</p>
            <p>Supplier Phone: ${supplierPhone}</p>
            <p>Water Status: ${waterStatus}</p>
            <button class="delete-region" onclick="deleteRegion(this)">Delete</button>
        `;
    
    regionBox.appendChild(regionDiv);
    
   
    // Add the region to the Water Supply Regions div in index.html
    var waterSupplyRegions = window.opener.document.querySelector('.water-supply-regions');
    var regionCopy = document.createElement('div');
    regionCopy.innerHTML=`
            <h3 id="area-Name">${areaName}</h3>
            <p>Supplier Name: ${supplierName}</p>
            <p>Supplier Phone: ${supplierPhone}</p>
            <p>Water Status: ${waterStatus}</p>
           
    `
    waterSupplyRegions.appendChild(regionCopy);

    // Clear the form
    document.getElementById('region-form').reset();

    // Close the popup
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Function to delete the region
function deleteRegion(button) {
    var regionDiv = button.parentElement;

    // Remove the region from the Officer Page
    regionDiv.parentNode.removeChild(regionDiv);

    // Also, find and remove the corresponding region from the index.html page
    var areaName = regionDiv.querySelector('#area-Name');
    var waterSupplyRegions = window.opener.document.querySelector('.water-supply-regions');

    // Loop through the regions in the index.html page and remove the matching one
    var indexRegions = waterSupplyRegions.querySelectorAll('.region');
    indexRegions.forEach(function (indexRegion) {
        if (indexRegion.querySelector('#area-Name') === areaName) {
            indexRegion.parentNode.removeChild(indexRegion);
        }
    });
}



// JavaScript code for displaying grievances in officer.html
document.addEventListener('DOMContentLoaded', () => {
    const grievancesDiv = document.getElementById('grievances');

    // Retrieve grievance data from Local Storage
    const grievancesData = JSON.parse(localStorage.getItem('grievances')) || [];

    // Display each grievance in the grievancesDiv
    grievancesData.forEach((grievance, index) => {
        const grievanceItem = document.createElement('div');
        grievanceItem.className = 'grievance-item';
        grievanceItem.innerHTML = `
            <h3>Grievance ${index + 1}</h3>
            <p>Name: ${grievance.name}</p>
            <p>Phone Number: ${grievance.phoneNumber}</p>
            <p>Address: ${grievance.address}</p>
            <p>Grievance: ${grievance.grievance}</p>
            <button class="delete-grievance" data-index="${index}" onclick="deleteGrievance(this)" >Delete</button>
        `;
        grievancesDiv.appendChild(grievanceItem);
    });

   
});

function deleteGrievance(button)
{
    var grievanceMail=button.parentElement;
    grievanceMail.parentNode.removeChild(grievanceMail);
}



