import test from 'jest-gwt';
import type { GwtDefinition } from 'gwt-runner';
import type { PlaywrightContext } from './index';
import binding from './index';

describe('binding', () => {
  test('test', {
    given: {
      playwright_fixtures,
      gwt_definition,
    },
    when: {
      running_gwt,
    },
  });
});

type Context = {
  fixtures: Partial<PlaywrightContext>,

  gwt_definition: GwtDefinition<any>
};

function playwright_fixtures(this: Context) {
  this.fixtures = {
    page: {} as any,
  };
}

function gwt_definition(this: Context) {
  this.gwt_definition = {
    then: {
      context_has_page,
    },
  };
}

function running_gwt(this: Context) {
  binding(this.fixtures, this.gwt_definition);
}

function context_has_page(this: any) {
  expect(this.page).toBeDefined();
}
