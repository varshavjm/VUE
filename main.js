Vue.config.devtools = true;
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
			{sockValue:"Nivea: red", colour:"red", sockImage :"./assets/vmsock-red.png", quantity:0},
			{sockValue:"Nike: blue", colour:"blue", sockImage :"./assets/vmsock-blue.jpg", quantity:13},
			{sockValue:"Puma: green", colour:"green", sockImage :"./assets/vmsock-green.jpg", quantity:12}]}

	},
	methods: 
	{
		incrementCart: function()
		{
			// When we click the 'Add to Cart' button, we want app.cart value to increment and for this we need to pass 
			// this event handler to the parent i.e. app for it to know that some event was triggered at the component level.
			// Hence we emit this event to event handler ie. 'addToCart' which triggers updateCart method of the vue instance app
			// In simple, we listen for this event add-To-Cart and whenever click happens, it will trigger updateCart method on Vue instance 
			//this.$parent.updateCart() 
			this.$emit('add-to-cart', this.sockColor[this.selectedVariant].sockValue);
		},

		updateImage: function(index)
		{
			this.selectedVariant = index;
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
		premium : true,
		cart : []
	},

	methods:
	{
		updateCart(id)
		{
			console.log("entered "+ this.cart);
			this.cart.push(id)
		}
	}

});
