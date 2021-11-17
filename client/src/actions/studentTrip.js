import *  as api from '../api';


//function that return actions
export const getTrip=(id)=>async (dispatch)=>{
 
    try {
        const {data} = await api.fetchTrip(id);
        dispatch({type: 'FETCH_TRIP',payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const reserveTrip = (trip) =>async (dispatch)=>{
        try {
            const {data} = await api.reserveTrip(trip);
            dispatch({type: 'RESERVE_TRIP', payload: data});
        } catch (error) {
            console.log(error);
        }
}
