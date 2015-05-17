(function(){
    var app=angular.module('store',[ ]);
    
    app.controller('StoreController',function (){
        this.product=gem;
        this.products=gems;
    });
    
    var gem={
        name: 'Dodecahedron',
        price: 2.95,
        description: 'This is the first gem in store',
        canPurchase: true,
        soldOut: false
    };
    
    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'This is the first gem in store',
            canPurchase: true,
            soldOut: false
        },
        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description: 'This is the second gem in store',
            canPurchase: true,
            soldOut: false
        }
        ];
})();