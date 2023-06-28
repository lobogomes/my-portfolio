import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {EnigmaService} from "../../../../shared/services/enigma.service";

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {
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
    if (this.f['answer'].value.toLowerCase() === 'pikachu'){

      this.enigmaService.answerQuestion(1, true);

      this.router.navigate(['/enigma', 1]).then(r  => {
        console.log("to the next enigma...")
      });

    }else{
      this.count++;
      this.f['answer'].setErrors({'invalid': true})
    }
  }
}
