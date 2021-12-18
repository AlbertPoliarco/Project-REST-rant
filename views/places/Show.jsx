const React = require('react')
const Default = require('../Default')

function Show(data) {
  return (
    <Default>
      <div className='row'>
        <div className='col-sm-6'>
          <img src={data.place.pic} alt={data.place.name} />
          <h3>
            Located in {data.place.city}, {data.place.state}
          </h3>
        </div>
        <div className="col-sm-6">
          ... 
          <h2>
            Description
          </h2>
          <h3>
            {data.place.showEstablished()}
          </h3>
          <h4>
            Serving {data.place.cuisines}
          </h4>
        </div>
      </div>
    </Default>
  )
}

module.exports = Show;