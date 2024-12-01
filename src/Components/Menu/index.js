import InsightsIcon from '@mui/icons-material/Insights';
import applicationValues from '../../assets/constants.json'

const menuStyle = {
    padding : "20px",
    display : "flex",
    alignItems : "center",
    fontSize : "30px",
    color : applicationValues.textColor
}

export const MenuBar =  ()=> {
    return(
        <div style={menuStyle}> 
            <InsightsIcon fontSize='large'/>
            <span>&nbsp;Quantify.ai</span>
        </div>
    )
}