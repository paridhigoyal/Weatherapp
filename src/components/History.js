import React from 'react';

function History(cityList) {

    return <ul>
        {cityList.cityList.city.map(item =>
            <li>{item}</li>)}
    </ul>

}
export default History