#! /usr/bin/env node
var _       = require("lodash");
var program = require('commander');
var chalk   = require("chalk");


//================
//命令行
//================
program
    .version('1.0.0')
    .description('小马智能打包工具')


//================
//初始化
//================
program
    .command("init [options]")
    .action(function (options) {
        console.log("Init:开发中...");
    })

//================
//开发
//================
program
    .command("dev [options]")
    .action(function (options) {
        console.log("Dev:开发中...");
    })


//================
//开发
//================
program
    .command("build [options]")
    .action(function (options) {
        console.log("Build:开发中...");
    })

//================
//发布中
//================
program
    .command("deploy [options]")
    .action(function (options) {
        console.log("Build:开发中...");
    })

program.parse(process.argv);
