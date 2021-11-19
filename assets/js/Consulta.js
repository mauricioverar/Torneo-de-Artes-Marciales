let personajes = (() => {
    var puerto = location.port;
    console.log(puerto)
    //const url = "http://localhost:5500/dbz.json"//ojo q sea la server
    const url = `http://localhost:${puerto}/dbz.json`
    //const url = "http://localhost:${puerto}/dbz.json"//ojo q sea la server
    const getData = async () => {
        const res = await fetch(url)
        const data = await res.json()
        console.log( 'data '+ data)

        return data
    };
    console.log( 'getData '+ { getData})
    
    return { getData};
})();

export default personajes;