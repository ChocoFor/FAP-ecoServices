// services.js
document.addEventListener("DOMContentLoaded", function() {
    const catalogueServices = document.getElementById("catalogue-services");
    const serviceSelect = document.getElementById("service");
  
    // Fetch services and display
    fetch("/api/services")
      .then(response => response.json())
      .then(services => {
        services.forEach(service => {
          const serviceDiv = document.createElement("div");
          serviceDiv.innerHTML = `<h3>${service.name}</h3><p>${service.description}</p>`;
          catalogueServices.appendChild(serviceDiv);
  
          const option = document.createElement("option");
          option.value = service.id;
          option.text = service.name;
          serviceSelect.appendChild(option);
        });
      });
  
    // Handle form submission
    document.getElementById("form-devis").addEventListener("submit", function(event) {
      event.preventDefault();
      const formData = new FormData(this);
      fetch("/api/quote", {
        method: "POST",
        body: formData
      })
        .then(response => response.json())
        .then(result => {
          if (result.success) {
            alert("Demande de devis envoyée avec succès!");
          } else {
            alert("Erreur lors de l'envoi de la demande de devis.");
          }
        });
    });
  });
  