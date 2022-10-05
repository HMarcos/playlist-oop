export default abstract class Midia {
  protected abstract title: string;
  protected abstract content: Array<string>;

  play(): void {
    console.log('Now playing... ' + this.title);
    this.content.forEach((line: string) => console.log(line));
  }
}
