import { useEffect, useState } from "react";
import {Box, useMediaQuery} from "@mui/material";
import {useParams} from "react-router-dom";
import Navbar from "../navbar";
import FriendListWidget from "../widgets/FriendListWidget";
import MyPostWidget from "../widgets/MyPostWidget";
import PostsWidget from "../widgets/PostsWidget";
import UserWidget from "../widgets/UserWidget";


const ProfilePage = ()=> {
    const [user, setUser] = useState(null);
    const {userId} = useParams();
    const token = "JWT_SECRET";
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

    const getUser = async () => {
        const response = await fetch (`https://backenddd-6yas.onrender.com/user/${userId}`,{
            method : "GET",
            headers: {Authorization : `Bearer ${token}`}
        })
        const data = await response.json();
        setUser(data);
    }

    useEffect(() => {
        getUser();
        // eslint-disable-next-line
    },[]);

    if(!user) return null;

    return(
        <Box>
          <Navbar/>
            <Box
        width = "100%"
        padding = "2rem 6%"
        display = {isNonMobileScreens ? "flex" : "black"}
        gap ="2rem"
        justifyContent= "center"
        >
          <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
            <UserWidget userId={userId} picturePath={user.picturePath}/>
            <Box m ="2rem 0"/>
            <FriendListWidget userId={userId} />
          </Box>
          <Box
            flexBasis={isNonMobileScreens ? "42%" : undefined}
            mt = {isNonMobileScreens ? undefined : "2rem"}
          >
             
             <MyPostWidget picturePath={user.picturePath}/>
             <Box m ="2rem 0"/>
             <PostsWidget userId = {userId} isProfile/>
            </Box>          
          </Box>
        </Box>
    )
}

export default ProfilePage;