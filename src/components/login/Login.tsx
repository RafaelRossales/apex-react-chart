import Form from './form/form'
import Header from './header/header'
import Text from './text/text'
import './style.css'
import Footer from './footer/footer'


export default function Login(){
    return(
        <div className="login_body">
            <Header/>
            <div className="elements">
                <Text/>
                <Form/>
            </div>
            <Footer/>
        </div>
    )
}