// script.js

document.addEventListener("DOMContentLoaded", () => {
  const roleOptions = document.querySelectorAll(".role-option");
  const continueBtn = document.querySelector(".continue-btn");

  let selectedRole = "Student"; // Default role

  // Function to update selection
  function updateSelection(option) {
    // Remove "selected" from all
    roleOptions.forEach(opt => {
      opt.classList.remove("selected");
      const h3 = opt.querySelector("h3");
      if (h3.querySelector(".selected-label")) {
        h3.querySelector(".selected-label").remove();
      }
    });

    // Add selected class
    option.classList.add("selected");

    // Add green "Selected" label
    const h3 = option.querySelector("h3");
    const selectedSpan = document.createElement("span");
    selectedSpan.textContent = "Selected";
    selectedSpan.classList.add("selected-label");
    h3.appendChild(selectedSpan);

    // Update continue button
    selectedRole = option.dataset.role;
    continueBtn.textContent = `Continue as ${selectedRole} →`;
  }

  // Add click event for each role
  roleOptions.forEach(option => {
    option.addEventListener("click", () => {
      updateSelection(option);
    });
  });

  // Redirect based on role
  continueBtn.addEventListener("click", () => {
    if (selectedRole === "Student") {
      window.location.href = "student.html";
    } else if (selectedRole === "Teacher") {
      window.location.href = "teacher.html";
    } else if (selectedRole === "Admin") {
      window.location.href = "admin.html";
    }
  });
});
