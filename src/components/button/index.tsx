
import './style.css'

interface IButton{
    width?:string;
    height?:string;
    label?:string;
    color?:string;
    borderColor?:string
}

export default function Button({width,height,color,label, borderColor}:IButton){

    const style = { 
        
    }
    return(
        <div 
        className="_container" 
        style={{ 
            width:width, 
            height:height,
            backgroundColor:color || '#dedede',
            borderColor:borderColor || '#b4b4b4'
        }}>
            {label}
        </div>
    )
}