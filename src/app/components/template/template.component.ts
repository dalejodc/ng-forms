import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CountriesService } from '../../services/countries.service';

import swal from 'sweetalert2'
declare var $:any;

@Component({
	selector: 'app-template',
	templateUrl: './template.component.html',
	styleUrls: ['./template.component.css'],
	providers: [CountriesService]
})
export class TemplateComponent implements OnInit {

	constructor(private _countriesServices:CountriesService) { }

	user: Object={
		name: null,
		username: null,
		email:null,
		country: ""
	}

	checkedBox: boolean=false;
	errorMessage: boolean = false;
	successMessage: boolean = false;
	toast:any;
	countries: any;

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

	save(tryForm?:NgForm){
		console.log('Complete form:',tryForm);

		if(tryForm.valid && this.checkedBox){
			this.successMessage = true;
			console.log(this.successMessage);
			this.toast({
				type: 'success',
				title: 'Must be sent!'
			})
		}else{
			if(!this.checkedBox){
				this.errorMessage = true;
			}
			this.toast({
				type: 'error',
				title: 'Error in the form!'
			})
		}
		console.log(this.user);
	}

	onCheckboxChange(id, event) {
		if(event.target.checked) { 
			console.log('Acepted');
			this.errorMessage = false;
			this.checkedBox = true;
		} else {
			this.checkedBox = false;
		}
	}

	close(){
		this.successMessage = false;
	}

	getCountries(){
		this.countries = this._countriesServices.getCountries();

		console.log(this.countries);
	}
}

