import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator } from '@angular/forms';

import { CountriesService } from '../../services/countries.service'

@Component({
	selector: 'app-data',
	templateUrl: './data.component.html',
	styleUrls: ['./data.component.css'],
	providers: [CountriesService]
})
export class DataComponent implements OnInit {

	countries: any;
	formExample: FormGroup;	

	constructor(private _countryService:CountriesService) { 
		this.formExample = new FormGroup({
			'name': new FormControl('Daniel'),
			'user': new FormControl(''),
			'email': new FormControl('')
		})
	}

	ngOnInit() {
		this.getCountries();
	}

	getCountries(){
		this.countries = this._countryService.getCountries();
	}

	save(){
		console.log(this.formExample.value);
	}

}
