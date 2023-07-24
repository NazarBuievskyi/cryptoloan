import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export default function DutiesCard(){
    return(
        <div className={'mt-16'}>
            <div className={'text-center mb-10'}>
                <h2 className={'text-4xl font-semibold '}>Endless Opportunities with a Single Cryptocurrency Loan</h2>
                <p className={'mt-5 text-xl text-zinc-400'}>Maximize the potential of your crypto assets and make your dreams a reality today</p>
            </div>
            <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  justify-center gap-3 mb-10'}>
                <Card >
                    <CardHeader >
                        <CardTitle>Buy more crypto</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className={'text-zinc-400'}>{`Don't`} wait for the all-time-high rate of your favorite coin! Hold your crypto and access liquidity to buy even more without hesitation.</p>
                    </CardContent>
                    {/*<CardFooter>*/}
                    {/*</CardFooter>*/}
                </Card>
                <Card>
                    <CardHeader >
                        <CardTitle>Optimize taxes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className={'text-zinc-400'}>Optimize tax efficiency with a crypto loan and spending – both are non-taxable events as they {`don't`} generate direct earnings.</p>
                    </CardContent>
                    {/*<CardFooter>*/}
                    {/*</CardFooter>*/}
                </Card>
                <Card>
                    <CardHeader >
                        <CardTitle>Make a huge purchase</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className={'text-zinc-400'}>Unleash your dreams! Utilize your crypto to fulfill major expenses like buying a house, a car, traveling to new places, or funding your studies.</p>
                    </CardContent>
                    {/*<CardFooter>*/}
                    {/*</CardFooter>*/}
                </Card>
                <Card>
                    <CardHeader >
                        <CardTitle>Invest in your business</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className={'text-zinc-400'}>Reinvest your crypto holdings and make your company grow. Cover operational expenses, pay employees on time, or even buy another company.</p>
                    </CardContent>
                    {/*<CardFooter>*/}
                    {/*</CardFooter>*/}
                </Card>
            </div>
        </div>
    )
}