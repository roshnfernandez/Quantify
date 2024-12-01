import applicationValues from '../../assets/constants.json'
import { MenuBar } from '../Menu';

const applicationStyle = {
    height: "100vh",
    backgroundColor : applicationValues.backgroundColor,
    color: applicationValues.textColor,
    padding : "0px",
    margin : "0px"
}

export const InnerContainer = ({children})=>{
    return (
        <div style={applicationStyle}>
            <MenuBar></MenuBar>
            {children}
        </div>
    );
}