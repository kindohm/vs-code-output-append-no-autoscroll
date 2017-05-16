var vscode = require('vscode');

function activate(context) {

    var out = vscode.window.createOutputChannel("scrolling");
    out.show();

    var disposable = vscode.commands.registerCommand('extension.sayHello', function () {
        out.append("Output channel does not auto scroll with append(). Keep pressing Ctrl+Shift+q. ");
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

