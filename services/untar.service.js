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

            status: {
                params: {
                    name: "string"
                },
                async handler(ctx) {
                    return `hello ${ctx.params.name}`
                }
        },

        tarList: {
            params: {
                tarPath: "string"
            },
            async handler(ctx) {

        // command arguments including parameter for file
                let cmdArgs = [
                    '-t',
                    '-f',
                    ctx.params.tarPath
                ];


                return spawn('tar', cmdArgs, { capture: [ 'stdout', 'stderr' ]})
                    .then(function (result) {
                        console.log('[spawn] stdout: ', result.stdout.toString());
                        return {result: "ok", data: result.stdout.toString().split("\n")};
                    })
                    .catch(function (err) {
                        console.error('[spawn] stderr: ', err.stderr);
                        return {result: "Error", data: err.stderr};
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


                return spawn('tar', cmdArgs, { capture: [ 'stdout', 'stderr' ]})
                    .then(function (result) {
                        console.log('[spawn] stdout: ', result.stdout.toString());
                        return {result: "ok"};
                    })
                    .catch(function (err) {
                        console.error('[spawn] stderr: ', err.stderr);
                        return {result: "Error", data: err.stderr};
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

            return spawn('tar', cmdArgs, { capture: [ 'stdout', 'stderr' ]})
                .then(function (result) {
                    console.log('[spawn] stdout: ', result.stdout.toString());
                    return {result: "ok", data: result.stdout.toString().split("\n")};
                })
                .catch(function (err) {
                    console.error('[spawn] stderr: ', err.stderr);
                    return {result: "Error", data: err.stderr};
                });
        }
    },

        tarExtractFile: {
            params: {
                tarPath: "string",
                fileToFind: "string"
            },
            async handler(ctx) {

                let cmdArgs = [
                    '-x',
                    '-f',
                    ctx.params.tarPath,
                    ctx.params.fileToFind
                ];


                return spawn('tar', cmdArgs, { capture: [ 'stdout', 'stderr' ]})
                    .then(function (result) {
                        console.log('[spawn] stdout: ', result.stdout.toString());
                        return {result: `File ${ctx.params.fileToFind} extracted`};
                    })
                    .catch(function (err) {
                        console.error('[spawn] stderr: ', err.stderr);
                        return {result: "Error", data: err.stderr};
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