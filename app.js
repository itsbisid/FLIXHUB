let catalog = [
  {
    id: "693134",
    type: "movie",
    title: "Dune: Part Two",
    description: "Paul Atreides unites with Chani and the Fremen while moving toward a future that could reshape the universe.",
    year: 2024,
    age: "13+",
    runtime: "2h 46m",
    episodes: "",
    rating: 8.5,
    match: "98%",
    quality: "4K",
    provider: "Max",
    genres: ["Sci-Fi", "Adventure", "Drama"],
    tags: ["trending", "top", "4K"],
    poster: "https://image.tmdb.org/t/p/w500/1pdfLvkjY9ohGklR8u6bH9a7p4B.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/878vH98IAnGis0p6pCscS5I6mS5.jpg"
  },
  {
    id: "299534",
    type: "movie",
    title: "Avengers: Endgame",
    description: "After a devastating loss, the remaining Avengers assemble for one final attempt to restore balance.",
    year: 2019,
    age: "13+",
    runtime: "3h 1m",
    episodes: "",
    rating: 8.3,
    match: "99%",
    quality: "4K",
    provider: "Disney",
    genres: ["Action", "Adventure", "Sci-Fi"],
    tags: ["top", "4K"],
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/7RyB7jVbiBXLzSkSRp7GlfsyO1W.jpg"
  },
  {
    id: "872585",
    type: "movie",
    title: "Oppenheimer",
    description: "A physicist leads a secret wartime project and faces the moral shockwaves of what his work unleashes.",
    year: 2023,
    age: "16+",
    runtime: "3h",
    episodes: "",
    rating: 8.1,
    match: "96%",
    quality: "4K",
    provider: "Peacock",
    genres: ["Drama", "History", "Thriller"],
    tags: ["top", "4K"],
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg"
  },
  {
    id: "603692",
    type: "movie",
    title: "John Wick: Chapter 4",
    description: "John Wick uncovers a path to defeating the High Table, but freedom demands one last brutal fight.",
    year: 2023,
    age: "18+",
    runtime: "2h 50m",
    episodes: "",
    rating: 7.7,
    match: "94%",
    quality: "4K",
    provider: "Lionsgate",
    genres: ["Action", "Thriller", "Crime"],
    tags: ["trending", "4K"],
    poster: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/h8gHn0OzBoaefsYseUByqsmEDMY.jpg"
  },
  {
    id: "414906",
    type: "movie",
    title: "The Batman",
    description: "Batman ventures into Gotham's underworld when a sadistic killer leaves behind cryptic clues.",
    year: 2022,
    age: "16+",
    runtime: "2h 57m",
    episodes: "",
    rating: 7.7,
    match: "95%",
    quality: "4K",
    provider: "Max",
    genres: ["Crime", "Mystery", "Drama"],
    tags: ["trending", "4K"],
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg"
  },
  {
    id: "157336",
    type: "movie",
    title: "Interstellar",
    description: "Explorers travel through a wormhole to find humanity a new home as Earth faces collapse.",
    year: 2014,
    age: "13+",
    runtime: "2h 49m",
    episodes: "",
    rating: 8.4,
    match: "97%",
    quality: "HD",
    provider: "Paramount",
    genres: ["Sci-Fi", "Drama", "Adventure"],
    tags: ["top"],
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/pbrkL804c8yAv3zBZR4QPEafpAR.jpg"
  },
  {
    id: "119051",
    type: "tv",
    title: "Wednesday",
    description: "Wednesday Addams enters Nevermore Academy and investigates a mystery with deep family roots.",
    year: 2022,
    age: "16+",
    runtime: "",
    episodes: "8 Episodes",
    rating: 8.0,
    match: "97%",
    quality: "4K",
    provider: "Netflix",
    genres: ["Fantasy", "Mystery", "Comedy"],
    tags: ["trending", "top", "4K"],
    poster: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg"
  },
  {
    id: "66732",
    type: "tv",
    title: "Stranger Things",
    description: "A small town uncovers secret experiments, supernatural forces, and one strange young girl.",
    year: 2016,
    age: "16+",
    runtime: "",
    episodes: "34 Episodes",
    rating: 8.6,
    match: "99%",
    quality: "4K",
    provider: "Netflix",
    genres: ["Sci-Fi", "Drama", "Horror"],
    tags: ["top", "4K"],
    poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg"
  },
  {
    id: "1396",
    type: "tv",
    title: "Breaking Bad",
    description: "A chemistry teacher turns to manufacturing illegal substances after a cancer diagnosis.",
    year: 2008,
    age: "18+",
    runtime: "",
    episodes: "62 Episodes",
    rating: 8.9,
    match: "99%",
    quality: "HD",
    provider: "AMC",
    genres: ["Drama", "Crime", "Thriller"],
    tags: ["top"],
    poster: "https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg"
  },
  {
    id: "100088",
    type: "tv",
    title: "The Last of Us",
    description: "A hardened survivor escorts a teenager across a transformed America after a global outbreak.",
    year: 2023,
    age: "18+",
    runtime: "",
    episodes: "9 Episodes",
    rating: 8.5,
    match: "96%",
    quality: "4K",
    provider: "Max",
    genres: ["Drama", "Adventure", "Horror"],
    tags: ["trending", "4K"],
    poster: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/2MaumbgBlW1NoPo3ZJO38A6v7OS.jpg"
  },
  {
    id: "125988",
    type: "tv",
    title: "Silo",
    description: "In a sealed underground society, one engineer starts questioning the rules that govern survival.",
    year: 2023,
    age: "16+",
    runtime: "",
    episodes: "20 Episodes",
    rating: 8.1,
    match: "94%",
    quality: "4K",
    provider: "Apple",
    genres: ["Sci-Fi", "Drama", "Mystery"],
    tags: ["trending", "4K"],
    poster: "https://image.tmdb.org/t/p/w500/1NxaSn4ver4jIvLeD7YF8cTlZjB.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/2meX1nMdScFOoV4370rqHWKmXhY.jpg"
  },
  {
    id: "95479",
    type: "tv",
    title: "Jujutsu Kaisen",
    description: "A student swallows a cursed object and enters a dangerous world of sorcery and monsters.",
    year: 2020,
    age: "16+",
    runtime: "",
    episodes: "47 Episodes",
    rating: 8.6,
    match: "98%",
    quality: "HD",
    provider: "Crunchyroll",
    genres: ["Anime", "Action", "Fantasy"],
    tags: ["trending", "top"],
    poster: "https://image.tmdb.org/t/p/w500/h8gHn0OzBoaefsYseUByqsmEDMY.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/gL8myjGc2qrmqVosyGm5CWTir9A.jpg"
  },
  {
    id: "37854",
    type: "tv",
    title: "One Piece",
    description: "Monkey D. Luffy and his crew sail across dangerous seas in search of the ultimate treasure.",
    year: 1999,
    age: "13+",
    runtime: "",
    episodes: "1100+ Episodes",
    rating: 8.7,
    match: "96%",
    quality: "HD",
    provider: "Crunchyroll",
    genres: ["Anime", "Adventure", "Comedy"],
    tags: ["top"],
    poster: "https://image.tmdb.org/t/p/w500/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/2rmK7mnchw9Xr3XdiTFSxTTLXqv.jpg"
  },
  {
    id: "85937",
    type: "tv",
    title: "Demon Slayer",
    description: "A young swordsman joins a corps of fighters after tragedy strikes his family.",
    year: 2019,
    age: "16+",
    runtime: "",
    episodes: "55 Episodes",
    rating: 8.7,
    match: "97%",
    quality: "HD",
    provider: "Crunchyroll",
    genres: ["Anime", "Action", "Fantasy"],
    tags: ["trending", "top"],
    poster: "https://image.tmdb.org/t/p/w500/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5DUMPBSnHOZsbBv81GFXZXvDpo6.jpg"
  },
  {
    id: "105248",
    type: "tv",
    title: "Cyberpunk: Edgerunners",
    description: "A street kid becomes an outlaw mercenary in a city obsessed with body modification.",
    year: 2022,
    age: "18+",
    runtime: "",
    episodes: "10 Episodes",
    rating: 8.5,
    match: "95%",
    quality: "HD",
    provider: "Netflix",
    genres: ["Anime", "Sci-Fi", "Action"],
    tags: ["top"],
    poster: "https://image.tmdb.org/t/p/w500/7jSWOc6jWSw5hZ78HB8Hw3pJxuk.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/zxtylgHuy9h7AYB3tVEVEgc4k0I.jpg"
  },
  {
    id: "136315",
    type: "tv",
    title: "The Bear",
    description: "A young chef returns home to run his family sandwich shop and rebuild its chaotic crew.",
    year: 2022,
    age: "16+",
    runtime: "",
    episodes: "28 Episodes",
    rating: 8.2,
    match: "93%",
    quality: "HD",
    provider: "Hulu",
    genres: ["Drama", "Comedy"],
    tags: ["trending", "top"],
    poster: "https://image.tmdb.org/t/p/w500/sHFlbKS3WLqMnp9t2ghADIJFnuQ.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/wHNwlE6ftEpgjVbdhLXOtv1hLs0.jpg"
  },
  {
    id: "52814",
    type: "tv",
    title: "Halo",
    description: "A supersoldier faces alien threats, political secrets, and the truth behind his own creation.",
    year: 2022,
    age: "16+",
    runtime: "",
    episodes: "17 Episodes",
    rating: 7.6,
    match: "89%",
    quality: "4K",
    provider: "Paramount",
    genres: ["Sci-Fi", "Action", "Adventure"],
    tags: ["4K"],
    poster: "https://image.tmdb.org/t/p/w500/nJUHX3XL1jMkk8honUZnUmudFb9.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/zW0v2YT74C6tRafzqqBkfSqLAN0.jpg"
  }
];

const fallbackCatalog = catalog.map((item) => ({ ...item, genres: [...item.genres], tags: [...item.tags] }));

const licensedSources = {
  // Manual overrides can be added here
};

const storageKeys = {
  watchlist: "flixhub.watchlist",
  history: "flixhub.history",
  likes: "flixhub.likes",
  recentSearches: "flixhub.recentSearches",
  tmdbToken: "flixhub.tmdbToken",
  tmdbCache: "flixhub.tmdbCache"
};

const tmdbConfig = {
  apiBase: "https://api.themoviedb.org/3",
  imageBase: "https://image.tmdb.org/t/p",
  language: "en-US",
  region: "US",
  cacheMs: 2 * 60 * 60 * 1000
};

const genreMap = {
  12: "Adventure",
  14: "Fantasy",
  16: "Animation",
  18: "Drama",
  27: "Horror",
  28: "Action",
  35: "Comedy",
  36: "History",
  37: "Western",
  53: "Thriller",
  80: "Crime",
  99: "Documentary",
  878: "Sci-Fi",
  9648: "Mystery",
  10402: "Music",
  10749: "Romance",
  10751: "Family",
  10752: "War",
  10759: "Action",
  10762: "Kids",
  10763: "News",
  10764: "Reality",
  10765: "Sci-Fi",
  10766: "Soap",
  10767: "Talk",
  10768: "War",
  10770: "TV Movie"
};

const state = {
  heroIndex: 0,
  activeView: "home",
  activeLibrary: "watchlist",
  activeDetailsKey: null,
  searchTimer: null,
  searchSequence: 0,
  filters: {
    type: "all",
    genre: "all",
    year: "all",
    sort: "trending",
    provider: "all",
    tag: "all",
    title: "All titles"
  }
};

const UI = {
  header: document.getElementById("site-header"),
  mainNav: document.querySelector(".main-nav"),
  mobileMenuButton: document.getElementById("mobile-menu-button"),
  browseButton: document.getElementById("browse-button"),
  browsePanel: document.getElementById("browse-panel"),
  heroImage: document.getElementById("hero-image"),
  heroEyebrow: document.getElementById("hero-eyebrow"),
  heroTitle: document.getElementById("hero-title"),
  heroMeta: document.getElementById("hero-meta"),
  heroDescription: document.getElementById("hero-description"),
  heroPlay: document.getElementById("hero-play"),
  heroMore: document.getElementById("hero-more"),
  heroWatchlist: document.getElementById("hero-watchlist"),
  railArea: document.getElementById("rail-area"),
  catalogTitle: document.getElementById("catalog-title"),
  catalogEyebrow: document.getElementById("catalog-eyebrow"),
  catalogGrid: document.getElementById("catalog-grid"),
  typeFilter: document.getElementById("type-filter"),
  genreFilter: document.getElementById("genre-filter"),
  yearFilter: document.getElementById("year-filter"),
  sortFilter: document.getElementById("sort-filter"),
  resetFilters: document.getElementById("reset-filters"),
  libraryTitle: document.getElementById("library-title"),
  libraryEyebrow: document.getElementById("library-eyebrow"),
  libraryGrid: document.getElementById("library-grid"),
  clearLibrary: document.getElementById("clear-library"),
  profilePanel: document.getElementById("profile-panel"),
  profileButton: document.getElementById("profile-button"),
  profileClose: document.getElementById("profile-close"),
  exportData: document.getElementById("export-data"),
  searchOpen: document.getElementById("search-open"),
  searchOverlay: document.getElementById("search-overlay"),
  searchClose: document.getElementById("search-close"),
  searchInput: document.getElementById("search-input"),
  searchType: document.getElementById("search-type"),
  searchResults: document.getElementById("search-results"),
  recentSearches: document.getElementById("recent-searches"),
  detailsOverlay: document.getElementById("details-overlay"),
  detailsClose: document.getElementById("details-close"),
  detailsImage: document.getElementById("details-image"),
  detailsProvider: document.getElementById("details-provider"),
  detailsTitle: document.getElementById("details-title"),
  detailsMeta: document.getElementById("details-meta"),
  detailsPlay: document.getElementById("details-play"),
  detailsWatchlist: document.getElementById("details-watchlist"),
  detailsLike: document.getElementById("details-like"),
  detailsDescription: document.getElementById("details-description"),
  detailsGenres: document.getElementById("details-genres"),
  recommendGrid: document.getElementById("recommend-grid"),
  playerOverlay: document.getElementById("player-overlay"),
  playerClose: document.getElementById("player-close"),
  playerTitle: document.getElementById("player-title"),
  playerStage: document.getElementById("player-stage"),
  tmdbStatus: document.getElementById("tmdb-status"),
  tmdbToken: document.getElementById("tmdb-token"),
  saveTmdbToken: document.getElementById("save-tmdb-token"),
  refreshLiveData: document.getElementById("refresh-live-data"),
  clearTmdbToken: document.getElementById("clear-tmdb-token"),
  createRoom: document.getElementById("create-room"),
  joinRoom: document.getElementById("join-room"),
  toastStack: document.getElementById("toast-stack")
};

function init() {
  bindEvents();
  hydrateApp();
  loadLiveCatalog();
  setInterval(rotateHero, 9000);
}

function hydrateApp() {
  populateFilters();
  renderHome();
  renderCatalog();
  renderLibrary();
  state.heroIndex = 0;
  setHero(getHeroItem());
  hydrateTmdbControls();
}

function bindEvents() {
  window.addEventListener("scroll", () => {
    UI.header.classList.toggle("scrolled", window.scrollY > 20);
  });

  UI.mobileMenuButton.addEventListener("click", () => {
    UI.header.classList.toggle("menu-open");
    closeBrowsePanel();
  });

  UI.browseButton.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = UI.browsePanel.classList.toggle("open");
    UI.browseButton.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    const actionTarget = event.target.closest("[data-action]");
    const routeTarget = event.target.closest("[data-route]");
    const typeTarget = event.target.closest("[data-filter-type]");
    const genreTarget = event.target.closest("[data-filter-genre]");
    const tagTarget = event.target.closest("[data-filter-tag]");
    const providerTarget = event.target.closest("[data-filter-provider]");

    if (!event.target.closest(".browse-menu")) closeBrowsePanel();

    if (actionTarget) {
      handleAction(actionTarget.dataset.action, actionTarget.dataset.key);
      return;
    }

    if (routeTarget) {
      showRoute(routeTarget.dataset.route);
      return;
    }

    if (typeTarget) {
      applyQuickFilter({ type: typeTarget.dataset.filterType, title: typeTarget.textContent.trim() });
      return;
    }

    if (genreTarget) {
      applyQuickFilter({ genre: genreTarget.dataset.filterGenre, title: genreTarget.textContent.trim() });
      return;
    }

    if (tagTarget) {
      applyQuickFilter({ tag: tagTarget.dataset.filterTag, title: tagTarget.textContent.trim() });
      return;
    }

    if (providerTarget) {
      applyQuickFilter({ provider: providerTarget.dataset.filterProvider, title: providerTarget.textContent.trim() });
    }
  });

  UI.heroPlay.addEventListener("click", () => playTitle(getHeroItem()));
  UI.heroMore.addEventListener("click", () => openDetails(getHeroItem()));
  UI.heroWatchlist.addEventListener("click", () => toggleWatchlist(getHeroItem()));

  [UI.typeFilter, UI.genreFilter, UI.yearFilter, UI.sortFilter].forEach((control) => {
    control.addEventListener("change", () => {
      state.filters.type = UI.typeFilter.value;
      state.filters.genre = UI.genreFilter.value;
      state.filters.year = UI.yearFilter.value;
      state.filters.sort = UI.sortFilter.value;
      state.filters.provider = "all";
      state.filters.tag = "all";
      state.filters.title = buildCatalogTitle();
      renderCatalog();
    });
  });

  UI.resetFilters.addEventListener("click", () => {
    resetFilters();
    showRoute("catalog");
  });

  UI.clearLibrary.addEventListener("click", clearActiveLibrary);

  UI.profileButton.addEventListener("click", () => {
    UI.profilePanel.classList.add("open");
    updateBodyLock();
  });

  UI.profileClose.addEventListener("click", closeProfile);
  UI.exportData.addEventListener("click", exportLocalData);

  UI.searchOpen.addEventListener("click", openSearch);
  UI.searchClose.addEventListener("click", closeSearch);
  UI.searchInput.addEventListener("input", performSearch);
  UI.searchType.addEventListener("change", performSearch);

  UI.detailsClose.addEventListener("click", closeDetails);
  UI.detailsOverlay.addEventListener("click", (event) => {
    if (event.target === UI.detailsOverlay) closeDetails();
  });
  UI.detailsPlay.addEventListener("click", () => playTitle(getActiveDetails()));
  UI.detailsWatchlist.addEventListener("click", () => toggleWatchlist(getActiveDetails()));
  UI.detailsLike.addEventListener("click", () => toggleLike(getActiveDetails()));

  UI.playerClose.addEventListener("click", closePlayer);
  UI.playerOverlay.addEventListener("click", (event) => {
    if (event.target === UI.playerOverlay) closePlayer();
  });

  UI.saveTmdbToken.addEventListener("click", saveTmdbToken);
  UI.refreshLiveData.addEventListener("click", () => loadLiveCatalog(true));
  UI.clearTmdbToken.addEventListener("click", clearTmdbToken);

  UI.createRoom.addEventListener("click", () => showToast("Room service endpoint is not configured."));
  UI.joinRoom.addEventListener("click", () => showToast("Room service endpoint is not configured."));

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeSearch();
    closeDetails();
    closePlayer();
    closeProfile();
    UI.header.classList.remove("menu-open");
    closeBrowsePanel();
  });

  window.addEventListener("message", (event) => {
    if (typeof event.data !== "string") return;
    try {
      const data = JSON.parse(event.data);
      if (data.type === "PLAYER_EVENT") {
        handlePlayerEvent(data.data);
      }
    } catch (e) {
      // Not a JSON message or not from our player
    }
  });
}

async function loadLiveCatalog(force = false) {
  const token = getTmdbToken();
  const cached = readStorage(storageKeys.tmdbCache, null);

  if (!token) {
    catalog = cloneCatalog(fallbackCatalog);
    setTmdbStatus("Static catalog active. Save a TMDB token to refresh Trending, Movies, TV Shows, Anime, and Top Rated automatically.");
    hydrateApp();
    return;
  }

  if (!force && cached && Array.isArray(cached.items) && cached.items.length && Date.now() - cached.updatedAt < tmdbConfig.cacheMs) {
    catalog = mergeCatalogItems(cloneCatalog(cached.items), cloneCatalog(fallbackCatalog));
    setTmdbStatus(`Live TMDB catalog loaded from cache. Last refresh: ${formatDateTime(cached.updatedAt)}.`);
    hydrateApp();
    return;
  }

  setTmdbStatus("Refreshing live TMDB metadata...");

  try {
    const [
      trendingMovies,
      nowPlayingMovies,
      popularMovies,
      topRatedMovies,
      trendingTv,
      airingTodayTv,
      topRatedTv,
      animeTv
    ] = await Promise.all([
      fetchTmdbList("trending/movie/day"),
      fetchTmdbList("movie/now_playing", { region: tmdbConfig.region }),
      fetchTmdbList("movie/popular", { region: tmdbConfig.region }),
      fetchTmdbList("movie/top_rated", { region: tmdbConfig.region }),
      fetchTmdbList("trending/tv/day"),
      fetchTmdbList("tv/airing_today", { timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "Africa/Accra" }),
      fetchTmdbList("tv/top_rated"),
      fetchTmdbList("discover/tv", {
        with_genres: "16",
        with_origin_country: "JP",
        sort_by: "first_air_date.desc",
        include_adult: "false",
        "first_air_date.lte": todayDate()
      })
    ]);

    const liveItems = mergeCatalogItems([
      ...trendingMovies.map((item) => mapTmdbItem(item, "movie", ["trending"])),
      ...nowPlayingMovies.map((item) => mapTmdbItem(item, "movie", ["latest", "trending"])),
      ...popularMovies.map((item) => mapTmdbItem(item, "movie", ["top"])),
      ...topRatedMovies.map((item) => mapTmdbItem(item, "movie", ["top"])),
      ...trendingTv.map((item) => mapTmdbItem(item, "tv", ["trending"])),
      ...airingTodayTv.map((item) => mapTmdbItem(item, "tv", ["latest", "trending"])),
      ...topRatedTv.map((item) => mapTmdbItem(item, "tv", ["top"])),
      ...animeTv.map((item) => mapTmdbItem(item, "tv", ["latest", "trending", "top"], ["Anime"]))
    ]);

    const updatedAt = Date.now();
    catalog = mergeCatalogItems(liveItems, cloneCatalog(fallbackCatalog));
    writeStorage(storageKeys.tmdbCache, { updatedAt, items: liveItems });
    setTmdbStatus(`Live TMDB catalog refreshed. Last refresh: ${formatDateTime(updatedAt)}.`);
    hydrateApp();
    showToast("Live catalog updated from TMDB.");
  } catch (error) {
    console.error(error);
    if (cached && Array.isArray(cached.items) && cached.items.length) {
      catalog = mergeCatalogItems(cloneCatalog(cached.items), cloneCatalog(fallbackCatalog));
      setTmdbStatus(`Could not reach TMDB, so cached metadata is active. Last refresh: ${formatDateTime(cached.updatedAt)}.`);
    } else {
      catalog = cloneCatalog(fallbackCatalog);
      setTmdbStatus("Could not reach TMDB, so the static catalog is active.");
    }
    hydrateApp();
  }
}

async function fetchTmdbList(path, params = {}) {
  const data = await fetchTmdb(path, params);
  return Array.isArray(data.results) ? data.results.slice(0, 18) : [];
}

async function searchTmdb(query, type) {
  if (!getTmdbToken()) return [];

  if (type === "movie") {
    const data = await fetchTmdb("search/movie", {
      query,
      include_adult: "false",
      region: tmdbConfig.region
    });
    return mapSearchResults(data.results || [], "movie");
  }

  if (type === "tv") {
    const data = await fetchTmdb("search/tv", {
      query,
      include_adult: "false"
    });
    return mapSearchResults(data.results || [], "tv");
  }

  if (type === "anime") {
    const [movieData, tvData] = await Promise.all([
      fetchTmdb("search/movie", {
        query,
        include_adult: "false",
        region: tmdbConfig.region
      }),
      fetchTmdb("search/tv", {
        query,
        include_adult: "false"
      })
    ]);
    return [
      ...mapSearchResults(movieData.results || [], "movie"),
      ...mapSearchResults(tvData.results || [], "tv")
    ].filter(isAnimeResult);
  }

  const data = await fetchTmdb("search/multi", {
    query,
    include_adult: "false"
  });

  return (data.results || [])
    .filter((item) => item.media_type === "movie" || item.media_type === "tv")
    .map((item) => mapTmdbItem(item, item.media_type, ["search"]));
}

function mapSearchResults(results, type) {
  return results.map((item) => mapTmdbItem(item, type, ["search"]));
}

function isAnimeResult(item) {
  return item.genres.includes("Anime") ||
    (item.originalLanguage === "ja" && item.genres.includes("Animation"));
}

async function fetchTmdb(path, params = {}) {
  const token = getTmdbToken();
  const url = new URL(`${tmdbConfig.apiBase}/${path.replace(/^\/+/, "")}`);
  const headers = { Accept: "application/json" };
  const query = {
    language: tmdbConfig.language,
    page: "1",
    ...params
  };

  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") url.searchParams.set(key, value);
  });

  if (isBearerToken(token)) {
    headers.Authorization = `Bearer ${token}`;
  } else {
    url.searchParams.set("api_key", token);
  }

  const response = await fetch(url, { headers });
  if (!response.ok) throw new Error(`TMDB request failed: ${response.status}`);
  return response.json();
}

function mapTmdbItem(item, type, tags, genreOverrides = []) {
  const title = type === "movie" ? item.title || item.original_title : item.name || item.original_name;
  const date = type === "movie" ? item.release_date : item.first_air_date;
  const rating = Number(item.vote_average || 0);
  const matchScore = rating > 0 ? Math.min(99, Math.max(70, Math.round(rating * 10))) : 80;
  const genres = normalizeList([
    ...genreOverrides,
    ...(item.genre_ids || []).map((id) => genreMap[id]).filter(Boolean)
  ]);

  return {
    id: String(item.id),
    type,
    title: title || "Untitled",
    description: item.overview || "No description is available yet.",
    year: date ? Number(date.slice(0, 4)) : "TBA",
    age: "NR",
    runtime: type === "movie" ? "Movie" : "",
    episodes: type === "tv" ? "Series" : "",
    rating,
    match: `${matchScore}%`,
    quality: "HD",
    provider: "TMDB",
    originalLanguage: item.original_language || "",
    genres: genres.length ? genres : [type === "movie" ? "Movie" : "Series"],
    tags: normalizeList(tags),
    poster: imageUrl(item.poster_path, "w500"),
    backdrop: imageUrl(item.backdrop_path, "original") || imageUrl(item.poster_path, "w780")
  };
}

function mergeCatalogItems(...groups) {
  const map = new Map();
  groups.flat().filter(Boolean).forEach((item) => {
    const key = itemKey(item);
    const existing = map.get(key);
    if (!existing) {
      map.set(key, {
        ...item,
        genres: normalizeList(item.genres || []),
        tags: normalizeList(item.tags || [])
      });
      return;
    }

    existing.genres = normalizeList([...(existing.genres || []), ...(item.genres || [])]);
    existing.tags = normalizeList([...(existing.tags || []), ...(item.tags || [])]);
    existing.quality = existing.quality === "HD" && item.quality === "4K" ? "4K" : existing.quality;
    existing.provider = existing.provider === "TMDB" && item.provider ? item.provider : existing.provider;
    existing.runtime = existing.runtime === "Movie" && item.runtime ? item.runtime : existing.runtime;
    existing.episodes = existing.episodes === "Series" && item.episodes ? item.episodes : existing.episodes;
  });
  return [...map.values()];
}

function cloneCatalog(items) {
  return items.map((item) => ({
    ...item,
    genres: [...(item.genres || [])],
    tags: [...(item.tags || [])]
  }));
}

function imageUrl(path, size) {
  return path ? `${tmdbConfig.imageBase}/${size}${path}` : "";
}

function todayDate() {
  return new Date().toISOString().slice(0, 10);
}

function normalizeList(values) {
  return [...new Set(values.filter(Boolean))];
}

function isBearerToken(token) {
  return token.includes(".") || token.length > 45;
}

function getTmdbToken() {
  return window.FLIXHUB_TMDB_TOKEN || window.FLIXHUB_TMDB_API_KEY || localStorage.getItem(storageKeys.tmdbToken) || "";
}

function hydrateTmdbControls() {
  const token = getTmdbToken();
  UI.tmdbToken.value = "";
  UI.tmdbToken.placeholder = token ? "Token configured locally" : "Paste your TMDB read access token or API key";
}

function saveTmdbToken() {
  const token = UI.tmdbToken.value.trim();
  if (!token) {
    showToast("Paste a TMDB token or API key first.");
    return;
  }

  localStorage.setItem(storageKeys.tmdbToken, token);
  localStorage.removeItem(storageKeys.tmdbCache);
  hydrateTmdbControls();
  loadLiveCatalog(true);
}

function clearTmdbToken() {
  localStorage.removeItem(storageKeys.tmdbToken);
  localStorage.removeItem(storageKeys.tmdbCache);
  catalog = cloneCatalog(fallbackCatalog);
  setTmdbStatus("TMDB token cleared. Static catalog active.");
  hydrateApp();
}

function setTmdbStatus(message) {
  if (UI.tmdbStatus) UI.tmdbStatus.textContent = message;
}

function formatDateTime(timestamp) {
  return new Date(timestamp).toLocaleString([], {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function handleAction(action, key) {
  const item = getItem(key);
  if (!item && action !== "library-history" && action !== "library-watchlist") return;

  if (action === "details") openDetails(item);
  if (action === "play") playTitle(item);
  if (action === "watchlist") toggleWatchlist(item);
}

function renderHome() {
  const rows = [
    { title: "Continue watching", items: getHistoryItems(), optional: true },
    { title: "Watchlist", items: getWatchlistItems(), optional: true },
    { title: "For you", items: byTags(["trending", "top"]).slice(0, 12) },
    { title: "Trending Today", items: byTag("trending") },
    { title: "Latest Movies", items: byTag("latest").filter((item) => item.type === "movie") },
    { title: "Top rated", items: catalog.slice().sort((a, b) => b.rating - a.rating).slice(0, 12) },
    { title: "Movies", items: catalog.filter((item) => item.type === "movie").sort(sortNewestFirst) },
    { title: "TV Shows", items: catalog.filter((item) => item.type === "tv" && !item.genres.includes("Anime")).sort(sortNewestFirst) },
    { title: "Anime", items: catalog.filter((item) => item.genres.includes("Anime")).sort(sortNewestFirst) },
    { title: "4K", items: catalog.filter((item) => item.quality === "4K") },
    { title: "Netflix", items: catalog.filter((item) => item.provider === "Netflix") }
  ];

  UI.railArea.innerHTML = rows
    .filter((row) => !row.optional || row.items.length > 0)
    .map(renderRail)
    .join("");
}

function renderRail(row) {
  const moreAttributes = getRailMoreAttributes(row.title);
  return `
    <section class="rail">
      <div class="rail-head">
        <h2 class="rail-title">${escapeHtml(row.title)}</h2>
        <button class="rail-more" ${moreAttributes}>See More</button>
      </div>
      <div class="rail-scroller">
        ${row.items.map(renderTitleCard).join("")}
      </div>
    </section>
  `;
}

function getRailMoreAttributes(title) {
  if (title === "For you") return `data-filter-tag="trending"`;
  if (title === "Trending Today") return `data-filter-tag="trending"`;
  if (title === "Latest Movies") return `data-filter-tag="latest"`;
  if (title === "Top rated") return `data-filter-tag="top"`;
  if (title === "Movies") return `data-filter-type="movie"`;
  if (title === "TV Shows") return `data-filter-type="tv"`;
  if (title === "Anime") return `data-filter-genre="Anime"`;
  if (title === "4K") return `data-filter-tag="4K"`;
  if (title === "Netflix") return `data-filter-provider="Netflix"`;
  if (title === "Watchlist") return `data-route="watchlist"`;
  if (title === "Continue watching") return `data-route="history"`;
  return `data-route="catalog"`;
}

function renderTitleCard(item) {
  return `
    <button class="title-card" data-action="details" data-key="${itemKey(item)}" aria-label="${escapeAttr(item.title)}">
      <img src="${escapeAttr(item.backdrop || item.poster)}" alt="${escapeAttr(item.title)}" loading="lazy" onerror="this.src='assets/hero.png'">
      <div class="card-info">
        <h3>${escapeHtml(item.title)}</h3>
        <div class="mini-meta">
          <span>${escapeHtml(String(item.year))}</span>
          <span>${escapeHtml(item.quality)}</span>
          <span>${escapeHtml(formatType(item))}</span>
        </div>
      </div>
    </button>
  `;
}

function renderCatalog() {
  syncFilterControls();
  UI.catalogTitle.textContent = state.filters.title;
  UI.catalogEyebrow.textContent = state.filters.provider !== "all" ? state.filters.provider : "Browse";

  const items = getFilteredCatalog();
  UI.catalogGrid.innerHTML = items.length
    ? items.map(renderCatalogCard).join("")
    : `<div class="empty-state">No titles found.</div>`;
}

function renderCatalogCard(item) {
  const saved = isInWatchlist(item);
  return `
    <article class="catalog-card">
      <button class="poster" data-action="details" data-key="${itemKey(item)}" aria-label="${escapeAttr(item.title)}">
        <img src="${escapeAttr(item.poster)}" alt="${escapeAttr(item.title)}" loading="lazy" onerror="this.src='assets/hero.png'">
      </button>
      <div class="catalog-card-body">
        <h3>${escapeHtml(item.title)}</h3>
        <div class="mini-meta">
          <span>${escapeHtml(String(item.year))}</span>
          <span>${escapeHtml(item.match)}</span>
          <span>${escapeHtml(formatType(item))}</span>
        </div>
        <div class="catalog-card-actions">
          <button class="small-action" data-action="play" data-key="${itemKey(item)}"><i class="fa-solid fa-play"></i></button>
          <button class="small-action" data-action="watchlist" data-key="${itemKey(item)}">${saved ? "Saved" : "Save"}</button>
        </div>
      </div>
    </article>
  `;
}

function renderLibrary() {
  const isHistory = state.activeLibrary === "history";
  const items = isHistory ? getHistoryItems() : getWatchlistItems();
  UI.libraryTitle.textContent = isHistory ? "History" : "Watchlist";
  UI.libraryEyebrow.textContent = "Personal";
  UI.clearLibrary.style.display = items.length ? "inline-flex" : "none";
  UI.libraryGrid.innerHTML = items.length
    ? items.map(renderCatalogCard).join("")
    : `<div class="empty-state">${isHistory ? "No watch history found." : "Watchlist is empty."}</div>`;
}

function populateFilters() {
  const genres = [...new Set(catalog.flatMap((item) => item.genres))].sort();
  const years = [...new Set(catalog.map((item) => item.year))].sort((a, b) => b - a);

  UI.genreFilter.innerHTML = `<option value="all">All</option>${genres.map((genre) => `<option value="${escapeAttr(genre)}">${escapeHtml(genre)}</option>`).join("")}`;
  UI.yearFilter.innerHTML = `<option value="all">All</option>${years.map((year) => `<option value="${year}">${year}</option>`).join("")}`;
}

function getFilteredCatalog() {
  let items = catalog.slice();
  const { type, genre, year, sort, provider, tag } = state.filters;

  if (type !== "all") items = items.filter((item) => item.type === type);
  if (genre !== "all") items = items.filter((item) => item.genres.includes(genre));
  if (year !== "all") items = items.filter((item) => String(item.year) === year);
  if (provider !== "all") items = items.filter((item) => item.provider === provider);
  if (tag !== "all") {
    if (tag === "4K") items = items.filter((item) => item.quality === "4K");
    else items = items.filter((item) => item.tags.includes(tag));
  }

  if (sort === "rating") items.sort((a, b) => b.rating - a.rating);
  if (sort === "newest") items.sort((a, b) => b.year - a.year);
  if (sort === "title") items.sort((a, b) => a.title.localeCompare(b.title));
  if (sort === "trending") items.sort((a, b) => Number(b.tags.includes("trending")) - Number(a.tags.includes("trending")) || b.rating - a.rating);

  return items;
}

function setHero(item) {
  if (!item) return;
  UI.heroImage.src = item.backdrop || item.poster;
  UI.heroImage.alt = item.title;
  UI.heroEyebrow.textContent = item.tags.includes("trending") ? "Trending Today" : item.provider;
  UI.heroTitle.textContent = item.title;
  UI.heroDescription.textContent = item.description;
  UI.heroMeta.innerHTML = renderMeta(item);
  updateWatchlistButton(UI.heroWatchlist, item);
}

function rotateHero() {
  if (state.activeView !== "home") return;
  const heroItems = byTags(["trending", "top"]);
  state.heroIndex = (state.heroIndex + 1) % heroItems.length;
  setHero(heroItems[state.heroIndex]);
}

function getHeroItem() {
  return byTags(["trending", "top"])[state.heroIndex] || catalog[0];
}

function openDetails(item) {
  if (!item) return;
  if (UI.searchOverlay.classList.contains("open")) closeSearch();
  state.activeDetailsKey = itemKey(item);
  UI.detailsImage.src = item.backdrop || item.poster;
  UI.detailsImage.alt = item.title;
  UI.detailsProvider.textContent = item.provider;
  UI.detailsTitle.textContent = item.title;
  UI.detailsMeta.innerHTML = renderMeta(item);
  UI.detailsDescription.textContent = item.description;
  UI.detailsGenres.innerHTML = item.genres
    .map((genre) => `<button data-filter-genre="${escapeAttr(genre)}">${escapeHtml(genre)}</button>`)
    .join("");
  updateWatchlistButton(UI.detailsWatchlist, item);
  updateLikeButton(item);
  renderRecommendations(item);
  UI.detailsOverlay.classList.add("open");
  UI.detailsOverlay.setAttribute("aria-hidden", "false");
  updateBodyLock();
}

function closeDetails() {
  UI.detailsOverlay.classList.remove("open");
  UI.detailsOverlay.setAttribute("aria-hidden", "true");
  updateBodyLock();
}

function renderRecommendations(item) {
  const recommendations = catalog
    .filter((candidate) => itemKey(candidate) !== itemKey(item))
    .map((candidate) => ({
      item: candidate,
      score: candidate.genres.filter((genre) => item.genres.includes(genre)).length + (candidate.provider === item.provider ? 1 : 0)
    }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || b.item.rating - a.item.rating)
    .slice(0, 6)
    .map((entry) => entry.item);

  UI.recommendGrid.innerHTML = recommendations.map((rec) => `
    <button class="rec-card" data-action="details" data-key="${itemKey(rec)}" aria-label="${escapeAttr(rec.title)}">
      <img src="${escapeAttr(rec.backdrop || rec.poster)}" alt="${escapeAttr(rec.title)}" loading="lazy" onerror="this.src='assets/hero.png'">
      <div class="card-info">
        <h3>${escapeHtml(rec.title)}</h3>
        <div class="mini-meta"><span>${escapeHtml(rec.match)}</span><span>${escapeHtml(String(rec.year))}</span></div>
      </div>
    </button>
  `).join("");
}

function playTitle(item, season = 1, episode = 1) {
  console.log("playTitle called for:", item?.title, "Type:", item?.type, "ID:", item?.id);
  if (!item) {
    showToast("Error: No title selected.");
    return;
  }

  const source = getLicensedSource(item, season, episode);
  console.log("getLicensedSource returned:", source);

  if (!source) {
    showToast(`No licensed source configured for ${item.title}.`);
    return;
  }

  addToHistory(item, season, episode);
  UI.playerTitle.textContent = item.title;
  UI.playerStage.innerHTML = renderPlayerSource(source, item.title);
  UI.playerOverlay.classList.add("open");
  UI.playerOverlay.setAttribute("aria-hidden", "false");
  renderHome();
  renderLibrary();
  updateBodyLock();
}

function renderPlayerSource(source, title) {
  const safeSource = safeUrl(source);
  if (!safeSource) {
    return `<div class="source-required"><div><h3>Source unavailable</h3><p>The configured source URL is not valid.</p></div></div>`;
  }

  const lower = safeSource.toLowerCase();
  if (lower.endsWith(".mp4") || lower.endsWith(".webm") || lower.endsWith(".ogg")) {
    return `<video src="${escapeAttr(safeSource)}" controls autoplay playsinline title="${escapeAttr(title)}"></video>`;
  }

  return `<iframe src="${escapeAttr(safeSource)}" title="${escapeAttr(title)}" allow="fullscreen; picture-in-picture; autoplay" allowfullscreen></iframe>`;
}

function closePlayer() {
  UI.playerOverlay.classList.remove("open");
  UI.playerOverlay.setAttribute("aria-hidden", "true");
  UI.playerStage.innerHTML = "";
  updateBodyLock();
}

function getLicensedSource(item, season = 1, episode = 1) {
  if (!item) return "";
  const key = itemKey(item);
  const manual = licensedSources[key];
  if (manual) return manual;

  const baseUrl = "https://www.vidking.net/embed";
  const color = "0dcaf0"; 
  
  // Ensure we have a valid ID and type
  const id = item.id || item.tmdbId;
  const type = (item.type || "").toLowerCase();

  if (!id) return "";

  if (type === "movie") {
    return `${baseUrl}/movie/${id}?color=${color}&autoPlay=true`;
  }

  if (type === "tv" || type === "series") {
    return `${baseUrl}/tv/${id}/${season}/${episode}?color=${color}&autoPlay=true&nextEpisode=true&episodeSelector=true`;
  }

  // Fallback for anime or other types if they have episodes
  if (item.episodes) {
    return `${baseUrl}/tv/${id}/${season}/${episode}?color=${color}&autoPlay=true&nextEpisode=true&episodeSelector=true`;
  }

  return item.sourceUrl || "";
}

function openSearch() {
  UI.searchOverlay.classList.add("open");
  UI.searchOverlay.setAttribute("aria-hidden", "false");
  renderRecentSearches();
  performSearch();
  setTimeout(() => UI.searchInput.focus(), 20);
  updateBodyLock();
}

function closeSearch() {
  UI.searchOverlay.classList.remove("open");
  UI.searchOverlay.setAttribute("aria-hidden", "true");
  updateBodyLock();
}

function performSearch() {
  const query = UI.searchInput.value.trim().toLowerCase();
  const type = UI.searchType.value;

  window.clearTimeout(state.searchTimer);

  if (query.length < 2) {
    UI.searchResults.innerHTML = "";
    renderRecentSearches();
    return;
  }

  saveRecentSearch(query);
  const sequence = ++state.searchSequence;
  UI.searchResults.innerHTML = `<div class="empty-state">Searching TMDB for "${escapeHtml(UI.searchInput.value.trim())}"...</div>`;
  state.searchTimer = window.setTimeout(() => runSearch(query, type, sequence), 350);
}

async function runSearch(query, type, sequence) {
  const results = catalog.filter((item) => {
    const typeMatch =
      type === "all" ||
      item.type === type ||
      (type === "anime" && item.genres.includes("Anime"));
    const text = `${item.title} ${item.description} ${item.provider} ${item.genres.join(" ")}`.toLowerCase();
    return typeMatch && text.includes(query);
  });

  try {
    const remoteResults = await searchTmdb(query, type);
    if (sequence !== state.searchSequence) return;

    catalog = mergeCatalogItems(catalog, remoteResults);
    const mergedResults = mergeCatalogItems(results, remoteResults).slice(0, 40);
    renderSearchResults(mergedResults, query);
  } catch (error) {
    console.error(error);
    if (sequence !== state.searchSequence) return;
    renderSearchResults(results, query, "TMDB search failed, so these are local matches only.");
  }
}

function renderSearchResults(results, query, note = "") {
  UI.searchResults.innerHTML = results.length
    ? results.map(renderSearchResult).join("")
    : `<div class="empty-state">No results found for "${escapeHtml(query)}".</div>`;

  if (note) showToast(note);
}

function renderSearchResult(item) {
  return `
    <article class="catalog-card">
      <button class="poster" data-action="details" data-key="${itemKey(item)}" aria-label="${escapeAttr(item.title)}">
        <img src="${escapeAttr(item.poster)}" alt="${escapeAttr(item.title)}" loading="lazy" onerror="this.src='assets/hero.png'">
      </button>
      <div class="catalog-card-body">
        <h3>${escapeHtml(item.title)}</h3>
        <div class="mini-meta">
          <span>${escapeHtml(String(item.year))}</span>
          <span>${escapeHtml(formatType(item))}</span>
        </div>
      </div>
    </article>
  `;
}

function renderRecentSearches() {
  const searches = readStorage(storageKeys.recentSearches, []);
  UI.recentSearches.innerHTML = searches
    .map((query) => `<button data-search-query="${escapeAttr(query)}">${escapeHtml(query)}</button>`)
    .join("");

  UI.recentSearches.querySelectorAll("[data-search-query]").forEach((button) => {
    button.addEventListener("click", () => {
      UI.searchInput.value = button.dataset.searchQuery;
      performSearch();
    });
  });
}

function saveRecentSearch(query) {
  const searches = readStorage(storageKeys.recentSearches, []);
  const next = [query, ...searches.filter((item) => item !== query)].slice(0, 6);
  writeStorage(storageKeys.recentSearches, next);
}

function showRoute(route) {
  closeBrowsePanel();
  UI.header.classList.remove("menu-open");
  closeSearch();
  closeDetails();
  closePlayer();
  closeProfile();

  if (route === "home") state.activeView = "home";
  if (route === "api") state.activeView = "api";
  if (route === "watchparty") state.activeView = "watchparty";
  if (route === "catalog") state.activeView = "catalog";
  if (route === "watchlist") {
    state.activeView = "library";
    state.activeLibrary = "watchlist";
  }
  if (route === "history") {
    state.activeView = "library";
    state.activeLibrary = "history";
  }

  document.querySelectorAll(".view").forEach((view) => view.classList.remove("active-view"));
  document.getElementById(`${state.activeView}-view`).classList.add("active-view");
  updateNavState(route);
  renderHome();
  renderCatalog();
  renderLibrary();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function applyQuickFilter(nextFilter) {
  resetFilters(false);
  state.filters = {
    ...state.filters,
    ...nextFilter,
    type: nextFilter.type || "all",
    genre: nextFilter.genre || "all",
    tag: nextFilter.tag || "all",
    provider: nextFilter.provider || "all",
    title: nextFilter.title || "All titles"
  };
  showRoute("catalog");
}

function resetFilters(render = true) {
  state.filters = {
    type: "all",
    genre: "all",
    year: "all",
    sort: "trending",
    provider: "all",
    tag: "all",
    title: "All titles"
  };
  if (render) renderCatalog();
}

function syncFilterControls() {
  UI.typeFilter.value = state.filters.type;
  UI.genreFilter.value = state.filters.genre;
  UI.yearFilter.value = state.filters.year;
  UI.sortFilter.value = state.filters.sort;
}

function buildCatalogTitle() {
  const parts = [];
  if (state.filters.type !== "all") parts.push(state.filters.type === "movie" ? "Movies" : "TV Shows");
  if (state.filters.genre !== "all") parts.push(state.filters.genre);
  if (state.filters.year !== "all") parts.push(state.filters.year);
  return parts.length ? parts.join(" | ") : "All titles";
}

function updateNavState(route) {
  document.querySelectorAll(".nav-link").forEach((button) => button.classList.remove("active"));
  const active = document.querySelector(`.nav-link[data-route="${route}"]`);
  if (active) active.classList.add("active");
}

function toggleWatchlist(item) {
  if (!item) return;
  const key = itemKey(item);
  const watchlist = readStorage(storageKeys.watchlist, []);
  const exists = watchlist.includes(key);
  const next = exists ? watchlist.filter((itemKeyValue) => itemKeyValue !== key) : [key, ...watchlist];
  writeStorage(storageKeys.watchlist, next);
  showToast(exists ? `${item.title} removed from watchlist.` : `${item.title} added to watchlist.`);
  updateWatchlistButton(UI.heroWatchlist, getHeroItem());
  if (state.activeDetailsKey === key) updateWatchlistButton(UI.detailsWatchlist, item);
  renderHome();
  renderCatalog();
  renderLibrary();
}

function isInWatchlist(item) {
  return readStorage(storageKeys.watchlist, []).includes(itemKey(item));
}

function updateWatchlistButton(button, item) {
  const saved = item && isInWatchlist(item);
  button.classList.toggle("saved", Boolean(saved));
  button.setAttribute("aria-label", saved ? "Remove from watchlist" : "Add to watchlist");
  button.innerHTML = saved ? `<i class="fa-solid fa-check"></i>` : `<i class="fa-solid fa-plus"></i>`;
}

function toggleLike(item) {
  if (!item) return;
  const key = itemKey(item);
  const likes = readStorage(storageKeys.likes, []);
  const exists = likes.includes(key);
  const next = exists ? likes.filter((likeKey) => likeKey !== key) : [key, ...likes];
  writeStorage(storageKeys.likes, next);
  updateLikeButton(item);
  showToast(exists ? `${item.title} removed from likes.` : `${item.title} liked.`);
}

function updateLikeButton(item) {
  const liked = readStorage(storageKeys.likes, []).includes(itemKey(item));
  UI.detailsLike.classList.toggle("saved", liked);
}

function addToHistory(item, season = 1, episode = 1) {
  const key = itemKey(item);
  const history = readStorage(storageKeys.history, []);
  const entry = { 
    key, 
    watchedAt: Date.now(),
    season,
    episode,
    progress: 0
  };
  const next = [entry, ...history.filter((h) => h.key !== key)].slice(0, 30);
  writeStorage(storageKeys.history, next);
}

function handlePlayerEvent(data) {
  if (data.event === "timeupdate" || data.event === "play" || data.event === "pause") {
    const history = readStorage(storageKeys.history, []);
    const key = `${data.mediaType}:${data.id}`;
    const entry = history.find((h) => h.key === key);
    
    if (entry) {
      entry.progress = data.progress;
      entry.currentTime = data.currentTime;
      if (data.season) entry.season = data.season;
      if (data.episode) entry.episode = data.episode;
      entry.watchedAt = Date.now();
      
      writeStorage(storageKeys.history, history);
      // We don't want to re-render everything on every timeupdate to avoid flicker
      // but maybe renderLibrary if it's active
      if (state.activeView === "library" && state.activeLibrary === "history") renderLibrary();
      if (state.activeView === "home") renderHome();
    }
  }
}

function getWatchlistItems() {
  return readStorage(storageKeys.watchlist, [])
    .map(getItem)
    .filter(Boolean);
}

function getHistoryItems() {
  return readStorage(storageKeys.history, [])
    .map((entry) => getItem(entry.key))
    .filter(Boolean);
}

function clearActiveLibrary() {
  const key = state.activeLibrary === "history" ? storageKeys.history : storageKeys.watchlist;
  writeStorage(key, []);
  renderHome();
  renderCatalog();
  renderLibrary();
  showToast(state.activeLibrary === "history" ? "History cleared." : "Watchlist cleared.");
}

function exportLocalData() {
  const payload = {
    watchlist: readStorage(storageKeys.watchlist, []),
    history: readStorage(storageKeys.history, []),
    likes: readStorage(storageKeys.likes, [])
  };
  const text = JSON.stringify(payload, null, 2);

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(
      () => showToast("Local data copied."),
      () => showToast(text)
    );
  } else {
    showToast(text);
  }
}

function closeProfile() {
  UI.profilePanel.classList.remove("open");
  updateBodyLock();
}

function closeBrowsePanel() {
  UI.browsePanel.classList.remove("open");
  UI.browseButton.setAttribute("aria-expanded", "false");
}

function updateBodyLock() {
  const locked =
    UI.searchOverlay.classList.contains("open") ||
    UI.detailsOverlay.classList.contains("open") ||
    UI.playerOverlay.classList.contains("open") ||
    UI.profilePanel.classList.contains("open");
  document.body.classList.toggle("locked", locked);
}

function renderMeta(item) {
  const duration = item.type === "tv" ? item.episodes : item.runtime;
  return [
    `<span class="match">${escapeHtml(item.match)} Match</span>`,
    `<span>${escapeHtml(String(item.year))}</span>`,
    `<span>${escapeHtml(item.age)}</span>`,
    `<span>${escapeHtml(duration)}</span>`,
    `<span>${escapeHtml(item.quality)}</span>`,
    `<span>${escapeHtml(formatType(item))}</span>`
  ].join("");
}

function formatType(item) {
  return item.type === "tv" ? "Series" : "Movie";
}

function sortNewestFirst(a, b) {
  return Number(b.year || 0) - Number(a.year || 0) || b.rating - a.rating;
}

function byTag(tag) {
  return catalog.filter((item) => item.tags.includes(tag));
}

function byTags(tags) {
  return catalog.filter((item) => tags.some((tag) => item.tags.includes(tag)));
}

function getActiveDetails() {
  return getItem(state.activeDetailsKey);
}

function getItem(key) {
  return catalog.find((item) => itemKey(item) === key);
}

function itemKey(item) {
  return `${item.type}:${item.id}`;
}

function safeUrl(value) {
  try {
    const url = new URL(value);
    if (url.protocol === "https:" || url.protocol === "http:") return url.href;
  } catch (error) {
    return "";
  }
  return "";
}

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  UI.toastStack.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(6px)";
  }, 2600);
  setTimeout(() => toast.remove(), 3100);
}

init();
