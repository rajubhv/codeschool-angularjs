(function() {
	var app = angular.module('store', []);

	app.controller('PanelController', function() {
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});

	app.controller('StoreController', function() {
		this.product = gem;
		this.products = gems;
	});

	var gem = {
		name : 'Dodecahedron',
		price : 2.95,
		description : 'This is the first gem in store',
		canPurchase : true,
		soldOut : true
	};

	var gems = [ {
		name : 'Dodecahedron',
		price : 2.95,
		description : 'This is the first gem in store',
		canPurchase : true,
		soldOut : false,
		images : [ {
			full : 'img/ruby.png',
			thumbnail : 'img/ruby-thumb.jpg'
		} ]
	}, {
		name : 'Pentagonal Gem',
		price : 5.95,
		description : 'This is the second gem in store',
		canPurchase : false,
		soldOut : false,
		images : [ {
			full : 'img/diamond.png',
			thumbnail : 'img/diamond-thumb.jpg'
		} ]
	} ];
})();