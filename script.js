const featuresData = [
  {
    id: 1,
    icon: "fa-shipping-fast",
    title: "Fast Delivery",
    description:
      "Get your orders delivered quickly and safely right to your doorstep.",
  },
  {
    id: 2,
    icon: "fa-headset",
    title: "24/7 Support",
    description:
      "Our support team is available around the clock to assist you anytime.",
  },
  {
    id: 3,
    icon: "fa-lock",
    title: "Secure Payment",
    description:
      "Your transactions are encrypted and protected with advanced security systems.",
  },
  {
    id: 4,
    icon: "fa-undo-alt",
    title: "Easy Returns",
    description:
      "Hassle-free returns and exchanges within 30 days of purchase.",
  },
];

const displayFeatures = () => {
  const featuresContainer = document.getElementById("features-container");
  featuresData.forEach((feature, i) => {
    const featureCard = document.createElement("div");
    featureCard.innerHTML = `
    <div class="card bg-white card-lg shadow-md relative h-44 items-center">
  <div class="card-body">
    <div class="bg-[#1128ab53] w-fit p-2 rounded-md absolute -top-4 border-2 border-white">
         <i class="fas ${feature.icon}"></i>
    </div>
   

    <h2 class="card-title">${feature.title}</h2>
    <p>${feature.description}</p>
  </div>
</div>
    `;
    featuresContainer.append(featureCard);
  });
};

const fetchProducts = () => {
  const url = "https://fakestoreapi.com/products";
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayTrend(data));
};
const displayTrend = (trends) => {
  const topTrend = trends.splice(0, 3);
  console.log(topTrend);
  const trendContainer = document.getElementById("trend-container");
  topTrend.forEach((trend) => {
    const trendCard = document.createElement("div");
    trendCard.innerHTML = `
    <div class="card bg-base-100 shadow-sm">
  <figure>
    <img
  src="${trend.image}"
  alt="Shoes"
  class="w-64 h-84 object-cover rounded-lg"
/>

  </figure>
  
  <div class="card-body h-60">
   <div class="badge bg-[#112bbe53] text-sm font-medium">${trend.category}</div>
    <h2 class="card-title">
      ${trend.title}
      
         <span class="font-semibold flex items-center"><i class="fas fa-star text-yellow-500"></i>
 ${trend.rating.rate}(${trend.rating.count})</span>
    </h2>

    <p class="text-lg font-bold text-[#0e1438cf]">$ ${trend.price}</p>
    <div class="card-actions flex justify-between">
      <div class="flex-1"> <button class="btn btn-outline btn-sm gap-2 w-full">
        <i class="fa-solid fa-eye"></i> Details
      </button>
     
      </div>
      <div class="flex-1">  <button class="btn btn-primary btn-sm gap-2 w-full">
        <i class="fas fa-cart-plus"></i> Add
      </button></div>
    </div>
  </div>
</div>
    `;
    trendContainer.append(trendCard);
  });
};
fetchProducts();
displayFeatures();
displayTrend()
