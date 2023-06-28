import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {EnigmaService} from "../../../../shared/services/enigma.service";

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements OnInit{
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

  next(){
    if (this.f['answer'].value.toLowerCase() === 'aoshima'){

      this.enigmaService.answerQuestion(2, true);

      this.router.navigate(['/enigma', 2]).then(r  => {
        console.log("to the next enigma...")
      });

    }else{
      this.count++;
      this.f['answer'].setErrors({'invalid': true})
    }
  }
}
