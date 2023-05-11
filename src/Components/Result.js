const Result = (props) => {
  const { result } = props;
  return (
    <div className="result">
      {result === "F" ? (
        <h1>Congrats you both are friends</h1>
      ) : result === "L" ? (
        <h1>Congrats you are both in Love</h1>
      ) : result === "A" ? (
        <h1>Congrats you are in Affection</h1>
      ) : result === "M" ? (
        <h1>Congrats you are going to Marry</h1>
      ) : result === "E" ? (
        <h1>Sorry you both are Enemies</h1>
      ) : result === "S" ? (
        <h1>You both aree Siblings</h1>
      ) : (
        <h1>Nothing</h1>
      )}
    </div>
  );
};
export default Result;
