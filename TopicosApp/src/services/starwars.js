import axios from "axios";


export default async function BuscaNomeAleat() {
    const randomPersonId = Math.floor(Math.random() * 50) + 1;
    
    try {
        const response = await axios.get('https://swapi.dev/api/people/' + randomPersonId);
        const name = response.data.name;
        const [firstName, ...restName] = name.split(' ');
        console.log({ firstName, restName})
        const ageResponse = await axios.get(`https://api.agify.io/?name=${firstName}`);
        const age = ageResponse.data.age;

        return {name, age };
    } catch (error) {
        console.error({ msg: error });
        return null;
    }
}

export async function CepSearch(cep) {

    const result = await axios.get(`https://brasilapi.com.br/api/cep/v2/${cep}`)
    return result.data;

}

export async function ConectaLocalhost() {
    const result = await axios.get('http://localhost:3000/users', {
        headers: {
            'Authorization': 'keyadmin'
        }
    })
    console.log({ data: result.data });
    return result.data;
}