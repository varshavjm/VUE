Vue.component('yaay', 
{
	props:{
		premium:
		{
			type:Boolean,
			required:true
		}
	},
	template:
	`<div class="product">
			<div class="product-image">
				<img v-bind:src="image" />
			</div>
			<div class="product-info">
				<h1> {{title}} </h1>
				<p v-if="!cartToggler"> In stock </p>
				<p v-else> Sold out </p>
				<p>{{shipping}}</p>
				<ul>
					<div v-for="(sock, index) in sockColor" 
					class="color-box"
					:style="{backgroundColor: sock.colour}"
					@mouseover="updateImage(index)">{{sock.sockValue}}</div>
				</ul>
				<button v-on:click="incrementCart" :disabled="cartToggler" :class="{disabledButton: cartToggler}">Add to cart</button>
				<div class="cartVal">Cart {{cart}}</div>
		</div>
	</div>`,
	data: function () {
		return{
			brand:'Victors Original',
			productName:'Socks',
			selectedVariant : 0,
			SockURL: "http://google.com",
			inStock: 12,
			sockColor:[
			{sockValue:"Sock Color: red", colour:"red", sockImage :"./assets/vmsock-red.png", quantity:0},
			{sockValue:"Sock Color: blue", colour:"blue", sockImage :"./assets/vmsock-blue.jpg", quantity:13},
			{sockValue:"Sock Color: green", colour:"green", sockImage :"./assets/vmsock-green.jpg", quantity:12}],
			cart:0}

	},
	methods: 
	{
		incrementCart: function()
		{
			this.cart =this.cart + 1
		},

		updateImage: function(index)
		{
			this.selectedVariant = index;
			this.cart =0;
			console.log(this.selectedVariant);
		}
	},
	computed:
	{
		title ()
		{
			return this.brand + ' ' + this.productName;
		},
		image(){
			return this.sockColor[this.selectedVariant].sockImage;
		},
		cartToggler()
		{
			return this.inStock == this.sockColor[this.selectedVariant].quantity;
		},
		shipping()
		{
			if(this.premium)
				return "Free shipping";
			else 
				return "Shipping for 2.99 USD"
		}
	}	

	})



var app = new Vue ({

	el: '#app6',
	data: {
		premium : true
	}

});
