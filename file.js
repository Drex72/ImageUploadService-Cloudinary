import fetch from "node-fetch";

const testResponse = async () => {
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            "image": "images/preview.jpg"
        }
    }
    const response = await fetch('http://localhost:3000/')
    console.log(response)
}
testResponse()