import React, { useState } from "react";


interface Props {

  }
  
const API: React.FunctionComponent<Props> = ({  }) => {
    const [jsonData, setJsonData] = useState<any>(null);

    const handleAPI = () => {
        fetch("https://randomuser.me/api/?results=10")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setJsonData(data); 
            })
            .catch((error) => {
                console.error(error); 
            });
    };
    return (
      <div>
        <button onClick={handleAPI} type="button">get the api information</button>
        {jsonData && <pre>{JSON.stringify(jsonData, null, 2)}</pre>}
      </div>
    );
};

export default API;