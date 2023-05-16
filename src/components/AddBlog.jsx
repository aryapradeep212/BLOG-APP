import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const AddBlog = () => {
  return (
    <div>
        <br /><br /><br />
        <Typography variant='h3'>Add Blog</Typography><br /><br />
        <TextField label='Blog Name' variant='outlined'/><br /><br />
        <TextField id="outlined-multiline-flexible" label="Description" multiline minRows={2}/><br /><br />
        <TextField label='Author Name' variant='outlined'/><br /><br />
        <Button variant='contained'>Submit</Button>
    </div>
  )
}

export default AddBlog