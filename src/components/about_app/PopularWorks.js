import React, { useState } from 'react';

const popularWorksData = [
    {
        id: 1,
        title: "Moonlight Sonata -  Piano Sonata No. 14",
        composer: "Ludwig van Beethoven",
        link: "https://www.youtube.com/embed/4Tr0otuiQuU",
    },
    {
        id: 2,
        title: "The Four Seasons",
        composer: "Antonio Vivaldi",
        link: "https://www.youtube.com/embed/GRxofEmo3HA",
    },
    {
        id: 3,
        title: "Eine kleine Nachtmusik",
        composer: "Wolfgang Amadeus Mozart",
        link: "https://www.youtube.com/embed/o1FSN8_pp_o",
    },
    {
        id: 4,
        title: "Ride of the Valkyries",
        composer: "Richard Wagner",
        link: "https://www.youtube.com/embed/Ow-HSbARuXk",
    },
    {
        id: 5,
        title: "Für Elise ('Bagatelle in A minor')",
        composer: "Ludwig van Beethoven",
        link: "https://www.youtube.com/embed/e1UQopeqO34",
    },
    {
        id: 6,
        title: "Swan Lake suite",
        composer: "Piter Tchaikovesky",
        link: "https://www.youtube.com/embed/-sdWzUYEuZI",
    },
    {
        id: 7,
        title: "Dance of the Sugar-Plum Fairy",
        composer: "Piter Tchaikovesky",
        link: "https://www.youtube.com/embed/4rTjJUcJNAw",
    },
    {
        id: 8,
        title: "Funeral March in C minor, op. 72 no. 2",
        composer: "Fryderyc Chopin",
        link: "https://www.youtube.com/embed/xqiyeJiwECE",
    },
    {
        id: 9,
        title: "Hallelujah Chorus",
        composer: "Händel Messiah",
        link: "https://www.youtube.com/embed/usfiAsWR4qU",
    },
    {
        id: 10,
        title: " By the Beautiful Blue Danube",
        composer: "Johann Strauss II",
        link: "https://www.youtube.com/embed/_CTYymbbEL4",
    },
    {
        id: 11,
        title: "In the Hall of the Mountain King from 'Peer Gynt'",
        composer: "Edvard Grieg",
        link: "https://www.youtube.com/embed/xrIYT-MrVaI",
    },
    {
        id: 12,
        title: "Toccata and Fugue in D Minor",
        composer: "Johann Sebastian Bach",
        link: "https://www.youtube.com/embed/ho9rZjlsyYY",
    },
    {
        id: 13,
        title: "Symphony No. 40 in G minor, K. 550",
        composer: "Wolfgang Amadeus Mozart",
        link: "https://www.youtube.com/embed/JTc1mDieQI8",
    },
    {
        id: 14,
        title: "Bolero",
        composer: "Maurice Ravel",
        link: "https://www.youtube.com/embed/r30D3SW4OVw",
    },
    {
        id: 15,
        title: "Etiuda c-moll Op.10 Nr 12",
        composer: "Fryderyc Chopin",
        link: "https://www.youtube.com/embed/cQnC3qqO93w",
    }
]

const PopularWorks = () => {
    const [counter, setCounter] = useState(1);

    const showNextVideo = () => {
        if (counter < popularWorksData.length) {
            setCounter(prev => prev + 1);
        } else {
            setCounter(1);
        }
        console.log(counter);
    }

    const showPrevVideo = () => {
        if (counter > 1) {
            setCounter(prev => prev - 1);
        } else {
            setCounter(popularWorksData.length);
        }
        console.log(counter);
    }

    return (
        <div className="about--video--box">
            {popularWorksData.map(work => {
                return <div className={(counter === work.id) ? "popular--box visibility" : "popular--box"} key={work.id} id={counter}>
                    <iframe className="popular--video" src={work.link} frameborder="0"></iframe>
                    <p className="popular--title">{work.title}</p>
                    <p className="popular--composer--name">{work.composer}</p>
                    <button onClick={showPrevVideo} className="popular--arrow arrow--left">
                        <i className="fa fa-angle-left" />
                    </button>
                    <button onClick={showNextVideo} className="popular--arrow arrow--right">
                        <i className="fa fa-angle-right" />
                    </button>
                </div>
            })}
        </div>
    )
}

export default PopularWorks;