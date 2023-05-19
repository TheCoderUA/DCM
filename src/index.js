"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var directory_1 = require("./dcm/directory");
var content_1 = require("./dcm/content");
// Just a use example
var mainDir = new directory_1.default("Main", "Amir", "Public");
var message = new content_1.default("message.txt", "Hello, there!");
mainDir.addContent(message, "message.txt");
console.log(mainDir);
mainDir.renameContent(message, "msg.txt");
console.log(mainDir);
