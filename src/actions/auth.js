import { types } from "../types/types";
import { firebase, googleAuthProvider } from '../firebase/firebase-config'
import { finishLoading, startLoading } from "./ui";
import Swal from 'sweetalert2'
import { notesLogout } from "./notes";

export const startLoginEmailPassword = (email, password) =>{
    return (dispatch) =>{
        dispatch(startLoading());
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({user})=>{
                dispatch(login(user.uid,user.displayName));
                dispatch(finishLoading());
            }).catch(e => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: e.message,
                });
                dispatch(finishLoading());
            })
    }
}

export const startGoogleLogin= () =>{
    return ( dispatch )=>{
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then( ({user}) =>{
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
    }
}

export const startRegisterEmailPassword = (email, password, name) =>{
    return (dispatch) =>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({user}) =>{
                await user.updateProfile({
                    displayName: name
                });
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
            .catch(e => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: e.message,
                });
            })
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload:{
        uid,
        displayName
    }
});

export const startLogout = () => {
    return async ( dispatch ) => {
        await firebase.auth().signOut();
        dispatch(notesLogout());
        dispatch(logout());
    }
}

export const logout = () => ({
    type: types.logout
})