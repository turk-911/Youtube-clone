import { Link } from "react-router-dom";
import { RecommendedVideos } from "../Types";

export default function WatchCard({ data }: { data: RecommendedVideos }) {
  return (
    <div className="flex gap-3">
      <div className="relative min-w-fit">
        <span className="absolute bottom-3 right-3 text-sm bg-gray-900 px-2 py-0.5 z-10">
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            alt="thumbnail"
            className="w-40 h-24"
          />
        </Link>
      </div>
      <div className="flex gap-1 flex-col">
        <h4 className="text-sm">
          <a href="#" className="line-clamp-2">
            {data.videoTitle}
          </a>
        </h4>
        <div className="text-xs text-grap-400">
          <div>
            <a href="#" className="hover:text-white">
              {data.channelInfo.name}
            </a>
          </div>
          <div>
            <div>
              <span className="after-content-['•'] after:mx-1">
                {data.videoViews} views
              </span>
              <span>{data.videoAge}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
