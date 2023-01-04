import React, { useEffect, useState } from 'react';
import { UserService } from '../services/UserService';


let UserList = () => {

    let [state,setState] = useState({
        loading: false,
        users: [],
        errorMessage: null
    });

    useEffect( async() => {
           try {
            setState({...state, loading: true});
            let response =await UserService.getALLUsers();
            let {results} = response.data;
            setState({...state,
            loading : false,
        users : results})
            console.log(response.data);
          

        }
        catch (error) {
            setState({
                ...state,errorMessage:error
            })

        }
        
    }, []);


   

    return (
        <>
            <h2>Custumors</h2>
            <pre>{JSON.stringify(state.users)}</pre>
        </>
    )
};

export default UserList