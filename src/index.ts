import Directory from "./dcm/directory";
import Content from "./dcm/content";

// Just a use example
const mainDir: Directory = new Directory("Main", "Amir", "Public");

const message: Content<string> = new Content("message.txt", "Hello, there!");

mainDir.addContent(message, "message.txt");

console.log(mainDir);

mainDir.renameContent(message, "msg.txt");

console.log(mainDir);
