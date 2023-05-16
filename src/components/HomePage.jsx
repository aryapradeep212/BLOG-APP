import { TableCell,Table, TableContainer, TableHead, TableRow, Typography, Card, TableBody } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const HomePage = () => {
    var[user,setUser]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
        console.log(response.data)
        setUser(response.data)
    })
    .catch((err)=>(console.log(err)))
    },[])
  return (
    <div>
        <br /><br /><br /><Typography variant='h3'>Blog Home Page</Typography>
            <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>TITLE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {user.map((value,index)=>{
                        return(
                            <TableRow key={index}>
                            <TableCell>{value.id}</TableCell>
                            <TableCell>{value.title}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default HomePage