import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../Utility-Component/Button';
import InputForm from '../../Utility-Component/InputForm';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contextApi/UserContext';

const Login = () => {
    const navigate = useNavigate()
    const { signIn, setUser } = useContext(AuthContext)
    const [loginError, setLoginError] = useState({})
    const [showpass,setShowPass]=useState(false)
    const { register, handleSubmit } = useForm()
    const location = useLocation();
    const from = location.state?.from?.pathName || '/';

    const onsubmit = (obj) => {
        const { email, password } = obj;

        signIn(email, password)
            .then((result) => {
                const user = result.user;

                setUser(user);

                navigate(from, { replace: true });
            })
            .catch((err) => setLoginError(err));

    }
    const isObjectEmpty = (objectName) => {
        return JSON.stringify(objectName) === "{}";
    };

    return (
        <>
            <section className="bg-gray-100 shadow-xl rounded-sm dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onsubmit)}>
                                <div>
                                    <InputForm label={'Email'} register={register} name={'email'} type={'email'} />
                                </div>
                                <div>
                                    <InputForm label={'Password'}  register={register} name={'password'
                                 
                                  } type={showpass?'text':'password'} />
                                </div>
                                {isObjectEmpty(loginError) ? "" : <p className='text-error'>Give Valid Email and Password</p>}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                      
                                        <div className="ml-3 text-sm">
                                        
                                          
                                            <div className="swap-on cursor-pointer " onClick={()=>setShowPass(!showpass)}>{showpass?'Show Password':'Hide Password'}</div>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                                <Button type={'submit'} className={'btn btn-sm btn-primary'} >Sign In</Button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <span type='submit' className="font-medium text-primary-600 hover:underline dark:text-primary-500"><Link to="/signup">Sign up</Link></span>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;