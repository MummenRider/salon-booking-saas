import { SessionProvider } from "next-auth/react";
import React, { FC } from "react"
interface AuthProviderProps{
    children: React.ReactNode;
    session?: any;
}
const AuthProvider: FC<AuthProviderProps> = ({session, children}) => {
    return <SessionProvider session={session}>{children}</SessionProvider>
}

export default AuthProvider