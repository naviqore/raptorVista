import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import dayjs, { Dayjs } from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'

function RoutePlanner() {
  const [startLocation, setStartLocation] = useState('')
  const [selectedDateTime, setSelectedDateTime] = useState<Dayjs | null>(
    dayjs()
  )
  const [endLocation, setEndLocation] = useState('')

  const handleSubmit = () => {
    console.log('Start Location:', startLocation)
    console.log('Selected Date and Time:', selectedDateTime)
    console.log('End Location:', endLocation)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 1,
          m: 1,
          borderRadius: 1,
          bgcolor: 'background.paper',
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Start Location"
          variant="outlined"
          value={startLocation}
          onChange={e => setStartLocation(e.target.value)}
          sx={{ m: 1, width: '50ch' }}
        />
        <TextField
          label="End Location"
          variant="outlined"
          value={endLocation}
          onChange={e => setEndLocation(e.target.value)}
          sx={{ m: 1, width: '50ch' }}
        />
        <DateTimePicker
          label="Select Date and Time"
          value={selectedDateTime}
          onChange={newValue => setSelectedDateTime(newValue)}
          sx={{ m: 1, width: '50ch' }}
        />
        <Button variant="contained" onClick={handleSubmit} sx={{ m: 1 }}>
          Plan Route
        </Button>
      </Box>
    </LocalizationProvider>
  )
}

export default RoutePlanner
