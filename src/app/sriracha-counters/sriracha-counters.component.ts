import { Component } from '@angular/core';

@Component({
  selector: 'app-sriracha-counters',
  templateUrl: './sriracha-counters.component.html',
  styleUrls: ['./sriracha-counters.component.scss']
})
export class SrirachaCountersComponent {

  num_small: number = 0;
  num_medium: number = 0;
  num_large: number = 0;
  num_colossal: number = 0;

  total_oz: number = 0;
  total_lbs: number = 0;

  bottleClicked(amount: number){
    console.log('bottle with value ', amount, ' was clicked');
    
    this.updateTotal(amount);
  }

  updateTotal(oz: number){
    this.total_oz += oz;
  }
}
