"use client";
import { Landing } from "ui";
import { useSession } from "next-auth/react"
import { useSetRecoilState, useRecoilValue } from "recoil";
import {userState} from "store"

export default  function Page():JSX.Element{
  const { data: session } = useSession()
  const setUser = useSetRecoilState(userState);
  const user = useRecoilValue(userState)
  console.log("USER",session);
  
    
  return <Landing session={session} onSignIn={()=> {
     setUser({
      isLoading: false,
      session: session
    });
  }} />;
}
