import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  selectedProduct = 0;
  selectedImage = 0;
  products = [
    new Product(0, 'iPhone X', 2, 'https://www.apple.com/iphone-x/', 'For the first time in years, Apple is using glass instead of aluminum in its newest products. All the new iPhones, including the iPhone X, iPhone 8 and iPhone 8 Plus, include a glass back that’s designed to facilitate the company’s also newly-introduced wireless charging technology. It looks and feels elegant, thought also curiously reminiscent of older iPhones like the iPhone 4 and iPhone 4s. The stainless steel that frames the edges of the display makes it feel a bit heavy, but also more durable than Apple’s previous iPhones.'),
	new Product(1, 'Samsung Galaxy S8+', 2, 'http://www.samsung.com/global/galaxy/galaxy-s8/', 'Samsung Galaxy S8+ has the cutting-edge features you need to do the things you love faster, easier and better. An eye catching, 6.2" inch curved display goes all the way to the edge, so you can see more. The 12MP camera and advanced processor takes sharp, clear photos faster. Introducing Bixby Samsung s new intelligent interface that is able to navigate easily through services and apps so that users can experience more with their phones. A phone this advanced deserves a network that can keep up. The Galaxy S8+ comes in 64GB. Available in Orchid Gray, Arctic Silver or Midnight Black (subject to availability).'),
	new Product(2, 'FitBit', 2, 'https://www.fitbit.com/home', 'As one of the biggest names in fitness trackers, Fitbit is an easy pick for recording your daily steps or sleep patterns. Selecting the best Fitbit model for your needs, however, isn’t quite as simple.The different Fitbit trackers have a lot of overlap in features, and so it’s not straightforward which one is the “best.” Moving up the scale in price doesn’t necessarily mean you get all the features of the cheaper trackers plus additional ones.')
  ];
  selectProduct(id) {
	this.selectedProduct = id;
	this.selectedImage = 0;
  }
}
export class Product {
	constructor(
	  public id: number,
	  public name: string,
	  public imgcount: number,
	  public more: string,
	  public desc: string) {}
}