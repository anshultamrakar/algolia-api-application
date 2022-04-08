import React from 'react'
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { useNavigate } from "react-router-dom";

const TableFeed = ({post}) => {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = 'row'; 
    navigate(path);
  }
  return (
     <TableRow onClick = {routeChange}>
     
       <TableCell component="th" scope="row">{post.title}</TableCell>
            <TableCell align="left">{post.url}</TableCell>
            <TableCell align="left">{post.created_at}</TableCell>
            <TableCell align="left">{post.author}</TableCell>
     
     </TableRow>
  )
}

export default TableFeed