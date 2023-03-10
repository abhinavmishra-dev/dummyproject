import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  constructor(private toastr: ToastrService) {}
cardArr:any=[
  {img:'https://cdn.pixabay.com/photo/2018/02/21/17/36/programming-3170991_960_720.png',head:'Card Title1',para:'Some quick example text to build on the card title and make up the bulk of the card content.',btn:'Read more',nav:'contact-us'},
  {img:'https://cdn.pixabay.com/photo/2018/02/21/17/36/programming-3170991_960_720.png',head:'Card Title2',para:'Some quick example text to build on the card title and make up the bulk of the card content.',nav:'contact-us'},
  {img:'https://cdn.pixabay.com/photo/2018/02/21/17/36/programming-3170991_960_720.png',head:'Card Title3',para:'Some quick example text to build on the card title and make up the bulk of the card content.',btn:'Read more',nav:'contact-us'},
  {img:'https://cdn.pixabay.com/photo/2018/02/21/17/36/programming-3170991_960_720.png',head:'Card Title4',para:'Some quick example text to build on the card title and make up the bulk of the card content.',btn:'Read more',nav:'contact-us'}
]
showResult = false;
removeIndex(index:any){
  this.showResult=true
  // console.log(index)
   let indexArr=this.cardArr.findIndex((x: { head: any; }) => x.head === index)
    //  console.log(indexArr)
    //  console.log(this.cardArr[indexArr])
     this.cardArr.splice( indexArr,1 ); 
     this.toastr.success('Successfully Deleated', index);
}
}