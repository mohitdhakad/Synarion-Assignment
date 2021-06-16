import { Component } from '@angular/core';

@Component({
  selector: 'app-settimeout',
  template: `
          <div class="container">
            <div class="a">
              <b>With set timeout function</b>
              <h1>{{ counter }}</h1>
            </div>
          </div>`

})
export class SettimeoutComponent {

  timer;
  counter = 60;
  constructor(){
      this.timer = setTimeout(this.countDown, 1000)
      }

   countDown=() =>{
    this.counter = this.counter - 1
    console.log(this.counter)
    if (this.counter == 0) {
      clearTimeout(this.timer)
      this.timer = null
    } else {
      this.timer = setTimeout(this.countDown, 1000)
    }
  }
}
