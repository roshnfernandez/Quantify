import { Card, IconButton } from "@mui/material";
import { useGlobalState } from "../../context"
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import CloseIcon from '@mui/icons-material/Close';

export const FileUploadedSuccessfully = () =>{
    const [state, dispatch] = useGlobalState();
    const {file} = state;
    return (
        <Card style={{display: "flex", alignItems: "center", paddingRight: "50px", paddingLeft: "50px", paddingTop: "10px", paddingBottom: "10px" }}>
            <div style={{display: "flex", alignItems: "center"}}>
                <CloudDoneIcon/> &nbsp; { state.file && state.file.name} 
                <IconButton color="error" size="small" style={{marginTop: "4px"}}><CloseIcon fontSize="inherit"/></IconButton></div>
        </Card>
    );
}