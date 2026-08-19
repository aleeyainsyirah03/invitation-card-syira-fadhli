// =========================
// OPEN INVITATION
// =========================

const openInvitationButton =
  document.getElementById("openInvitation");

const cover =
  document.getElementById("cover");

const invitationContent =
  document.getElementById("invitationContent");


// lock scroll masa mula buka website
document.body.classList.add("invitation-locked");


openInvitationButton.addEventListener("click", () => {

  // animate button
  openInvitationButton.classList.add("button-opening");

  // animate cover
  cover.classList.add("cover-opening");


  setTimeout(() => {

    // hide cover completely
    cover.style.display = "none";

    // show invitation content
    invitationContent.classList.remove("invitation-hidden");
    invitationContent.classList.add("invitation-reveal");

    // allow scrolling
    document.body.classList.remove("invitation-locked");

    // start exactly at Screen 2
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });

  }, 800);

});
// =========================
// WEDDING COUNTDOWN
// =========================

const weddingDate = new Date("2027-07-11T12:00:00+08:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance <= 0) {
    document.getElementById("days").textContent = "000";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) /
    (1000 * 60)
  );

  const seconds = Math.floor(
    (distance % (1000 * 60)) /
    1000
  );

  document.getElementById("days").textContent =
    String(days).padStart(3, "0");

  document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");

  document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");

  document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);


// =========================
// ADD TO CALENDAR
// =========================

const addCalendarButton =
  document.getElementById("addCalendar");

addCalendarButton.addEventListener("click", () => {

  const title =
    "Majlis Perkahwinan Syira & Fadhli";

  const location =
    "Lot 1528 Jalan Melayu, Kampung Sungai Kandis, Seksyen 36, 40460 Shah Alam, Selangor";

  const details =
    "Majlis Perkahwinan Syira & Fadhli";

  // Malaysia time 12PM - 4PM
  const start =
    "20270711T040000Z";

  const end =
    "20270711T080000Z";

  const calendarURL =
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    "&text=" + encodeURIComponent(title) +
    "&dates=" + start + "/" + end +
    "&details=" + encodeURIComponent(details) +
    "&location=" + encodeURIComponent(location);

  window.open(calendarURL, "_blank");
});
// =========================
// SCROLL REVEAL
// =========================

const revealElements =
  document.querySelectorAll(".reveal");

const revealObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }

      });

    },
    {
      threshold: 0.15
    }
  );

revealElements.forEach((element) => {
  revealObserver.observe(element);
});
// =========================
// BOTTOM NAV UX
// =========================

document.querySelectorAll('.bottom-nav a[href^="#"]').forEach(link => {

  link.addEventListener("click", event => {

    const targetId = link.getAttribute("href");

    if (targetId === "#") return;

    event.preventDefault();

    const target = document.querySelector(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

  });

});
// =========================
// CONTACT BOTTOM SHEET
// =========================

const openContact =
  document.getElementById("openContact");

const closeContact =
  document.getElementById("closeContact");

const contactOverlay =
  document.getElementById("contactOverlay");


openContact.addEventListener("click", () => {

  contactOverlay.classList.add("active");

  document.body.style.overflow = "hidden";

});


closeContact.addEventListener("click", () => {

  contactOverlay.classList.remove("active");

  document.body.style.overflow = "";

});


contactOverlay.addEventListener("click", (event) => {

  if (event.target === contactOverlay) {

    contactOverlay.classList.remove("active");

    document.body.style.overflow = "";

  }

});