import React from 'react'
import './sound-board.css'
import { SOUND_BOARD } from '../../constants/imageConstant'
import { Howl, Howler } from 'howler'

const SoundBoard = () => {
  // const [selected, setSelected] = useState()

  const SoundPlay = (src) => {
    const sound = new Howl({
      src,
    })
    sound.play()
    // sound.pause()
  }

  const RenderButtonAndSound = () => {
    return SOUND_BOARD.sound_board.map((item, index) => (
      //   <div onClick={() => setSelected({ selected: index })}>
      <button
        key={index}
        // style={{
        //   border: selected === index ? '2px solid #fff' : '',
        //   color: selected === index ? ' #fff' : '',
        // }}
        onClick={() => SoundPlay(item.sound)}
        // className={`btn-sound ${selected === index ? 'active' : ''}`}
        className="btn-sound"
      >
        {item.label}
      </button>
      //   </div>
    ))
  }

  Howler.volume(1.0)
  return (
    <div className="App-sound-board">
      <div className="container-sound-board">{RenderButtonAndSound()}</div>
    </div>
  )
}

// class SoundBoard extends Component {
//   state = {
//     selected: '',
//   }

//   SoundPlay = (src) => {
//     const sound = new Howl({
//       src,
//     })
//     sound.play()
//   }

//   //   StopSoundPlay = (src) => {
//   //     const sound = new Howl({
//   //       src,
//   //     })
//   //     sound.stop()
//   //   }

//   RenderButtonAndSound = () => {
//     return SOUND_BOARD.sound_board.map((item, index) => (
//       <button
//         key={index}
//         style={{
//           border: this.state.selected === index ? '2px solid #fff' : '',
//           color: this.state.selected === index ? ' #fff' : '',
//         }}
//         onClick={() => this.SoundPlay(item.sound)}
//         // className={`btn-sound ${selected ? 'active' : ''}`}
//         className="btn-sound"
//       >
//         {item.label}
//       </button>
//     ))
//   }

//   render() {
//     Howler.volume(1.0)
//     return (
//       <div className="App-sound-board">
//         <div className="container-sound-board">
//           {this.RenderButtonAndSound()}
//         </div>
//       </div>
//     )
//   }
// }
export default SoundBoard
