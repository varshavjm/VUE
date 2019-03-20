
var app = new Vue ({

	el: '#app',
	data: {
		product : 'Socks',
		image : "./assets/vmsock-green.jpg",
		SockURL: "http://google.com",
		inStock: 12,
		Toggle: false,
		sockColor:[
		{sockValue:"Sock Color: red", colour:"red", sockImage :"./assets/vmsock-red.png"},
		{sockValue:"Sock Color: blue", colour:"blue", sockImage :"./assets/vmsock-blue.jpg"},
		{sockValue:"Sock Color: green", colour:"green", sockImage :"./assets/vmsock-green.jpg"}],
		cart:0,
	},
	methods: {
		incrementCart: function()
		{
			this.cart =this.cart + 1
		},

		updateImage: function(p)
		{
			this.image = p.sockImage;
		}
	}

});
