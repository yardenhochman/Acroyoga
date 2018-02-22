import { checks } from './helpers';

const pose = {
	id: 1,
	difficulty: 'Easy',
};
const lists = {
	Favorites: [1, 2, 3],
};

test('check if pose exists in users favorites list', () => {
	expect(checks(pose, true, lists, 'Easy')).toBe(true);
});
