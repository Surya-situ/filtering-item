const colors = [  {title: 'red'},{title: 'black'},{title: 'green'},{title: 'blue'}, {title: 'green'}, {title: 'black'},{title: 'red'},{title: 'blue'},{title: 'green'},{title: 'red'},{title: 'black'},{title: 'green'}
];

let btnSelector = document.querySelectorAll('.buttons');
let displayContent = document.querySelector('.content');

window.addEventListener('DOMContentLoaded', ()=> {
    displayItems(colors);
    
})

// **********filtering**********
btnSelector.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        const title = event.currentTarget.dataset.id;

        const listColor = colors.filter(function(colors) {
            if(colors.title === title) {
                return title;
            }
        });

        if(title === 'all') {
            displayItems(colors)
        } else {
            displayItems(listColor)
        }
    })
})

// *******display items********
function displayItems(items) {
    let displayColors = items.map(function(item) {
        return `
            <div class="colors"><p>${item.title}</p></div> 
        `
    });

    displayColors = displayColors.join('')

    displayContent.innerHTML = displayColors;
}
