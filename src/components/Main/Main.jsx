import "./Main.scss"

const Main = ({ data }) => {


  return (
    <div className="main-container">

      {data.map(item => {

        const { id, title, date, desc, image } = item

        return (
          <div key={id} className="card-container" >
            <img src={image} alt="" />
            <div className="text">
              <h2>{title}</h2>
              <h4>{date}</h4>
              <p>{desc}</p>
            </div>
          </div>
        )
      })
      }
    </div >
  )
}

export default Main