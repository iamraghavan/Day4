const flagRequest = new XMLHttpRequest();
flagRequest.open('GET', 'https://restcountries.eu/rest/v2/all');
flagRequest.send(null);

flagRequest.onload = () => {
    const countries = JSON.parse(flagRequest.responseText);
    
    for(var country of countries){
        const { flag } = country
        console.log(flag);
    }
}