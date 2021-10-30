import { useContext } from "react"
import { authContext } from "../ContextProvider/ContextProvider";




const useAuth  =() =>{
    return useContext(authContext)
}
export default useAuth;