import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public products: Product[] = [];
  public productsFounds: Product[] = [];
  public filter = [
    "Abarrotes",
    "Frutas y Verduras",
    "Limpieza",
    "Farmacia",
  ];

  public colors = [
    {
      type: "Abarrotes",
      color: "primary"
    },
    {
      type: "Frutas y Verduras",
      color: "secondary"
    },
    {
      type: "Limpieza",
      color: "warning"
    },
    {
      type: "Farmacia",
      color: "danger"
    }
  ];

  constructor(private alertController: AlertController,private cartService: CartService,private router:Router,private produc:ProductService) {
    this.products.push({
      name: "Aguacate",
      price: 100,
      description: "Lorem ipsum dolor sit amet.",
      type: "Frutas y Verduras",
      photo: "https://picsum.photos/500/300?random",
    });
    this.products.push({
      name: "Coca Cola",
      price: 20,
      description: "Lorem ipsum dolor sit amet.",
      type: "Abarrotes",
      photo: "https://picsum.photos/500/300?random"
    });
    this.products.push({
      name: "Jabón Zote",
      price: 40,
      description: "Lorem ipsum dolor sit amet.",
      type: "Limpieza",
      photo: "https://picsum.photos/500/300?random"
    });
    this.products.push({
      name: "Aspirina",
      price: 50,
      description: "Lorem ipsum dolor sit amet.",
      type: "Farmacia",
      photo: "https://picsum.photos/500/300?random"
    });
    this.productsFounds = this.produc.getProducts();

  }

  public getColor(type: string): string {
    const itemFound = this.colors.find((element) => {
      return element.type === type;
    });
    let color = itemFound && itemFound.color ? itemFound.color : "";
    return color;
  }

  public filterProducts(): void {
    console.log(this.filter);
    this.productsFounds = this.products.filter(
      item => {
        return this.filter.includes(item.type);
      }
    );
  }

  public addToCart(product: Product, i: number) {
    product.photo = product.photo + i;
    this.cartService.addToCart(product);
    console.log(this.cartService.getCart());
  }
 
  async mostrarAlertaConfirmacion(pos:number) {
    const alert = await this.alertController.create({
      header: 'Confirmar eliminación',
      message: '¿Estás seguro de que deseas eliminar este elemento?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.produc.removeProduct(pos);
            // Aquí puedes agregar la lógica para eliminar el elemento
          }
        }
      ]
    });
  
    await alert.present();
  }
  public openAddProductPage(){
    this.router.navigate(['/add-product']);
  }
  
  
  public openUpdateProductPage(pos:number){
    this.getpos(pos);
    this.router.navigate(['/updateproduct']);
  }
  
  public getpos(pos:number){
    this.produc.pos = pos;
  }

}
