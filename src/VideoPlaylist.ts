import Playlist from './Playlist';
import Video from './Video';

export default class VideoPlaylist implements Playlist {
  midias: Array<Video>;

  constructor() {
    this.midias = new Array<Video>();
  }

  addMidia(midia: Video): void {
    this.midias.push(midia);
  }

  play(): void {
    this.midias.forEach((midia) => midia.play());
  }
}
