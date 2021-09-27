import React from 'react';
import business from '../business-insider.png';
import yahoo from '../yahoo.png';
import market from '../marketWatch.png';
const Rewards = () =>
  <div className="container-fluid calendarIcon mt-1 pb-5" style={{ backgroundColor: '#FBFBFB' }}>
    <div className="row" style={{ paddingTop: '20%' }}>
      <div className="col-md-6">
        <h1 style={{ color: "#06FFC4" }}>Drogon</h1>
        <h1>Rewards in your Wallet</h1>
        <br />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut velit rhoncus,
          vulputate ante sit amet, sollicitudin eros. Sed vitae nisl nibh. Cras interdum scelerisque massa.
          Aliquam erat volutpat. Nunc hendrerit vehicula sem, ac cursus lectus scelerisque id. Morbi non consectetur
          nibh. Nunc efficitur suscipit tortor ut dictum. Quisque sodales, libero a ullamcorper dictum, justo est congue
          orci, non viverra nulla nisl id nisl. Nunc euismod odio congue sodales aliquet.
        </p>
      </div>
      <div className="col-md-6">
        <div className="row">
          <div className="col-md-6">
            <div className="card" style={{ boxShadow: "4px 7px 4px 4px grey", borderRadius: '15px' }}>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut velit rhoncus, vulputate ante sit
                amet, sollicitudin eros. Sed vitae nisl nibh. Cras interdum scelerisque massa. Aliquam erat volutpat.
                Nunc hendrerit vehicula sem, ac cursus lectus scelerisque id. Morbi non consectetur nibh.
              </p>
            </div>
          </div>
          <div className="col-md-6" style={{ marginTop: '15%' }}>
            <div className="card" style={{ boxShadow: "4px 7px 4px 4px grey", borderRadius: '15px' }}>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut velit rhoncus, vulputate ante sit
                amet, sollicitudin eros. Sed vitae nisl nibh. Cras interdum scelerisque massa. Aliquam erat volutpat.
                Nunc hendrerit vehicula sem, ac cursus lectus scelerisque id. Morbi non consectetur nibh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <h4 className="text-center mt-top" style={{ color: '#707070' }}>As seen In</h4>
        <div className="row">
          <div className="items-center col-md-4">
            <img src={business} alt="business-insider" />
          </div>
          <div className="items-center col-md-4">
            <img src={yahoo} alt="business-insider" />
          </div>
          <div className="items-center col-md-4">
            <img src={market} alt="business-insider" />
          </div>
        </div>
        <br />

      </div>
      <div className="col-md-6">
        <div className="row">
          <div className="col-md-6">
            <div className="card" style={{ boxShadow: "4px 7px 4px 4px grey", borderRadius: '15px' }}>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut velit rhoncus, vulputate ante sit
                amet, sollicitudin eros. Sed vitae nisl nibh. Cras interdum scelerisque massa. Aliquam erat volutpat.
                Nunc hendrerit vehicula sem, ac cursus lectus scelerisque id. Morbi non consectetur nibh.
              </p>
            </div>
          </div>
          <div className="col-md-6" style={{ marginTop: '15%' }}>
            <div className="card" style={{ boxShadow: "4px 7px 4px 4px grey", borderRadius: '15px' }}>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut velit rhoncus, vulputate ante sit
                amet, sollicitudin eros. Sed vitae nisl nibh. Cras interdum scelerisque massa. Aliquam erat volutpat.
                Nunc hendrerit vehicula sem, ac cursus lectus scelerisque id. Morbi non consectetur nibh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

export default Rewards;