import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/Services/order-details.service';
//import { OrderDetailsService} from 'src\app\Services\order-details.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private service:OrderDetailsService ){}
  frunitureData:any;
  ngOnInit(): void{
    this.frunitureData=this.service.frunitureDetials;

  }

}
