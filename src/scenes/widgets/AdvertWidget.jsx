import {Typography, useTheme} from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";

const AdvertWidget = () => {
    const {palette} = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    return  (
        <WidgetWrapper>
            <FlexBetween>
                <Typography color ={dark} variant ="h5" fontWeight="500">
                    Sponsored
                </Typography>
                <Typography color={medium}>
                    Create Ad
                </Typography>
            </FlexBetween>
            <img 
                width="100%"
                height = "auto"
                alt = "advert"
                src = "https://backenddd-6yas.onrender.com/assets/apple.jpg"
                style = {{borderRadius: "0.75rem", margin:"0.75rem 0" }}
            />
            <FlexBetween>
                <Typography color={main}>Advertisement</Typography>
                <Typography color={medium}>Advertisement.com</Typography>
            </FlexBetween>   
            <Typography color = {medium} m="0.5rem 0">
                Your pathway to advertise you product to reach your 
                 target people.
            </Typography> 
        </WidgetWrapper>
    )

}

export default AdvertWidget;
