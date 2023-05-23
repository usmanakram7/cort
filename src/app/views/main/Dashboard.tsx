import React, { useEffect, useRef, useState } from "react";

import videosettingopener from "../../assets/images/video-setting-opener.svg";
import profileSquare from "../../assets/images/profilesquare.svg";
import menu from "../../assets/images/menu.svg";
import star1 from "../../assets/images/star1.svg";
import star2 from "../../assets/images/star2.svg";
import share from "../../assets/images/shareIcon.svg";
import arrowLeft from "../../assets/images/Arrow-Left.svg";
import unmutedSound from "../../assets/images/unmuteSound.svg";
import mutedSound from "../../assets/images/muteSound.svg";
import nextPrevVideo from "../../assets/images/next-prev-video.svg";
import playVideoIcon from "../../assets/images/playVideoIcon.svg";
import pauseVideoIcon from "../../assets/images/pauseVideo.svg";
import exitFullScreen from "../../assets/images/exitFullScreen.svg";

const cam1 = require("../../assets/videos/video.mp4");
const cam2 = require("../../assets/videos/video2.mp4");
const cam3 = require("../../assets/videos/video3.mp4");

const Dashboard = () => {
  const [playing, setPlaying] = useState(true);
  const videoRefFullScreen = useRef(null);

  const togglePlayPause = (event, videoRef, isFullScreen = false) => {
    event.stopPropagation();
    if (isFullScreen) {
      videoRefFullScreen.current = videoRef.current;
    }
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  const nextVideo = () => {
    setActiveCameraIndex((prevIndex) => (prevIndex + 1) % cameras.length);
    setPlaying(true);
  };

  const prevVideo = () => {
    setActiveCameraIndex(
      (prevIndex) => (prevIndex - 1 + cameras.length) % cameras.length
    );
    setPlaying(true);
  };

  const CameraSection = ({
    imgSrc,
    live,
    cameraNumber,
    cameraLabel,
    index,
    onCameraClick,
    playing,
    togglePlayPause,
  }) => {
    const videoRef = useRef(null);

    return (
      <div
        className="cursor-pointer
         relative bg-[#070707] rounded-xl"
        onClick={() => onCameraClick(index)}
      >
        <video
          ref={videoRef} // Add this line
          className="w-full h-[244px] rounded-xl"
          src={imgSrc}
          loop={true}
          autoPlay={true}
        />
        {live && (
          <div className="absolute top-2.5 left-2.5 flex items-center px-2 py-1 gap-1.5 rounded bg-livebgclr">
            <div className="w-2 h-2 bg-red rounded"></div>
            <p className="text-white font-poppins font-normal text-sm">Live</p>
          </div>
        )}
        <div className="absolute bottom-2.5 left-5">
          <p className="text-white font-poppins font-normal text-sm">
            Camera #{cameraNumber} {cameraLabel}
          </p>
        </div>
      </div>
    );
  };

  const [activeCameraIndex, setActiveCameraIndex] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const [muted, setMuted] = useState(false);

  const audioMutedFunc = () => {
    setMuted(!muted);
  };

  const handleCameraClick = (index) => {
    setActiveCameraIndex(index);
    setIsFullScreen(true);
  };

  const closeFullscreen = () => {
    setIsFullScreen(false);
    setPlaying(true);
    setIsSidebarOpen(false);
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const cameras = [
    {
      imgSrc: cam1,
      live: true,
      cameraNumber: "#1",
      cameraLabel: "Mate Gate 1",
    },
    {
      imgSrc: cam2,
      live: true,
      cameraNumber: "#2",
      cameraLabel: "hall 1",
    },
    {
      imgSrc: cam3,
      live: true,
      cameraNumber: "#3",
      cameraLabel: "back door",
    },
  ];

  const CameraData = ({ src, objectDetect, dateTime }) => {
    const [openCameraSettings, setOpenCameraSettings] = useState(false);

    const handleCameraOpenSettings = () => {
      setOpenCameraSettings(!openCameraSettings);
    };

    const [star, setStar] = useState(false);

    const handleFavroriteSetting = () => {
      setStar(!star);
    };

    return (
      <>
        {openCameraSettings && (
          <>
            <div className="shadow-md absolute z-50 rounded-xl  top-[120px] left-[60%] flex gap-[6px] bg-[#FFFFFF] px-[30px] py-[12px]">
              <div className="top-[-4px] rotate-45 rounded-[4px] left-[66%] bg-[#FFFFFF]  absolute w-[20px] h-[20px] "></div>
              <img className=" cursor-pointer" src={share} alt="share" />
              {!star ? (
                <img
                  className="cursor-pointer"
                  onClick={handleFavroriteSetting}
                  src={star1}
                  alt="default Star"
                />
              ) : (
                <img
                  className="cursor-pointer"
                  onClick={handleFavroriteSetting}
                  src={star2}
                  alt="Favorite Star"
                />
              )}
            </div>
          </>
        )}
        <div className="relative cursor-pointer mt-[16px] border border-[#D8DBDD] rounded-[10px] flex items-center justify-between py-[9px] px-[16px]">
          <div className="flex items-center justify-between  gap-[6px] ">
            <div className="bg-[#F8F8F8] rounded-md p-[3px]">
              <img src={src} alt="profile" />
            </div>
            <div className="flex flex-col">
              <p className="text-[14px] text-[#3D4D53] leading-[150%] font-medium">
                {objectDetect}
              </p>
              <p className="text-[14px] text-[#3D4D53] leading-[150%] font-medium">
                {dateTime}
              </p>
            </div>
          </div>
          <img onClick={handleCameraOpenSettings} src={menu} alt="menu" />
        </div>
      </>
    );
  };

  return (
    <div className="flex w-100% ">
      <div className="w-full grid grid-cols-3 gap-[10px]">
        {cameras.map((camera, index) => (
          <CameraSection
            key={index}
            imgSrc={camera.imgSrc}
            live={camera.live}
            cameraNumber={camera.cameraNumber}
            cameraLabel={camera.cameraLabel}
            index={index}
            onCameraClick={handleCameraClick}
            playing={playing}
            togglePlayPause={togglePlayPause}
          />
        ))}
      </div>
      {isFullScreen && (
        <div className="fixed flex   top-0 left-0 bottom-0 right-0 h-screen bg-[#070707] ">
          <div
            className={`fixed inset-0 z-50 top-0 left-0 bottom-0 right-0 m-0 p-0 bg-[#070707] flex items-center justify-center${
              isSidebarOpen
                ? " video-container-compressed ease-in-out duration-150"
                : "ease-in-out duration-150"
            }`}
            // onClick={closeFullscreen}
          >
            <video
              ref={videoRefFullScreen}
              className="w-screen h-screen rounded-none object-cover"
              src={cameras[activeCameraIndex].imgSrc}
              loop={true}
              autoPlay={true}
              muted={muted}
            />
            <div className="absolute h-[108px] bg-[#070707]  top-[-4px]  w-full">
              <img
                onClick={closeFullscreen}
                className={`absolute ease-in-out duration-150 left-20 cursor-pointer  ${
                  isSidebarOpen
                    ? "top-0 w-[28px] h-[28px]"
                    : "top-10 w-[24px] h-[24px]"
                }`}
                src={arrowLeft}
              />
            </div>
            <div className="absolute h-[108px] bg-[#070707] bottom-[-4px]   w-full">
              {muted ? (
                <img
                  src={mutedSound}
                  onClick={audioMutedFunc}
                  className={`cursor-pointer ease-in-out duration-150 absolute  left-20  ${
                    isSidebarOpen
                      ? "top-[80%] w-[28px] h-[28px]"
                      : "top-[40%] w-[24px] h-[24px]"
                  }`}
                />
              ) : (
                <img
                  src={unmutedSound}
                  onClick={audioMutedFunc}
                  className={`cursor-pointer ease-in-out duration-150 absolute  left-20 w-[24px] h-[24px] ${
                    isSidebarOpen
                      ? "top-[80%] w-[28px] h-[28px]"
                      : "top-[40%] w-[24px] h-[24px]"
                  }`}
                />
              )}

              <img
                className={`cursor-pointer absolute ease-in-out duration-150 left-[45%] w-[24px] h-[24px] ${
                  isSidebarOpen
                    ? "top-[80%] w-[28px] h-[28px]"
                    : "top-[40%] w-[24px] h-[24px]"
                }`}
                src={nextPrevVideo}
                onClick={(event) => {
                  event.stopPropagation();
                  prevVideo();
                }}
              />

              {playing ? (
                <img
                  onClick={(event) =>
                    togglePlayPause(event, videoRefFullScreen, true)
                  }
                  className={`cursor-pointer absolute ease-in-out duration-150 left-[49.8%] ${
                    isSidebarOpen ? "top-[66%] " : "top-[26%]"
                  }`}
                  src={pauseVideoIcon}
                />
              ) : (
                <img
                  onClick={(event) =>
                    togglePlayPause(event, videoRefFullScreen, true)
                  }
                  className={`cursor-pointer absolute ease-in-out duration-150 left-[49.8%] ${
                    isSidebarOpen ? "top-[66%]" : "top-[26%]"
                  }`}
                  src={playVideoIcon}
                />
              )}

              <img
                className={`cursor-pointer absolute ease-in-out duration-150 rotate-180  left-[55%] w-[24px] h-[24px] ${
                  isSidebarOpen
                    ? "top-[80%] w-[28px] h-[28px]"
                    : "top-[40%] w-[24px] h-[24px]"
                }`}
                src={nextPrevVideo}
                onClick={(event) => {
                  event.stopPropagation();
                  nextVideo();
                }}
              />
              <img
                className={`cursor-pointer absolute ease-in-out duration-150 top-[50%] right-20 w-[24px] h-[24px] ${
                  isSidebarOpen
                    ? "top-[80%] w-[28px] h-[28px]"
                    : "top-[40%] w-[24px] h-[24px]"
                }`}
                src={exitFullScreen}
                onClick={closeFullscreen}
              />
            </div>
          </div>
          <div
            className={`fixed bg-white w-[340px] right-[-340px] top-0 bottom-0 z-[9999999] px-[30px] py-[26px] ${
              isSidebarOpen
                ? "right-[0px] ease-in-out duration-150"
                : "ease-in-out duration-150"
            }`}
          >
            <div>
              <h1 className="text-[#3D4D53] font-medium text-[16px] leading-[150%]">
                Events
              </h1>
              <div className="flex flex-col">
                <CameraData
                  src={profileSquare}
                  objectDetect={"Person Detect"}
                  dateTime={"11:50 AM 12 Jan, 2023"}
                />
              </div>
            </div>
            <div
              className="cursor-pointer absolute top-[50%] left-[-23px] bg-white rounded-l-xl w-[24px] h-[56px] flex items-center justify-center"
              onClick={toggleSidebar}
            >
              <img
                src={videosettingopener}
                className={`${
                  isSidebarOpen
                    ? "rotate-0  ease-in-out duration-150"
                    : "rotate-180  ease-in-out duration-150"
                }`}
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
