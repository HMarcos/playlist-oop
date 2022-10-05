import Midia from './Midia';

export default class Music extends Midia {
  protected title: string;
  protected content: Array<string>;
  constructor(title: string, content: Array<string>) {
    super();
    this.title = title;
    this.content = content;
  }
}
