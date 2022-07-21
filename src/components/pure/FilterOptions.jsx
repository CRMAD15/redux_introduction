import React from 'react';
import PropTypes from 'prop-types';
import FilterContainers from '../containers/FilterContainers';


const FilterOptions = () => {


    return (
        <div className='filters'>

            {/* Filter Containers */}
            <FilterContainers filter='SHOW_ALL'>
                ALL
            </FilterContainers>
            <FilterContainers filter='SHOW_ACTIVE'>
                ACTIVE
            </FilterContainers>
            <FilterContainers filter='SHOW_COMPLETED'>
                COMPLETED
            </FilterContainers>
        </div>
    );
};




export default FilterOptions;
