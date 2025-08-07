import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { FaGoogle } from "react-icons/fa"

const SignUp = () => {
    return <section>
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">Create an account</CardTitle>
                <CardDescription>Enter your email to create an account and start organizing bookings effortlessly.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <SignUpWithGoogle/>
                <Divider />
                <SignUpWithEmailAndPassword />
            </CardContent>
            <CardFooter>
                <Button variant="default" className="w-full ">Create an account</Button>
            </CardFooter>
        </Card>
    </section>
}

export default SignUp

const SignUpWithGoogle = () =>
     <Button variant="outline" className="w-fit mx-auto">
        <FaGoogle className="h-5 w-5"/> Sign up with Google
    </Button>
const Divider = () => 
    <div className="relative">
        <div className="absolute inset-0 flex items-center"><span className="w-full border-t"/></div>
        <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card text-muted-foreground px-2">or with</span>
        </div>
    </div>
const SignUpWithEmailAndPassword = () =>
    <>
        <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" placeholder="smith@example.com" required/>
        </div>
        <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input type="password"required/>
        </div>
    </>
    
