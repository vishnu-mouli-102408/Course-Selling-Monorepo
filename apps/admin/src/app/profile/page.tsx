"use client";

import { ProfilePage } from "ui"
import {userEmailState} from "store"
import {useRecoilValue} from "recoil"
import {userState} from "store"

export default  function Profile(): JSX.Element {
  const userEmail = useRecoilValue(userEmailState);
  const user = useRecoilValue(userState)
  console.log("User Email",user);
  
    return <ProfilePage/>
  }