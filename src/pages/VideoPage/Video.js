import React, { useState } from 'react'
import './Video.css'
import ReactPlayer from 'react-player/lazy'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
const videoData = [
  {
    id: 1,
    video: 'https://youtu.be/U9pGr6KMdyg',
    thumbnail:
      'https://i.ytimg.com/vi/U9pGr6KMdyg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCnNs-uVhbbdZ0r9reIvFus_N5Cyw',
  },

  {
    id: 2,
    video: 'https://youtu.be/ywwTbMd_scc',
    thumbnail:
      'https://i.ytimg.com/vi/ywwTbMd_scc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAEF9A7H-tMRPPaywlvkBF-GDi-cg',
  },

  {
    id: 3,
    video: 'https://youtu.be/Y2Lu0o3S2sU',
    thumbnail:
      'https://i.ytimg.com/vi/Y2Lu0o3S2sU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDl_lSGKPtJ6sen-vQj6sHp09nNrA',
  },

  {
    id: 4,
    video: 'https://youtu.be/i0AjtpI81xs',
    thumbnail:
      'https://i.ytimg.com/vi/i0AjtpI81xs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB4bNU-rWbDvpk8OT97ZOtuo732Bw',
  },

  {
    id: 5,
    video: 'https://youtu.be/fDe-UC2ff-U',
    thumbnail:
      'https://i.ytimg.com/vi/_tileyCRZlA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAlH1mXD70s_OKX7Scxqw75ABTBhA',
  },

  {
    id: 6,
    video: 'https://youtu.be/RpTrslUCVVQ',
    thumbnail:
      'https://i.ytimg.com/vi/RpTrslUCVVQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZpxtAH2SzPTkuCL2a1tLraiuz6g',
  },
  {
    id: 7,
    video: 'https://youtu.be/YQ5Jv4x_Hp0',
    thumbnail:
      'https://i.ytimg.com/vi/YQ5Jv4x_Hp0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDVKjS8ndnuP-_VSAYgtEL3yYSLAA',
  },
  {
    id: 8,
    video: 'https://youtu.be/AEVaK0e1kTE',
    thumbnail:
      'https://i.ytimg.com/vi/AEVaK0e1kTE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAzHl2fGqcEILvES23jKvE0d_8YBg',
  },
  {
    id: 9,
    video: 'https://youtu.be/YykjpeuMNEk',
    thumbnail:
      'https://i.ytimg.com/vi/YykjpeuMNEk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB3lDWa0M4uBTytpu8it2sy3rIpvw',
  },
  {
    id: 10,
    video: 'https://youtu.be/5Eqb_-j3FDA',
    thumbnail:
      'https://i.ytimg.com/vi/5Eqb_-j3FDA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdC2wIvS6CPzy6nlrobWaZ4UEVVw',
  },
]

const Video = () => {
  const [select, setSelected] = useState(videoData[0].video)

  return (
    <div className="video">
      <nav className="videonav">
        <h2>Video Player</h2>
      </nav>
      <div className="player">
        <ReactPlayer
          url={select}
          // width="800px"
          // height="500px"
          controls
          playing={true}
          preload={'auto'}
        />
      </div>

      <p style={{ fontSize: '26px', textAlign: 'center' }}> Select videos </p>

      <div className="moreVideos">
        <Swiper
          spaceBetween={70}
          grabCursor={true}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            835: {
              width: 865,
              slidesPerView: 3,
            },

            768: {
              width: 768,
              slidesPerView: 0,
            },
            426: {
              width: 426,
              slidesPerView: 4,
            },
          }}
        >
          {videoData.map((curr) => (
            <SwiperSlide>
              <div
                className="vidcircle"
                key={curr.id}
                onClick={() => setSelected(curr.video)}
              >
                <img src={curr.thumbnail} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Video
