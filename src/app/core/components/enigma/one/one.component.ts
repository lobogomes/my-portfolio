import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  form: FormGroup = new FormGroup({
    answer: new FormControl('')
  })

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      answer: ['', Validators.required]
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  fillCoffee(){
    document.querySelector(".filling")?.classList.add("coffee")
  }

  next(){
    console.log(this.form)
    if (this.f['answer'].value.toLowerCase() === 'java'){
      console.log("correct")
    }else{
      this.f['answer'].setErrors({'invalid': true})
    }
    console.log(this.f['answer'])
  }
}
