import { Component } from '@angular/core';
import swal from 'sweetalert2'

// declare let swal: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
	){}

  ngOnInit(){
  	console.log("Alert");
  	
    const toast = swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });

  toast({
    type: 'success',
    title: 'SweetAlert'
  })
	}
}
