import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CountriesService {

	private countries:Country[]=[
	{
		id: 1,
		name: "Guatemala",
		code: "GT"
	},
	{
		id: 2,
		name: "El Salvador",
		code: "SV"
	},
	{
		id: 3,
		name: "Honduras",
		code: "HN"
	},
	{
		id: 4,
		name: "Nicaragua",
		code: "NC"
	},
	{
		id: 5,
		name: "Costa Rica",
		code: "CR"
	},
	{
		id: 5,
		name: "Panama",
		code: "PN"
	}
	];
	constructor() { }

	getCountries(){
		return this.countries;
	}
}

export interface Country {
	id: number,
	name: string,
	code: string
}
