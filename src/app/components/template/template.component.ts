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

	// Object to use in formExampleNestedObj
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

	/*
	save()
	This method simulates the submit of the form. Optionaly could receive a parameter with the form
	*/
	save(tryForm?:NgForm){
		console.log('Complete form:',tryForm);

		if(tryForm.valid && this.checkedBox){
			this.successMessage = true;
			console.log(this.successMessage);
			this.toast({
				type: 'success',
				title: 'Must be sent!'
			})

			tryForm.reset({
				user:{
					name: null,
					username: null,
					email:null,
					country: ""
				}
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

	/*
	onCheckboxChange(event)
	This method check the event checked or unchecked of the checkbox to accept the terms
	*/
	onCheckboxChange(event) {
		if(event.target.checked) { 
			console.log('Acepted');
			this.errorMessage = false;
			this.checkedBox = true;
		} else {
			this.checkedBox = false;
		}
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

