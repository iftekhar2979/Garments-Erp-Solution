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
import { useNavigate } from 'react-router-dom';
export const AuthContext = createContext(null)
const UserContext = ({ children }) => {
  const { data: userInformation, isLoading } = useGetUserByIdQuery()
  const dispatch = useDispatch()
  // const navigate = useNavigate()
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)
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

  const updateUserProfile = (object) => {
    setLoading(true)
    return updateProfile(auth.currentUser, object);
  };

  useEffect(() => {
    setLoading(true)
    if (userInformation) {
      dispatch(setCredentials(userInformation))
      setUser(userInformation.data.name)
      setLoading(false)

    } 

  }, [userInformation]);
  const object = {
    createNewUser, signIn, signOutUser, updateUserProfile, setUser, user, loading, isLoading
  }

  return (
    <AuthContext.Provider value={object}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;