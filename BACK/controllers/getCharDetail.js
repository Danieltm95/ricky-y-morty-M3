// var axios = require('axios');
// const { filterData, URL } = require ('./getCharById.js')


// const getCharDetail = (req, res) => {

//     const params = req.params;

//     axios.get(`${URL}${params.id}`).then(({data}) => {
//         const char = filterData(data);
//         res.status(200).json({...char, status: data.status, origin: data.origin});
//     }).catch((err) => {
//         res.status(500).json({message: err})
//     })
// };






const fetch = require('node-fetch')

 let getCharDetail = (res, ID) => {
 console.log(ID)
    fetch(` https://rickandmortyapi.com/api/character/${ID}`)
        .then((response) => response.json())
        .then((data) => {

            // console.log(data)
            let char = {
                id: data.id,
                name: data.name,
                image: data.image,
                gender: data.gender,
                species: data.species,
                status: data.status,
                origin: data.origin
            }
            res.end(JSON.stringify(char));
        })
        .catch((error) => {
            res.writeHead(200, { 'Content-Type' : 'text/plain'})
            res.end(error.message)})


};

module.exports = { getCharDetail };


// var axios = require("axios");
// const URL = "https://rickandmortyapi.com/api/character/";

// const getCharDetail = (req, res) => {
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
//         status: data.status,
//         origin: data.origin,
//       };
//       res.status(200).json(obj);
//     })
//     .catch((err) => {
//       res.status(500).json({ message: err });
//     });
// };

// module.exports = { getCharDetail };