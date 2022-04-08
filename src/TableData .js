import React from 'react'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import TableFeed from './TableFeed';
import { Link } from "react-router-dom"
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const TableData  = ({posts}) => {
  return (
    <TableContainer className="Javed" component={Paper}>
    <Table aria-label="simple table" className='table'>
      <TableHead >
        <TableRow>
          <TableCell align="left" >Title</TableCell>
          <TableCell  align="left">URL</TableCell>
          <TableCell  align="left"> Created_at</TableCell>
          <TableCell  align="left"> Author</TableCell>
        </TableRow>
      </TableHead>
   <TableBody>
        {posts.map((post, index) => (
           <TableFeed key = {index} post = {post}/>
        ))}
      </TableBody>
    </Table>
   
  </TableContainer>
  )
}

export default TableData 