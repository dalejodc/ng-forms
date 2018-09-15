import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2'

// import * as $ from 'jquery';
declare var $:any;

@Component({
	selector: 'app-template',
	templateUrl: './template.component.html',
	styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

	constructor() { }

	user: Object={
		name: null,
		username: null,
		email:null
	}

	checkedBox: boolean=false;
	errorMessage: boolean = false;
	successMessage: boolean = false;
	toast:any;

	ngOnInit() {
		$('.ui.checkbox').checkbox();

		this.toast = swal.mixin({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 3000
		});


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
}

