import React from 'react';
import styles from "../styles/Signin.module.css"
import { useState } from 'react';

const InputsDivs = ({id,data,ChangeValue}) => {
    const name=id.charAt(0).toUpperCase()+ id.slice(1)
    const [Close, setClose]=useState(true)

    const FocusInputs=(child)=>{
        if(!child.className.includes(styles.LabelsWInputsFocused)){
            child.className=child.className+" "+styles.LabelsWInputsFocused
        }
    }

    const UnFocusInputs=(child,value)=>{
        if(value ==""){
            console.log(value)
            child.className=child.className.replace(styles.LabelsWInputsFocused,"")
        }
    }
    return ( <>
    {
        id.toLowerCase().includes('name') ? <>
            <div className={styles.DivsInput+" "+styles.DivsNamesInputs} >
                <label htmlFor={name} className={styles.Labels}> 
                    {name} 
                </label>
                <img src="" alt="" />
                <input  type="text"  id={name}
                        value={data} onChange={(e)=>ChangeValue(e.target.value)}
                        onFocus={(e)=>FocusInputs(e.currentTarget.parentElement.children[0])}
                        onBlur={(e)=>UnFocusInputs(e.currentTarget.parentElement.children[0],e.target.value)}
                        className={styles.InputDesign}
                />
            </div>
        </>
         :
        <> 
        <div className={styles.DivsInput} >
            <label htmlFor={name} className={styles.Labels}>
                {name} 
            </label>
            <img src="" alt="" onClick={()=>{id="password" ? setClose(!Close): null }} />
            <input  type={Close && id=="password"  ? id : "text" } id={name}
                    value={data} onChange={(e)=>ChangeValue(e.target.value)}
                    onFocus={(e)=>FocusInputs(e.currentTarget.parentElement.children[0])}
                    onBlur={(e)=>UnFocusInputs(e.currentTarget.parentElement.children[0],e.target.value)}
                    className={styles.InputDesign}
            />
        </div>
        </>
    }
                
        </> );
}
 
export default InputsDivs;