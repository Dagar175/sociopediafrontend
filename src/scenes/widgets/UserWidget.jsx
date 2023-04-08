import {
    ManageAccountsOutlined,
    EditOutlined,
    LocationOnOutlined,
    WorkOutlineOutlined,
} from "@mui/icons-material";
import {Box, Typography, Divider, useTheme} from "@mui/material";
import UserImage from "../../components/UserImage";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";
import {useEffect , useState} from "react";
import {useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

const UserWidget = ({userId, picturePath}) => {
    const [user, setUser] = useState(null);
    const{palette} = useTheme();
    const navigate = useNavigate();
    const token = "JWT_SECRET"
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;

    const getUser = async()=> {
        const response  = await fetch (`https://backenddd-6yas.onrender.com/user/${userId}`,
        {
            method: "GET",
            headers: {Authorization : `Bearer ${token}`},
        });
        const data = await response.json();
        setUser(data);
    };
        
    useEffect(()=> {
        getUser();
    } ,[])//eslint-disable-line react-hooks/exhaustive-deps
        if(!user){
            return null;
        }

        const {
            firstName,
            lastName,
            location,
            occupation,
            viewedProfile,
            impressions,
            friends,
        } = user;

        return (
            <WidgetWrapper >
                {/* First Row */}
                <FlexBetween
                gap= "0.5rem"
                pb = "1.1rem"
                onClick ={()=> navigate(`/profile/${userId}`)}
                >
                    <FlexBetween gap ="1rem">
                        <UserImage image ={picturePath}/>
                        <Box>
                            <Typography 
                                variant = "h4"
                                color ={dark}
                                fontWeight = "500"
                                sx ={{
                                    "&:hover":{
                                        color: palette.primary.dark,
                                        cursor: "pointer"
                                    }
                                }}>
                                    {firstName} {lastName}
                                </Typography>
                                <Typography color={medium}> {friends.length} friends</Typography>
                        </Box>
                        
                    </FlexBetween>
                    <ManageAccountsOutlined/>
                    </FlexBetween>
                        <Divider/>
                        {/* Second Row */}
                        <Box p = "1rem 0">
                            <Box  display= "flex" alignItems="center" gap = "1rem" mb ="0.5rem">
                                <WorkOutlineOutlined fontSize = "large" sx= {{color:main}}/>
                                <Typography color={medium}> {occupation} </Typography>
                                <LocationOnOutlined fontSize = "large" sx= {{color:main}}/>

                                <Typography color={medium}> {location} </Typography>

                            </Box>
                        </Box>
                        <Divider/>
                        {/* Third Row */}
                        <Box p ="1rem 0">
                            <FlexBetween  mb = "0.5rem"> 
                                <Typography color={medium}>Who,s viewed your profile</Typography>
                                <Typography color={main} fontWeight="500"> {viewedProfile} </Typography>
                            </FlexBetween>
                            <FlexBetween >
                                <Typography color={medium}>Impressions of your post</Typography>
                                <Typography color={main} fontWeight="500"> {impressions} </Typography>
                            </FlexBetween>
                        </Box>
                        <Divider/>
                        {/* FourTH Row */}
                        <Box p ="1rem 0">
                            <Typography fontSize="1rem" color ={main} fontWeight="500" mb= "1rem">
                                Social Profiles
                            </Typography>

                            <FlexBetween gap = "1rem" mb= "0.5rem" >
                                <FlexBetween gap ="1rem">
                                <svg  width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                                   <Box>
                                        <Typography  color ={main} fontWeight="500">
                                            Twitter
                                        </Typography>
                                        <Typography color ={medium}>Social Network</Typography>
                                   </Box>
                                </FlexBetween>        
                                <EditOutlined sx= {{color : main}}/>                        
                            </FlexBetween>

                            <FlexBetween gap = "1rem" mb= "0.5rem" >
                                <FlexBetween gap ="1rem">
                                <svg  width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                                   <Box>
                                        <Typography  color ={main} fontWeight="500">
                                            Linkedin
                                        </Typography>
                                        <Typography color ={medium}>Network Platform</Typography>
                                   </Box>
                                </FlexBetween>        
                                <EditOutlined sx= {{color : main}}/>                        
                            </FlexBetween>

                        </Box>
                
            </WidgetWrapper>
        )
    
};

export default UserWidget;