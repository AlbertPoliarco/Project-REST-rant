const React = require('react')
const Def = require('./Default')

function Error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                    <img src="/images/beach.jpg" alt="beach" />
                </div>
              <div>
              Photo by <a href="https://unsplash.com/@itstarynnnn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Taryn Kaahanui</a> on <a href="https://unsplash.com/s/photos/free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
              </div>
          </main>
      </Def>
    )
  }

module.exports = Error404