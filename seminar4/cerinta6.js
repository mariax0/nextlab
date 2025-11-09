async function avioaneRomania() {
  const bbox = "20,43,30,48"; // lon_min, lat_min, lon_max, lat_max (aproximari pentru Romania)

  try {
    console.log("Se obtine lista avioanelor de deasupra Romaniei...");
    const response = await fetch(
      `https://opensky-network.org/api/states/all?lamin=${
        bbox.split(",")[1]
      }&lomin=${bbox.split(",")[0]}&lamax=${bbox.split(",")[3]}&lomax=${
        bbox.split(",")[2]
      }`
    );

    if (!response.ok) {
      throw new Error(`Eroare API: ${response.status}`);
    }

    const data = await response.json();
    const avioane = data.states || [];
    const avioaneActive = avioane.filter((state) => state[0] !== null);

    console.log(
      `Numar avioane active deasupra Romaniei: ${avioaneActive.length}`
    );

    return avioaneActive.map((state) => ({
      icao24: state[0], // id unic avion
      callsign: state[1].trim(), // nume zbor
      longitude: state[5], // longitudine
      latitude: state[6], // latitudine
      altitude: state[7], // altitudine (metri)
      velocity: state[9], // viteza (m/s)
      heading: state[10], // directie (grade)
    }));
  } catch {
    console.error("Eroare la obtinerea datelor: ", error);
    return [];
  }
}

avioaneRomania().then((avioane) => {
  console.log("Primele 10 avioane: ", avioane.slice(0, 5));
});
