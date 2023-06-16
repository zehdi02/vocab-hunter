import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const Record = (props) => {
    <tr>
        <td>{props.record.name}</td>
        <td>{props.record.password}</td>
    </tr>
}

export default function RecordList(){
    const [records, setRecords] = useState([]);

    useEffect(() => {
        async function getRecords(){
            const response = await fetch(`http://localhost:5050/record/`);

            if(!response.ok){
                const message = `An error occured: ${response.statusText}`;
            }
        }
    })
}