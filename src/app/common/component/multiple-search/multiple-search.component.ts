import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { CommonServiceService } from '../../Service/common-service.service';

@Component({
  selector: 'app-multiple-search',
  templateUrl: './multiple-search.component.html',
  styleUrls: ['./multiple-search.component.css']
})
export class MultipleSearchComponent implements OnInit {

  constructor(private commonService: CommonServiceService, private formBuilder: FormBuilder) { }

  // control = new FormControl();
  streets: string[] = ['Pune', 'Bengaluru', 'Hyderabad', 'Kolkata', 'Delhi'];

  // areas: any = {
  //   "Pune": [
  //     "Buffalo",
  //     "Rochester",
  //     "Yonkers",
  //     "Syracuse",
  //     "Albany",
  //     "New Rochelle",
  //     "Mount Vernon",
  //     "Schenectady",
  //     "Utica",
  //     "White Plains",
  //     "Hempstead",
  //     "Troy",
  //     "New York City",
  //     "Niagara Falls",
  //     "Binghamton",
  //     "Freeport",
  //     "Valley Stream"
  //   ],
  //   "Bengaluru": [
  //     "Buffalo",
  //     "Rochester",
  //     "Yonkers",
  //     "Syracuse",
  //     "Albany",
  //     "New Rochelle",
  //     "Mount Vernon",
  //     "Schenectady",
  //     "Utica",
  //     "White Plains",
  //     "Hempstead",
  //     "Troy",
  //     "New York City",
  //     "Niagara Falls",
  //     "Binghamton",
  //     "Freeport",
  //     "Valley Stream"
  //   ],
  // }

  // streets: any = this.streets1;

  filteredStreets: Observable<string[]> | undefined;
  @Output() valueChange = new EventEmitter();

  allCountry: any;
  allCities: any;
  showCityInput = false;
  addressForm: FormGroup = this.formBuilder.group({
    countryVal: '',
    cityVal: '',
  });

  getCityVal: any;
  getSubArea: any;

  ngOnInit() {
    // console.log(this.areas);
    this.getAllData();

  }

  // ==================================
  getAllData(): void {
    this.commonService.getCities().subscribe(data => {
      console.log(data);
      this.allCountry = data;
      // this.allData = this.control.valueChanges.pipe(
      //   startWith(''),
      //   map(value => this._filter(value))
      // );
    });
  }

  getAreaData(data: any): void {
    if(data !== undefined){
      this.valueChange.emit(this.getSubArea);
    }
  }

  getVal(event: any) {
    console.log(event);
    this.allCountry.forEach((data: any) => {
      if (data.country == event) {
        this.allCities = data.city;        
      }
    });

    if(event !== undefined){
      this.valueChange.emit(this.getCityVal);
    }

    console.log(this.allCities);
    if(this.addressForm.value.countryVal != ''){
      this.showCityInput = true;
    }
  }

  getInputVal(event: any) {
    const inputValue = event.target.value;
    // this.emailInputOtp = inputValue;
    if(inputValue != ''){
      this.showCityInput = true;
    }
  }
  // ===============================

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter((street: any) => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

}


