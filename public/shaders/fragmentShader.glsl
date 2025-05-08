precision highp float;
precision highp int;
uniform sampler2D tWater;
uniform sampler2D tFlow;
uniform float uTime;
varying vec2 vUv;
uniform vec4 res;

void main() {
  vec3 flow = texture2D(tFlow, vUv).rgb;
  vec2 myUV = vUv - flow.xy * 0.3; 
  vec3 tex = texture2D(tWater, myUV).rgb;

  gl_FragColor = vec4(tex, 1.0);
}
