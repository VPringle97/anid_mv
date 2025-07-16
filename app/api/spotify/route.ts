import { NextResponse } from 'next/server';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const artist_id = process.env.SPOTIFY_ARTIST_ID;

const getAccessToken = async () => {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64'),
    },
    body: 'grant_type=client_credentials',
  });

  const data = await response.json();
  return data.access_token;
};

export async function GET() {
  try {
    const accessToken = await getAccessToken();

    const response = await fetch(`https://api.spotify.com/v1/artists/${artist_id}/albums?include_groups=single&market=US&limit=1`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Spotify API Error:', error);
      return NextResponse.json({ error: 'Failed to fetch latest song from Spotify' }, { status: response.status });
    }

    const { items } = await response.json();

    if (items.length === 0) {
      return NextResponse.json({ error: 'No recent singles found' }, { status: 404 });
    }

    const latestAlbum = items[0];
    const trackResponse = await fetch(`https://api.spotify.com/v1/albums/${latestAlbum.id}/tracks?limit=1`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!trackResponse.ok) {
        const error = await trackResponse.json();
        console.error('Spotify API Error (tracks):', error);
        return NextResponse.json({ error: 'Failed to fetch tracks for the latest album' }, { status: trackResponse.status });
    }

    const { items: tracks } = await trackResponse.json();

    if (tracks.length === 0) {
        return NextResponse.json({ error: 'No tracks found in the latest album' }, { status: 404 });
    }

    const latestTrack = tracks[0];

    return NextResponse.json({ trackId: latestTrack.id });

  } catch (error) {
    console.error('Internal Server Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
