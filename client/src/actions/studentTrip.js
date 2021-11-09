import *  as api from '../api';

//function that return actions
export const getTrip=()=>async (dispatch)=>{
 
    try {
        const {data} = await api.fetchTrip();
        dispatch({type: 'FETCH_TRIP',payload: data});
    } catch (error) {
        console.log(error.message);
    }
}