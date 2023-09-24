const pokemonGenereation = (generation: number) => {
    switch (generation) {
        case 1:
            return 'https://pokeapi.co/api/v2/pokemon?limit=151';
        case 2:
            return 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=151';
        case 3:
            return 'https://pokeapi.co/api/v2/pokemon?limit=135&offset=251';
        case 4:
            return 'https://pokeapi.co/api/v2/pokemon?limit=107&offset=386';
        case 5:
            return 'https://pokeapi.co/api/v2/pokemon?limit=156&offset=493';
        case 6:
            return 'https://pokeapi.co/api/v2/pokemon?limit=72&offset=649';
        case 7:
            return 'https://pokeapi.co/api/v2/pokemon?limit=88&offset=721';
        case 8:
            return 'https://pokeapi.co/api/v2/pokemon?limit=96&offset=809';
        case 9:
            return 'https://pokeapi.co/api/v2/pokemon?limit=109&offset=905';
        default:
            return 'https://pokeapi.co/api/v2/pokemon?limit=151';
    }
}

const pokemonGames = (name: string) => {
    switch (name) {
        case 'red' || 'blue':
            return 'https://pokeapi.co/api/v2/version-group/1/';
        case 'yellow':
            return 'https://pokeapi.co/api/v2/version-group/2/';
        case 'gold' || 'silver':
            return 'https://pokeapi.co/api/v2/version-group/3/';
        case 'crystal':
            return 'https://pokeapi.co/api/v2/version-group/4/';
        case 'ruby' || 'sapphire':
            return 'https://pokeapi.co/api/v2/version-group/5/';
        case 'emerald':
            return 'https://pokeapi.co/api/v2/version-group/6/';
        case 'firered' || 'leafgreen':
            return 'https://pokeapi.co/api/v2/version-group/7/';
        case 'diamond' || 'pearl':
            return 'https://pokeapi.co/api/v2/version-group/8/';
        case 'platinum':
            return 'https://pokeapi.co/api/v2/version-group/9/';
        case 'heartgold' || 'soulsilver':
            return 'https://pokeapi.co/api/v2/version-group/10/';
        case 'black' || 'white':
            return 'https://pokeapi.co/api/v2/version-group/11/';
        case "black-2" || "white-2":
            return 'https://pokeapi.co/api/v2/version-group/14/';
        case 'x' || 'y':
            return 'https://pokeapi.co/api/v2/version-group/15/';
        case 'omega-ruby' || 'alpha-sapphire':
            return 'https://pokeapi.co/api/v2/version-group/16/';
        case 'sun' || 'moon':
            return 'https://pokeapi.co/api/v2/version-group/17/';
        case 'ultra-sun' || 'ultra-moon':
            return 'https://pokeapi.co/api/v2/version-group/18/';
        case 'lets-go-pikachu' || 'lets-go-eevee':
            return 'https://pokeapi.co/api/v2/version-group/19/';
        case 'sword' || 'shield':
            return 'https://pokeapi.co/api/v2/version-group/20/';
        default:
            return 'https://pokeapi.co/api/v2/pokemon?limit=109&offset=905';
    }
}

export default pokemonGenereation;
export { pokemonGames };