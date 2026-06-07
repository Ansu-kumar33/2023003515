import { useEffect, useState } from "react";

function App() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch("http://4.224.186.213/evaluation-service/notifications")
      .then((res) => res.json())
      .then((data) => setNotifications(data));
  }, []);

  return (
    <div>
      {notifications.map((item, index) => (
        <p key={index}>{item.message}</p>
      ))}
    </div>
  );
}

export default App;