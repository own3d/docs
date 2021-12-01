# Jukebox API

## Player SDK

### Introduction

> Embedding the Jukebox SDK on commercial websites is not allowed without prior written permission. Please contact us at developers@stream.tv for more information.

Jukebox offers a Player SDK to embed Jukebox as a whitelabel solution in the website. End users who want to use Jukebox Player need at least a free StreamTV account.

### Authentication with Jukebox

Use StreamTV Client Credentials.

### Example

> Keep in mind that you need to include a VAST container so that you can use our SDK. With VAST we are able to integrate our advertising network. Removing or hiding the VAST Container is prohibited. The VAST container must be at least 400x225px and fixed visible on the web page.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Jukebox Player SDK Example</title>
    <style>.controls { display: none; }</style>
</head>
<body>

<div id="vast-container"></div>
<button class="controls" onclick="skipTrack()">Skip Track</button>
<button class="controls" onclick="shufflePlay()">Shuffle Play</button>

<script src="https://static-cdn.jukebox.gg/js/jukebox-sdk.js"></script>
<script>
    // VAST Video Container
    Jukebox.setVastContainer(document.getElementById('vast-container'));

    // State updates like: Track, Timestamp, Play/Pause.
    Jukebox.on('state.updated', (state) => console.log(state));

    // Player is ready! Play some tracks...
    Jukebox.on('ready', (state) => {
        var elements = document.getElementsByClassName('controls')

        for (var i = 0; i < elements.length; i++){
            elements[i].style.display = 'inline';
        }
    });

    // Start authentication with your access token.
    // The callback will be called every time we need a new token.
    Jukebox.authenticate(() => 'Bearer ...');

    function skipTrack() {
        Jukebox.next();
    }

    function shufflePlay() {
        Jukebox.axios
            .get(`/v1/playlists/15b7c732-51e8-4b71-97fb-57319fe9d1af`)
            .then(response => response.data)
            .then(playlist => {
                console.log(playlist);
                let track = playlist.tracks[Math.floor(Math.random() * playlist.tracks.length)];

                Jukebox.play({
                    playlist_id: playlist.id,
                    track_id: track.id,
                    shuffle: 'on',
                    repeat: 'all',
                });
            });
    }
</script>
</body>
</html>
```

### Player SDK API

#### `Jukebox#authenticate(authenticate: : () => string)`

Intialize the Jukebox SDK. The `authenticate` callback will be called every time when the SDK needs an fresh API Access Token.

#### `Jukebox#setVastContainer(container: HTMLElement)`

Sets the container where Jukebox embeds the VAST player.  
The VAST container must be at least 400x225px and fixed visible on the web page.

#### `Jukebox#shuffle(): Promise<void|AxiosResponse>`

Enables the shuffle mode. You can check the shuffle mude with `state.shuffle`. Possible values: `on` & `off`.

#### `Jukebox#repeat(): Promise<void|AxiosResponse>`

Toggles the repeat mode. You can check the repeat mode with `state.repeat`. Possible values: `all`, `single` & `off`.

#### `Jukebox#play(attributes: object): Promise<void|AxiosResponse>`

Plays a given track.

| Attribute     | Required             | Description                                                                        | Type     |
|---------------|----------------------|------------------------------------------------------------------------------------|----------|
| `playlist_id` | No                   | UUID of the Playlist.                                                              | `UUID`   |
| `album_id`    | No                   | UUID of the Album.                                                                 | `UUID`   |
| `track_id`    | Yes                  | UUID of the Track.                                                                 | `UUID`   |
| `shuffle`     | Yes, if non-premium. | Shuffle Mode. Possible values: `on` & `off`.                                       | `String` |
| `repeat`      | No                   | Repeat a single Track or Playlist/Album. Possible values: `all`, `single` & `off`. | `String` |
| `position`    | No                   | Set the initial position of this track.                                            | `Float`  |

#### `Jukebox#next(): Promise<void|AxiosResponse>`

Play the queued next track, if the player has a playlist or album in it's context.

#### `Jukebox#previous(): Promise<void|AxiosResponse>`

Play the previous track, if the player has a playlist or album in it's context.

#### `Jukebox#pause(): Promise<void|AxiosResponse>`

Pause the current playing track.

#### `Jukebox#continue(): Promise<void|AxiosResponse>`

Continue the current paused track.

#### `Jukebox#volume(volume: number): void`

Modify the volume of the track stream. Number between `0` and `1`, example `0.1` is 10% volume.

#### `Jukebox#on(event: string | string[], callback: Function): this`

Listen for a Jukebox event. Supported events: `ready` & `state.updated`.

#### `Jukebox#once(event: string | string[], callback: Function): this`

Listen for a Jukebox event, but only once.

#### `Jukebox#off(event?: string | string[], callback?: Function): this`

Used to remove the custom event listener.

#### `Jukebox#currentTime(position: number): void`

Sets the position of the current track. You can get the current position with `state.position` and the total duration with `state.duration`.

#### `Jukebox#isPrimaryPlayer(): boolean`

Indicates if the player is playing music on another instance.

#### `Jukebox#isPlaying(): boolean`

Indicates if the player instance is playing music.

## API Reference

Currently, the Jukebox API is within closed beta.