import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Drum extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value:""

    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) =>{
    
    console.log(e)
    e.target.lastChild.play()
    this.setState({
      value:e.target.id
    })
    e.target.classList.add("act")
    setTimeout(()=>{e.target.classList.remove("act")},100)
    
  }




  componentDidMount(){
    document.addEventListener('keydown',(e)=>{
      if(document.getElementById(e.key.toUpperCase())){
      let i = document.getElementById(e.key.toUpperCase());
      i.play();
      this.setState({
        value: i.parentElement.id
      })
      i.parentElement.classList.add("act")
      setTimeout(()=>{i.parentElement.classList.remove("act")},100)
    }
      
    })
  }





 


  render(){
    return (

        <div id="drum-machine">
          <div id="pads">

            <div id="clap" className="drum-pad" onClick={this.handleClick}>Q
              <audio id="Q" className = "clip" src = "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/12[kb]brightclap2.aif.mp3"></audio>
            </div>

            <div id="cymbal" className="drum-pad" onClick={this.handleClick}>W
              <audio id="W" className = "clip" src = "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Cymbals/100[kb]curiouscym1.aif.mp3"></audio>
            </div>

            <div id="hat" className="drum-pad" onClick={this.handleClick}>E
              <audio id="E" className = "clip" src = "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/10[kb]brightchh.aif.mp3"></audio>
            </div>

            <div id="kick" className="drum-pad" onClick={this.handleClick}>A
              <audio id="A" className = "clip" src = "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/16[kb]808bd.aif.mp3"></audio>
            </div>

            <div id="ride" className="drum-pad" onClick={this.handleClick}>S
              <audio id="S" className = "clip" src = "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Rides/87[kb]cleanride.aif.mp3"></audio>
            </div>

            <div id="snare" className="drum-pad" onClick={this.handleClick}>D
              <audio id="D" className = "clip" src = "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/57[kb]acoustic_snare.aif.mp3"></audio>
            </div>

            <div id="tom" className="drum-pad" onClick={this.handleClick}>Z
              <audio id="Z" className = "clip" src = "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/36[kb]dissonant_tom.aif.mp3"></audio>
            </div>

            <div id="high-tom" className="drum-pad" onClick={this.handleClick}>X
              <audio id="X" className = "clip" src = "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/35[kb]hitom.aif.mp3"></audio>
            </div>

            <div id="tabla" className="drum-pad" onClick={this.handleClick}>C
              <audio id="C" className = "clip" src = "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Tabla/61[kb]dhi.aif.mp3"></audio>
            </div>


          </div>
          <div id="display">{this.state.value}</div>
        </div>






    )
  }

}














ReactDOM.render(
  

<Drum/>,

  document.getElementById('root')
);

