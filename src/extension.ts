import * as vscode from 'vscode';

let startedTimerDate: number;

export function activate(context: vscode.ExtensionContext) {

	const disposable = vscode.commands.registerCommand('coding-timer.startTimer', () => {
		startedTimerDate = Date.now();
		const updateTimer = setInterval(_=>{
			const currentDate = Date.now();
			if (currentDate-startedTimerDate >= 30 * 60 * 1000){
				clearInterval(updateTimer);
				vscode.window.showInformationMessage('Timer is over.');
			}
		},5000);
		vscode.window.showInformationMessage('A 30 minute timer has started.');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
