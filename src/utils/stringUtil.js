export const camelToTile = (camelCasedString) => {
    let firstCap = camelCasedString.search('[A-Z]{1}');
    return camelCasedString.at(0).toUpperCase() + camelCasedString.substring(1,firstCap) +  " " + [...camelCasedString.substring(firstCap).match('[A-Z]{1}[a-z]+')].join(" ");
}