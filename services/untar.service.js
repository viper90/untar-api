"use strict";
const spawn = require('child-process-promise').spawn;
const StreamSplitter = require("stream-splitter");

module.exports = {
	name: "untar",

	/**
	 * Service settings
	 */
	settings: {

	},

	/**
	 * Service dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {


        tarList: {
            params: {
                tarPath: "string"
            },
            async handler(ctx) {

                let cmdArgs = [
                    '-t',
                    '-f',
                    ctx.params.tarPath
                ];


                let promise = spawn('tar', cmdArgs);
                // console.log(promise);


                // let promise = spawn('tar', cmdArgs, ctx.params.filePath);
                let childProcess = promise.childProcess;
                let splitter = childProcess.stdout.pipe(StreamSplitter("/"));


                splitter.on('token', function (data) {
                    console.log("OUT: " + data);
                });

                // splitter.on('done', function (data) {
                //     console.log("DONE: " + data);
                // });

                console.log('[spawn] childProcess.pid: ', childProcess.pid);
                // childProcess.stdout.on('data', function (data) {
                //     console.log('[spawn] stdout: ', data.toString());
                // });
                childProcess.stderr.on('data', function (data) {
                    console.log('[spawn] stderr: ', data.toString());
                });

                promise.then(function () {
                    console.log('[spawn] done!');
                })
                    .catch(function (err) {
                        console.error('[spawn] ERROR: ', err);
                    });
            }
        },

        tarExtract: {
            params: {
                tarPath: "string"
            },
            async handler(ctx) {

                let cmdArgs = [
                    '-x',
                    '-f',
                    ctx.params.tarPath
                ];


                let promise = spawn('tar', cmdArgs);
                // console.log(promise);


                // let promise = spawn('tar', cmdArgs, ctx.params.filePath);
                let childProcess = promise.childProcess;
                let splitter = childProcess.stdout.pipe(StreamSplitter("/"));


                splitter.on('token', function (data) {
                    console.log("OUT: " + data);
                });

                // splitter.on('done', function (data) {
                //     console.log("DONE: " + data);
                // });

                console.log('[spawn] childProcess.pid: ', childProcess.pid);
                // childProcess.stdout.on('data', function (data) {
                //     console.log('[spawn] stdout: ', data.toString());
                // });
                childProcess.stderr.on('data', function (data) {
                    console.log('[spawn] stderr: ', data.toString());
                });

                promise.then(function () {
                    console.log('[spawn] done!');
                })
                    .catch(function (err) {
                        console.error('[spawn] ERROR: ', err);
                    });
            }
        },

    tarFindFile: {
        params: {
            tarPath: "string",
            fileToFind: "string"
        },
        async handler(ctx) {

            let cmdArgs = [
                '-t',
                '-f',
                ctx.params.tarPath,
                ctx.params.fileToFind
            ];


            let promise = spawn('tar', cmdArgs);
            // console.log(promise);


            // let promise = spawn('tar', cmdArgs, ctx.params.filePath);
            let childProcess = promise.childProcess;
            let splitter = childProcess.stdout.pipe(StreamSplitter("/"));


            splitter.on('token', function (data) {
                console.log("OUT: " + data);
            });

            // splitter.on('done', function (data) {
            //     console.log("DONE: " + data);
            // });

            console.log('[spawn] childProcess.pid: ', childProcess.pid);
            // childProcess.stdout.on('data', function (data) {
            //     console.log('[spawn] stdout: ', data.toString());
            // });
            childProcess.stderr.on('data', function (data) {
                console.log('[spawn] stderr: ', data.toString());
            });

            promise.then(function () {
                console.log('[spawn] done!');
            })
                .catch(function (err) {
                    console.error('[spawn] ERROR: ', err);
                });
        }
    }
},

	/**
	 * Events
	 */
	events: {

	},

	/**
	 * Methods
	 */
	methods: {

	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	stopped() {

	}
};