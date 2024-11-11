async function searchProduct() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const resultsSection = document.getElementById('results');

    try {
        const response = await fetch('product.json'); // Fetch the JSON data
        const products = await response.json();

        // Filter the products based on the search query
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchQuery)
        );

        // Display the filtered results
        resultsSection.innerHTML = filteredProducts.length > 0
            ? filteredProducts.map(product => `
                <div class="product">
                    <p><strong>${product.name}</strong></p>
                    <p>Price: ${product.price}</p>
                    <p>Store: ${product.store}</p>
                </div>
            `).join('')
            : `<p>No products found.</p>`;
    } catch (error) {
        console.error("Error fetching data:", error);
        resultsSection.innerHTML = `<p>Error loading product data.</p>`;
    }
}
