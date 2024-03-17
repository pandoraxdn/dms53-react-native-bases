import { AuthState } from "./AuthContext";
import { Input } from "../hooks/useFormHookContext";

type AuthAction = 
    | { type: 'singIn' }
    | { type: 'logout' }
    | { type: 'changeFavImage', payload: string }
    | { type: 'changeUserName', payload: string }
    | { type: 'formData', payload: Input[] };

export const authReducer = (state:AuthState, action:AuthAction ): AuthState => {

    switch(action.type){
        case 'formData':
            return {
                ...state,
                formData: action.payload
            }
        case "singIn":
            // Crear nuevo estado,
            // no hacer lo siguiente
            // state.isLoggenIn = true;
            // state.username = "algo";
            // return state;
            return {
                ...state,
                isLoggenIn: true,
                username: "no_name_user_yet",
            }
        case "logout":
            return{
                ...state,
                isLoggenIn: false,
                username: undefined,
                favoriteImage: undefined,
            }
        case "changeFavImage":
            return{
                ...state,
                favoriteImage: action.payload,
            }
        case "changeUserName":
            return{
                ...state,
                username: action.payload,
            }
        default:
            return { ...state };
    }
    
}
