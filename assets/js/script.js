
function initRightNav() {
    /* Set img src for right navbar*/


    $(".right-nav .logo").html($(".main-navbar .logo").html());
    /* fill right navar ul list items*/

    $(".right-nav .nav-menu").html($(".main-navbar .navbar-nav").parent().html());
    /*toogle btn */

    $('.hamb-btn').click(function () {

        $('.hamb-btn').toggleClass('open');
        $(".right-nav").toggleClass('show');

    });
}


const locations = [
    {
        name:"Awesome Interior Apartment",
        price:"1,240,000",
        images:[
            "./assets/img/places/place1.jpg",
            "./assets/img/slides/slider-1.jpg",
        ],
        position:{
            lat: 36.772675, lng: 3.227460
        },
        diag:'./assets/map_dial.jpg'
    },
    {
        name:"Place 2",
        price:"940,000",
        images:[
            "./assets/img/slides/slider-2.jpg",
            "./assets/img/slides/slider-3.jpg",
        ],
        position:{
            lat: 36.765959,  lng: 3.217376
        },
        diag:'./assets/map_dial.jpg'
    },
    {
        name:"Place 2",
        price:"940,000",
        images:[
            "./assets/img/slides/slider-3.jpg",
            "./assets/img/slides/slider-1.jpg",
        ],
        position:{
            lat: 36.758267 , lng: 3.208787
        },
        diag:'./assets/map_dial.jpg'
    }
]

function locationTemplate(item,map){
    let holder = document.createElement("div");
    holder.classList.add('col-md-6')
    holder.classList.add('place-item')

    let placeitem_inner = document.createElement("div");
    placeitem_inner.classList.add('place-item_inner')
    placeitem_inner.setAttribute('position',JSON.stringify(item.position))

    placeitem_inner.onmouseenter = function(ev){
        let position = JSON.parse(this.getAttribute('position'));
        console.log(position)
        map.setCenter(position);
    }
    let items = item.images.map(image => `
    <div class="item">
        <div class="place-image" style="background-image: url('${image}');"></div>
    </div>`).join("");
    placeitem_inner.innerHTML = (`
        <div class="place-image" ></div>
        <div class="owl-places owl-carousel">
            ${items}
        </div>
        <div class="place_content">
            <div>${item.name}</div>
            <h5>$${item.price}</h5>
        </div>
        <div class="featured-tag">FEATURED</div>
    `);
    holder.appendChild(placeitem_inner);
    return holder;
}

function fillLocationRow(map){
    locations.map(location => {
        $('.places-holder').append(locationTemplate(location,map));
        let infoWindow = new google.maps.InfoWindow();
        infoWindow.setPosition(location.position);
        infoWindow.setContent(`<div class="map-dial">
        <div class="place-small-price">$ ${location.price}</div>
        <a href="#location_page" class="place-details">
          <div class="place-image" 
          style="background-image: url('${location.diag}');">
          </div>
          <div class="place-marker-details-info">
            <div class="place-details-info-title">${location.name}</div>
            <div class="place-details-info-price">$${location.price} <span></span></div>
            <div class="place-details-info-feat">4 BD<span>|</span>2 BA<span>|</span>2600 SF</div>
          </div>
        </a>
      </div>`);
        infoWindow.open(map);   
    })
}

function initMap() {

    const map = new google.maps.Map(document.getElementById("mapPlace"), {
      zoom: 16,
      center: locations[0].position,
    });

    fillLocationRow(map)

    $('.owl-places.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        navText : [
          `<i class="fa fa-chevron-left"></i>`,
          `<i class="fa fa-chevron-right"></i>`
        ],
      })


}
