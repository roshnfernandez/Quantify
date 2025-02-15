export class ActionObject{
    type;
    value;
    constructor(type, value){
        this.type = type;
        this.value = value;
    }
}

export class GraphParam{
    type;
    xAxis;
    yAxis;
    constructor(type, xAxis, yAxis){
        this.type = type;
        this.xAxis = xAxis;
        this.yAxis = yAxis;
    }
}