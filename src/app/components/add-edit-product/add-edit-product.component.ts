import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-add-edit-product',
  standalone: false,
  templateUrl: './add-edit-product.component.html',
  styleUrl: './add-edit-product.component.css'
})
export class AddEditProductComponent implements OnInit {
  
  form: FormGroup;
  
  constructor(private fb: FormBuilder) { 
    this.form= this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['null', Validators.required],
      stock: ['null', Validators.required],
    });
  }


  ngOnInit(): void {
    // Initialization logic here}
  
  }

  addProduct(){

    // console.log(this.form);


    const product: Product = {
      name: this.form.value.name,
      description: this.form.value.description,
      price: this.form.value.price,
      stock: this.form.value.stock,

    }

    console.log(product);
  }
}