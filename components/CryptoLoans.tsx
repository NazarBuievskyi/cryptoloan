import SwapperCalculator from "@/components/SwapperCalculator";
import LoansCard from "@/components/LoansCard";

export default function CryptoLoans(){

    return(
        <div className={"bg-[url('../public/bg-image.webp')] p-5 py-10 lg:p-20  rounded-sm"}>
            <div className={'flex gap-3 flex-col-reverse lg:flex-row justify-center items-center'}>
                <div className={'flex-1 mt-10 lg:mt-0'}>
                    <div className={'pb-12'}>
                        <h1 className={'font-bold text-5xl pb-12 '}>Get Instant Funds Against Your Crypto</h1>
                        <p className={'text-xl'}>Access extra funds without selling your crypto
                            Grow your portfolio or invest in your dreams</p>
                    </div>
                    <div className={'grid grid-cols-2 gap-3'}>
                        <div className={'grid grid-cols-2 items-center'}>
                            <h2 className={'font-bold text-3xl mr-5'}>Safe</h2>
                            <p className={'text-xs'}>Top-tier security, <br/>
                                Cold wallet storage</p>
                        </div>
                        <div className={'grid grid-cols-2  items-center'}>
                            <h2 className={'font-bold text-3xl mr-5'}>Easy</h2>
                            <p className={'text-xs'}>No KYC & credit check</p>
                        </div>
                        <div className={'grid grid-cols-2  items-center'}>
                            <h2 className={'font-bold text-3xl mr-5'}>Start</h2>
                            <p className={'text-xs'}>from $100</p>
                        </div>
                        <div className={'grid grid-cols-2  items-center'}>
                            <h2 className={'font-bold text-3xl mr-5'}>***</h2>
                            <p className={'text-xs'}>Currencies</p>
                        </div>
                    </div>
                </div>
                <div className={'flex flex-1 lg:justify-end justify-center w-full'}>
                    <div className={'w-full'}>
                        <SwapperCalculator/>
                        <LoansCard/>
                    </div>
                </div>
            </div>
        </div>
    )
}