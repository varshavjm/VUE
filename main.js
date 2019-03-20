
var app = new Vue ({

	el: '#app',
	data: {
		brand: 'Victors Original',
		product : 'Socks',
		selectedVariant : 0,
		SockURL: "http://google.com",
		inStock: 12,
		sockColor:[
		{sockValue:"Sock Color: red", colour:"red", sockImage :"./assets/vmsock-red.png", quantity:0},
		{sockValue:"Sock Color: blue", colour:"blue", sockImage :"./assets/vmsock-blue.jpg", quantity:13},
		{sockValue:"Sock Color: green", colour:"green", sockImage :"./assets/vmsock-green.jpg", quantity:12}],
		cart:0,
	},
	methods: {
		incrementCart: function()
		{
			this.cart =this.cart + 1
		},

		updateImage: function(index)
		{
			this.selectedVariant = index;
			console.log(this.selectedVariant);
		}
	},
	computed:{
		title ()
		{
			return this.brand + ' '+ this.product;
		},
		image(p){
			return this.sockColor[this.selectedVariant].sockImage;
		},
		cartToggler()
		{
			return this.inStock == this.sockColor[this.selectedVariant].quantity;
		}
	}

});
