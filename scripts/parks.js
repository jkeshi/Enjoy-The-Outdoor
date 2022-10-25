

const locationsDataArray = document.getElementById("locationDatalist");

function loadLocationDataList() {
   //collection
    locationsArray.forEach((location) => {
      let option = new Option(location, location);
      locationDataList.appendChild(option);
    });
}

window.onload = () => {
  loadLocationDataList();
}
 
function buildLocationDataList(location) {
  let table = document.createElement("table");
    
  }


// const nationalParkDataArray = document.getElementById("nationalParkList");

// function loadNationalParkList(params) {}


// const parkTypesDataArray = document.getElementById("parkDataList");

// function loadParkDataList() {}


// const mountainsDataArray = document.getElementById("moutainsDataArrayList");

// function loadMountainList() {}