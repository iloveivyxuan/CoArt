import './blocks/index';
import './css/global.css';
import { Blockly } from './js/canvas';

document.addEventListener("DOMContentLoaded", function() {
  const blocks = `
<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="ToBgSGe0VKnuM8cpOb8">sides</variable>
    <variable id="SP1H)N2MMVK7p|k6fk~E">radius</variable>
    <variable id="EgVpI;If-tM(VN@])mey">angle</variable>
    <variable id="g3[^wJ5m%EvFJQ1QiUgi">i</variable>
    <variable id="SwJAdllcHA~xQ^aZi53">x</variable>
    <variable id="j;a$=f4,=bY/|xA.PTM/">y</variable>
  </variables>
  <block type="procedures_defnoreturn" id="*-EB[x2WL!Brc##M50@P" x="48" y="66">
    <mutation>
      <arg name="sides" varid="ToBgSGe0VKnuM8cpOb8"></arg>
      <arg name="radius" varid="SP1H)N2MMVK7p|k6fk~E"></arg>
    </mutation>
    <field name="NAME">polygon</field>
    <field name="*RQ#VZ7FveGaDeX/[b8H">sides</field>
    <field name="h*v/LKTMU%Ka/NPSi!Xm">radius</field>
    <statement name="STACK">
      <block type="begin_shape" id="D7bFh](nSL+i,esZ6ml%">
        <next>
          <block type="variables_set" id="u!.EM8hsG7hdg?IlG-kZ">
            <field name="VAR" id="EgVpI;If-tM(VN@])mey">angle</field>
            <value name="VALUE">
              <block type="math_arithmetic" id="flC3dCZ}o3!IyoZmMc/)">
                <field name="OP">DIVIDE</field>
                <value name="A">
                  <shadow type="math_number" id="-R.;KA8I~UFn~(oRq?">
                    <field name="NUM">360</field>
                  </shadow>
                </value>
                <value name="B">
                  <shadow type="math_number" id="fz9leCBOZU1,k?.*#mR4">
                    <field name="NUM">1</field>
                  </shadow>
                  <block type="variables_get" id="#)kcR8ID1@4^nP]w0h$H">
                    <field name="VAR" id="ToBgSGe0VKnuM8cpOb8">sides</field>
                  </block>
                </value>
              </block>
            </value>
            <next>
              <block type="controls_for" id="6D.w0}aQqFj.p#eqI98">
                <field name="VAR" id="g3[^wJ5m%EvFJQ1QiUgi">i</field>
                <value name="FROM">
                  <shadow type="math_number" id="0l~XXUuOv;vi@G}~V)LD">
                    <field name="NUM">0</field>
                  </shadow>
                </value>
                <value name="TO">
                  <shadow type="math_number" id="x?%(wgZtB5Q;O#j[.)Tz">
                    <field name="NUM">3</field>
                  </shadow>
                  <block type="variables_get" id="|C!B+f[ydPQIwIRQ,VTi">
                    <field name="VAR" id="ToBgSGe0VKnuM8cpOb8">sides</field>
                  </block>
                </value>
                <value name="BY">
                  <shadow type="math_number" id="$y7R/XxO]Iza([OREUy;">
                    <field name="NUM">1</field>
                  </shadow>
                </value>
                <statement name="DO">
                  <block type="variables_set" id="H{=w!E|zf_wgCsXYMl">
                    <field name="VAR" id="SwJAdllcHA~xQ^aZi53">x</field>
                    <value name="VALUE">
                      <block type="math_arithmetic" id="D)~v/gdFA!PeEUeH*8z_">
                        <field name="OP">MULTIPLY</field>
                        <value name="A">
                          <shadow type="math_number" id="=}bpE*Iwt7%[B]03P~W">
                            <field name="NUM">1</field>
                          </shadow>
                          <block type="math_trig" id="apzL%^myTP?m%)V1I%1H">
                            <field name="OP">COS</field>
                            <value name="NUM">
                              <shadow type="math_number" id="^].yg4B9#=#E$9EkO8=">
                                <field name="NUM">45</field>
                              </shadow>
                              <block type="math_arithmetic" id="M.lpYAc6oe;SCsGP0=Gy">
                                <field name="OP">MULTIPLY</field>
                                <value name="A">
                                  <shadow type="math_number" id=".,:,o|d7a2xaH,ju0nad">
                                    <field name="NUM">1</field>
                                  </shadow>
                                  <block type="variables_get" id="./CUcu%[)mB]TgIQv[2R">
                                    <field name="VAR" id="EgVpI;If-tM(VN@])mey">angle</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <shadow type="math_number" id="Fl2|b^Yb*gi@m3Y~O@+|">
                                    <field name="NUM">1</field>
                                  </shadow>
                                  <block type="variables_get" id="_LIDIfcZXA(m%w86E.?j">
                                    <field name="VAR" id="g3[^wJ5m%EvFJQ1QiUgi">i</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                          </block>
                        </value>
                        <value name="B">
                          <shadow type="math_number" id="ihx1aYh^)zo[)~ef1uU">
                            <field name="NUM">1</field>
                          </shadow>
                          <block type="variables_get" id="a%ZJ9ue%AUsbAq3=0l%@">
                            <field name="VAR" id="SP1H)N2MMVK7p|k6fk~E">radius</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <next>
                      <block type="variables_set" id="w6w(ySn~]E!$RJmGMzDv">
                        <field name="VAR" id="j;a$=f4,=bY/|xA.PTM/">y</field>
                        <value name="VALUE">
                          <block type="math_arithmetic" id="*k/M5]OguvfIeHZK;6{:">
                            <field name="OP">MULTIPLY</field>
                            <value name="A">
                              <shadow type="math_number">
                                <field name="NUM">1</field>
                              </shadow>
                              <block type="math_trig" id="#w@ahB=Y^d#XP?4|/ZFd">
                                <field name="OP">SIN</field>
                                <value name="NUM">
                                  <shadow type="math_number">
                                    <field name="NUM">45</field>
                                  </shadow>
                                  <block type="math_arithmetic" id="dXmckn[t+zuc[Pgex)+">
                                    <field name="OP">MULTIPLY</field>
                                    <value name="A">
                                      <shadow type="math_number">
                                        <field name="NUM">1</field>
                                      </shadow>
                                      <block type="variables_get" id="LWZQT-e+BUnm@A[YvW,}">
                                        <field name="VAR" id="EgVpI;If-tM(VN@])mey">angle</field>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <shadow type="math_number">
                                        <field name="NUM">1</field>
                                      </shadow>
                                      <block type="variables_get" id="Ao%#QgJX+xqt[U)@K3/">
                                        <field name="VAR" id="g3[^wJ5m%EvFJQ1QiUgi">i</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <value name="B">
                              <shadow type="math_number">
                                <field name="NUM">1</field>
                              </shadow>
                              <block type="variables_get" id="S0RG4WtS!9{|0im~+3DC">
                                <field name="VAR" id="SP1H)N2MMVK7p|k6fk~E">radius</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <next>
                          <block type="vertex" id="QmetyDe5SFr0mrZ-(n%z">
                            <value name="x">
                              <shadow type="math_number" id="3OundJe7.cPqtrn::QYM">
                                <field name="NUM">0</field>
                              </shadow>
                              <block type="variables_get" id="%Vy)C[?ycbm8r6^-;V{">
                                <field name="VAR" id="SwJAdllcHA~xQ^aZi53">x</field>
                              </block>
                            </value>
                            <value name="y">
                              <shadow type="math_number" id="(xO[c@fheNdhbJ(5/,vu">
                                <field name="NUM">0</field>
                              </shadow>
                              <block type="variables_get" id="d[%)GVDF1?tN(D0^Gp/K">
                                <field name="VAR" id="j;a$=f4,=bY/|xA.PTM/">y</field>
                              </block>
                            </value>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </statement>
                <next>
                  <block type="end_shape" id="4[Qgg-^0w;7cj$tH5dFB"></block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="setup" id="Pe?(lKD%g/}!Xi?jW.Qo" x="57" y="484">
    <statement name="setup">
      <block type="create_canvas" id=")LA1BKyVBwo@n/-OA8?w">
        <field name="width">350</field>
        <field name="height">350</field>
        <next>
          <block type="translate" id="$X}Kx}LhkAQ$VwmDt1oi">
            <field name="x">175</field>
            <field name="y">175</field>
            <next>
              <block type="procedures_callnoreturn" id="Y.:BMiT-8N2x*l{9h?J1">
                <mutation name="polygon">
                  <arg name="sides"></arg>
                  <arg name="radius"></arg>
                </mutation>
                <value name="ARG0">
                  <block type="math_number" id="@SHfWG*IoT2^BKRXO#-">
                    <field name="NUM">3</field>
                  </block>
                </value>
                <value name="ARG1">
                  <block type="math_number" id="O0pHS$}1A?USn$HStJe|">
                    <field name="NUM">100</field>
                  </block>
                </value>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
</xml>
  `;
  const xml = Blockly.Xml.textToDom(blocks);
  Blockly.Xml.domToWorkspace(xml, window.workspace);
});
