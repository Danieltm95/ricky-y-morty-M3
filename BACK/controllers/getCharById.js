var axios = require('axios');

function filterData(data) {
    return{
        id: data.id,
        name: data.name,
        image: data.image,
        gender: data.gender,
        species: data.species,
    };
}

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {

    const {id} = req.params;

    axios.get(`${URL}${id}`).then(({data}) => {
        const char = filterData(data);
        res.status(200).json(char);
    }).catch((err) => {
        res.status(500).json({message: err})
    })
};


module.exports ={ getCharById, filterData, URL}

// const fetch = require('node-fetch')

//  let getCharById = (res, ID) => {
//  console.log(ID)
//     fetch(` https://rickandmortyapi.com/api/character/${ID}`)
//         .then((response) => response.json())
//         .then((data) => {

//             // console.log(data)
//             let char = {
//                 id: data.id,
//                 name: data.name,
//                 image: data.image,
//                 gender: data.gender,
//                 species: data.species
//             }
//             res.writeHead(200, { 'Content-Type' : 'application/json'})
//             res.end(JSON.stringify(char));
//         })
//         .catch((error) => {
//             res.writeHead(500, { 'Content-Type' : 'text/plain'})
//             res.end(error.message)})


// };

// module.exports = {getCharById};


// var axios = require("axios");
// const URL = "https://rickandmortyapi.com/api/character/";

// const getCharById = (req, res) => {
//     console.log('hola estoy en char get id')
//   const params = req.params;

//   axios
//     .get(`${URL}${params.id}`)
//     .then(({ data }) => {
//       const obj = {
//         id: data.id,
//         image: data.image,
//         name: data.name,
//         gender: data.gender,
//         species: data.species,
//       };
//       res.status(200).json(obj);
//     })
//     .catch((err) => {
//       res.status(500).json({ message: err });
//     });
// };

// module.exports = {getCharById};