document.addEventListener('DOMContentLoaded', function () {
    const grid = document.getElementById('grid');
    
// --------------> create the table <-----------------
    for (let i = 1; i <= 100; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.textContent = i;
        cell.dataset.index = i;

// --------------> check local storage to see if this cell should be selected <-----------------
        if (localStorage.getItem(`day-${i}`) === 'selected') {
            cell.classList.add('selected');
        }

// --------------> add click event listener <-----------------
        cell.addEventListener('click', function () {
            if (cell.classList.contains('selected')) {
                cell.classList.remove('selected');
                localStorage.removeItem(`day-${i}`);
            } else {
                cell.classList.add('selected');
                localStorage.setItem(`day-${i}`, 'selected');
            }
        });

        grid.appendChild(cell);
    }
});
