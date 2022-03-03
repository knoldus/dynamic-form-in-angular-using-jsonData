import {Component, OnInit} from '@angular/core';
import {AppConstants} from "../../Data/app-constants";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {JsonFormControls} from "../../Data/form-model";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formData: any;
  myForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.formData = AppConstants.reactFormData;
    this.createForm();
  }

  createForm() {
    let validatorsToAdd: any = [];
    this.formData.forEach((data: JsonFormControls) => {
        validatorsToAdd = [];
        for (const [key, value] of Object.entries(data.validators)) {
          switch (key) {
            case 'min':
              validatorsToAdd.push(Validators.min(value));
              break;
            case 'max':
              validatorsToAdd.push(Validators.max(value));
              break;
            case 'required':
              if (value) {
                validatorsToAdd.push(Validators.required);
              }
              break;
            case 'requiredTrue':
              if (value) {
                validatorsToAdd.push(Validators.requiredTrue);
              }
              break;
            case 'email':
              if (value) {
                validatorsToAdd.push(Validators.email);
              }
              break;
            case 'minLength':
              validatorsToAdd.push(Validators.minLength(value));
              break;
            case 'maxLength':
              validatorsToAdd.push(Validators.maxLength(value));
              break;
            case 'pattern':
              validatorsToAdd.push(Validators.pattern(value));
              break;
            case 'nullValidator':
              if (value) {
                validatorsToAdd.push(Validators.nullValidator);
              }
              break;
            default:
              break;
          }
        }
        this.myForm.addControl(
          data.name,
          this.fb.control(data.value, validatorsToAdd)
        );
      }
    )
  }

  onSubmit() {
    console.log('form on submit', this.myForm);
  }
}
