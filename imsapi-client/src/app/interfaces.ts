export interface Item {
    id : number;
    name : string;
    description : string;
    stock : number;
}
export interface Sale {
    id: number;
    date: Date;
    amount: number;
    billName: string;
    remark: string;
    saleItem: SaleItem[];
}
export interface SaleItem {
    id: number;
    quantity: number;
    amount: number;
    remark: string;
    item: Item;
}