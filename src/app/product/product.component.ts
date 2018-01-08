import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;
  constructor() { }

  ngOnInit() {

    this.products = [
      new Product(1, '第一', 12, 2.3, '这个号', ['设计']),
      new Product(2, '第二', 1, 4.3, '这个号', ['设计', '基础']),
      new Product(3, '第三', 14, 4, '这个不错', ['设计', '提升']),
      new Product(4, '第四', 16, 2.9, '这好吃', ['设计', '平面']),
      new Product(5, '第五', 5, 2.5, '这个号', ['设计', '可以']),
      new Product(6, '第六', 8, 2.3, '这个号', ['设计', '基础'])
    ];
  }
}
export class Product {

  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }
}

