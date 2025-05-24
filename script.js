// Friend data with your collected content
const friends = [
    {
        name: "Madhura",
        wish: "Unkooda kandippa oru csk match chepauk la pakkanum dharsh🥰",
        memory: "Everyday sitting with you in class",
        description: "Un superpower na boogambamey vandhalum your calm and composed nature. A very very Happy Birthday dharshuuu"
    },
    {
        name: "Lakshita",
        wish: "Happy Birthday Dharsh💝",
        memory: "You started as my first sem benchmate, happy to have a good friend like you don, my fav memory would be all the time we spent in your room gossiping and talking random things , hope our friendship last long 🫶.",
        description: "Brave, caring,funny,genius, CSK fan of our group"
    },
    // Add 6 more friends...
    {
        name: "Lakshmi",
        wish: "Happy birthday arai thunaivi♥️😘❣️",
        memory: "370♥️💅🏻",
        description: "Don🔥🔥🔥"
    },
    {
        name: "Sritha",
        wish: "Happy porandha naal madoom🫶🏻",
        memory: "Memories...??? Haan... Andha bedsheet aa vechu reel eduthom ae.. Dance one.. Adhu😌😌🫶🏻🫶🏻",
        description: "Hmm.. What else... Aah... College bag... Aahh...ne work pogum podhu I will get one for... Maaman irukkum podhu ne en ma enkitta kekkanum🫣😆maaman kitta kelu po"
    },
    {
        name: "Mayuri",
        wish: "Happy birthday day Pangali(uk wht i m telling)♥️😉",
        memory: "Memories.... Namba konja naalu rommates a irunthu nerya fun panomye and our IPL nights.. Waiting to create more😊",
        description: "Ohh… Nee 21 aagittiyaa?! 😮😆 Ithu maariye epovum santhoshama iru d!!"
    },
    {
        name: "Chinmayee",
        wish: "happy birthday! u are old.",
        memory: "adventures with ur laptop, from learning Django (painful) to ur ram malfunctioning so bad it couldn't read the OS (hilarious)",
        description: "ur nonsense is very fun to be around. keep up the nonsense!❤️"
    },
    {
        name: "Sri Sruthi",
        wish: "Happy, Happy birthday, Dharshini!!!🥰❤️",
        memory: "Haan...namma rendu perum serndhu 'kuch rang pyar ke aise bhi' or 'ini ellaam vasanthame' oda episodes mela obsess aitu theduradhuuu! 🤣🤣",
        description: "You are sooo, sooo kind at heart and sooo generous at helping others woithout expecting anything in return... those are truly gem of qualitiesss! Be like this always!❤️"
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
