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

	ngOnInit() {
		$('.ui.checkbox').checkbox();
	}

	save(tryForm:NgForm){
		console.log("Post");
		console.log('Complete form:',tryForm);
		console.log('Value',tryForm.value);
	}

	showModal(): void{
		$('.ui.modal').modal('show');
	}

}
