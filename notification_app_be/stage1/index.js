let notifications = [
  { Type: "Event", Message: "Tech Fest", Timestamp: "2026-06-01" },
  { Type: "Placement", Message: "AMD Hiring", Timestamp: "2026-06-05" },
  { Type: "Result", Message: "Mid Sem Results", Timestamp: "2026-06-03" },
  { Type: "Placement", Message: "Infosys Hiring", Timestamp: "2026-06-04" }
];

notifications.sort((a, b) => {
  let value = {
    Placement: 3,
    Result: 2,
    Event: 1
  };

  return value[b.Type] - value[a.Type];
});

console.log("Top Notifications");
console.log(notifications.slice(0, 10));