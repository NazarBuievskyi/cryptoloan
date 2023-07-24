import SwapperCalculator from "@/components/SwapperCalculator";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Button} from "@/components/ui/button";
import SavingsCard from "@/components/SavingsCard";

export default function Savings(){
    return(
        <div className={'flex'}>
            <div>

            </div>
            <div className={'w-96'}>
                <SwapperCalculator/>
                <SavingsCard/>
            </div>
        </div>
    )
}