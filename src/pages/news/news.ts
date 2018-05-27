import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {

	news = [];
  params: any;
  headers: any;
  count = 1;

  constructor(public navCtrl: NavController, private http: HttpClient) {
    this.params = new HttpParams()
    this.headers = new HttpHeaders().set('Content-Type','application/json');

  	for(let i = this.count; i <= 10; i++){
  		this.getNews(i);
  		
  	}
  }


  getNews(id :number){
    let headers = this.headers;
    let params = this.params.set('id',this.count.toString());

    this.http.get('https://jsonplaceholder.typicode.com/posts', {params,  headers})
    .subscribe(res => {
      this.news.push(res[0]);
    }), err => {
      console.log(err);
    }
    this.count = this.count + 1;
  }

  doInfinite(infiniteScroll) {

    this.getNews(this.count);
    infiniteScroll.complete();
  }
}
