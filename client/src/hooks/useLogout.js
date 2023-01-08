

import {useAuthContext} from "./useAuthContext";
import {useNotContext} from "./useNotContext";
export const useLogout=()=>{
    
    const {dispatch}=useAuthContext()
    const {dispatch:notDispatch}=useAuthContext()

    const logout=()=>{
        localStorage.removeItem('kullanici');

      
        dispatch({type:'LOGOUT'})
        notDispatch({type:'NOT_DOLDUR',payload:null})
    }

    return {logout}
}