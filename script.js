const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');
const nextButton = document.getElementById('next');

let currentStep = 0;

const storySteps = [
    {
        text: "Welcome to the Pokémon Multiverse! Choose a dimension to explore:",
        choices: [
            { text: "Futuristic City", nextStep: 1 },
            { text: "Ancient Ruins", nextStep: 2 },
            { text: "Underwater Realm", nextStep: 3 }
        ]
    },
    {
        text: "You enter the Futuristic City and encounter a wild Porygon!",
        choices: [
            { text: "Catch Porygon", nextStep: 4 },
            { text: "Run Away", nextStep: 0 }
        ]
    },
    {
        text: "You explore the Ancient Ruins and find a mysterious artifact!",
        choices: [
            { text: "Take the Artifact", nextStep: 5 },
            { text: "Leave it", nextStep: 0 }
        ]
    },
    {
        text: "You dive into the Underwater Realm and see a wild Gyarados!",
        choices: [
            { text: "Battle Gyarados", nextStep: 6 },
            { text: "Swim Away", nextStep: 0 }
        ]
    },
    {
        text: "You caught Porygon! It joins your team.",
        choices: [
            { text: "Continue Exploring", nextStep: 0 }
        ]
    },
    {
        text: "You took the artifact! It glows with power.",
        choices: [
            { text: "Continue Exploring", nextStep: 0 }
        ]
    },
    {
        text: "You battled Gyarados and it fled!",
        choices: [
            { text: "Continue Exploring", nextStep: 0 }
        ]
    }
];

function displayStory(step) {
    storyElement.innerText = storySteps[step].text;
    choicesElement.innerHTML = '';
    storySteps[step].choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.onclick = () => {
            currentStep = choice.nextStep;
            displayStory(currentStep);
        };
        choicesElement.appendChild(button);
    });
    nextButton.style.display = 'none';
}

nextButton.onclick = () => {
    currentStep++;
    displayStory(currentStep);
};

displayStory(currentStep);
