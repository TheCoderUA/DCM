interface ContentInterface<T> {
  name: string;
  src: T; //
}

export default class Content<T> implements ContentInterface<T> {
  public name: string;
  public src: T;

  constructor(name: string, src: T) {
    this.name = name;
    this.src = src;
  }
}
