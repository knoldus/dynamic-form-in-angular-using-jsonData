import {Injectable} from "@angular/core";

@Injectable()
export class AppConstants {
  public static readonly reactFormData = [
    {
      "name": "firstName",
      "label": "First name:",
      "value": "",
      "type": "text",
      "validators": {
        "required": true,
        "minlength": 10
      }
    },
    {
      "name": "lastName",
      "label": "Last name:",
      "value": "",
      "type": "text",
      "validators": {}
    },
    {
      "name": "comments",
      "label": "Comments",
      "value": "",
      "type": "textarea",
      "validators": {}
    },
    {
      "name": "agreeTerms",
      "label": "This is a checkbox?",
      "value": "false",
      "type": "checkbox",
      "validators": {}
    },
    {
      "name": "lightDark",
      "label": "Do you like toggles?",
      "value": "false",
      "type": "toggle",
      "validators": {}
    }
  ]
}
