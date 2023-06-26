import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {EnigmaService} from "../../../../shared/services/enigma.service";

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  count = 0;

  form: FormGroup = new FormGroup({
    answer: new FormControl('')
  })

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private enigmaService: EnigmaService) {
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
    if (this.f['answer'].value.toLowerCase() === 'java'){

      this.enigmaService.answerQuestion(0, true);

      this.router.navigate(['/enigma', 0]).then(r  => {
        console.log("to the next enigma...")
      });

    }else{
      this.count++;
      this.f['answer'].setErrors({'invalid': true})
    }
  }
}
