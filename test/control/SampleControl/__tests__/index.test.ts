import { SampleControl } from '..';
import { IInputs } from '../generated/ManifestTypes';
import { MockContext, MockState } from '../__mocks__/mock-context';
import { getMockParameters } from '../__mocks__/mock-parameters';

describe('Lifecycle events', () => {
  beforeEach(() => jest.clearAllMocks());

  it('init without error', () => {
    const { component, context, notifyOutputChanged, state, container } = createComponent();
    component.init(context, notifyOutputChanged, state, container);
  });

  it('updateView without error', () => {
    const { component, context, notifyOutputChanged, state, container } = createComponent();
    component.init(context, notifyOutputChanged, state, container);
    component.updateView(context);
  });

  it('getOutputs without error', () => {
    const { component, context, notifyOutputChanged, state, container } = createComponent();
    component.init(context, notifyOutputChanged, state, container);
    const outputs = component.getOutputs();
  });

  it('destroy without error', () => {
    const { component, context, notifyOutputChanged, state, container } = createComponent();
    component.init(context, notifyOutputChanged, state, container);
    component.destroy();
  });
});

function createComponent() {
  const component = new SampleControl();
  const notifyOutputChanged = jest.fn();
  const context = new MockContext<IInputs>(getMockParameters());
  const state = new MockState();
  const container = document.createElement("div");
  document.body.appendChild(container);
  return { component, context, notifyOutputChanged, state, container };
}
