import { useReducer } from "react";
import { fetchAPI } from "../apis/BookingApi";
import BookingForm from "../components/BookingForm";

const Booking = ()=>{
    function updateTimes(date) {
        return fetchAPI(date);
      }
      const output = fetchAPI(new Date());

      const [availableTimes, dispatch] = useReducer(updateTimes, output);
    return(
        <>
        <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
        </>
    )
}
export default Booking;