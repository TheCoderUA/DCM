import Directory from "./dcm/directory";
import Content from "./dcm/content";

// Just a use example
const mainDir: Directory = new Directory("Main", "Amir", "Public");

const message: Content<string> = new Content("message.txt", "Hello, there!");

mainDir.addContent(message, "message.txt");
mainDir.logContents(); // Content { name: 'message.txt', src: 'Hello, there!' }

mainDir.renameContent(message, "msg.txt");
mainDir.logContents(); // Content { name: 'msg.txt', src: 'Hello, there!' }

mainDir.removeContent(message);
mainDir.logContents(); // Empty Directory
