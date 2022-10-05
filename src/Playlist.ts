import Midia from './Midia';

export default interface Playlist {
  midias: Array<Midia>;
  addMidia(midia: Midia): void;
  play(): void;
}
