const React = require('react')
const Default = require('../Default')

function Show(data) {
  return (
    <Default>
      <h2>{data.place.name}</h2>
      <img src={data.place.pic} alt={data.place.name} />
      <h3>Location: {data.place.city}, {data.place.state}</h3>
      <h4>Cuisines: {data.place.cuisines}</h4>
      <section>
        <h1>Ratings</h1>
        <h3>No ratings yet...</h3>
      </section>
      <section>
        <h1>Comments</h1>
        <h3>No comments yet...</h3>
      </section>
      <a href={`/places/${data.id}/edit`} className="btn btn-warning">
        Edit
      </a>
      <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
        <button type="submit" className="btn btn-danger">
          Delete
        </button>
      </form>
    </Default>
  )
}

module.exports = Show
    




module.exports = Show;