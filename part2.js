"use strict";
// // /**
// // Task - imagine that Docker does not exist, and as a developer, you need to implement Docker from scratch.
// // Describe, at the pseudocode or high-level algorithm level, the implementation of the feature for creating and running a container.
// // Also, specify the operating system API required to implement such a feature.
// // Do not include handling all possible exceptional situations.
Object.defineProperty(exports, "__esModule", { value: true });
// // Pseudofunctions should have names corresponding to existing Unix commands (tar, rm, touch),
// // or system call invocations (cgroups cpuset 1),
// // or simply describe actions on operating system entities (mount the /olddir directory into /newdir).
// // */
// // import * as fs from 'fs'
// // const createFileWithContent = (filename: string, content: string): void => {
// //   fs.writeFileSync(filename, content)
// // }
// // const rmFile = (filename: string): void => {
// //   fs.unlinkSync(filename)
// // }
// // const createRandomStr = (): string => {
// //   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
// //   let result = ''
// //   const length = 10
// //   for (let i = 0; i < length; i++) {
// //     const randomIndex = Math.floor(Math.random() * characters.length)
// //     result += characters.charAt(randomIndex)
// //   }
// //   return result
// // }
// // const createEmptyArchive = (path: string): void => {
// //   fs.writeFileSync(path, '')
// // }
// // const addFileToArchive = (path: string, pathToArchive: string): void => {
// //   fs.appendFileSync(pathToArchive, fs.readFileSync(path))
// // }
// // const main = (): void => {
// //   const archivePath = 'archivePath.tar'
// //   createEmptyArchive(archivePath)
// //   Array.from(Array(10).keys()).forEach((e) => {
// //     const filename = (e + 1).toString()
// //     const content = createRandomStr()
// //     createFileWithContent(filename, content)
// //     addFileToArchive(filename, archivePath)
// //     rmFile(filename)
// //   })
// // }
// // main()
// import * as fs from 'fs'
// import { execSync } from 'child_process'
// const createFileWithContent = (filename: string, content: string): void => {
//   fs.writeFileSync(filename, content)
// }
// const rmFile = (filename: string): void => {
//   fs.unlinkSync(filename)
// }
// const createRandomStr = (): string => {
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//   let result = ''
//   const length = 10
//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length)
//     result += characters.charAt(randomIndex)
//   }
//   return result
// }
// const createEmptyArchive = (path: string): void => {
//   execSync(`tar -cf ${path} -T /dev/null`)
// }
// const addFileToArchive = (path: string, pathToArchive: string): void => {
//   execSync(`tar --append --file=${pathToArchive} ${path}`)
// }
// const main = (): void => {
//   const archivePath = 'archivePath.tar'
//   createEmptyArchive(archivePath)
//   Array.from(Array(10).keys()).forEach((e) => {
//     const filename = (e + 1).toString()
//     const content = createRandomStr()
//     createFileWithContent(filename, content)
//     addFileToArchive(filename, archivePath)
//     rmFile(filename)
//   })
// }
// main()
var fs = require("fs");
var child_process_1 = require("child_process");
var createFileWithContent = function (filename, content) {
    fs.writeFileSync(filename, content);
};
var rmFile = function (filename) {
    fs.unlinkSync(filename);
};
var createRandomStr = function () {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    var length = 10;
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
};
var createEmptyArchive = function (path) {
    fs.writeFileSync('_dummy', '');
    (0, child_process_1.execSync)("tar -cf ".concat(path, " --null -T _dummy"));
    fs.unlinkSync('_dummy');
};
var addFileToArchive = function (path, pathToArchive) {
    (0, child_process_1.execSync)("tar --append --file=".concat(pathToArchive, " ").concat(path));
};
var main = function () {
    var archivePath = 'archivePath.tar';
    createEmptyArchive(archivePath);
    Array.from(Array(10).keys()).forEach(function (e) {
        var filename = (e + 1).toString();
        var content = createRandomStr();
        createFileWithContent(filename, content);
        addFileToArchive(filename, archivePath);
        rmFile(filename);
    });
};
main();
