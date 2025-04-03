import React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

function Card3D() {
  return (
    <div>
       <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Stack on small screens, row on large screens
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4, // Add spacing between the two sections
        padding: 3,
        width: '100%',
      }}
    >
      {/* Left Section: 3D Animated Card */}
      <Box
        sx={{
          perspective: '1000px',
          transition: 'transform 0.4s',
          '& > div, & > div > div': {
            transition: 'inherit',
          },
          '&:hover': {
            '& > div': {
              transform: 'rotateY(30deg)',
              '& > div:nth-child(2)': {
                transform: 'scaleY(0.9) translate3d(20px, 30px, 40px)',
              },
              '& > div:nth-child(3)': {
                transform: 'translate3d(45px, 50px, 40px)',
              },
            },
          },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '300px',
          padding: 2,
        }}
      >
        <Card
          variant="outlined"
          sx={{
            minHeight: '280px',
            width: { xs: '90%', sm: '320px' }, // Responsive width
            backgroundColor: '#fff',
            borderColor: '#000',
          }}
        >
          <Typography level="h2" textColor="#000" sx={{ fontSize: 'lg' }}>
            Card
          </Typography>
          <CardCover
            sx={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
              border: '1px solid',
              borderColor: '#777',
              backdropFilter: 'blur(1px)',
            }}
          >
            <Typography level="h2" textColor="#fff" sx={{ fontSize: 'lg' }}>
              Card Cover
            </Typography>
          </CardCover>
          <CardContent
            sx={{
              alignItems: 'self-end',
              justifyContent: 'flex-end',
              background: 'linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))',
              border: '1px solid',
              borderColor: '#000',
              backdropFilter: 'blur(1px)',
            }}
          >
            <Typography level="h2" textColor="#fff" sx={{ fontSize: 'lg', m: 2 }}>
              Card Content
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Right Section: Text Content */}
      <Box
        sx={{
          maxWidth: { xs: '90%', md: '40%' }, // Adjust width for responsiveness
          textAlign: { xs: 'center', md: 'left' }, // Center text on small screens
          padding: 2,
        }}
      >
        <Typography level="h2" sx={{ fontSize: '2rem', fontWeight: 'bold', color: '#d499ff' }}>
          We Come to Car Wash
        </Typography>
        <Typography level="body-md" sx={{ fontSize: '1rem', color: '#fff', mt: 1 }}>
          Experience the best car washing service at your convenience. Our team ensures 
          quality cleaning with eco-friendly products and high-end equipment.
        </Typography>
      </Box>
    </Box>
    </div>
  )
}

export default Card3D
