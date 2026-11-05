
import resurgence from "../assets/Resurgence-scaled.jpg";
import spaceOrb from "../assets/1.webp";
import pocoOLombo from "../assets/2.webp";
import mysteriousIsland from "../assets/3.webp";

const booksData = [
    {
        id: 1,
        slug: "resurgence",
        title: "Resurgence",
        image: resurgence,
        rating: 5,

        synopsis: [
            "When Astrid overhears a mysterious call, he dives into a world of secrets, hacking the government's impenetrable system. Reuniting with an old friend, he uncovers a chilling revelation that forces them to breach a heavily guarded facility. Together, they must correct a deadly glitch before it's too late. Can they fix things in time to protect Astrid's family and reveal hidden truths?"
        ],

        details: [
            { label: "Reading Age", value: "-" },
            { label: "Publisher", value: "Author In Me" },
            { label: "No. of pages", value: "84" },
            { label: "Released", value: "19 Nov, 2023" },
            { label: "Language", value: "English" },
        ],

        amazonLink: "",
        publisherLink: "",
        publisherName: "Author In Me",
    },

    {
        id: 2,
        slug: "the-space-orb",
        title: "The Space Orb",
        image: spaceOrb,
        rating: 5,

        synopsis: [
            "In an unprecedented calamity, Arius, one of the space planets, has exploded. Dawn, a brave girl determined to save her planet, manages to escape in a space capsule. Her only hope lies in finding the Space Orb hidden on the earth to restore her beloved world. What challenges would she face? Would she succeed in her mission to save Arius and reunite with her family, or would she spend the rest of her life in captivity?",

            "Read this exciting and heart-warming story from 11-year-old Deeva Karnani Shah to know what happens next."
        ],

        details: [
            { label: "Reading Age", value: "-" },
            { label: "Publisher", value: "Young Voices" },
            { label: "No. of pages", value: "44" },
            { label: "Released", value: "20 May, 2022" },
            { label: "Language", value: "English" },
        ],

        amazonLink: "",
        publisherLink: "",
        publisherName: "Young Voices",
    },

    {
        id: 3,
        slug: "poco-o-lombo",
        title: "Poco 'o' Lombo is Vesuvius",
        image: pocoOLombo,
        rating: 5,

        synopsis: [
            "Years after the Mount Vesuvius erupted and destroyed Pompeii, the city is now rebuilt. Two friends, Summer and Hannah are celebrating the Vesuvius Day to mark the victory of life over death when nature unleashes its wrath again in the form of an earthquake. The event traps the friends underground leading to the unveiling of long-lost legends of Pompeii.",

            "Award-winning young author, Deeva Karnani Shah, pens down another intriguing story. This amazingly adventurous story is told through a combination of text and beautiful illustrations and is an ideal bed time story for children."
        ],

        details: [
            { label: "Reading Age", value: "3 – 11 years" },
            { label: "Publisher", value: "Author In Me" },
            { label: "No. of pages", value: "-" },
            { label: "Released", value: "29 November, 2020" },
            { label: "Language", value: "English" },
        ],

        amazonLink: "",
        publisherLink: "",
        publisherName: "Author In Me",
    },

    {
        id: 4,
        slug: "the-mysterious-island",
        title: "The Mysterious Island",
        image: mysteriousIsland,
        rating: 5,

        synopsis: [
            "Three adventurous girls set out on a boat ride. Accidentally, they land on an island full of mysteries. What did they find there? Did they ever come back?"
        ],

        details: [
            { label: "Reading Age", value: "3 – 11 years" },
            { label: "Publisher", value: "Author In Me" },
            { label: "No. of pages", value: "24" },
            { label: "Released", value: "23 January, 2019" },
            { label: "Language", value: "English" },
        ],

        amazonLink: "",
        publisherLink: "",
        publisherName: "Author In Me",
    },
];

export default booksData;
