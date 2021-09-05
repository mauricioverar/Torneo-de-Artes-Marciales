let personajes = (() => {
    const url = "http://localhost:5500/dbz.json"//ojo q sea la server
    const getData = async () => {
        const res = await fetch(url)
        const data = await res.json()
        return data
    };
    
    return { getData};
})();

export default personajes;