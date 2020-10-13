import React from 'react';
import Video from '../works/Video';

const popularWorksData = [
    {
        id: 1,
        title: "Moonlight Sonata -  Piano Sonata No. 14",
        composer: "Ludwig van Beethoven",
        link: "https://www.youtube.com/watch?v=4Tr0otuiQuU",
    },
    {
        id: 2,
        title: "The Four Seasons",
        composer: "Antonio Vivaldi",
        link: "https://www.youtube.com/watch?v=GRxofEmo3HA",
    },
    {
        id: 3,
        title: "Eine kleine Nachtmusik",
        composer: "Wolfgang Amadeus Mozart",
        link: "https://www.youtube.com/watch?v=o1FSN8_pp_o",
    },
    {
        id: 4,
        title: "Ride of the Valkyries",
        composer: "Richard Wagner",
        link: "https://www.youtube.com/watch?v=Ow-HSbARuXk",
    },
    {
        id: 5,
        title: "Für Elise ('Bagatelle in A minor')",
        composer: "Ludwig van Beethoven",
        link: "https://www.youtube.com/watch?v=e1UQopeqO34",
    },
    {
        id: 6,
        title: "Swan Lake suite",
        composer: "Piter Tchaikovesky",
        link: "https://www.youtube.com/watch?v=-sdWzUYEuZI",
    },
    {
        id: 7,
        title: "Dance of the Sugar-Plum Fairy",
        composer: "Piter Tchaikovesky",
        link: "https://www.youtube.com/watch?v=4rTjJUcJNAw",
    },
    {
        id: 8,
        title: "Funeral March in C minor, op. 72 no. 2",
        composer: "Fryderyc Chopin",
        link: "https://www.youtube.com/watch?v=xqiyeJiwECE",
    },
    {
        id: 9,
        title: "Hallelujah Chorus",
        composer: "Händel Messiah",
        link: "https://www.youtube.com/watch?v=usfiAsWR4qU",
    },
    {
        id: 10,
        title: " By the Beautiful Blue Danube",
        composer: "Johann Strauss II",
        link: "https://www.youtube.com/watch?v=_CTYymbbEL4",
    },
    {
        id: 11,
        title: "In the Hall of the Mountain King from 'Peer Gynt'",
        composer: "Edvard Grieg",
        link: "https://www.youtube.com/watch?v=xrIYT-MrVaI",
    },
    {
        id: 12,
        title: "Toccata and Fugue in D Minor",
        composer: "Johann Sebastian Bach",
        link: "https://www.youtube.com/watch?v=ho9rZjlsyYY",
    },
    {
        id: 13,
        title: "Symphony No. 40 in G minor, K. 550",
        composer: "Wolfgang Amadeus Mozart",
        link: "https://www.youtube.com/watch?v=JTc1mDieQI8",
    },
    {
        id: 14,
        title: "Bolero",
        composer: "Maurice Ravel",
        link: "https://www.youtube.com/watch?v=r30D3SW4OVw",
    },
    {
        id: 15,
        title: "Etiuda c-moll Op.10 Nr 12",
        composer: "Fryderyc Chopin",
        link: "https://www.youtube.com/watch?v=cQnC3qqO93w",
    }
]

const PopularWorks = () => {

    return (
        <div className="about--video--box">
            {popularWorksData.map(work => {
                return <div className="popular--box" key={work.id} id={work.id}>
                    <iframe className="popular--video" src={work.link}></iframe>
                    <p className="popular--title">{work.title}</p>
                    <p className="popular--composer--name">{work.composer}</p>
                    <button className="popular--arrow arrow--left">
                        <i className="fa fa-angle-left" />
                    </button>
                    <button className="popular--arrow arrow--right">
                        <i className="fa fa-angle-right" />
                    </button>
                </div>
            })}
        </div>
    )
}

export default PopularWorks;