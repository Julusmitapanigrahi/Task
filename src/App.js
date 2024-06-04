import "./App.css"
function App(){
  return(
  <div>
     <div className="box">
        <div class="main">
           <div>
            <h4 className="hrline">Blog</h4>
            <h1>Nunc tellus enim <br/> hendrerit et <br/> dictumst nulla</h1>
            <p>Eros mattis facilisi tempus quis proin consectrtur vitae <br/>et. Lectus habitasse ut tortor, massa, mauris, dis ultrices <br/> tristique mi metus </p>
            <button>Read latest blog</button>
           </div>
           <div className="logo">
           <img src="./logo.png"alt="" className="logo"/>
           </div>
        </div>
     </div>
  </div>
  )
}
export default App;