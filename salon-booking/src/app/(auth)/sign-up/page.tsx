"use client"
import ContinueWithGoogle from "@/components/auth/continueWithGoogle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Divider from "@/components/ui/divider"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const SignUp = () => {
    return <section>
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">Create an account</CardTitle>
                <CardDescription>Enter your email to create an account and start organizing bookings effortlessly.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <ContinueWithGoogle onClick={() => console.log("clicked")} />
                <Divider label="or with" />
                <SignUpWithEmailAndPassword />
            </CardContent>
            <CardFooter>
                <Button variant="default" className="w-full ">Create an account</Button>
            </CardFooter>
        </Card>
    </section>
}

export default SignUp

const SignUpWithEmailAndPassword = () =>
    <>
        <div className="grid gap-2">
            <Label htmlFor="email" className="text-sm">Email</Label>
            <Input type="email" placeholder="smith@example.com" required />
        </div>
        <div className="grid gap-2">
            <Label htmlFor="password" className="text-sm font-medium">Password</Label>
            <Input type="password" required />
        </div>
    </>

