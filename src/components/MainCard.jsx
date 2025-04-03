import * as React from 'react';
// import AspectRatio from '@mui/joy/AspectRatio';
// import Card from '@mui/joy/Card';
// import Typography from '@mui/joy/Typography';
import { Card, AspectRatio, Typography, Box } from "@mui/joy";
import ImageIcon from '@mui/icons-material/Image';
import carWashImg from "../assets/carimage.jpg"


function MainCard() {
  return (
    <div>
     <Card
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" }, // Stack vertically on small screens, horizontally on larger screens
        width: { xs: "100%", sm: "80%", md: "60%", lg: "50%" }, // Responsive width
        maxWidth: 600, // Max width on large screens
        mx: "auto", // Centers the card
        boxShadow: 3, // Adds elevation
        borderRadius: "16px", // Apply border radius to the entire card
        mt: 3, // Margin at top
      }}
    >
      {/* Rotated Image Section */}
      <AspectRatio ratio="16/9" sx={{ width: { xs: "100%", sm: "40%" }, overflow: "hidden" }}>
        <div
          style={{
            transform: "rotate(-10deg)", // Rotate the image
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          {/* <ImageIcon sx={{ fontSize: "4rem", opacity: 0.2, color: "primary.main" }} /> */}

          <img
            src={carWashImg}  // Replace with your external image URL
            alt="Car Wash Service"
            style={{
              width: "100%", // Make the image take full width of the container
              height: "100%", // Make the image take full height of the container
              objectFit: "cover", // Ensure the image covers the container without distortion
            }}
          />
        </div>
      </AspectRatio>

      {/* Text Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          p: 3,
          backgroundColor: "info.main", // Colored background for text section
          color: "white",
          width: { xs: "100%", sm: "60%" }, // Adjust width on different screen sizes
          borderTopLeftRadius: { xs: 0, sm: 2 }, // Rounded top left corner for larger screens
          borderBottomLeftRadius: 2,
          borderRadius: "16px", // Apply border radius to the text section as well
        }}
      >
        <Typography level="title-md" sx={{ fontWeight: "bold" }}>
          We come to car wash
        </Typography>
        <Typography level="body-sm" sx={{ mt: 1 }}>
          Our mobile car wash service comes to you, providing a convenient and high-quality clean for your vehicle at your location.
        </Typography>
      </Box>
    </Card>

    </div>
  )
}

export default MainCard
