import {TestBed, inject, waitForAsync} from '@angular/core/testing';
import {HttpClientTestingModule } from "@angular/common/http/testing";

import { AppComponent } from './app.component';

import { environment as env } from "../environment/environment"
import {HttpClient, HttpClientModule} from "@angular/common/http";

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, HttpClientModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it('fetch api works', () => {
    waitForAsync(inject([HttpClient], (http: HttpClient) => {
      http.get(env.slipAPI).subscribe()
    }));
  });
});
