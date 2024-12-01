import {Button, Card, Icon} from '@mui/material'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'
import applicationConstants from  '../../assets/constants.json'
import UploadFileIcon from '@mui/icons-material/UploadFile';

const sideMargin = "300px"

const pageStyle = {
    marginLeft : sideMargin,
    paddingTop : "100px",
}

const searchBoxStyle = {
    border : "1px dotted " + applicationConstants.textColor, 
    height : "20vh", 
    width : "400px",
    marginTop : "30px", 
    marginBottom : "20px",
    borderRadius : "10px",
    color: applicationConstants.secondaryTextColor,
    paddingTop : "30px",
    paddingBottom : "30px"
}

const searchBoxContentStyle = {
    display : "flex", 
    alignItems : "center", 
    justifyContent : "space-around"
}

export const FileUploadPage = ()=>{

    const [title,setTitle]  = useState('⚪');
    const titleStr  = "Please Upload Your File to Continue!";

    const typeTitle = ()=>{
        let index = 0 ;
        
        const interval =  setInterval(
        ()=>{
         setTitle((prevTitle) => {
            let newTitle;
            if(prevTitle.length == 1){
                newTitle = titleStr.charAt(index) + prevTitle;
            }else{
                newTitle = prevTitle.substring(0,prevTitle.length-1) + titleStr.charAt(index) + prevTitle.charAt(prevTitle.length-1);
            }
            index++;
            return newTitle;
         });
         if(index == titleStr.length) {
            finishTyping();
            clearInterval(interval);
         };
        },
        50)
    }

    const finishTyping = ()=>{
        setTimeout(()=>{
            setTitle(titleStr);
        },200)
    }

    useEffect(()=>{
        setTitle('⚪');
        setTimeout(
            ()=>typeTitle(),400
        )
    }, [])

    return(
        <div style={pageStyle}>
            <Card style={{marginRight : sideMargin, display:"flex", alignItems: "center", paddingTop: "20px", paddingBottom: "20px"}}>
                <Typography style={{fontWeight : "normal", fontSize : "32px"}}>
                    {title}
                </Typography>
                <div></div>
                <div style={searchBoxStyle}>
                    <div style={searchBoxContentStyle}><UploadFileIcon fontSize='large'/></div>
                    <div style={{ ...searchBoxContentStyle ,fontSize : "15px", marginTop : "2px"}}>Drag and Drop your CSV File here</div>
                    <div style={{ ...searchBoxContentStyle ,fontSize : "15px", marginTop : "6px"}}> -- or -- </div>
                    <div style={{...searchBoxContentStyle, marginTop : "6px"}}>
                        <Button variant='contained' style={{backgroundColor : "#676767"}}>Browse Here</Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}