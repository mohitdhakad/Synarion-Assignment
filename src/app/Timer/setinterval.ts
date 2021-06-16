import { Component } from '@angular/core';


@Component({
  selector: 'app-setinterval',
  template: `
        <div class="container">
          <div class="b">
            <b>With set interval function</b>
            <h1>{{ count }}</h1>
          </div>
        </div>`
})
export class SetintervalComponent {

  count = 60;

  timeout = setInterval(() => {
    if (this.count > 0) {
      this.count -=1;
    }
     else {
      clearInterval(this.timeout);
    }
  }, 1000);
}
