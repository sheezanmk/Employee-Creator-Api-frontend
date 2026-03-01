import React from 'react'
import { useParams } from 'react-router-dom';

const EditEmployeePage = () => {

    const { id } = useParams();
    
  return (
    <main>
        <h1>Edit employee</h1>
        <p>Editing employee id : {id}</p>
    </main>
  )
}

export default EditEmployeePage