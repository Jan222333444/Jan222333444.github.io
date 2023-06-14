import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ContactFormService} from "../contact-form.service";
import {FormBuilder} from "@angular/forms";
import {ContactForm} from "../models/contact-form";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit{

  lang: string = 'en';
  email: string = 'info@jankorb.de'
  contactForm = this.formBuilder.group({
    email: '',
    name: '',
    message: ''
  })

  //emailContact: FormControl

  constructor(private route: ActivatedRoute, private router:Router, private contactService: ContactFormService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
          if(params['lang'] == undefined || params['lang'] == null){
            this.redir(this.lang)
          }
          this.lang = params['lang'];
        }
      );
  }

  redir(langNew: string | null | undefined){
    this.router.navigate(["/".concat(this.router.url.split('?')[0])], {queryParams:{lang: langNew}});
  }

  async onSubmit(){
    console.warn(this.contactForm.value)
    await this.contactService.saveContactForm(this.contactForm.value as ContactForm)
  }

}
