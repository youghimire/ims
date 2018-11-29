export interface Item {
    id : number;
    name : string;
    description : string;
    stock : number;
    saleItems: Sale[];
    purchaseItems: Purchase[];
}
export interface Sale {
    id: number;
    date: Date;
    amount: number;
    billName: string;
    remark: string;
    saleItems: SaleItem[];
}
export interface SaleItem {
    id: number;
    quantity: number;
    amount: number;
    remark: string;
    item: Item;
    sale: Sale;
}
export interface Distributor {
    id: number;
    name: string;
    address: string;
    phone: string;
    email: string;
    panOrVatNo: string;
    purchases: Purchase[];
}
export interface Purchase {
    id: number;
    distributer: Distributor;
    invoiceNo: string;
    date: Date;
    amount: number;
    paymentMethod: number;
    purchaseItems: PurchaseItem[];
    }
export interface PurchaseItem {
    id: number;
    quantity: number;
    amount: number;
    purchase: Purchase;
    item: Item;
}
export  enum PAYMENT_METHOD {
    PAYMENT_BY_CHEQUE,
    PAYMENT_BY_CASH,
    PAYMENT_BY_AFTER_SALES_CASH
}
export let paymentMethods : {id: number, value: string}[] = [
    {"id": PAYMENT_METHOD.PAYMENT_BY_CHEQUE, value: "Cheque"},
    {"id": PAYMENT_METHOD.PAYMENT_BY_CASH, value: "Cash"},
    {"id": PAYMENT_METHOD.PAYMENT_BY_AFTER_SALES_CASH, value: "After Sale Cash"}
]

