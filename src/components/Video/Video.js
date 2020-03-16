import React from "react";
import PlayButton from "../PlayButton/PlayButton";
import "./Video.styles.scss";

export default function({ children, ...props }) {
  const videoRef = React.useRef(null);
  const [playing, setPlaying] = React.useState(false);

  // it is a function that check if video is playing
  //   const isVideoPlaying = video =>
  //     !!(
  //       video.currentTime > 0 &&
  //       !video.paused &&
  //       !video.ended &&
  //       video.readyState > 2
  //     );

  const play = function() {
    if (!videoRef.current) return;
    setPlaying(true);

    videoRef.current.play();
  };
  const pause = function() {
    if (!videoRef.current) return;
    setPlaying(false);

    videoRef.current.pause();
  };
  return (
    <div className="video__container">
      <video {...props} ref={videoRef} onClick={pause}>
        {children}
      </video>
      {!playing && (
        <>
          <PlayButton onClick={play} className="video__play" />
          <span className="video__overlay" />
        </>
      )}
    </div>
  );
}
