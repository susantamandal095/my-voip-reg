import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    function readURL(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        
       
      }
    }
    
    $("#imgInp").change(function() {
      readURL(this);
    });
  }

}
