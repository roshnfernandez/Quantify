import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useGlobalState } from "../../context"
import React, { useState } from "react";
import { ActionObject, GraphParam } from "../../models/models";
import { camelToTile } from "../../utils/stringUtil";
import applicationConstants from '../../assets/constants.json'
import * as Babel from '@babel/standalone';

const dropDownStyle = {
    marginTop: "10px",
    marginBottom: "10px"
}

export const AxesParamSelector = () => {
    const [state, dispatch] = useGlobalState();
    const { axesParam } = state;
    const [graphParam, setGrapParam] = useState(new GraphParam());
    const { api } = state;

    const getGraphType = () => {
        return Object.getOwnPropertyNames(axesParam);
    }

    const getXAxes = () => {
        return graphParam.type != null ? axesParam[graphParam.type]['xAxis'] : [];
    }

    const getYAxes = () => {
        return graphParam.type != null ? axesParam[graphParam.type]['yAxis'] : [];
    }

    const handleGraphTypeChange = (event) => {
        setGrapParam({ ...graphParam, type: event.target.value })
    }

    const handleXAxisChange = (event) => {
        setGrapParam({ ...graphParam, xAxis: event.target.value })
    }

    const handleYAxisChange = (event) => {
        setGrapParam({ ...graphParam, yAxis: event.target.value })
    }

    const generateGraph = (event) => {
        api.generateGraph(graphParam,
            (code) => {
                const jsCode = Babel.transform(code, { presets: ['react'] }).code;
                console.log(jsCode);
                const blob = new Blob([jsCode], { type: "application/javascript" });
                const url = URL.createObjectURL(blob);
                console.log(url);
                import(/* webpackIgnore: true */ url)
                    .then((module) => {
                        console.log("module is ", module.default);
                        dispatch(new ActionObject(applicationConstants.objectTypes.graphComp, module.default));
                    })
            }
        );
    }

    return (
        <div>
            <FormControl fullWidth style={dropDownStyle}>
                <InputLabel id="graphTypeLabel">Graph Type</InputLabel>
                <Select
                    labelId="graphTypeLabel"
                    value={graphParam.type}
                    onChange={handleGraphTypeChange}
                    label="Graph Type"
                >
                    {
                        getGraphType().map(
                            (type) => <MenuItem value={type} >{camelToTile(type)}</MenuItem>
                        )
                    }
                </Select>
            </FormControl>
            <FormControl fullWidth style={dropDownStyle}>
                <InputLabel id="xAxisLabel">X Axis</InputLabel>
                <Select
                    labelId="xAxisLabel"
                    value={graphParam.xAxis}
                    onChange={handleXAxisChange}
                    label="X Axis"
                >
                    {
                        getXAxes().map(
                            (type) => <MenuItem value={type} >{type}</MenuItem>
                        )
                    }
                </Select>
            </FormControl>
            <FormControl fullWidth style={dropDownStyle}>
                <InputLabel id="yAxisLabel">Y Axis</InputLabel>
                <Select
                    labelId="yAxisLabel"
                    value={graphParam.yAxis}
                    onChange={handleYAxisChange}
                    label="Y Axis"
                >
                    {
                        getYAxes().map(
                            (type) => <MenuItem value={type} >{type}</MenuItem>
                        )
                    }
                </Select>
            </FormControl>
            <div style={{ display: "flex", justifyContent: "end", marginTop: "5px" }}>
                <Button color="primary" variant="contained" onClick={generateGraph}>Generate</Button>
            </div>
        </div>
    )
}