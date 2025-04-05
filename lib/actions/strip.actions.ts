"use server"
import Stripe from "stripe"

interface CheckoutProps {
  plan: string;
  amount: string;
  yearly: string;
}

export const checkoutCredits = async (transaction:CheckoutProps) => {

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

    const amount = Number(transaction.amount)*100

    try{
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price_data:{
                        currency: "usd",
                        unit_amount: amount,
                        product_data:{
                            name:transaction.plan,
                        }
                    },
                    quantity: 1
                }
            ],
            metadata:{
                plan:transaction.plan,
                yearly:transaction.yearly,
            },
            mode:"payment",
            success_url:`${process.env.NEXT_PUBLIC_URL}/success`,
            cancel_url:`${process.env.NEXT_PUBLIC_URL}/cancel`,
        })
        return { url: session.url };
    }catch(error){
        console.log(error)
    }
}