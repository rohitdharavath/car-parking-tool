import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-header',
  templateUrl: './display-header.component.html',
  styleUrls: ['./display-header.component.css']
})
export class DisplayHeaderComponent implements OnInit {
  @Input() slotData: any;
  totalSlots:number = 0;
  availableSlots:number = 0;
  constructor() { }

  ngOnInit() {
    this.totalSlots = this.slotData.totalSlots;
    this.availableSlots = this.slotData.totalSlots-this.slotData.parked;
  }

}
