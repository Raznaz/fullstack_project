import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
	constructor() {
		this._types = [
			{ id: 1, name: 'Холодильники' },
			{ id: 2, name: 'Смартфоны' },
		];
		(this._brands = [
			{ id: 1, name: 'Samsung' },
			{ id: 2, name: 'Apple' },
		]),
			(this._devices = [
				{
					id: 1,
					name: 'Iphone 13 pro',
					price: 25000,
					rating: 5,
					img: 'https://fopi.ua/image/cache/webp/catalog/Product/Apple%20%D1%82%D0%B5%D1%85%D0%BD%D1%96%D0%BA%D0%B0/iPhone/iPhone%2014%20Pro%20Max/Space%20Black/000114442_545_545-1000x1000.webp',
				},
				{
					id: 2,
					name: 'Iphone 13 pro',
					price: 25000,
					rating: 5,
					img: 'https://fopi.ua/image/cache/webp/catalog/Product/Apple%20%D1%82%D0%B5%D1%85%D0%BD%D1%96%D0%BA%D0%B0/iPhone/iPhone%2014%20Pro%20Max/Space%20Black/000114442_545_545-1000x1000.webp',
				},
				{
					id: 3,
					name: 'Iphone 13 pro',
					price: 25000,
					rating: 5,
					img: 'https://fopi.ua/image/cache/webp/catalog/Product/Apple%20%D1%82%D0%B5%D1%85%D0%BD%D1%96%D0%BA%D0%B0/iPhone/iPhone%2014%20Pro%20Max/Space%20Black/000114442_545_545-1000x1000.webp',
				},
			]);
		makeAutoObservable(this);
	}

	//Actions
	setTypes(type) {
		this._types = type;
	}

	setBrands(brand) {
		this._brands = brand;
	}

	setDevices(device) {
		this._devices = device;
	}

	//Getters
	get types() {
		return this._types;
	}

	get brands() {
		return this._brands;
	}

	get devices() {
		return this._devices;
	}
}
