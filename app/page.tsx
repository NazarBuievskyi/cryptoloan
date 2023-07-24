import CryptoLoans from "@/components/CryptoLoans";
import DutiesCard from "@/components/DutiesCard";
import MainAccordion from "@/components/MainAccordion";

export default function Home() {
    return (
        <main>
            <CryptoLoans/>
            <div className={'px-3 2xl:px-0'}>
                <DutiesCard/>
                <MainAccordion/>
            </div>
        </main>
    );
}
