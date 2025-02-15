import { Card, Grid2 } from "@mui/material"
import { FileUploadedSuccessfully } from "./FileUploadedComp"
import { AxesParamSelector } from "./AxesParamComp"
import {ChartLoader} from "./graph"

export const GraphGeneratorPage = () => {
    return(
        <div style={{paddingLeft : "15%", paddingRight: "15%"}}>
            <div style={{ display: "grid", placeItems: "center", marginBottom : "20px"}}>
                <FileUploadedSuccessfully/>
            </div>
            <Grid2 container spacing={4}>
                <Grid2>
                    <Card style={{height: "60vh", width: "20vw", padding: "20px"}}>
                        <AxesParamSelector/>
                    </Card>
                </Grid2>
                <Grid2>
                    <Card style={{height: "60vh", width: "40vw", padding: "20px"}}>
                        <ChartLoader/>
                    </Card>
                </Grid2>
            </Grid2>
        </div>
    )
}