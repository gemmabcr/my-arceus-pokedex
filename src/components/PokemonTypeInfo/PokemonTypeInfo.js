import React from 'react'

const PokemonTypeInfo = ({urlTypePokemon}) => {
  const [loading, setLoading] = React.useState(true)
  const [typePokemon, setTypePokemon] = React.useState('')

  React.useEffect(()=>{
    fetch(urlTypePokemon)
      .then((response)=>response.json())
      .then(data => {
        let spanishType = data.names.filter(item => item.language.name === 'es')
        setTypePokemon(spanishType[0].name)
      })
      .catch(error => console.log(error))
      .finally(()=>setLoading(false))
  }, [urlTypePokemon])

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading &&
        <span>{typePokemon}</span>
      }
    </div>
  )
}

export default PokemonTypeInfo