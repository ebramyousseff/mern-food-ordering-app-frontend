import type { OrderStatus } from "@/types";

type OrderStatusInfo = {
    label: string;
    value:OrderStatus;
    progressValue:number;
}


export const ORDER_STATUS: OrderStatusInfo[] = [
    {label: "placed", value:"placed", progressValue: 0},
    {label:"AWAITING Restaurant Cinfirmation", value:"paid", progressValue: 25},
    {label:"In Progress", value:"inProgress", progressValue: 50},
    {label:"Out for Delivery", value:"outForDelivery", progressValue: 75},
    {label:"Delivery", value:"delivery", progressValue: 100},
]