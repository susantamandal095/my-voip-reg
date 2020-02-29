import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Reg } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: Reg= {
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

  constructor(private http: HttpClient) { }

  postUser(reg: Reg){
    return this.http.post(environment.apiBaseUrl+'/registerr',reg);
  }
}
