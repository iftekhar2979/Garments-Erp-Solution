import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../Utility-Component/Button';
import InputForm from '../../Utility-Component/InputForm';

const Login = () => {
    const {register,handleSubmit}=useForm()
    const onsubmit=(obj)=>{
        console.log(obj)
    }
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
                     <InputForm label={'Email'} register={register} name={'email'} type={'email'}/>
                  </div>
                  <div>
                     <InputForm label={'Password'} register={register} name={'password'} type={'password'}/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label  className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                 <Button type={'submit'} className={'btn btn-sm btn-primary'} >Sign In</Button>
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

export default Login;