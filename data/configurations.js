// Main n = 63, Ku = 0.002 Torus batch. Mode assets are added per configuration.
window.HopfionConfigurations = [
  ['a1-1', 'A1,1'], ['a1-2', 'A1,2'], ['a1-3', 'A1,3'], ['a1-4', 'A1,4'],
  ['a1-5', 'A1,5'], ['a2-1', 'A2,1'], ['a2-2', 'A2,2'], ['a2-3', 'A2,3'],
  ['a2-4', 'A2,4'], ['a3-1', 'A3,1'], ['a3-2', 'A3,2'], ['a4-1', 'A4,1'],
  ['a4-2', 'A4,2'], ['a5-1', 'A5,1'], ['a6-1', 'A6,1'], ['a7-1', 'A7,1'],
  ['a8-1', 'A8,1'],
].map(([id, name]) => ({
  id,
  name,
  n: 63,
  ku: 0.002,
  modeCount: 10,
  phaseCount: 30,
  framesPerSecond: 10,
  modes: id === 'a1-1' ? window.HopfionModeCatalog.modes : [],
}));
