// api 

const surfSpotsData = [
  {
    name: 'Nazaré',
    region: 'center', 
    lat: 39.6033,
    lon: -9.0708,
    waveHeight: 0,
    wind: 0,
    tide: 0,
    difficulty: 'Professional',
    bestTime: 'Giant waves in winter'
  },
  {
    name: 'Ericeira',
    region: 'center',
    lat: 38.9631,
    lon: -9.4181,
    waveHeight: 0,
    wind: 0,
    tide: 0,
    difficulty: 'Intermediate',
    bestTime: 'All year round'
  },
  {
    name: 'Peniche',
    region: 'center',
    lat: 39.3558,
    lon: -9.3811,
    waveHeight: 0,
    wind: 0,
    tide: 0,
    difficulty: 'All levels',
    bestTime: 'Spring and Fall'
  },
  {
    name: 'Sagres',
    region: 'south',
    lat: 37.0079,
    lon: -8.9378,
    waveHeight: 0,
    wind: 0,
    tide: 0,
    difficulty: 'All levels',
    bestTime: 'Spring and Fall'
  },
  {
    name: 'Espinho',
    region: 'north',
    lat: 41.0078,
    lon: -8.6411,
    waveHeight: 0,
    wind: 0,
    tide: 0,
    difficulty: 'Intermediate',
    bestTime: 'Fall and Winter'
  },
  {
    name: 'Matosinhos',
    region: 'north',
    lat: 41.1844,
    lon: -8.6963,
    waveHeight: 0,
    wind: 0,
    tide: 0,
    difficulty: 'Beginner to Intermediate',
    bestTime: 'All year'
  }
];

// webcams
const webcams = [
  {
    id: 1,
    location: "Nazaré Norte",
    quality: "Live - 1080p",
    region: "Center",
    isLive: true,
    streamUrl: "https://video-auth1.iol.pt/beachcam/nazareparadonorte/playlist.m3u8",
    pageUrl: "https://beachcam.meo.pt/livecams/praia-do-norte/",
  },
  {
    id: 2,
    location: "Ericeira - Ribeira d'Ilhas",
    quality: "Live - 720p",
    region: "Center",
    isLive: true,
    streamUrl: "https://video-auth1.iol.pt/beachcam/ericeiraspots/playlist.m3u8",
    pageUrl: "https://beachcam.meo.pt/livecams/ericeira/",
  },
  {
    id: 3,
    location: "Furadouro",
    quality: "Live - 1080p",
    region: "Center",
    isLive: true,
    streamUrl: "https://video-auth1.iol.pt/beachcam/furadouro/playlist.m3u8",
    pageUrl: "https://beachcam.meo.pt/livecams/furadouro/",
  },
  {
    id: 4,
    location: "Carcavelos",
    quality: "Live - 720p",
    region: "South",
    isLive: true,
    streamUrl: "https://video-auth1.iol.pt/beachcam/carcavelos/playlist.m3u8",
    pageUrl: "https://beachcam.meo.pt/livecams/praia-de-carcavelos/",
  },
];

// previsões com info modal
const forecastsData = [
  {
    location: "Supertubos",
    region: "Peniche, Center",
    lat: 39.3558,
    lon: -9.3811,
    difficulty: "Advanced",
    bestTime: "High tide",
    days: [
      { day: "Monday", waves: "0.6-0.8m", condition: "Small" },
      { day: "Tuesday", waves: "0.6-0.8m", condition: "Small" },
      { day: "Wednesday", waves: "0.6-0.8m", condition: "Small" },
      { day: "Thursday", waves: "0.6-0.8m", condition: "Small" },
      { day: "Friday", waves: "0.3-0.6m", condition: "Flat" },
      { day: "Saturday", waves: "1.2-1.8m", condition: "Good" },
      { day: "Sunday", waves: "2.0-2.5m", condition: "Excellent" }
    ],
    tips: "Perfect for experienced surfers. Perfect barrel with medium to high tide."
  },
  {
    location: "Nazaré",
    region: "Leiria, Center",
    lat: 39.6033,
    lon: -9.0708,
    difficulty: "Professional",
    bestTime: "Giant waves in winter",
    days: [
      { day: "Monday", waves: "0.6-0.8m", condition: "Small" },
      { day: "Tuesday", waves: "0.6-0.8m", condition: "Small" },
      { day: "Wednesday", waves: "0.6-0.8m", condition: "Small" },
      { day: "Thursday", waves: "2.5-3.2m", condition: "Big" },
      { day: "Friday", waves: "3.0-4.0m", condition: "Big" },
      { day: "Saturday", waves: "4.5-6.0m", condition: "Epic" },
      { day: "Sunday", waves: "5.0-7.5m", condition: "Extreme" }
    ],
    tips: "One of the biggest waves in the world. Professionals only."
  },
  {
    location: "Ericeira",
    region: "Lisboa, Center",
    lat: 38.9631,
    lon: -9.4181,
    difficulty: "Intermediate",
    bestTime: "All year round",
    days: [
      { day: "Monday", waves: "1.0-1.4m", condition: "Moderate" },
      { day: "Tuesday", waves: "0.6-0.8m", condition: "Small" },
      { day: "Wednesday", waves: "0.6-0.8m", condition: "Small" },
      { day: "Thursday", waves: "0.8-1.2m", condition: "Good" },
      { day: "Friday", waves: "1.0-1.5m", condition: "Good" },
      { day: "Saturday", waves: "1.5-2.0m", condition: "Very Good" },
      { day: "Sunday", waves: "1.8-2.3m", condition: "Excellent" }
    ],
    tips: "World Surfing Reserve. Multiple spots for all levels."
  },
  {
    location: "Sagres",
    region: "Algarve, South",
    lat: 37.0079,
    lon: -8.9378,
    difficulty: "All levels",
    bestTime: "Spring and Fall",
    days: [
      { day: "Monday", waves: "0.6-0.8m", condition: "Small" },
      { day: "Tuesday", waves: "1.0-1.4m", condition: "Moderate" },
      { day: "Wednesday", waves: "0.6-0.8m", condition: "Small" },
      { day: "Thursday", waves: "1.2-1.6m", condition: "Good" },
      { day: "Friday", waves: "1.0-1.4m", condition: "Moderate" },
      { day: "Saturday", waves: "1.5-2.2m", condition: "Very Good" },
      { day: "Sunday", waves: "2.0-2.8m", condition: "Excellent" }
    ],
    tips: "Exposure to various types of waves. Good for beginners and experienced."
  }
];

let currentWeek = 0;
let hlsInstances = [];

// api fetch data 
async function fetchSurfDataFromAPI(lat, lon) {
  try {

    const url = `https://marine.open-meteo.com/v1/marine?latitude=${lat}&longitude=${lon}&hourly=wave_height,wind_wave_height,wind_speed_10m&timezone=Europe/Lisbon`;
    
    console.log(`🌊 Fetching data for: ${lat}, ${lon}`);
    
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('✅ API Response received:', data);


    const currentHour = 0;
    
    return {
      waveHeight: data.hourly.wave_height[currentHour] || 0,
      windSpeed: data.hourly.wind_speed_10m[currentHour] || 0,
      windWaveHeight: data.hourly.wind_wave_height[currentHour] || 0
    };
  } catch (error) {
    console.error('❌ Error fetching API data:', error);

    // dados simulados em caso de erro
    const baseWave = Math.random() * 2.5 + 0.5;
    const baseWind = Math.random() * 25 + 5;
    const windWave = baseWave * 0.5;
    
    return {
      waveHeight: Math.round(baseWave * 10) / 10,
      windSpeed: Math.round(baseWind),
      windWaveHeight: Math.round(windWave * 10) / 10
    };
  }
}

// Função para carregar data

async function loadAllSurfData() {
  const grid = document.getElementById('surfGrid');
  grid.innerHTML = '<div class="loading">🌊 Loading data from API...</div>';
  
  console.log('Starting to load surf data...'); 
  
  for (let i = 0; i < surfSpotsData.length; i++) {
    const spot = surfSpotsData[i];
    
    console.log(`Loading spot ${i + 1}/${surfSpotsData.length}: ${spot.name}`); 
    
    const apiData = await fetchSurfDataFromAPI(spot.lat, spot.lon);
    
    // Update spot data with API data
    spot.waveHeight = apiData.waveHeight;
    spot.wind = Math.round(apiData.windSpeed);
    spot.tide = apiData.windWaveHeight;
    
    console.log(`${spot.name} data:`, apiData); 
  }
  
  console.log('All data loaded!');
  filterByRegion();
}

// estruturas de decisão - função para determinar as previsões do surf baseado na altura da onda, vento
function getSurfCondition(waveHeight, wind) {
  let condition = '';
  
  if (waveHeight >= 1.0 && waveHeight <= 3.5) {
    if (wind <= 10) {
      condition = 'good';
    } else if (wind <= 20) {
      condition = 'fair';
    } else {
      condition = 'poor';
    }
  } else if (waveHeight < 1.0) {
    condition = 'poor';
  } else if (waveHeight > 3.5) {
    if (wind <= 15) {
      condition = 'fair';
    } else {
      condition = 'poor';
    }
  }
  
  return condition;
}


function getConditionText(condition) {
  switch(condition) {
    case 'good':
      return 'Good';
    case 'fair':
      return 'Fair';
    case 'poor':
      return 'Poor';
    default:
      return 'Unknown';
  }
}

function createSurfCard(spot) {
  const condition = getSurfCondition(spot.waveHeight, spot.wind);
  const conditionText = getConditionText(condition);

  const waveDisplay = spot.waveHeight > 0 ? spot.waveHeight.toFixed(1) : '0.0';
  const windDisplay = spot.wind > 0 ? spot.wind : '0';
  const tideDisplay = spot.tide > 0 ? spot.tide.toFixed(1) : '0.0';
  
  return `
    <div class="surf-condition-card">
      <div class="card-header-conditions">
        <h3 class="location-name-conditions">${spot.name}</h3>
      </div>
      
      <div class="info-row-conditions">
        <span class="info-label-conditions">Wave Height</span>
        <span class="info-value-conditions">${waveDisplay}m</span>
      </div>
      
      <div class="info-row-conditions">
        <span class="info-label-conditions">Wind</span>
        <span class="info-value-conditions">${windDisplay} km/h</span>
      </div>
      
      <div class="info-row-conditions">
        <span class="info-label-conditions">Wind Wave</span>
        <span class="info-value-conditions">${tideDisplay}m</span>
      </div>
      
      <div class="card-footer-conditions">
        <div class="status-conditions status-${condition}">
          <span class="status-dot"></span>
          <span>${conditionText}</span>
        </div>
        <a href="#" class="details-link-conditions" onclick="showSpotModal('${spot.name}'); return false;">Details</a>
      </div>
    </div>
  `;
}

// filtro para regiões 
function filterByRegion() {
  const selectedRegion = document.getElementById('regionSelect').value;
  const grid = document.getElementById('surfGrid');
  
  let filteredSpots = surfSpotsData;
  
  // decisão 
  if (selectedRegion !== 'all') {
    // estrutura de repetição
    filteredSpots = surfSpotsData.filter(spot => spot.region === selectedRegion);
  }
  
  if (filteredSpots.length > 0) {

    grid.innerHTML = filteredSpots.map(spot => createSurfCard(spot)).join('');
  } else {
    grid.innerHTML = '<div class="no-spots">No spots found in this region.</div>';
  }
}

// funções master-detail
function showSpotModal(spotName) {
  const spot = surfSpotsData.find(s => s.name === spotName);
  
  if (!spot) return;
  
  const modal = document.getElementById('modal-overlay');
  const modalBody = document.getElementById('modal-body');
  
  document.getElementById('modal-title').textContent = spot.name;
  document.getElementById('modal-subtitle').textContent = `${spot.region.toUpperCase()} Region`;
  
  modalBody.innerHTML = `
    <div class="detail-section">
      <h3>📊 General Information</h3>
      <div class="detail-grid">
        <div class="detail-item">
          <div class="detail-label">Region</div>
          <div class="detail-value">${spot.region.charAt(0).toUpperCase() + spot.region.slice(1)}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Difficulty</div>
          <div class="detail-value">${spot.difficulty}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Best Time</div>
          <div class="detail-value">${spot.bestTime}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Coordinates</div>
          <div class="detail-value" style="font-size: 0.9rem;">${spot.lat}, ${spot.lon}</div>
        </div>
      </div>
    </div>

    <div class="detail-section">
      <h3>🌊 Current Conditions</h3>
      <ul class="forecast-list">
        <li>
          <span><strong>Wave Height</strong></span>
          <span style="color: #1a73e8; font-weight: 700;">${spot.waveHeight.toFixed(1)}m</span>
        </li>
        <li>
          <span><strong>Wind Speed</strong></span>
          <span style="color: #1a73e8; font-weight: 700;">${spot.wind} km/h</span>
        </li>
        <li>
          <span><strong>Wind Wave</strong></span>
          <span style="color: #1a73e8; font-weight: 700;">${spot.tide.toFixed(1)}m</span>
        </li>
        <li>
          <span><strong>Condition</strong></span>
          <span style="color: #1a73e8; font-weight: 700;">${getConditionText(getSurfCondition(spot.waveHeight, spot.wind))}</span>
        </li>
      </ul>
    </div>

    <div class="detail-section">
      <h3>📍 Location</h3>
      <a href="https://www.google.com/maps?q=${spot.lat},${spot.lon}" 
         target="_blank" 
         class="map-link">
        View on Google Maps
      </a>
    </div>
  `;
  
  modal.classList.add('active');
}

// previsões detalhadas em master-detail
function showForecastModal(index) {
  const forecast = forecastsData[index];
  const modal = document.getElementById('modal-overlay');
  const modalBody = document.getElementById('modal-body');
  
  document.getElementById('modal-title').textContent = forecast.location;
  document.getElementById('modal-subtitle').textContent = forecast.region;
  
  let daysListHTML = '';
  forecast.days.forEach(day => {
    daysListHTML += `
      <li>
        <span><strong>${day.day}</strong> - ${day.condition}</span>
        <span style="color: #1a73e8; font-weight: 700;">${day.waves}</span>
      </li>
    `;
  });
  
  modalBody.innerHTML = `
    <div class="detail-section">
      <h3>📊 General Information</h3>
      <div class="detail-grid">
        <div class="detail-item">
          <div class="detail-label">Region</div>
          <div class="detail-value">${forecast.region}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Difficulty</div>
          <div class="detail-value">${forecast.difficulty}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Best Time</div>
          <div class="detail-value">${forecast.bestTime}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Coordinates</div>
          <div class="detail-value" style="font-size: 0.9rem;">${forecast.lat}, ${forecast.lon}</div>
        </div>
      </div>
    </div>

    <div class="detail-section">
      <h3>🌊 Weekly Forecast</h3>
      <ul class="forecast-list">
        ${daysListHTML}
      </ul>
    </div>

    <div class="detail-section">
      <h3>💡 Tips</h3>
      <div class="tips">
        <p>${forecast.tips}</p>
      </div>
      <a href="https://www.google.com/maps?q=${forecast.lat},${forecast.lon}" 
         target="_blank" 
         class="map-link">
        📍 View on Google Maps
      </a>
    </div>
  `;
  
  modal.classList.add('active');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
}

// webcams
function renderWebcams() {
  const container = document.getElementById("webcams-container");
  container.innerHTML = "";

  hlsInstances.forEach((hls) => {
    if (hls) hls.destroy();
  });
  hlsInstances = [];

  // estrutura de repetição - forEach
  webcams.forEach((webcam, index) => {
    const webcamCard = document.createElement("div");
    webcamCard.className = "webcam-card";

    const status = webcam.isLive ? "LIVE" : "OFFLINE";
    const badgeClass = webcam.isLive ? "live-badge" : "offline-badge";

    // estrutura de decisão
    const webcamEmbed = webcam.isLive
      ? `<video class="webcam-video" id="webcam-${index}" autoplay muted playsinline disableremoteplayback webkit-playsinline></video>`
      : `<div class="webcam-placeholder"><span>No transmission</span></div>`;

    webcamCard.innerHTML = `
      ${webcamEmbed}
      <div class="webcam-info">
        <div class="webcam-location">${webcam.location}</div>
        <div class="webcam-quality">${webcam.quality}</div>
        <div class="${badgeClass}">${status}</div>
        <button class="btn-details" onclick="window.open('${webcam.pageUrl}', '_blank')">Watch live</button>
      </div>
    `;

    container.appendChild(webcamCard);

    if (webcam.isLive) {
      const video = document.getElementById(`webcam-${index}`);
      if (Hls.isSupported()) {
        const hls = new Hls({
          enableWorker: true,
          lowLatencyMode: true,
        });
        hls.loadSource(webcam.streamUrl);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
          video.play().catch((e) => console.log("Autoplay prevented:", e));
        });
        hls.on(Hls.Events.ERROR, function (event, data) {
          if (data.fatal) {
            switch (data.type) {
              case Hls.ErrorTypes.NETWORK_ERROR:
                hls.startLoad();
                break;
              case Hls.ErrorTypes.MEDIA_ERROR:
                hls.recoverMediaError();
                break;
              default:
                hls.destroy();
                break;
            }
          }
        });
        hlsInstances.push(hls);
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = webcam.streamUrl;
        video.addEventListener("loadedmetadata", function () {
          video.play().catch((e) => console.log("Autoplay prevented:", e));
        });
        hlsInstances.push(null);
      }
    }
  });
}

// previsões
function renderForecasts() {
  const container = document.getElementById('forecast-container');
  container.innerHTML = '';

  // estrutura de repetição
  for (let i = 0; i < forecastsData.length; i++) {
    const forecast = forecastsData[i];
    const card = document.createElement('div');
    card.className = 'forecast-card';
    card.onclick = () => showForecastModal(i);

    let daysHTML = '';
    forecast.days.forEach(day => {
      daysHTML += `
        <div class="forecast-day">
          <span class="day-name">${day.day}</span>
          <span class="day-waves">${day.waves}</span>
        </div>
      `;
    });

    card.innerHTML = `
      <div class="forecast-header">${forecast.location}</div>
      <div class="forecast-days">${daysHTML}</div>
    `;

    container.appendChild(card);
  }
}

// tema para modo noturno e claro
function toggleTheme() {
  const currentTheme = document.body.getAttribute("data-theme");
  let newTheme;

  // estrutura de decisão
  if (currentTheme === "light") {
    newTheme = "dark";
  } else {
    newTheme = "light";
  }

  document.body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  const themeBtn = document.getElementById("theme-btn");
  const icon = newTheme === "dark" ? "🌙" : "☀️";
  themeBtn.textContent = `${icon} ${newTheme === "dark" ? "Dark Mode" : "Light Mode"}`;
}

function updateWeekDisplay() {
  const weekDisplay = document.getElementById("week-display");
  
  if (currentWeek === 0) {
    weekDisplay.textContent = "Current Week";
  } else if (currentWeek > 0) {
    weekDisplay.textContent = `Next Week +${currentWeek}`;
  } else {
    weekDisplay.textContent = `Previous Week ${currentWeek}`;
  }
}

// INITIALIZATION
document.addEventListener("DOMContentLoaded", function () {
  console.log('🏄 Surf Buddy initialized!'); // DEBUG
  
  // Load surf data from API
  loadAllSurfData();
  
  // Load webcams
  renderWebcams();
  
  // Load forecasts
  renderForecasts();

  // Theme toggle
  document.getElementById("theme-btn").addEventListener("click", toggleTheme);
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.setAttribute("data-theme", savedTheme);
  document.getElementById("theme-btn").textContent =
    savedTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";

  // Smooth navigation
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");

      if (targetId.startsWith("#")) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  // Week controls
  document.getElementById("prev-week").addEventListener("click", () => {
    currentWeek--;
    updateWeekDisplay();
  });
  
  document.getElementById("next-week").addEventListener("click", () => {
    currentWeek++;
    updateWeekDisplay();
  });
  
  updateWeekDisplay();

  // Close modal on outside click
  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'modal-overlay') {
      closeModal();
    }
  });

  // Close modal with ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
});