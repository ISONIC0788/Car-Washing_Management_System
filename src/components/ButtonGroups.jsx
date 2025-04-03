

import React from 'react'
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import IconButton from '@mui/joy/IconButton';
import Settings from '@mui/icons-material/Settings';

function ButtonGroups() {
  return (
    <div  
    className="flex justify-center items-center " //min-h-screen  Centering the button group in the screen
     
    >
 <ButtonGroup
  aria-label="radius button group"
  sx={{
    '--ButtonGroup-radius': '40px', // Rounded corners
    backgroundColor: 'background.default', // Adapts to dark/light mode
    color: 'text.primary', // Text color
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
    display: 'flex',
    flexDirection: 'row', // Always row, no responsiveness
    gap: 1, // Space between buttons
    padding: 3, // Padding for spacing
    height: '30px', // Fixed height
    alignItems: 'center', // Center items vertically
    justifyContent: 'center', // Center items horizontally
    width: '100%', // Full width
  }}
>
  <Button
    sx={{
      backgroundColor: 'primary.main',
      color: 'black',
      '&:hover': { backgroundColor: 'primary.dark' },
      height: '30px', // Fixed height
      width: 'auto', // Auto width for all screen sizes
    }}
  >
    One
  </Button>

  <Button
    sx={{
      backgroundColor: 'primary.main',
      color: 'black',
      '&:hover': { backgroundColor: 'primary.dark' },
      height: '30px',
      width: 'auto',
    }}
  >
    Two
  </Button>

  <Button
    sx={{
      backgroundColor: 'primary.main',
      color: 'black',
      '&:hover': { backgroundColor: 'primary.dark' },
      height: '30px',
      width: 'auto',
    }}
  >
    Three
  </Button>

  <IconButton
    sx={{
      backgroundColor: 'secondary.main',
      color: 'black',
      '&:hover': { backgroundColor: 'secondary.dark' },
      height: '30px',
      width: 'auto',
    }}
  >
    <Settings />
  </IconButton>
</ButtonGroup>
    </div>
  )
}

export default ButtonGroups
