interface SpotifyCurrentTracks {
    added_at: string;
    added_by: SpotifyUser;
    is_local: boolean;
    primary_color: null | string;
    track: SpotifyTracks;
    video_thumbnail: SpotifyVideoThumbnail;
}

interface SpotifyUser {
    external_urls: ExternalUrl;
    href: string;
    id: string;
    type: string;
    uri: string;
}

interface ExternalUrl {
    spotify: string;
}

interface SpotifyTracks {
    album: Album;
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    episode: boolean;
    explicit: boolean;
    external_ids: ExternalIds;
    external_urls: ExternalUrl;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
}

interface Album {
    album_type: string;
    artists: Artist[];
    available_markets: string[];
    external_urls: ExternalUrl;
    href: string;
    id: string;
    images: SpotifyImage[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
}

interface Artist {
    external_urls: ExternalUrl;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

interface SpotifyImage {
    height: number;
    url: string;
    width: number;
}

interface ExternalIds {
    isrc: string;
}

interface SpotifyVideoThumbnail {
    url: null | string;
}