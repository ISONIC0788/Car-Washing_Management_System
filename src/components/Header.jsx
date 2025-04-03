
import React from 'react';
import { useState } from 'react';
import { Box, Stack, Alert, Sheet, Typography, RadioGroup, Radio } from '@mui/joy';


function Header() {
    const [variant, setVariant] = useState('solid');
  return (
    <div>
      <Box
        sx={{
          width: '100%', // Ensure the Box takes 100% width
          display: 'flex',
          justifyContent: 'center', // Center the content horizontally
          alignItems: 'center', // Center the content vertically
          p: 2, // Add padding for responsiveness
        }}
      >
        <Stack
          spacing={1}
          sx={{
            width: '100%',
            maxWidth: 400, // Set a max width for the stack
            minWidth: '250px', // Ensure it doesn't go below 250px
            // Optional: You can add media queries if you want specific breakpoints
            '@media (max-width: 600px)': {
              maxWidth: '90%', // On small screens, allow the Stack to take 90% of the width
            },
          }}
        >
          <Alert variant={variant} color="primary">
            Primary
          </Alert>
        </Stack>

        {/* Sheet container for additional content */}
        <Sheet
          sx={{
            pl: 4,
            ml: 3,
            borderLeft: '1px solid',
            borderColor: 'divider',
            display: 'none', // Optional: You can hide or display this based on your needs
            '@media (min-width: 600px)': {
              display: 'block', // Display on larger screens
            },
          }}
        >
          {/* Additional content here */}
        </Sheet>
      </Box>
    </div>
  )
}

export default Header
