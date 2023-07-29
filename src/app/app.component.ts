import {Component} from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment as env } from "../environment/environment"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public slip: string = '';

  constructor(public http: HttpClient) {}

  slipFetch(evt: MouseEvent): void {
    const target = (evt.target as HTMLElement).parentElement as HTMLButtonElement;

    target.disabled = true

    this.http.get<SlipRes>(env.slipAPI).subscribe(next => {
      this.slip = next.slip.advice

      target.disabled = false
    }, () => window.alert("Error sending request!"));
  }
}

interface SlipRes {
  slip: {
    id: number,
    advice: string
  }
}