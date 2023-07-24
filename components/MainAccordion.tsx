import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Button} from "@/components/ui/button";
export default function MainAccordion(){
    return(
        <div className={'mt-16'}>
            <div className={'text-center mb-10'}>
                <h2 className={'text-4xl font-semibold '}>How to Borrow Cryptocurrency</h2>
                <p className={'mt-5 text-xl text-zinc-400'}>Simplify the process of obtaining and handling your crypto loan with us</p>
            </div>
            <div className={'mb-10'}>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className={'font-semibold text-xl'}>Calculate your crypto loan</AccordionTrigger>
                        <AccordionContent className={'text-zinc-400 text-md'}>
                            Evaluate various collateral and Loan-to-Value (LTV) options to determine your crypto-backed loan. Afterward, provide your preferred payout address for receiving the funds. Finally, confirm the transaction through phone or email.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className={'font-semibold text-xl'}>Get crypto loan within minutes</AccordionTrigger>
                        <AccordionContent className={'text-zinc-400 text-md'}>
                            Submit the collateral, and {`we'll`} swiftly transfer the loan amount to your designated payout address, without delays or additional verifications.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className={'font-semibold text-xl'}>Start spending</AccordionTrigger>
                        <AccordionContent className={'text-zinc-400 text-md'}>
                            Take advantage of your loan for as long as you need. {`We'll`} simply keep you informed about the rate of your collateral currency over time.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className={'font-semibold text-xl'}>Get back your collateral</AccordionTrigger>
                        <AccordionContent className={'text-zinc-400 text-md'}>
                            You have the flexibility to repay your collateral at any time. By paying the full Repayment amount, we will return your collateral promptly.                            </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <Button className={'w-full md:w-44'}>Get Loan</Button>
        </div>
    )
}