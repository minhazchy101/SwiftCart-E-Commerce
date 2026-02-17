const fetchProducts = () => {
     mangeSpinner(true)
  const url = "https://fakestoreapi.com/products";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      removeActive();
      let allBtn = document.getElementById("catBtn-all");
      allBtn.classList.add("sass-active");
      displayProducts(data);
    });
};
const mangeSpinner =(status)=>{
    if(status == true){
        document.getElementById("spinner").classList.add("flex")
        document.getElementById("spinner").classList.remove("hidden")
        document.getElementById("products-container").classList.add("hidden")
    }
    else{
         document.getElementById("spinner").classList.add("hidden")
        document.getElementById("spinner").classList.remove("flex")
        document.getElementById("products-container").classList.remove("hidden")
    }
}


const displayProducts = (products) => {
  const productsContainer = document.getElementById("products-container");
  productsContainer.innerHTML = " ";
  products.forEach((product) => {
    const productsCard = document.createElement("div");
    productsCard.innerHTML = `
    <div class="card bg-base-100 shadow-sm">
  <figure>
    <img
  src="${product.image}"
  alt="Shoes"
  class="w-64 h-84 object-cover rounded-lg"
/>

  </figure>
  
  <div class="card-body h-60">
   <div class="badge bg-[#112bbe53] text-sm font-medium">${product.category}</div>
    <h2 class="card-title">
      ${product.title}
      
         <span class="font-semibold flex items-center"><i class="fas fa-star text-yellow-500"></i>
 ${product.rating.rate}(${product.rating.count})</span>
    </h2>

    <p class="text-lg font-bold text-[#0e1438cf]">$ ${product.price}</p>
    <div class="card-actions flex justify-between">
      <div class="flex-1"> <button onclick="fetchDetails(${product.id})" class="btn btn-outline btn-sm gap-2 w-full">
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
    productsContainer.append(productsCard);
       mangeSpinner(false)
  });
};

const fetchCategory = () => {
  const url = "https://fakestoreapi.com/products/categories";
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayCategory(data));
};

const displayCategory = (categories) => {
  const categoryContainer = document.getElementById("category-container");
  categoryContainer.innerHTML = "";


  const allButton = document.createElement("button");
  allButton.id = "catBtn-all";
  allButton.className =
    "sass-btn sass-btn-soft sass-btn-primary sass-active";
  allButton.textContent = "ALL";

  allButton.addEventListener("click", () => {
    fetchProducts();
  });

  categoryContainer.append(allButton);

  categories.forEach((category) => {
    const safeId = category.replace(/[^a-z0-9]/gi, "");

    const button = document.createElement("button");
    button.id = `catBtn-${safeId}`;
    button.className = "sass-btn sass-btn-soft sass-btn-primary";
    button.textContent = category.toUpperCase();

    button.addEventListener("click", () => {
      loadCategory(category);
    });

    categoryContainer.append(button);
  });
};


const removeActive = () => {
  const lBtn = document.querySelectorAll(".sass-btn");
  //  lBtn.forEach(btn => console.log(btn))
  lBtn.forEach((btn) => btn.classList.remove("sass-active"));
};
const loadCategory = (category) => {
  mangeSpinner(true)
  const encodedCategory = encodeURIComponent(category);
  const safeId = category.replace(/[^a-z0-9]/gi, "");
  const url = `https://fakestoreapi.com/products/category/${encodedCategory}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      removeActive();
      const cBtn = document.getElementById(`catBtn-${safeId}`);
      cBtn.classList.add("sass-active");
      displayProducts(data);
    });
};

const fetchDetails = (id) => {
  const url = `https://fakestoreapi.com/products/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayModal(data));
};

const displayModal = (details) => {
  console.log(details);
  const detailsContainer = document.getElementById("details-container");
  detailsContainer.innerHTML = `
   <div class="card">
      <figure class="h-56 overflow-hidden">
        <img
          class="w-36 h-50 object-cover"
          src="${details.image}"
          alt="Shoes" />
      </figure>
      <div class="card-body space-y-3">
        <h2 class="card-title text-xl font-bold flex items-center">
       <span class="text-lg font-bold text-[#3649b4cf]">Title:</span> ${details.title}
        </h2>

        <p class="text-base-content/70">
      <span class="text-lg font-bold text-[#3649b4cf]">Description: </span>${details.description}</p>
         <p class="text-lg font-bold text-[#0e1438cf]">Price: $ ${details.price}
         </p>
         <p class="font-semibold flex items-center">Rating: <i class="fas fa-star text-yellow-500"></i> ${details.rating.rate}</p>
    

        <!-- <div class="card-actions justify-between items-center mt-4">

          <span class="text-lg font-semibold">$129</span>
          <button class="btn btn-primary">
            Buy Now
          </button>
        </div> -->

           <!-- Modal Close Button -->
    <div class="modal-action px-6 pb-6">
      <form method="dialog" class="flex gap-4">
        <button class="btn btn-primary">
        Buy Now
        </button>
        <button class="btn btn-outline">
          Close
        </button>
      </form>
    </div>
      </div>
    </div>
  `;

  document.getElementById("details_modal").showModal();
};

fetchCategory();
fetchProducts();
