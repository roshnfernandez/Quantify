import { useGlobalState } from "../../context"

export const ChartLoader = () =>{
    const [state] = useGlobalState();
    const {GraphComponent} = state;

    console.log("Component is ");
    console.log(GraphComponent);

    return (
        GraphComponent ? <GraphComponent/> : <div>Chart is yet to be loaded</div>
    )
}