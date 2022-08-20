let latitude,
  longitude = "";

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
} else {
  alert("Tarayıcınız konum bilgisini alamıyor...");
}

function onSuccess(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  initMap();
  const api_key = "";
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${api_key}`;

  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      let details = result.results[0].components;
      let { country, postcode, state } = details;
      document.getElementById("results").innerHTML = `
      <p>Country: ${country}
      <p>Postcode: ${postcode}
      <p>City: ${state}`;
    });
}

function onError(error) {
  if (error.code == 1) {
    alert("Kullanıcı erişim iznini reddetti...");
  } else if (error.code == 2) {
    alert("konum alınamadı");
  } else {
    alert("bir hata oluştu");
  }
}

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: latitude, lng: longitude },
    zoom: 14,
  });

  const marker = new google.maps.Marker({
    position: { lat: latitude, lng: longitude },
    map: map,
  });
}
