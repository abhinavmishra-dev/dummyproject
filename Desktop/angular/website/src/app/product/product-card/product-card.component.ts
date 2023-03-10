import { Component,Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  
  @Input()  productDetails!:any; 
  @Output() deleateProductEmitter = new EventEmitter<string>();
  deleateProductEvent(value:string){
    this.deleateProductEmitter.emit(value)
  }

}
