import { Component } from '@angular/core';

@Component({
  selector: 'app-sriracha-counters',
  templateUrl: './sriracha-counters.component.html',
  styleUrls: ['./sriracha-counters.component.scss']
})
export class SrirachaCountersComponent {

  buttons = [
    { size: 'small', oz: 9, count: 0},
    { size: 'medium', oz: 17, count: 0},
    { size: 'large', oz: 28, count: 0},
    { size: 'colossal', oz: 136, count: 0},
  ];

  num_small: number = 0;
  num_medium: number = 0;
  num_large: number = 0;
  num_colossal: number = 0;

  total_oz: number = 0;
  total_lbs: number = 0;

  ngOnInit(){
    this.buttons.forEach( (button) => {
      console.log(`${button.size},  ${button.oz}, ${button.count}`);
    })
  }

  // bottleClicked(amount: number){
  //   console.log('bottle with value ', amount, ' was clicked');
    
  //   this.updateTotal(amount);
  // }

  // onClick(event: any) {
  //   const button = event.target as HTMLButtonElement;
  //   console.log(button.value);
    
  // }

  onClick(button: any){
    button.count += 1;
    console.log(`${button.count},  ${button.oz}`);
    let old_total = this.total_oz;
    this.updateTotal(button.oz);

    console.log(`${old_total} + ${button.oz} = ${this.total_oz}`)
    console.log(`Button ${button.size} clicked. New total: ${this.total_oz}`);
  }

  updateTotal(oz: number){
    this.total_oz += oz;
  }
}
