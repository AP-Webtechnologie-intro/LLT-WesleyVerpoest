

   

fetch('https://api.punkapi.com/v2/beers?brewed_before=11-2012')
.then(response => response.json())
.then(json => {
    let html = '<div id="beerCarousel" class="carousel slide carousel-dark" data-bs-ride="carousel">';

    // Carousel indicators
    html += '<div class="carousel-indicators">';
    for (let i = 0; i < json.length; i++) {
        html += `<button type="button" data-bs-target="#beerCarousel" data-bs-slide-to="${i}" class="${i === 0 ? 'active' : ''}" aria-current="${i === 0 ? 'true' : 'false'}" aria-label="Slide ${i + 1}"></button>`;
    }
    html += '</div>';

    
    html += '<div class="carousel-inner">';
    json.forEach((bier, index) => {
        html += `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${bier.image_url}" class="d-block img-fluid" style="max-height:200px;" alt="${bier.name}">
            <div class="carousel-caption d-none d-md-block">
                <h6>${bier.name}</h6>
                <p> food pairing : ${bier.food_pairing}</p>
            </div>
        </div>`;
    });
    html += '</div>';

    
    html += `
        <button class="carousel-control-prev" type="button" data-bs-target="#beerCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#beerCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>`;

    document.getElementById("bier").innerHTML = html;
});
