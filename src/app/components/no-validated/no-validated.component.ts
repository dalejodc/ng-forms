import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CountriesService } from '../../services/countries.service';

import swal from 'sweetalert2'
declare var $:any;


@Component({
	selector: 'app-no-validated',
	templateUrl: './no-validated.component.html',
	styleUrls: ['./no-validated.component.css'],
	providers: [CountriesService]
})
export class NoValidatedComponent implements OnInit {

	// Object to use in the form
	user:Object={
		name: null,
		username: null,
		email:null,
		country: null
	}

	toast:any;
	successMessage:boolean = false;
	countries: any;

	constructor(private _countriesServices:CountriesService) { }

	ngOnInit() {
		$('.ui.checkbox').checkbox();

		this.toast = swal.mixin({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 3000
		});

		this.getCountries();
	}

	/*
	save(tryForm?:NgForm)
	This method simulates the submit of the form. Optionaly could receive a parameter with the form
	*/
	save(tryForm?:NgForm){
		this.successMessage= true;

		this.toast({
			type: 'success',
			title: 'Must be sent!'
		})
	}

	/*
	close()
	This method hide the success message of the simulated request
	*/ 
	close(){
		this.successMessage = false;
	}

	/*
	getCountries()
	This method get the countries of the simulated service to fill the select form
	*/ 
	getCountries(){
		this.countries = this._countriesServices.getCountries();
		// console.log(this.countries);
	}

}
