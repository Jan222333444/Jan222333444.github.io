import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {FormControl} from "@angular/forms";
import {language} from "../globals";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  public matButtonToggle = new FormControl('en');


  constructor(private router:Router, private route: ActivatedRoute) {

  }

  redir(langNew: string | null | undefined){
    this.router.navigate(["/".concat(this.router.url.split('?')[0])], {queryParams:{lang: langNew}});
  }
/*
  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }*/
}
