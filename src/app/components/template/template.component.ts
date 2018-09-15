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

		if(tryForm.valid){
			this.toast({
			type: 'success',
			title: 'Must be sent!'
			})
		}else{
			this.toast({
			type: 'error',
			title: 'Error in the form!'
			})
		}
		console.log(this.user);
	}

}
