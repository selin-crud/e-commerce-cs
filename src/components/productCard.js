import * as React from "react"
import { useTheme } from "@mui/material/styles"
import Box from "@mui/material/Box"
import MobileStepper from "@mui/material/MobileStepper"
import Paper from "@mui/material/Paper"
import SwipeableViews from "react-swipeable-views"
import { autoPlay } from "react-swipeable-views-utils"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

function ProductImage({ item }) {
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = item?.images.length

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {item?.images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: "block",
                  maxWidth: 400,
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step}
                alt={item.title}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
      />
    </Box>
  )
}

export default ProductImage
