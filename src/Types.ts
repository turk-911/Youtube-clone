export interface HomePageVideos {
    videoId: string;
    videoTitle: string;
    videoDescription: string;
    videoLink: string;
    videoThumbnail: string;
    videoDuration: string;
    videoViews: string;
    videoAge: string;
    channelInfo: {
        id: string;
        image: string;
        name: string;
    };
};

export interface CurrentPlaying {
    videoId: string;
    videoTitle: string;
    videoDescription: string;
    videoLink: string;
    videoAge: string;
    videoViews: string;
    videoLikes: string;
    channelInfo: {
        id: string;
        image: string;
        name: string;
        subscribers: string;
    };
};

export interface RecommendedVideos {
    videoId: string;
    videoTitle: string;
    videoThumbnail: string;
    videoDuration: string;
    videoViews: string;
    videoAge: string;
    channelInfo: {
        id: string;
        name: string;
    };
};

export interface Item {
    snippet: {
        title: string;
        thumbnail: {
            medium: {
                url: string;
            };
        };
        publishedAt: string;
        channelTitle: string;
        channelId: string;
    };
    contentDetails: {
        upload: {
            videoId: string;
        };
    };
};

export interface InitialState {
    videos: HomePageVideos[];
    currentPlaying: CurrentPlaying | null;
    searchTerm: string;
    searchResults: [];
    nextPageToken: string | null;
    recommendedVideos: RecommendedVideos[];
};