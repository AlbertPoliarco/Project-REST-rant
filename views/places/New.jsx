const React = require('react')
const Def = require('../Default')

function New_form () {
  return (
    <Def>
      <main>
        <h1>Add a New Place</h1>
        <form method="POST" action="/places">
          {/* Place Name */}
        <div className="form-group">
          <label htmlFor="name">Place Name</label>
          <input className="form-control" id="name" name="name" required />
        </div>
          {/* Place Picture */}
        <div className="form-group">
          <label htmlFor="pic">Place Picture</label>
          <input className="form-control" id="pic" name="pic" />
        </div>
          {/* City */}
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input className="form-control" id="city" name="city" />
        </div>
          {/* State */}
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input className="form-control" id="state" name="state" />
        </div>
        {/* Cuisines */}
        <div className="form-group">
          <label htmlFor="cuisines">Cuisines</label>
          <input className="form-control" id="cuisines" name="cuisines" required />
        </div>
        {/* Add Place Btn */}
        <input className="btn btn-primary" type="submit" value="Add Place" />
        </form>
      </main>
    </Def>
    )
}

module.exports = New_form;