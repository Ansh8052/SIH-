import FormContainer from "./FormContainer";

const Main = ({ Config }) => {
  return (
    <main>
      <div className="container">
        <div className="row">
          <FormContainer Config={Config} />
        </div>
      </div>
    </main>
  );
};

export default Main;
