import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import "../Styles/TripPage.css";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Table from "../Components/Table";
import Button from "@mui/material/Button";
import MultiDatepicker from "../Components/MultiDatepicker.js";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const TripPage = (props) => {
  const [employee, setEmployee] = useState([]);
  const [type, setselecttype] = useState("");
  const [dept, setselectdept] = useState("");
  const [srnumber, setsrnumber] = useState("");
  // const [newfield, setnewfield] = useState(false);

  const handleChange1 = (event) => {
    setEmployee(event.target.value);
  };
  const handleChange2 = (event) => {
    setselecttype(event.target.value);
  };
  const handleChange3 = (event) => {
    setselectdept(event.target.value);
  };
  const handleChange4 = (event) => {
    setsrnumber(event.target.value);
  };
  return (
    <>
      <div className="tripPageContainer">
        <div className={props.darkmode ? "bgdark" : "bg"}></div>
        <div className="dropdowncontainer">
          <FormControl
            style={{ width: 300, height: "45px", margin: "0px 10px" }}
          >
            <InputLabel id="dropdown-label">Employee ID</InputLabel>
            <Select
              labelId="dropdown-label"
              id="dropdown"
              value={employee}
              onChangeCapture={handleChange1}
              style={{ width: "100%", height: "100%" }}
            >
              <MenuItem value="option1">Individual</MenuItem>
              <MenuItem value="option2">Group</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            style={{ width: 200, height: "45px", margin: "0px 10px" }}
          >
            <InputLabel id="dropdown-label">Select Type</InputLabel>
            <Select
              labelId="dropdown-label"
              id="dropdown"
              value={type}
              onChange={handleChange2}
              style={{ width: "100%", height: "100%" }}
            >
              <MenuItem value="Individual">Individual</MenuItem>
              <MenuItem value="Group">Group</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            style={{ width: dept==="Service"?200:300, height: "45px", margin: "0px 10px" }}
          >
            <InputLabel id="dropdown-label">Select Dept .</InputLabel>
            <Select
              labelId="dropdown-label"
              id="dropdown"
              value={dept}
              onChange={handleChange3}
              style={{ width: "100%", height: "100%" }}
            >
              <MenuItem value="Sales">Sales</MenuItem>
              <MenuItem value="Service">Service</MenuItem>
              <MenuItem value="Operations">Operations</MenuItem>

            </Select>
          </FormControl>
          {dept==="Service" &&
            <TextField label="S.NO" variant="outlined" style={{ width: 100, margin: "0px 10px" }}  />
          }
          <MultiDatepicker />
          <Button
            variant="contained"
            style={{ padding: "1rem" }}
            sx={{
              backgroundColor: props.darkmode ? "white" : "black",
              color: props.darkmode ? "black" : "white",
            }}
          >
            <CalendarTodayIcon fontSize="small" />
          </Button>
        </div>
        <div
          className="tableSection"
          style={{ backgroundColor: props.darkmode ? "#121212" : "white" }}
        >
          <h1 className="tripPlanHeading">Trip Plan</h1>
          <Table darkmode={props.darkmode} />
        </div>
      </div>
    </>
  );
};

export default TripPage;
