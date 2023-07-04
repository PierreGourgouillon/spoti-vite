
export interface PlaylistModel {
    collaborative: boolean;
    description: string;
    href: string;
    id: string;
    images: Image[];
    name: string;
    owner: Owner;
    primary_color: null;
    public: boolean;
    snapshot_id: string;
    tracks: Tracks;
    type: string;
    uri: string;
}

export interface Image {
    height: null;
    url: string;
    width: null;
}

export interface Owner {
    display_name: string;
    href: string;
    id: string;
    type: string;
    uri: string;
}

export interface Tracks {
    href: string;
    total: number;
}