import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteLoggedInUser } from '../Redux/actions';

const Logout = (props) => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(deleteLoggedInUser());
        props.navigation.navigate("Login");
    }, []);
    
    return (
        <></>
    )
}

export default Logout;