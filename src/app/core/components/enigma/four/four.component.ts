import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {EnigmaService} from "../../../../shared/services/enigma.service";

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.scss']
})
export class FourComponent implements OnInit{
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
    if (this.f['answer'].value.toLowerCase() === 'fibonacci'){

      this.enigmaService.answerQuestion(3, true);

      this.router.navigate(['my-contact']).then(r  => {
        console.log("congrats!!!! you win the enigma :)")
      });

    }else{
      this.count++;
      this.f['answer'].setErrors({'invalid': true})
    }
  }

}
