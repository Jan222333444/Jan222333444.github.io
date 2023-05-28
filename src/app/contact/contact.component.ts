import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit{

  lang: string = 'en';
  email: string = 'info@jankorb.de'

  constructor(private route: ActivatedRoute, private router:Router) { }

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

}
