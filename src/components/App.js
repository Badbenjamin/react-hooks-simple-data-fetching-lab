import { useState, useEffect } from "react"// create your App component here

function App() {
    const [dogImage, setDogImage] = useState("")
    const [isLoading, setIstLoading] = useState(true)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                setDogImage(data.message)
                setIstLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>

    console.log(dogImage)

    return (
        <img src={dogImage} alt="A Random Dog" ></img>
    )
}

export default App