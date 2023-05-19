import * as Types from "./types";
import Content from "./content";

interface DirectoryInterface {
  name: string;
  owner: string;
  status: Types.Status; // Confidency status

  /* Methods */
  addContent: Function;
  removeContent: Function;
  renameContent: Function;
}

export default class Directory implements DirectoryInterface {
  public name: string; // Name of the Directory
  public owner: string; // Owner's name
  public status: Types.Status;
  private contents: Set<Content<unknown>>; // Contents will be stored in a particular Set

  constructor(name: string, owner: string, status: Types.Status) {
    this.name = name;
    this.owner = owner;
    this.status = status;
    this.contents = new Set(); // Creating a empty set at beginning
  }

  /* Methods implementation */
  public addContent: Function = (content: Content<unknown>): boolean => {
    this.contents.add(content);

    // In case of successfull insertion - return true, otherwise - false:
    return this.contents.has(content) ? true : false;
  };

  public removeContent: Function = (content: Content<unknown>): boolean => {
    if (this.contents.has(content)) {
      this.contents.delete(content);
      return true;
    } else {
      return false;
    }
  };

  public renameContent: Function = (
    content: Content<unknown>,
    newName: string
  ): boolean => {
    if (this.contents.has(content)) {
      for (let element of this.contents.values()) {
        if (element === content) {
          element.name = newName;
        }
      }

      return true;
    } else {
      return false;
    }
  };
}
