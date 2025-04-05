"use client"
import React, { useState } from 'react'
import { Button, buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'
import { checkoutCredits } from '@/lib/actions/strip.actions'

const Checkout = ({plan, amount, yearly}:{plan:string, amount:string, yearly:string}) => {
    const [isLoading, setIsLoading] = useState(false);
    
    const onCheckout = async () => {
        setIsLoading(true);
        try {
            const transaction = { 
                plan,
                amount,
                yearly,
            };
            
            const result = await checkoutCredits(transaction);
            
            if (result?.url) {
                window.location.href = result.url;
            }
        } catch (error) {
            console.error("Checkout error:", error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form action={onCheckout}>
            <section>
                <Button
                    type="submit"
                    role="link"
                    disabled={isLoading}
                    className={cn(
                        buttonVariants({
                            variant: "outline",
                        }),
                        "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter",
                        "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-1 hover:ring-offset-blue-600 text-black dark:text-white"
                    )}
                >
                    {isLoading ? "Processing..." : "Buy Credit"}
                </Button>
            </section>
        </form>
    )
}

export default Checkout