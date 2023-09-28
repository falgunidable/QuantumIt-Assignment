document.addEventListener("DOMContentLoaded", function (event) {
  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll(".nav_link");

  function colorLink() {
    if (linkColor) {
      linkColor.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    }
  }
  linkColor.forEach((l) => l.addEventListener("click", colorLink));
});

function generatePatientInfo(id) {
  const data = [
    { label: "Gender:", value: "Male" },
    { label: "Blood Type:", value: "O+ (Positive)" },
    { label: "Allergies:", value: "Milk, Penicillin" },
    { label: "Diseases:", value: "Diabetes, Blood Disorders" },
    { label: "Height:", value: "1.78m" },
    { label: "Weight:", value: "65kg" },
    { label: "Patient ID:", value: "32345656" },
  ];

  const container = document.getElementById(id);

  data.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("flex-item", "d-flex", "justify-content-between");
    div.innerHTML = `<b>${item.label}</b><span>${item.value}</span>`;
    container.appendChild(div);
  });
}

// Call the function with the desired ID (e.g., "patientInfoContainer")
generatePatientInfo("patientInfoContainer");
