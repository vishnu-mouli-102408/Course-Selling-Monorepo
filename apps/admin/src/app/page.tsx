"use client";
import { Landing } from "ui";
import { useSession } from "next-auth/react"
import { useSetRecoilState, useRecoilValue } from "recoil";
import {userState} from "store"

export default  function Page():JSX.Element{
  const { data: session } = useSession()
  const setUser = useSetRecoilState(userState);
  const user = useRecoilValue(userState)
  
  
  return <Landing session={session} onSignIn={(session: any)=> {
    console.log("USER",session);
    console.log("SignIn called");
    
    if(session){
      setUser({
        isLoading: false,
        session: session
      });
    } else{
      setUser({
        isLoading: true,
        session: null
      });
    }
    
  }} />;
}
