import { jest } from "@jest/globals";

import MusicPlaylist from "./../src/MusicPlaylist";
import VideoPlaylist from "./../src/VideoPlaylist";
import Music from "./../src/Music";
import Video from "./../src/Video";

// ________________ **//

test("executes a music playlist", () => {
  const musicPlaylist = new MusicPlaylist();
  expect(musicPlaylist).toHaveProperty("midias");
  expect(musicPlaylist).toHaveProperty("addMidia");
  expect(musicPlaylist).toHaveProperty("play");

  const sound = new Music("I Promise", ["verso 1", "verso 2", "verso 3"]);
  const sound2 = new Music("Call(me) Back", ["verso 1", "verso 2", "verso 3"]);

  jest.spyOn(sound, "play");
  jest.spyOn(sound2, "play");

  musicPlaylist.addMidia(sound);
  musicPlaylist.addMidia(sound2);
  musicPlaylist.play();
  expect(sound.play).toHaveBeenCalled();
  expect(sound2.play).toHaveBeenCalled();
});


test("executes a video playlist", () => {
  const videoPlaylist = new VideoPlaylist();
  expect(videoPlaylist).toHaveProperty("midias");
  expect(videoPlaylist).toHaveProperty("addMidia");
  expect(videoPlaylist).toHaveProperty("play");

  const video1 = new Video("Try or Catch", ["parte 1", "parte 2", "parte 3"]);
  const video2 = new Video("Let", ["parte 1", "parte 2", "parte 3"]);

  jest.spyOn(video1, "play");
  jest.spyOn(video2, "play");

  videoPlaylist.addMidia(video1);
  videoPlaylist.addMidia(video2);
  videoPlaylist.play();

  expect(video1.play).toHaveBeenCalled();
  expect(video2.play).toHaveBeenCalled();
});