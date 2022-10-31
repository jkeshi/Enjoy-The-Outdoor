"use strict";

const buildLocationDataList = document.getElementById("locationDataList");
const byLocationField = document.getElementById("byLocationField");
const byTypeField = document.getElementById("byTypeField");
const nationalParkResultsTableBody = document.getElementById(
  "nationalParkResultsTableBody"
);
const labelChange = document.getElementById("labelChange");

function loadSearchType() {
  buildLocationDataList.innerHTML = "";
  let option = new Option("Select...", " ");
  buildLocationDataList.appendChild(option);

  if (byLocationField.checked) {
    //labelChange.innerHTML = "Locations";
    locationsArray.forEach((location) => {
      let locationOption = new Option(location, location);
      buildLocationDataList.appendChild(locationOption);
    });
  } else if (byTypeField.checked) {
    //labelChange.innerHTML = "Parks";
    parkTypesArray.forEach((park) => {
      let parkTypeOption = new Option(park, park);
      buildLocationDataList.appendChild(parkTypeOption);
    });
  }
}

function loadTableBody() {
  let selectedValue = buildLocationDataList.value;
  nationalParkResultsTableBody.innerHTML = "";

  if (byLocationField.checked) {
    nationalParksArray.forEach((park) => {
      if (selectedValue === park.State) {
        buildNationalParkRow(nationalParkResultsTableBody, park);
      }
    });
  } else if (byTypeField.checked) {
    nationalParksArray.forEach((park) => {
      if (park.LocationName.includes(selectedValue)) {
        buildNationalParkRow(nationalParkResultsTableBody, park);
      }
    });
  }
}

function buildNationalParkRow(tableBody, nationalPark) {
  let row = tableBody.insertRow(-1);
  let cell1 = row.insertCell(0);
  cell1.innerText = nationalPark.LocationName;

  let cell2 = row.insertCell(1);
  cell2.innerText = nationalPark.Address;
  let cell3 = row.insertCell(2);
  cell3.innerText = nationalPark.City;
  let cell4 = row.insertCell(3);
  cell4.innerText = nationalPark.State;
  let cell5 = row.insertCell(4);
  cell5.innerText = nationalPark.ZipCode;
  let cell6 = row.insertCell(5);
  cell6.innerText = nationalPark.Phone;
}


window.onload = () => {
  loadSearchType();
  onclick = loadSearchType;
  buildLocationDataList.onchange = loadTableBody;
};
