const slugGenerator = (movieName) => movieName.toLowerCase().trim().replace(/[^\w ]+/g,'').replace(/ /g,'-')

module.exports = {
    slugGenerator
}

