document.getElementById('theme-button').addEventListener('click', function() {
    const elementsToChange = document.querySelectorAll('.homepage .background, .homepage .background-1, .homepage .background-3, .homepage .background-5, .homepage .background-6, .homepage .rectangle-2');
    const textElements = document.querySelectorAll('.homepage .uiux, .homepage .games, .homepage .music, .homepage .fitness, .homepage .movies');
    
    elementsToChange.forEach(element => {
        const style = getComputedStyle(element);
        if (style.backgroundColor === 'rgb(253, 208, 141)') { // Chardonnay color
            element.style.backgroundColor = '#9370DB'; // Purple
        } else if (style.backgroundColor === 'rgb(244, 245, 185)') { // Light yellow
            element.style.backgroundColor = '#98FB98'; // Green
        } else if (style.backgroundColor === 'rgb(147, 112, 219)') { // Purple
            element.style.backgroundColor = '#fdd08d'; // Chardonnay
        } else if (style.backgroundColor === 'rgb(152, 251, 152)') { // Green
            element.style.backgroundColor = '#f4f5b9'; // Light yellow
        }
    });

    textElements.forEach(element => {
        const style = getComputedStyle(element);
        if (style.color === 'rgb(253, 208, 141)') { // Chardonnay color
            element.style.color = '#9370DB'; // Purple
        } else if (style.color === 'rgb(244, 245, 185)') { // Light yellow
            element.style.color = '#98FB98'; // Green
        } else if (style.color === 'rgb(147, 112, 219)') { // Purple
            element.style.color = '#fdd08d'; // Chardonnay
        } else if (style.color === 'rgb(152, 251, 152)') { // Green
            element.style.color = '#f4f5b9'; // Light yellow
        }
    });
});
