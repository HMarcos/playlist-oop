import Midia from './Midia';

export default class Video extends Midia {
  protected title: string;
  protected content: Array<string>;

  constructor(title: string, content: Array<string>) {
    super();
    this.title = title;
    this.content = content;
  }

  play(): void {
    console.log('Now playing... ' + this.title);
    const content = this.content.reduce((acc: string, line: string) => (acc += line), '');
    console.log(content);
  }
}
