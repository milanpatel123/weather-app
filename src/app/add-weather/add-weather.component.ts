import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { WeatherService } from '../service/weather.service';
import * as xml2js1 from 'xml2js';
// import * as Parser from 'xml2json';
@Component({
  selector: 'app-add-weather',
  templateUrl: './add-weather.component.html',
  styleUrls: ['./add-weather.component.scss']
})
export class AddWeatherComponent implements OnInit {
  addWeatherForm: FormGroup;

  country = new FormControl('', [Validators.required]);
  state = new FormControl('', [Validators.required]);
  city = new FormControl('', [Validators.required]);
  weatherData: any;

  constructor(
    private fb: FormBuilder,
    private api: WeatherService
  ) { }

  ngOnInit() {
    this.addWeatherForm = this.fb.group({
      country: this.country,
      state: this.state,
      city: this.city
    });
  }

  getWeatherDetail() {
    this.api.getWather(this.addWeatherForm.value).subscribe(
      res => {
        xml2js1.parseString(res,  (err, result) => {
          this.weatherData = result.data;
        });
        console.log(this.weatherData);
      }
    );
  }

}
