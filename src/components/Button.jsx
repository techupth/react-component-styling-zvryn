// Start coding here

function Button(props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: `${props.color}`,
          borderRadius: "8px",
          border: "1px solid transparent",
          padding: "0.6em 1.2em",
          width: "180px",
          height: "50px",
          fontSize: "1em",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "500",
          fontFamily: "inherit",
          cursor: "pointer",
          transition: "border-color 0.25s",
          marginTop: "2em",
        }}
      >
        {props.name}
      </div>
    </>
  );
}

export default Button;
