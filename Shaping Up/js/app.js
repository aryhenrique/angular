var app = angular.module('gemStore', []);

app.controller('StoreController', function() {
    this.products = gems;
});

app.controller('TabController', function(){
    this.tab = 1;
    
    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
    
});

app.controller('GalleryController', function(){
    this.image = 0;
    
    this.setImage = function(newValue){
      this.image = newValue;
    };
});

app.controller("ReviewController", function(){
    this.stars = [1,2,3,4,5];
});

var gems = [{
    name: 'Azurite',
    description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
    shine: 8,
    price: 110.50,
    rarity: 7,
    color: '#CCC',
    faces: 14,
    images: [
      "images/gem-02.gif",
      "images/gem-05.gif",
      "images/gem-09.gif"
    ],
    reviews: [
    {
        stars: 5,
        body: "Texto de descrição 1",
        author: "aryhenrique@gmail.com"
    },
    {
        stars: 3,
        body: "Texto de descrição 2",
        author: "aryhenrique@gmail.com"
    },
    ]
}, {
    name: 'Bloodstone',
    description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
    shine: 9,
    price: 22.90,
    rarity: 6,
    color: '#EEE',
    faces: 12,
    images: [
      "images/gem-01.gif",
      "images/gem-03.gif",
      "images/gem-04.gif"
    ],
    reviews: [
    {
        stars: 4,
        body: "Texto de descrição 3",
        author: "aryhenrique@gmail.com"
    },
    {
        stars: 1,
        body: "Texto de descrição 4",
        author: "aryhenrique@gmail.com"
    },
    ]
}, {
    name: 'Zircon',
    description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
    shine: 70,
    price: 1100,
    rarity: 2,
    color: '#000',
    faces: 6,
    images: [
      "images/gem-06.gif",
      "images/gem-07.gif",
      "images/gem-10.gif"
    ],
    reviews: []
}];