const stations = [
  ['Big', 10, 'restaurant'],
  ['Bright', 50, 'school'],
  ['Moose', 45, 'community centre'],
  ['Codeville', 15, 'school'],
  ['Big Al', 50, 'restaurant']
]

function chooseStations (stations) {
  const goodStations = []
  for (const station of stations) {
    const capacity = station[1]
    if (capacity >= 20) {
      const type = station[2]
      if (type === "school" || type == "community centre") {
        goodStations.push(station[0])
      }
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));






