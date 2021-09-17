import React from 'react'
import { studentRows } from '../../../dummydata';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import './studentList.css'

export default function StudentList() {
    const [data,setData] = useState(studentRows)

    const handleDelete = (id)=>{
        setData(data.filter((item) => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'firstName', headerName: 'First name', width: 150 },
        { field: 'lastName', headerName: 'Last name', width: 150 },
        {
          field: 'age',
          headerName: 'Age',
          width: 100,
          type: 'number',

        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 100,
            renderCell: (params)=>{
                return(
                    <>
                        <Link to={"/student/"+params.row.id} >
                            <button className="studentListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="studentListDelete" onClick={()=>handleDelete(params.row.id)}/>
                    </>
                )
            }

        }
      ];

    return (
        <div className="studentList">
            <div style={{ height: '100%', width: '100%' }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>
        </div>
    )
}
