import { Component, OnInit } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
 

@Component({
  selector: 'app-aduancatering',
  templateUrl: './aduancatering.page.html',
  styleUrls: ['./aduancatering.page.scss'],
})

export class AduancateringPage implements OnInit {
  constructor(private http:HttpClient){}
  onSubmit(data: any)

  {
    this.http.post('http://asabeta.com/api/catering/add',data)
    .subscribe((result)=>{
console.warn('result',result)
    })
    console.warn(data);
  }

  

  ngOnInit() {
  
  }
}