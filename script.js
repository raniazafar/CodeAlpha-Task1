// Populate day, month, and year dropdowns
const daySelect = document.getElementById('day');
const monthSelect = document.getElementById('month');
const yearSelect = document.getElementById('year');

for (let i = 1; i <= 31; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.text = i;
    daySelect.appendChild(option);
}

for (let i = 1; i <= 12; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.text = i;
    monthSelect.appendChild(option);
}

const currentYear = new Date().getFullYear();
for (let i = currentYear; i >= 1900; i--) {
    const option = document.createElement('option');
    option.value = i;
    option.text = i;
    yearSelect.appendChild(option);
}

// Calculate Age
document.getElementById('ageCalculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const day = parseInt(daySelect.value);
    const month = parseInt(monthSelect.value);
    const year = parseInt(yearSelect.value);

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();

    // Adjust the year and month if the birthdate has not occurred this year
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    // Adjust the months if the birth day has not occurred in the current month
    if (today.getDate() < birthDate.getDate()) {
        ageMonths--;
        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }
    }

    document.getElementById('result').textContent = `You are ${ageYears} years and ${ageMonths} months old.`;
});
