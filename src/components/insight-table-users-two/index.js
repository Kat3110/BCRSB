import * as React from 'react';
import './insight-table-users-two.css'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CapitalLetter from "../capital-letter";
import {ReactComponent as ArrowSquareInPink} from "../../assets/ArrowSquareInPink.svg";
import Pagination from '../../components/pagination'

function InsightTableUsersTwo() {

    function createData(rank, pm, authority, joined, text, emoji, image, link, video, file, time, access) {
        return {rank, pm, authority, joined, text, emoji, image, link, video, file, time, access};
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
            50,
            50,
            50,
            50,
            '10 min. (average)',
            '10 minutes (average)'
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
            50,
            50,
            50,
            50,
            '10 min. (average)',
            '10 minutes (average)'
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
            50,
            50,
            50,
            50,
            '10 min. (average)',
            '10 minutes (average)'
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
            50,
            50,
            50,
            50,
            '10 min. (average)',
            '10 minutes (average)'
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
            50,
            50,
            50,
            50,
            '10 min. (average)',
            '10 minutes (average)'
        ),
        createData(
            6,
            {
                name: 'Aron H.',
                color: '#00A3FF',
                email: 'aron@internet.com'
            },
            'Manager',
            50,
            50,
            50,
            50,
            50,
            50,
            50,
            '10 min. (average)',
            '10 minutes (average)'
        ),
        createData(
            7,
            {
                name: 'Yves Saint Laurent',
                color: '#8F00FF',
                email: 'aron@internet.com'
            },
            'Manager',
            50,
            50,
            50,
            50,
            50,
            50,
            50,
            '10 min. (average)',
            '10 minutes (average)'
        ),
        createData(
            8,
            {
                name: 'Angelica',
                color: '#00A3FF',
                email: 'aron@internet.com'
            },
            'Manager',
            50,
            50,
            50,
            50,
            50,
            50,
            50,
            '10 min. (average)',
            '10 minutes (average)'
        ),
        createData(
            9,
            {
                name: 'EDGAR',
                color: '#00A3FF',
                email: 'aron@internet.com'
            },
            'Manager',
            50,
            50,
            50,
            50,
            50,
            50,
            50,
            '10 min. (average)',
            '10 minutes (average)'
        ),
        createData(
            10,
            {
                name: 'Hubert Benjamin',
                color: '#00E99E',
                email: 'aron@internet.com'
            },
            'Manager',
            50,
            50,
            50,
            50,
            50,
            50,
            50,
            '10 min. (average)',
            '10 minutes (average)'
        ),
    ];

    const rowsHead = [
        'Rank', 'User', 'Authority', 'Joined', 'Text', 'Emoji', 'Images', 'Link', 'Video', 'File', 'Response time', 'Last access'
    ]

    return (
        <div className='insight-table'>
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
                                <TableCell align="left">{row.text}</TableCell>
                                <TableCell align="left">{row.emoji}</TableCell>
                                <TableCell align="left">{row.image}</TableCell>
                                <TableCell align="left">{row.link}</TableCell>
                                <TableCell align="left">{row.video}</TableCell>
                                <TableCell align="left">{row.file}</TableCell>
                                <TableCell align="left">{row.time}</TableCell>
                                <TableCell align="left">{row.access}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination />
        </div>
    );
}

export default InsightTableUsersTwo;


