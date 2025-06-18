const ctx = document.getElementById("patientsChart").getContext("2d");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: "Patients",
      data: [200, 450, 390, 620, 580, 710],
      backgroundColor: "rgba(79, 70, 229, 0.1)",
      borderColor: "#4f46e5",
      borderWidth: 2,
      tension: 0.4,
      fill: true,
      pointRadius: 5,
      pointBackgroundColor: "#4f46e5"
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#444",
          font: {
            weight: 'bold'
          }
        }
      }
    },
    scales: {
      x: {
        ticks: { color: "#666" },
        grid: { display: false }
      },
      y: {
        ticks: { color: "#666" },
        grid: { color: "#eee" }
      }
    }
  }
});
