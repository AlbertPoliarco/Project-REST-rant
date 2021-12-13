const React = require('react')
const Def = require('./Default')

function Home () {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <img src="/images/christmas.jpg" alt="christmas tree" class="center" />
                </div>
                <div>
                Photo by <a href="https://unsplash.com/@chadmadden?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chad Madden</a> on <a href="https://unsplash.com/s/photos/christmas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
                </div>
                <a href="/places"><button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
        )
    }
module.exports = Home 