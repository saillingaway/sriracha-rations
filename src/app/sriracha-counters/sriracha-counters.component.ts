import { Component } from '@angular/core';

@Component({
  selector: 'app-sriracha-counters',
  templateUrl: './sriracha-counters.component.html',
  styleUrls: ['./sriracha-counters.component.scss']
})
export class SrirachaCountersComponent {

  bottleClicked(){
    console.log("bottle was clicked");
  }
}
