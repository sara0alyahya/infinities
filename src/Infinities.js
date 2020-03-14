import React from "react"
import Infinity from "./Infinity"


class Infinities extends React.Component {
    render() {
        const Infinites = [
            {
                name: ["Sara", "Alyahya"],
                id: 1,
                age: 24,
                hometown: "Riyadh",
                interest: ["Netflix", "Shoppping", "Gamess", "Discover new places"],
                activities: ["work out", "hiking", "swim", "running", "group plays"]
            },
            {
                name: ["Sara", "Alyahya"],
                id: 2,
                age: 42,
                hometown: "Khubar",
                interest: ["Netflix", "not Shoppping", "Gamess", "Discover new places", "cooking"],
                activities: ["work out", "hiking", "swim", "running", "group plays", "travelling"]
            },
            {
                name: ["Sara", "Alyahya"],
                id: 3,
                age: 24,
                hometown: "Abha",
                interest: ["Netflix", "Shoppping", "Gamess", "Discover new places"],
                activities: ["work out", "hiking", "swim", "running", "group plays"]
            },
            {
                name: ["Sara", "Alyahya"],
                id: 4,
                age: 42,
                hometown: "Makkah",
                interest: ["Netflix", "not Shoppping", "Gamess", "Discover new places", "cooking"],
                activities: ["work out", "hiking", "swim", "running", "group plays", "travelling"]
            },
            {
                name: ["Sara", "Alyahya"],
                id: 5,
                age: 24,
                hometown: "Dubai",
                interest: ["Netflix", "Shoppping", "Gamess", "Discover new places"],
                activities: ["work out", "hiking", "swim", "running", "group plays"]
            },
            {
                name: ["Sara", "Alyahya"],
                id: 6,
                age: 42,
                hometown: "Riyadh",
                interest: ["Netflix", "not Shoppping", "Gamess", "Discover new places", "cooking"],
                activities: ["work out", "hiking", "swim", "running", "group plays", "travelling"]
            },
            {
                name: ["Sara", "Alyahya"],
                id: 7,
                age: 24,
                hometown: "Riyadh",
                interest: ["Netflix", "Shoppping", "Gamess", "Discover new places"],
                activities: ["work out", "hiking", "swim", "running", "group plays"]
            },
            {
                name: ["Sara", "Alyahya"],
                id: 8,
                age: 42,
                hometown: "Riyadh",
                interest: ["Netflix", "not Shoppping", "Gamess", "Discover new places", "cooking"],
                activities: ["work out", "hiking", "swim", "running", "group plays", "travelling"]
            }
        ]

        const infinityy = Infinites.map(person => {
            return <Infinity sara={person} key={person.id} />
        })

        return (
            <div >
                <h1> Infinities</h1>
                {infinityy}
            </div>
        )
    }
}

export default Infinities