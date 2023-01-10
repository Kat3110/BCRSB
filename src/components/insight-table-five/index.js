import * as React from 'react';
import './insight-table-five.css'
import InsightTitle from "../insight-title";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CapitalLetter from "../capital-letter";
import Button from "../button";

function InsightTableFive(props) {

    function createData(rank, pm, authority, joined, blocks, mentions, time, access) {
        return {rank, pm, authority, joined, blocks, mentions, time, access};
    }

    const rows = [
        createData(
            1,
            {
                name: 'Aron H.',
                color: '#00A3FF',
                email: 'aron@internet.com'

            },
            'Manager',
            50,
            50,
            50,
            '10 minutes (average)',
            '10 min. (average)'
        ),
        createData(
            2,
            {
                name: 'Yves Saint Laurent',
                color: '#8F00FF',
                email: 'aron@internet.com'

            },
            'Manager',
            50,
            50,
            50,
            '10 minutes (average)',
            '20 min. (average)'
        ),
        createData(
            3,
            {
                name: 'Angelica',
                color: '#00A3FF',
                email: 'aron@internet.com'

            },
            'Manager',
            50,
            50,
            50,
            '10 minutes (average)',
            '30 min. (average)'
        ),
        createData(
            4,
            {
                name: 'EDGAR',
                color: '#00A3FF',
                email: 'aron@internet.com'

            },
            'Manager',
            50,
            50,
            50,
            '10 minutes (average)',
            '1 hour (average)'
        ),
        createData(
            5,
            {
                name: 'Hubert Benjamin',
                color: '#00E99E',
                email: 'aron@internet.com'
            },
            'Manager',
            50,
            50,
            50,
            '10 minutes (average)',
            '2 hours (average)'
        ),
    ];

    const rowsHead = [
        'Rank', 'User', 'Authority', 'Joined', 'Blocks', 'Mentions' , 'Response time', 'Last access'
    ]

    return (
        <div className='insight-table'>
            <InsightTitle title={props.title} image={props.image} />
            <Button text='See all' />
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {rowsHead.map((row, index) => (
                                <TableCell align="left"
                                    key={index}
                                >{row}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left">{row.rank}</TableCell>
                                <TableCell align="left"
                                           sx={{
                                               display: 'flex',
                                               alignItems: 'center',
                                               gap: '0 5px'
                                }}>
                                    <CapitalLetter letter={row.pm.name[0]} bgColor={row.pm.color}/>
                                    <div className='insight-table__pm'>
                                        <span>{row.pm.name}</span>
                                        <span>{row.pm.email}</span>
                                    </div>
                                </TableCell>
                                <TableCell align="left">{row.authority}</TableCell>
                                <TableCell align="left">{row.joined}</TableCell>
                                <TableCell align="left">{row.blocks}</TableCell>
                                <TableCell align="left">{row.mentions}</TableCell>
                                <TableCell align="left">{row.time}</TableCell>
                                <TableCell align="left">{row.access}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default InsightTableFive;


