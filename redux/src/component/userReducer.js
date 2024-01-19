import { createSlice } from "@reduxjs/toolkit";
import { UserList } from "./userdata";

const userSlice=createSlice({
    name:'users',
    initialState:UserList,
    reducers:{

        addUser:(state,action)=>{
            state.push(action.payload);
        },
        updtUser:(state,action)=>{
           
            const {id,name,email}=action.payload;
             const user=state.find(user=>user.id == id);
             if(user)
             {
                user.name=name;
                user.email=email;

             }
        },
        delUser:(state,action)=>{
             const {id}=action.payload;
             const user=state.find(user=>user.id == id);
             if(user)
             {
               return state.filter(user=>user.id !== id)

             }
        }
    }
})

export const {addUser,updtUser,delUser} =userSlice.actions;
export default userSlice.reducer;