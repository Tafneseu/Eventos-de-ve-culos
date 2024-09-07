// Função para exibir todos os eventos no carregamento da página
function displayEvents(eventList) {
    const container = document.getElementById('eventos-container');
    container.innerHTML = ''; // Limpa o container antes de adicionar novos eventos

    eventList.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('evento');

        eventCard.innerHTML = `
            <img src="${event.image}" alt="${event.name}">
            <h2>${event.name}</h2>
            <p><strong>Data:</strong> ${event.date}</p>
            <p><strong>Local:</strong> ${event.location}</p>
            <p>${event.description}</p>
            ${event.ticketLink ? `<a href="${event.ticketLink}" target="_blank">Comprar Ingressos</a>` : ''}
        `;

        container.appendChild(eventCard);
    });
}

// Exibe os eventos ao carregar a página
displayEvents(eventos);

// Função de busca para filtrar eventos
function searchEvents() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredEvents = eventos.filter(event => 
        event.name.toLowerCase().includes(searchInput) || 
        event.location.toLowerCase().includes(searchInput)
    );

    displayEvents(filteredEvents);
}
