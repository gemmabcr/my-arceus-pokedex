import React, {Fragment} from 'react'

const PokemonEvolutionInfo = ({urlEvolutionData}) => {
  const [loading, setLoading] = React.useState(true)
  const [evolutionData, setEvolutionData] = React.useState([])

  React.useEffect(()=>{
    fetch(urlEvolutionData)
      .then((response)=>response.json())
      .then(data=>setEvolutionData(data.chain.evolves_to[0]))
      .catch(error=>console.log(error))
      .finally(()=>{setLoading(false)})
  }, [urlEvolutionData])

  console.log(evolutionData)

  return (
    <Fragment>
      {loading && <p>Loading...</p>}
      {!loading &&
        <p>Evoluciona a: </p>
      }
    </Fragment>
  )
}

export default PokemonEvolutionInfo