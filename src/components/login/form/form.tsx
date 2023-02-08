import './style.css'
import { Label } from 'flowbite-react';

export default function Form(){
    return(

        <div className="container_form">
            <div className="form">
                <div className="header">
                    <div className="bar"></div>
                        <h1>LOGIN</h1>
                </div>

                <div className="body">
                    <input type="text"/>
                    <input type="text"/>
                    <button>
                        ENTRAR
                    </button>
                </div>
            </div>
        </div>
    )
}