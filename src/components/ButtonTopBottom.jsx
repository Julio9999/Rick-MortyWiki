import { IoMdArrowRoundDown, IoMdArrowRoundUp } from "react-icons/io";
import styles from "../styleSheets/ButtonTopBottom.module.css";
import { useRef, useEffect, useState } from "react";

export function ButtonTopBottom(){
    const target = useRef(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    function toTop(){
        window.scrollTo(0, 0);
    }

    function toBottom(){
        window.scrollTo(0, document.documentElement.scrollHeight);
    }


    useEffect(() => {
        document.addEventListener('scroll', ()=> {
            if(document.documentElement.scrollTop >= 1000){
                setIsIntersecting(true);
            }else{
                setIsIntersecting(false);
                console.log('hola')
            }
        })
    }, [])

    return(
        <div className={isIntersecting ? `${styles.container} ${styles.on}`:`${styles.container}`} ref={target} >
            <IoMdArrowRoundDown size={50} onClick={toBottom}  />
            <IoMdArrowRoundUp size={50} onClick={toTop} />
        </div>
    );
}