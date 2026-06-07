import notifications from "./data";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Campus Notifications</h1>

      {notifications.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid black",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{item.type}</h3>
          <p>{item.message}</p>
          <small>{item.timestamp}</small>
        </div>
      ))}
    </div>
  );
}

export default App;