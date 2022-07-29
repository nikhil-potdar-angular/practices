import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isMasterSel:boolean=false;
  categoryList:any;
  checkedCategoryList:any;
  form!:FormGroup
  constructor(private fb:FormBuilder) {
    this.isMasterSel = false;

    this.categoryList = [
        {id:1, value:'PHP',isSelected:false},
        {id:2,value:'Laravel',isSelected:false},
        {id:3,value:'Angular',isSelected:false},
        {id:4,value:'React',isSelected:false},
        {id:5,value:'Vue',isSelected:false},
        {id:6,value:'JQuery',isSelected:false},
        {id:7,value:'Javascript',isSelected:false},
      ];
    this.getCheckedItemList();
   }
  ngOnInit(): void {
  }
  checkUncheckAll() {
    console.log(this.isMasterSel)
    for (var i = 0; i < this.categoryList.length; i++) {
      this.categoryList[i].isSelected = this.isMasterSel;
    }
    console.log(this.categoryList)
    this.getCheckedItemList();
  }

  isAllSelected() {
    this.isMasterSel = this.categoryList.every(function(item:any) {
        return item.isSelected == true;
      })
    console.log(this.isMasterSel)
    this.getCheckedItemList();
  }

  getCheckedItemList(){
    this.checkedCategoryList = [];
    for (var i = 0; i < this.categoryList.length; i++) {
      if(this.categoryList[i].isSelected)
      this.checkedCategoryList.push(this.categoryList[i]);
    }
    this.checkedCategoryList = JSON.stringify(this.checkedCategoryList);
    // console.log(this.checkedCategoryList)
  }
}
