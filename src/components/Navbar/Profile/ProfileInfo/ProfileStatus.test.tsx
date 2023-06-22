import {create} from 'react-test-renderer';
import {ProfileStatus} from './ProfileStatus';

describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status={'myau'} updateStatus={() => {
        }} value={'ds'}/>)
        const instance = component.getInstance()
        // @ts-ignore
        expect(instance?.state.status).toBe('myau')
    }),
        test('after creation span should be displayed with correct status ', () => {
            const component = create(<ProfileStatus status={'myau'} updateStatus={() => {
            }} value={'ds'}/>)
            const root = component.root
            const input = root.findAllByType('input')
            // @ts-ignore
            expect(input.text).toBeUndefined()
        }),
        test('span shouldn\'t to be null', () => {
            const component = create(<ProfileStatus status={'myau'} updateStatus={() => {
            }} value={'ds'}/>)
            const root = component.root
            const span = root.findAllByType('span')
            // @ts-ignore
            expect(span.text).not.toBeNull()
        }),
        test('input should be displayed in editMode instead of span ', () => {
            const component = create(<ProfileStatus status={'myau'} updateStatus={() => {
            }} value={'ds'}/>)
            const root = component.root
            const span = root.findByType('span')
            span.props.onDoubleClick()
            const input = root.findByType('input')

            // @ts-ignore
            expect(span.text).not.toBeNull()
            expect(input.props.value).toBe('myau')

        }),
        test('after creation span should be displayed with correct status ', () => {
            const component = create(<ProfileStatus status={'myau'} updateStatus={() => {
            }} value={'ds'}/>)
            const root = component.root
            const span = root.findAllByType('span')
            // @ts-ignore
            expect(span.innerText).toBe('myau')
        }),
        test('how many times callback will be called', () => {
            const mockCallback = jest.fn();
            const component = create(<ProfileStatus status={'myau'} updateStatus={mockCallback} value={'ds'}/>);
            const instance = component.getInstance();
            // @ts-ignore
            instance.deActivateEditMode();
            expect(mockCallback.mock.calls.length).toBe(1);
        });
})