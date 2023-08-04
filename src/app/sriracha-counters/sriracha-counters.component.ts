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
    { size: 'small', oz: 9, g: 255, servings: 51, count: 0, leftIconOpacity: 0, rightIconOpacity: 0 },
    { size: 'medium', oz: 17, g: 481, servings: 96, count: 0, leftIconOpacity: 0, rightIconOpacity: 0  },
    { size: 'large', oz: 28, g: 793, servings: 158, count: 0, leftIconOpacity: 0, rightIconOpacity: 0  },
    { size: 'colossal', oz: 136, g: 3859, servings: 771, count: 0, leftIconOpacity: 0, rightIconOpacity: 0  },
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

  leftIconOpacity = 0;
  rightIconOpacity = 0;

  ngOnInit(){
    this.buttons.forEach( (button) => {
      console.log(`${button.size},  ${button.oz}, ${button.count}`);
    });

    this.selectedUnit = "tsp";
    this.selectedTime = "week";
  }

  onClick(event: MouseEvent, button: any){
    let targetElement = event.target as HTMLElement;
    let relativeXPosition = event.clientX - targetElement.getBoundingClientRect().left;
    let middlePosition = targetElement.offsetWidth / 2;

    if (relativeXPosition < middlePosition) {
      console.log('remove sriracha');
      button.count -= 1;
      this.updateTotal(button);
    } else {
      console.log('add sriracha');
      button.count += 1;
      this.updateTotal(button);
    }


    this.updateTotal(button);
    this.updateRationAmount();
    this.displayCurrentBottleCounts();
  }

  changeIconVisibility(event: MouseEvent, button: any){
    let targetElement = event.target as HTMLElement;
    let relativeXPosition = event.clientX - targetElement.getBoundingClientRect().left;
    let normalizedXPosition = relativeXPosition / targetElement.offsetWidth; // This will be a value between 0 and 1

    if (normalizedXPosition < 0.5) {
      button.leftIconOpacity = 1 - (normalizedXPosition * 2); // Multiplied by 2 to ensure the value stays between 0 and 1
      button.rightIconOpacity = 0;
    } else {
      button.leftIconOpacity = 0;
      button.rightIconOpacity = (normalizedXPosition - 0.5) * 2; // Subtract 0.5 to start at 0, then multiply by 2 to ensure the value stays between 0 and 1
    }
  }

  hideIcons(){
    this.buttons.forEach((button) => {
      button.leftIconOpacity = 0;
      button.rightIconOpacity = 0;
    });
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
