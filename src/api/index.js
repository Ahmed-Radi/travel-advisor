import axios from "axios";


export const getPlacesData = async (type, sw, ne) => {
    let URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`
    try {
        const { data: { data } } = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': '34ffc07c71msh599776130e61ca2p15cbe6jsnc63403ce78c8'
            }
        })
        return data;
    } catch (e) {
        console.log(e)
    }
}