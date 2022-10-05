import Music from './Music';
import Playlist from './Playlist';

export default class MusicPlaylist implements Playlist {
  midias: Array<Music>;

  constructor() {
    this.midias = new Array<Music>();
  }

  addMidia(midia: Music): void {
    this.midias.push(midia);
  }

  play(): void {
    this.midias.forEach((midia) => midia.play());
  }
}
