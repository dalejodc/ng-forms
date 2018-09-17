import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CountriesService } from '../../services/countries.service'

import swal from 'sweetalert2'

@Component({
	selector: 'app-data',
	templateUrl: './data.component.html',
	styleUrls: ['./data.component.css'],
	providers: [CountriesService]
})
export class DataComponent implements OnInit {

	countries: any;
	formExample: FormGroup;	
	formExampleNestedObj: FormGroup;	
	errorMessage: boolean = false;
	successMessage: boolean = false;
	successMessageNestedForm: boolean = false;
	toast:any;
	checkedBox: boolean=false;

	// To use in formExampleNestedObj
	user: Object = {
		fullname:{
			firstname: "First Name Example",
			lastname: "Last Name Example"
		},
		email: "email@example.com"
	}

	constructor(private _countryService:CountriesService) { 

		console.log(this.user);
		
		this.formExample = new FormGroup({
			'name': new FormControl('', 
				[
				Validators.required,
				Validators.minLength(5),
				Validators.pattern("[a-zA-Z\s]+")	
				]),
			'username': new FormControl('', 
				[
				Validators.required,
				Validators.minLength(3)
				]),
			'country':new FormControl('', Validators.required),
			'email': new FormControl('', 
				[
				Validators.required, 
				Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
				]
				)
		});

		this.formExampleNestedObj = new FormGroup({
			'fullname' : new FormGroup({
				'firstname': new FormControl('', 
					[
					Validators.required,
					Validators.pattern("[a-zA-Z\s]+")	
					]),
				'lastname': new FormControl('', 
					[
					Validators.required,
					Validators.pattern("[a-zA-Z\s]+")	
					]),
			}),
			'email': new FormControl('', 
				[
				Validators.required, 
				Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
				]
				)
		});
	}

	ngOnInit() {
		this.getCountries();

		this.toast = swal.mixin({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 3000
		});
	}

	getCountries(){
		this.countries = this._countryService.getCountries();
	}

	onCheckboxChange(event) {
		if(event.target.checked) { 
			this.errorMessage = false;
			this.checkedBox = true;
		} else {
			this.checkedBox = false;
		}
	}

	save(){
		if(this.formExample.valid && this.checkedBox){
			this.successMessage = true;
			console.log(this.successMessage);
			this.toast({
				type: 'success',
				title: 'Must be sent!'
			})

			this.formExample.reset({
				user:{
					fullname:{
						firstname: null,
						lastname: null
					},
					email: null
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
	}

	close(){
		this.successMessage = false;
		this.successMessageNestedForm = false;
	}

	saveNestedForm(){
		if(this.formExampleNestedObj.valid){
			this.successMessageNestedForm = true;
			this.toast({
				type: 'success',
				title: 'Must be sent!'
			})

			this.formExampleNestedObj.reset({
				user:{
					fullname:{
						firstname: null,
						lastname: null
					},
					email: null
				}
			});
		}else{
			if(!this.checkedBox){
				this.errorMessage = true;
			}
			this.toast({
				type: 'error',
				title: 'Error in the form!'
			})
		}
		console.log(this.formExampleNestedObj.value);
		console.log(this.formExampleNestedObj);
	}


}
