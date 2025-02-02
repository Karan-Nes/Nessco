import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable(props) {
  return (
    <>
        <TableContainer className='tablecontainer' component={Paper} sx={{maxWidth:850}} >
        <Table sx={{ minWidth: 250, maxWidth:800 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Actions</TableCell>
                <TableCell >Sr.</TableCell>
                <TableCell >Date</TableCell>
                <TableCell >Day</TableCell>
                <TableCell >Country</TableCell>
                <TableCell >State</TableCell>
                <TableCell >City</TableCell>
                <TableCell >Client Name</TableCell>
                <TableCell >Purpose</TableCell>
                <TableCell >Remarks</TableCell>

            </TableRow>
            </TableHead>
            {/* <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell >{row.calories}</TableCell>
                <TableCell >{row.fat}</TableCell>
                <TableCell >{row.carbs}</TableCell>
                <TableCell >{row.protein}</TableCell>
                </TableRow>
            ))}
            </TableBody> */}
        </Table>
        </TableContainer>
        <div className='btngroup'>
            <Button className='tablebtn' variant="contained" size="medium" sx={{backgroundColor:props.darkmode?"black":"white", color:props.darkmode?"white":"black", borderRadius:"30px  " , ml:2}}>
            Submit
            </Button>
            <Button className='tablebtn' variant="contained" size="medium" sx={{backgroundColor:props.darkmode?"black":"white", color:props.darkmode?"white":"black", borderRadius:"30px  " , ml:2}}>
            Clear
            </Button>
        </div>
    </>

  );
}