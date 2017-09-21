import React from 'react';

const CrewPerson = (props) => {

  const { person }  = props;
  const info  = person.person;
  return (
    <tr>
      <td>{info.data.name}</td>
      <td><i>{person.job}</i></td>
    </tr>
  );
}
export default CrewPerson;