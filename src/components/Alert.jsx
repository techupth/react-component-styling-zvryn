// Start coding here

function Alert(props) {
  return (
    <>
      <div
        style={{
          backgroundColor: `${props.color}`,
          display: "flex",
          justifyContent: "start",
          color: "black",
          padding: "5px 30px",
          width: "650px",
          height: "70px",
          alignItems: "center",
          marginTop: "20px",
          borderRadius: "10px",
        }}
      >
        <h3>{props.type}</h3>
      </div>
    </>
  );
}

export default Alert;
