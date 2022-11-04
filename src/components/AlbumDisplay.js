import React from 'react'
import { StyledAlbumDisplay  } from './styles/AlbumDisplay.styled'
import FramePhoto from "./FramePhoto"
import ImgFrame1 from "../assets/burna.png"
import ImgFrame2 from "../assets/adekunle.png"
import ImgFrame3 from "../assets/dread.png"



function AlbumDisplay() {
  return (
    <StyledAlbumDisplay>
        <FramePhoto 
          className="first"
          colors="89.79deg, #AD4C1D -19.39%, #F6B726 123.38%"
          title="Daily Vibes 1"
          text="Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage..... "
          imgUrl={ImgFrame1}
          />
        <FramePhoto 
          className="second"
          colors ="89.79deg, #C61522 -19.39%, #030304 123.38%"
          title="Daily Vibes 2"
          text = "Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd....  "
          imgUrl={ImgFrame2}
          />
        <FramePhoto 
          className="third"
          colors = "89.79deg, #3D66A8 -19.39%, #91AAC7 123.38%"
          title ="Daily Vibes 3"
          text = "Koffee, Chris Brown, WSTRN, Drake, Future, Burna Boy"
          imgUrl = {ImgFrame3}
          />
        <FramePhoto 
          className="fourth"
          colors ="89.79deg, #AD4C1D -19.39%, #F6B726 123.38%"
          title="Daily Vibes 1"
          text="Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage..... "
          imgUrl={ImgFrame1}
          />
        <FramePhoto 
          className="fifth"
          colors="89.79deg, #C61522 -19.39%, #030304 123.38%"
          title="Daily Vibes 2"
          text = "Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd....  "
          imgUrl={ImgFrame2}
          />
        <FramePhoto 
          className="sixth"
          colors = "89.79deg, #3D66A8 -19.39%, #91AAC7 123.38%"
          title ="Daily Vibes 3"
          text = "Koffee, Chris Brown, WSTRN, Drake, Future, Burna Boy"
          imgUrl = {ImgFrame3}
          />
        
    </StyledAlbumDisplay>
  )
}

export default AlbumDisplay