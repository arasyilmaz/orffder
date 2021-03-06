import { Component, Injectable, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ScrollSpyService } from 'ngx-scrollspy';
import { Router } from '@angular/router';

@Injectable()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements AfterViewInit, AfterViewChecked {
  sections = {};
  currentUrl = "";
  constructor(private scrollSpyService: ScrollSpyService, private router: Router) { }
  
  ngOnInit() {

    window.onscroll = function () 
    { 
       myFunction()
    };
    var navbar1 = document.getElementById("navbar1");
    function myFunction() {
      if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
          navbar1.style.backgroundColor = "#272a33";
          navbar1.style.padding = "10px";
      }
      else {
        
          navbar1.style.backgroundColor = "";
          navbar1.style.padding = "20px";
      }
    }
    this.clearMenu();
  }

  toggleMenu() {
    document.getElementById('navbarCollapse2').classList.toggle('show');
    document.getElementById('menu_button').classList.toggle('collapsed');
  }

  ngAfterViewInit() {
    
    let sections: NodeListOf<Element> = document.querySelectorAll(".section");
    let self = this;

    Array.prototype.forEach.call(sections, function (e) {
      self.sections[e.id] = parseFloat(e.offsetTop);
    });
    
    
  }

  ngAfterViewChecked() {
    this.currentUrl = this.router.url;
    console.log(this.currentUrl);
    this.clearMenu();
  }

  clearMenu() {
      var color = 'black';
      this.currentUrl == '/education' ? color= 'white' : '';
      document.querySelector('a[data="id_home"]').setAttribute('style', 'color:'+color+'!important');
      document.querySelector('a[data="id_education"]').setAttribute('style', 'color:'+color+'!important');
      document.querySelector('a[data="id_features"]').setAttribute('style', 'color:'+color+'!important');
      document.querySelector('a[data="id_pricing"]').setAttribute('style', 'color:'+color+'!important');
      document.querySelector('a[data="id_about"]').setAttribute('style', 'color:'+color+'!important');
      document.querySelector('a[data="id_blog"]').setAttribute('style', 'color:'+color+'!important');
      document.querySelector('a[data="id_contact"]').setAttribute('style', 'color:'+color+'!important');
      if(this.router.url == "/index1" || this.router.url == "/" )
      {
        document.querySelector('a[data="id_home"]').setAttribute('style', 'color:#ee6352 !important');  
      }
      else if(this.router.url == "/contact")
      {
        document.querySelector('a[data="id_contact"]').setAttribute('style', 'color:#ee6352 !important');  
      }
      else if(this.router.url == "/education")
      {
        document.querySelector('a[data="id_education"]').setAttribute('style', 'color:#ee6352 !important');  
      }
  }

  checkColor(){
    return true;
  }
}



