import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../Utility-Component/Button';
import InputForm from '../Utility-Component/InputForm';

const Login = () => {
    const {register,handleSubmit}=useForm()
    const onsubmit=(obj)=>{
        console.log(obj)
    }
    return (
       <>
       <section class="bg-gray-100 shadow-xl rounded-sm dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    
         
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit(onsubmit)}>
                  <div>
                     <InputForm label={'Email'} register={register} name={'email'} type={'email'}/>
                  </div>
                  <div>
                     <InputForm label={'Password'} register={register} name={'password'} type={'password'}/>
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                 <Button type={'submit'} className={'btn btn-sm btn-primary'} >Sign In</Button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" type='submit' class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
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