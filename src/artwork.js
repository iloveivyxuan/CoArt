import './blocks/index';
import './css/global.css';
import { Blockly } from './js/canvas';

document.addEventListener("DOMContentLoaded", function() {
  const code = `
    function setup() {
      createCanvas(720, 720);
      noFill();
      background(255);
      strokeWeight(2);
      stroke(0, 25);
    }

    function draw() {
      if (mouseIsPressed && mouseButton == LEFT) {
        push();
        translate(width / 2, height / 2);

        var circleResolution = int(map(mouseY, 0, height, 3, 15));
        var radius = dist(mouseX, mouseY, width / 2, height / 2);
        var angle = TAU / circleResolution;

        beginShape();
        for (var i = 0; i <= circleResolution; i++) {
          var x = cos(angle * i) * radius;
          var y = sin(angle * i) * radius;
          vertex(x, y);
        }
        endShape();

        pop();
      }
    }
  `;

  const blocks = `
    <xml xmlns="https://developers.google.com/blockly/xml">
      <variables>
        <variable id="wRohD_B.:U)95xx?_s=">circleResolution</variable>
        <variable id="}i/:8Z^{ir4N@-j/hWF">radius</variable>
      </variables>
      <block type="setup" id=";kFImFHeHRLs_2GdTJMJ" x="9" y="28">
        <statement name="setup">
          <block type="create_canvas" id="U,A-59[(?s-9(?l#QkbD">
            <field name="width">350</field>
            <field name="height">350</field>
            <next>
              <block type="background" id="$Ugp?+t.2KL=S=:+E1TS">
                <value name="color">
                  <block type="color" id="IAG3h:NiyKJ/svQq,Ep*">
                    <field name="color">#ffffff</field>
                  </block>
                </value>
                <next>
                  <block type="no_fill" id="O%je$D[UcSe~FGzJkRm-">
                    <next>
                      <block type="stroke_weight" id="=?CH_!|nyc%|B,j%)r]*">
                        <value name="weight">
                          <block type="number" id=";j7[9?f%N_5NL@P-W?9_">
                            <field name="num">1</field>
                          </block>
                        </value>
                        <next>
                          <block type="stroke" id="%,=TSpi+U*;A@]c,?ZrY">
                            <value name="color">
                              <block type="rgba" id="!WDx%~sA=Glli3Jm7~X}">
                                <field name="r">50</field>
                                <field name="g">50</field>
                                <field name="b">50</field>
                                <field name="a">0.1</field>
                              </block>
                            </value>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </statement>
      </block>
      <block type="draw" id="pDbpuaM8$K,*5!4JOWsE" x="22" y="264">
        <statement name="draw">
          <block type="controls_if" id="mup3)QXk7r3Ces5Z!pbl">
            <value name="IF0">
              <block type="mouse_is_pressed" id="uc-h5,oWedaDOd^69Gwj"></block>
            </value>
            <statement name="DO0">
              <block type="translate" id="H7Lx+KOHG7sYh+}6[o$8">
                <field name="x">175</field>
                <field name="y">175</field>
                <next>
                  <block type="variables_set" id=",]0fLZi@$;p8N;)U?Li">
                    <field name="VAR" id="wRohD_B.:U)95xx?_s=">circleResolution</field>
                    <value name="VALUE">
                      <block type="get_integer" id="(cX*mU4Y4AWrz8:h:oM=">
                        <field name="options">round</field>
                        <value name="num">
                          <block type="map" id="lN#d5$|z{.8uU?X$.,(">
                            <value name="value">
                              <block type="mouse_y" id="A2gPt0FSUv-UsEm!Fb%."></block>
                            </value>
                            <value name="from_low">
                              <block type="number" id="?7nb[-ghC0zY|7-fMZ8+">
                                <field name="num">0</field>
                              </block>
                            </value>
                            <value name="from_high">
                              <block type="height" id="BLp!CRt?gmGdiE0$wI{U"></block>
                            </value>
                            <value name="to_low">
                              <block type="number" id="aH$z*)|k=FmRJX_Qq?.g">
                                <field name="num">3</field>
                              </block>
                            </value>
                            <value name="to_high">
                              <block type="number" id="eKFoPPt:/%i/E$|}9WQ%">
                                <field name="num">15</field>
                              </block>
                            </value>
                          </block>
                        </value>
                      </block>
                    </value>
                    <next>
                      <block type="variables_set" id="GBUav}UZD;pKp%hp%(8*">
                        <field name="VAR" id="}i/:8Z^{ir4N@-j/hWF">radius</field>
                        <value name="VALUE">
                          <block type="distance" id="K+}ml.a==#Qjo)l-}es">
                            <value name="from_x">
                              <block type="mouse_x" id="ncPh_/-]*+2~s6[y29lk"></block>
                            </value>
                            <value name="from_y">
                              <block type="mouse_y" id="}dit4r(gi:b?6N4x1KuV"></block>
                            </value>
                            <value name="to_x">
                              <block type="number" id="mV9fY#Bq!AkS*(-;+#EY">
                                <field name="num">175</field>
                              </block>
                            </value>
                            <value name="to_y">
                              <block type="number" id="CyJMAO!,QzJ2:BogdrE">
                                <field name="num">175</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <next>
                          <block type="polygon" id="7A?;9{)8W{~p$fr}4L0">
                            <value name="sides">
                              <block type="variables_get" id="[xpo)ff^V/P84ZC*Lu--">
                                <field name="VAR" id="wRohD_B.:U)95xx?_s=">circleResolution</field>
                              </block>
                            </value>
                            <value name="radius">
                              <block type="variables_get" id="z{KE][@/s]2k){,/,dn%">
                                <field name="VAR" id="}i/:8Z^{ir4N@-j/hWF">radius</field>
                              </block>
                            </value>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </statement>
      </block>
    </xml>
  `;

  const xml = Blockly.Xml.textToDom(blocks);
  Blockly.Xml.domToWorkspace(xml, window.workspace);
});
