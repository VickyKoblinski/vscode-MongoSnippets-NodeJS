// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Documentation for mongoosejs will be opened in your web browser.');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let mongooseDocs = vscode.commands.registerCommand('extension.mongoosejsDocs', function () {
		// The code you place here will be executed every time your command is executed
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://mongoosejs.com/docs/api.html#Model'))
	});

	let extensionDocs = vscode.commands.registerCommand('extension.extensionDocs', () => {

		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://github.com/roerohan/vscode-MongoSnippets-NodeJS/blob/master/README.md'))
	});


	context.subscriptions.push(mongooseDocs);
	context.subscriptions.push(extensionDocs);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}