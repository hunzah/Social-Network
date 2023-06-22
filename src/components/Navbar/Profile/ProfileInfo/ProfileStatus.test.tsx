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
        test('after creation span should be displayed with correct status ', () => {
            const component = create(<ProfileStatus status={'myau'} updateStatus={() => {
            }} value={'ds'}/>)
            const root = component.root
            const span = root.findAllByType('span')
            // @ts-ignore
            expect(span.text).not.toBeNull()
        }),
        test('after creation span should be displayed with correct status ', () => {
            const component = create(<ProfileStatus status={'myau'} updateStatus={() => {
            }} value={'ds'}/>)
            const root = component.root
            const span = root.findAllByType('span')
            // @ts-ignore
            expect(span.innerText).toBe('myau')
        })
})