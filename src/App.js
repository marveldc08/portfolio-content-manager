import React, { useState } from "react";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
 Slider,
 Grid,
  Stack,
  TextField,
  OutlinedInput,
} from "@mui/material";
import { Email, DriveFileRenameOutline } from "@mui/icons-material";

import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";


import './App.css';




const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg, #f9004d 0%, #f9004d 50%, #f9004d 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg, #f9004d 0%, #f9004d 50%, #f9004d 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, #f9004d 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, #f9004d 50%, rgb(138,35,135) 100%)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = [
  "Landing Section",
  "About Section",
  "Skills Section",
];
const secondSteps = ["Services Section", "Portfolio Section", "Contact Section"];

///////////////for slider
const marks = [
  {
    value: 0,
    label: "0%",
  },
  {
    value: 50,
    label: "50%",
  },

  {
    value: 100,
    label: "100%",
  },
];

function App() {
    var [theActive, setTheActive] = useState(0);
    var [secondActive, setSecondActive] = useState(0);
    var [nextView, setNextView] = useState(0);
    const handleNextView = () => {
      setNextView(nextView + 1);
    };
    const handleNext = () => {
      // setNextView(nextView + 1);
      setTheActive(theActive + 1);
      if (theActive === 2 ) {
        handleNextView();
      }
    }
    const handlePrevious = () => {
      //  setNextView(nextView - 1);
      setTheActive(theActive - 1);
    };
    const handleSecondNext = () => {
      setSecondActive(secondActive + 1);
         setTheActive(theActive + 1);
    }
    const handleSecondPrevious = () => {
      setSecondActive(secondActive - 1);
       setTheActive(theActive - 1);
       if (theActive === 3) {
         setNextView(nextView - 1);
         setTheActive(2);
       }

    };


///////////////for slider
      const [value, setValue] = React.useState(30);

      const handleSliderChange = (event, newValue) => {
        setValue(newValue);
      };

      const handleInputChange = (event) => {
        setValue(event.target.value === "" ? "" : Number(event.target.value));
      };

      const handleBlur = () => {
        if (value < 0) {
          setValue(0);
        } else if (value > 100) {
          setValue(100);
        }
      };
  return (
    <div className="App">
      {nextView === 0 && (
        <header className="App-header">
          <h2>Dynamically upload content to your portfolio site</h2>
          <p>Put in your email and let's begin</p>
          <div className="sectionWrap">
            <div className="App-group">
              <TextField
                className="field"
                required={true}
                id="fname"
                // value={fname}
                // onChange={(e) => setFname(e.target.value)}
                label="Email"
                sx={{
                  "& label.Mui-focused": { color: `var(--main-color)` },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: `var(--main-color)`,
                    },
                  },
                }}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton aria-label="email" edge="end">
                        <Email sx={{ color: `var(--main-color)` }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                variant="contained"
                // disabled={isConfirmed === true ? false : true}
                size="large"
                onClick={handleNextView}
                className="App-Button"
              >
                Proceed
              </Button>
            </div>
          </div>
        </header>
      )}
      {nextView === 1 && (
        <div className="main">
          <Stack sx={{ width: "100%" }} spacing={4}>
            <Stepper
              alternativeLabel
              activeStep={theActive}
              connector={<ColorlibConnector />}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Stack>
          {theActive === 0 && (
            <div className="sectionWrap">
              <h4>Your Landing Section</h4>
              <p className="smallText">
                what people see when landing on your portfolio site
              </p>
              <form>
                <div className="App-group">
                  <TextField
                    required={true}
                    id="fname"
                    // value={fname}
                    // onChange={(e) => setFname(e.target.value)}
                    label="First Name"
                    sx={{
                      "& label.Mui-focused": { color: `var(--main-color)` },
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: `var(--main-color)`,
                        },
                      },
                    }}
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton aria-label="email" edge="end">
                            <DriveFileRenameOutline
                              sx={{ color: `var(--main-color)` }}
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>

                <div className="App-group">
                  <TextField
                    id="lname"
                    required={true}
                    // value={lname}
                    // onChange={(e) => {
                    //   setLname(e.target.value);
                    // }}
                    sx={{
                      "& label.Mui-focused": { color: `var(--main-color)` },
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: `var(--main-color)`,
                        },
                      },
                    }}
                    label="Last Name"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton aria-label="email" edge="end">
                            <DriveFileRenameOutline
                              sx={{ color: `var(--main-color)` }}
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>

                <div className="App-group">
                  <TextField
                    id="logoText"
                    // required={true}
                    // value={lname}
                    // onChange={(e) => {
                    //   setLname(e.target.value);
                    // }}
                    sx={{
                      "& label.Mui-focused": { color: `var(--main-color)` },
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: `var(--main-color)`,
                        },
                      },
                    }}
                    label="Logo Text"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton aria-label="email" edge="end">
                            <DriveFileRenameOutline
                              sx={{ color: `var(--main-color)` }}
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className="App-group">
                  <p className="smDiscrip">
                    <i>Kindly separate your attributes with comma (,)</i>{" "}
                  </p>
                  <TextField
                    id="logoText"
                    // required={true}
                    // value={lname}
                    // onChange={(e) => {
                    //   setLname(e.target.value);
                    // }}
                    placeholder="e.g An Awesome designer, A unique sales preson. e.t.c"
                    sx={{
                      "& label.Mui-focused": { color: `var(--main-color)` },
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: `var(--main-color)`,
                        },
                      },
                    }}
                    label="Attributes"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton aria-label="email" edge="end">
                            <DriveFileRenameOutline
                              sx={{ color: `var(--main-color)` }}
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className="App-group">
                  <p className="smDiscrip">
                    <i>Select images with (.jpg) extention</i>{" "}
                  </p>
                  {/* <TextField
                  id="Background Image"
                  // required={true}
                  // value={lname}
                  // onChange={(e) => {
                  //   setLname(e.target.value);
                  // }}
                  type={"file"}
                  accept= "image/jpg"
                  sx={{
                    "& label.Mui-focused": { color: `var(--main-color)` },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: `var(--main-color)`,
                      },
                    },
                  }}
                  label="Attributes"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton aria-label="email" edge="end">
                          <DriveFileRenameOutline
                            sx={{ color: `var(--main-color)` }}
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                /> */}
                  <input
                    className="imgInput"
                    type="file"
                    name="myImage"
                    accept="image/x-png,image/gif,image/jpeg"
                  />
                </div>
              </form>
            </div>
          )}
          {theActive === 1 && (
            <div className="sectionWrap">
              <h4>About Section</h4>
              <p className="smallText">
                what you want people to know about you.
              </p>
              <form>
                <div className="App-group">
                  <TextField
                    required={true}
                    id="title"
                    // value={fname}
                    // onChange={(e) => setFname(e.target.value)}
                    label="Job Title"
                    sx={{
                      "& label.Mui-focused": { color: `var(--main-color)` },
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: `var(--main-color)`,
                        },
                      },
                    }}
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton aria-label="email" edge="end">
                            <DriveFileRenameOutline
                              sx={{ color: `var(--main-color)` }}
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>

                <div className="App-group">
                  <TextField
                    id="details"
                    multiline
                    // value={details}
                    // onChange={(e) => {
                    //   setDetails(e.target.value);
                    // }}
                    sx={{
                      "& label.Mui-focused": { color: `var(--main-color)` },
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: `var(--main-color)`,
                        },
                      },
                    }}
                    rows={4}
                    label="Details"
                    variant="outlined"
                    type={"text"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton aria-label="email" edge="end">
                            <DriveFileRenameOutline
                              sx={{ color: `var(--main-color)` }}
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>

                <div className="App-group">
                  <p className="smDiscrip">
                    <i>Select an image of you with (.jpg) extention</i>{" "}
                  </p>
                  <input
                    className="imgInput"
                    type="file"
                    name="myImage"
                    accept="image/x-png,image/gif,image/jpeg"
                  />
                </div>
              </form>
            </div>
          )}
          {theActive === 2 && (
            <div className="sectionWrap">
              <h4>Skills Section</h4>
              <p className="smallText">kindly list all the skills acquired.</p>
              <form>
                <div className="App-group">
                  <TextField
                    required={true}
                    id="skillName"
                    // value={fname}
                    // onChange={(e) => setFname(e.target.value)}
                    label="Skill Name"
                    sx={{
                      "& label.Mui-focused": { color: `var(--main-color)` },
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: `var(--main-color)`,
                        },
                      },
                    }}
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton aria-label="email" edge="end">
                            <DriveFileRenameOutline
                              sx={{ color: `var(--main-color)` }}
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>

                <div className="App-group">
                  {/* <TextField
                    id="details"
                    multiline
                    // value={details}
                    // onChange={(e) => {
                    //   setDetails(e.target.value);
                    // }}
                    sx={{
                      "& label.Mui-focused": { color: `var(--main-color)` },
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: `var(--main-color)`,
                        },
                      },
                    }}
                    rows={4}
                    label="Details"
                    variant="outlined"
                    type={"text"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton aria-label="email" edge="end">
                            <DriveFileRenameOutline
                              sx={{ color: `var(--primary)` }}
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  /> */}
                  <div className="sliderWrap">
                    <p id="input-slider">Percentage</p>
                    <Grid container spacing={4} alignItems="center">
                      <Grid item xs>
                        <Slider
                          value={typeof value === "number" ? value : 0}
                          onChange={handleSliderChange}
                          aria-labelledby="input-slider"
                          marks={marks}
                          sx={{ color: `var(--main-color)` }}
                        />
                      </Grid>
                      <Grid item>
                        <input
                          className="numberInput"
                          // readOnly='true'style={{ width:'30px',borderBottom:'1px solid #bbbbbc', borderTop: "0",borderLeft: "0",borderRight: "0"}}
                          type="number"
                          value={value}
                          size="small"
                          min={0}
                          max={100}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          // inputProps={{
                          //   step: 10,
                          //   min: 0,
                          //   max: 100,
                          //   type: "number",
                          //   "aria-labelledby": "input-slider",
                          // }}
                        />
                      </Grid>
                    </Grid>
                  </div>
                </div>
                <div className="App-group">
                  <p className="smDiscrip">
                    <i>Select image with (.jpg) extention</i>{" "}
                  </p>
                  <input
                    className="imgInput"
                    type="file"
                    name="myImage"
                    accept="image/x-png,image/gif,image/jpeg"
                  />
                </div>

                <div className="addBtnWrap">
                  <p className="smallText" style={{ marginRight: "5px" }}>
                    Add Skills
                  </p>
                  <div
                    disabled={theActive === 0 ? true : false}
                    variant="contained"
                    // disabled={isConfirmed === true ? false : true}
                    size="large"
                    onClick={handlePrevious}
                    className="addBtn"
                  >
                    <p>+</p>
                  </div>
                </div>

                <div className="App-group">
                  <p className="smDiscrip">
                    <i>Provide a link to your CV (Curriculum Vitae)/ Resume</i>{" "}
                  </p>
                  <TextField
                    required={true}
                    id="resumeLink"
                    type={"url"}
                    // value={fname}
                    // onChange={(e) => setFname(e.target.value)}
                    label="Resume Link "
                    sx={{
                      "& label.Mui-focused": { color: `var(--main-color)` },
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: `var(--main-color)`,
                        },
                      },
                    }}
                    variant="outlined"
                  />
                </div>
              </form>
            </div>
          )}
          <div className="buttonWrap">
            <Button
              disabled={theActive === 0 ? true : false}
              variant="contained"
              // disabled={isConfirmed === true ? false : true}
              size="large"
              onClick={handlePrevious}
              className="App-Button"
            >
              Back
            </Button>
            <Button
              variant="contained"
              // disabled={isConfirmed === true ? false : true}
              size="large"
              onClick={handleNext}
              className="App-Button"
            >
              Next
            </Button>
          </div>
        </div>
      )}
      {nextView === 2 && (
        <div className="main">
          <Stack sx={{ width: "100%" }} spacing={4}>
            <Stepper
              alternativeLabel
              activeStep={secondActive}
              connector={<ColorlibConnector />}
            >
              {secondSteps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Stack>
          {theActive === 3 && (
            <div className="sectionWrap">
              <h4>Your Services Section</h4>
              <p className="smallText">All the services you render</p>
              <form>
                <div className="App-group">
                  <TextField
                    required={true}
                    id="description"
                    // value={fname}
                    // onChange={(e) => setFname(e.target.value)}
                    label="Services Description"
                    multiline
                    rows={4}
                    type="text"
                    sx={{
                      "& label.Mui-focused": { color: `var(--main-color)` },
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: `var(--main-color)`,
                        },
                      },
                    }}
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton aria-label="email" edge="end">
                            <DriveFileRenameOutline
                              sx={{ color: `var(--main-color)` }}
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>

                <div className="App-group">
                  <TextField
                    id="serviceType"
                    required={true}
                    // value={lname}
                    // onChange={(e) => {
                    //   setLname(e.target.value);
                    // }}
                    sx={{
                      "& label.Mui-focused": { color: `var(--main-color)` },
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: `var(--main-color)`,
                        },
                      },
                    }}
                    label="Service Type"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton aria-label="email" edge="end">
                            <DriveFileRenameOutline
                              sx={{ color: `var(--main-color)` }}
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>

                <div className="App-group">
                  <TextField
                    id="serviceSummary"
                    // required={true}
                    // value={lname}
                    // onChange={(e) => {
                    //   setLname(e.target.value);
                    // }}
                    multiline
                    rows={4}
                    type="text"
                    sx={{
                      "& label.Mui-focused": { color: `var(--main-color)` },
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: `var(--main-color)`,
                        },
                      },
                    }}
                    label="Service Summary"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton aria-label="email" edge="end">
                            <DriveFileRenameOutline
                              sx={{ color: `var(--main-color)` }}
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className="addBtnWrap">
                  <p className="smallText" style={{ marginRight: "5px" }}>
                    Add Service
                  </p>
                  <div
                    disabled={theActive === 0 ? true : false}
                    variant="contained"
                    // disabled={isConfirmed === true ? false : true}
                    size="large"
                    onClick={handlePrevious}
                    className="addBtn"
                  >
                    <p>+</p>
                  </div>
                </div>
              </form>
            </div>
          )}
          {theActive === 4 && (
            <div className="sectionWrap">
              <h4>Portfolio Section</h4>
              <p className="smallText">
                Provide images and description of projects and products you
                worked on.
              </p>
              <form>
                <div className="App-group">
                  <TextField
                    id="projectName"
                    // required={true}
                    // value={lname}
                    // onChange={(e) => {
                    //   setLname(e.target.value);
                    // }}
                    sx={{
                      "& label.Mui-focused": { color: `var(--main-color)` },
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: `var(--main-color)`,
                        },
                      },
                    }}
                    label="Project Name"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton aria-label="email" edge="end">
                            <DriveFileRenameOutline
                              sx={{ color: `var(--main-color)` }}
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className="App-group">
                  <p className="smDiscrip">
                    <i>A brief summary on this project</i>{" "}
                  </p>
                  <TextField
                    type={"text"}
                    multiline
                    rows={4}
                    id="projectSum"
                    // value={fname}
                    // onChange={(e) => setFname(e.target.value)}
                    label="Summary"
                    sx={{
                      "& label.Mui-focused": { color: `var(--main-color)` },
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: `var(--main-color)`,
                        },
                      },
                    }}
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton aria-label="email" edge="end">
                            <DriveFileRenameOutline
                              sx={{ color: `var(--main-color)` }}
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className="App-group">
                  <p className="smDiscrip">
                    <i>Select images with (.jpg) extention</i>{" "}
                  </p>
                  <input
                    className="imgInput"
                    type="file"
                    name="myImage"
                    accept="image/x-png,image/gif,image/jpeg"
                  />
                </div>
                <div className="addBtnWrap">
                  <p className="smallText" style={{ marginRight: "5px" }}>
                    Add Project
                  </p>
                  <div
                    disabled={theActive === 0 ? true : false}
                    variant="contained"
                    // disabled={isConfirmed === true ? false : true}
                    size="large"
                    onClick={handlePrevious}
                    className="addBtn"
                  >
                    <p>+</p>
                  </div>
                </div>
                <div className="App-group">
                  <TextField
                    id="details"
                    multiline
                    // value={details}
                    // onChange={(e) => {
                    //   setDetails(e.target.value);
                    // }}
                    sx={{
                      "& label.Mui-focused": { color: `var(--main-color)` },
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: `var(--main-color)`,
                        },
                      },
                    }}
                    rows={4}
                    label="Details"
                    variant="outlined"
                    type={"text"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton aria-label="email" edge="end">
                            <DriveFileRenameOutline
                              sx={{ color: `var(--main-color)` }}
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
              </form>
            </div>
          )}
          {theActive === 5 && (
            <div className="sectionWrap">
              <h4>Contact Section</h4>
              <p className="smallText">Provide your contact address.</p>
              <form>
                <div className="App-group">
                  <TextField
                    required={true}
                    id="phone"
                    // value={fname}
                    // onChange={(e) => setFname(e.target.value)}
                    label="Phone Number"
                    type={"tel"}
                    sx={{
                      "& label.Mui-focused": { color: `var(--main-color)` },
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: `var(--main-color)`,
                        },
                      },
                    }}
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton aria-label="email" edge="end">
                            <DriveFileRenameOutline
                              sx={{ color: `var(--main-color)` }}
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>

                <div className="App-group">
                  <TextField
                    required={true}
                    id="contactMail"
                    // value={details}
                    // onChange={(e) => {
                    //   setDetails(e.target.value);
                    // }}
                    sx={{
                      "& label.Mui-focused": { color: `var(--main-color)` },
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: `var(--main-color)`,
                        },
                      },
                    }}
                    label="Email"
                    variant="outlined"
                    type={"email"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton aria-label="email" edge="end">
                            <DriveFileRenameOutline
                              sx={{ color: `var(--main-color)` }}
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>

                <div className="App-group">
                  <TextField
                    id="linkedinLink"
                    type={"url"}
                    // value={fname}
                    // onChange={(e) => setFname(e.target.value)}
                    label="Linkedin"
                    sx={{
                      "& label.Mui-focused": { color: `var(--main-color)` },
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: `var(--main-color)`,
                        },
                      },
                    }}
                    variant="outlined"
                  />
                </div>

                <div className="App-group">
                  <p className="smDiscrip">
                    <i>Select image with (.jpg) extention</i>{" "}
                  </p>
                  <input
                    className="imgInput"
                    type="file"
                    name="myImage"
                    accept="image/x-png,image/gif,image/jpeg"
                  />
                </div>
              </form>
            </div>
          )}
          <div className="buttonWrap">
            <Button
              // disabled={theActive === 3 ? true : false}
              variant="contained"
              // disabled={isConfirmed === true ? false : true}
              size="large"
              onClick={handleSecondPrevious}
              className="App-Button"
            >
              Back
            </Button>
            <Button
              variant="contained"
              // disabled={isConfirmed === true ? false : true}
              size="large"
              onClick={handleSecondNext}
              className="App-Button"
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
