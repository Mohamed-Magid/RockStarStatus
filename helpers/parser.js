const parser = (platforms) => {
    let parsed = platforms
    .map(platforms => platforms.split(' - '))
    .reduce((plat, line) => {
        plat[line[0]] = plat[line[0]] || [];
        plat[line[0]].push({
            service: line[1],
            status: line[2].toLowerCase()
        });
        return plat;
    }, {})
    
    return parsed;
}
    
module.exports = parser;