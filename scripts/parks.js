"use strict";

const locationsDataArray = document.getElementById("locationDatalist");
const nationalParkDataArray = document.getElementById("nationalParkList");
const nationalParktableBody = document.getElementById("nationalParktableBody");

function loadLocationDataList() {
  //collection
  locationsArray.forEach((location) => {
    let option = new Option(location, location);
    locationDataList.appendChild(option);
  });
}

window.onload = () => {
  loadLocationDataList();
  loadSearchType();
  onclick = loadSearchType;
  nationalParkDataArray.onchange = loadTableBody;
};


function buildLocationDataRow(tableBody, nationalPark) {
  let row = tableBody.insertRow(-1);
  let cell1 = row.insertCell(0);
  cell1.innerText = nationalPark.Name;
  let cell2 = row.insertCell(1);
  cell1.innerText = nationalPark.Address;
  let cell3 = row.insertCell(2);
  cell1.innerText = nationalPark.City;
  let cell4 = row.insertCell(3);
  cell1.innerText = nationalPark.State;
  let cell5 = row.insertCell(4);
  cell1.innerText = nationalPark.zip;
  let cell6 = row.insertCell(5);
  cell1.innerText = nationalPark.phone;
}
// function buildLocationDataList(table, ) {
//   let table = document.createElement("table");
//     let locationsArrayRow = document.createElement (`tr`);

//   }

// function loadNationalParkList(params) {}

// const parkTypesDataArray = document.getElementById("parkDataList");

// function loadParkDataList() {}

// const mountainsDataArray = document.getElementById("moutainsDataArrayList");

// function loadMountainList() {}
