import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import { Card } from "@mui/material";

import { Button } from "@/components/ui/button";
import FirstStep from "./All Steps/FirstStep";
import SecondStep from "./All Steps/SecondStep";
import FinalStep from "./All Steps/FinalStep";

const steps = ["First things first...", "Quiz Settings", "Final Review"];

export default function LinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  console.log(activeStep);

  function renderActiveStep(activeStep: number) {
    if (activeStep === 0) {
      return <FirstStep />;
    }

    if (activeStep === 1) {
      return <SecondStep />;
    }

    if (activeStep === 2) {
      return <FinalStep />;
    }
  }

  return (
    <Box sx={{ width: "100%" }} className="poppins">
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: { optional?: React.ReactNode } = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }

          return (
            <Step key={label} {...stepProps}>
              <StepLabel
                {...labelProps}
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  "& .MuiStepIcon-root": {
                    color:
                      activeStep === index ? "hsl(var(--primary))" : "#6b7280",
                  },
                  "& .MuiStepLabel-label": {
                    color:
                      activeStep === index ? "hsl(var(--primary))" : "#6b7280",
                  },
                }}
              >
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              onClick={handleReset}
              className="bg-primary text-primary-foreground"
            >
              Reset
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <div className="">
          {renderActiveStep(activeStep)}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              onClick={handleNext}
              className="bg-primary text-primary-foreground"
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </div>
      )}
    </Box>
  );
}
