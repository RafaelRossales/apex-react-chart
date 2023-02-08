import Button from '../button'
import Visor from '../visor'
import './style.css'

export default function Body(){

    return(
        <>
            <div className="container">
                <Visor/>
                <div className='teclado'>
                    <Button label='AC' width='85px' height='86px'/>
                    <Button label='AC'width='85px' height='86px'/>
                    <Button label='AC'width='85px' height='86px'/>
                    <Button label='AC'width='85px' height='86px' color="#f49140" borderColor='#f9140'/>
                    <Button label='AC'width='85px' height='86px'/>
                    <Button label='AC'width='85px' height='86px'/>
                    <Button label='AC'width='85px' height='86px'/>
                    <Button label='AC'width='85px' height='86px' color="#f49140" borderColor='#f49140'/>
                    <Button label='AC'width='85px' height='86px'/>
                    <Button label='AC'width='85px' height='86px'/>
                    <Button label='AC'width='85px' height='86px'/>
                    <Button label='AC'width='85px' height='86px' color="#f49140" borderColor='#f49140'/>
                    <Button label='AC'width='85px' height='86px'/>
                    <Button label='AC'width='85px' height='86px' />
                    <Button label='AC'width='85px' height='86px'/>
                    <Button label='AC'width='85px' height='86px' color="#f49140" borderColor='#f49140'/>
                    <Button label='AB'width='173px' height='86px'/>
                    <Button label='AC'width='85px' height='86px' />
                    <Button label='AD'width='85px' height='86px' color="#f49140" />
                </div>
            </div>
        </>
    )
}