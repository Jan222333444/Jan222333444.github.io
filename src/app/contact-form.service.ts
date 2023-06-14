import { Injectable } from '@angular/core';
import axios from "axios";
import {ContactForm} from "./models/contact-form";

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  constructor() { }

  public async saveContactForm(contactForm: ContactForm){
    await axios.post("http://localhost:8080/contact", contactForm);
  }
}
