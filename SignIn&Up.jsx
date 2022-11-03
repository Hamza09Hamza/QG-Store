import React from 'react';
import styles from "../styles/Signin.module.css"
import { useState } from 'react';
import InputsDivs from './Inputs';

const DisplaySigninorUp = ({typePage}) => {
    const [Email,setEmail]=useState('')
    const [FName,setFName]=useState('')
    const [LName,setLName]=useState('')
    const [Password,setPassword]=useState('')
    return ( <>
        <main className={styles.MainBackground}>
            <section className={styles.SignCard}>
                <img src="/QG.png" alt="" className={styles.Logo} />
                <h1> Welcome to QG Store </h1>


              { 
                typePage=="SignUp" ?  
                <div className={styles.Namesdiv}>
                    <InputsDivs data={LName} id="Last Name" ChangeValue={setLName}  />
                    <InputsDivs data={FName} id="First Name" ChangeValue={setFName}  />
                </div> :
                <></>
                }
                <InputsDivs data={Email} id="email" ChangeValue={setEmail}  />
                <InputsDivs data={Password} id="password" ChangeValue={setPassword}  />

                <button className={styles.RegisterBTN+' '+styles.BTN}>
                    Register 
                </button>
                <span className={styles.OrText}> 
                    or 
                </span>
                <div className={styles.BtnDIV}>
                    <button className={styles.BTN+" "+styles.GoogleBTN}>
                        <img    src="/google.png" alt=""
                                className={styles.GoogleImg}
                        />  
                        <span className={styles.GoogleText}>Sign In With Google</span>
                    </button>
                </div>

            </section>
                <span className={styles.OrText}> 
                    {typePage=="SignIn" ?  "Don't have an account ?" :" Already member ?"} 
                    <a className={styles.OrText +" "+styles.Link} href={ typePage=="SignIn" ?  "/signUp" :"/signIn"}> Sign 
                    { typePage=="SignIn" ?  "up" :" in" } </a> 
                </span>
        </main>
    </> );
}
 
export default DisplaySigninorUp;