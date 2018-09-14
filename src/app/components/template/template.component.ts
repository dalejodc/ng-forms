import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

	ngOnInit() {
		$('.ui.checkbox').checkbox();

	}

	save(tryForm?:NgForm){
		$('#qqform form')
		.form({
			on: 'blur',
			inline: false,
			fields: {
				email: {
					identifier  : 'email',
					rules: [
					{
						type   : 'empty',
						prompt : 'Please enter a value'
					}
					]
				}
			}
		});

		console.log("Post");
		console.log('Complete form:',tryForm);
		console.log(this.user);
	}

}
