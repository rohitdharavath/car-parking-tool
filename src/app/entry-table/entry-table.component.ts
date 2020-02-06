import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entry-table',
  templateUrl: './entry-table.component.html',
  styleUrls: ['./entry-table.component.css']
})
export class EntryTableComponent implements OnInit {
  slotData:any;
  active:boolean = true;
  text:number=0;
  query:string;
  amountCollected:number=0;
  /**Data to display and manupulate table */
  carList:Array<any>=[{
      cno:'KA-12-YX-2345',
      color:'Red',
      slotNo:1
    },{
        cno:'KA-34-YX-5678',
        color:'Blue',
        slotNo:2
    },{
        cno:'KA-56-YX-9012',
        color:'Black',
        slotNo:3
    },{
        cno:'KA-78-YX-3456',
        color:'White',
        slotNo:4,
    },{
        cno:'KA-90-YX-7890',
        color:'Grey',
        slotNo:5
    }]

  slots:Array<any> =[1,2,3,4,5,6,7,8,9,10]
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
      this.route.queryParams.subscribe(params => {
       this.slotData = params;
      
    });

  }


  onPressRemove(item){
    // Splice the item from the carList array.
    let index = this.carList.indexOf(item);
    this.carList.splice(index, 1)
    this.amountCollected = this.amountCollected+20
    
  }

  onClickSubmit(data){
      let temp:any={};
      console.log(temp);
      temp.cno = data.cno;
      temp.color=  data.color;
      temp.slotNo = this.slots[this.carList.length];
      this.carList.push(temp)
  }

  onAddItem(item){
      this.carList.push(item)
  }

  onClickQuery(query){
      console.log(query)
      this.carList = this.carList.filter(item => {
          console.log(item.cno)
          console.log(query)
          return item.cno === query.cQuery;
        });
  }

  onClickButton(){
    this.text=this.text+1;
    this.toggleActive()
    setTimeout(()=>{
        this.toggleActive()
    },3000)
  }

  toggleActive(){
      this.active =!this.active;
  }
 

}
