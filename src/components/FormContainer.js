import { useState } from "react";
import FormElements from "./FormElements";

const FormContainer = ({ Config }) => {
  const [Verify, setVerify] = useState(null);
  return (
    <div className="FormContainer col-12 col-sm-6">
      <div className="text-center mb-4">
        <button
          type="button"
          className="btn btn-primary btn-lg me-3"
          onClick={(e) => {
            e.preventDefault();
            setVerify(false);
          }}
        >
          Claim Certificate
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={(e) => {
            e.preventDefault();
            setVerify(true);
          }}
        >
          Verify Certificate
        </button>
      </div>
      {Verify !== null && (
        <form className="p-3">
          <FormElements Config={Config} Verify={Verify} />
          <button type="submit" className="btn btn-primary">
            Claim Certificate
          </button>
        </form>
      )}
    </div>
  );
};

export default FormContainer;
