import { ApiDatabase } from "../data/ApiDatabase";
import { getOrderInputDTO, Order } from "../model/Order";

export class ApiBusiness {
    async getMenu(): Promise<any> {
        const apiDatabase = new ApiDatabase()
        const menu = await apiDatabase.getMenu()

        return menu
    }

    async getOrders(): Promise<any> {
        const apiDatabase = new ApiDatabase()
        const orders = await apiDatabase.getOrders()

        return orders
    }

    async getOrderById(input: getOrderInputDTO) {
        try {
            const order: Order = await new ApiDatabase().getOrderById(input.id)

            if (!order) {
                throw new Error("Order not found!")
            }

            return order
            
        } catch (error) {
            let errorMessage = "Error getting order by it's Id";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
        }
    }

}