import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
@Component({
  selector: 'app-form1-arr',
  templateUrl: './form1-arr.component.html',
  styleUrls: ['./form1-arr.component.scss']
})
export class Form1ArrComponent implements OnInit {
  submitted:boolean=false
  form: FormGroup;
  webData = [
    { id: 1, name: 'PHP' },
    { id: 2, name: 'Laravel' },
    { id: 3, name: 'Angular' },
    { id: 4, name: 'React' },
    { id: 5, name: 'js' }
  ];
  ngOnInit() {

  }

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      orders: new FormArray([]),
      phone: ['', [this.ValidatePhone]]
    });
    this.addCheckboxesToForm();
  }

  get ordersFormArray() {
    return this.form.get('orders') as FormArray;
  }

  private addCheckboxesToForm() {
    this.webData.forEach(() => this.ordersFormArray.push(new FormControl(false)));
  }
  get f()
  {
    return this.form.controls;
  }

  ValidatePhone(control: AbstractControl): { [key: string]: any } | null  {
    if (control.value && control.value.length != 10) {
      return { 'phoneNumberInvalid': true };
    }
    return null;
  }
  submit() {
    this.submitted=true
    const selectedOrderIds = this.form.value.orders
      .map((checked: any, i: any) => {
        console.log(checked)
        checked ? this.webData[i].id : null
      }
      )
      .filter((v:any) => v !== null);
      console.log(selectedOrderIds);
  }
}
