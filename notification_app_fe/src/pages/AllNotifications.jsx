import notifications from "../data";

function AllNotifications() {
  return (
    <div>
      <h1>All Notifications</h1>

      {notifications.map((item) => (
        <div key={item.id}>
          <h3>{item.type}</h3>
          <p>{item.message}</p>
          <p>{item.timestamp}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default AllNotifications;