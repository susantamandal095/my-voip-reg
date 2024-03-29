import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';


@Component({
  selector: 'app-themeeditor',
templateUrl: './themeeditor.component.html',
styleUrls: ['./themeeditor.component.css'],
  providers: [UserService]
})
export class ThemeeditorComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }

  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      sitetitle: '',
      email: '',      
      facebooklink: '',
    twitterlink: '',
    youtubelink: '',
    address: '',
    openinghours: '',
      phone: '',
      googlemapurl: '',
    firstplansname: '',
    firstplansprice: '',
    firstregularprice: '',
    firstsaleprice: '',
    firstbuynowurl: '',
    firstfreetrialurl: '',
    firstplansfeatures: '',
    firstphone: '',
    firstemail: '',
    secondplansname: '',
    secondplansprice: '',
    secondregularprice: '',
    secondsaleprice: '',
    secondbuynowurl: '',
    secondfreetrialurl: '',
    secondplansfeatures: '',
    secondphone: '',
    secondemail: '',
    threeplansname: '',
    threeplansprice: '',
    threeregularprice: '',
    threesaleprice: '',
    threebuynowurl: '',
    threefreetrialurl: '',
    threeplansfeatures: '',
    threephone: '',
    threeemail: '',
    fourplansname: '',
    fourplansprice: '',
    fourregularprice: '',
    foursaleprice: '',
    fourbuynowurl: '',
    fourfreetrialurl: '',
    fourplansfeatures: '',
    fourphone: '',
    fouremail: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
