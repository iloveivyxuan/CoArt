import * as Blockly from 'blockly';

document.addEventListener("DOMContentLoaded", function () {
    const workspace = Blockly.inject('blocklyDiv',
        {
            toolbox: document.getElementById('toolbox'),
            media: 'media/'
        });

    const lang = 'JavaScript';
    const button = document.getElementById('blocklyButton');
    button.addEventListener('click', function () {
        const code = Blockly[lang].workspaceToCode(workspace);
        console.log(code);
    })
});
