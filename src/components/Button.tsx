import {FC} from 'react';

interface ButtonProp {
    title: string,
    href?: string,
    alert?: boolean,
    onMessageHandler?: (message: string | undefined) => void
}

const Button: FC<ButtonProp> = ({title, href, alert, onMessageHandler}) => {

    if(href) {
        return (
            <a
                className="py-2 px-6 bg-purple-300 rounded-lg"
                href={href}
                onClick={
                    ()=> {
                        onMessageHandler?.("Link to Google")
                    }
                }
            >  
                {title}
            </a>
        )
    }
    
    if(alert) {
        return(
            <button 
                className='py-2 px-6 bg-red-300 rounded-lg'
                onClick={()=> window.alert("Hello world!")}
            >
                {title}
            </button>
        )
    }

    return (
        <button 
            className='py-2 px-6 bg-blue-300 rounded-lg'
            onClick={() => onMessageHandler?.('Default Button')}
        >
           {title}
        </button>
    )
}

export default Button