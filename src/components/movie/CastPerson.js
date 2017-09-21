import React from 'react';

const CastPerson = (props) => {
    const { person }  = props;
    const info  = person.person;
    return (
        <tr>
            <td>{info.data.name}</td>
            <td><i>{person.character}</i></td>
        </tr>
    );
}
export default CastPerson;