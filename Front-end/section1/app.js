// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const catalogue = document.getElementById("catalogue");
    const panierContenu = document.getElementById("panier-contenu");
  
    // Fetch products and display
    fetch("/api/products")
      .then(response => response.json())
      .then(products => {
        products.forEach(product => {
          const productDiv = document.createElement("div");
          productDiv.innerHTML = `<h3>${product.name}</h3><p>${product.description}</p><p>Prix: ${product.price}€</p>`;
          catalogue.appendChild(productDiv);
        });
      });
  
    // Handle cart validation
    document.getElementById("valider-panier").addEventListener("click", function() {
      fetch("/api/cart/validate", { method: "POST" })
        .then(response => response.json())
        .then(result => {
          if (result.success) {
            alert("Panier validé avec succès!");
          } else {
            alert("Erreur lors de la validation du panier.");
          }
        });
    });
  });
  