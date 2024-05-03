import type { PlaywrightTestArgs } from '@playwright/test';
import type { GwtDefinition } from 'gwt-runner';
import gwtRunner from 'gwt-runner';

export { TestContext } from 'gwt-runner';

export type PlaywrightContext = PlaywrightTestArgs;

const configureContext = (
  context: Partial<PlaywrightContext>,
  args: any,
) => {
  Object.entries(args).forEach(([v, k]) => {
    (context as any)[v] = k;
  });
};

export default <TContext>(
  args: Partial<PlaywrightContext>,
  def: GwtDefinition<TContext>,
) => {
  const runner = (name: any, callback: any) => callback(args);

  return gwtRunner(runner, configureContext)('', def);
};
