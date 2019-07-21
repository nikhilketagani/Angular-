import { Component } from '@angular/core';
import { Country } from './Country';
import { Department, employee } from 'src/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proj';
  countries = [
    new Country(1, 'USA' ),
    new Country(2, 'India' ),
    new Country(3, 'Australia' ),
    new Country(4, 'Brazil')
 ];
 dep :string='';
  // Initilize Department Class
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];
  // Initilize employee class
  emps: employee[] = [
    { eid: 1, empname: 'Help Desk' , did : 1 },
    { eid: 2, empname: 'Help Desk1' , did : 2 },
    { eid: 3, empname: 'Help Desk2' , did : 2 },
    { eid: 4, empname: 'Help Desk3' , did : 3  },
    { eid: 5, empname: 'Help Desk4' , did : 4  }
  ];

  // create an array to stored filtered data which will be added into second dropdown
  public finaldata :  any[] = [];
  selectedDeptValue :number= 0;
   constructor() {
    
    }
    // Following event will be called when user select item in first dropwdown.
   changedata()
   {
//      // To remove previous selected items from second dropdown 
   this.finaldata.splice(0);
//Filter items and pass into finaldata
    this.finaldata = this.emps.filter(x=>x.did == this.selectedDeptValue);
console.log(this.selectedDeptValue)
 
   }
}
