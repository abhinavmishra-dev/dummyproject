import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  constructor(private toastr: ToastrService) {}
  
 productList=[{
   productName:'School Management System',
   productThumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnQOJftJgWO_piIsiUCM9WeCCUM56pfpKhgA&usqp=CAU",
   productDetail:"School Management System make up the bulk of the card's content.",
   productUrl:'see more'
 },
 {
  productName:'Employee Management System',
  productThumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnQOJftJgWO_piIsiUCM9WeCCUM56pfpKhgA&usqp=CAU",
  productDetail:"Employee Management System and make up the bulk of the card's content.",
  productUrl:'See more'
},
{
  productName:'Traffic Management System',
  productThumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnQOJftJgWO_piIsiUCM9WeCCUM56pfpKhgA&usqp=CAU",
  productDetail:"Traffic Management System content and make up the bulk of the card's content.",
  productUrl:'See more'
},
]
showResult = false;
deleteProductList(index:any){
  this.showResult=true
  let indexArr=this.productList.findIndex((x: { productName: any; }) => x.productName === index)
    //  console.log(indexArr)
    //  console.log(this.cardArr[indexArr])
     this.productList.splice( indexArr,1 ); 
     this.toastr.success('Successfully Deleated', index);
}
}
