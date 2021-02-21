import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Product } from "./product";
import { Order, OrderItem } from "./order";

@Injectable()
export class DataService {

    constructor(private http: HttpClient) { }

    private token: string = "";
    private tokenExpiration: Date;

    public order: Order = new Order();

    public products: Product[] = [];

    public loadProducts(): Observable<Product[]> {
        return this.http.get("api/products")
           .map((result: Response) => this.products = result.json());
    }

    public get loginRequired(): boolean {
        return this.token.length == 0 || this.tokenExpiration > new Date();
    }

    public checkout() {
        return this.http.post("api/orders", this.order)
                .map(response => {
                    this.order = new Order();
                    return true;
                });
    }

    public AddToOrder(newProduct: Product) {

        var item: OrderItem = new OrderItem();
        item.productId = newProduct.id;
        item.productArtist = newProduct.artist;

        this.order.items.push(item);
    }
}