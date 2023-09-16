const FormElements = ({ Config, Verify }) => {
    return (
      <>
        {(Verify
          ? [
              {
                Label: "Verification Code",
                ID: "Verification",
                Type: "text",
                Desc: "Please enter the super-long verification code here."
              }
            ]
          : [
              {
                Label: "Email Address",
                ID: "Email",
                Type: "email",
                Desc: "We'll never share your email with anyone else."
              },
              {
                Label: "WhatsApp Number",
                ID: "WhatsApp",
                Type: "number",
                Desc: "Please enter your last 10 digits of your WhatsApp number."
              }
            ]
        ).map((fc) => (
          <div class="mb-3" key={fc.ID}>
            <label for={fc.ID} class="form-label">
              {fc.Label}
            </label>
            <input
              type={fc.Type}
              class="form-control"
              id={fc.ID}
              aria-describedby={fc.ID + "Help"}
            />
            {fc.Desc && (
              <div id={fc.ID + "Help"} class="form-text">
                {fc.Desc}
              </div>
            )}
          </div>
        ))}
        <div class="mb-3">
          <label for="Type" class="form-label">
            Type of Certificate
          </label>
          <select class="form-select" aria-label="Please select the type...">
            <option selected disabled>
              Please select the type...
            </option>
            {Object.keys(Config.CertificateTypes).map((key) => (
              <option key={key} value={key}>
                {Config.CertificateTypes[key]}
              </option>
            ))}
          </select>
        </div>
      </>
    );
  };
  
  export default FormElements;
  