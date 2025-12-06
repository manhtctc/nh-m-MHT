const movies = [
  {
    title: "Spider-Man: Across the Spider-Verse",
    year: "2023",
    rating: 9.8,
    desc: "Miles Morales du hành đa vũ trụ nhện.",
    poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    video: "https://www.youtube.com/embed/cqGjhVJWtEg",
    genre: "animation",
    nation: "us",
  },
  {
    title: "zootopia 2: Across the Spider-Verse",
    year: "2025",
    rating: 10,
    desc: "Cô cảnh sát thỏ Judy Hopps cùng đồng sự cáo Nick Widle trong phi vụ làm đảo điên thành phố.",
    poster:
      "https://kenh14cdn.com/203336854389633024/2025/12/1/zoto2-scaled-1764573107268237683423-1764574341567-17645743421141140350257.jpeg",
    video: "https://www.youtube.com/embed/BjkIOU5PhyQ",
    genre: "animation",
    nation: "us",
  },

  //---------------- PHIM VIỆT NAM ----------------//
  {
    title: "Lật Mặt 7: Một Điều Ước",
    year: "2024",
    rating: 9.1,
    desc: "Bom tấn Việt Nam đầy cảm xúc của Lý Hải.",
    poster: "https://metiz.vn/media/poster_film/lat-mat-7.jpg",
    video: "https://www.youtube.com/embed/QdtPQ0wV53M",
    genre: "romance",
    nation: "vn",
  },
  {
    title: "Bố Già",
    year: "2021",
    rating: 9.3,
    desc: "Câu chuyện gia đình cảm động của Trấn Thành.",
    poster:
      "https://cucdienanh.vn/upload/images/undefined/1/28_06_2021/image001_urah_1624855630.jpg",
    video: "https://www.youtube.com/embed/oA-BhGNK7qw",
    genre: "romance",
    nation: "vn",
  },
  {
    title: "Hai Phượng",
    year: "2019",
    rating: 9.4,
    desc: "Ngô Thanh Vân trong hành trình cứu con đầy kịch tính.",
    poster:
      "https://kenh14cdn.com/2019/1/15/49864901101614001198652306306829586327928832o-1547545769141807081286.jpg",
    video: "https://www.youtube.com/embed/THXPCF6UHh8",
    genre: "action",
    nation: "vn",
  },

  //--------------- CÁC PHIM KHÁC ---------------//
  {
    title: "Dune: Part Two",
    year: "2024",
    rating: 9.6,
    desc: "Paul Atreides chiến đấu trên sa mạc Arrakis.",
    poster:
      "https://starlight.vn/Areas/Admin/Content/Fileuploads/images/Tintuc/dune(1).jpg",
    video: "https://www.youtube.com/embed/_YUzQa_1RCE",
    genre: "scifi",
    nation: "us",
  },
  {
    title: "The House of Death",
    year: "2016",
    rating: 8.0,
    desc: "Một gia đình từng sống trong ngôi nhà Briar biến mất bí ẩn. Nhiều năm sau, một mẹ con chuyển đến nhà và thuê Angela trông trẻ. Từ đó, hàng loạt hiện tượng kỳ lạ xảy ra. Angela phát hiện ngôi nhà chứa bí mật về vụ mất tích năm xưa, và cô phải đối mặt với cả thế lực siêu nhiên lẫn con người đang che giấu sự thật",
    poster:
      "https://cdn.moveek.com/storage/media/cache/tall/ca23bd324ca5b6dc1d7e45775d1a38aee1cc8193.jpg",
    video: "https://www.youtube.com/embed/SZY5pRR0SBI",

    genre: "horror",
    nation: "us",
  },

  {
    title: "Oppenheimer",
    year: "2023",
    rating: 9.2,
    desc: "Cha đẻ bom nguyên tử và nỗi day dứt.",
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    video: "https://www.youtube.com/embed/uYPbbksJxIg",
    genre: "scifi",
    nation: "us",
  },

  {
    title: "Interstellar",
    year: "2014",
    rating: 9.5,
    desc: "Hành trình cứu loài người qua không gian.",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    video: "https://www.youtube.com/embed/zSWdZVtXT7E",
    genre: "scifi",
    nation: "us",
  },

  {
    title: "John Wick: Chapter 4",
    year: "2023",
    rating: 9.3,
    desc: "Sát thủ huyền thoại trở lại.",
    poster:
      "https://m.media-amazon.com/images/I/81fk-N7tvbL._AC_UF1000,1000_QL80_.jpg",
    video: "https://www.youtube.com/embed/qEVUtrk8_B4",
    genre: "action",
    nation: "us",
  },

  {
    title: "Your Name",
    year: "2016",
    rating: 9.7,
    desc: "Tình yêu vượt không gian thời gian.",
    poster: "https://kenh14cdn.com/2017/1-1485277071571.jpg",
    video: "https://www.youtube.com/embed/_mifHzxFNQ4",
    genre: "romance",
    nation: "jp",
  },
];

const carouselTrack = document.getElementById("carouselTrack");
const carouselDots = document.getElementById("carouselDots");
const hotMovies = document.getElementById("hotMovies");
const newMovies = document.getElementById("newMovies");
const recommendedMovies = document.getElementById("recommendedMovies");
const sectionTitle = document.getElementById("sectionTitle");

let currentIndex = 0;
let currentGenre = "all";

// ===============================
// CAROUSEL – HIỂN THỊ 10 PHIM ĐANG HOT
// ===============================
movies.slice(0, 10).forEach((m, i) => {
  const item = document.createElement("div");
  item.className = "carousel-item";
  item.innerHTML = `
    <img src="${m.poster}" alt="${m.title}">
    <div class="carousel-info">
      <h2>${m.title}</h2>
      <p>${m.desc}</p>
      <button class="play-btn" onclick="openWatchPage(${i})">Xem Ngay</button>
    </div>
  `;
  carouselTrack.appendChild(item);

  const dot = document.createElement("div");
  dot.className = "dot" + (i === 0 ? " active" : "");
  dot.onclick = () => goToSlide(i);
  carouselDots.appendChild(dot);
});

// ===============================
// TẠO CARD PHIM NHỎ
// ===============================
function createSmallCard(movie, index) {
  const card = document.createElement("div");
  card.className = "movie-card";
  card.innerHTML = `
    <img src="${movie.poster}" alt="${movie.title}" loading="lazy">
    <span class="movie-quality">${movie.quality || "HD"}</span>
    <div class="movie-overlay">
      <h3>${movie.title}</h3>
      <div class="meta"><span class="year">${
        movie.year
      }</span><span class="rating">★ ${movie.rating}</span></div>
    </div>
  `;
  card.onclick = () => openWatchPage(index);
  return card;
}

// ===============================
// RENDER PHIM HOT & MỚI NHẤT
// ===============================
function renderMovies(genre = "all") {
  hotMovies.innerHTML = "";
  newMovies.innerHTML = "";

  let filtered =
    genre === "all" ? [...movies] : movies.filter((m) => m.genre === genre);

  const hotList = [...filtered]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10);
  hotList.forEach((m) => {
    const idx = movies.indexOf(m);
    hotMovies.appendChild(createSmallCard(m, idx));
  });

  const newList = [...filtered].sort((a, b) => b.year - a.year);
  newList.forEach((m) => {
    const idx = movies.indexOf(m);
    newMovies.appendChild(createSmallCard(m, idx));
  });

  const titles = {
    all: "Phim Đang Hot",
    action: "Phim Hành Động Hot",
    romance: "Phim Tình Cảm Hot",
    horror: "Phim Kinh Dị Hot",
    animation: "Phim Hoạt Hình Hot",
    scifi: "Phim Khoa Học Viễn Tưởng Hot",
  };
  sectionTitle.textContent = titles[genre] || "Phim Đang Hot";
}

function renderRecommended() {
  const container = document.getElementById("recommendedMovies");
  if (!container) {
    console.error("LỖI: Không tìm thấy #recommendedMovies trong HTML");
    return;
  }

  container.innerHTML = "";

  const vietnamList = movies.filter(
    (m) => (m.nation + "").toLowerCase() === "vn"
  );

  if (vietnamList.length === 0) {
    container.innerHTML = "<p style='color:white'>Không có phim Việt Nam.</p>";
    return;
  }

  vietnamList.forEach((m) => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
      <img src="${m.poster}" alt="${m.title}">
      <span class="movie-quality">${m.quality || "HD"}</span>
      <div class="movie-overlay">
        <h3>${m.title}</h3>
        <div class="meta">
          <span class="year">${m.year}</span>
          <span class="rating">★ ${m.rating}</span>
        </div>
      </div>
    `;
    card.onclick = () => openWatchPage(movies.indexOf(m));
    container.appendChild(card);
  });
}
function renderVietnamMovies() {
  const vnMovies = document.getElementById("vnMovies");
  vnMovies.innerHTML = "";

  const list = movies.filter((m) => m.nation === "vn");

  list.forEach((movie) => {
    const index = movies.indexOf(movie);
    vnMovies.appendChild(createSmallCard(movie, index));
  });
}
// DROPDOWN THỂ LOẠI
// ===============================
// DROPDOWN THỂ LOẠI
document.querySelectorAll(".genre-item").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelectorAll(".genre-item")
      .forEach((i) => i.classList.remove("active"));
    item.classList.add("active");

    currentGenre = item.dataset.genre;
    renderMovies(currentGenre);

    // >>> THÊM DÒNG NÀY <<<
    filterVietnamMovies(currentGenre);
  });
});

// LỌC PHIM VIỆT NAM THEO THỂ LOẠI
function filterVietnamMovies(genre) {
  const vnMovies = document.getElementById("vnMovies");
  vnMovies.innerHTML = "";

  let list = movies.filter((m) => m.nation === "vn");

  if (genre !== "all") {
    list = list.filter((m) => m.genre === genre);
  }

  list.forEach((movie) => {
    const index = movies.indexOf(movie);
    vnMovies.appendChild(createSmallCard(movie, index));
  });
}

// ===============================
// TÌM KIẾM
// ===============================
document.getElementById("searchInput").addEventListener("input", function () {
  const term = this.value.trim().toLowerCase();
  let result = movies;
  if (currentGenre !== "all")
    result = result.filter((m) => m.genre === currentGenre);
  if (term) result = result.filter((m) => m.title.toLowerCase().includes(term));

  hotMovies.innerHTML = "";
  newMovies.innerHTML = "";

  const hotList = [...result].sort((a, b) => b.rating - a.rating).slice(0, 10);
  hotList.forEach((m) =>
    hotMovies.appendChild(createSmallCard(m, movies.indexOf(m)))
  );

  result.forEach((m) =>
    newMovies.appendChild(createSmallCard(m, movies.indexOf(m)))
  );

  sectionTitle.textContent = term
    ? `Kết quả tìm kiếm: "${this.value}"`
    : sectionTitle.textContent;
});

// ===============================
// CAROUSEL CONTROL – 10 PHIM
// ===============================
function goToSlide(i) {
  currentIndex = i;
  carouselTrack.style.transform = `translateX(-${i * 100}%)`;
  document
    .querySelectorAll(".dot")
    .forEach((d, j) => d.classList.toggle("active", j === i));
}
document.querySelector(".next").onclick = () =>
  goToSlide((currentIndex + 1) % 10);
document.querySelector(".prev").onclick = () =>
  goToSlide((currentIndex - 1 + 10) % 10);
setInterval(() => goToSlide((currentIndex + 1) % 10), 8000);

// ===============================
// XEM PHIM
// ===============================
function openWatchPage(i) {
  const m = movies[i];
  document.getElementById("watchTitle").textContent = m.title;
  document.getElementById("detailTitle").textContent = m.title;
  document.getElementById("detailYear").textContent = m.year;
  document.getElementById("detailRating").textContent = m.rating;
  document.getElementById("detailDesc").textContent = m.desc;
  document.getElementById("watchFrame").src = m.video + "?autoplay=1";
  document.getElementById("mainPage").classList.remove("active");
  document.getElementById("watchPage").classList.add("active");

  renderRecommended(i);
}

document.getElementById("backBtn").onclick = () => {
  document.getElementById("watchFrame").src = "";
  document.getElementById("watchPage").classList.remove("active");
  document.getElementById("mainPage").classList.add("active");
};
// ===============================
// HIỆU ỨNG LOADING KHI BẤM VÀO CARD PHIM
// ===============================
document.addEventListener("click", function (e) {
  const card = e.target.closest(".movie-card");
  if (card) {
    const link = card.getAttribute("data-link");
    if (link) {
      document.getElementById("pageLoading").style.display = "flex";
      setTimeout(() => {
        window.location.href = link;
      }, 600);
    }
  }
});
renderVietnamMovies();
renderMovies();
