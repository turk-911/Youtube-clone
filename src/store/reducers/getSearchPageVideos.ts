import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";
import { HomePageVideos } from "../../Types";
import { parseData } from "../../utils";
import { YOUTUBE_API_URL } from "../../utils/constants";
const API_KEY = "AIzaSyDrR_Gj0_ZojbDyqT2sZnXWpoXSVkXQLj4";
export const getSearchPageVideos = createAsyncThunk(
    "youtubeApp/getSearchPageVideos",
    async (isNext: boolean, { getState }) => {
        const {
            youtubeApp: {
                nextPageToken: nextPageTokenFromState, videos, searchTerm
            }
        } = getState() as RootState;
        const {
            data: {
                items, nextPageToken
            }
        } = await axios.get(`${YOUTUBE_API_URL}/search?q=${searchTerm}&key=${API_KEY}$part=snippet&type=videos&${isNext ? `pageToken=${nextPageTokenFromState}` : ""}`);
        const parsedData: HomePageVideos[] = await parseData(items);
        return { parsedData: [...videos, ...parsedData], nextPageToken};
    }
);