import React from 'react';
import { Sub } from "../types"

interface Props {
  sub: Sub;
}

const nameComponent: React.FunctionComponent<Props> = ({ sub })=> {
  return (
    <div>
      <h3>{sub.nameSurname}</h3>
    </div>
  );
};

export default nameComponent;
