import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2'
declare var $:any;


@Component({
	selector: 'app-no-validated',
	templateUrl: './no-validated.component.html',
	styleUrls: ['./no-validated.component.css']
})
export class NoValidatedComponent implements OnInit {

	user: Object={
		name: null,
		username: null,
		email:null
	}

	toast:any;
	successMessage:boolean = false;

	constructor() { }

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
		this.successMessage= true;

		this.toast({
			type: 'success',
			title: 'Must be sent!'
		})
	}

	close(){
		this.successMessage = false;
	}

}
