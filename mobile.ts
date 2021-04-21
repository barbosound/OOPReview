export class Mobile
{
    private name: string;
    private model: string;
    private trademark: string;
    private sdSize: number;
    private color: string;
    private is5G: boolean;
    private cameraNumber: number;
    private price: number;

    constructor(name:string,model:string,trademark:string,sdSize:number,color:string,is5G: boolean,cameraNumber: number,price: number)
    {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    
    public getName():string
    {
        return this.name;
    }

    public setName(name:string)
    {
        this.name = name;
    }

    public getModel():string
    {
        return this.model;
    }

    public setModel(model:string)
    {
        this.model = model;
    }

    public getTrademark():string
    {
        return this.trademark;
    }

    public setTrademark(trademark:string)
    {
        this.trademark = trademark;
    }

    public getSdSize():number
    {
        return this.sdSize;
    }

    public setSdSize(sdSize:number)
    {
        this.sdSize = sdSize;
    }

    public getColor():string
    {
        return this.color;
    }

    public setColor(color:string)
    {
        this.color = color;
    }

    public getis5G():boolean
    {
        return this.is5G;
    }

    public setis5G(is5G:boolean)
    {
        this.is5G = is5G;
    }

    public getCameraNumber():number
    {
        return this.cameraNumber;
    }

    public setCameraNumber(cameraNumber:number)
    {
        this.cameraNumber = cameraNumber;
    }

    public print()
    {
        console.log(`The characteristics of the mobile ${this.name} are:\n- Name: ${this.name}\n- Model: ${this.model}\n- Trademark: ${this.trademark}\n- sdSize: ${this.sdSize}\n- Color: ${this.color}\n- Is 5g?: ${this.is5G}\n- Number of Cameras: ${this.cameraNumber}\n- Price: ${this.price}`);
    }
}