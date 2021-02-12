import * as Blockly from 'blockly';
import { draw_blob } from "./blocks/index";
import './css/global.css';

window.draw_blob = draw_blob;

document.addEventListener("DOMContentLoaded", function () {
  const workspace = Blockly.inject('blocklyDiv',
    {
      toolbox: document.getElementById('toolbox'),
      media: 'media/'
    });

  const lang = 'JavaScript';
  const button = document.getElementById('blocklyButton');
  var xml_text = `
    <xml xmlns="https://developers.google.com/blockly/xml">
      <block type="draw_blob" id="C-2(_oB[upC_zKx(YFv;" x="215" y="97">
        <value name="radius">
          <block type="math_number" id="]$U}Ek:WVCQch*:nv6uI">
            <field name="NUM">100</field>
          </block>
        </value>
        <value name="x">
          <block type="math_number" id="n31H33nQ,gl|A|EDC/;:">
            <field name="NUM">0</field>
          </block>
        </value>
        <value name="y">
          <block type="math_number" id="f5]4xp8tvhH%]Qk*;!@">
            <field name="NUM">1</field>
          </block>
        </value>
        <value name="color">
          <block type="colour_picker" id="/5lP@4Gh1~qo+*^Nq^?3">
            <field name="COLOUR">#ff0000</field>
          </block>
        </value>
        <next>
          <block type="draw_blob" id="i~8TcP}PUX5z*Kxd!ap]">
            <value name="radius">
              <block type="math_number" id="wEplr!SiI?,Xxo:u48LV">
                <field name="NUM">100</field>
              </block>
            </value>
            <value name="x">
              <block type="math_number" id="t[),gSRUHOA9*~#fT7u.">
                <field name="NUM">2</field>
              </block>
            </value>
            <value name="y">
              <block type="math_number" id="SB#.vCz-tNb#}){YaYUY">
                <field name="NUM">3</field>
              </block>
            </value>
            <value name="color">
              <block type="colour_picker" id="OT_m~_tHg.N91O#.I@PF">
                <field name="COLOUR">#0000ff</field>
              </block>
            </value>
            <next>
              <block type="draw_blob" id="V5t(o4s=z1Bj4kEbKPjk">
                <value name="radius">
                  <block type="math_number" id=",.}6OmBV;w5)H-2%wnwf">
                    <field name="NUM">100</field>
                  </block>
                </value>
                <value name="x">
                  <block type="math_number" id=";oktB)*OvYRJ3PHg9w8,">
                    <field name="NUM">4</field>
                  </block>
                </value>
                <value name="y">
                  <block type="math_number" id="iPYTFdultdvCA({$W41W">
                    <field name="NUM">5</field>
                  </block>
                </value>
                <value name="color">
                  <block type="colour_picker" id="Hr}i2p(:f5CGXEZcLT2">
                    <field name="COLOUR">#00ff00</field>
                  </block>
                </value>
              </block>
            </next>
          </block>
        </next>
      </block>
    </xml>`
  var xml = Blockly.Xml.textToDom(xml_text);
  Blockly.Xml.domToWorkspace(xml, workspace);

  button.addEventListener('click', function () {
    var xml = Blockly.Xml.workspaceToDom(workspace);
    var xml_text = Blockly.Xml.domToPrettyText(xml);
    console.log(xml_text);
    var code = Blockly[lang].workspaceToCode(workspace);
    console.log(code)
    try {
      eval(`
        window.draw = function() {
          blendMode(BLEND);
          background(0);
          blendMode(ADD);

          `+ code +`

          t += 0.005;
        }
      `);
    } catch (e) {
      alert(e);
    }
  })
});
