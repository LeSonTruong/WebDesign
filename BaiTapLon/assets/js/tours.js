        // Function to get URL parameter by name
        function getParameterByName(name, url = window.location.href) {
            name = name.replace(/[\[\]]/g, '\\$&');
            let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        }

        // Get the 'id' parameter from the URL
        const destinationId = getParameterByName('id');

        // Elements to update
        const titleElement = document.getElementById('title');
        const descriptionElement = document.getElementById('description');

        // Update content based on 'id' parameter
        switch (destinationId) {
            case 'hanoi':
                titleElement.textContent = 'Hanoi Tours';
                descriptionElement.textContent = 'Discover the beautiful capital city of Hanoi, full of culture and history.';
                break;
            case 'hochiminh':
                titleElement.textContent = 'Ho Chi Minh City Tours';
                descriptionElement.textContent = 'Explore the vibrant Ho Chi Minh City, known for its bustling streets and modern lifestyle.';
                break;
            default:
                titleElement.textContent = 'Tours & Travel';
                descriptionElement.textContent = 'Explore your favorite destinations with us!';
                break;
        }