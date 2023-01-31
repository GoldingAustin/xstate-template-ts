import { createMachine } from 'xstate';

interface ToggleContext {
  count: number;
}

type ToggleEvent = {
  type: 'TOGGLE';
};

// Edit your machine(s) here
export const machine = createMachine({
  id: 'machine',
  initial: 'inactive',
  tsTypes: {},
  schemas: {
    context: {} as ToggleContext,
    events: {} as ToggleEvent
  },
  context: {
    count: 0
  },
  states: {
    inactive: {
      on: { TOGGLE: 'active' }
    },
    active: {
      on: { TOGGLE: 'inactive' }
    }
  }
});
