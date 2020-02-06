import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  /**function to capture and redirect data from form to slots page */
  onClickSubmit(data){
    console.log(data)
    if(data.totalSlots<data.parked){
        alert("Sorry! Please check the details entered")
    }else{
        //Pass slots data to slots page through router
        let navigationExtras: NavigationExtras = {
            queryParams: data
        };
        this.router.navigate(['/slots'],navigationExtras);
    }
  }
}
