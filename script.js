// Global variables
let travelData = null;

// Fetch travel data when page loads
async function fetchTravelData() {
  try {
    const response = await fetch("travel_recommendation_api.json");
    if (!response.ok) {
      throw new Error("Failed to fetch travel data");
    }
    travelData = await response.json();
    console.log("Travel data loaded successfully:", travelData);
  } catch (error) {
    console.error("Error fetching travel data:", error);
    showMessage(
      "Error loading travel recommendations. Please refresh the page.",
      true
    );
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  fetchTravelData();

  // Add event listeners
  const searchBtn = document.getElementById("searchBtn");
  const clearBtn = document.getElementById("clearBtn");
  const searchInput = document.getElementById("searchInput");

  if (searchBtn) {
    searchBtn.addEventListener("click", handleSearch);
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", clearResults);
  }

  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    });
  }
});

// Handle search functionality
function handleSearch() {
  const searchInput = document.getElementById("searchInput");
  const query = searchInput.value.trim().toLowerCase();

  if (!query) {
    showMessage("Please enter a valid search query.", true);
    return;
  }

  if (!travelData) {
    showMessage("Travel data is still loading. Please try again.", true);
    return;
  }

  // Hide message
  showMessage("", false);

  // Normalize the search query and determine category
  const results = searchByKeyword(query);

  if (results.length > 0) {
    displayResults(results);
  } else {
    showMessage(
      'No recommendations found for "' +
        query +
        '". Try searching for beaches, temples, or countries.',
      true
    );
  }
}

// Search by keyword with variations
function searchByKeyword(query) {
  const results = [];

  // Beach keywords
  const beachKeywords = ["beach", "beaches", "coast", "coastal", "shore"];
  // Temple keywords
  const templeKeywords = ["temple", "temples", "shrine", "shrines"];
  // Country keywords
  const countryKeywords = ["country", "countries", "nation", "nations"];

  // Check if query matches beach keywords
  if (beachKeywords.some((keyword) => query.includes(keyword))) {
    return travelData.beaches.map((beach) => ({
      ...beach,
      category: "Beach",
    }));
  }

  // Check if query matches temple keywords
  if (templeKeywords.some((keyword) => query.includes(keyword))) {
    return travelData.temples.map((temple) => ({
      ...temple,
      category: "Temple",
    }));
  }

  // Check if query matches country keywords
  if (countryKeywords.some((keyword) => query.includes(keyword))) {
    // Return all cities from all countries
    travelData.countries.forEach((country) => {
      if (country.cities) {
        country.cities.forEach((city) => {
          results.push({
            ...city,
            category: "Country",
          });
        });
      }
    });
    return results;
  }

  // Search for specific country names
  travelData.countries.forEach((country) => {
    if (country.name.toLowerCase().includes(query)) {
      if (country.cities) {
        country.cities.forEach((city) => {
          results.push({
            ...city,
            category: "Country",
          });
        });
      }
    }
  });

  // Search for specific beach names
  travelData.beaches.forEach((beach) => {
    if (beach.name.toLowerCase().includes(query)) {
      results.push({
        ...beach,
        category: "Beach",
      });
    }
  });

  // Search for specific temple names
  travelData.temples.forEach((temple) => {
    if (temple.name.toLowerCase().includes(query)) {
      results.push({
        ...temple,
        category: "Temple",
      });
    }
  });

  return results;
}

// Display results
function displayResults(results) {
  const resultsSection = document.getElementById("resultsSection");
  const resultsContainer = document.getElementById("resultsContainer");
  const heroSection = document.querySelector(".hero");

  if (!resultsContainer) return;

  // Hide hero section and show results
  if (heroSection) {
    heroSection.style.display = "none";
  }
  resultsSection.classList.add("show");

  // Clear previous results
  resultsContainer.innerHTML = "";

  // Create result cards
  results.forEach((result) => {
    const card = createResultCard(result);
    resultsContainer.appendChild(card);
  });

  // Scroll to results
  resultsSection.scrollIntoView({ behavior: "smooth" });
}

// Create a result card
function createResultCard(result) {
  const card = document.createElement("div");
  card.className = "result-card";

  // Get current time for the location if timeZone is available
  let timeDisplay = "";
  if (result.timeZone) {
    timeDisplay = getCurrentTime(result.timeZone);
  }

  card.innerHTML = `
        <img src="${result.imageUrl}" alt="${
    result.name
  }" class="result-image" onerror="this.src='https://via.placeholder.com/600x400?text=Image+Not+Available'">
        <div class="result-content">
            <h2 class="result-title">${result.name}</h2>
            <p class="result-description">${result.description}</p>
            ${
              timeDisplay
                ? `<p class="result-time">⏰ Current local time: ${timeDisplay}</p>`
                : ""
            }
            <button class="btn btn-visit">Visit</button>
        </div>
    `;

  return card;
}

// Get current time for a timezone
function getCurrentTime(timeZone) {
  try {
    const options = {
      timeZone: timeZone,
      hour12: true,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const localTime = new Date().toLocaleString("en-US", options);
    return localTime;
  } catch (error) {
    console.error("Error getting time for timezone:", timeZone, error);
    return "";
  }
}

// Clear results
function clearResults() {
  const resultsSection = document.getElementById("resultsSection");
  const resultsContainer = document.getElementById("resultsContainer");
  const heroSection = document.querySelector(".hero");
  const searchInput = document.getElementById("searchInput");

  // Clear search input
  if (searchInput) {
    searchInput.value = "";
  }

  // Hide results section
  if (resultsSection) {
    resultsSection.classList.remove("show");
  }

  // Show hero section
  if (heroSection) {
    heroSection.style.display = "flex";
  }

  // Clear results container
  if (resultsContainer) {
    resultsContainer.innerHTML = "";
  }

  // Hide message
  showMessage("", false);
}

// Show/hide message
function showMessage(message, isError) {
  const messageElement = document.querySelector(".search-message");

  if (!messageElement) return;

  if (message) {
    messageElement.textContent = message;
    messageElement.classList.add("show");

    if (isError) {
      messageElement.style.backgroundColor = "rgba(231, 76, 60, 0.9)";
    } else {
      messageElement.style.backgroundColor = "rgba(46, 204, 113, 0.9)";
    }

    // Auto-hide after 5 seconds
    setTimeout(() => {
      messageElement.classList.remove("show");
    }, 5000);
  } else {
    messageElement.classList.remove("show");
  }
}
