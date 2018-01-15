import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private products: Product[] = [
    new Product(1, '第一', 12, 2.3, '这个号', ['设计']),
    new Product(2, '第二', 1, 4.3, '这个号', ['设计', '基础']),
    new Product(3, '第三', 14, 4, '这个不错', ['设计', '提升']),
    new Product(4, '第四', 16, 2.9, '这好吃', ['设计', '平面']),
    new Product(5, '第五', 5, 2.5, '这个号', ['设计', '可以']),
    new Product(6, '第六', 8, 2.3, '这个号', ['设计', '基础'])
  ];
  private comments: Comment[] = [
    new Comment(1, 1, '2017-02-02 12:12:22', '王五', 3, '东西一般'),
    new Comment(2, 1, '2017-02-05 10:52:12', '李四', 4, '东西一般'),
    new Comment(3, 1, '2017-02-04 13:40:32', '刘三', 2, '东西完美'),
    new Comment(4, 2, '2017-02-09 22:02:52', '赵六', 4, '东西可以'),
]
  constructor() { }
  getProducts() : Product[] {
    return this.products;
  }
  getProduct(id: number){
    return this.products.find((product) =>product.id == id);
  }
  getCommentsForProductID(id: number) : Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id)
  }
}
export class Product {

  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>) {

  }
}
export class Comment {

  constructor(
    public id: number,
    public productId: number,
    public timeStamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) {

  }
}
