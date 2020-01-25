import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  item1 : string;
 item2 : string;
 price1 : string;
 price2 : string;
 temp :boolean =false;
temp1: boolean=false;
temp2:boolean=true;
total : number;
totalBill : number=0;
tax: number;
generateInvoice()
{
  this.temp=true;
  console.log(this.item1);
  if(this.item1===undefined  || this.item2 ===undefined || this.price1 ===undefined ||this.price2 ===undefined )
    this.temp2=false;
    else{
      this.temp2=true;
      this.total = parseInt(this.price1) + parseInt(this.price2);
 this.tax=this.total*.20;
 this.totalBill=this.total+this.tax;
    }
}
finalGenerate()
{
this.temp1=true;
}

}
