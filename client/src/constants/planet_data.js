const planet_data = {
    Mercury: {
        name: "Mercury",
        diameter: "4,879 km",
        mass: "3.30 × 10^23 kg",
        position_in_number: 1,
        position: "Closest to the Sun",
    },
    Venus: {
        name: "Venus",
        diameter: "12,104 km",
        mass: "4.87 × 10^24 kg",
        position_in_number: 2,
        position: "Second planet from the Sun",
    },
    Earth: {
        name: "Earth",
        diameter: "12,742 km",
        mass: "5.97 × 10^24 kg",
        position_in_number: 3,
        position: "Third planet from the Sun",
    },
    Mars: {
        name: "Mars",
        diameter: "6,779 km",
        mass: "6.39 × 10^23 kg",
        position_in_number: 4,
        position: "Fourth planet from the Sun",
    },
    Jupiter: {
        name: "Jupiter",
        diameter: "139,822 km",
        mass: "1.90 × 10^27 kg",
        position_in_number: 5,
        position: "Fifth planet from the Sun",
    },
    Saturn: {
        name: "Saturn",
        diameter: "116,460 km",
        mass: "5.68 × 10^26 kg",
        position_in_number: 6,
        position: "Sixth planet from the Sun",
    },
    Uranus: {
        name: "Uranus",
        diameter: "50,724 km",
        mass: "8.68 × 10^25 kg",
        position_in_number: 7,
        position: "Seventh planet from the Sun",
    },
    Neptune: {
        name: "Neptune",
        diameter: "49,244 km",
        mass: "1.02 × 10^26 kg",
        position_in_number: 8,
        position: "Eighth planet from the Sun",
    },
};

const planet_data_old = {
    mercury: {
        name: "Mercury",
        position: 1,
        description:
            "Mercury is the smallest planet in our solar system and is located closest to the sun. It has a very thin atmosphere and is heavily cratered.",
        image: "mercury.jpg",
        discovery: "Known since ancient times",
        mass: "3.3 x 10^23 kg",
        diameter: "4,880 km",
        distance_from_sun: "57.9 million km",
        length_of_day: "59 Earth days",
        orbital_period: "88 Earth days",
        number_of_moons: 0,
        temperature: "430°C (800°F) during the day, -180°C (-290°F) at night",
        interesting_facts: [
            "Mercury is named after the Roman messenger to the gods.",
            "Mercury has no atmosphere, which means there is no weather on the planet.",
            "Mercury is one of the most cratered planets in our solar system.",
        ],
    },
    venus: {
        name: "Venus",
        position: 2,
        description:
            "Venus is the second planet from the sun and is the hottest planet in our solar system due to its thick atmosphere of carbon dioxide. It is similar in size and composition to Earth.",
        image: "venus.jpg",
        discovery: "Known since ancient times",
        mass: "4.9 x 10^24 kg",
        diameter: "12,104 km",
        distance_from_sun: "108.2 million km",
        length_of_day: "243 Earth days",
        orbital_period: "225 Earth days",
        number_of_moons: 0,
        temperature: "462°C (864°F) on the surface",
        interesting_facts: [
            "Venus is named after the Roman goddess of love and beauty.",
            "Venus has the longest day of any planet in our solar system, even though it rotates very slowly.",
            "Venus is often called Earth's 'sister planet' because of their similar size and composition.",
        ],
    },
    earth: {
        name: "Earth",
        position: 3,
        description:
            "Earth is the third planet from the sun and is the only known planet to harbor life. It has a diverse and complex biosphere and a protective magnetic field.",
        image: "earth.jpg",
        discovery: "Known since ancient times",
        mass: "5.97 x 10^24 kg",
        diameter: "12,742 km",
        distance_from_sun: "149.6 million km",
        length_of_day: "24 hours",
        orbital_period: "365.25 days",
        number_of_moons: 1,
        temperature: "15°C (59°F) on average",
        interesting_facts: [
            "Earth is the only planet in our solar system with liquid water on its surface.",
            "Earth's atmosphere contains about 21% oxygen, which is necessary for life as we know it.",
            "The Earth-Moon system is unique in our solar system in terms of the ratio of the sizes of the two bodies.",
        ],
    },
};

export default planet_data;
