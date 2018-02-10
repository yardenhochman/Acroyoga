import Radium from 'radium';
import prefixAll from 'radium-plugin-prefix-all';

function ConfiguredRadium(component) {
  return Radium({
    plugins: [
      Radium.Plugins.mergeStyleArray,
      Radium.Plugins.checkProps,
      Radium.Plugins.resolveMediaQueries,
      Radium.Plugins.resolveInteractionStyles,
      Radium.Plugins.prefix,

      prefixAll,

      Radium.Plugins.checkProps,
    ],
  })(component);
}

export default ConfiguredRadium;
