import p5 from 'p5';
import * as Blockly from 'blockly';
import { draw_blob, drawRectangle, rotateByDegree } from "./blocks/index";
import './css/global.css';
import './css/rectangle_tutorial.css';

window.draw_blob = draw_blob;
window.drawRectangle = drawRectangle;
window.rotateByDegree = rotateByDegree;

const randomChallenges = [
  {
    blocks: `
      <xml xmlns="https://developers.google.com/blockly/xml">
        <block type="procedures_defnoreturn" id="/6dc@*t,sy6Qh9xirbym" x="93" y="46">
          <field name="NAME">draw</field>
          <comment pinned="false" h="80" w="160">Draw function will be executed repeatedly</comment>
          <statement name="STACK">
            <block type="move_to_center" id="G=/h+*zV}aU|Ca9jph{t">
              <next>
                <block type="controls_repeat_ext" id="UE0Y!l2KLhC047=:#IUP">
                  <value name="TIMES">
                    <shadow type="math_number" id="MN0hgD5F@Xv.LK.F;C+s">
                      <field name="NUM">60</field>
                    </shadow>
                  </value>
                  <statement name="DO">
                    <block type="rotate_by_degree" id="8_}(QaWqOTdeq7aK]6~B">
                      <value name="degree">
                        <block type="math_number" id="=Q$h[lZEU}d^2Fj!h7,">
                          <field name="NUM">4</field>
                        </block>
                      </value>
                      <next>
                        <block type="draw_rectangle" id="K4#S/H~dz;G_g$51z4pV">
                          <value name="position_x">
                            <block type="math_number" id="N:^A[SbM2]6lA;wG658">
                              <field name="NUM">10</field>
                            </block>
                          </value>
                          <value name="position_y">
                            <block type="math_number" id="mw}j%}F:5xnJu85Zz-a~">
                              <field name="NUM">10</field>
                            </block>
                          </value>
                          <value name="width">
                            <block type="math_number" id="nr4c7ienpG-V]|Na#!Ch">
                              <field name="NUM">80</field>
                            </block>
                          </value>
                          <value name="height">
                            <block type="math_number" id="ri7t+ZKzUsmnNlTIXvkU">
                              <field name="NUM">80</field>
                            </block>
                          </value>
                          <value name="color">
                            <block type="colour_picker" id="%6w^?.=[6EZRW-t573v">
                              <field name="COLOUR">#ff6666</field>
                            </block>
                          </value>
                        </block>
                      </next>
                    </block>
                  </statement>
                  <next>
                    <block type="controls_repeat_ext" id="nCf+v~ge8GXfzgG9(U,[">
                      <value name="TIMES">
                        <shadow type="math_number" id="IXg|rr_|v.=HylH*f=cj">
                          <field name="NUM">60</field>
                        </shadow>
                      </value>
                      <statement name="DO">
                        <block type="rotate_by_degree" id="1nV-8yQ;Q@7[P[nD2jH0">
                          <value name="degree">
                            <block type="math_number" id="$+o?^5]8~f^m^Fum!x-">
                              <field name="NUM">4</field>
                            </block>
                          </value>
                          <next>
                            <block type="draw_rectangle" id="L;?/ssoWFE/5w9}V}mav">
                              <value name="position_x">
                                <block type="math_number" id="qnw(1OY@_DPH@ry})XyM">
                                  <field name="NUM">40</field>
                                </block>
                              </value>
                              <value name="position_y">
                                <block type="math_number" id="1_xBZst8x%nP@|uKV=!*">
                                  <field name="NUM">40</field>
                                </block>
                              </value>
                              <value name="width">
                                <block type="math_number" id="HhV@y==-@tSB/UYpY[e)">
                                  <field name="NUM">100</field>
                                </block>
                              </value>
                              <value name="height">
                                <block type="math_number" id="E4@aa3aeo$7=;.N7+)R3">
                                  <field name="NUM">100</field>
                                </block>
                              </value>
                              <value name="color">
                                <block type="colour_picker" id="W:SZR+Zj*?C-4-{$yMr">
                                  <field name="COLOUR">#666666</field>
                                </block>
                              </value>
                            </block>
                          </next>
                        </block>
                      </statement>
                      <next>
                        <block type="controls_repeat_ext" id=";c.Swvu0Jat1T3BmEc=">
                          <value name="TIMES">
                            <shadow type="math_number" id="X9/l^h[Z;mGOeh*KR~g+">
                              <field name="NUM">60</field>
                            </shadow>
                          </value>
                          <statement name="DO">
                            <block type="rotate_by_degree" id="jHpi*bT8Zzg=#N89byx">
                              <value name="degree">
                                <block type="math_number" id="+k8.+TW;]W*N+Gc59G,">
                                  <field name="NUM">4</field>
                                </block>
                              </value>
                              <next>
                                <block type="draw_rectangle" id="=bPmaPQcK#u$dF!9^8z0">
                                  <value name="position_x">
                                    <block type="math_number" id="kKx(/U==M4hp-rLwI,zG">
                                      <field name="NUM">80</field>
                                    </block>
                                  </value>
                                  <value name="position_y">
                                    <block type="math_number" id="agF4{(pa2n(3tRE4Z*/_">
                                      <field name="NUM">80</field>
                                    </block>
                                  </value>
                                  <value name="width">
                                    <block type="math_number" id="8?q}@!ml)QQ+BAafPFF;">
                                      <field name="NUM">100</field>
                                    </block>
                                  </value>
                                  <value name="height">
                                    <block type="math_number" id="Ls-f;_{uW?QR0+S15o2?">
                                      <field name="NUM">100</field>
                                    </block>
                                  </value>
                                  <value name="color">
                                    <block type="colour_picker" id="=0]?5@#2}7dv6B;rfG">
                                      <field name="COLOUR">#cccccc</field>
                                    </block>
                                  </value>
                                </block>
                              </next>
                            </block>
                          </statement>
                        </block>
                      </next>
                    </block>
                  </next>
                </block>
              </next>
            </block>
          </statement>
        </block>
      </xml>
    `,
    code: `

    `
  }, {
    blocks: `
      <xml xmlns="https://developers.google.com/blockly/xml">
        <variables>
          <variable id="AGenXV]55]#?X1M%8$HZ">step</variable>
        </variables>
        <block type="procedures_defnoreturn" id="/6dc@*t,sy6Qh9xirbym" x="144" y="102">
          <field name="NAME">draw</field>
          <comment pinned="false" h="80" w="160">Draw function will be executed repeatedly</comment>
          <statement name="STACK">
            <block type="variables_set" id="HGO]Yy(s3/n7:QlC=fsw">
              <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">step</field>
              <value name="VALUE">
                <block type="math_number" id="m#??N[gKm4~wE($/Vhbl">
                  <field name="NUM">15</field>
                </block>
              </value>
              <next>
                <block type="controls_repeat_ext" id="UE0Y!l2KLhC047=:#IUP">
                  <value name="TIMES">
                    <shadow type="math_number" id="MN0hgD5F@Xv.LK.F;C+s">
                      <field name="NUM">60</field>
                    </shadow>
                  </value>
                  <statement name="DO">
                    <block type="draw_rectangle" id="6.!gm@VQKb{)ngny=L#n">
                      <value name="position_x">
                        <block type="variables_get" id="XWyvA4M$2?zPf(69=3C/">
                          <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">step</field>
                        </block>
                      </value>
                      <value name="position_y">
                        <block type="variables_get" id="[anYMuea3e/z=)T-|rQ}">
                          <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">step</field>
                        </block>
                      </value>
                      <value name="width">
                        <block type="math_number" id="BqDzlSff}^l_WTpN=Gp">
                          <field name="NUM">80</field>
                        </block>
                      </value>
                      <value name="height">
                        <block type="math_number" id="p#B=K|nOl8E=AhU|*|$p">
                          <field name="NUM">80</field>
                        </block>
                      </value>
                      <value name="color">
                        <block type="colour_picker" id=",VVmPfcg.%)z4)R~t![G">
                          <field name="COLOUR">#9999ff</field>
                        </block>
                      </value>
                      <next>
                        <block type="math_change" id="s!M#gH3NalvG3g;s=XNl">
                          <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">step</field>
                          <value name="DELTA">
                            <shadow type="math_number" id="}7:K:t)CK1_*L1qk}N:(">
                              <field name="NUM">4</field>
                            </shadow>
                          </value>
                        </block>
                      </next>
                    </block>
                  </statement>
                </block>
              </next>
            </block>
          </statement>
        </block>
      </xml>
    `,
    code: ``
  }, {
    blocks: `
      <xml xmlns="https://developers.google.com/blockly/xml">
        <variables>
          <variable id="AGenXV]55]#?X1M%8$HZ">step</variable>
        </variables>
        <block type="procedures_defnoreturn" id="/6dc@*t,sy6Qh9xirbym" x="140" y="0">
          <field name="NAME">draw</field>
          <comment pinned="false" h="80" w="160">Draw function will be executed repeatedly</comment>
          <statement name="STACK">
            <block type="variables_set" id="HGO]Yy(s3/n7:QlC=fsw">
              <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">step</field>
              <value name="VALUE">
                <block type="math_number" id="m#??N[gKm4~wE($/Vhbl">
                  <field name="NUM">15</field>
                </block>
              </value>
              <next>
                <block type="controls_repeat_ext" id="~B3EaU_tt{*Oh2Q{7@2k">
                  <value name="TIMES">
                    <shadow type="math_number" id=":Av31!]DTQQ=N+?71QVc">
                      <field name="NUM">60</field>
                    </shadow>
                  </value>
                  <statement name="DO">
                    <block type="draw_rectangle" id="]({7l=]6awPRQKjnXAXw">
                      <value name="position_x">
                        <block type="variables_get" id="Vmv9=6eh.:/V{ps7uo-Y">
                          <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">step</field>
                        </block>
                      </value>
                      <value name="position_y">
                        <block type="variables_get" id="3z0aDDui0$K?hCFGX0#U">
                          <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">step</field>
                        </block>
                      </value>
                      <value name="width">
                        <block type="math_number" id="^9:$td4:f)V+xs58QjAF">
                          <field name="NUM">80</field>
                        </block>
                      </value>
                      <value name="height">
                        <block type="math_number" id="ChaVSIRBbYYj}|=%7d6,">
                          <field name="NUM">80</field>
                        </block>
                      </value>
                      <value name="color">
                        <block type="colour_picker" id="ufz)whz0WF@.{S|0%:zA">
                          <field name="COLOUR">#cccccc</field>
                        </block>
                      </value>
                      <next>
                        <block type="math_change" id="jxLQvmAjQFIg_|NLb}qo">
                          <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">step</field>
                          <value name="DELTA">
                            <shadow type="math_number" id=";g*B2l[hh2J4)W_+7tn(">
                              <field name="NUM">4</field>
                            </shadow>
                          </value>
                        </block>
                      </next>
                    </block>
                  </statement>
                  <next>
                    <block type="variables_set" id="Gm0K,0xR#_PDDhru1g6a">
                      <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">step</field>
                      <value name="VALUE">
                        <block type="math_number" id="ILOg};Gzx@co!yob8^pO">
                          <field name="NUM">18</field>
                        </block>
                      </value>
                      <next>
                        <block type="controls_repeat_ext" id="UE0Y!l2KLhC047=:#IUP">
                          <value name="TIMES">
                            <shadow type="math_number" id="MN0hgD5F@Xv.LK.F;C+s">
                              <field name="NUM">20</field>
                            </shadow>
                          </value>
                          <statement name="DO">
                            <block type="draw_rectangle" id="6.!gm@VQKb{)ngny=L#n">
                              <value name="position_x">
                                <block type="variables_get" id="XWyvA4M$2?zPf(69=3C/">
                                  <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">step</field>
                                </block>
                              </value>
                              <value name="position_y">
                                <block type="variables_get" id="[anYMuea3e/z=)T-|rQ}">
                                  <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">step</field>
                                </block>
                              </value>
                              <value name="width">
                                <block type="math_number" id="BqDzlSff}^l_WTpN=Gp">
                                  <field name="NUM">120</field>
                                </block>
                              </value>
                              <value name="height">
                                <block type="math_number" id="p#B=K|nOl8E=AhU|*|$p">
                                  <field name="NUM">120</field>
                                </block>
                              </value>
                              <value name="color">
                                <block type="colour_picker" id=",VVmPfcg.%)z4)R~t![G">
                                  <field name="COLOUR">#c0c0c0</field>
                                </block>
                              </value>
                              <next>
                                <block type="math_change" id="s!M#gH3NalvG3g;s=XNl">
                                  <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">step</field>
                                  <value name="DELTA">
                                    <shadow type="math_number" id="}7:K:t)CK1_*L1qk}N:(">
                                      <field name="NUM">10</field>
                                    </shadow>
                                  </value>
                                </block>
                              </next>
                            </block>
                          </statement>
                          <next>
                            <block type="variables_set" id="+}C:C;bj*aKZJ4si2PfJ">
                              <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">step</field>
                              <value name="VALUE">
                                <block type="math_number" id="hWG567..UMdYk!S.zn;8">
                                  <field name="NUM">40</field>
                                </block>
                              </value>
                              <next>
                                <block type="controls_repeat_ext" id="UI6N@{@WS=g)8G8UNCd}">
                                  <value name="TIMES">
                                    <shadow type="math_number" id="[@c0=N(lP6scBi!8zN2h">
                                      <field name="NUM">12</field>
                                    </shadow>
                                  </value>
                                  <statement name="DO">
                                    <block type="draw_rectangle" id="w1p:r)T-Ioi,qaA|?blS">
                                      <value name="position_x">
                                        <block type="variables_get" id="ddocdLA:S^G8EMNs+Vz3">
                                          <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">step</field>
                                        </block>
                                      </value>
                                      <value name="position_y">
                                        <block type="variables_get" id="aFh[lt[L^ao4%+pP8H2O">
                                          <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">step</field>
                                        </block>
                                      </value>
                                      <value name="width">
                                        <block type="math_number" id="]gYH[Ctu%6|drT8T*R]/">
                                          <field name="NUM">200</field>
                                        </block>
                                      </value>
                                      <value name="height">
                                        <block type="math_number" id="-A|LbhBf33^=ET+=?v^">
                                          <field name="NUM">200</field>
                                        </block>
                                      </value>
                                      <value name="color">
                                        <block type="colour_picker" id="{DR-Mp3=.;I}QN.GV|]f">
                                          <field name="COLOUR">#999999</field>
                                        </block>
                                      </value>
                                      <next>
                                        <block type="math_change" id="Lwq:103AB~CwXg!qaz+6">
                                          <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">step</field>
                                          <value name="DELTA">
                                            <shadow type="math_number" id="|#AvMOG(C_/#8o,~K_XM">
                                              <field name="NUM">6</field>
                                            </shadow>
                                          </value>
                                        </block>
                                      </next>
                                    </block>
                                  </statement>
                                </block>
                              </next>
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
      </xml>
    `,
    code: ``
  }, {
    blocks: `
      <xml xmlns="https://developers.google.com/blockly/xml">
        <variables>
          <variable id="AGenXV]55]#?X1M%8$HZ">step</variable>
        </variables>
        <block type="procedures_defnoreturn" id="/6dc@*t,sy6Qh9xirbym" x="16" y="52">
          <field name="NAME">draw</field>
          <comment pinned="false" h="80" w="160">Draw function will be executed repeatedly</comment>
          <statement name="STACK">
            <block type="move_to_center" id="4rgZZ*n8iK?@Mgw|miHQ">
              <next>
                <block type="variables_set" id="HGO]Yy(s3/n7:QlC=fsw">
                  <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">step</field>
                  <value name="VALUE">
                    <block type="math_number" id="m#??N[gKm4~wE($/Vhbl">
                      <field name="NUM">2</field>
                    </block>
                  </value>
                  <next>
                    <block type="controls_repeat_ext" id="~B3EaU_tt{*Oh2Q{7@2k">
                      <value name="TIMES">
                        <shadow type="math_number" id=":Av31!]DTQQ=N+?71QVc">
                          <field name="NUM">120</field>
                        </shadow>
                      </value>
                      <statement name="DO">
                        <block type="rotate_by_degree" id="Ol}XF1N8w{J4:rbjWJ[N">
                          <value name="degree">
                            <block type="math_number" id="PP4OURKqF?fS%-i(0ywV">
                              <field name="NUM">2</field>
                            </block>
                          </value>
                          <next>
                            <block type="draw_rectangle" id="]({7l=]6awPRQKjnXAXw">
                              <value name="position_x">
                                <block type="math_number" id=",LS[AkXf@)nery@_d,(+">
                                  <field name="NUM">20</field>
                                </block>
                              </value>
                              <value name="position_y">
                                <block type="math_number" id="-hpcO?Y973)7Aky#ahf/">
                                  <field name="NUM">20</field>
                                </block>
                              </value>
                              <value name="width">
                                <block type="variables_get" id="Ccg)96q0W[4iVOZ5UR%{">
                                  <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">step</field>
                                </block>
                              </value>
                              <value name="height">
                                <block type="variables_get" id="+ScAxPwKj_UJ@e3n~Ug">
                                  <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">step</field>
                                </block>
                              </value>
                              <value name="color">
                                <block type="colour_picker" id="ufz)whz0WF@.{S|0%:zA">
                                  <field name="COLOUR">#ccccff</field>
                                </block>
                              </value>
                              <next>
                                <block type="math_change" id="jxLQvmAjQFIg_|NLb}qo">
                                  <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">step</field>
                                  <value name="DELTA">
                                    <shadow type="math_number" id=";g*B2l[hh2J4)W_+7tn(">
                                      <field name="NUM">1</field>
                                    </shadow>
                                  </value>
                                </block>
                              </next>
                            </block>
                          </next>
                        </block>
                      </statement>
                    </block>
                  </next>
                </block>
              </next>
            </block>
          </statement>
        </block>
      </xml>
    `,
    code: ``
  }, {
    blocks: `
      <xml xmlns="https://developers.google.com/blockly/xml">
        <variables>
          <variable id="AGenXV]55]#?X1M%8$HZ">n</variable>
        </variables>
        <block type="procedures_defnoreturn" id="/6dc@*t,sy6Qh9xirbym" x="109" y="77">
          <field name="NAME">draw</field>
          <comment pinned="false" h="80" w="160">Draw function will be executed repeatedly</comment>
          <statement name="STACK">
            <block type="move_to_center" id="4rgZZ*n8iK?@Mgw|miHQ">
              <next>
                <block type="variables_set" id="HGO]Yy(s3/n7:QlC=fsw">
                  <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">n</field>
                  <value name="VALUE">
                    <block type="math_number" id="m#??N[gKm4~wE($/Vhbl">
                      <field name="NUM">2</field>
                    </block>
                  </value>
                  <next>
                    <block type="controls_repeat_ext" id="~B3EaU_tt{*Oh2Q{7@2k">
                      <value name="TIMES">
                        <shadow type="math_number" id=":Av31!]DTQQ=N+?71QVc">
                          <field name="NUM">150</field>
                        </shadow>
                      </value>
                      <statement name="DO">
                        <block type="rotate_by_degree" id="Ol}XF1N8w{J4:rbjWJ[N">
                          <value name="degree">
                            <block type="math_number" id="PP4OURKqF?fS%-i(0ywV">
                              <field name="NUM">2</field>
                            </block>
                          </value>
                          <next>
                            <block type="draw_rectangle" id="]({7l=]6awPRQKjnXAXw">
                              <value name="position_x">
                                <block type="variables_get" id="lXio[4rtp6PCET#PxDE{">
                                  <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">n</field>
                                </block>
                              </value>
                              <value name="position_y">
                                <block type="variables_get" id="$IKV;LG+t~X=60*3xLEu">
                                  <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">n</field>
                                </block>
                              </value>
                              <value name="width">
                                <block type="variables_get" id="Ccg)96q0W[4iVOZ5UR%{">
                                  <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">n</field>
                                </block>
                              </value>
                              <value name="height">
                                <block type="variables_get" id="+ScAxPwKj_UJ@e3n~Ug">
                                  <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">n</field>
                                </block>
                              </value>
                              <value name="color">
                                <block type="colour_picker" id="ufz)whz0WF@.{S|0%:zA">
                                  <field name="COLOUR">#ccccff</field>
                                </block>
                              </value>
                              <next>
                                <block type="math_change" id="jxLQvmAjQFIg_|NLb}qo">
                                  <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">n</field>
                                  <value name="DELTA">
                                    <shadow type="math_number" id=";g*B2l[hh2J4)W_+7tn(">
                                      <field name="NUM">0.6</field>
                                    </shadow>
                                  </value>
                                </block>
                              </next>
                            </block>
                          </next>
                        </block>
                      </statement>
                    </block>
                  </next>
                </block>
              </next>
            </block>
          </statement>
        </block>
      </xml>
    `
  }, {
    blocks: `
      <xml xmlns="https://developers.google.com/blockly/xml">
        <variables>
          <variable id="AGenXV]55]#?X1M%8$HZ">n</variable>
        </variables>
        <block type="procedures_defnoreturn" id="/6dc@*t,sy6Qh9xirbym" x="107" y="2">
          <field name="NAME">draw</field>
          <comment pinned="false" h="80" w="160">Draw function will be executed repeatedly</comment>
          <statement name="STACK">
            <block type="move_to_center" id="4rgZZ*n8iK?@Mgw|miHQ">
              <next>
                <block type="controls_repeat_ext" id=";M;7mw.ZauLXQ_*n%AM,">
                  <value name="TIMES">
                    <shadow type="math_number" id="4KvXGCxL2?YF,%rxRsR6">
                      <field name="NUM">6</field>
                    </shadow>
                  </value>
                  <statement name="DO">
                    <block type="rotate_by_degree" id="{]9-4MvoU%weP^fljfb}">
                      <value name="degree">
                        <block type="math_number" id="M8di%]IZ%fO(?Jm!+K?2">
                          <field name="NUM">60</field>
                        </block>
                      </value>
                      <next>
                        <block type="variables_set" id="(fhw)y*chc@Vg$YDGn7N">
                          <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">n</field>
                          <value name="VALUE">
                            <block type="math_number" id="t~4@uwLK__gD)ZJuIJX|">
                              <field name="NUM">2</field>
                            </block>
                          </value>
                          <next>
                            <block type="controls_repeat_ext" id="umMP?z.?EM|P|/s:W*Yo">
                              <value name="TIMES">
                                <shadow type="math_number" id="9s07bed}3W{q.B*zlrF">
                                  <field name="NUM">150</field>
                                </shadow>
                              </value>
                              <statement name="DO">
                                <block type="rotate_by_degree" id="M)5#twwy+uOP[S?*/|*1">
                                  <value name="degree">
                                    <block type="math_number" id="8s~=l!qe#{Q%?Zmc$+I">
                                      <field name="NUM">3</field>
                                    </block>
                                  </value>
                                  <next>
                                    <block type="draw_rectangle" id="C[YGRB!jiL+~0Qw(8Peo">
                                      <value name="position_x">
                                        <block type="variables_get" id="d_lN0wr*E?.KpM+xSK)l">
                                          <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">n</field>
                                        </block>
                                      </value>
                                      <value name="position_y">
                                        <block type="variables_get" id="cXKmSE4NY7u1@Fj:LeDg">
                                          <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">n</field>
                                        </block>
                                      </value>
                                      <value name="width">
                                        <block type="variables_get" id="$B2A8F#(~tq?9{;jf(#">
                                          <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">n</field>
                                        </block>
                                      </value>
                                      <value name="height">
                                        <block type="variables_get" id="^U+i/AS_574)Sd#^BY:x">
                                          <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">n</field>
                                        </block>
                                      </value>
                                      <value name="color">
                                        <block type="colour_picker" id=":3.d!v6q0LK:]U=2zW|:">
                                          <field name="COLOUR">#cccccc</field>
                                        </block>
                                      </value>
                                      <next>
                                        <block type="math_change" id="^Q;!BU|q6q)$#ro[aC8">
                                          <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">n</field>
                                          <value name="DELTA">
                                            <shadow type="math_number" id="zw**3=72G-q(eX#Ls}tA">
                                              <field name="NUM">10</field>
                                            </shadow>
                                          </value>
                                        </block>
                                      </next>
                                    </block>
                                  </next>
                                </block>
                              </statement>
                            </block>
                          </next>
                        </block>
                      </next>
                    </block>
                  </statement>
                  <next>
                    <block type="rotate_by_degree" id="so[UD4FV6uePhSj2.$9Y">
                      <value name="degree">
                        <block type="math_number" id="{/;wE2QF(~@6Lw;NDK-">
                          <field name="NUM">3</field>
                        </block>
                      </value>
                      <next>
                        <block type="controls_repeat_ext" id="P|9faQgu3xTdtp!ie-)~">
                          <value name="TIMES">
                            <shadow type="math_number" id="cEk~^,-O#QQy_#/UjLHD">
                              <field name="NUM">6</field>
                            </shadow>
                          </value>
                          <statement name="DO">
                            <block type="rotate_by_degree" id="}4G+|!:~QXLUY*;HhC!">
                              <value name="degree">
                                <block type="math_number" id="*pU26o]dq[mGXz$VH/JN">
                                  <field name="NUM">60</field>
                                </block>
                              </value>
                              <next>
                                <block type="variables_set" id="HGO]Yy(s3/n7:QlC=fsw">
                                  <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">n</field>
                                  <value name="VALUE">
                                    <block type="math_number" id="m#??N[gKm4~wE($/Vhbl">
                                      <field name="NUM">2</field>
                                    </block>
                                  </value>
                                  <next>
                                    <block type="controls_repeat_ext" id="~B3EaU_tt{*Oh2Q{7@2k">
                                      <value name="TIMES">
                                        <shadow type="math_number" id=":Av31!]DTQQ=N+?71QVc">
                                          <field name="NUM">150</field>
                                        </shadow>
                                      </value>
                                      <statement name="DO">
                                        <block type="rotate_by_degree" id="Ol}XF1N8w{J4:rbjWJ[N">
                                          <value name="degree">
                                            <block type="math_number" id="PP4OURKqF?fS%-i(0ywV">
                                              <field name="NUM">3</field>
                                            </block>
                                          </value>
                                          <next>
                                            <block type="draw_rectangle" id="]({7l=]6awPRQKjnXAXw">
                                              <value name="position_x">
                                                <block type="variables_get" id="lXio[4rtp6PCET#PxDE{">
                                                  <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">n</field>
                                                </block>
                                              </value>
                                              <value name="position_y">
                                                <block type="variables_get" id="$IKV;LG+t~X=60*3xLEu">
                                                  <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">n</field>
                                                </block>
                                              </value>
                                              <value name="width">
                                                <block type="variables_get" id="Ccg)96q0W[4iVOZ5UR%{">
                                                  <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">n</field>
                                                </block>
                                              </value>
                                              <value name="height">
                                                <block type="variables_get" id="+ScAxPwKj_UJ@e3n~Ug">
                                                  <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">n</field>
                                                </block>
                                              </value>
                                              <value name="color">
                                                <block type="colour_picker" id="ufz)whz0WF@.{S|0%:zA">
                                                  <field name="COLOUR">#993300</field>
                                                </block>
                                              </value>
                                              <next>
                                                <block type="math_change" id="jxLQvmAjQFIg_|NLb}qo">
                                                  <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">n</field>
                                                  <value name="DELTA">
                                                    <shadow type="math_number" id=";g*B2l[hh2J4)W_+7tn(">
                                                      <field name="NUM">10</field>
                                                    </shadow>
                                                  </value>
                                                </block>
                                              </next>
                                            </block>
                                          </next>
                                        </block>
                                      </statement>
                                    </block>
                                  </next>
                                </block>
                              </next>
                            </block>
                          </statement>
                        </block>
                      </next>
                    </block>
                  </next>
                </block>
              </next>
            </block>
          </statement>
        </block>
      </xml>
    `
  }
];

const challenges = [
  {
    description: "Can you Draw a square?",
    blocks: `
      <xml xmlns="https://developers.google.com/blockly/xml">
        <block type="procedures_defnoreturn" id="[@,NkfxhoR[dJ[e=o8aJ" x="137" y="132">
          <field name="NAME">draw</field>
          <comment pinned="false" h="80" w="160">Draw function will be executed repeatedly</comment>
          <statement name="STACK">
            <block type="draw_rectangle" id="K4#S/H~dz;G_g$51z4pV">
              <value name="position_x">
                <block type="math_number" id="N:^A[SbM2]6lA;wG658">
                  <field name="NUM">0</field>
                </block>
              </value>
              <value name="position_y">
                <block type="math_number" id="mw}j%}F:5xnJu85Zz-a~">
                  <field name="NUM">0</field>
                </block>
              </value>
              <value name="width">
                <block type="math_number" id="nr4c7ienpG-V]|Na#!Ch">
                  <field name="NUM">100</field>
                </block>
              </value>
              <value name="height">
                <block type="math_number" id="ri7t+ZKzUsmnNlTIXvkU">
                  <field name="NUM">100</field>
                </block>
              </value>
              <value name="color">
                <block type="colour_picker" id="%6w^?.=[6EZRW-t573v">
                  <field name="COLOUR">#993399</field>
                </block>
              </value>
            </block>
          </statement>
        </block>
      </xml>
    `,
    code: `
      var sketch = function(p) {
        p.setup = function() {
          p.createCanvas(350, 350);
          p.background("#fff");
          p.noFill();
          p.noLoop();
        }
        p.draw = function() {
          p.stroke('#993399');
          p.rect(0, 0, 100, 100);
        }
      }
      var demo = new p5(sketch, 'demo');
    `,
    toolbox: `
      <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
        <block type="procedures_defnoreturn">
          <field name="NAME">draw</field>
          <comment pinned="false" h="80" w="160">Draw function will be executed repeatedly</comment>
        </block>
        <block type="draw_rectangle" id="K4#S/H~dz;G_g$51z4pV">
          <value name="position_x">
            <block type="math_number" id="N:^A[SbM2]6lA;wG658">
              <field name="NUM">0</field>
            </block>
          </value>
          <value name="position_y">
            <block type="math_number" id="mw}j%}F:5xnJu85Zz-a~">
              <field name="NUM">0</field>
            </block>
          </value>
          <value name="width">
            <block type="math_number" id="nr4c7ienpG-V]|Na#!Ch">
              <field name="NUM">100</field>
            </block>
          </value>
          <value name="height">
            <block type="math_number" id="ri7t+ZKzUsmnNlTIXvkU">
              <field name="NUM">100</field>
            </block>
          </value>
          <value name="color">
            <block type="colour_picker" id="%6w^?.=[6EZRW-t573v">
              <field name="COLOUR">#993399</field>
            </block>
          </value>
        </block>
      </xml>
    `
  }, {
    description: "Can you draw a squre and rotate it by 4 degrees?",
    blocks: `
      <xml xmlns="https://developers.google.com/blockly/xml">
        <block type="procedures_defnoreturn" id="xI{zeGY;piZg;j3c3w(4" x="235" y="226">
          <field name="NAME">draw</field>
          <comment pinned="false" h="80" w="160">Draw function will be executed repeatedly</comment>
          <statement name="STACK">
            <block type="rotate_by_degree" id="8_}(QaWqOTdeq7aK]6~B">
              <value name="degree">
                <block type="math_number" id="=Q$h[lZEU}d^2Fj!h7,">
                  <field name="NUM">4</field>
                </block>
              </value>
              <next>
                <block type="draw_rectangle" id="K4#S/H~dz;G_g$51z4pV">
                  <value name="position_x">
                    <block type="math_number" id="N:^A[SbM2]6lA;wG658">
                      <field name="NUM">0</field>
                    </block>
                  </value>
                  <value name="position_y">
                    <block type="math_number" id="mw}j%}F:5xnJu85Zz-a~">
                      <field name="NUM">0</field>
                    </block>
                  </value>
                  <value name="width">
                    <block type="math_number" id="nr4c7ienpG-V]|Na#!Ch">
                      <field name="NUM">100</field>
                    </block>
                  </value>
                  <value name="height">
                    <block type="math_number" id="ri7t+ZKzUsmnNlTIXvkU">
                      <field name="NUM">100</field>
                    </block>
                  </value>
                  <value name="color">
                    <block type="colour_picker" id="%6w^?.=[6EZRW-t573v">
                      <field name="COLOUR">#993399</field>
                    </block>
                  </value>
                </block>
              </next>
            </block>
          </statement>
        </block>
      </xml>
    `,
    code: `
      var sketch = function(p) {
        p.setup = function() {
          p.createCanvas(350, 350);
          p.background("#fff");
          p.noFill();
          p.noLoop();
        }
        p.draw = function() {
          p.stroke('#993399');
          p.rotate(2*PI / (180 / 4));
          p.rect(0, 0, 100, 100);
        }
      }
      var demo = new p5(sketch, 'demo');
    `,
    toolbox: `
      <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
        <block type="procedures_defnoreturn">
          <field name="NAME">draw</field>
          <comment pinned="false" h="80" w="160">Draw function will be executed repeatedly</comment>
        </block>
        <block type="draw_rectangle" id="K4#S/H~dz;G_g$51z4pV">
          <value name="position_x">
            <block type="math_number" id="N:^A[SbM2]6lA;wG658">
              <field name="NUM">0</field>
            </block>
          </value>
          <value name="position_y">
            <block type="math_number" id="mw}j%}F:5xnJu85Zz-a~">
              <field name="NUM">0</field>
            </block>
          </value>
          <value name="width">
            <block type="math_number" id="nr4c7ienpG-V]|Na#!Ch">
              <field name="NUM">100</field>
            </block>
          </value>
          <value name="height">
            <block type="math_number" id="ri7t+ZKzUsmnNlTIXvkU">
              <field name="NUM">100</field>
            </block>
          </value>
          <value name="color">
            <block type="colour_picker" id="%6w^?.=[6EZRW-t573v">
              <field name="COLOUR">#993399</field>
            </block>
          </value>
        </block>
        <block type="rotate_by_degree">
          <value name="degree">
            <block type="math_number" id="=Q$h[lZEU}d^2Fj!h7,">
              <field name="NUM">4</field>
            </block>
          </value>
        </block>
      </xml>
    `
  }, {
    description: "Can you draw 3 squares rotated by 4 degrees, 8 degrees, and 12 degrees seperately?",
    blocks: `
      <xml xmlns="https://developers.google.com/blockly/xml">
        <block type="procedures_defnoreturn" id="74*21pgDT^fQsZv#gLC" x="127" y="182">
          <field name="NAME">draw</field>
          <comment pinned="false" h="80" w="160">Draw function will be executed repeatedly</comment>
          <statement name="STACK">
            <block type="controls_repeat_ext" id="BvA4Pb(-mkwR//Wx{F*/">
              <value name="TIMES">
                <shadow type="math_number" id="H80E#H@WUWVT593V2J1g">
                  <field name="NUM">3</field>
                </shadow>
              </value>
              <statement name="DO">
                <block type="rotate_by_degree" id="8_}(QaWqOTdeq7aK]6~B">
                  <value name="degree">
                    <block type="math_number" id="=Q$h[lZEU}d^2Fj!h7,">
                      <field name="NUM">4</field>
                    </block>
                  </value>
                  <next>
                    <block type="draw_rectangle" id="K4#S/H~dz;G_g$51z4pV">
                      <value name="position_x">
                        <block type="math_number" id="N:^A[SbM2]6lA;wG658">
                          <field name="NUM">0</field>
                        </block>
                      </value>
                      <value name="position_y">
                        <block type="math_number" id="mw}j%}F:5xnJu85Zz-a~">
                          <field name="NUM">0</field>
                        </block>
                      </value>
                      <value name="width">
                        <block type="math_number" id="nr4c7ienpG-V]|Na#!Ch">
                          <field name="NUM">100</field>
                        </block>
                      </value>
                      <value name="height">
                        <block type="math_number" id="ri7t+ZKzUsmnNlTIXvkU">
                          <field name="NUM">100</field>
                        </block>
                      </value>
                      <value name="color">
                        <block type="colour_picker" id="%6w^?.=[6EZRW-t573v">
                          <field name="COLOUR">#993399</field>
                        </block>
                      </value>
                    </block>
                  </next>
                </block>
              </statement>
            </block>
          </statement>
        </block>
      </xml>
    `,
    code: `
      var sketch = function(p) {
        p.setup = function() {
          p.createCanvas(350, 350);
          p.background("#fff");
          p.noFill();
          p.noLoop();
        }
        p.draw = function() {
          for (var i = 0; i < 3; i++) {
            p.stroke('#993399');
            p.rotate(2*PI / (180 / 4));
            p.rect(0, 0, 100, 100);
          }
        }
      }
      var demo = new p5(sketch, 'demo');
    `,
    toolbox: `
      <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
        <block type="procedures_defnoreturn">
          <field name="NAME">draw</field>
          <comment pinned="false" h="80" w="160">Draw function will be executed repeatedly</comment>
        </block>
        <block type="draw_rectangle" id="K4#S/H~dz;G_g$51z4pV">
          <value name="position_x">
            <block type="math_number" id="N:^A[SbM2]6lA;wG658">
              <field name="NUM">0</field>
            </block>
          </value>
          <value name="position_y">
            <block type="math_number" id="mw}j%}F:5xnJu85Zz-a~">
              <field name="NUM">0</field>
            </block>
          </value>
          <value name="width">
            <block type="math_number" id="nr4c7ienpG-V]|Na#!Ch">
              <field name="NUM">100</field>
            </block>
          </value>
          <value name="height">
            <block type="math_number" id="ri7t+ZKzUsmnNlTIXvkU">
              <field name="NUM">100</field>
            </block>
          </value>
          <value name="color">
            <block type="colour_picker" id="%6w^?.=[6EZRW-t573v">
              <field name="COLOUR">#993399</field>
            </block>
          </value>
        </block>
        <block type="rotate_by_degree">
          <value name="degree">
            <block type="math_number" id="=Q$h[lZEU}d^2Fj!h7,">
              <field name="NUM">4</field>
            </block>
          </value>
        </block>
      </xml>
    `
  }, {
    description: "What if we need to draw 10 squares?",
    blocks: `
      <xml xmlns="https://developers.google.com/blockly/xml">
        <block type="procedures_defnoreturn" id="74*21pgDT^fQsZv#gLC" x="127" y="182">
          <field name="NAME">draw</field>
          <comment pinned="false" h="80" w="160">Draw function will be executed repeatedly</comment>
          <statement name="STACK">
            <block type="controls_repeat_ext" id="BvA4Pb(-mkwR//Wx{F*/">
              <value name="TIMES">
                <shadow type="math_number" id="H80E#H@WUWVT593V2J1g">
                  <field name="NUM">10</field>
                </shadow>
              </value>
              <statement name="DO">
                <block type="rotate_by_degree" id="8_}(QaWqOTdeq7aK]6~B">
                  <value name="degree">
                    <block type="math_number" id="=Q$h[lZEU}d^2Fj!h7,">
                      <field name="NUM">4</field>
                    </block>
                  </value>
                  <next>
                    <block type="draw_rectangle" id="K4#S/H~dz;G_g$51z4pV">
                      <value name="position_x">
                        <block type="math_number" id="N:^A[SbM2]6lA;wG658">
                          <field name="NUM">0</field>
                        </block>
                      </value>
                      <value name="position_y">
                        <block type="math_number" id="mw}j%}F:5xnJu85Zz-a~">
                          <field name="NUM">0</field>
                        </block>
                      </value>
                      <value name="width">
                        <block type="math_number" id="nr4c7ienpG-V]|Na#!Ch">
                          <field name="NUM">100</field>
                        </block>
                      </value>
                      <value name="height">
                        <block type="math_number" id="ri7t+ZKzUsmnNlTIXvkU">
                          <field name="NUM">100</field>
                        </block>
                      </value>
                      <value name="color">
                        <block type="colour_picker" id="%6w^?.=[6EZRW-t573v">
                          <field name="COLOUR">#993399</field>
                        </block>
                      </value>
                    </block>
                  </next>
                </block>
              </statement>
            </block>
          </statement>
        </block>
      </xml>
    `,
    code: `
      var sketch = function(p) {
        p.setup = function() {
          p.createCanvas(350, 350);
          p.background("#fff");
          p.noFill();
          p.noLoop();
        }
        p.draw = function() {
          for (var i = 0; i < 10; i++) {
            p.stroke('#993399');
            p.rotate(2*PI / (180 / 4));
            p.rect(0, 0, 100, 100);
          }
        }
      }
      var demo = new p5(sketch, 'demo');
    `,
    toolbox: `
      <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
        <block type="procedures_defnoreturn">
          <field name="NAME">draw</field>
          <comment pinned="false" h="80" w="160">Draw function will be executed repeatedly</comment>
        </block>
        <block type="draw_rectangle" id="K4#S/H~dz;G_g$51z4pV">
          <value name="position_x">
            <block type="math_number" id="N:^A[SbM2]6lA;wG658">
              <field name="NUM">0</field>
            </block>
          </value>
          <value name="position_y">
            <block type="math_number" id="mw}j%}F:5xnJu85Zz-a~">
              <field name="NUM">0</field>
            </block>
          </value>
          <value name="width">
            <block type="math_number" id="nr4c7ienpG-V]|Na#!Ch">
              <field name="NUM">100</field>
            </block>
          </value>
          <value name="height">
            <block type="math_number" id="ri7t+ZKzUsmnNlTIXvkU">
              <field name="NUM">100</field>
            </block>
          </value>
          <value name="color">
            <block type="colour_picker" id="%6w^?.=[6EZRW-t573v">
              <field name="COLOUR">#993399</field>
            </block>
          </value>
        </block>
        <block type="rotate_by_degree">
          <value name="degree">
            <block type="math_number" id="=Q$h[lZEU}d^2Fj!h7,">
              <field name="NUM">4</field>
            </block>
          </value>
        </block>
        <block type="controls_repeat_ext">
          <value name="TIMES">
            <shadow type="math_number">
              <field name="NUM">40</field>
            </shadow>
          </value>
        </block>
      </xml>
    `
  }, {
    description: "Can we draw from the center of the canvas?",
    blocks: `
      <xml xmlns="https://developers.google.com/blockly/xml">
        <block type="move_to_center" id="*C%j_sgF[|Iw$)/rEA![" x="153" y="156">
          <next>
            <block type="controls_repeat_ext" id="BvA4Pb(-mkwR//Wx{F*/">
              <value name="TIMES">
                <shadow type="math_number" id="H80E#H@WUWVT593V2J1g">
                  <field name="NUM">10</field>
                </shadow>
              </value>
              <statement name="DO">
                <block type="rotate_by_degree" id="8_}(QaWqOTdeq7aK]6~B">
                  <value name="degree">
                    <block type="math_number" id="=Q$h[lZEU}d^2Fj!h7,">
                      <field name="NUM">4</field>
                    </block>
                  </value>
                  <next>
                    <block type="draw_rectangle" id="K4#S/H~dz;G_g$51z4pV">
                      <value name="position_x">
                        <block type="math_number" id="N:^A[SbM2]6lA;wG658">
                          <field name="NUM">0</field>
                        </block>
                      </value>
                      <value name="position_y">
                        <block type="math_number" id="mw}j%}F:5xnJu85Zz-a~">
                          <field name="NUM">0</field>
                        </block>
                      </value>
                      <value name="width">
                        <block type="math_number" id="nr4c7ienpG-V]|Na#!Ch">
                          <field name="NUM">100</field>
                        </block>
                      </value>
                      <value name="height">
                        <block type="math_number" id="ri7t+ZKzUsmnNlTIXvkU">
                          <field name="NUM">100</field>
                        </block>
                      </value>
                      <value name="color">
                        <block type="colour_picker" id="%6w^?.=[6EZRW-t573v">
                          <field name="COLOUR">#993399</field>
                        </block>
                      </value>
                    </block>
                  </next>
                </block>
              </statement>
            </block>
          </next>
        </block>
      </xml>
    `,
    code: `
      var sketch = function(p) {
        p.setup = function() {
          p.createCanvas(350, 350);
          p.background("#fff");
          p.noFill();
          p.noLoop();
        }
        p.draw = function() {
          p.translate(width/2, height/2);
          for (var i = 0; i <= 10; i++) {
            p.stroke('#993399');
            p.rotate(2*PI / (180 / 4));
            p.rect(0, 0, 100, 100);
          }
        }
      }
      var demo = new p5(sketch, 'demo');
    `,
    toolbox: `
      <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
        <block type="procedures_defnoreturn">
          <field name="NAME">draw</field>
          <comment pinned="false" h="80" w="160">Draw function will be executed repeatedly</comment>
        </block>
        <block type="draw_rectangle" id="K4#S/H~dz;G_g$51z4pV">
          <value name="position_x">
            <block type="math_number" id="N:^A[SbM2]6lA;wG658">
              <field name="NUM">0</field>
            </block>
          </value>
          <value name="position_y">
            <block type="math_number" id="mw}j%}F:5xnJu85Zz-a~">
              <field name="NUM">0</field>
            </block>
          </value>
          <value name="width">
            <block type="math_number" id="nr4c7ienpG-V]|Na#!Ch">
              <field name="NUM">100</field>
            </block>
          </value>
          <value name="height">
            <block type="math_number" id="ri7t+ZKzUsmnNlTIXvkU">
              <field name="NUM">100</field>
            </block>
          </value>
          <value name="color">
            <block type="colour_picker" id="%6w^?.=[6EZRW-t573v">
              <field name="COLOUR">#993399</field>
            </block>
          </value>
        </block>
        <block type="rotate_by_degree">
          <value name="degree">
            <block type="math_number" id="=Q$h[lZEU}d^2Fj!h7,">
              <field name="NUM">4</field>
            </block>
          </value>
        </block>
        <block type="controls_repeat_ext">
          <value name="TIMES">
            <shadow type="math_number">
              <field name="NUM">40</field>
            </shadow>
          </value>
        </block>
        <block type="move_to_center"></block>
      </xml>
    `
  }, {
    tips: [
      "Can you draw like the demo?"
    ],
    description: "Can you draw like the demo?",
    blocks: `
      <xml xmlns="https://developers.google.com/blockly/xml">
        <variables>
          <variable id="AGenXV]55]#?X1M%8$HZ">degree</variable>
        </variables>
        <block type="variables_set" id="T2RQf4D:QJVP2fu$ADx^" x="133" y="27">
          <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">degree</field>
          <value name="VALUE">
            <block type="math_number" id="e8}kSiAKa0X*_%5{m{+m">
              <field name="NUM">0</field>
            </block>
          </value>
        </block>
        <block type="procedures_defnoreturn" id=",D5C6xD,jZlnFK-)W#KY" x="124" y="171">
          <field name="NAME">degree</field>
          <comment pinned="false" h="80" w="160">Draw function will be executed repeatedly</comment>
          <statement name="STACK">
            <block type="move_to_center" id="*C%j_sgF[|Iw$)/rEA![">
              <next>
                <block type="rotate_by_degree" id="8_}(QaWqOTdeq7aK]6~B">
                  <value name="degree">
                    <block type="variables_get" id="L{x|m(tE,e=0m|4pyvs}">
                      <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">draw</field>
                    </block>
                  </value>
                  <next>
                    <block type="draw_rectangle" id="K4#S/H~dz;G_g$51z4pV">
                      <value name="position_x">
                        <block type="math_number" id="N:^A[SbM2]6lA;wG658">
                          <field name="NUM">30</field>
                        </block>
                      </value>
                      <value name="position_y">
                        <block type="math_number" id="mw}j%}F:5xnJu85Zz-a~">
                          <field name="NUM">30</field>
                        </block>
                      </value>
                      <value name="width">
                        <block type="math_number" id="nr4c7ienpG-V]|Na#!Ch">
                          <field name="NUM">100</field>
                        </block>
                      </value>
                      <value name="height">
                        <block type="math_number" id="ri7t+ZKzUsmnNlTIXvkU">
                          <field name="NUM">100</field>
                        </block>
                      </value>
                      <value name="color">
                        <block type="colour_picker" id="%6w^?.=[6EZRW-t573v">
                          <field name="COLOUR">#993399</field>
                        </block>
                      </value>
                      <next>
                        <block type="math_change" id="*:gBYFVQ#)cVfHm)jg?M">
                          <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">draw</field>
                          <value name="DELTA">
                            <shadow type="math_number" id="w-$F:6Xe4$7zY0lk%E1_">
                              <field name="NUM">4</field>
                            </shadow>
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
      </xml>
    `,
    code: `
      var sketch = function(p) {
        var t = 0;
        p.setup = function() {
          p.createCanvas(350, 350);
          p.background("#fff");
          p.noFill();
        }
        p.draw = function() {
          p.translate(width/2, height/2);
          p.stroke('#993399');
          p.rotate(2*PI / (180 / t));
          p.rect(30, 30, 100, 100);
          t += 4;
        }
      }
      var demo = new p5(sketch, 'demo');
    `,
    toolbox: `
      <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
        <block type="procedures_defnoreturn">
          <field name="NAME">draw</field>
          <comment pinned="false" h="80" w="160">Draw function will be executed repeatedly</comment>
        </block>
        <block type="draw_rectangle" id="K4#S/H~dz;G_g$51z4pV">
          <value name="position_x">
            <block type="math_number" id="N:^A[SbM2]6lA;wG658">
              <field name="NUM">0</field>
            </block>
          </value>
          <value name="position_y">
            <block type="math_number" id="mw}j%}F:5xnJu85Zz-a~">
              <field name="NUM">0</field>
            </block>
          </value>
          <value name="width">
            <block type="math_number" id="nr4c7ienpG-V]|Na#!Ch">
              <field name="NUM">100</field>
            </block>
          </value>
          <value name="height">
            <block type="math_number" id="ri7t+ZKzUsmnNlTIXvkU">
              <field name="NUM">100</field>
            </block>
          </value>
          <value name="color">
            <block type="colour_picker" id="%6w^?.=[6EZRW-t573v">
              <field name="COLOUR">#993399</field>
            </block>
          </value>
        </block>
        <block type="rotate_by_degree">
          <value name="degree">
            <block type="math_number" id="=Q$h[lZEU}d^2Fj!h7,">
              <field name="NUM">4</field>
            </block>
          </value>
        </block>
        <block type="controls_repeat_ext">
          <value name="TIMES">
            <shadow type="math_number">
              <field name="NUM">40</field>
            </shadow>
          </value>
        </block>
        <block type="move_to_center"></block>
      </xml>
    `
  }
];

let toolbox = `
  <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
    <block type="procedures_defnoreturn">
      <field name="NAME">draw</field>
      <comment pinned="false" h="80" w="160">Draw function will be executed repeatedly</comment>
    </block>
    <block type="variables_set">
      <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">degree</field>
    </block>
    <block type="math_change">
      <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">degree</field>
      <value name="DELTA">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
    </block>
    <block type="variables_get">
      <field name="VAR" id="AGenXV]55]#?X1M%8$HZ">degree</field>
    </block>
    <block type="move_to_center"></block>
    <block type="draw_rectangle" id="K4#S/H~dz;G_g$51z4pV">
      <value name="position_x">
        <block type="math_number" id="N:^A[SbM2]6lA;wG658">
          <field name="NUM">0</field>
        </block>
      </value>
      <value name="position_y">
        <block type="math_number" id="mw}j%}F:5xnJu85Zz-a~">
          <field name="NUM">0</field>
        </block>
      </value>
      <value name="width">
        <block type="math_number" id="nr4c7ienpG-V]|Na#!Ch">
          <field name="NUM">100</field>
        </block>
      </value>
      <value name="height">
        <block type="math_number" id="ri7t+ZKzUsmnNlTIXvkU">
          <field name="NUM">100</field>
        </block>
      </value>
      <value name="color">
        <block type="colour_picker" id="%6w^?.=[6EZRW-t573v">
          <field name="COLOUR">#993399</field>
        </block>
      </value>
    </block>
    <block type="rotate_by_degree">
      <value name="degree">
        <block type="math_number" id="=Q$h[lZEU}d^2Fj!h7,">
          <field name="NUM">4</field>
        </block>
      </value>
    </block>
    <block type="math_number">
      <field name="NUM">0</field>
    </block>
    <block type="controls_repeat_ext">
      <value name="TIMES">
        <shadow type="math_number">
          <field name="NUM">40</field>
        </shadow>
      </value>
    </block>
    <block type="colour_picker">
      <field name="COLOUR">#BA1BBE</field>
    </block>
  </xml>
`

document.addEventListener("DOMContentLoaded", function () {
  let currentChallenge = null;

  const buttons = document.getElementsByClassName('challenge_button');
  Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (event) => {
      const challegeIndex = event.target.dataset.index;
      currentChallenge = challegeIndex;
      document.getElementById('challangeDes').innerHTML = `Challenge ${challegeIndex}: ` + challenges[challegeIndex].description;
      const code = challenges[challegeIndex].code;

      const div = document.getElementById('demo');
      div.removeChild(div.firstChild);
      eval(code);

      const toolbox = challenges[challegeIndex].toolbox;
      workspace.updateToolbox(toolbox);
    })
  });

  const workspace = Blockly.inject('blocklyDiv',
    {
      toolbox: toolbox,
      media: 'media/'
    });

  const lang = 'JavaScript';
  const button = document.getElementById('blocklyButton');

  button.addEventListener('click', function () {
    window.draw = function() {
      background("#fff");
    }
    var xml = Blockly.Xml.workspaceToDom(workspace);
    var xml_text = Blockly.Xml.domToPrettyText(xml);
    console.log(xml_text);
    var code = Blockly[lang].workspaceToCode(workspace);
    console.log(code)
    var geval = eval;
    try {
      geval(code);
    } catch (e) {
      alert(e);
    }
  });

  const answerButton = document.getElementById('answerButton');
  answerButton.addEventListener('click', function() {
    if (currentChallenge !== null) {
      const blocks = challenges[currentChallenge].blocks;
      var xml = Blockly.Xml.textToDom(blocks);
      Blockly.Xml.domToWorkspace(xml, workspace);
    }
  });

  let randomIndex = 0;
  const randomButton = document.getElementById('randomButton');
  randomButton.addEventListener('click', function() {
    document.getElementById('challangeDes').innerHTML = `We can draw many kinds of pictures by using loop and rectangle function.`;
    document.getElementById('clearButton').click();
    workspace.clear();
    const blocks = randomChallenges[randomIndex].blocks;
    let xml = Blockly.Xml.textToDom(blocks);
    Blockly.Xml.domToWorkspace(xml, workspace);
    randomIndex += 1
    if (randomIndex >= randomChallenges.length) {
      randomIndex = 0;
    }
    var code = Blockly[lang].workspaceToCode(workspace);
    var geval = eval;
    try {
      geval(code);
    } catch (e) {
      alert(e);
    }
  });
});
