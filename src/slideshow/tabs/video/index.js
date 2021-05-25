import { useState, useEffect } from "react";
import "./videoStyles.css";
import VideoNavigator from "./videoNavigator/videoNavigator";

const videoList = [
  {
    title: "Shinkai",
    link: "https://www.youtube.com/embed/vRPCAAUBMms",
    desc: `Music/Vocal：Eve Arrange：Numa Movie：Mariyasu Additional
          musician：Masaki Hori Recorded & Mixed by Masashi Uramoto (Soi
          Co.,Ltd) Recorded at Aobadai Studio Inc. Assisted by Miyuki Nakamura
          (Aobadai Studio Inc.) Mixed at Soi Studio`,
  },
  {
    title: "KaiKai Kitan",
    link: "https://www.youtube.com/embed/i1P-9IspBus",
    desc: `Jujutsu Kaisen OP Full Song "Kaikai Kitan" by Eve
           TV Anime "Sorcery Fight" Opening Theme Full
           Eve - Kaikai Kitan
           Lyrics: https://animesonglyrics.com/jujutsu-k...
           Buy/Stream:
           https://tf.lnk.to/kaikaikitan
    `,
  },
  {
    title: "Ao no Waltz",
    link: "https://www.youtube.com/embed/pyDCubgU57g",
    desc: `MV Staff Director: Nobutaka Yoda (10GAUGE) Animation: Bonds Co., Ltd. Special Thanks: Kotaro Tamura Animation movie "Jose, the Tiger and the Fish" Production Committee © 2020 Seiko Tanabe / KADOKAWA / Josee Project --- Animation movie "Jose, the Tiger and the Fish" Tachi ”December 25 (Friday) National Road Show`,
  },
  {
    title: "Tracing that dream",
    link: "https://www.youtube.com/embed/sAuEeM_6zpk",
    desc: `Downloading and streaming now available: https://orcd.co/adbvzwj
           Twitter: https://twitter.com/YOASOBI_staff
           Music: Ayase (https://twitter.com/ayase_0404)
           Vocal: ikura (https://twitter.com/ikutalilas)`,
  },
  {
    title: "Probably",
    link: "https://www.youtube.com/embed/8iuLXODzL04",
    desc: `Downloading and streaming now available: https://orcd.co/adbvzwj Twitter: https://twitter.com/YOASOBI_staff)`,
  },
  {
    title: "Halzion",
    link: "https://www.youtube.com/embed/kzdJkT4kp-A",
    desc: `Download/Streaming Link:
           https://orcd.co/jbpj5zz
           YOASOBI Twitter: https://twitter.com/YOASOBI_staff
           YOASOBI Official HP: https://yoasobi-music.jp`,
  },
];

const Video = () => {
  const [selectedVideo, setSelectedVideo] = useState({});

  const videoRenderer = () => {
    return (
      <div className="video-render">
        <iframe
          width="560"
          height="360"
          title="Shinkai"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          src={selectedVideo.link}
        />
        <div className="video-details">
          <div className="video-title">{selectedVideo.title}</div>
          <div className="video-desc">{selectedVideo.desc}</div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    setSelectedVideo(videoList[0]);
  }, []);

  return (
    <div className="videoContainer">
      <div>{videoRenderer()}</div>
      <div className="centered-navigator">
        <VideoNavigator
          videoList={videoList}
          setSelectedVideo={setSelectedVideo}
          selectedVideo={selectedVideo.title}
        />
      </div>
    </div>
  );
};
export default Video;
