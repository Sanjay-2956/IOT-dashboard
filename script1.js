// Example authorized users
const users = {
  admin: "admin12",
  user1: "iotuser1",
};

// Login function
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorEl = document.getElementById("error");

  if (users[username] && users[username] === password) {
    sessionStorage.setItem("user", username);
    window.location.href = "dashboard.html";
  } else {
    errorEl.textContent = "Invalid username or password!";
  }
}

// Logout function
function logout() {
  sessionStorage.removeItem("user");
  window.location.href = "index.html";
}

// Dashboard setup
function setupDashboard() {
  const user = sessionStorage.getItem("user");
  if (!user) window.location.href = "index.html";

  const dashboard = document.getElementById("dashboard");

  // Simulated IoT data (replace with API calls)
  const iotData = [
    { device: "Temperature Sensor", value: "28°C" },
    { device: "Humidity Sensor", value: "65%" },
    { device: "Voltage Sensor", value: "230V" },
    { device: "Current Sensor", value: "5A" },
    { device: "Pressure Sensor", value: "1.2 bar" },
  ];

  iotData.forEach((data) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<h3>${data.device}</h3><p>${data.value}</p>`;
    dashboard.appendChild(card);
  });
}
