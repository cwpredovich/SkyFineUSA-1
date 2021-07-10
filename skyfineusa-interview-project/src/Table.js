import { useState } from 'react'
import { TableWithBrowserPagination, Column } from 'react-rainbow-components'
import StatesData from './StatesData'
import Dropdown from './Dropdown';
import 'react-dropdown/style.css'

const data = StatesData;

const Table = () => {
    const sortByOptionsList = [
        {
            id: 1,
            title: 'DUI Severity Score (Descending)',
            isSelected: false,
            key: "sortOptions"
        },
        {
            id: 2,
            title: 'State Name (A - Z)', 
            isSelected: false,
            key: "sortOptions"
        },
        {
            id: 3,
            title: 'State Population (Descending)',
            isSelected: false,
            key: "sortOptions"
        }
    ];
    
    const [tableData, setTableData] = useState(data)
    const [sortOptions, setSortOptions] = useState(sortByOptionsList)
    
    const sortData = (sortOptionId) => {
        switch (sortOptionId) {
            // Case 1 is when the user wants to sort by DUI Severity Score
            case 1:
                const sortedByScore = data.sort((a, b) => a.duiSeverityScore < b.duiSeverityScore ? 1 : -1)
                console.log("data sorted by score", sortedByScore)
                return (sortedByScore)
                
            // Case 2 is when the user wants to sort alphabetically by state name
            case 2:
                const sortedAlphabetically = data.sort((a, b) => a.state > b.state ? 1 : -1)
                console.log("data sorted by a to z", sortedAlphabetically)
                return (sortedAlphabetically)
                break;
                
            // Case 3 is when the user wants to sort by state population
            case 3:
                const sortedByPopulation = data.sort((a, b) => a.population < b.population ? 1 : -1)
                console.log("data sorted by population", sortedByPopulation)
                return (sortedByPopulation)
                break;

            default:
                return (data)
        }
    } 

    const resetThenSet = (id) => {
        const updatedSortByOptionsList = sortOptions.map((sortOption) => {
            var updatedSortOption
            if (sortOption.id === id) {
                updatedSortOption = {
                    ...sortOption,
                    isSelected: true
                }
                return updatedSortOption
            }
            return sortOption
        })
        setSortOptions(updatedSortByOptionsList)
        setTableData(sortData(id))
    }

    return (
        <div>
            <div className="table-description">
                <p>The table below displays all 50 United States in order of their DUI Severity Score. The DUI Severity Score is calculated using DUI arrest rates per 100K and DUI fatalities per 100K. Rates per 100K were calculated using the latest 2018 FBI Arrest statistics for DUI arrests, and National Highway Traffic Safety Administration statistics for DUI fatalities.</p>
            </div>

            <Dropdown 
                title="Sort by..."
                list={sortByOptionsList}
                resetThenSet={resetThenSet}
            />

            <TableWithBrowserPagination 
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