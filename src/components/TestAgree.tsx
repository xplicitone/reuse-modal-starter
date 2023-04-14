import { useContext } from "react";

import AgreementContext from "./AgreementContext";

const TestAgree = () => {

  const acknowledged = useContext(AgreementContext);

  return (
    <div>
      <button onClick={() => console.log(acknowledged)}>See Acknowledged</button>
    </div>
  );
};

export default TestAgree;