
import 'bootstrap/dist/css/bootstrap.min.css';
import imagenUno from './psychMove.gif'



    const MyComponent = () => {
        return (
          <div className="container" data-cy="card-container">
            <div className="row">
              <div className="col-sm-12 col-md-4 mb-4">
                <div className="card" data-cy="card-1">
                  <img src={imagenUno} className="card-img-top" alt="Card 1" data-cy="card-img-1" />
                  <div className="card-body">
                    <h5 className="card-title">Card 1</h5>
                    <p className="card-text">Some description for Card 1.</p>
                  </div>
                </div>
              </div>
      
              <div className="col-sm-12 col-md-4 mb-4">
                <div className="card" data-cy="card-2">
                  <img src={imagenUno} className="card-img-top" alt="Card 2" data-cy="card-img-2" />
                  <div className="card-body">
                    <h5 className="card-title">Card 2</h5>
                    <p className="card-text">Some description for Card 2.</p>
                  </div>
                </div>
              </div>
      
              <div className="col-sm-12 col-md-4 mb-4">
                <div className="card" data-cy="card-3">
                  <img src={imagenUno} className="card-img-top" alt="Card 3" data-cy="card-img-3" />
                  <div className="card-body">
                    <h5 className="card-title">Card 3</h5>
                    <p className="card-text">Some description for Card 3.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      };
      
      export default MyComponent;