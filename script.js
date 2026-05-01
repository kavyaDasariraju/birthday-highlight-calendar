function generateCalendar() {
  const input = document.getElementById("dob").value;

  if (!input) {
    alert("Please select your date of birth!");
    return;
  }

  const dob = new Date(input);

  // 🎯 Extract only day & month
  const day = dob.getDate();
  const month = dob.getMonth();

  // ✅ Use CURRENT year
  const year = new Date().getFullYear();

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.getElementById("monthYear").innerText = `${months[month]} ${year}`;

  const datesContainer = document.getElementById("dates");
  datesContainer.innerHTML = "";

  for (let i = 0; i < firstDay; i++) {
    datesContainer.innerHTML += `<div></div>`;
  }

  for (let i = 1; i <= lastDate; i++) {
    let isBirthday = i === day;

    datesContainer.innerHTML += `
    <div class="date ${isBirthday ? "birthday" : ""}">
      ${i}
    </div>
  `;
  }

  // 🧠 NEW: show day name
  showDayName(day, month, year);

  showQuote();
}

function showDayName(day, month, year) {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date(year, month, day);
  const dayName = dayNames[d.getDay()];

  document.getElementById("quote").innerText =
    `✨ This year, your special day falls on a beautiful ${dayName}. A reminder that you are truly one of a kind 💖`;
}
