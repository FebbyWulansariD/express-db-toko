const list = document.getElementById("customer-list");
const loading = document.getElementById("loading");

loading.style.display = "block";

fetch("/db/customers")
  .then(res => res.json())
  .then(data => {
    loading.style.display = "none";

    if (data.length === 0) {
      list.innerHTML = "<li>Tidak ada data customer 😢</li>";
      return;
    }

    data.forEach((cust) => {
      const item = document.createElement("li");
      item.innerHTML = `
        <span class="name">${cust.cust_name}</span>
        <span class="city">${cust.cust_city}</span>
      `;
      list.appendChild(item);
    });
  })
  .catch((err) => {
    loading.textContent = "Gagal memuat data ❌";
    console.error("Error:", err);
  });