// Friend data with your collected content
const friends = [
    {
        name: "Alex",
        wish: "May your birthday be as wonderful as you've made all our lives!",
        memory: "Remember when we got lost in the city and found that amazing café?",
        description: "The most spontaneous and joyful person I know."
    },
    {
        name: "Sam",
        wish: "Wishing you a year filled with love and laughter!",
        memory: "That night we stayed up until sunrise talking about dreams.",
        description: "Your empathy inspires everyone."
    },
    // Add 6 more friends...
    {
        name: "Jordan",
        wish: "Happy birthday to someone who brightens the world!",
        memory: "Our road trip singing terribly to every song!",
        description: "Your energy is contagious."
    },
    {
        name: "Taylor",
        wish: "May this year bring everything you hope for!",
        memory: "When you helped me through that tough time.",
        description: "A loyal friend who always shows up."
    },
    {
        name: "Casey",
        wish: "Cheers to another year of your amazing presence!",
        memory: "That ridiculous cooking attempt!",
        description: "The funniest person with the biggest heart."
    },
    {
        name: "Riley",
        wish: "Sending you happiness tenfold!",
        memory: "Our bookstore Saturdays losing track of time.",
        description: "A curious soul finding wonder everywhere."
    },
    {
        name: "Jamie",
        wish: "Happy birthday adventure partner!",
        memory: "Rainy day watching terrible movies.",
        description: "Perfect balance of wild and comforting."
    },
    {
        name: "Morgan",
        wish: "May your day be as special as you!",
        memory: "Surprise concert tickets - best night ever!",
        description: "Thoughtful in surprising, delightful ways."
    }
];

// Create jars
const jarsContainer = document.getElementById('jarsContainer');
const modal = document.getElementById('messageModal');

friends.forEach((friend) => {
    const jar = document.createElement('div');
    jar.className = 'jar';
    jar.innerHTML = `
        <div class="jar-lid"></div>
        <div class="jar-body">
            <div class="jar-label">${friend.name}</div>
        </div>
    `;
    
    jar.addEventListener('click', () => {
        document.querySelectorAll('.jar').forEach(j => j.classList.remove('open'));
        jar.classList.add('open');
        
        document.getElementById('modalTitle').textContent = `From ${friend.name}`;
        document.getElementById('modalWish').textContent = friend.wish;
        document.getElementById('modalMemory').textContent = friend.memory;
        document.getElementById('modalDesc').textContent = friend.description;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    jarsContainer.appendChild(jar);
});

// Close modal
document.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
    document.querySelectorAll('.jar').forEach(j => j.classList.remove('open'));
    document.body.style.overflow = 'auto';
});

// Close when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.querySelectorAll('.jar').forEach(j => j.classList.remove('open'));
        document.body.style.overflow = 'auto';
    }
});