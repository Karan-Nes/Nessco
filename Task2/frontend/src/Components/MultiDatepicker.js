import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import TextField from '@mui/material/TextField';
const MultiDatepicker = () => {
  const [dates, setDates] = useState([]);

  const handleDateChange = (newDates) => {
    setDates(newDates);
  };
  // const handleSelect=()=>{
  //   // console.log(dates)
  //   if(!showdates){
  //     setshowdates(!showdates)
  //   }
  // }
  {/* <button onClick={handleSelect}> submit </button> */}
  {/* {showdates &&
    <div >
    {dates.map((date, index) => (
      <span key={index}>{date.format("YYYY-MM-DD")} </span>
    ))}
  </div>
  } */}
  const [showdates,setshowdates]=useState(false)
  return (
    <TextField
    size="small"
    // label="Select Dates"
    variant="outlined"
    style={{height:"2rem"}}
    value={dates.map((date) => date.format("YYYY-MM-DD")).join(', ')}
    InputProps={{
      inputComponent: () => (
        <DatePicker
          value={dates}
          onChange={handleDateChange}
          plugins={DatePicker}
          multiple
          format="YYYY-MM-DD"
          style={{theme:"black",width:"100%",height:"100%"}}
          placeholder="Select Dates"
        />
      ),
    }}
  />
  );
};

export default MultiDatepicker;
