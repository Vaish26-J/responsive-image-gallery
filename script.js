const downBtn = document.querySelector("#landing-page button");
const images = document.querySelectorAll(".container>img");
const modal = document.querySelector("#modal");
const modalImg = document.querySelector(".modal-img");
const close = document.querySelector(".close");
const title = document.querySelector(".title");
const about = document.querySelector(".about");
const type = document.querySelector(".type");
const abilities = document.querySelector(".ability");

let selectedImg;
downBtn.addEventListener('click', ()=>{
    const gallery = document.querySelector('#gallery');
    gallery.scrollIntoView({
        behavior: 'smooth', 
        block: 'start'
      });
})

//pokemon objects

let pokemons = [
   {
    key: "pikachu",
    title: "PIKACHU",
    imgUrl: "/assets/pikachu.png",
    about: "When it is angered, it immediately discharges the energy stored in the pouches in its cheeks. When several of these Pokémon gather, their electricity can build and cause lightning storms.",
    type: "Electric",
    abilities: "Static"
   },
   {
    key: "aipom",
    title: "AIPOM",
    imgUrl: "/assets/aipom.png",
    about: "As it did more and more with its tail, its hands became clumsy. It makes its nest high in the treetops. It searches for prey from the tops of trees. When it spots its favorite food, Bounsweet, Aipom gets excited and pounces.",
    type: "Normal",
    abilities: "Runaway, Pickup"
   },
   {
    key: "bulbasaur",
    title: "BULBASAUR",
    imgUrl: "/assets/bulbasaur.png",
    about: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger. While it is young, it uses the nutrients that are stored in the seed on its back in order to grow.",
    type: "Grass, Poison",
    abilities: "Overgrow"
   },
   {
    key: "charmandar",
    title: "CHARMANDAR",
    imgUrl: "/assets/charmandar.png",
    about: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail. From the time it is born, a flame burns at the tip of its tail. Its life would end if the flame were to go out.',
    type: "Fire",
    abilities: "Blaze"
   },
   {
    key: "ditto",
    title: "DITTO",
    imgUrl: "/assets/ditto.png",
    about: "Its transformation ability is perfect. However, if made to laugh, it can’t maintain its disguise. It can freely recombine its own cellular structure to transform into other life-forms.",
    type: "Normal",
    abilities: "Limber"
   },
   {
    key: "eevee",
    title: "EEVEE",
    imgUrl: "/assets/eevee.png",
    about: "Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment. Its genetic code is irregular. It may mutate if it is exposed to radiation from element stones.",
    type: "Normal",
    abilities: "Runaway, Adaptability"
   },
   {
    key: "jigglypuff",
    title: "JIGGLYPUFF",
    imgUrl: "/assets/jigglypuff.png",
    about: "When its huge eyes waver, it sings a mysteriously soothing melody that lulls its enemies to sleep. If it inflates to sing a lullaby, it can perform longer and cause sure drowsiness in its audience.",
    type: "Normal, Fairy",
    abilities: "Cute Charm, Competitive"
   },
   {
    key: "lucario",
    title: "LUCARIO",
    imgUrl: "/assets/lucario.png",
    about: "It’s said that no foe can remain invisible to Lucario, since it can detect auras—even those of foes it could not otherwise see. A well-trained one can use its aura to identify and take in the feelings of creatures over half a mile away.",
    type: "Fighting, Steel",
    abilities: "Inner Focus, Stead Fast"
   },
   {
    key: "meowth",
    title: "MEOWTH",
    imgUrl: "/assets/meowth.png",
    about: "All it does is sleep during the daytime. At night, it patrols its territory with its eyes aglow. It loves things that sparkle. When it sees a shiny object, the gold coin on its head shines, too.",
    type: "Normal",
    abilities: "Pickup, Technician"
   },
   {
    key: "mewtwo",
    title: "MEWTWO",
    imgUrl: "/assets/mewtwo.png",
    about: "Its DNA is almost the same as Mew’s. However, its size and disposition are vastly different.",
    type: "Psychic",
    abilities: "Pressure"
   },
   {
    key: "mr.mime",
    title: "Mr. MIME",
    imgUrl: "/assets/Mr. Mime.png",
    about:  "It is a pantomime expert that can create invisible but solid walls using miming gestures. Emanations from its fingertips solidify the air into invisible walls that repel even harsh attacks.",
    type: "Psychic, Fairy",
    abilities: "Soundproof, Filter"
   },
   {
    key: "pidgey",
    title: "PIDGEY",
    imgUrl: "/assets/pidgey.png",
    about: "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.",
    type: "Normal, Flying",
    abilities: "Keen eye, Tangled Feet"
   },
   {
    key: "psyduck",
    title: "PSYDUCK",
    imgUrl: "/assets/psyduck.png",
    about: "It is constantly wracked by a headache. When the headache turns intense, it begins using mysterious powers. If its chronic headache peaks, it may exhibit odd powers. It seems unable to recall such an episode.",
    type: "Water",
    abilities: "Damp, Cloud Nine"
   },
   {
    key: "snorlax",
    title: "SNORLAX",
    imgUrl: "/assets/snorlax.png",
    about: "Its stomach can digest any kind of food, even if it happens to be moldy or rotten. It stops eating only to sleep. It doesn’t feel full unless it eats nearly 900 pounds a day.",
    type: 'Normal',
    abilities: "Thick Fat, Immunity"
   },
   {
    key: "squirtle",
    title: "SQUIRTLE",
    imgUrl: "/assets/squirtle.png",
    about: "When it retracts its long neck into its shell, it squirts out water with vigorous force. When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    type: "Water",
    abilities: "Torrent"
   },
   {
    key: "togepi",
    title: "TOGEPI",
    imgUrl: "/assets/togepi.png",
    about: "The shell seems to be filled with joy. It is said that it will share good luck when treated kindly. It is considered to be a symbol of good luck. Its shell is said to be filled with happiness.",
    type: "Fairy",
    abilities: "Serene Grace, Hustle"
   },
]

// selected image
images.forEach((img)=>{
    img.addEventListener('click', (event)=>{
        selectedImg = event.target.getAttribute("data-selected");
        openModal(selectedImg);
    })
})

//open modal
function openModal(image){
    let obj = pokemons.find(pokemon => pokemon.key === image);
    modal.style.display = "block";
    modalImg.src = obj.imgUrl;
    modalImg.style.height = "auto";
    modalImg.style.maxWidth = "100%";
    title.innerText = obj.title;
    about.innerText = obj.about;
    type.innerText = obj.type;
    abilities.innerText = obj.abilities; 
}

// close modal
close.addEventListener("click", ()=>{
    modal.classList.add("zoomOut");
    
    setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove("zoomOut");
    }, 500);
})

window.addEventListener("click", (event)=> {
    if(event.target === modal){
        modal.style.display = "none";
    }
})
