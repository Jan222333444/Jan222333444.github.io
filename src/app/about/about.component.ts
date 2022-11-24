import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  lang: string = 'en';

  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
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
