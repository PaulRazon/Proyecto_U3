import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';
@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.page.html',
  styleUrls: ['./updateproduct.page.scss'],
})


export class UpdateproductPage {

  public productForm:FormGroup;
  public producto:Product = this.productsService.getProductsWhere(this.productsService.pos);
  constructor(private formBuilder: FormBuilder,
    private productsService:ProductService,
    private toastController: ToastController,
    private router:Router) {
    
      this.productForm = this.formBuilder.group({
        name:[this.producto.name,Validators.required],
        price:[this.producto.price,Validators.required],
        description: [this.producto.description],
        photo:[this.producto.photo,Validators.required],
        type:[this.producto.type,Validators.required],
        
      });
  }

  public async Updateproduct(){
    const produc= this.productForm.value;
    this.productsService.updateProduct(this.productsService.pos,produc);

    const toast = await this.toastController.create({
      message: "Producto añadido",
      duration: 2000,
      position: 'top',

    });
    console.log(produc);
    toast.present();
    this.router.navigate(['/tabs/tab1']);
  }

}

