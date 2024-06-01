import * as Luxon from 'luxon';
const { DateTime } = Luxon;

const getYear = (): number => {
	return DateTime.now().year;
};

export { getYear };
