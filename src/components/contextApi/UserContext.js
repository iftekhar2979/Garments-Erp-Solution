import {
    createUserWithEmailAndPassword,
    getAuth, onAuthStateChanged,
    signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile
  } from 'firebase/auth';
  import React, { createContext, useEffect, useState } from 'react';
  import app from '../../firebase.config'
import axios from 'axios';
import { useGetUserByIdQuery } from '../../Redux/Features/api/Users/userApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../Redux/Features/api/Users/userSlice';
import Spinner from '../Utility-Component/Spinner';
  export const AuthContext=createContext(null)
   const UserContext = ({children}) => {
    const {data:userInformation,isLoading}=useGetUserByIdQuery()
    const dispatch=useDispatch()
  
      const [user,setUser]=useState()
      const [loading,setLoading]=useState(true)
      const auth = getAuth(app)

      const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
      };
      
      const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
      };
      const signOutUser = () => {
        return signOut(auth);
      };
      
    //   const signInWithGoogle = () => {
    //     setLoading(true)
    //     return signInWithPopup(auth, googleprovider);
    //   };
      const updateUserProfile = (object) => {
          setLoading(true)
          return updateProfile(auth.currentUser, object);
        };
        // const signInWithFacebook=()=>{
        //   setLoading(true)
        //   return signInWithPopup(auth,facebookProvider)
        // }
   
      useEffect(() => {
        
        if(userInformation){
          dispatch(setCredentials(userInformation))
         
        }
         
          // setUser(userInformation.userInfo.data.name)
          const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log(currentUser);
            if (currentUser) {
              setLoading(false);
              setUser(currentUser);
            } else {
              setLoading(false);
            }
            return () => unSubscribe();
          });
        }, [userInformation]);
      const object={
          createNewUser,signIn,signOutUser,updateUserProfile,setUser,user,loading,isLoading
      }
    //   const object={
    //     user,setUser, isLoading,
    // }
      return (
          <AuthContext.Provider value={object}>
              {children}
          </AuthContext.Provider>
      );
  };
  
  export default UserContext;