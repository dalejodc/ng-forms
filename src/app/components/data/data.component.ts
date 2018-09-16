import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
			'name': new FormControl('', Validators.required),
			'username': new FormControl('', Validators.required),
			'country':new FormControl('', Validators.required),
			'email': new FormControl('', 
				[
					Validators.required, 
					Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
				]
				)
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
		console.log(this.formExample.valid);
		console.log(this.formExample);
	}

}
