const url = "https://www.metaweather.com/api/location/2391279"

fetch(url)
.then(Response => Response.json())
.then(data => console.log(data))
.catch(console.error)