import { Component } from '@angular/core';
import {Product} from '../../interfaces/product';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-list-products',
  standalone: false,
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent implements OnInit {
  listProducts: Product[] = [
    {id: 1, name: 'Coca cola', description: 'Bebida gaseosa', price: 2, stock: 10},
    {id: 2,name: 'Corona', description: 'Bebida con Alcohol', price: 5, stock: 20}
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
