import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { clearVideos } from "../store";
import { getHomePageVideos } from "../store/reducers/getHomePageVideos";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../components/Spinner";
import { HomePageVideos } from "../Types";
import Card from "../components/Card";

export default function Home() {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);
  useEffect(() => {
    return () => {
      dispatch(clearVideos());
    };
  }, [dispatch]);
  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);
  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <Sidebar />
        {videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomePageVideos(false))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            height={"100vh"}
          >
            <div className="grid gap-y-14 gap-x-8 grid-cols-4 p-8 overflow-hidden">
              {videos.map((item: HomePageVideos) => {
                return <Card data={item} key={item.videoId} />;
              })}
            </div>{" "}
          </InfiniteScroll>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}
