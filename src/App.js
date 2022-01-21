import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TypeContainer from './TypeContainter';
import DeleteIcon from '@mui/icons-material/Delete';


function App() {

  const url = 'https://pokeapi.co/api/v2/pokemon/?limit=1118'

  const [pokemonData, setPokemonData] = useState(null)
  const [allPokemon, setAllPokemon] = useState([])
  const [pokemon, setPokemon] = useState([])
  const [pokemonTeam, setPokemonTeam] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    loadPokemon()
  }, [pokemon])

  const loadPokemon = () => {
    axios.get(pokemon)
      .then(resp => {
        setPokemonData(resp.data)
      })
  }

  const loadData = () => {
    axios.get(url)
      .then(resp => {
        setAllPokemon(resp.data.results)
      })
  }

  const addToTeam = () => {
    if (pokemonTeam.length <= 5) {
      setPokemonTeam(prevTeam =>
        [...prevTeam, pokemonData]
      )
      setPokemon([])
    } else {
      window.alert('You can have no more than 6 pokemon')
      setPokemon([])
    }

  }
  const deleteToTeam = (index) => {
    setPokemonTeam(prevTeam => prevTeam.filter((item, i) => index !== i))
  }
  console.log(pokemonTeam)

  return (
    <div className="App">
      <div className='header'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/404px-International_Pok%C3%A9mon_logo.svg.png" className='header_img' alt="Girl in a jacket" />
      </div>


      <div className='contain'>
        <h1 className='title_contain'>Select a Pokémon</h1>
        <FormControl sx={{ width: 500 }} >
          <InputLabel id="demo-simple-select-label">Pokémon</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={pokemon}
            className='capitalize_letter'
            label="Age"
            onChange={(e) => setPokemon(e.target.value)}
          >
            {
              allPokemon.map(({ name, url, index }) => (
                <MenuItem value={url} key={index} className='capitalize_letter'>{name}</MenuItem>
              ))
            }
          </Select>
        </FormControl>

        <div className='pokemon_team'>
          <div className='your_team'>
            <h1>Your Team</h1>

            <div className='contain_team'>
              {
                pokemonTeam.length !== 0 && (
                  pokemonTeam.map((pok, index) =>
                    <Card sx={{ maxWidth: 245, maxHeight: 460 }} className='card card2'>
                      <CardMedia
                        component="img"
                        image={pok.sprites.front_default}
                        alt="Pokémon"
                        className='pokemon_img'
                      />
                      <DeleteIcon className='delete_icon' onClick={() => deleteToTeam(index)} />
                    </Card>)
                )
              }
            </div>

          </div>
          {
            (pokemonData?.sprites?.front_default) && (
              <div className='contein_choose'>
                <Card sx={{ width: 245, height: 410 }} className='card'>
                  {<CardMedia
                    component="img"
                    image={pokemonData.sprites.front_default}
                    alt="Pokémon"
                  />}
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='capitalize_letter'>
                      {pokemonData.name}
                    </Typography>
                    <div className='types_container'>
                      {pokemonData.types.map(type =>
                        <TypeContainer type={type.type.name} />
                      )}
                    </div>
                  </CardContent>
                  <CardActions className='button_card'>
                    <Button size="small">Show Stats</Button>
                    <Button size="small" onClick={() => addToTeam()}>Add to team</Button>
                  </CardActions>
                </Card>
              </div>
            )
          }
        </div>
        <div className='confirm_button'>
          <Button variant="contained">Add team</Button>
        </div>
      </div>
    </div >
  );
}

export default App;
