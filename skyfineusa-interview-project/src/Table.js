// import React, { useState } from 'react';
import { useState } from 'react';
import { TableWithBrowserPagination, Column } from 'react-rainbow-components';
import StatesData from './StatesData';

const data = StatesData;

const Table = () => {

    const [key, setKey] = useState("duiSeverityScore")

    return (
        <div>
            
            <p>Hey, it's a paginated table!</p>

            <TableWithBrowserPagination 
                className = ""
                data = {data}
                pageSize = {10}
                keyField = "state"
            >
                <Column 
                    header = "State"
                    field = "state"
                />
                <Column 
                    header = "DUI Severity Score"
                    field = "duiSeverityScore"
                />
                <Column 
                    header = "Population"
                    field = "population"
                />
                <Column 
                    header = "DUI Arrests"
                    field = "duiArrests"
                />
                <Column 
                    header = "DUI Fatalities"
                    field = "duiFatalities"
                />
            </TableWithBrowserPagination>
        </div>
    )
}

export default Table