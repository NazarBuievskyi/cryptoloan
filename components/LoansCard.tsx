import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Button} from "@/components/ui/button";

export default function LoansCard(){
    return(
        <Card>
            <CardHeader>
                <CardTitle>Borrow now & hold for later</CardTitle>
                {/*<CardDescription>Deploy your new project in one-click.</CardDescription>*/}
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="collateral">Send collateral</Label>
                            <Input id="collateral" placeholder="0" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="funds">Get funds</Label>
                            <Select>
                                <SelectTrigger id="funds">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="next">Next.js</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className={'flex justify-between text-sm '}>
                            <h2 className={'font-semibold'}>Loan Term</h2>
                            <p>Unlimited</p>
                        </div>
                        <div className={'flex justify-between text-sm '}>
                            <h2 className={'font-semibold'}>Monthly Interest</h2>
                            <p>%%%</p>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter >
                <Button className={'w-full'}>Deploy</Button>
            </CardFooter>
        </Card>
    )
}