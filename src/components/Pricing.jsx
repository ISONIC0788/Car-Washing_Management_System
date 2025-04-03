
import React from 'react';

import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

function Pricing() {
  return (
    <div className='flex justify-center items-center'>
      
      <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(https://source.unsplash.com/random/1600x900/?business)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        padding: 4,
      }}
    >
      {/* Blurred Background Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      />

      {/* Header */}
      <Typography
        level="h1"
        sx={{
          color: '#fff',
          fontSize: { xs: '1.8rem', md: '2.5rem' },
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: 3,
          zIndex: 2,
        }}
      >
        Pricing Plans
      </Typography>

      {/* Centered Pricing Cards */}
      <Box
        sx={{
          width: '100%',
          maxWidth: '900px',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: 3,
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        }}
      >
        {/* Basic Plan */}
        <Card
          size="lg"
          variant="outlined"
          sx={{
            textAlign: 'center',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
            },
          }}
        >
          <Chip size="sm" variant="outlined" color="neutral">
            BASIC
          </Chip>
          <Typography level="h2">Professional</Typography>
          <Divider inset="none" />
          <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Virtual Credit Cards
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Financial Analytics
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Checking Account
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              API Integration
            </ListItem>
          </List>
          <Divider inset="none" />
          <CardActions>
            <Typography level="title-lg" sx={{ mr: 'auto' }}>
              3.990€{' '}
              <Typography textColor="text.tertiary" sx={{ fontSize: 'sm' }}>
                / month
              </Typography>
            </Typography>
            <Button variant="soft" color="neutral" endDecorator={<KeyboardArrowRight />}>
              Start now
            </Button>
          </CardActions>
        </Card>

        {/* Most Popular Plan */}
        <Card
          size="lg"
          variant="solid"
          color="neutral"
          invertedColors
          sx={{
            bgcolor: 'neutral.900',
            textAlign: 'center',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
            },
          }}
        >
          <Chip size="sm" variant="outlined">
            MOST POPULAR
          </Chip>
          <Typography level="h2">Unlimited</Typography>
          <Divider inset="none" />
          <List
            size="sm"
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              mx: 'calc(-1 * var(--ListItem-paddingX))',
            }}
          >
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Virtual Credit Cards
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Financial Analytics
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Checking Account
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              API Integration
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Cancel Anytime
            </ListItem>
          </List>
          <Divider inset="none" />
          <CardActions>
            <Typography level="title-lg" sx={{ mr: 'auto' }}>
              5.990€{' '}
              <Typography textColor="text.tertiary" sx={{ fontSize: 'sm' }}>
                / month
              </Typography>
            </Typography>
            <Button endDecorator={<KeyboardArrowRight />}>Start now</Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
    </div>
  )
}

export default Pricing
