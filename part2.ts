/**
Task - imagine that Docker does not exist, and as a developer, you need to implement Docker from scratch.
Describe, at the pseudocode or high-level algorithm level, the implementation of the feature for creating and running a container.
Also, specify the operating system API required to implement such a feature.
Do not include handling all possible exceptional situations.

Pseudofunctions should have names corresponding to existing Unix commands (tar, rm, touch),
or system call invocations (cgroups cpuset 1),
or simply describe actions on operating system entities (mount the /olddir directory into /newdir).
*/

import * as fs from 'fs'
import { execSync } from 'child_process'

const createFileWithContent = (filename: string, content: string): void => {
  fs.writeFileSync(filename, content)
}

const rmFile = (filename: string): void => {
  fs.unlinkSync(filename)
}

const createRandomStr = (): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  const length = 10
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    result += characters.charAt(randomIndex)
  }
  return result
}

const createEmptyArchive = (path: string): void => {
  fs.writeFileSync('_dummy', '')
  execSync(`tar -cf ${path} --null -T _dummy`)
  fs.unlinkSync('_dummy')
}

const addFileToArchive = (path: string, pathToArchive: string): void => {
  execSync(`tar --append --file=${pathToArchive} ${path}`)
}

const main = (): void => {
  const archivePath = 'archivePath.tar'
  createEmptyArchive(archivePath)
  Array.from(Array(10).keys()).forEach((e) => {
    const filename = (e + 1).toString()
    const content = createRandomStr()
    createFileWithContent(filename, content)
    addFileToArchive(filename, archivePath)
    rmFile(filename)
  })
}

main()
