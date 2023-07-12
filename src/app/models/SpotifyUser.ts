interface ExplicitContent {
    filter_enabled: boolean;
    filter_locked: boolean;
}

interface ExternalUrls {
    spotify: string;
}

interface Follower {
    href: string;
    total: number;
}

interface SpotifyUserImage {
    url: string;
    height: number;
    width: number;
}

interface SpotifyUser {
    country: string;
    display_name: string;
    email: string;
    explicit_content: ExplicitContent;
    external_urls: ExternalUrls;
    followers: Follower;
    href: string;
    id: string;
    images: SpotifyUserImage[];
    product: string;
    type: string;
    uri: string;
}
