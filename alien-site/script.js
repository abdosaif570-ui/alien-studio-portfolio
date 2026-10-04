const works = [
  // General video work
  ["General Video Work","Video Project 01","https://www.facebook.com/share/v/1D2bW4n5AZ/"],
  ["General Video Work","Video Project 02","https://www.facebook.com/share/v/18o5ZXAaHR/"],
  ["General Video Work","Video Project 03","https://www.facebook.com/share/v/1BogqFTSSR/"],
  ["General Video Work","Video Project 04","https://www.facebook.com/share/r/1HgL9d3vKr/"],
  ["General Video Work","Video Project 05","https://www.facebook.com/share/r/1BtpijQPio/"],
  ["General Video Work","Video Project 06","https://www.facebook.com/share/r/1HLtA65d7d/"],
  ["General Video Work","Video Project 07","https://www.facebook.com/share/r/1LQermog9w/"],
  ["General Video Work","Video Project 08","https://www.facebook.com/share/v/1BwT5ZGgk2/"],
  ["General Video Work","Video Project 09","https://www.facebook.com/share/r/1JMH87PFTF/"],
  ["General Video Work","Video Project 10","https://www.facebook.com/share/r/1KBZiW9wTy/"],
  ["General Video Work","Video Project 11","https://www.facebook.com/share/v/1CBdxanZgE/"],

  // محمد اشرف
  ["محمد اشرف","محمد اشرف — 01","https://www.facebook.com/share/r/1H7pbQ1bCp/"],
  ["محمد اشرف","محمد اشرف — 02","https://www.facebook.com/share/v/1BuhfvGXoh/"],
  ["محمد اشرف","محمد اشرف — 03","https://www.facebook.com/share/r/1CZ81X8Txu/"],
  ["محمد اشرف","محمد اشرف — 04","https://www.facebook.com/share/r/1HdftFxUmX/"],
  ["محمد اشرف","محمد اشرف — 05","https://www.facebook.com/share/r/19R8MkG2ko/"],

  // عبدالرحمن محمد
  ["عبدالرحمن محمد","عبدالرحمن محمد — 01","https://www.facebook.com/share/v/1YpaudCEkt/"],
  ["عبدالرحمن محمد","عبدالرحمن محمد — 02","https://www.facebook.com/share/v/1GdfwiLLpQ/"],
  ["عبدالرحمن محمد","عبدالرحمن محمد — 03","https://www.facebook.com/share/v/1Qo6PzEv3M/"],
  ["عبدالرحمن محمد","عبدالرحمن محمد — 04","https://www.facebook.com/share/r/19MPQ6hBQB/"],
  ["عبدالرحمن محمد","عبدالرحمن محمد — 05","https://www.facebook.com/share/v/14fd2hJLmGp/"],
  ["عبدالرحمن محمد","عبدالرحمن محمد — 06","https://www.facebook.com/share/v/19BzE5oUVx/"],
  ["عبدالرحمن محمد","عبدالرحمن محمد — 07","https://www.facebook.com/share/v/1Dh8T3sD6q/"],
  ["عبدالرحمن محمد","عبدالرحمن محمد — 08","https://www.facebook.com/share/r/1BEU1NfBDh/"],
  ["عبدالرحمن محمد","عبدالرحمن محمد — 09","https://www.facebook.com/share/v/1DkoTjjHp1/"],
  ["عبدالرحمن محمد","عبدالرحمن محمد — 10","https://www.facebook.com/share/v/1BGT4edJbs/"],
  ["عبدالرحمن محمد","عبدالرحمن محمد — 11","https://www.facebook.com/share/r/19gvtot4U4/"],
  ["عبدالرحمن محمد","عبدالرحمن محمد — 12","https://www.facebook.com/share/v/1U17fNHwU5/"],
  ["عبدالرحمن محمد","عبدالرحمن محمد — 13","https://www.facebook.com/share/v/1M8rtrPZbN/"],
  ["عبدالرحمن محمد","عبدالرحمن محمد — 14","https://www.facebook.com/share/v/1DQoAA5HNq/"],

  // المليجي
  ["المليجي","المليجي — 01","https://www.facebook.com/share/v/1JyE7X4mc1/"],
  ["المليجي","المليجي — 02","https://www.facebook.com/share/v/1J1ftHQUtw/"],
  ["المليجي","المليجي — 03","https://www.facebook.com/share/v/1MD4PdeJAB/"],
  ["المليجي","المليجي — 04","https://www.facebook.com/share/v/19LvmQVD29/"],
  ["المليجي","المليجي — 05","https://www.facebook.com/share/v/1DXYsH4gEA/"],
  ["المليجي","المليجي — 06","https://www.facebook.com/share/r/1BkrVtLJ4J/"],
  ["المليجي","المليجي — 07","https://www.facebook.com/share/v/19VYQELt6j/"],
  ["المليجي","المليجي — 08","https://www.facebook.com/share/r/17ebuEuzYJ/"],

  // مؤمن سعيد
  ["مؤمن سعيد","مؤمن سعيد — 01","https://www.facebook.com/share/v/18eut7fNGh/"],
  ["مؤمن سعيد","مؤمن سعيد — 02","https://www.facebook.com/share/v/1HMdj3ymne/"],

  // شادي رشدي
  ["شادي رشدي","شادي رشدي — 01","https://www.facebook.com/share/v/19d5sYT5CQ/"]
];

const grid = document.getElementById("workGrid");
const loadMore = document.getElementById("loadMore");
const filters = document.querySelectorAll(".filter");

let activeFilter = "all";
let visible = 9;

function filteredWorks(){
  return activeFilter === "all" ? works : works.filter(w => w[0] === activeFilter);
}

function render(){
  const list = filteredWorks();
  const shown = list.slice(0, visible);
  grid.innerHTML = shown.map((w,i) => `
    <a class="work-card" href="${w[2]}" target="_blank" rel="noopener noreferrer" aria-label="Open ${w[1]}">
      <div class="work-card-bg"></div>
      <div class="play">▶</div>
      <div class="work-info">
        <div class="work-index">${String(i+1).padStart(2,"0")} / ${w[0]}</div>
        <div class="work-title">${w[1]}</div>
        <div class="work-type">Video • Watch project ↗</div>
      </div>
    </a>
  `).join("");
  loadMore.style.display = shown.length < list.length ? "inline-block" : "none";
}

filters.forEach(btn=>{
  btn.addEventListener("click",()=>{
    filters.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    visible = 9;
    render();
  });
});

loadMore.addEventListener("click",()=>{
  visible += 9;
  render();
});

// Mobile navigation
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
menuBtn.addEventListener("click",()=>{
  nav.classList.toggle("mobile-open");
});
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("mobile-open")));

render();

// Location photo lightbox
const lb = document.getElementById("lightbox");
const lbImg = lb.querySelector("img");
document.querySelectorAll(".loc").forEach(b=>b.addEventListener("click",()=>{
  lbImg.src = b.dataset.full;
  lbImg.alt = b.querySelector("img").alt;
  lb.showModal();
}));
lb.addEventListener("click",()=>lb.close());
