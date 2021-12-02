//weather of your area as default
window.addEventListener('load', ()=>{
    let lat;
    let long;
    const dplace = document.querySelector(".default-banner .place");
    const dtemp = document.querySelector(".default-banner .temp");
  
    const apiKey = "415c79a373b3bcb55ae895ccab7aba79";
  
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}35&lon=${long}&appid=${apiKey}&units=metric`;
     
        fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          const { main, name} = data;
          dplace.textContent = name;
          dtemp.textContent = main.temp;
        })
      });
    }
  
  });