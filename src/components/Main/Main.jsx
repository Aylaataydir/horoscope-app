import "./Main.scss"

const Main = ({ data }) => {


  return (
  
      <div className="main-container" >
        {data.map(item => {

          const { id, title, date, desc, image } = item

          return (
            <div key={id} className="card-container" >
              <img src={image} alt="" />
              <div className="text">
                <h3>{title}</h3>
                <h5>{date}</h5>
                <p className="desc">{desc}</p>
              </div>
            </div>
          )
        })
        }
      </div>
  )
}

export default Main