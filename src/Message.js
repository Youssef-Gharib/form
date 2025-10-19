import './RequestingLoan.css';

export default function Message({ onClick, errorMessage }) {
  return (
    <div id="model" onClick={onClick}>
      <div className="model-content">
        <h1 style={{color:errorMessage && "red"}}>
            {errorMessage ?? "The Form Has Been Submitted Successfully"}
        </h1>
      </div>
    </div>
  );
}
