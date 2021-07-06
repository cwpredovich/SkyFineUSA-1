import { useState } from 'react';
import { TableWithBrowserPagination, Column } from 'react-rainbow-components';
import StatesData from './StatesData';

const data = StatesData;

const Table = () => {

    const [tableData, setTableData] = useState(data)



    return (
        <div>
            <div className="table-description">
                <p>The table below displays all 50 United States in order of their DUI Severity Score. The DUI Severity Score is calculated using DUI arrest rates per 100K and DUI fatalities per 100K. Rates per 100K were calculated using the latest 2018 FBI Arrest statistics for DUI arrests, and National Highway Traffic Safety Administration statistics for DUI fatalities.</p>
            </div>

            <TableWithBrowserPagination 
                className = ""
                data = {tableData}
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