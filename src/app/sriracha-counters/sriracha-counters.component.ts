import { Component } from '@angular/core';
import { MatButtonToggleChange, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-sriracha-counters',
  templateUrl: './sriracha-counters.component.html',
  styleUrls: ['./sriracha-counters.component.scss']
})
export class SrirachaCountersComponent {
  // 1 tsp sriracha = 5g
  // 1 Tbpn = 3 tsp
  // 1 Tbpn sriracha = 15g

  buttons = [
    { size: 'small', oz: 9, g: 255, servings: 51, count: 0 },
    { size: 'medium', oz: 17, g: 481, servings: 96, count: 0 },
    { size: 'large', oz: 28, g: 793, servings: 158, count: 0 },
    { size: 'colossal', oz: 136, g: 3859, servings: 771, count: 0 },
  ];

  selectedUnit: string;
  selectedTime: string;
  usingUnitPer: number = 1;

  num_small: number = 0;
  num_medium: number = 0;
  num_large: number = 0;
  num_colossal: number = 0;

  total_oz: number = 0;
  total_g: number = 0;

  tsps: number = 0;
  tbspns: number = 0;

  add = true;
  sub = true;

  ngOnInit(){
    this.buttons.forEach( (button) => {
      console.log(`${button.size},  ${button.oz}, ${button.count}`);
    });

    this.selectedUnit = "tsp";
    this.selectedTime = "week";
  }

  onClick(button: any){
    button.count += 1;
    console.log(`${button.count},  ${button.oz}`);
    let old_total = this.total_oz;
    this.updateTotal(button);
    this.updateRationAmount();
    this.displayCurrentBottleCounts();
    console.log(`${old_total} + ${button.oz} = ${this.total_oz}`)
    console.log(`Button ${button.size} clicked. New total: ${this.total_oz}`);
  }

  onUnitChange(event: MatButtonToggleChange) {
    this.selectedUnit = event.value;
  }

  onTimeChange(event: MatButtonToggleChange) {
    this.selectedTime = event.value;
  }

  updateTotal(button: any){
    this.total_oz += button.oz;
    this.total_g += button.g;
  }

  updateRationAmount(){
    this.tsps = this.total_g/5/this.usingUnitPer;
    this.tbspns = this.total_g/5/3/this.usingUnitPer;
  }

  displayCurrentBottleCounts(){
    this.buttons.forEach( (button) => {
      console.log(button.oz + ' oz: ' + button.count);
    });
  }

}
