import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders=[{
    name:'Max',
    place:'Trivandrum',
    item:'Adidas Tshirt',
    price:500
  },{
    name:'Anny',
    place:'Mysore, Karanatka',
    item:'Nike Shoe',
    price:800
  },
  {
    name:'Aman',
    place:'Bangalore',
    item:'Digital Watch',
    price:2300
  },
  {
    name:'Lilly',
    place:'Ernakulam, Kerala',
    item:'Wallet',
    price:2300
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
