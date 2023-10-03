import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../Utility-Component/Button';
import InputForm from '../../Utility-Component/InputForm';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contextApi/UserContext';
import { toast } from 'react-hot-toast';

const SignUp = () => {
    const history = useNavigate()
    
    const {createNewUser,updateUserProfile,setUser}=useContext(AuthContext)
    const { register, handleSubmit } = useForm()
   
    const onsubmit = (obj) => {
        const {displayName,email,password,photoURL}=obj
    
     createNewUser(email,password)
     .then(result=>{
        const user=result.user
        console.log(user)
        updateUserProfile({displayName,photoURL})
        setUser(user)
        const notify = () => toast.success("Account Created Successfully",{position:'top-center',autoClose:2000,});
            notify()
     }).catch(err=>{
        console.log("err : ",err.message)
     })
       
       
    }

    return (
        <>
            <section className="bg-gray-100 shadow-xl rounded-sm dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">


                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Register account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onsubmit)}>
                                <div>
                                    <InputForm label={'Name'} register={register} name={'name'} type={'text'} />
                                </div>
                                <div>
                                    <InputForm label={'Email'} register={register} name={'email'} type={'email'} />
                                </div>
                                <div>
                                    <InputForm label={'Password'} register={register} name={'password'} type={'password'} />
                                </div>
                                <div className="flex items-center justify-between">
                                </div>
                                <Button type={'submit'} className={'btn btn-sm btn-primary'} >SIGN UP</Button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <a href="#" type='submit' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignUp;